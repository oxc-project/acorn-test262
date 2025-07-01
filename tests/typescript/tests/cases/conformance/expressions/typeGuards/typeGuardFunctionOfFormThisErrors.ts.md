__ESTREE_TEST__:PASS:
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
