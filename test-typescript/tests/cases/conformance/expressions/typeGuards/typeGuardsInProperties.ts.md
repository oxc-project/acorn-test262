__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 153,
            "name": "num",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 153,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 147,
                "end": 153
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
      "type": "VariableDeclaration",
      "start": 155,
      "end": 185,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 184,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 184,
            "name": "strOrNum",
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
      "type": "ClassDeclaration",
      "start": 186,
      "end": 603,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 194,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 195,
        "end": 603,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 201,
            "end": 230,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 212,
              "name": "pp1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 235,
            "end": 256,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 235,
              "end": 238,
              "name": "pp2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 298,
            "end": 340,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 302,
              "end": 305,
              "name": "pp3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 305,
              "end": 340,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "name": "strOrNum",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 345,
            "end": 601,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 345,
              "end": 351,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 351,
              "end": 601,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "strOrNum",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 375,
                        "end": 415,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 375,
                          "end": 403,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 375,
                            "end": 390,
                            "operator": "typeof",
                            "prefix": true,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 382,
                              "end": 390,
                              "object": {
                                "type": "ThisExpression",
                                "start": 382,
                                "end": 386
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 387,
                                "end": 390,
                                "name": "pp1",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "start": 395,
                            "end": 403,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 407,
                          "end": 415,
                          "object": {
                            "type": "ThisExpression",
                            "start": 407,
                            "end": 411
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 412,
                            "end": 415,
                            "name": "pp1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      }
                    },
                    "directive": null
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
                        "name": "strOrNum",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 455,
                        "end": 495,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 455,
                          "end": 483,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 455,
                            "end": 470,
                            "operator": "typeof",
                            "prefix": true,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 462,
                              "end": 470,
                              "object": {
                                "type": "ThisExpression",
                                "start": 462,
                                "end": 466
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 467,
                                "end": 470,
                                "name": "pp2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "start": 475,
                            "end": 483,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 487,
                          "end": 495,
                          "object": {
                            "type": "ThisExpression",
                            "start": 487,
                            "end": 491
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 492,
                            "end": 495,
                            "name": "pp2",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      }
                    },
                    "directive": null
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
                        "name": "strOrNum",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "start": 535,
                        "end": 575,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 535,
                          "end": 563,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 535,
                            "end": 550,
                            "operator": "typeof",
                            "prefix": true,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 542,
                              "end": 550,
                              "object": {
                                "type": "ThisExpression",
                                "start": 542,
                                "end": 546
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 547,
                                "end": 550,
                                "name": "pp3",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "start": 555,
                            "end": 563,
                            "value": "string",
                            "raw": "\"string\""
                          }
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 567,
                          "end": 575,
                          "object": {
                            "type": "ThisExpression",
                            "start": 567,
                            "end": 571
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 572,
                            "end": 575,
                            "name": "pp3",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
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
      "type": "VariableDeclaration",
      "start": 604,
      "end": 615,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 608,
          "end": 614,
          "id": {
            "type": "Identifier",
            "start": 608,
            "end": 614,
            "name": "c1",
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
                  "name": "C1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
          "name": "strOrNum",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 627,
          "end": 663,
          "left": {
            "type": "BinaryExpression",
            "start": 627,
            "end": 653,
            "left": {
              "type": "UnaryExpression",
              "start": 627,
              "end": 640,
              "operator": "typeof",
              "prefix": true,
              "argument": {
                "type": "MemberExpression",
                "start": 634,
                "end": 640,
                "object": {
                  "type": "Identifier",
                  "start": 634,
                  "end": 636,
                  "name": "c1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 637,
                  "end": 640,
                  "name": "pp2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 645,
              "end": 653,
              "value": "string",
              "raw": "\"string\""
            }
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 657,
            "end": 663,
            "object": {
              "type": "Identifier",
              "start": 657,
              "end": 659,
              "name": "c1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 660,
              "end": 663,
              "name": "pp2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        }
      },
      "directive": null
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
          "name": "strOrNum",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 695,
          "end": 731,
          "left": {
            "type": "BinaryExpression",
            "start": 695,
            "end": 721,
            "left": {
              "type": "UnaryExpression",
              "start": 695,
              "end": 708,
              "operator": "typeof",
              "prefix": true,
              "argument": {
                "type": "MemberExpression",
                "start": 702,
                "end": 708,
                "object": {
                  "type": "Identifier",
                  "start": 702,
                  "end": 704,
                  "name": "c1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 705,
                  "end": 708,
                  "name": "pp3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 713,
              "end": 721,
              "value": "string",
              "raw": "\"string\""
            }
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 725,
            "end": 731,
            "object": {
              "type": "Identifier",
              "start": 725,
              "end": 727,
              "name": "c1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 728,
              "end": 731,
              "name": "pp3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 756,
            "end": 789,
            "name": "obj1",
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 768,
                      "end": 769,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    },
                    "accessibility": null,
                    "static": false
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
          "name": "strOrNum",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 802,
          "end": 838,
          "left": {
            "type": "BinaryExpression",
            "start": 802,
            "end": 828,
            "left": {
              "type": "UnaryExpression",
              "start": 802,
              "end": 815,
              "operator": "typeof",
              "prefix": true,
              "argument": {
                "type": "MemberExpression",
                "start": 809,
                "end": 815,
                "object": {
                  "type": "Identifier",
                  "start": 809,
                  "end": 813,
                  "name": "obj1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 814,
                  "end": 815,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 820,
              "end": 828,
              "value": "string",
              "raw": "\"string\""
            }
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 832,
            "end": 838,
            "object": {
              "type": "Identifier",
              "start": 832,
              "end": 836,
              "name": "obj1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 837,
              "end": 838,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
