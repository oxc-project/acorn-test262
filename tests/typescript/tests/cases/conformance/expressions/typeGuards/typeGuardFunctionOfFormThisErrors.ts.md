__ESTREE_TEST__:AST:
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
        "name": "RoyalGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 16
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
              "name": "isLeader",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 31
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
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 35,
                    "end": 39
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "LeadGuard",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 43,
                        "end": 52
                      },
                      "typeArguments": null,
                      "start": 43,
                      "end": 52
                    },
                    "start": 43,
                    "end": 52
                  },
                  "start": 35,
                  "end": 52
                },
                "start": 33,
                "end": 52
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "ThisExpression",
                        "start": 70,
                        "end": 74
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "LeadGuard",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 86,
                        "end": 95
                      },
                      "start": 70,
                      "end": 95
                    },
                    "start": 63,
                    "end": 96
                  }
                ],
                "start": 53,
                "end": 102
              },
              "expression": false,
              "start": 31,
              "end": 102
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 23,
            "end": 102
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFollower",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 117
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
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 121,
                    "end": 125
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FollowerGuard",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 129,
                        "end": 142
                      },
                      "typeArguments": null,
                      "start": 129,
                      "end": 142
                    },
                    "start": 129,
                    "end": 142
                  },
                  "start": 121,
                  "end": 142
                },
                "start": 119,
                "end": 142
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "ThisExpression",
                        "start": 160,
                        "end": 164
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FollowerGuard",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 176,
                        "end": 189
                      },
                      "start": 160,
                      "end": 189
                    },
                    "start": 153,
                    "end": 190
                  }
                ],
                "start": 143,
                "end": 196
              },
              "expression": false,
              "start": 117,
              "end": 196
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 107,
            "end": 196
          }
        ],
        "start": 17,
        "end": 198
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 198
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LeadGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 215
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "RoyalGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 224,
        "end": 234
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
              "name": "lead",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 245
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
                  "type": "TSVoidKeyword",
                  "start": 249,
                  "end": 253
                },
                "start": 247,
                "end": 253
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 254,
                "end": 256
              },
              "expression": false,
              "start": 245,
              "end": 256
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 241,
            "end": 256
          }
        ],
        "start": 235,
        "end": 259
      },
      "abstract": false,
      "declare": false,
      "start": 200,
      "end": 259
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FollowerGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 267,
        "end": 280
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "RoyalGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 289,
        "end": 299
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
              "name": "follow",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 312
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
                  "type": "TSVoidKeyword",
                  "start": 316,
                  "end": 320
                },
                "start": 314,
                "end": 320
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 321,
                "end": 323
              },
              "expression": false,
              "start": 312,
              "end": 323
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 306,
            "end": 323
          }
        ],
        "start": 300,
        "end": 326
      },
      "abstract": false,
      "declare": false,
      "start": 261,
      "end": 326
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GuardInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 338,
        "end": 352
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "RoyalGuard",
            "optional": false,
            "typeAnnotation": null,
            "start": 361,
            "end": 371
          },
          "typeArguments": null,
          "start": 361,
          "end": 371
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 372,
        "end": 374
      },
      "declare": false,
      "start": 328,
      "end": 374
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RoyalGuard",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 382,
                  "end": 392
                },
                "typeArguments": null,
                "start": 382,
                "end": 392
              },
              "start": 380,
              "end": 392
            },
            "start": 379,
            "end": 392
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "FollowerGuard",
              "optional": false,
              "typeAnnotation": null,
              "start": 399,
              "end": 412
            },
            "typeArguments": null,
            "arguments": [],
            "start": 395,
            "end": 414
          },
          "definite": false,
          "start": 379,
          "end": 414
        }
      ],
      "declare": false,
      "start": 375,
      "end": 415
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "GuardInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 423,
                  "end": 437
                },
                "typeArguments": null,
                "start": 423,
                "end": 437
              },
              "start": 421,
              "end": 437
            },
            "start": 420,
            "end": 437
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "LeadGuard",
              "optional": false,
              "typeAnnotation": null,
              "start": 444,
              "end": 453
            },
            "typeArguments": null,
            "arguments": [],
            "start": 440,
            "end": 455
          },
          "definite": false,
          "start": 420,
          "end": 455
        }
      ],
      "declare": false,
      "start": 416,
      "end": 456
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 503,
            "end": 504
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFollower",
            "optional": false,
            "typeAnnotation": null,
            "start": 505,
            "end": 515
          },
          "optional": false,
          "computed": false,
          "start": 503,
          "end": 515
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 518,
            "end": 519
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null,
            "start": 520,
            "end": 528
          },
          "optional": false,
          "computed": false,
          "start": 518,
          "end": 528
        },
        "start": 503,
        "end": 528
      },
      "directive": null,
      "start": 503,
      "end": 529
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 530,
            "end": 531
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null,
            "start": 532,
            "end": 540
          },
          "optional": false,
          "computed": false,
          "start": 530,
          "end": 540
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 543,
            "end": 544
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFollower",
            "optional": false,
            "typeAnnotation": null,
            "start": 545,
            "end": 555
          },
          "optional": false,
          "computed": false,
          "start": 543,
          "end": 555
        },
        "start": 530,
        "end": 555
      },
      "directive": null,
      "start": 530,
      "end": 556
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 558,
            "end": 559
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFollower",
            "optional": false,
            "typeAnnotation": null,
            "start": 560,
            "end": 570
          },
          "optional": false,
          "computed": false,
          "start": 558,
          "end": 570
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 573,
            "end": 574
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null,
            "start": 575,
            "end": 583
          },
          "optional": false,
          "computed": false,
          "start": 573,
          "end": 583
        },
        "start": 558,
        "end": 583
      },
      "directive": null,
      "start": 558,
      "end": 584
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 585,
            "end": 586
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null,
            "start": 587,
            "end": 595
          },
          "optional": false,
          "computed": false,
          "start": 585,
          "end": 595
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 598,
            "end": 599
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFollower",
            "optional": false,
            "typeAnnotation": null,
            "start": 600,
            "end": 610
          },
          "optional": false,
          "computed": false,
          "start": 598,
          "end": 610
        },
        "start": 585,
        "end": 610
      },
      "directive": null,
      "start": 585,
      "end": 611
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invalidGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 622,
        "end": 634
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 638,
              "end": 641
            },
            "start": 636,
            "end": 641
          },
          "start": 635,
          "end": 641
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "TSThisType",
            "start": 644,
            "end": 648
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 652,
              "end": 658
            },
            "start": 652,
            "end": 658
          },
          "start": 644,
          "end": 658
        },
        "start": 642,
        "end": 658
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 672,
              "end": 677
            },
            "start": 665,
            "end": 678
          }
        ],
        "start": 659,
        "end": 680
      },
      "expression": false,
      "start": 613,
      "end": 680
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 689,
                    "end": 695
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 698,
                      "end": 704
                    },
                    "start": 698,
                    "end": 706
                  }
                ],
                "start": 689,
                "end": 706
              },
              "start": 687,
              "end": 706
            },
            "start": 686,
            "end": 706
          },
          "init": null,
          "definite": false,
          "start": 686,
          "end": 706
        }
      ],
      "declare": false,
      "start": 682,
      "end": 707
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "invalidGuard",
          "optional": false,
          "typeAnnotation": null,
          "start": 712,
          "end": 724
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 725,
            "end": 726
          }
        ],
        "optional": false,
        "start": 712,
        "end": 727
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 735,
              "end": 736
            },
            "directive": null,
            "start": 735,
            "end": 737
          }
        ],
        "start": 729,
        "end": 739
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 751,
              "end": 752
            },
            "directive": null,
            "start": 751,
            "end": 753
          }
        ],
        "start": 745,
        "end": 755
      },
      "start": 708,
      "end": 755
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "holder",
            "optional": false,
            "typeAnnotation": null,
            "start": 761,
            "end": 767
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "invalidGuard",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 771,
                  "end": 783
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "invalidGuard",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 771,
                  "end": 783
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 771,
                "end": 783
              }
            ],
            "start": 770,
            "end": 784
          },
          "definite": false,
          "start": 761,
          "end": 784
        }
      ],
      "declare": false,
      "start": 757,
      "end": 785
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "holder",
            "optional": false,
            "typeAnnotation": null,
            "start": 791,
            "end": 797
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "invalidGuard",
            "optional": false,
            "typeAnnotation": null,
            "start": 798,
            "end": 810
          },
          "optional": false,
          "computed": false,
          "start": 791,
          "end": 810
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 811,
            "end": 812
          }
        ],
        "optional": false,
        "start": 791,
        "end": 813
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 821,
              "end": 822
            },
            "directive": null,
            "start": 821,
            "end": 823
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "holder",
              "optional": false,
              "typeAnnotation": null,
              "start": 828,
              "end": 834
            },
            "directive": null,
            "start": 828,
            "end": 835
          }
        ],
        "start": 815,
        "end": 837
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 849,
              "end": 850
            },
            "directive": null,
            "start": 849,
            "end": 851
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "holder",
              "optional": false,
              "typeAnnotation": null,
              "start": 856,
              "end": 862
            },
            "directive": null,
            "start": 856,
            "end": 863
          }
        ],
        "start": 843,
        "end": 865
      },
      "start": 787,
      "end": 865
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "detached",
            "optional": false,
            "typeAnnotation": null,
            "start": 871,
            "end": 879
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 882,
              "end": 883
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFollower",
              "optional": false,
              "typeAnnotation": null,
              "start": 884,
              "end": 894
            },
            "optional": false,
            "computed": false,
            "start": 882,
            "end": 894
          },
          "definite": false,
          "start": 871,
          "end": 894
        }
      ],
      "declare": false,
      "start": 867,
      "end": 895
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "detached",
          "optional": false,
          "typeAnnotation": null,
          "start": 901,
          "end": 909
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 901,
        "end": 911
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 919,
                  "end": 920
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "follow",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 921,
                  "end": 927
                },
                "optional": false,
                "computed": false,
                "start": 919,
                "end": 927
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 919,
              "end": 929
            },
            "directive": null,
            "start": 919,
            "end": 930
          }
        ],
        "start": 913,
        "end": 932
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 944,
                  "end": 945
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "lead",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 946,
                  "end": 950
                },
                "optional": false,
                "computed": false,
                "start": 944,
                "end": 950
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 944,
              "end": 952
            },
            "directive": null,
            "start": 944,
            "end": 953
          }
        ],
        "start": 938,
        "end": 955
      },
      "start": 897,
      "end": 955
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 955
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "RoyalGuard",
    "start": 6,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "isLeader",
    "start": 23,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 35,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 40,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "LeadGuard",
    "start": 43,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 63,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 70,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 75,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "LeadGuard",
    "start": 86,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "isFollower",
    "start": 107,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 121,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 126,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "FollowerGuard",
    "start": 129,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 153,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 160,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 165,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "FollowerGuard",
    "start": 176,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 200,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "LeadGuard",
    "start": 206,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 216,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "RoyalGuard",
    "start": 224,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "lead",
    "start": 241,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 249,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 261,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "FollowerGuard",
    "start": 267,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 281,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "RoyalGuard",
    "start": 289,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "follow",
    "start": 306,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 316,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 328,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "GuardInterface",
    "start": 338,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 353,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "RoyalGuard",
    "start": 361,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 375,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "RoyalGuard",
    "start": 382,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 393,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 395,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "FollowerGuard",
    "start": 399,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 416,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "GuardInterface",
    "start": 423,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 438,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 440,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "LeadGuard",
    "start": 444,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "isFollower",
    "start": 505,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "isLeader",
    "start": 520,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "isLeader",
    "start": 532,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "isFollower",
    "start": 545,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "isFollower",
    "start": 560,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "isLeader",
    "start": 575,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "isLeader",
    "start": 587,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "isFollower",
    "start": 600,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 613,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "invalidGuard",
    "start": 622,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 638,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 642,
    "end": 643
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 644,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 649,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 652,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 659,
    "end": 660
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 665,
    "end": 671
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 672,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 682,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 689,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 698,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 706,
    "end": 707
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 708,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "invalidGuard",
    "start": 712,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 738,
    "end": 739
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 740,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 754,
    "end": 755
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 757,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "holder",
    "start": 761,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "invalidGuard",
    "start": 771,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 784,
    "end": 785
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 787,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "holder",
    "start": 791,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "invalidGuard",
    "start": 798,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "holder",
    "start": 828,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 836,
    "end": 837
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 838,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "holder",
    "start": 856,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 864,
    "end": 865
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 867,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "detached",
    "start": 871,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "isFollower",
    "start": 884,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 894,
    "end": 895
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 897,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "detached",
    "start": 901,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "follow",
    "start": 921,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 931,
    "end": 932
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 933,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "lead",
    "start": 946,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 954,
    "end": 955
  }
]
```
