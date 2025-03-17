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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 12,
      "end": 103,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 29,
        "name": "Element",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 30,
        "end": 103,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 36,
            "end": 69,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 45,
              "name": "style",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
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
                  "name": "CSSStyleDeclaration",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 74,
            "end": 101,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 83,
              "name": "style",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 84,
                "end": 99,
                "name": "cssText",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 91,
                  "end": 99,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 93,
                    "end": 99
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 135,
            "name": "element",
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
                  "name": "Element",
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
      "kind": "const",
      "declare": true
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
          "object": {
            "type": "Identifier",
            "start": 137,
            "end": 144,
            "name": "element",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 145,
            "end": 150,
            "name": "style",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 153,
          "end": 165,
          "value": "color: red",
          "raw": "\"color: red\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 167,
      "end": 205,
      "expression": {
        "type": "MemberExpression",
        "start": 167,
        "end": 204,
        "object": {
          "type": "MemberExpression",
          "start": 167,
          "end": 180,
          "object": {
            "type": "Identifier",
            "start": 167,
            "end": 174,
            "name": "element",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 175,
            "end": 180,
            "name": "style",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 181,
          "end": 204,
          "name": "animationTimingFunction",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 206,
            "end": 213,
            "name": "element",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 214,
            "end": 219,
            "name": "style",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 222,
          "end": 235,
          "object": {
            "type": "Identifier",
            "start": 222,
            "end": 229,
            "name": "element",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 230,
            "end": 235,
            "name": "style",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 399,
      "end": 430,
      "id": {
        "type": "Identifier",
        "start": 404,
        "end": 408,
        "name": "Fail",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 409,
              "end": 410,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNeverKeyword",
              "start": 419,
              "end": 424
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 428,
        "end": 429,
        "typeName": {
          "type": "Identifier",
          "start": 428,
          "end": 429,
          "name": "T",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 431,
      "end": 500,
      "id": {
        "type": "Identifier",
        "start": 441,
        "end": 443,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 444,
        "end": 500,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 450,
            "end": 466,
            "key": {
              "type": "Identifier",
              "start": 454,
              "end": 455,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 471,
            "end": 498,
            "key": {
              "type": "Identifier",
              "start": 475,
              "end": 476,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 477,
                "end": 496,
                "name": "value",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 482,
                  "end": 496,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 484,
                    "end": 496,
                    "typeName": {
                      "type": "Identifier",
                      "start": 484,
                      "end": 488,
                      "name": "Fail",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 507,
            "end": 509,
            "name": "o1",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 523,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 523,
                  "end": 547,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
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
                },
                "kind": "get",
                "optional": false
              },
              {
                "type": "Property",
                "start": 553,
                "end": 582,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 557,
                  "end": 558,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 558,
                  "end": 582,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 559,
                      "end": 578,
                      "name": "value",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 564,
                        "end": 578,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 566,
                          "end": 578,
                          "typeName": {
                            "type": "Identifier",
                            "start": 566,
                            "end": 570,
                            "name": "Fail",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 580,
                    "end": 582,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "set",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 654,
            "end": 656,
            "name": "o2",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 669,
                  "end": 671,
                  "name": "p1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 671,
                  "end": 687,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "get",
                "optional": false
              },
              {
                "type": "Property",
                "start": 767,
                "end": 791,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 771,
                  "end": 773,
                  "name": "p1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 773,
                  "end": 791,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 774,
                      "end": 787,
                      "name": "value",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 779,
                        "end": 787,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 781,
                          "end": 787
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 789,
                    "end": 791,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "set",
                "optional": false
              },
              {
                "type": "Property",
                "start": 798,
                "end": 828,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 802,
                  "end": 804,
                  "name": "p2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 804,
                  "end": 828,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
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
                },
                "kind": "get",
                "optional": false
              },
              {
                "type": "Property",
                "start": 862,
                "end": 886,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 866,
                  "end": 868,
                  "name": "p2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 868,
                  "end": 886,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 869,
                      "end": 882,
                      "name": "value",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 874,
                        "end": 882,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 876,
                          "end": 882
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 884,
                    "end": 886,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "set",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
