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
                  "start": 335,
                  "end": 345
                },
                "typeArguments": null,
                "start": 335,
                "end": 345
              },
              "start": 333,
              "end": 345
            },
            "start": 332,
            "end": 345
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "FollowerGuard",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 365
            },
            "typeArguments": null,
            "arguments": [],
            "start": 348,
            "end": 367
          },
          "definite": false,
          "start": 332,
          "end": 367
        }
      ],
      "declare": false,
      "start": 328,
      "end": 368
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 373,
            "end": 374
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null,
            "start": 375,
            "end": 383
          },
          "optional": false,
          "computed": false,
          "start": 373,
          "end": 383
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 373,
        "end": 385
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
                  "start": 393,
                  "end": 394
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "lead",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 395,
                  "end": 399
                },
                "optional": false,
                "computed": false,
                "start": 393,
                "end": 399
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 393,
              "end": 401
            },
            "directive": null,
            "start": 393,
            "end": 402
          }
        ],
        "start": 387,
        "end": 404
      },
      "alternate": {
        "type": "IfStatement",
        "test": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 415
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFollower",
              "optional": false,
              "typeAnnotation": null,
              "start": 416,
              "end": 426
            },
            "optional": false,
            "computed": false,
            "start": 414,
            "end": 426
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 414,
          "end": 428
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
                    "start": 436,
                    "end": 437
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "follow",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 438,
                    "end": 444
                  },
                  "optional": false,
                  "computed": false,
                  "start": 436,
                  "end": 444
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 436,
                "end": 446
              },
              "directive": null,
              "start": 436,
              "end": 447
            }
          ],
          "start": 430,
          "end": 449
        },
        "alternate": null,
        "start": 410,
        "end": 449
      },
      "start": 369,
      "end": 449
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GuardInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 461,
        "end": 475
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
            "start": 484,
            "end": 494
          },
          "typeArguments": null,
          "start": 484,
          "end": 494
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 495,
        "end": 497
      },
      "declare": false,
      "start": 451,
      "end": 497
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
                  "start": 506,
                  "end": 520
                },
                "typeArguments": null,
                "start": 506,
                "end": 520
              },
              "start": 504,
              "end": 520
            },
            "start": 503,
            "end": 520
          },
          "init": null,
          "definite": false,
          "start": 503,
          "end": 520
        }
      ],
      "declare": false,
      "start": 499,
      "end": 521
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 526,
            "end": 527
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null,
            "start": 528,
            "end": 536
          },
          "optional": false,
          "computed": false,
          "start": 526,
          "end": 536
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 526,
        "end": 538
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 546,
                  "end": 547
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "lead",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 548,
                  "end": 552
                },
                "optional": false,
                "computed": false,
                "start": 546,
                "end": 552
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 546,
              "end": 554
            },
            "directive": null,
            "start": 546,
            "end": 555
          }
        ],
        "start": 540,
        "end": 557
      },
      "alternate": {
        "type": "IfStatement",
        "test": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 567,
              "end": 568
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFollower",
              "optional": false,
              "typeAnnotation": null,
              "start": 569,
              "end": 579
            },
            "optional": false,
            "computed": false,
            "start": 567,
            "end": 579
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 567,
          "end": 581
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 589,
                    "end": 590
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "follow",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 591,
                    "end": 597
                  },
                  "optional": false,
                  "computed": false,
                  "start": 589,
                  "end": 597
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 589,
                "end": 599
              },
              "directive": null,
              "start": 589,
              "end": 600
            }
          ],
          "start": 583,
          "end": 602
        },
        "alternate": null,
        "start": 563,
        "end": 602
      },
      "start": 522,
      "end": 602
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "holder2",
            "optional": false,
            "typeAnnotation": null,
            "start": 830,
            "end": 837
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 841,
                  "end": 842
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 841,
                  "end": 842
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 841,
                "end": 842
              }
            ],
            "start": 840,
            "end": 843
          },
          "definite": false,
          "start": 830,
          "end": 843
        }
      ],
      "declare": false,
      "start": 826,
      "end": 844
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "holder2",
              "optional": false,
              "typeAnnotation": null,
              "start": 850,
              "end": 857
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 858,
              "end": 859
            },
            "optional": false,
            "computed": false,
            "start": 850,
            "end": 859
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null,
            "start": 860,
            "end": 868
          },
          "optional": false,
          "computed": false,
          "start": 850,
          "end": 868
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 850,
        "end": 870
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "holder2",
                "optional": false,
                "typeAnnotation": null,
                "start": 878,
                "end": 885
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 886,
                "end": 887
              },
              "optional": false,
              "computed": false,
              "start": 878,
              "end": 887
            },
            "directive": null,
            "start": 878,
            "end": 888
          }
        ],
        "start": 872,
        "end": 890
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "holder2",
                "optional": false,
                "typeAnnotation": null,
                "start": 902,
                "end": 909
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 910,
                "end": 911
              },
              "optional": false,
              "computed": false,
              "start": 902,
              "end": 911
            },
            "directive": null,
            "start": 902,
            "end": 912
          }
        ],
        "start": 896,
        "end": 914
      },
      "start": 846,
      "end": 914
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArrowGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 922,
        "end": 932
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isElite",
              "optional": false,
              "typeAnnotation": null,
              "start": 939,
              "end": 946
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 953,
                    "end": 957
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ArrowElite",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 961,
                        "end": 971
                      },
                      "typeArguments": null,
                      "start": 961,
                      "end": 971
                    },
                    "start": 961,
                    "end": 971
                  },
                  "start": 953,
                  "end": 971
                },
                "start": 951,
                "end": 971
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
                        "start": 992,
                        "end": 996
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ArrowElite",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1008,
                        "end": 1018
                      },
                      "start": 992,
                      "end": 1018
                    },
                    "start": 985,
                    "end": 1019
                  }
                ],
                "start": 975,
                "end": 1025
              },
              "id": null,
              "generator": false,
              "start": 949,
              "end": 1025
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 939,
            "end": 1025
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isMedic",
              "optional": false,
              "typeAnnotation": null,
              "start": 1030,
              "end": 1037
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 1044,
                    "end": 1048
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ArrowMedic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1052,
                        "end": 1062
                      },
                      "typeArguments": null,
                      "start": 1052,
                      "end": 1062
                    },
                    "start": 1052,
                    "end": 1062
                  },
                  "start": 1044,
                  "end": 1062
                },
                "start": 1042,
                "end": 1062
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
                        "start": 1083,
                        "end": 1087
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ArrowMedic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1099,
                        "end": 1109
                      },
                      "start": 1083,
                      "end": 1109
                    },
                    "start": 1076,
                    "end": 1110
                  }
                ],
                "start": 1066,
                "end": 1116
              },
              "id": null,
              "generator": false,
              "start": 1040,
              "end": 1116
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1030,
            "end": 1116
          }
        ],
        "start": 933,
        "end": 1118
      },
      "abstract": false,
      "declare": false,
      "start": 916,
      "end": 1118
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArrowElite",
        "optional": false,
        "typeAnnotation": null,
        "start": 1126,
        "end": 1136
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArrowGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 1145,
        "end": 1155
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
              "name": "defend",
              "optional": false,
              "typeAnnotation": null,
              "start": 1162,
              "end": 1168
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
                  "start": 1172,
                  "end": 1176
                },
                "start": 1170,
                "end": 1176
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1177,
                "end": 1179
              },
              "expression": false,
              "start": 1168,
              "end": 1179
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1162,
            "end": 1179
          }
        ],
        "start": 1156,
        "end": 1181
      },
      "abstract": false,
      "declare": false,
      "start": 1120,
      "end": 1181
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArrowMedic",
        "optional": false,
        "typeAnnotation": null,
        "start": 1189,
        "end": 1199
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArrowGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 1208,
        "end": 1218
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
              "name": "heal",
              "optional": false,
              "typeAnnotation": null,
              "start": 1225,
              "end": 1229
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
                  "start": 1233,
                  "end": 1237
                },
                "start": 1231,
                "end": 1237
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1238,
                "end": 1240
              },
              "expression": false,
              "start": 1229,
              "end": 1240
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1225,
            "end": 1240
          }
        ],
        "start": 1219,
        "end": 1242
      },
      "abstract": false,
      "declare": false,
      "start": 1183,
      "end": 1242
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
            "name": "guard",
            "optional": false,
            "typeAnnotation": null,
            "start": 1248,
            "end": 1253
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArrowGuard",
              "optional": false,
              "typeAnnotation": null,
              "start": 1260,
              "end": 1270
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1256,
            "end": 1272
          },
          "definite": false,
          "start": 1248,
          "end": 1272
        }
      ],
      "declare": false,
      "start": 1244,
      "end": 1273
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
            "name": "guard",
            "optional": false,
            "typeAnnotation": null,
            "start": 1278,
            "end": 1283
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isElite",
            "optional": false,
            "typeAnnotation": null,
            "start": 1284,
            "end": 1291
          },
          "optional": false,
          "computed": false,
          "start": 1278,
          "end": 1291
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1278,
        "end": 1293
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
                  "name": "guard",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1301,
                  "end": 1306
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "defend",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1307,
                  "end": 1313
                },
                "optional": false,
                "computed": false,
                "start": 1301,
                "end": 1313
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1301,
              "end": 1315
            },
            "directive": null,
            "start": 1301,
            "end": 1316
          }
        ],
        "start": 1295,
        "end": 1318
      },
      "alternate": {
        "type": "IfStatement",
        "test": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "guard",
              "optional": false,
              "typeAnnotation": null,
              "start": 1328,
              "end": 1333
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "isMedic",
              "optional": false,
              "typeAnnotation": null,
              "start": 1334,
              "end": 1341
            },
            "optional": false,
            "computed": false,
            "start": 1328,
            "end": 1341
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1328,
          "end": 1343
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
                    "name": "guard",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1351,
                    "end": 1356
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "heal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1357,
                    "end": 1361
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1351,
                  "end": 1361
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1351,
                "end": 1363
              },
              "directive": null,
              "start": 1351,
              "end": 1364
            }
          ],
          "start": 1345,
          "end": 1366
        },
        "alternate": null,
        "start": 1324,
        "end": 1366
      },
      "start": 1274,
      "end": 1366
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Supplies",
        "optional": false,
        "typeAnnotation": null,
        "start": 1378,
        "end": 1386
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "spoiled",
              "optional": false,
              "typeAnnotation": null,
              "start": 1393,
              "end": 1400
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1402,
                "end": 1409
              },
              "start": 1400,
              "end": 1409
            },
            "accessibility": null,
            "static": false,
            "start": 1393,
            "end": 1410
          }
        ],
        "start": 1387,
        "end": 1412
      },
      "declare": false,
      "start": 1368,
      "end": 1412
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sundries",
        "optional": false,
        "typeAnnotation": null,
        "start": 1424,
        "end": 1432
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "broken",
              "optional": false,
              "typeAnnotation": null,
              "start": 1439,
              "end": 1445
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1447,
                "end": 1454
              },
              "start": 1445,
              "end": 1454
            },
            "accessibility": null,
            "static": false,
            "start": 1439,
            "end": 1455
          }
        ],
        "start": 1433,
        "end": 1457
      },
      "declare": false,
      "start": 1414,
      "end": 1457
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Crate",
        "optional": false,
        "typeAnnotation": null,
        "start": 1469,
        "end": 1474
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
              "start": 1475,
              "end": 1476
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1475,
            "end": 1476
          }
        ],
        "start": 1474,
        "end": 1477
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "contents",
              "optional": false,
              "typeAnnotation": null,
              "start": 1484,
              "end": 1492
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1494,
                  "end": 1495
                },
                "typeArguments": null,
                "start": 1494,
                "end": 1495
              },
              "start": 1492,
              "end": 1495
            },
            "accessibility": null,
            "static": false,
            "start": 1484,
            "end": 1496
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "volume",
              "optional": false,
              "typeAnnotation": null,
              "start": 1501,
              "end": 1507
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1509,
                "end": 1515
              },
              "start": 1507,
              "end": 1515
            },
            "accessibility": null,
            "static": false,
            "start": 1501,
            "end": 1516
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isSupplies",
              "optional": false,
              "typeAnnotation": null,
              "start": 1521,
              "end": 1531
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "TSThisType",
                  "start": 1535,
                  "end": 1539
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Crate",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1543,
                      "end": 1548
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Supplies",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1549,
                            "end": 1557
                          },
                          "typeArguments": null,
                          "start": 1549,
                          "end": 1557
                        }
                      ],
                      "start": 1548,
                      "end": 1558
                    },
                    "start": 1543,
                    "end": 1558
                  },
                  "start": 1543,
                  "end": 1558
                },
                "start": 1535,
                "end": 1558
              },
              "start": 1533,
              "end": 1558
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1521,
            "end": 1559
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isSundries",
              "optional": false,
              "typeAnnotation": null,
              "start": 1564,
              "end": 1574
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "TSThisType",
                  "start": 1578,
                  "end": 1582
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Crate",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1586,
                      "end": 1591
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Sundries",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1592,
                            "end": 1600
                          },
                          "typeArguments": null,
                          "start": 1592,
                          "end": 1600
                        }
                      ],
                      "start": 1591,
                      "end": 1601
                    },
                    "start": 1586,
                    "end": 1601
                  },
                  "start": 1586,
                  "end": 1601
                },
                "start": 1578,
                "end": 1601
              },
              "start": 1576,
              "end": 1601
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1564,
            "end": 1602
          }
        ],
        "start": 1478,
        "end": 1604
      },
      "declare": false,
      "start": 1459,
      "end": 1604
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
            "name": "crate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Crate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1617,
                  "end": 1622
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 1623,
                      "end": 1625
                    }
                  ],
                  "start": 1622,
                  "end": 1626
                },
                "start": 1617,
                "end": 1626
              },
              "start": 1615,
              "end": 1626
            },
            "start": 1610,
            "end": 1626
          },
          "init": null,
          "definite": false,
          "start": 1610,
          "end": 1626
        }
      ],
      "declare": false,
      "start": 1606,
      "end": 1627
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
            "name": "crate",
            "optional": false,
            "typeAnnotation": null,
            "start": 1633,
            "end": 1638
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isSundries",
            "optional": false,
            "typeAnnotation": null,
            "start": 1639,
            "end": 1649
          },
          "optional": false,
          "computed": false,
          "start": 1633,
          "end": 1649
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1633,
        "end": 1651
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "crate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1659,
                    "end": 1664
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "contents",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1665,
                    "end": 1673
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1659,
                  "end": 1673
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "broken",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1674,
                  "end": 1680
                },
                "optional": false,
                "computed": false,
                "start": 1659,
                "end": 1680
              },
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1683,
                "end": 1687
              },
              "start": 1659,
              "end": 1687
            },
            "directive": null,
            "start": 1659,
            "end": 1688
          }
        ],
        "start": 1653,
        "end": 1690
      },
      "alternate": {
        "type": "IfStatement",
        "test": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "crate",
              "optional": false,
              "typeAnnotation": null,
              "start": 1700,
              "end": 1705
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "isSupplies",
              "optional": false,
              "typeAnnotation": null,
              "start": 1706,
              "end": 1716
            },
            "optional": false,
            "computed": false,
            "start": 1700,
            "end": 1716
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1700,
          "end": 1718
        },
        "consequent": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "crate",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1726,
                      "end": 1731
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "contents",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1732,
                      "end": 1740
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1726,
                    "end": 1740
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "spoiled",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1741,
                    "end": 1748
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1726,
                  "end": 1748
                },
                "right": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1751,
                  "end": 1755
                },
                "start": 1726,
                "end": 1755
              },
              "directive": null,
              "start": 1726,
              "end": 1756
            }
          ],
          "start": 1720,
          "end": 1758
        },
        "alternate": null,
        "start": 1696,
        "end": 1758
      },
      "start": 1629,
      "end": 1758
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
            "start": 1801,
            "end": 1802
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFollower",
            "optional": false,
            "typeAnnotation": null,
            "start": 1803,
            "end": 1813
          },
          "optional": false,
          "computed": false,
          "start": 1801,
          "end": 1813
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1816,
            "end": 1817
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFollower",
            "optional": false,
            "typeAnnotation": null,
            "start": 1818,
            "end": 1828
          },
          "optional": false,
          "computed": false,
          "start": 1816,
          "end": 1828
        },
        "start": 1801,
        "end": 1828
      },
      "directive": null,
      "start": 1801,
      "end": 1829
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
            "start": 1830,
            "end": 1831
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null,
            "start": 1832,
            "end": 1840
          },
          "optional": false,
          "computed": false,
          "start": 1830,
          "end": 1840
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1843,
            "end": 1844
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null,
            "start": 1845,
            "end": 1853
          },
          "optional": false,
          "computed": false,
          "start": 1843,
          "end": 1853
        },
        "start": 1830,
        "end": 1853
      },
      "directive": null,
      "start": 1830,
      "end": 1854
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MimicGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 1862,
        "end": 1872
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
              "start": 1879,
              "end": 1887
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
                    "start": 1891,
                    "end": 1895
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MimicLeader",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1899,
                        "end": 1910
                      },
                      "typeArguments": null,
                      "start": 1899,
                      "end": 1910
                    },
                    "start": 1899,
                    "end": 1910
                  },
                  "start": 1891,
                  "end": 1910
                },
                "start": 1889,
                "end": 1910
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
                        "start": 1920,
                        "end": 1924
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MimicLeader",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1936,
                        "end": 1947
                      },
                      "start": 1920,
                      "end": 1947
                    },
                    "start": 1913,
                    "end": 1948
                  }
                ],
                "start": 1911,
                "end": 1950
              },
              "expression": false,
              "start": 1887,
              "end": 1950
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1879,
            "end": 1950
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
              "start": 1956,
              "end": 1966
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
                    "start": 1970,
                    "end": 1974
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MimicFollower",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1978,
                        "end": 1991
                      },
                      "typeArguments": null,
                      "start": 1978,
                      "end": 1991
                    },
                    "start": 1978,
                    "end": 1991
                  },
                  "start": 1970,
                  "end": 1991
                },
                "start": 1968,
                "end": 1991
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
                        "start": 2001,
                        "end": 2005
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MimicFollower",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2017,
                        "end": 2030
                      },
                      "start": 2001,
                      "end": 2030
                    },
                    "start": 1994,
                    "end": 2031
                  }
                ],
                "start": 1992,
                "end": 2033
              },
              "expression": false,
              "start": 1966,
              "end": 2033
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1956,
            "end": 2033
          }
        ],
        "start": 1873,
        "end": 2036
      },
      "abstract": false,
      "declare": false,
      "start": 1856,
      "end": 2036
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MimicLeader",
        "optional": false,
        "typeAnnotation": null,
        "start": 2044,
        "end": 2055
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "MimicGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 2064,
        "end": 2074
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
              "start": 2081,
              "end": 2085
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
                  "start": 2089,
                  "end": 2093
                },
                "start": 2087,
                "end": 2093
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2094,
                "end": 2096
              },
              "expression": false,
              "start": 2085,
              "end": 2096
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2081,
            "end": 2096
          }
        ],
        "start": 2075,
        "end": 2098
      },
      "abstract": false,
      "declare": false,
      "start": 2038,
      "end": 2098
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MimicFollower",
        "optional": false,
        "typeAnnotation": null,
        "start": 2106,
        "end": 2119
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "MimicGuard",
        "optional": false,
        "typeAnnotation": null,
        "start": 2128,
        "end": 2138
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
              "start": 2145,
              "end": 2151
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
                  "start": 2155,
                  "end": 2159
                },
                "start": 2153,
                "end": 2159
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2160,
                "end": 2162
              },
              "expression": false,
              "start": 2151,
              "end": 2162
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2145,
            "end": 2162
          }
        ],
        "start": 2139,
        "end": 2164
      },
      "abstract": false,
      "declare": false,
      "start": 2100,
      "end": 2164
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
            "name": "mimic",
            "optional": false,
            "typeAnnotation": null,
            "start": 2170,
            "end": 2175
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "MimicGuard",
              "optional": false,
              "typeAnnotation": null,
              "start": 2182,
              "end": 2192
            },
            "typeArguments": null,
            "arguments": [],
            "start": 2178,
            "end": 2194
          },
          "definite": false,
          "start": 2170,
          "end": 2194
        }
      ],
      "declare": false,
      "start": 2166,
      "end": 2195
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
            "start": 2197,
            "end": 2198
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null,
            "start": 2199,
            "end": 2207
          },
          "optional": false,
          "computed": false,
          "start": 2197,
          "end": 2207
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mimic",
            "optional": false,
            "typeAnnotation": null,
            "start": 2210,
            "end": 2215
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "typeAnnotation": null,
            "start": 2216,
            "end": 2224
          },
          "optional": false,
          "computed": false,
          "start": 2210,
          "end": 2224
        },
        "start": 2197,
        "end": 2224
      },
      "directive": null,
      "start": 2197,
      "end": 2225
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
            "start": 2226,
            "end": 2227
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFollower",
            "optional": false,
            "typeAnnotation": null,
            "start": 2228,
            "end": 2238
          },
          "optional": false,
          "computed": false,
          "start": 2226,
          "end": 2238
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mimic",
            "optional": false,
            "typeAnnotation": null,
            "start": 2241,
            "end": 2246
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFollower",
            "optional": false,
            "typeAnnotation": null,
            "start": 2247,
            "end": 2257
          },
          "optional": false,
          "computed": false,
          "start": 2241,
          "end": 2257
        },
        "start": 2226,
        "end": 2257
      },
      "directive": null,
      "start": 2226,
      "end": 2258
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
            "name": "mimic",
            "optional": false,
            "typeAnnotation": null,
            "start": 2264,
            "end": 2269
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFollower",
            "optional": false,
            "typeAnnotation": null,
            "start": 2270,
            "end": 2280
          },
          "optional": false,
          "computed": false,
          "start": 2264,
          "end": 2280
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2264,
        "end": 2282
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
                  "name": "mimic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2290,
                  "end": 2295
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "follow",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2296,
                  "end": 2302
                },
                "optional": false,
                "computed": false,
                "start": 2290,
                "end": 2302
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2290,
              "end": 2304
            },
            "directive": null,
            "start": 2290,
            "end": 2305
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
                  "name": "mimic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2310,
                  "end": 2315
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isFollower",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2316,
                  "end": 2326
                },
                "optional": false,
                "computed": false,
                "start": 2310,
                "end": 2326
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2329,
                  "end": 2330
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isFollower",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2331,
                  "end": 2341
                },
                "optional": false,
                "computed": false,
                "start": 2329,
                "end": 2341
              },
              "start": 2310,
              "end": 2341
            },
            "directive": null,
            "start": 2310,
            "end": 2342
          }
        ],
        "start": 2284,
        "end": 2344
      },
      "alternate": null,
      "start": 2260,
      "end": 2344
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MimicGuardInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 2357,
        "end": 2376
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
              "name": "isLeader",
              "optional": false,
              "typeAnnotation": null,
              "start": 2383,
              "end": 2391
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "TSThisType",
                  "start": 2395,
                  "end": 2399
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
                      "start": 2403,
                      "end": 2412
                    },
                    "typeArguments": null,
                    "start": 2403,
                    "end": 2412
                  },
                  "start": 2403,
                  "end": 2412
                },
                "start": 2395,
                "end": 2412
              },
              "start": 2393,
              "end": 2412
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2383,
            "end": 2413
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFollower",
              "optional": false,
              "typeAnnotation": null,
              "start": 2418,
              "end": 2428
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "TSThisType",
                  "start": 2432,
                  "end": 2436
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
                      "start": 2440,
                      "end": 2453
                    },
                    "typeArguments": null,
                    "start": 2440,
                    "end": 2453
                  },
                  "start": 2440,
                  "end": 2453
                },
                "start": 2432,
                "end": 2453
              },
              "start": 2430,
              "end": 2453
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2418,
            "end": 2454
          }
        ],
        "start": 2377,
        "end": 2456
      },
      "declare": false,
      "start": 2347,
      "end": 2456
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2456
}
```
