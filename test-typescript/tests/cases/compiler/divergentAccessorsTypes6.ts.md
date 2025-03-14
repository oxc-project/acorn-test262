__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 891,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 12,
      "end": 103,
      "body": {
        "type": "TSInterfaceBody",
        "start": 30,
        "end": 103,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 36,
            "end": 69,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 45,
              "decorators": [],
              "name": "style",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 68,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 49,
                "end": 68,
                "typeName": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 68,
                  "decorators": [],
                  "name": "CSSStyleDeclaration",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 74,
            "end": 101,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 83,
              "decorators": [],
              "name": "style",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 84,
                "end": 99,
                "decorators": [],
                "name": "cssText",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 91,
                  "end": 99,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 93,
                    "end": 99
                  }
                }
              }
            ],
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 29,
        "decorators": [],
        "name": "Element",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 105,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 135,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 135,
            "decorators": [],
            "name": "element",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 135,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 128,
                "end": 135,
                "typeName": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 135,
                  "decorators": [],
                  "name": "Element",
                  "optional": false
                }
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
      "type": "ExpressionStatement",
      "start": 137,
      "end": 166,
      "expression": {
        "type": "AssignmentExpression",
        "start": 137,
        "end": 165,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 137,
          "end": 150,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 137,
            "end": 144,
            "decorators": [],
            "name": "element",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 145,
            "end": 150,
            "decorators": [],
            "name": "style",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 153,
          "end": 165,
          "raw": "\"color: red\"",
          "value": "color: red"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 167,
      "end": 205,
      "expression": {
        "type": "MemberExpression",
        "start": 167,
        "end": 204,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 167,
          "end": 180,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 167,
            "end": 174,
            "decorators": [],
            "name": "element",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 175,
            "end": 180,
            "decorators": [],
            "name": "style",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 181,
          "end": 204,
          "decorators": [],
          "name": "animationTimingFunction",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 206,
      "end": 236,
      "expression": {
        "type": "AssignmentExpression",
        "start": 206,
        "end": 235,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 206,
          "end": 219,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 206,
            "end": 213,
            "decorators": [],
            "name": "element",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 214,
            "end": 219,
            "decorators": [],
            "name": "style",
            "optional": false
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 222,
          "end": 235,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 222,
            "end": 229,
            "decorators": [],
            "name": "element",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 230,
            "end": 235,
            "decorators": [],
            "name": "style",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 399,
      "end": 430,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 404,
        "end": 408,
        "decorators": [],
        "name": "Fail",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 428,
        "end": 429,
        "typeName": {
          "type": "Identifier",
          "start": 428,
          "end": 429,
          "decorators": [],
          "name": "T",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 408,
        "end": 425,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 409,
            "end": 424,
            "const": false,
            "constraint": {
              "type": "TSNeverKeyword",
              "start": 419,
              "end": 424
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 409,
              "end": 410,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 431,
      "end": 500,
      "body": {
        "type": "TSInterfaceBody",
        "start": 444,
        "end": 500,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 450,
            "end": 466,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 454,
              "end": 455,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 457,
              "end": 465,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 459,
                "end": 465
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 471,
            "end": 498,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 475,
              "end": 476,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 477,
                "end": 496,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 482,
                  "end": 496,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 484,
                    "end": 496,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 488,
                      "end": 496,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 489,
                          "end": 495
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 484,
                      "end": 488,
                      "decorators": [],
                      "name": "Fail",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 441,
        "end": 443,
        "decorators": [],
        "name": "I1",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 501,
      "end": 584,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 507,
          "end": 584,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 507,
            "end": 509,
            "decorators": [],
            "name": "o1",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 512,
            "end": 584,
            "properties": [
              {
                "type": "Property",
                "start": 518,
                "end": 547,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 523,
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
                  "start": 523,
                  "end": 547,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 534,
                    "end": 547,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 536,
                        "end": 545,
                        "argument": {
                          "type": "Literal",
                          "start": 543,
                          "end": 544,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 525,
                    "end": 533,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 527,
                      "end": 533
                    }
                  }
                }
              },
              {
                "type": "Property",
                "start": 553,
                "end": 582,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 557,
                  "end": 558,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 558,
                  "end": 582,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 580,
                    "end": 582,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 559,
                      "end": 578,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 564,
                        "end": 578,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 566,
                          "end": 578,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 570,
                            "end": 578,
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 571,
                                "end": 577
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 566,
                            "end": 570,
                            "decorators": [],
                            "name": "Fail",
                            "optional": false
                          }
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 648,
      "end": 890,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 654,
          "end": 889,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 654,
            "end": 656,
            "decorators": [],
            "name": "o2",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 659,
            "end": 889,
            "properties": [
              {
                "type": "Property",
                "start": 665,
                "end": 687,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 669,
                  "end": 671,
                  "decorators": [],
                  "name": "p1",
                  "optional": false
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 671,
                  "end": 687,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 674,
                    "end": 687,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 676,
                        "end": 685,
                        "argument": {
                          "type": "Literal",
                          "start": 683,
                          "end": 684,
                          "raw": "0",
                          "value": 0
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
                "start": 767,
                "end": 791,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 771,
                  "end": 773,
                  "decorators": [],
                  "name": "p1",
                  "optional": false
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 773,
                  "end": 791,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 789,
                    "end": 791,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 774,
                      "end": 787,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 779,
                        "end": 787,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 781,
                          "end": 787
                        }
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 798,
                "end": 828,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 802,
                  "end": 804,
                  "decorators": [],
                  "name": "p2",
                  "optional": false
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 804,
                  "end": 828,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 815,
                    "end": 828,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 817,
                        "end": 826,
                        "argument": {
                          "type": "Literal",
                          "start": 824,
                          "end": 825,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 806,
                    "end": 814,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 808,
                      "end": 814
                    }
                  }
                }
              },
              {
                "type": "Property",
                "start": 862,
                "end": 886,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 866,
                  "end": 868,
                  "decorators": [],
                  "name": "p2",
                  "optional": false
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 868,
                  "end": 886,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 884,
                    "end": 886,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 869,
                      "end": 882,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 874,
                        "end": 882,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 876,
                          "end": 882
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
