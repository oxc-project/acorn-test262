__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 955,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 198,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 16,
        "decorators": [],
        "name": "RoyalGuard",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 17,
        "end": 198,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 23,
            "end": 102,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 31,
              "decorators": [],
              "name": "isLeader",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 102,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 33,
                "end": 52,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 35,
                  "end": 52,
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 35,
                    "end": 39
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 43,
                    "end": 52,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 43,
                      "end": 52,
                      "typeName": {
                        "type": "Identifier",
                        "start": 43,
                        "end": 52,
                        "decorators": [],
                        "name": "LeadGuard",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 53,
                "end": 102,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 63,
                    "end": 96,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 70,
                      "end": 95,
                      "left": {
                        "type": "ThisExpression",
                        "start": 70,
                        "end": 74
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 95,
                        "decorators": [],
                        "name": "LeadGuard",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
          },
          {
            "type": "MethodDefinition",
            "start": 107,
            "end": 196,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 117,
              "decorators": [],
              "name": "isFollower",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 117,
              "end": 196,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 119,
                "end": 142,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 121,
                  "end": 142,
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 121,
                    "end": 125
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 129,
                    "end": 142,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 129,
                      "end": 142,
                      "typeName": {
                        "type": "Identifier",
                        "start": 129,
                        "end": 142,
                        "decorators": [],
                        "name": "FollowerGuard",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 143,
                "end": 196,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 153,
                    "end": 190,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 160,
                      "end": 189,
                      "left": {
                        "type": "ThisExpression",
                        "start": 160,
                        "end": 164
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "start": 176,
                        "end": 189,
                        "decorators": [],
                        "name": "FollowerGuard",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
      "start": 200,
      "end": 259,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 215,
        "decorators": [],
        "name": "LeadGuard",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 224,
        "end": 234,
        "decorators": [],
        "name": "RoyalGuard",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 235,
        "end": 259,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 241,
            "end": 256,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 241,
              "end": 245,
              "decorators": [],
              "name": "lead",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 245,
              "end": 256,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 247,
                "end": 253,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 249,
                  "end": 253
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 254,
                "end": 256,
                "body": []
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
      "start": 261,
      "end": 326,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 267,
        "end": 280,
        "decorators": [],
        "name": "FollowerGuard",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 289,
        "end": 299,
        "decorators": [],
        "name": "RoyalGuard",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 300,
        "end": 326,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 306,
            "end": 323,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 306,
              "end": 312,
              "decorators": [],
              "name": "follow",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 312,
              "end": 323,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 314,
                "end": 320,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 316,
                  "end": 320
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 321,
                "end": 323,
                "body": []
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
      "type": "TSInterfaceDeclaration",
      "start": 328,
      "end": 374,
      "id": {
        "type": "Identifier",
        "start": 338,
        "end": 352,
        "decorators": [],
        "name": "GuardInterface",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 361,
          "end": 371,
          "expression": {
            "type": "Identifier",
            "start": 361,
            "end": 371,
            "decorators": [],
            "name": "RoyalGuard",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 372,
        "end": 374,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 375,
      "end": 415,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 379,
          "end": 414,
          "id": {
            "type": "Identifier",
            "start": 379,
            "end": 392,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 380,
              "end": 392,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 382,
                "end": 392,
                "typeName": {
                  "type": "Identifier",
                  "start": 382,
                  "end": 392,
                  "decorators": [],
                  "name": "RoyalGuard",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 395,
            "end": 414,
            "callee": {
              "type": "Identifier",
              "start": 399,
              "end": 412,
              "decorators": [],
              "name": "FollowerGuard",
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
      "type": "VariableDeclaration",
      "start": 416,
      "end": 456,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 420,
          "end": 455,
          "id": {
            "type": "Identifier",
            "start": 420,
            "end": 437,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 421,
              "end": 437,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 423,
                "end": 437,
                "typeName": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 437,
                  "decorators": [],
                  "name": "GuardInterface",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 440,
            "end": 455,
            "callee": {
              "type": "Identifier",
              "start": 444,
              "end": 453,
              "decorators": [],
              "name": "LeadGuard",
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
      "start": 503,
      "end": 529,
      "expression": {
        "type": "AssignmentExpression",
        "start": 503,
        "end": 528,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 503,
          "end": 515,
          "object": {
            "type": "Identifier",
            "start": 503,
            "end": 504,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 505,
            "end": 515,
            "decorators": [],
            "name": "isFollower",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 518,
          "end": 528,
          "object": {
            "type": "Identifier",
            "start": 518,
            "end": 519,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 520,
            "end": 528,
            "decorators": [],
            "name": "isLeader",
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
      "start": 530,
      "end": 556,
      "expression": {
        "type": "AssignmentExpression",
        "start": 530,
        "end": 555,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 530,
          "end": 540,
          "object": {
            "type": "Identifier",
            "start": 530,
            "end": 531,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 532,
            "end": 540,
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 543,
          "end": 555,
          "object": {
            "type": "Identifier",
            "start": 543,
            "end": 544,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 545,
            "end": 555,
            "decorators": [],
            "name": "isFollower",
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
      "start": 558,
      "end": 584,
      "expression": {
        "type": "AssignmentExpression",
        "start": 558,
        "end": 583,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 558,
          "end": 570,
          "object": {
            "type": "Identifier",
            "start": 558,
            "end": 559,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 560,
            "end": 570,
            "decorators": [],
            "name": "isFollower",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 573,
          "end": 583,
          "object": {
            "type": "Identifier",
            "start": 573,
            "end": 574,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 575,
            "end": 583,
            "decorators": [],
            "name": "isLeader",
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
      "start": 585,
      "end": 611,
      "expression": {
        "type": "AssignmentExpression",
        "start": 585,
        "end": 610,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 585,
          "end": 595,
          "object": {
            "type": "Identifier",
            "start": 585,
            "end": 586,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 587,
            "end": 595,
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 598,
          "end": 610,
          "object": {
            "type": "Identifier",
            "start": 598,
            "end": 599,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 600,
            "end": 610,
            "decorators": [],
            "name": "isFollower",
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
      "type": "FunctionDeclaration",
      "start": 613,
      "end": 680,
      "id": {
        "type": "Identifier",
        "start": 622,
        "end": 634,
        "decorators": [],
        "name": "invalidGuard",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 635,
          "end": 641,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 636,
            "end": 641,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 638,
              "end": 641
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 642,
        "end": 658,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 644,
          "end": 658,
          "parameterName": {
            "type": "TSThisType",
            "start": 644,
            "end": 648
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 652,
            "end": 658,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 652,
              "end": 658
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 659,
        "end": 680,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 665,
            "end": 678,
            "argument": {
              "type": "Literal",
              "start": 672,
              "end": 677,
              "value": false,
              "raw": "false"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 682,
      "end": 707,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 686,
          "end": 706,
          "id": {
            "type": "Identifier",
            "start": 686,
            "end": 706,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 687,
              "end": 706,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 689,
                "end": 706,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 689,
                    "end": 695
                  },
                  {
                    "type": "TSArrayType",
                    "start": 698,
                    "end": 706,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 698,
                      "end": 704
                    }
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 708,
      "end": 755,
      "test": {
        "type": "CallExpression",
        "start": 712,
        "end": 727,
        "callee": {
          "type": "Identifier",
          "start": 712,
          "end": 724,
          "decorators": [],
          "name": "invalidGuard",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 725,
            "end": 726,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 729,
        "end": 739,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 735,
            "end": 737,
            "expression": {
              "type": "Identifier",
              "start": 735,
              "end": 736,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 745,
        "end": 755,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 751,
            "end": 753,
            "expression": {
              "type": "Identifier",
              "start": 751,
              "end": 752,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 757,
      "end": 785,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 761,
          "end": 784,
          "id": {
            "type": "Identifier",
            "start": 761,
            "end": 767,
            "decorators": [],
            "name": "holder",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 770,
            "end": 784,
            "properties": [
              {
                "type": "Property",
                "start": 771,
                "end": 783,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 771,
                  "end": 783,
                  "decorators": [],
                  "name": "invalidGuard",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 771,
                  "end": 783,
                  "decorators": [],
                  "name": "invalidGuard",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 787,
      "end": 865,
      "test": {
        "type": "CallExpression",
        "start": 791,
        "end": 813,
        "callee": {
          "type": "MemberExpression",
          "start": 791,
          "end": 810,
          "object": {
            "type": "Identifier",
            "start": 791,
            "end": 797,
            "decorators": [],
            "name": "holder",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 798,
            "end": 810,
            "decorators": [],
            "name": "invalidGuard",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 811,
            "end": 812,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 815,
        "end": 837,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 821,
            "end": 823,
            "expression": {
              "type": "Identifier",
              "start": 821,
              "end": 822,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 828,
            "end": 835,
            "expression": {
              "type": "Identifier",
              "start": 828,
              "end": 834,
              "decorators": [],
              "name": "holder",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 843,
        "end": 865,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 849,
            "end": 851,
            "expression": {
              "type": "Identifier",
              "start": 849,
              "end": 850,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 856,
            "end": 863,
            "expression": {
              "type": "Identifier",
              "start": 856,
              "end": 862,
              "decorators": [],
              "name": "holder",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 867,
      "end": 895,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 871,
          "end": 894,
          "id": {
            "type": "Identifier",
            "start": 871,
            "end": 879,
            "decorators": [],
            "name": "detached",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 882,
            "end": 894,
            "object": {
              "type": "Identifier",
              "start": 882,
              "end": 883,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 884,
              "end": 894,
              "decorators": [],
              "name": "isFollower",
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
      "type": "IfStatement",
      "start": 897,
      "end": 955,
      "test": {
        "type": "CallExpression",
        "start": 901,
        "end": 911,
        "callee": {
          "type": "Identifier",
          "start": 901,
          "end": 909,
          "decorators": [],
          "name": "detached",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 913,
        "end": 932,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 919,
            "end": 930,
            "expression": {
              "type": "CallExpression",
              "start": 919,
              "end": 929,
              "callee": {
                "type": "MemberExpression",
                "start": 919,
                "end": 927,
                "object": {
                  "type": "Identifier",
                  "start": 919,
                  "end": 920,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 921,
                  "end": 927,
                  "decorators": [],
                  "name": "follow",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 938,
        "end": 955,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 944,
            "end": 953,
            "expression": {
              "type": "CallExpression",
              "start": 944,
              "end": 952,
              "callee": {
                "type": "MemberExpression",
                "start": 944,
                "end": 950,
                "object": {
                  "type": "Identifier",
                  "start": 944,
                  "end": 945,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 946,
                  "end": 950,
                  "decorators": [],
                  "name": "lead",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
