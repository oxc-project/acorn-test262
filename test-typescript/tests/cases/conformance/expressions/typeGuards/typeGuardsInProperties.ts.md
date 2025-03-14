typeGuardsInProperties.ts
```json
{
  "type": "Program",
  "start": 138,
  "end": 859,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 154,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 153,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 153,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 153,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 147,
                "end": 153
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
      "type": "VariableDeclaration",
      "start": 155,
      "end": 185,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 184,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 184,
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 184,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 169,
                "end": 184,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 169,
                    "end": 175
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 178,
                    "end": 184
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
      "type": "ClassDeclaration",
      "start": 186,
      "end": 603,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 195,
        "end": 603,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 201,
            "end": 230,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 212,
              "decorators": [],
              "name": "pp1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 212,
              "end": 229,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 214,
                "end": 229,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 214,
                    "end": 220
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 223,
                    "end": 229
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 235,
            "end": 256,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 235,
              "end": 238,
              "decorators": [],
              "name": "pp2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 238,
              "end": 255,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 240,
                "end": 255,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 240,
                    "end": 246
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 249,
                    "end": 255
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 298,
            "end": 340,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 302,
              "end": 305,
              "decorators": [],
              "name": "pp3",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 305,
              "end": 340,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 308,
                "end": 340,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 318,
                    "end": 334,
                    "argument": {
                      "type": "Identifier",
                      "start": 325,
                      "end": 333,
                      "decorators": [],
                      "name": "strOrNum",
                      "optional": false
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
            "start": 345,
            "end": 601,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 345,
              "end": 351,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 351,
              "end": 601,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 354,
                "end": 601,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 364,
                    "end": 416,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 364,
                      "end": 415,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 364,
                        "end": 372,
                        "decorators": [],
                        "name": "strOrNum",
                        "optional": false
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 375,
                        "end": 415,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 375,
                          "end": 403,
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 375,
                            "end": 390,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 382,
                              "end": 390,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 382,
                                "end": 386
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 387,
                                "end": 390,
                                "decorators": [],
                                "name": "pp1",
                                "optional": false
                              }
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 395,
                            "end": 403,
                            "raw": "\"string\"",
                            "value": "string"
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 407,
                          "end": 415,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 407,
                            "end": 411
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 412,
                            "end": 415,
                            "decorators": [],
                            "name": "pp1",
                            "optional": false
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 444,
                    "end": 496,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 444,
                      "end": 495,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 444,
                        "end": 452,
                        "decorators": [],
                        "name": "strOrNum",
                        "optional": false
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 455,
                        "end": 495,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 455,
                          "end": 483,
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 455,
                            "end": 470,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 462,
                              "end": 470,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 462,
                                "end": 466
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 467,
                                "end": 470,
                                "decorators": [],
                                "name": "pp2",
                                "optional": false
                              }
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 475,
                            "end": 483,
                            "raw": "\"string\"",
                            "value": "string"
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 487,
                          "end": 495,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 487,
                            "end": 491
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 492,
                            "end": 495,
                            "decorators": [],
                            "name": "pp2",
                            "optional": false
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 524,
                    "end": 576,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 524,
                      "end": 575,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 524,
                        "end": 532,
                        "decorators": [],
                        "name": "strOrNum",
                        "optional": false
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 535,
                        "end": 575,
                        "operator": "&&",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 535,
                          "end": 563,
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 535,
                            "end": 550,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 542,
                              "end": 550,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 542,
                                "end": 546
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 547,
                                "end": 550,
                                "decorators": [],
                                "name": "pp3",
                                "optional": false
                              }
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 555,
                            "end": 563,
                            "raw": "\"string\"",
                            "value": "string"
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 567,
                          "end": 575,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 567,
                            "end": 571
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 572,
                            "end": 575,
                            "decorators": [],
                            "name": "pp3",
                            "optional": false
                          }
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
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 194,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 604,
      "end": 615,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 608,
          "end": 614,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 608,
            "end": 614,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 610,
              "end": 614,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 612,
                "end": 614,
                "typeName": {
                  "type": "Identifier",
                  "start": 612,
                  "end": 614,
                  "decorators": [],
                  "name": "C1",
                  "optional": false
                }
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
      "type": "ExpressionStatement",
      "start": 616,
      "end": 664,
      "expression": {
        "type": "AssignmentExpression",
        "start": 616,
        "end": 663,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 616,
          "end": 624,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 627,
          "end": 663,
          "operator": "&&",
          "left": {
            "type": "BinaryExpression",
            "start": 627,
            "end": 653,
            "operator": "===",
            "left": {
              "type": "UnaryExpression",
              "start": 627,
              "end": 640,
              "argument": {
                "type": "MemberExpression",
                "start": 634,
                "end": 640,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 634,
                  "end": 636,
                  "decorators": [],
                  "name": "c1",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 637,
                  "end": 640,
                  "decorators": [],
                  "name": "pp2",
                  "optional": false
                }
              },
              "operator": "typeof",
              "prefix": true
            },
            "right": {
              "type": "Literal",
              "start": 645,
              "end": 653,
              "raw": "\"string\"",
              "value": "string"
            }
          },
          "right": {
            "type": "MemberExpression",
            "start": 657,
            "end": 663,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 657,
              "end": 659,
              "decorators": [],
              "name": "c1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 660,
              "end": 663,
              "decorators": [],
              "name": "pp2",
              "optional": false
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 684,
      "end": 732,
      "expression": {
        "type": "AssignmentExpression",
        "start": 684,
        "end": 731,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 684,
          "end": 692,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 695,
          "end": 731,
          "operator": "&&",
          "left": {
            "type": "BinaryExpression",
            "start": 695,
            "end": 721,
            "operator": "===",
            "left": {
              "type": "UnaryExpression",
              "start": 695,
              "end": 708,
              "argument": {
                "type": "MemberExpression",
                "start": 702,
                "end": 708,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 702,
                  "end": 704,
                  "decorators": [],
                  "name": "c1",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 705,
                  "end": 708,
                  "decorators": [],
                  "name": "pp3",
                  "optional": false
                }
              },
              "operator": "typeof",
              "prefix": true
            },
            "right": {
              "type": "Literal",
              "start": 713,
              "end": 721,
              "raw": "\"string\"",
              "value": "string"
            }
          },
          "right": {
            "type": "MemberExpression",
            "start": 725,
            "end": 731,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 725,
              "end": 727,
              "decorators": [],
              "name": "c1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 728,
              "end": 731,
              "decorators": [],
              "name": "pp3",
              "optional": false
            }
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 752,
      "end": 790,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 756,
          "end": 789,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 756,
            "end": 789,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 760,
              "end": 789,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 762,
                "end": 789,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 768,
                    "end": 787,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 768,
                      "end": 769,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 769,
                      "end": 786,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 771,
                        "end": 786,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 771,
                            "end": 777
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 780,
                            "end": 786
                          }
                        ]
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
      "type": "ExpressionStatement",
      "start": 791,
      "end": 839,
      "expression": {
        "type": "AssignmentExpression",
        "start": 791,
        "end": 838,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 791,
          "end": 799,
          "decorators": [],
          "name": "strOrNum",
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 802,
          "end": 838,
          "operator": "&&",
          "left": {
            "type": "BinaryExpression",
            "start": 802,
            "end": 828,
            "operator": "===",
            "left": {
              "type": "UnaryExpression",
              "start": 802,
              "end": 815,
              "argument": {
                "type": "MemberExpression",
                "start": 809,
                "end": 815,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 809,
                  "end": 813,
                  "decorators": [],
                  "name": "obj1",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 814,
                  "end": 815,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
              "operator": "typeof",
              "prefix": true
            },
            "right": {
              "type": "Literal",
              "start": 820,
              "end": 828,
              "raw": "\"string\"",
              "value": "string"
            }
          },
          "right": {
            "type": "MemberExpression",
            "start": 832,
            "end": 838,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 832,
              "end": 836,
              "decorators": [],
              "name": "obj1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 837,
              "end": 838,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
