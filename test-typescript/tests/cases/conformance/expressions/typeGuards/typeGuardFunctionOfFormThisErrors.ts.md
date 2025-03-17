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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 16,
        "name": "RoyalGuard",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 17,
        "end": 198,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 23,
            "end": 102,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 31,
              "name": "isLeader",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 102,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "LeadGuard",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
                        "name": "LeadGuard",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 107,
            "end": 196,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 117,
              "name": "isFollower",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 117,
              "end": 196,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "FollowerGuard",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
                        "name": "FollowerGuard",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
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
      "type": "ClassDeclaration",
      "start": 200,
      "end": 259,
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 215,
        "name": "LeadGuard",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 224,
        "end": 234,
        "name": "RoyalGuard",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 235,
        "end": 259,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 241,
            "end": 256,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 241,
              "end": 245,
              "name": "lead",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 245,
              "end": 256,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 254,
                "end": 256,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 247,
                "end": 253,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 249,
                  "end": 253
                }
              }
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
      "type": "ClassDeclaration",
      "start": 261,
      "end": 326,
      "id": {
        "type": "Identifier",
        "start": 267,
        "end": 280,
        "name": "FollowerGuard",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 289,
        "end": 299,
        "name": "RoyalGuard",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 300,
        "end": 326,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 306,
            "end": 323,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 306,
              "end": 312,
              "name": "follow",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 312,
              "end": 323,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 321,
                "end": 323,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 314,
                "end": 320,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 316,
                  "end": 320
                }
              }
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
      "type": "TSInterfaceDeclaration",
      "start": 328,
      "end": 374,
      "id": {
        "type": "Identifier",
        "start": 338,
        "end": 352,
        "name": "GuardInterface",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 361,
          "end": 371,
          "expression": {
            "type": "Identifier",
            "start": 361,
            "end": 371,
            "name": "RoyalGuard",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 379,
          "end": 414,
          "id": {
            "type": "Identifier",
            "start": 379,
            "end": 392,
            "name": "a",
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
                  "name": "RoyalGuard",
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
          "init": {
            "type": "NewExpression",
            "start": 395,
            "end": 414,
            "callee": {
              "type": "Identifier",
              "start": 399,
              "end": 412,
              "name": "FollowerGuard",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 416,
      "end": 456,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 420,
          "end": 455,
          "id": {
            "type": "Identifier",
            "start": 420,
            "end": 437,
            "name": "b",
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
                  "name": "GuardInterface",
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
          "init": {
            "type": "NewExpression",
            "start": 440,
            "end": 455,
            "callee": {
              "type": "Identifier",
              "start": 444,
              "end": 453,
              "name": "LeadGuard",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
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
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 505,
            "end": 515,
            "name": "isFollower",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 518,
          "end": 528,
          "object": {
            "type": "Identifier",
            "start": 518,
            "end": 519,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 520,
            "end": 528,
            "name": "isLeader",
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
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 532,
            "end": 540,
            "name": "isLeader",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 543,
          "end": 555,
          "object": {
            "type": "Identifier",
            "start": 543,
            "end": 544,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 545,
            "end": 555,
            "name": "isFollower",
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
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 560,
            "end": 570,
            "name": "isFollower",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 573,
          "end": 583,
          "object": {
            "type": "Identifier",
            "start": 573,
            "end": 574,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 575,
            "end": 583,
            "name": "isLeader",
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
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 587,
            "end": 595,
            "name": "isLeader",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 598,
          "end": 610,
          "object": {
            "type": "Identifier",
            "start": 598,
            "end": 599,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 600,
            "end": 610,
            "name": "isFollower",
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
      "type": "FunctionDeclaration",
      "start": 613,
      "end": 680,
      "id": {
        "type": "Identifier",
        "start": 622,
        "end": 634,
        "name": "invalidGuard",
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
          "start": 635,
          "end": 641,
          "name": "c",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 636,
            "end": 641,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 638,
              "end": 641
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
      "declare": false,
      "typeParameters": null,
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
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 682,
      "end": 707,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 686,
          "end": 706,
          "id": {
            "type": "Identifier",
            "start": 686,
            "end": 706,
            "name": "c",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
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
          "name": "invalidGuard",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 725,
            "end": 726,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
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
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 761,
          "end": 784,
          "id": {
            "type": "Identifier",
            "start": 761,
            "end": 767,
            "name": "holder",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 771,
                  "end": 783,
                  "name": "invalidGuard",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 771,
                  "end": 783,
                  "name": "invalidGuard",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
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
            "name": "holder",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 798,
            "end": 810,
            "name": "invalidGuard",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 811,
            "end": 812,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
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
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "holder",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "holder",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 871,
          "end": 894,
          "id": {
            "type": "Identifier",
            "start": 871,
            "end": 879,
            "name": "detached",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 882,
            "end": 894,
            "object": {
              "type": "Identifier",
              "start": 882,
              "end": 883,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 884,
              "end": 894,
              "name": "isFollower",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
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
          "name": "detached",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
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
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 921,
                  "end": 927,
                  "name": "follow",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
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
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 946,
                  "end": 950,
                  "name": "lead",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
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
