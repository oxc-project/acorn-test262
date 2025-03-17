__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 103,
  "end": 1048,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 103,
      "end": 255,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 122,
        "name": "BugExhibition",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 126,
        "end": 255,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 132,
            "end": 253,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 149,
              "name": "exhibitBug",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 149,
              "end": 253,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 152,
                "end": 253,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 162,
                    "end": 190,
                    "id": {
                      "type": "Identifier",
                      "start": 171,
                      "end": 184,
                      "name": "localFunction",
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
                      "start": 187,
                      "end": 190,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 199,
                    "end": 220,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 203,
                        "end": 219,
                        "id": {
                          "type": "Identifier",
                          "start": 203,
                          "end": 219,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 204,
                            "end": 219,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 206,
                              "end": 219,
                              "members": [
                                {
                                  "type": "TSCallSignatureDeclaration",
                                  "start": 208,
                                  "end": 217,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "start": 210,
                                    "end": 216,
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "start": 212,
                                      "end": 216
                                    }
                                  }
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
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 229,
                    "end": 247,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 229,
                      "end": 246,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 229,
                        "end": 230,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 233,
                        "end": 246,
                        "name": "localFunction",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 122,
        "end": 125,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 123,
            "end": 124,
            "name": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 257,
      "end": 443,
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 277,
        "name": "BugExhibition2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 281,
        "end": 443,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 287,
            "end": 441,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 306,
              "end": 316,
              "name": "exhibitBug",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 316,
              "end": 441,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 319,
                "end": 441,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 329,
                    "end": 357,
                    "id": {
                      "type": "Identifier",
                      "start": 338,
                      "end": 351,
                      "name": "localFunction",
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
                      "start": 354,
                      "end": 357,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 366,
                    "end": 387,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 370,
                        "end": 386,
                        "id": {
                          "type": "Identifier",
                          "start": 370,
                          "end": 386,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 371,
                            "end": 386,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 373,
                              "end": 386,
                              "members": [
                                {
                                  "type": "TSCallSignatureDeclaration",
                                  "start": 375,
                                  "end": 384,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "start": 377,
                                    "end": 383,
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "start": 379,
                                      "end": 383
                                    }
                                  }
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
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 396,
                    "end": 414,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 396,
                      "end": 413,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 396,
                        "end": 397,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 400,
                        "end": 413,
                        "name": "localFunction",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 423,
                    "end": 435,
                    "argument": {
                      "type": "Literal",
                      "start": 430,
                      "end": 434,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 277,
        "end": 280,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 278,
            "end": 279,
            "name": {
              "type": "Identifier",
              "start": 278,
              "end": 279,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 445,
      "end": 620,
      "id": {
        "type": "Identifier",
        "start": 451,
        "end": 465,
        "name": "BugExhibition3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 469,
        "end": 620,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 475,
            "end": 618,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 482,
              "end": 492,
              "name": "exhibitBug",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 492,
              "end": 618,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 495,
                "end": 618,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 505,
                    "end": 548,
                    "id": {
                      "type": "Identifier",
                      "start": 514,
                      "end": 534,
                      "name": "localGenericFunction",
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
                        "start": 538,
                        "end": 543,
                        "name": "u",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 540,
                          "end": 543,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 542,
                            "end": 543,
                            "typeName": {
                              "type": "Identifier",
                              "start": 542,
                              "end": 543,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 545,
                      "end": 548,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 534,
                      "end": 537,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 535,
                          "end": 536,
                          "name": {
                            "type": "Identifier",
                            "start": 535,
                            "end": 536,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "returnType": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 557,
                    "end": 578,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 561,
                        "end": 577,
                        "id": {
                          "type": "Identifier",
                          "start": 561,
                          "end": 577,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 562,
                            "end": 577,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 564,
                              "end": 577,
                              "members": [
                                {
                                  "type": "TSCallSignatureDeclaration",
                                  "start": 566,
                                  "end": 575,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "start": 568,
                                    "end": 574,
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "start": 570,
                                      "end": 574
                                    }
                                  }
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
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 587,
                    "end": 612,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 587,
                      "end": 611,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 587,
                        "end": 588,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 591,
                        "end": 611,
                        "name": "localGenericFunction",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 465,
        "end": 468,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 466,
            "end": 467,
            "name": {
              "type": "Identifier",
              "start": 466,
              "end": 467,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 622,
      "end": 749,
      "id": {
        "type": "Identifier",
        "start": 628,
        "end": 629,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 630,
        "end": 749,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 636,
            "end": 747,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 636,
              "end": 643,
              "name": "exhibit",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 643,
              "end": 747,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 646,
                "end": 747,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 656,
                    "end": 689,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 660,
                        "end": 688,
                        "id": {
                          "type": "Identifier",
                          "start": 660,
                          "end": 668,
                          "name": "funcExpr",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 671,
                          "end": 688,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 675,
                              "end": 680,
                              "name": "u",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 677,
                                "end": 680,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 679,
                                  "end": 680,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 679,
                                    "end": 680,
                                    "name": "U",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              "decorators": [],
                              "optional": true
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 685,
                            "end": 688,
                            "body": []
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 671,
                            "end": 674,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 672,
                                "end": 673,
                                "name": {
                                  "type": "Identifier",
                                  "start": 672,
                                  "end": 673,
                                  "name": "U",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false
                              }
                            ]
                          },
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 698,
                    "end": 719,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 702,
                        "end": 718,
                        "id": {
                          "type": "Identifier",
                          "start": 702,
                          "end": 718,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 703,
                            "end": 718,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 705,
                              "end": 718,
                              "members": [
                                {
                                  "type": "TSCallSignatureDeclaration",
                                  "start": 707,
                                  "end": 716,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "start": 709,
                                    "end": 715,
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "start": 711,
                                      "end": 715
                                    }
                                  }
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
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 728,
                    "end": 741,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 728,
                      "end": 740,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 728,
                        "end": 729,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 732,
                        "end": 740,
                        "name": "funcExpr",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 751,
      "end": 898,
      "id": {
        "type": "Identifier",
        "start": 758,
        "end": 759,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 760,
        "end": 898,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 766,
            "end": 896,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 773,
              "end": 896,
              "id": {
                "type": "Identifier",
                "start": 782,
                "end": 792,
                "name": "exhibitBug",
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
                "start": 795,
                "end": 896,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 805,
                    "end": 833,
                    "id": {
                      "type": "Identifier",
                      "start": 814,
                      "end": 827,
                      "name": "localFunction",
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
                      "start": 830,
                      "end": 833,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 842,
                    "end": 863,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 846,
                        "end": 862,
                        "id": {
                          "type": "Identifier",
                          "start": 846,
                          "end": 862,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 847,
                            "end": 862,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 849,
                              "end": 862,
                              "members": [
                                {
                                  "type": "TSCallSignatureDeclaration",
                                  "start": 851,
                                  "end": 860,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "start": 853,
                                    "end": 859,
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "start": 855,
                                      "end": 859
                                    }
                                  }
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
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 872,
                    "end": 890,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 872,
                      "end": 889,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 872,
                        "end": 873,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 876,
                        "end": 889,
                        "name": "localFunction",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 900,
      "end": 1048,
      "id": {
        "type": "Identifier",
        "start": 905,
        "end": 906,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 913,
          "end": 1046,
          "id": {
            "type": "Identifier",
            "start": 913,
            "end": 914,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "CallExpression",
            "start": 917,
            "end": 1046,
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 918,
              "end": 1043,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 924,
                "end": 1043,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 934,
                    "end": 962,
                    "id": {
                      "type": "Identifier",
                      "start": 943,
                      "end": 956,
                      "name": "localFunction",
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
                      "start": 959,
                      "end": 962,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 971,
                    "end": 992,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 975,
                        "end": 991,
                        "id": {
                          "type": "Identifier",
                          "start": 975,
                          "end": 991,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 976,
                            "end": 991,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 978,
                              "end": 991,
                              "members": [
                                {
                                  "type": "TSCallSignatureDeclaration",
                                  "start": 980,
                                  "end": 989,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "start": 982,
                                    "end": 988,
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "start": 984,
                                      "end": 988
                                    }
                                  }
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
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1001,
                    "end": 1019,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 1001,
                      "end": 1018,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 1001,
                        "end": 1002,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1005,
                        "end": 1018,
                        "name": "localFunction",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1028,
                    "end": 1037,
                    "argument": {
                      "type": "Literal",
                      "start": 1035,
                      "end": 1036,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 907,
        "end": 1048,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 913,
            "end": 1046,
            "id": {
              "type": "Identifier",
              "start": 913,
              "end": 914,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "CallExpression",
              "start": 917,
              "end": 1046,
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 918,
                "end": 1043,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 924,
                  "end": 1043,
                  "body": [
                    {
                      "type": "FunctionDeclaration",
                      "start": 934,
                      "end": 962,
                      "id": {
                        "type": "Identifier",
                        "start": 943,
                        "end": 956,
                        "name": "localFunction",
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
                        "start": 959,
                        "end": 962,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    {
                      "type": "VariableDeclaration",
                      "start": 971,
                      "end": 992,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 975,
                          "end": 991,
                          "id": {
                            "type": "Identifier",
                            "start": 975,
                            "end": 991,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 976,
                              "end": 991,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 978,
                                "end": 991,
                                "members": [
                                  {
                                    "type": "TSCallSignatureDeclaration",
                                    "start": 980,
                                    "end": 989,
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 982,
                                      "end": 988,
                                      "typeAnnotation": {
                                        "type": "TSVoidKeyword",
                                        "start": 984,
                                        "end": 988
                                      }
                                    }
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
                      "kind": "var",
                      "declare": false
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 1001,
                      "end": 1019,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 1001,
                        "end": 1018,
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "start": 1001,
                          "end": 1002,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 1005,
                          "end": 1018,
                          "name": "localFunction",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "directive": null
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 1028,
                      "end": 1037,
                      "argument": {
                        "type": "Literal",
                        "start": 1035,
                        "end": 1036,
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "computed": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
