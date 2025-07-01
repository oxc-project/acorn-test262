__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Element",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 29
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "style",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 45
            },
            "computed": false,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CSSStyleDeclaration",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 68
                },
                "typeArguments": null,
                "start": 49,
                "end": 68
              },
              "start": 47,
              "end": 68
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 36,
            "end": 69
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "style",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 83
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cssText",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 93,
                    "end": 99
                  },
                  "start": 91,
                  "end": 99
                },
                "start": 84,
                "end": 99
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 74,
            "end": 101
          }
        ],
        "start": 30,
        "end": 103
      },
      "declare": false,
      "start": 12,
      "end": 103
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "element",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Element",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 135
                },
                "typeArguments": null,
                "start": 128,
                "end": 135
              },
              "start": 126,
              "end": 135
            },
            "start": 119,
            "end": 135
          },
          "init": null,
          "definite": false,
          "start": 119,
          "end": 135
        }
      ],
      "declare": true,
      "start": 105,
      "end": 136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "element",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 144
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "style",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 150
          },
          "optional": false,
          "computed": false,
          "start": 137,
          "end": 150
        },
        "right": {
          "type": "Literal",
          "value": "color: red",
          "raw": "\"color: red\"",
          "start": 153,
          "end": 165
        },
        "start": 137,
        "end": 165
      },
      "directive": null,
      "start": 137,
      "end": 166
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "element",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 174
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "style",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 180
          },
          "optional": false,
          "computed": false,
          "start": 167,
          "end": 180
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "animationTimingFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 181,
          "end": 204
        },
        "optional": false,
        "computed": false,
        "start": 167,
        "end": 204
      },
      "directive": null,
      "start": 167,
      "end": 205
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "element",
            "optional": false,
            "typeAnnotation": null,
            "start": 206,
            "end": 213
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "style",
            "optional": false,
            "typeAnnotation": null,
            "start": 214,
            "end": 219
          },
          "optional": false,
          "computed": false,
          "start": 206,
          "end": 219
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "element",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 229
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "style",
            "optional": false,
            "typeAnnotation": null,
            "start": 230,
            "end": 235
          },
          "optional": false,
          "computed": false,
          "start": 222,
          "end": 235
        },
        "start": 206,
        "end": 235
      },
      "directive": null,
      "start": 206,
      "end": 236
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Fail",
        "optional": false,
        "typeAnnotation": null,
        "start": 404,
        "end": 408
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 410
            },
            "constraint": {
              "type": "TSNeverKeyword",
              "start": 419,
              "end": 424
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 409,
            "end": 424
          }
        ],
        "start": 408,
        "end": 425
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 428,
          "end": 429
        },
        "typeArguments": null,
        "start": 428,
        "end": 429
      },
      "declare": false,
      "start": 399,
      "end": 430
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 441,
        "end": 443
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 455
            },
            "computed": false,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 459,
                "end": 465
              },
              "start": 457,
              "end": 465
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 450,
            "end": 466
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 475,
              "end": 476
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Fail",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 484,
                      "end": 488
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 489,
                          "end": 495
                        }
                      ],
                      "start": 488,
                      "end": 496
                    },
                    "start": 484,
                    "end": 496
                  },
                  "start": 482,
                  "end": 496
                },
                "start": 477,
                "end": 496
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 471,
            "end": 498
          }
        ],
        "start": 444,
        "end": 500
      },
      "declare": false,
      "start": 431,
      "end": 500
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 507,
            "end": 509
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 522,
                  "end": 523
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 527,
                      "end": 533
                    },
                    "start": 525,
                    "end": 533
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 543,
                          "end": 544
                        },
                        "start": 536,
                        "end": 545
                      }
                    ],
                    "start": 534,
                    "end": 547
                  },
                  "expression": false,
                  "start": 523,
                  "end": 547
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 518,
                "end": 547
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 557,
                  "end": 558
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
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Fail",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 566,
                            "end": 570
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 571,
                                "end": 577
                              }
                            ],
                            "start": 570,
                            "end": 578
                          },
                          "start": 566,
                          "end": 578
                        },
                        "start": 564,
                        "end": 578
                      },
                      "start": 559,
                      "end": 578
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 580,
                    "end": 582
                  },
                  "expression": false,
                  "start": 558,
                  "end": 582
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 553,
                "end": 582
              }
            ],
            "start": 512,
            "end": 584
          },
          "definite": false,
          "start": 507,
          "end": 584
        }
      ],
      "declare": false,
      "start": 501,
      "end": 584
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": null,
            "start": 654,
            "end": 656
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 669,
                  "end": 671
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
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 683,
                          "end": 684
                        },
                        "start": 676,
                        "end": 685
                      }
                    ],
                    "start": 674,
                    "end": 687
                  },
                  "expression": false,
                  "start": 671,
                  "end": 687
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 665,
                "end": 687
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 771,
                  "end": 773
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
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 781,
                          "end": 787
                        },
                        "start": 779,
                        "end": 787
                      },
                      "start": 774,
                      "end": 787
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 789,
                    "end": 791
                  },
                  "expression": false,
                  "start": 773,
                  "end": 791
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 767,
                "end": 791
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 802,
                  "end": 804
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 808,
                      "end": 814
                    },
                    "start": 806,
                    "end": 814
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 824,
                          "end": 825
                        },
                        "start": 817,
                        "end": 826
                      }
                    ],
                    "start": 815,
                    "end": 828
                  },
                  "expression": false,
                  "start": 804,
                  "end": 828
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 798,
                "end": 828
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 866,
                  "end": 868
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
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 876,
                          "end": 882
                        },
                        "start": 874,
                        "end": 882
                      },
                      "start": 869,
                      "end": 882
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 884,
                    "end": 886
                  },
                  "expression": false,
                  "start": 868,
                  "end": 886
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 862,
                "end": 886
              }
            ],
            "start": 659,
            "end": 889
          },
          "definite": false,
          "start": 654,
          "end": 889
        }
      ],
      "declare": false,
      "start": 648,
      "end": 890
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 890
}
```
