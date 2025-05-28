__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1179,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 245,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 245,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 49,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 49,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 27,
                "end": 35,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 29,
                  "end": 35
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 49,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 38,
                    "end": 47,
                    "argument": {
                      "type": "Literal",
                      "start": 45,
                      "end": 47,
                      "value": "",
                      "raw": "\"\""
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
            "start": 54,
            "end": 147,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 61,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 147,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 62,
                  "end": 80,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 63,
                    "end": 80,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 65,
                      "end": 80,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 65,
                          "end": 71
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 74,
                          "end": 80
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 82,
                "end": 147,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 92,
                    "end": 112,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 96,
                        "end": 111,
                        "id": {
                          "type": "Identifier",
                          "start": 96,
                          "end": 97,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "start": 100,
                          "end": 111,
                          "expression": {
                            "type": "Identifier",
                            "start": 100,
                            "end": 101,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 105,
                            "end": 111
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 121,
                    "end": 141,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 125,
                        "end": 140,
                        "id": {
                          "type": "Identifier",
                          "start": 125,
                          "end": 126,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "start": 129,
                          "end": 140,
                          "expression": {
                            "type": "Identifier",
                            "start": 129,
                            "end": 130,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 134,
                            "end": 140
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 153,
            "end": 193,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 160,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 160,
              "end": 193,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 162,
                "end": 179,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 164,
                  "end": 179,
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 164,
                      "end": 170
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 173,
                      "end": 179
                    }
                  ]
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 180,
                "end": 193,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 182,
                    "end": 191,
                    "argument": {
                      "type": "Literal",
                      "start": 189,
                      "end": 191,
                      "value": "",
                      "raw": "\"\""
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
            "start": 198,
            "end": 243,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 202,
              "end": 205,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 205,
              "end": 243,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 206,
                  "end": 234,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 207,
                    "end": 234,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 209,
                      "end": 234,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 209,
                          "end": 215
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 218,
                          "end": 224
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 227,
                          "end": 234
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 236,
                "end": 243,
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
      "type": "TSInterfaceDeclaration",
      "start": 247,
      "end": 398,
      "id": {
        "type": "Identifier",
        "start": 257,
        "end": 262,
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 263,
        "end": 398,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 269,
            "end": 287,
            "key": {
              "type": "Identifier",
              "start": 273,
              "end": 276,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 278,
              "end": 286,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 280,
                "end": 286
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 292,
            "end": 320,
            "key": {
              "type": "Identifier",
              "start": 296,
              "end": 299,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 300,
                "end": 318,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 301,
                  "end": 318,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 303,
                    "end": 318,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 303,
                        "end": 309
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 312,
                        "end": 318
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 326,
            "end": 353,
            "key": {
              "type": "Identifier",
              "start": 330,
              "end": 333,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 335,
              "end": 352,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 337,
                "end": 352,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 337,
                    "end": 343
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 346,
                    "end": 352
                  }
                ]
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 358,
            "end": 396,
            "key": {
              "type": "Identifier",
              "start": 362,
              "end": 365,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 366,
                "end": 394,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 367,
                  "end": 394,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 369,
                    "end": 394,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 369,
                        "end": 375
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 378,
                        "end": 384
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 387,
                        "end": 394
                      }
                    ]
                  }
                }
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
      "type": "TSTypeAliasDeclaration",
      "start": 400,
      "end": 549,
      "id": {
        "type": "Identifier",
        "start": 405,
        "end": 410,
        "decorators": [],
        "name": "Test3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 413,
        "end": 548,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 419,
            "end": 437,
            "key": {
              "type": "Identifier",
              "start": 423,
              "end": 426,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 428,
              "end": 436,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 430,
                "end": 436
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 442,
            "end": 470,
            "key": {
              "type": "Identifier",
              "start": 446,
              "end": 449,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 450,
                "end": 468,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 451,
                  "end": 468,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 453,
                    "end": 468,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 453,
                        "end": 459
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 462,
                        "end": 468
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 476,
            "end": 503,
            "key": {
              "type": "Identifier",
              "start": 480,
              "end": 483,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 485,
              "end": 502,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 487,
                "end": 502,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 487,
                    "end": 493
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 496,
                    "end": 502
                  }
                ]
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 508,
            "end": 546,
            "key": {
              "type": "Identifier",
              "start": 512,
              "end": 515,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 516,
                "end": 544,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 517,
                  "end": 544,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 519,
                    "end": 544,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 519,
                        "end": 525
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 528,
                        "end": 534
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 537,
                        "end": 544
                      }
                    ]
                  }
                }
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
      "type": "BlockStatement",
      "start": 551,
      "end": 759,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 557,
          "end": 579,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 563,
              "end": 578,
              "id": {
                "type": "Identifier",
                "start": 563,
                "end": 564,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "NewExpression",
                "start": 567,
                "end": 578,
                "callee": {
                  "type": "Identifier",
                  "start": 571,
                  "end": 576,
                  "decorators": [],
                  "name": "Test1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 584,
          "end": 595,
          "expression": {
            "type": "AssignmentExpression",
            "start": 584,
            "end": 594,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 584,
              "end": 589,
              "object": {
                "type": "Identifier",
                "start": 584,
                "end": 585,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 586,
                "end": 589,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "right": {
              "type": "Literal",
              "start": 592,
              "end": 594,
              "value": 32,
              "raw": "32"
            }
          },
          "directive": null
        },
        {
          "type": "VariableDeclaration",
          "start": 600,
          "end": 622,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 604,
              "end": 621,
              "id": {
                "type": "Identifier",
                "start": 604,
                "end": 613,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 605,
                  "end": 613,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 607,
                    "end": 613
                  }
                }
              },
              "init": {
                "type": "MemberExpression",
                "start": 616,
                "end": 621,
                "object": {
                  "type": "Identifier",
                  "start": 616,
                  "end": 617,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 618,
                  "end": 621,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 681,
          "end": 692,
          "expression": {
            "type": "AssignmentExpression",
            "start": 681,
            "end": 691,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 681,
              "end": 686,
              "object": {
                "type": "Identifier",
                "start": 681,
                "end": 682,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 683,
                "end": 686,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "right": {
              "type": "Literal",
              "start": 689,
              "end": 691,
              "value": 42,
              "raw": "42"
            }
          },
          "directive": null
        },
        {
          "type": "VariableDeclaration",
          "start": 697,
          "end": 719,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 701,
              "end": 718,
              "id": {
                "type": "Identifier",
                "start": 701,
                "end": 710,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 702,
                  "end": 710,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 704,
                    "end": 710
                  }
                }
              },
              "init": {
                "type": "MemberExpression",
                "start": 713,
                "end": 718,
                "object": {
                  "type": "Identifier",
                  "start": 713,
                  "end": 714,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 715,
                  "end": 718,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 724,
          "end": 738,
          "expression": {
            "type": "AssignmentExpression",
            "start": 724,
            "end": 737,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 724,
              "end": 729,
              "object": {
                "type": "Identifier",
                "start": 724,
                "end": 725,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 726,
                "end": 729,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "right": {
              "type": "Literal",
              "start": 732,
              "end": 737,
              "value": false,
              "raw": "false"
            }
          },
          "directive": null
        },
        {
          "type": "VariableDeclaration",
          "start": 743,
          "end": 757,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 747,
              "end": 756,
              "id": {
                "type": "Identifier",
                "start": 747,
                "end": 748,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "MemberExpression",
                "start": 751,
                "end": 756,
                "object": {
                  "type": "Identifier",
                  "start": 751,
                  "end": 752,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 753,
                  "end": 756,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 761,
      "end": 969,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 767,
          "end": 789,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 773,
              "end": 788,
              "id": {
                "type": "Identifier",
                "start": 773,
                "end": 774,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "TSAsExpression",
                "start": 777,
                "end": 788,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 777,
                  "end": 779,
                  "properties": []
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 783,
                  "end": 788,
                  "typeName": {
                    "type": "Identifier",
                    "start": 783,
                    "end": 788,
                    "decorators": [],
                    "name": "Test2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 794,
          "end": 805,
          "expression": {
            "type": "AssignmentExpression",
            "start": 794,
            "end": 804,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 794,
              "end": 799,
              "object": {
                "type": "Identifier",
                "start": 794,
                "end": 795,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 796,
                "end": 799,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "right": {
              "type": "Literal",
              "start": 802,
              "end": 804,
              "value": 32,
              "raw": "32"
            }
          },
          "directive": null
        },
        {
          "type": "VariableDeclaration",
          "start": 810,
          "end": 832,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 814,
              "end": 831,
              "id": {
                "type": "Identifier",
                "start": 814,
                "end": 823,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 815,
                  "end": 823,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 817,
                    "end": 823
                  }
                }
              },
              "init": {
                "type": "MemberExpression",
                "start": 826,
                "end": 831,
                "object": {
                  "type": "Identifier",
                  "start": 826,
                  "end": 827,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 828,
                  "end": 831,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 891,
          "end": 902,
          "expression": {
            "type": "AssignmentExpression",
            "start": 891,
            "end": 901,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 891,
              "end": 896,
              "object": {
                "type": "Identifier",
                "start": 891,
                "end": 892,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 893,
                "end": 896,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "right": {
              "type": "Literal",
              "start": 899,
              "end": 901,
              "value": 42,
              "raw": "42"
            }
          },
          "directive": null
        },
        {
          "type": "VariableDeclaration",
          "start": 907,
          "end": 929,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 911,
              "end": 928,
              "id": {
                "type": "Identifier",
                "start": 911,
                "end": 920,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 912,
                  "end": 920,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 914,
                    "end": 920
                  }
                }
              },
              "init": {
                "type": "MemberExpression",
                "start": 923,
                "end": 928,
                "object": {
                  "type": "Identifier",
                  "start": 923,
                  "end": 924,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 925,
                  "end": 928,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 934,
          "end": 948,
          "expression": {
            "type": "AssignmentExpression",
            "start": 934,
            "end": 947,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 934,
              "end": 939,
              "object": {
                "type": "Identifier",
                "start": 934,
                "end": 935,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 936,
                "end": 939,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "right": {
              "type": "Literal",
              "start": 942,
              "end": 947,
              "value": false,
              "raw": "false"
            }
          },
          "directive": null
        },
        {
          "type": "VariableDeclaration",
          "start": 953,
          "end": 967,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 957,
              "end": 966,
              "id": {
                "type": "Identifier",
                "start": 957,
                "end": 958,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "MemberExpression",
                "start": 961,
                "end": 966,
                "object": {
                  "type": "Identifier",
                  "start": 961,
                  "end": 962,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 963,
                  "end": 966,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 971,
      "end": 1179,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 977,
          "end": 999,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 983,
              "end": 998,
              "id": {
                "type": "Identifier",
                "start": 983,
                "end": 984,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "TSAsExpression",
                "start": 987,
                "end": 998,
                "expression": {
                  "type": "ObjectExpression",
                  "start": 987,
                  "end": 989,
                  "properties": []
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 993,
                  "end": 998,
                  "typeName": {
                    "type": "Identifier",
                    "start": 993,
                    "end": 998,
                    "decorators": [],
                    "name": "Test3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 1004,
          "end": 1015,
          "expression": {
            "type": "AssignmentExpression",
            "start": 1004,
            "end": 1014,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 1004,
              "end": 1009,
              "object": {
                "type": "Identifier",
                "start": 1004,
                "end": 1005,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1006,
                "end": 1009,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "right": {
              "type": "Literal",
              "start": 1012,
              "end": 1014,
              "value": 32,
              "raw": "32"
            }
          },
          "directive": null
        },
        {
          "type": "VariableDeclaration",
          "start": 1020,
          "end": 1042,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1024,
              "end": 1041,
              "id": {
                "type": "Identifier",
                "start": 1024,
                "end": 1033,
                "decorators": [],
                "name": "m",
                "optional": false,
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
              "init": {
                "type": "MemberExpression",
                "start": 1036,
                "end": 1041,
                "object": {
                  "type": "Identifier",
                  "start": 1036,
                  "end": 1037,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1038,
                  "end": 1041,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 1101,
          "end": 1112,
          "expression": {
            "type": "AssignmentExpression",
            "start": 1101,
            "end": 1111,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 1101,
              "end": 1106,
              "object": {
                "type": "Identifier",
                "start": 1101,
                "end": 1102,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1103,
                "end": 1106,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "right": {
              "type": "Literal",
              "start": 1109,
              "end": 1111,
              "value": 42,
              "raw": "42"
            }
          },
          "directive": null
        },
        {
          "type": "VariableDeclaration",
          "start": 1117,
          "end": 1139,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1121,
              "end": 1138,
              "id": {
                "type": "Identifier",
                "start": 1121,
                "end": 1130,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1122,
                  "end": 1130,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1124,
                    "end": 1130
                  }
                }
              },
              "init": {
                "type": "MemberExpression",
                "start": 1133,
                "end": 1138,
                "object": {
                  "type": "Identifier",
                  "start": 1133,
                  "end": 1134,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1135,
                  "end": 1138,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 1144,
          "end": 1158,
          "expression": {
            "type": "AssignmentExpression",
            "start": 1144,
            "end": 1157,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 1144,
              "end": 1149,
              "object": {
                "type": "Identifier",
                "start": 1144,
                "end": 1145,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1146,
                "end": 1149,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "right": {
              "type": "Literal",
              "start": 1152,
              "end": 1157,
              "value": false,
              "raw": "false"
            }
          },
          "directive": null
        },
        {
          "type": "VariableDeclaration",
          "start": 1163,
          "end": 1177,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1167,
              "end": 1176,
              "id": {
                "type": "Identifier",
                "start": 1167,
                "end": 1168,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "MemberExpression",
                "start": 1171,
                "end": 1176,
                "object": {
                  "type": "Identifier",
                  "start": 1171,
                  "end": 1172,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1173,
                  "end": 1176,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
