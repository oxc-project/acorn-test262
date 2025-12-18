__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 27,
                      "end": 30
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 36,
                            "end": 39
                          },
                          "start": 34,
                          "end": 39
                        },
                        "start": 31,
                        "end": 39
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 42,
                        "end": 46
                      },
                      "start": 40,
                      "end": 46
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 27,
                    "end": 47
                  }
                ],
                "start": 21,
                "end": 49
              },
              "start": 19,
              "end": 49
            },
            "start": 12,
            "end": 49
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 49
        }
      ],
      "declare": true,
      "start": 0,
      "end": 49
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 65
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 76
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 78,
                "end": 84
              },
              "start": 76,
              "end": 84
            },
            "accessibility": null,
            "static": false,
            "start": 72,
            "end": 85
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 95
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 97,
                "end": 103
              },
              "start": 95,
              "end": 103
            },
            "accessibility": null,
            "static": false,
            "start": 90,
            "end": 104
          }
        ],
        "start": 66,
        "end": 106
      },
      "declare": false,
      "start": 50,
      "end": 106
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MultiRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 128
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 139
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 141,
                "end": 147
              },
              "start": 139,
              "end": 147
            },
            "accessibility": null,
            "static": false,
            "start": 135,
            "end": 148
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "skills",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 159
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 171,
                      "end": 178
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 181,
                        "end": 187
                      },
                      "start": 179,
                      "end": 187
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 171,
                    "end": 188
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 197,
                      "end": 206
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 209,
                        "end": 215
                      },
                      "start": 207,
                      "end": 215
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 197,
                    "end": 216
                  }
                ],
                "start": 161,
                "end": 222
              },
              "start": 159,
              "end": 222
            },
            "accessibility": null,
            "static": false,
            "start": 153,
            "end": 223
          }
        ],
        "start": 129,
        "end": 225
      },
      "declare": false,
      "start": 108,
      "end": 225
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
            "name": "robot",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 238,
                  "end": 243
                },
                "typeArguments": null,
                "start": 238,
                "end": 243
              },
              "start": 236,
              "end": 243
            },
            "start": 231,
            "end": 243
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 248,
                  "end": 252
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 254,
                  "end": 261
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 248,
                "end": 261
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 263,
                  "end": 268
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 270,
                  "end": 278
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 263,
                "end": 278
              }
            ],
            "start": 246,
            "end": 280
          },
          "definite": false,
          "start": 231,
          "end": 280
        }
      ],
      "declare": false,
      "start": 227,
      "end": 281
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
            "name": "multiRobot",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 308
                },
                "typeArguments": null,
                "start": 298,
                "end": 308
              },
              "start": 296,
              "end": 308
            },
            "start": 286,
            "end": 308
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 313,
                  "end": 317
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 319,
                  "end": 326
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 313,
                "end": 326
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skills",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 328,
                  "end": 334
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "primary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 338,
                        "end": 345
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mowing",
                        "raw": "\"mowing\"",
                        "start": 347,
                        "end": 355
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 338,
                      "end": 355
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "secondary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 357,
                        "end": 366
                      },
                      "value": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 368,
                        "end": 374
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 357,
                      "end": 374
                    }
                  ],
                  "start": 336,
                  "end": 376
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 328,
                "end": 376
              }
            ],
            "start": 311,
            "end": 378
          },
          "definite": false,
          "start": 286,
          "end": 378
        }
      ],
      "declare": false,
      "start": 282,
      "end": 379
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 389,
        "end": 397
      },
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
              "type": "Identifier",
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null,
              "start": 413,
              "end": 418
            },
            "start": 406,
            "end": 419
          }
        ],
        "start": 400,
        "end": 421
      },
      "expression": false,
      "start": 380,
      "end": 421
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getMultiRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 431,
        "end": 444
      },
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
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null,
              "start": 460,
              "end": 470
            },
            "start": 453,
            "end": 471
          }
        ],
        "start": 447,
        "end": 473
      },
      "expression": false,
      "start": 422,
      "end": 473
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
            "name": "nameA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 486,
                "end": 492
              },
              "start": 484,
              "end": 492
            },
            "start": 479,
            "end": 492
          },
          "init": null,
          "definite": false,
          "start": 479,
          "end": 492
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "primaryA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 504,
                "end": 510
              },
              "start": 502,
              "end": 510
            },
            "start": 494,
            "end": 510
          },
          "init": null,
          "definite": false,
          "start": 494,
          "end": 510
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "secondaryA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 524,
                "end": 530
              },
              "start": 522,
              "end": 530
            },
            "start": 512,
            "end": 530
          },
          "init": null,
          "definite": false,
          "start": 512,
          "end": 530
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 535,
                "end": 541
              },
              "start": 533,
              "end": 541
            },
            "start": 532,
            "end": 541
          },
          "init": null,
          "definite": false,
          "start": 532,
          "end": 541
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "skillA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 551,
                "end": 557
              },
              "start": 549,
              "end": 557
            },
            "start": 543,
            "end": 557
          },
          "init": null,
          "definite": false,
          "start": 543,
          "end": 557
        }
      ],
      "declare": false,
      "start": 475,
      "end": 558
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
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 569,
                "end": 575
              },
              "start": 567,
              "end": 575
            },
            "start": 563,
            "end": 575
          },
          "init": null,
          "definite": false,
          "start": 563,
          "end": 575
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "primary",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 586,
                "end": 592
              },
              "start": 584,
              "end": 592
            },
            "start": 577,
            "end": 592
          },
          "init": null,
          "definite": false,
          "start": 577,
          "end": 592
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "secondary",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 605,
                "end": 611
              },
              "start": 603,
              "end": 611
            },
            "start": 594,
            "end": 611
          },
          "init": null,
          "definite": false,
          "start": 594,
          "end": 611
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "skill",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 620,
                "end": 626
              },
              "start": 618,
              "end": 626
            },
            "start": 613,
            "end": 626
          },
          "init": null,
          "definite": false,
          "start": 613,
          "end": 626
        }
      ],
      "declare": false,
      "start": 559,
      "end": 627
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 635,
                    "end": 639
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 641,
                      "end": 646
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 649,
                      "end": 657
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 641,
                    "end": 657
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 635,
                  "end": 657
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 634,
              "end": 659
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null,
              "start": 662,
              "end": 667
            },
            "start": 634,
            "end": 667
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 669,
              "end": 670
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 673,
              "end": 674
            },
            "start": 669,
            "end": 674
          }
        ],
        "start": 634,
        "end": 674
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 676,
          "end": 677
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 680,
          "end": 681
        },
        "start": 676,
        "end": 681
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 683,
          "end": 684
        },
        "start": 683,
        "end": 686
      },
      "body": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 694,
                  "end": 701
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 702,
                  "end": 705
                },
                "optional": false,
                "computed": false,
                "start": 694,
                "end": 705
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 706,
                  "end": 711
                }
              ],
              "optional": false,
              "start": 694,
              "end": 712
            },
            "directive": null,
            "start": 694,
            "end": 713
          }
        ],
        "start": 688,
        "end": 715
      },
      "start": 629,
      "end": 715
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 722,
                    "end": 726
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 728,
                      "end": 733
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 736,
                      "end": 744
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 728,
                    "end": 744
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 722,
                  "end": 744
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 721,
              "end": 746
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 749,
                "end": 757
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 749,
              "end": 759
            },
            "start": 721,
            "end": 759
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 761,
              "end": 762
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 765,
              "end": 766
            },
            "start": 761,
            "end": 766
          }
        ],
        "start": 721,
        "end": 766
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 768,
          "end": 769
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 772,
          "end": 773
        },
        "start": 768,
        "end": 773
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 775,
          "end": 776
        },
        "start": 775,
        "end": 778
      },
      "body": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 786,
                  "end": 793
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 794,
                  "end": 797
                },
                "optional": false,
                "computed": false,
                "start": 786,
                "end": 797
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 798,
                  "end": 803
                }
              ],
              "optional": false,
              "start": 786,
              "end": 804
            },
            "directive": null,
            "start": 786,
            "end": 805
          }
        ],
        "start": 780,
        "end": 807
      },
      "start": 716,
      "end": 807
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 814,
                    "end": 818
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 820,
                      "end": 825
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 828,
                      "end": 836
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 820,
                    "end": 836
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 814,
                  "end": 836
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 813,
              "end": 838
            },
            "right": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 842,
                  "end": 847
                },
                "typeArguments": null,
                "start": 842,
                "end": 847
              },
              "expression": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 850,
                      "end": 854
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 856,
                      "end": 865
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 850,
                    "end": 865
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 867,
                      "end": 872
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 874,
                      "end": 884
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 867,
                    "end": 884
                  }
                ],
                "start": 848,
                "end": 886
              },
              "start": 841,
              "end": 886
            },
            "start": 813,
            "end": 886
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 888,
              "end": 889
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 892,
              "end": 893
            },
            "start": 888,
            "end": 893
          }
        ],
        "start": 813,
        "end": 893
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 895,
          "end": 896
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 899,
          "end": 900
        },
        "start": 895,
        "end": 900
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 902,
          "end": 903
        },
        "start": 902,
        "end": 905
      },
      "body": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 913,
                  "end": 920
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 921,
                  "end": 924
                },
                "optional": false,
                "computed": false,
                "start": 913,
                "end": 924
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 925,
                  "end": 930
                }
              ],
              "optional": false,
              "start": 913,
              "end": 931
            },
            "directive": null,
            "start": 913,
            "end": 932
          }
        ],
        "start": 907,
        "end": 934
      },
      "start": 808,
      "end": 934
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 946,
                    "end": 952
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 964,
                            "end": 971
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 973,
                              "end": 981
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 984,
                              "end": 993
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 973,
                            "end": 993
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 964,
                          "end": 993
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1003,
                            "end": 1012
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1014,
                              "end": 1024
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 1027,
                              "end": 1038
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1014,
                            "end": 1038
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1003,
                          "end": 1038
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 954,
                      "end": 1044
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1049,
                            "end": 1056
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 1058,
                            "end": 1064
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1049,
                          "end": 1064
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1066,
                            "end": 1075
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 1077,
                            "end": 1083
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1066,
                          "end": 1083
                        }
                      ],
                      "start": 1047,
                      "end": 1085
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 954,
                    "end": 1085
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 946,
                  "end": 1085
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 940,
              "end": 1087
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null,
              "start": 1090,
              "end": 1100
            },
            "start": 940,
            "end": 1100
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1102,
              "end": 1103
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1106,
              "end": 1107
            },
            "start": 1102,
            "end": 1107
          }
        ],
        "start": 940,
        "end": 1107
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1109,
          "end": 1110
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1113,
          "end": 1114
        },
        "start": 1109,
        "end": 1114
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1116,
          "end": 1117
        },
        "start": 1116,
        "end": 1119
      },
      "body": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1127,
                  "end": 1134
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1135,
                  "end": 1138
                },
                "optional": false,
                "computed": false,
                "start": 1127,
                "end": 1138
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1139,
                  "end": 1147
                }
              ],
              "optional": false,
              "start": 1127,
              "end": 1148
            },
            "directive": null,
            "start": 1127,
            "end": 1149
          }
        ],
        "start": 1121,
        "end": 1151
      },
      "start": 935,
      "end": 1151
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1163,
                    "end": 1169
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1181,
                            "end": 1188
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1190,
                              "end": 1198
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 1201,
                              "end": 1210
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1190,
                            "end": 1210
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1181,
                          "end": 1210
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1220,
                            "end": 1229
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1231,
                              "end": 1241
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 1244,
                              "end": 1255
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1231,
                            "end": 1255
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1220,
                          "end": 1255
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1171,
                      "end": 1261
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1266,
                            "end": 1273
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 1275,
                            "end": 1281
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1266,
                          "end": 1281
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1283,
                            "end": 1292
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 1294,
                            "end": 1300
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1283,
                          "end": 1300
                        }
                      ],
                      "start": 1264,
                      "end": 1302
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1171,
                    "end": 1302
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1163,
                  "end": 1302
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1157,
              "end": 1304
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1307,
                "end": 1320
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1307,
              "end": 1322
            },
            "start": 1157,
            "end": 1322
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1324,
              "end": 1325
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1328,
              "end": 1329
            },
            "start": 1324,
            "end": 1329
          }
        ],
        "start": 1157,
        "end": 1329
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1331,
          "end": 1332
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1335,
          "end": 1336
        },
        "start": 1331,
        "end": 1336
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1338,
          "end": 1339
        },
        "start": 1338,
        "end": 1341
      },
      "body": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1349,
                  "end": 1356
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1357,
                  "end": 1360
                },
                "optional": false,
                "computed": false,
                "start": 1349,
                "end": 1360
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1361,
                  "end": 1369
                }
              ],
              "optional": false,
              "start": 1349,
              "end": 1370
            },
            "directive": null,
            "start": 1349,
            "end": 1371
          }
        ],
        "start": 1343,
        "end": 1373
      },
      "start": 1152,
      "end": 1373
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1385,
                    "end": 1391
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1403,
                            "end": 1410
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1412,
                              "end": 1420
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 1423,
                              "end": 1432
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1412,
                            "end": 1432
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1403,
                          "end": 1432
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1442,
                            "end": 1451
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1453,
                              "end": 1463
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 1466,
                              "end": 1477
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1453,
                            "end": 1477
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1442,
                          "end": 1477
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1393,
                      "end": 1483
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1488,
                            "end": 1495
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 1497,
                            "end": 1503
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1488,
                          "end": 1503
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1505,
                            "end": 1514
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 1516,
                            "end": 1522
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1505,
                          "end": 1522
                        }
                      ],
                      "start": 1486,
                      "end": 1524
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1393,
                    "end": 1524
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1385,
                  "end": 1524
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1379,
              "end": 1526
            },
            "right": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1530,
                  "end": 1540
                },
                "typeArguments": null,
                "start": 1530,
                "end": 1540
              },
              "expression": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1543,
                      "end": 1547
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 1549,
                      "end": 1558
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1543,
                    "end": 1558
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skills",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1560,
                      "end": 1566
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1570,
                            "end": 1577
                          },
                          "value": {
                            "type": "Literal",
                            "value": "trimming",
                            "raw": "\"trimming\"",
                            "start": 1579,
                            "end": 1589
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1570,
                          "end": 1589
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1591,
                            "end": 1600
                          },
                          "value": {
                            "type": "Literal",
                            "value": "edging",
                            "raw": "\"edging\"",
                            "start": 1602,
                            "end": 1610
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1591,
                          "end": 1610
                        }
                      ],
                      "start": 1568,
                      "end": 1612
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1560,
                    "end": 1612
                  }
                ],
                "start": 1541,
                "end": 1614
              },
              "start": 1529,
              "end": 1614
            },
            "start": 1379,
            "end": 1614
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1620,
              "end": 1621
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1624,
              "end": 1625
            },
            "start": 1620,
            "end": 1625
          }
        ],
        "start": 1379,
        "end": 1625
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1627,
          "end": 1628
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1631,
          "end": 1632
        },
        "start": 1627,
        "end": 1632
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1634,
          "end": 1635
        },
        "start": 1634,
        "end": 1637
      },
      "body": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1645,
                  "end": 1652
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1653,
                  "end": 1656
                },
                "optional": false,
                "computed": false,
                "start": 1645,
                "end": 1656
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1657,
                  "end": 1665
                }
              ],
              "optional": false,
              "start": 1645,
              "end": 1666
            },
            "directive": null,
            "start": 1645,
            "end": 1667
          }
        ],
        "start": 1639,
        "end": 1669
      },
      "start": 1374,
      "end": 1669
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1678,
                    "end": 1682
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1678,
                      "end": 1682
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 1685,
                      "end": 1693
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1678,
                    "end": 1693
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1678,
                  "end": 1693
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1676,
              "end": 1695
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null,
              "start": 1698,
              "end": 1703
            },
            "start": 1676,
            "end": 1703
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1705,
              "end": 1706
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1709,
              "end": 1710
            },
            "start": 1705,
            "end": 1710
          }
        ],
        "start": 1676,
        "end": 1710
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1712,
          "end": 1713
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1716,
          "end": 1717
        },
        "start": 1712,
        "end": 1717
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1719,
          "end": 1720
        },
        "start": 1719,
        "end": 1722
      },
      "body": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1730,
                  "end": 1737
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1738,
                  "end": 1741
                },
                "optional": false,
                "computed": false,
                "start": 1730,
                "end": 1741
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1742,
                  "end": 1747
                }
              ],
              "optional": false,
              "start": 1730,
              "end": 1748
            },
            "directive": null,
            "start": 1730,
            "end": 1749
          }
        ],
        "start": 1724,
        "end": 1751
      },
      "start": 1671,
      "end": 1751
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1759,
                    "end": 1763
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1759,
                      "end": 1763
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 1766,
                      "end": 1774
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1759,
                    "end": 1774
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1759,
                  "end": 1774
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1757,
              "end": 1776
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1779,
                "end": 1787
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1779,
              "end": 1789
            },
            "start": 1757,
            "end": 1789
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1791,
              "end": 1792
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1795,
              "end": 1796
            },
            "start": 1791,
            "end": 1796
          }
        ],
        "start": 1757,
        "end": 1796
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1798,
          "end": 1799
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1802,
          "end": 1803
        },
        "start": 1798,
        "end": 1803
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1805,
          "end": 1806
        },
        "start": 1805,
        "end": 1808
      },
      "body": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1816,
                  "end": 1823
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1824,
                  "end": 1827
                },
                "optional": false,
                "computed": false,
                "start": 1816,
                "end": 1827
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1828,
                  "end": 1833
                }
              ],
              "optional": false,
              "start": 1816,
              "end": 1834
            },
            "directive": null,
            "start": 1816,
            "end": 1835
          }
        ],
        "start": 1810,
        "end": 1837
      },
      "start": 1752,
      "end": 1837
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1845,
                    "end": 1849
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1845,
                      "end": 1849
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 1852,
                      "end": 1860
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1845,
                    "end": 1860
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1845,
                  "end": 1860
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1843,
              "end": 1862
            },
            "right": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1866,
                  "end": 1871
                },
                "typeArguments": null,
                "start": 1866,
                "end": 1871
              },
              "expression": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1874,
                      "end": 1878
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 1880,
                      "end": 1889
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1874,
                    "end": 1889
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1891,
                      "end": 1896
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 1898,
                      "end": 1908
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1891,
                    "end": 1908
                  }
                ],
                "start": 1872,
                "end": 1910
              },
              "start": 1865,
              "end": 1910
            },
            "start": 1843,
            "end": 1910
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 1912,
              "end": 1913
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1916,
              "end": 1917
            },
            "start": 1912,
            "end": 1917
          }
        ],
        "start": 1843,
        "end": 1917
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1919,
          "end": 1920
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1923,
          "end": 1924
        },
        "start": 1919,
        "end": 1924
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1926,
          "end": 1927
        },
        "start": 1926,
        "end": 1929
      },
      "body": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1937,
                  "end": 1944
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1945,
                  "end": 1948
                },
                "optional": false,
                "computed": false,
                "start": 1937,
                "end": 1948
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1949,
                  "end": 1954
                }
              ],
              "optional": false,
              "start": 1937,
              "end": 1955
            },
            "directive": null,
            "start": 1937,
            "end": 1956
          }
        ],
        "start": 1931,
        "end": 1958
      },
      "start": 1838,
      "end": 1958
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1970,
                    "end": 1976
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1988,
                            "end": 1995
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "primary",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1988,
                              "end": 1995
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 1998,
                              "end": 2007
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1988,
                            "end": 2007
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 1988,
                          "end": 2007
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2017,
                            "end": 2026
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "secondary",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2017,
                              "end": 2026
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 2029,
                              "end": 2040
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2017,
                            "end": 2040
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 2017,
                          "end": 2040
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1978,
                      "end": 2046
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2051,
                            "end": 2058
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 2060,
                            "end": 2066
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2051,
                          "end": 2066
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2068,
                            "end": 2077
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 2079,
                            "end": 2085
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2068,
                          "end": 2085
                        }
                      ],
                      "start": 2049,
                      "end": 2087
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1978,
                    "end": 2087
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1970,
                  "end": 2087
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1964,
              "end": 2089
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null,
              "start": 2092,
              "end": 2102
            },
            "start": 1964,
            "end": 2102
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2104,
              "end": 2105
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2108,
              "end": 2109
            },
            "start": 2104,
            "end": 2109
          }
        ],
        "start": 1964,
        "end": 2109
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2111,
          "end": 2112
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2115,
          "end": 2116
        },
        "start": 2111,
        "end": 2116
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2118,
          "end": 2119
        },
        "start": 2118,
        "end": 2121
      },
      "body": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2129,
                  "end": 2136
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2137,
                  "end": 2140
                },
                "optional": false,
                "computed": false,
                "start": 2129,
                "end": 2140
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2141,
                  "end": 2149
                }
              ],
              "optional": false,
              "start": 2129,
              "end": 2150
            },
            "directive": null,
            "start": 2129,
            "end": 2151
          }
        ],
        "start": 2123,
        "end": 2153
      },
      "start": 1959,
      "end": 2153
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2165,
                    "end": 2171
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2183,
                            "end": 2190
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "primary",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2183,
                              "end": 2190
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 2193,
                              "end": 2202
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2183,
                            "end": 2202
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 2183,
                          "end": 2202
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2212,
                            "end": 2221
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "secondary",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2212,
                              "end": 2221
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 2224,
                              "end": 2235
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2212,
                            "end": 2235
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 2212,
                          "end": 2235
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2173,
                      "end": 2241
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2246,
                            "end": 2253
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 2255,
                            "end": 2261
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2246,
                          "end": 2261
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2263,
                            "end": 2272
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 2274,
                            "end": 2280
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2263,
                          "end": 2280
                        }
                      ],
                      "start": 2244,
                      "end": 2282
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2173,
                    "end": 2282
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2165,
                  "end": 2282
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2159,
              "end": 2284
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2287,
                "end": 2300
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2287,
              "end": 2302
            },
            "start": 2159,
            "end": 2302
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2304,
              "end": 2305
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2308,
              "end": 2309
            },
            "start": 2304,
            "end": 2309
          }
        ],
        "start": 2159,
        "end": 2309
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2311,
          "end": 2312
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2315,
          "end": 2316
        },
        "start": 2311,
        "end": 2316
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2318,
          "end": 2319
        },
        "start": 2318,
        "end": 2321
      },
      "body": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2329,
                  "end": 2336
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2337,
                  "end": 2340
                },
                "optional": false,
                "computed": false,
                "start": 2329,
                "end": 2340
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2341,
                  "end": 2349
                }
              ],
              "optional": false,
              "start": 2329,
              "end": 2350
            },
            "directive": null,
            "start": 2329,
            "end": 2351
          }
        ],
        "start": 2323,
        "end": 2353
      },
      "start": 2154,
      "end": 2353
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2365,
                    "end": 2371
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2383,
                            "end": 2390
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "primary",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2383,
                              "end": 2390
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 2393,
                              "end": 2402
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2383,
                            "end": 2402
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 2383,
                          "end": 2402
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2412,
                            "end": 2421
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "secondary",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2412,
                              "end": 2421
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 2424,
                              "end": 2435
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2412,
                            "end": 2435
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 2412,
                          "end": 2435
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2373,
                      "end": 2441
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2446,
                            "end": 2453
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 2455,
                            "end": 2461
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2446,
                          "end": 2461
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2463,
                            "end": 2472
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 2474,
                            "end": 2480
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2463,
                          "end": 2480
                        }
                      ],
                      "start": 2444,
                      "end": 2482
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2373,
                    "end": 2482
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2365,
                  "end": 2482
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2359,
              "end": 2484
            },
            "right": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2488,
                  "end": 2498
                },
                "typeArguments": null,
                "start": 2488,
                "end": 2498
              },
              "expression": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2501,
                      "end": 2505
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 2507,
                      "end": 2516
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2501,
                    "end": 2516
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skills",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2518,
                      "end": 2524
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2528,
                            "end": 2535
                          },
                          "value": {
                            "type": "Literal",
                            "value": "trimming",
                            "raw": "\"trimming\"",
                            "start": 2537,
                            "end": 2547
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2528,
                          "end": 2547
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2549,
                            "end": 2558
                          },
                          "value": {
                            "type": "Literal",
                            "value": "edging",
                            "raw": "\"edging\"",
                            "start": 2560,
                            "end": 2568
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2549,
                          "end": 2568
                        }
                      ],
                      "start": 2526,
                      "end": 2570
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2518,
                    "end": 2570
                  }
                ],
                "start": 2499,
                "end": 2572
              },
              "start": 2487,
              "end": 2572
            },
            "start": 2359,
            "end": 2572
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2578,
              "end": 2579
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2582,
              "end": 2583
            },
            "start": 2578,
            "end": 2583
          }
        ],
        "start": 2359,
        "end": 2583
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2585,
          "end": 2586
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2589,
          "end": 2590
        },
        "start": 2585,
        "end": 2590
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2592,
          "end": 2593
        },
        "start": 2592,
        "end": 2595
      },
      "body": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2603,
                  "end": 2610
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2611,
                  "end": 2614
                },
                "optional": false,
                "computed": false,
                "start": 2603,
                "end": 2614
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2615,
                  "end": 2623
                }
              ],
              "optional": false,
              "start": 2603,
              "end": 2624
            },
            "directive": null,
            "start": 2603,
            "end": 2625
          }
        ],
        "start": 2597,
        "end": 2627
      },
      "start": 2354,
      "end": 2627
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2636,
                    "end": 2640
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2642,
                      "end": 2647
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 2650,
                      "end": 2658
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2642,
                    "end": 2658
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2636,
                  "end": 2658
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2660,
                    "end": 2665
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2667,
                      "end": 2673
                    },
                    "right": {
                      "type": "Literal",
                      "value": "skill",
                      "raw": "\"skill\"",
                      "start": 2676,
                      "end": 2683
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2667,
                    "end": 2683
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2660,
                  "end": 2683
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2635,
              "end": 2685
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null,
              "start": 2688,
              "end": 2693
            },
            "start": 2635,
            "end": 2693
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2695,
              "end": 2696
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2699,
              "end": 2700
            },
            "start": 2695,
            "end": 2700
          }
        ],
        "start": 2635,
        "end": 2700
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2702,
          "end": 2703
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2706,
          "end": 2707
        },
        "start": 2702,
        "end": 2707
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2709,
          "end": 2710
        },
        "start": 2709,
        "end": 2712
      },
      "body": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2720,
                  "end": 2727
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2728,
                  "end": 2731
                },
                "optional": false,
                "computed": false,
                "start": 2720,
                "end": 2731
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2732,
                  "end": 2737
                }
              ],
              "optional": false,
              "start": 2720,
              "end": 2738
            },
            "directive": null,
            "start": 2720,
            "end": 2739
          }
        ],
        "start": 2714,
        "end": 2741
      },
      "start": 2630,
      "end": 2741
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2748,
                    "end": 2752
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2754,
                      "end": 2759
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 2762,
                      "end": 2770
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2754,
                    "end": 2770
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2748,
                  "end": 2770
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2772,
                    "end": 2777
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2779,
                      "end": 2785
                    },
                    "right": {
                      "type": "Literal",
                      "value": "skill",
                      "raw": "\"skill\"",
                      "start": 2788,
                      "end": 2795
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2779,
                    "end": 2795
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2772,
                  "end": 2795
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2747,
              "end": 2797
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2800,
                "end": 2808
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2800,
              "end": 2810
            },
            "start": 2747,
            "end": 2810
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2812,
              "end": 2813
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2816,
              "end": 2817
            },
            "start": 2812,
            "end": 2817
          }
        ],
        "start": 2747,
        "end": 2817
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2819,
          "end": 2820
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2823,
          "end": 2824
        },
        "start": 2819,
        "end": 2824
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2826,
          "end": 2827
        },
        "start": 2826,
        "end": 2829
      },
      "body": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2837,
                  "end": 2844
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2845,
                  "end": 2848
                },
                "optional": false,
                "computed": false,
                "start": 2837,
                "end": 2848
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2849,
                  "end": 2854
                }
              ],
              "optional": false,
              "start": 2837,
              "end": 2855
            },
            "directive": null,
            "start": 2837,
            "end": 2856
          }
        ],
        "start": 2831,
        "end": 2858
      },
      "start": 2742,
      "end": 2858
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2865,
                    "end": 2869
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2871,
                      "end": 2876
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 2879,
                      "end": 2887
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2871,
                    "end": 2887
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2865,
                  "end": 2887
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2889,
                    "end": 2894
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skillA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2896,
                      "end": 2902
                    },
                    "right": {
                      "type": "Literal",
                      "value": "skill",
                      "raw": "\"skill\"",
                      "start": 2905,
                      "end": 2912
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2896,
                    "end": 2912
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2889,
                  "end": 2912
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2864,
              "end": 2914
            },
            "right": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2918,
                  "end": 2923
                },
                "typeArguments": null,
                "start": 2918,
                "end": 2923
              },
              "expression": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2926,
                      "end": 2930
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 2932,
                      "end": 2941
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2926,
                    "end": 2941
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2943,
                      "end": 2948
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 2950,
                      "end": 2960
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2943,
                    "end": 2960
                  }
                ],
                "start": 2924,
                "end": 2962
              },
              "start": 2917,
              "end": 2962
            },
            "start": 2864,
            "end": 2962
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 2964,
              "end": 2965
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2968,
              "end": 2969
            },
            "start": 2964,
            "end": 2969
          }
        ],
        "start": 2864,
        "end": 2969
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2971,
          "end": 2972
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2975,
          "end": 2976
        },
        "start": 2971,
        "end": 2976
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2978,
          "end": 2979
        },
        "start": 2978,
        "end": 2981
      },
      "body": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2989,
                  "end": 2996
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2997,
                  "end": 3000
                },
                "optional": false,
                "computed": false,
                "start": 2989,
                "end": 3000
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3001,
                  "end": 3006
                }
              ],
              "optional": false,
              "start": 2989,
              "end": 3007
            },
            "directive": null,
            "start": 2989,
            "end": 3008
          }
        ],
        "start": 2983,
        "end": 3010
      },
      "start": 2859,
      "end": 3010
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3022,
                    "end": 3026
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3028,
                      "end": 3033
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 3036,
                      "end": 3044
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3028,
                    "end": 3044
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3022,
                  "end": 3044
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3050,
                    "end": 3056
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3068,
                            "end": 3075
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3077,
                              "end": 3085
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 3088,
                              "end": 3097
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3077,
                            "end": 3097
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3068,
                          "end": 3097
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3107,
                            "end": 3116
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3118,
                              "end": 3128
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 3131,
                              "end": 3142
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3118,
                            "end": 3142
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3107,
                          "end": 3142
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3058,
                      "end": 3148
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3153,
                            "end": 3160
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 3162,
                            "end": 3168
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3153,
                          "end": 3168
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3170,
                            "end": 3179
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 3181,
                            "end": 3187
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3170,
                          "end": 3187
                        }
                      ],
                      "start": 3151,
                      "end": 3189
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3058,
                    "end": 3189
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3050,
                  "end": 3189
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3016,
              "end": 3191
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null,
              "start": 3194,
              "end": 3204
            },
            "start": 3016,
            "end": 3204
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 3206,
              "end": 3207
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3210,
              "end": 3211
            },
            "start": 3206,
            "end": 3211
          }
        ],
        "start": 3016,
        "end": 3211
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3213,
          "end": 3214
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3217,
          "end": 3218
        },
        "start": 3213,
        "end": 3218
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3220,
          "end": 3221
        },
        "start": 3220,
        "end": 3223
      },
      "body": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3231,
                  "end": 3238
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3239,
                  "end": 3242
                },
                "optional": false,
                "computed": false,
                "start": 3231,
                "end": 3242
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3243,
                  "end": 3251
                }
              ],
              "optional": false,
              "start": 3231,
              "end": 3252
            },
            "directive": null,
            "start": 3231,
            "end": 3253
          }
        ],
        "start": 3225,
        "end": 3255
      },
      "start": 3011,
      "end": 3255
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3267,
                    "end": 3271
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3273,
                      "end": 3278
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 3281,
                      "end": 3289
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3273,
                    "end": 3289
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3267,
                  "end": 3289
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3295,
                    "end": 3301
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3313,
                            "end": 3320
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3322,
                              "end": 3330
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 3333,
                              "end": 3342
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3322,
                            "end": 3342
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3313,
                          "end": 3342
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3352,
                            "end": 3361
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3363,
                              "end": 3373
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 3376,
                              "end": 3387
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3363,
                            "end": 3387
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3352,
                          "end": 3387
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3303,
                      "end": 3393
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3398,
                            "end": 3405
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 3407,
                            "end": 3413
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3398,
                          "end": 3413
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3415,
                            "end": 3424
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 3426,
                            "end": 3432
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3415,
                          "end": 3432
                        }
                      ],
                      "start": 3396,
                      "end": 3434
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3303,
                    "end": 3434
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3295,
                  "end": 3434
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3261,
              "end": 3436
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 3439,
                "end": 3452
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3439,
              "end": 3454
            },
            "start": 3261,
            "end": 3454
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 3456,
              "end": 3457
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3460,
              "end": 3461
            },
            "start": 3456,
            "end": 3461
          }
        ],
        "start": 3261,
        "end": 3461
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3463,
          "end": 3464
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3467,
          "end": 3468
        },
        "start": 3463,
        "end": 3468
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3470,
          "end": 3471
        },
        "start": 3470,
        "end": 3473
      },
      "body": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3481,
                  "end": 3488
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3489,
                  "end": 3492
                },
                "optional": false,
                "computed": false,
                "start": 3481,
                "end": 3492
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3493,
                  "end": 3501
                }
              ],
              "optional": false,
              "start": 3481,
              "end": 3502
            },
            "directive": null,
            "start": 3481,
            "end": 3503
          }
        ],
        "start": 3475,
        "end": 3505
      },
      "start": 3256,
      "end": 3505
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3517,
                    "end": 3521
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nameA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3523,
                      "end": 3528
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 3531,
                      "end": 3539
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3523,
                    "end": 3539
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3517,
                  "end": 3539
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3545,
                    "end": 3551
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3563,
                            "end": 3570
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "primaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3572,
                              "end": 3580
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 3583,
                              "end": 3592
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3572,
                            "end": 3592
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3563,
                          "end": 3592
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3602,
                            "end": 3611
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "secondaryA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3613,
                              "end": 3623
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 3626,
                              "end": 3637
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3613,
                            "end": 3637
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3602,
                          "end": 3637
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3553,
                      "end": 3643
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3648,
                            "end": 3655
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 3657,
                            "end": 3663
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3648,
                          "end": 3663
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3665,
                            "end": 3674
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 3676,
                            "end": 3682
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3665,
                          "end": 3682
                        }
                      ],
                      "start": 3646,
                      "end": 3684
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3553,
                    "end": 3684
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3545,
                  "end": 3684
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3511,
              "end": 3686
            },
            "right": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3690,
                  "end": 3700
                },
                "typeArguments": null,
                "start": 3690,
                "end": 3700
              },
              "expression": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3703,
                      "end": 3707
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 3709,
                      "end": 3718
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3703,
                    "end": 3718
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skills",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3720,
                      "end": 3726
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3730,
                            "end": 3737
                          },
                          "value": {
                            "type": "Literal",
                            "value": "trimming",
                            "raw": "\"trimming\"",
                            "start": 3739,
                            "end": 3749
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3730,
                          "end": 3749
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3751,
                            "end": 3760
                          },
                          "value": {
                            "type": "Literal",
                            "value": "edging",
                            "raw": "\"edging\"",
                            "start": 3762,
                            "end": 3770
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3751,
                          "end": 3770
                        }
                      ],
                      "start": 3728,
                      "end": 3772
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3720,
                    "end": 3772
                  }
                ],
                "start": 3701,
                "end": 3774
              },
              "start": 3689,
              "end": 3774
            },
            "start": 3511,
            "end": 3774
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 3780,
              "end": 3781
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3784,
              "end": 3785
            },
            "start": 3780,
            "end": 3785
          }
        ],
        "start": 3511,
        "end": 3785
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3787,
          "end": 3788
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3791,
          "end": 3792
        },
        "start": 3787,
        "end": 3792
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3794,
          "end": 3795
        },
        "start": 3794,
        "end": 3797
      },
      "body": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3805,
                  "end": 3812
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3813,
                  "end": 3816
                },
                "optional": false,
                "computed": false,
                "start": 3805,
                "end": 3816
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3817,
                  "end": 3825
                }
              ],
              "optional": false,
              "start": 3805,
              "end": 3826
            },
            "directive": null,
            "start": 3805,
            "end": 3827
          }
        ],
        "start": 3799,
        "end": 3829
      },
      "start": 3506,
      "end": 3829
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3838,
                    "end": 3842
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3838,
                      "end": 3842
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 3845,
                      "end": 3853
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3838,
                    "end": 3853
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3838,
                  "end": 3853
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3855,
                    "end": 3860
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3855,
                      "end": 3860
                    },
                    "right": {
                      "type": "Literal",
                      "value": "skill",
                      "raw": "\"skill\"",
                      "start": 3863,
                      "end": 3870
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3855,
                    "end": 3870
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3855,
                  "end": 3870
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3836,
              "end": 3872
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null,
              "start": 3875,
              "end": 3880
            },
            "start": 3836,
            "end": 3880
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 3882,
              "end": 3883
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3886,
              "end": 3887
            },
            "start": 3882,
            "end": 3887
          }
        ],
        "start": 3836,
        "end": 3887
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3889,
          "end": 3890
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3893,
          "end": 3894
        },
        "start": 3889,
        "end": 3894
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3896,
          "end": 3897
        },
        "start": 3896,
        "end": 3899
      },
      "body": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3907,
                  "end": 3914
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3915,
                  "end": 3918
                },
                "optional": false,
                "computed": false,
                "start": 3907,
                "end": 3918
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3919,
                  "end": 3924
                }
              ],
              "optional": false,
              "start": 3907,
              "end": 3925
            },
            "directive": null,
            "start": 3907,
            "end": 3926
          }
        ],
        "start": 3901,
        "end": 3928
      },
      "start": 3831,
      "end": 3928
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3936,
                    "end": 3940
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3936,
                      "end": 3940
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 3943,
                      "end": 3951
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3936,
                    "end": 3951
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3936,
                  "end": 3951
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3953,
                    "end": 3958
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3953,
                      "end": 3958
                    },
                    "right": {
                      "type": "Literal",
                      "value": "skill",
                      "raw": "\"skill\"",
                      "start": 3961,
                      "end": 3968
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3953,
                    "end": 3968
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3953,
                  "end": 3968
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3934,
              "end": 3970
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 3973,
                "end": 3981
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3973,
              "end": 3983
            },
            "start": 3934,
            "end": 3983
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 3985,
              "end": 3986
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3989,
              "end": 3990
            },
            "start": 3985,
            "end": 3990
          }
        ],
        "start": 3934,
        "end": 3990
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3992,
          "end": 3993
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3996,
          "end": 3997
        },
        "start": 3992,
        "end": 3997
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3999,
          "end": 4000
        },
        "start": 3999,
        "end": 4002
      },
      "body": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4010,
                  "end": 4017
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4018,
                  "end": 4021
                },
                "optional": false,
                "computed": false,
                "start": 4010,
                "end": 4021
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4022,
                  "end": 4027
                }
              ],
              "optional": false,
              "start": 4010,
              "end": 4028
            },
            "directive": null,
            "start": 4010,
            "end": 4029
          }
        ],
        "start": 4004,
        "end": 4031
      },
      "start": 3929,
      "end": 4031
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4039,
                    "end": 4043
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4039,
                      "end": 4043
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 4046,
                      "end": 4054
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4039,
                    "end": 4054
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 4039,
                  "end": 4054
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4056,
                    "end": 4061
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4056,
                      "end": 4061
                    },
                    "right": {
                      "type": "Literal",
                      "value": "skill",
                      "raw": "\"skill\"",
                      "start": 4064,
                      "end": 4071
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4056,
                    "end": 4071
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 4056,
                  "end": 4071
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 4037,
              "end": 4073
            },
            "right": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4077,
                  "end": 4082
                },
                "typeArguments": null,
                "start": 4077,
                "end": 4082
              },
              "expression": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4085,
                      "end": 4089
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 4091,
                      "end": 4100
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4085,
                    "end": 4100
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skill",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4102,
                      "end": 4107
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 4109,
                      "end": 4119
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4102,
                    "end": 4119
                  }
                ],
                "start": 4083,
                "end": 4121
              },
              "start": 4076,
              "end": 4121
            },
            "start": 4037,
            "end": 4121
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 4123,
              "end": 4124
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 4127,
              "end": 4128
            },
            "start": 4123,
            "end": 4128
          }
        ],
        "start": 4037,
        "end": 4128
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 4130,
          "end": 4131
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 4134,
          "end": 4135
        },
        "start": 4130,
        "end": 4135
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 4137,
          "end": 4138
        },
        "start": 4137,
        "end": 4140
      },
      "body": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4148,
                  "end": 4155
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4156,
                  "end": 4159
                },
                "optional": false,
                "computed": false,
                "start": 4148,
                "end": 4159
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4160,
                  "end": 4165
                }
              ],
              "optional": false,
              "start": 4148,
              "end": 4166
            },
            "directive": null,
            "start": 4148,
            "end": 4167
          }
        ],
        "start": 4142,
        "end": 4169
      },
      "start": 4032,
      "end": 4169
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4181,
                    "end": 4185
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4181,
                      "end": 4185
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 4188,
                      "end": 4196
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4181,
                    "end": 4196
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 4181,
                  "end": 4196
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4202,
                    "end": 4208
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4220,
                            "end": 4227
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "primary",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4220,
                              "end": 4227
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 4230,
                              "end": 4239
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4220,
                            "end": 4239
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 4220,
                          "end": 4239
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4249,
                            "end": 4258
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "secondary",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4249,
                              "end": 4258
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 4261,
                              "end": 4272
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4249,
                            "end": 4272
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 4249,
                          "end": 4272
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4210,
                      "end": 4278
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4283,
                            "end": 4290
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 4292,
                            "end": 4298
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 4283,
                          "end": 4298
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4300,
                            "end": 4309
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 4311,
                            "end": 4317
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 4300,
                          "end": 4317
                        }
                      ],
                      "start": 4281,
                      "end": 4319
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4210,
                    "end": 4319
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 4202,
                  "end": 4319
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 4175,
              "end": 4321
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null,
              "start": 4324,
              "end": 4334
            },
            "start": 4175,
            "end": 4334
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 4336,
              "end": 4337
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 4340,
              "end": 4341
            },
            "start": 4336,
            "end": 4341
          }
        ],
        "start": 4175,
        "end": 4341
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 4343,
          "end": 4344
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 4347,
          "end": 4348
        },
        "start": 4343,
        "end": 4348
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 4350,
          "end": 4351
        },
        "start": 4350,
        "end": 4353
      },
      "body": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4361,
                  "end": 4368
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4369,
                  "end": 4372
                },
                "optional": false,
                "computed": false,
                "start": 4361,
                "end": 4372
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4373,
                  "end": 4381
                }
              ],
              "optional": false,
              "start": 4361,
              "end": 4382
            },
            "directive": null,
            "start": 4361,
            "end": 4383
          }
        ],
        "start": 4355,
        "end": 4385
      },
      "start": 4170,
      "end": 4385
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4397,
                    "end": 4401
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4397,
                      "end": 4401
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 4404,
                      "end": 4412
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4397,
                    "end": 4412
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 4397,
                  "end": 4412
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4418,
                    "end": 4424
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4436,
                            "end": 4443
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "primary",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4436,
                              "end": 4443
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 4446,
                              "end": 4455
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4436,
                            "end": 4455
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 4436,
                          "end": 4455
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4465,
                            "end": 4474
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "secondary",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4465,
                              "end": 4474
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 4477,
                              "end": 4488
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4465,
                            "end": 4488
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 4465,
                          "end": 4488
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4426,
                      "end": 4494
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4499,
                            "end": 4506
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 4508,
                            "end": 4514
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 4499,
                          "end": 4514
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4516,
                            "end": 4525
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 4527,
                            "end": 4533
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 4516,
                          "end": 4533
                        }
                      ],
                      "start": 4497,
                      "end": 4535
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4426,
                    "end": 4535
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 4418,
                  "end": 4535
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 4391,
              "end": 4537
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 4540,
                "end": 4553
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 4540,
              "end": 4555
            },
            "start": 4391,
            "end": 4555
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 4557,
              "end": 4558
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 4561,
              "end": 4562
            },
            "start": 4557,
            "end": 4562
          }
        ],
        "start": 4391,
        "end": 4562
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 4564,
          "end": 4565
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 4568,
          "end": 4569
        },
        "start": 4564,
        "end": 4569
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 4571,
          "end": 4572
        },
        "start": 4571,
        "end": 4574
      },
      "body": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4582,
                  "end": 4589
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4590,
                  "end": 4593
                },
                "optional": false,
                "computed": false,
                "start": 4582,
                "end": 4593
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4594,
                  "end": 4602
                }
              ],
              "optional": false,
              "start": 4582,
              "end": 4603
            },
            "directive": null,
            "start": 4582,
            "end": 4604
          }
        ],
        "start": 4576,
        "end": 4606
      },
      "start": 4386,
      "end": 4606
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4618,
                    "end": 4622
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4618,
                      "end": 4622
                    },
                    "right": {
                      "type": "Literal",
                      "value": "noName",
                      "raw": "\"noName\"",
                      "start": 4625,
                      "end": 4633
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4618,
                    "end": 4633
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 4618,
                  "end": 4633
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skills",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4639,
                    "end": 4645
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4657,
                            "end": 4664
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "primary",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4657,
                              "end": 4664
                            },
                            "right": {
                              "type": "Literal",
                              "value": "primary",
                              "raw": "\"primary\"",
                              "start": 4667,
                              "end": 4676
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4657,
                            "end": 4676
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 4657,
                          "end": 4676
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4686,
                            "end": 4695
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "secondary",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4686,
                              "end": 4695
                            },
                            "right": {
                              "type": "Literal",
                              "value": "secondary",
                              "raw": "\"secondary\"",
                              "start": 4698,
                              "end": 4709
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4686,
                            "end": 4709
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 4686,
                          "end": 4709
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4647,
                      "end": 4715
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4720,
                            "end": 4727
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 4729,
                            "end": 4735
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 4720,
                          "end": 4735
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4737,
                            "end": 4746
                          },
                          "value": {
                            "type": "Literal",
                            "value": "none",
                            "raw": "\"none\"",
                            "start": 4748,
                            "end": 4754
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 4737,
                          "end": 4754
                        }
                      ],
                      "start": 4718,
                      "end": 4756
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4647,
                    "end": 4756
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 4639,
                  "end": 4756
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 4612,
              "end": 4758
            },
            "right": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiRobot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4762,
                  "end": 4772
                },
                "typeArguments": null,
                "start": 4762,
                "end": 4772
              },
              "expression": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4775,
                      "end": 4779
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 4781,
                      "end": 4790
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4775,
                    "end": 4790
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "skills",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4792,
                      "end": 4798
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "primary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4802,
                            "end": 4809
                          },
                          "value": {
                            "type": "Literal",
                            "value": "trimming",
                            "raw": "\"trimming\"",
                            "start": 4811,
                            "end": 4821
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 4802,
                          "end": 4821
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "secondary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4823,
                            "end": 4832
                          },
                          "value": {
                            "type": "Literal",
                            "value": "edging",
                            "raw": "\"edging\"",
                            "start": 4834,
                            "end": 4842
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 4823,
                          "end": 4842
                        }
                      ],
                      "start": 4800,
                      "end": 4844
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4792,
                    "end": 4844
                  }
                ],
                "start": 4773,
                "end": 4846
              },
              "start": 4761,
              "end": 4846
            },
            "start": 4612,
            "end": 4846
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 4852,
              "end": 4853
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 4856,
              "end": 4857
            },
            "start": 4852,
            "end": 4857
          }
        ],
        "start": 4612,
        "end": 4857
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 4859,
          "end": 4860
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 4863,
          "end": 4864
        },
        "start": 4859,
        "end": 4864
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 4866,
          "end": 4867
        },
        "start": 4866,
        "end": 4869
      },
      "body": {
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4877,
                  "end": 4884
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4885,
                  "end": 4888
                },
                "optional": false,
                "computed": false,
                "start": 4877,
                "end": 4888
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4889,
                  "end": 4897
                }
              ],
              "optional": false,
              "start": 4877,
              "end": 4898
            },
            "directive": null,
            "start": 4877,
            "end": 4899
          }
        ],
        "start": 4871,
        "end": 4901
      },
      "start": 4607,
      "end": 4901
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4901
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8,
    "end": 11,
    "range": [
      8,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 12,
    "end": 19,
    "range": [
      12,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 27,
    "end": 30,
    "range": [
      27,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "msg",
    "start": 31,
    "end": 34,
    "range": [
      31,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 36,
    "end": 39,
    "range": [
      36,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 42,
    "end": 46,
    "range": [
      42,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 50,
    "end": 59,
    "range": [
      50,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 60,
    "end": 65,
    "range": [
      60,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 72,
    "end": 76,
    "range": [
      72,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 78,
    "end": 84,
    "range": [
      78,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 90,
    "end": 95,
    "range": [
      90,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 97,
    "end": 103,
    "range": [
      97,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 108,
    "end": 117,
    "range": [
      108,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 118,
    "end": 128,
    "range": [
      118,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 135,
    "end": 139,
    "range": [
      135,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 141,
    "end": 147,
    "range": [
      141,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 153,
    "end": 159,
    "range": [
      153,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 171,
    "end": 178,
    "range": [
      171,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 181,
    "end": 187,
    "range": [
      181,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 197,
    "end": 206,
    "range": [
      197,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 209,
    "end": 215,
    "range": [
      209,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 227,
    "end": 230,
    "range": [
      227,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "robot",
    "start": 231,
    "end": 236,
    "range": [
      231,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 238,
    "end": 243,
    "range": [
      238,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 248,
    "end": 252,
    "range": [
      248,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 254,
    "end": 261,
    "range": [
      254,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 263,
    "end": 268,
    "range": [
      263,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 270,
    "end": 278,
    "range": [
      270,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 282,
    "end": 285,
    "range": [
      282,
      285
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobot",
    "start": 286,
    "end": 296,
    "range": [
      286,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 298,
    "end": 308,
    "range": [
      298,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 313,
    "end": 317,
    "range": [
      313,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "String",
    "value": "\"mower\"",
    "start": 319,
    "end": 326,
    "range": [
      319,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 328,
    "end": 334,
    "range": [
      328,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 338,
    "end": 345,
    "range": [
      338,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "String",
    "value": "\"mowing\"",
    "start": 347,
    "end": 355,
    "range": [
      347,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 357,
    "end": 366,
    "range": [
      357,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 368,
    "end": 374,
    "range": [
      368,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 380,
    "end": 388,
    "range": [
      380,
      388
    ]
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 389,
    "end": 397,
    "range": [
      389,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 406,
    "end": 412,
    "range": [
      406,
      412
    ]
  },
  {
    "type": "Identifier",
    "value": "robot",
    "start": 413,
    "end": 418,
    "range": [
      413,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 422,
    "end": 430,
    "range": [
      422,
      430
    ]
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 431,
    "end": 444,
    "range": [
      431,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 453,
    "end": 459,
    "range": [
      453,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobot",
    "start": 460,
    "end": 470,
    "range": [
      460,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 475,
    "end": 478,
    "range": [
      475,
      478
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 479,
    "end": 484,
    "range": [
      479,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 486,
    "end": 492,
    "range": [
      486,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 494,
    "end": 502,
    "range": [
      494,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 504,
    "end": 510,
    "range": [
      504,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 512,
    "end": 522,
    "range": [
      512,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 524,
    "end": 530,
    "range": [
      524,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 535,
    "end": 541,
    "range": [
      535,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 543,
    "end": 549,
    "range": [
      543,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 551,
    "end": 557,
    "range": [
      551,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 559,
    "end": 562,
    "range": [
      559,
      562
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 563,
    "end": 567,
    "range": [
      563,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 569,
    "end": 575,
    "range": [
      569,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 577,
    "end": 584,
    "range": [
      577,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 586,
    "end": 592,
    "range": [
      586,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 594,
    "end": 603,
    "range": [
      594,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 605,
    "end": 611,
    "range": [
      605,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 613,
    "end": 618,
    "range": [
      613,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 620,
    "end": 626,
    "range": [
      620,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 629,
    "end": 632,
    "range": [
      629,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 635,
    "end": 639,
    "range": [
      635,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 641,
    "end": 646,
    "range": [
      641,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 649,
    "end": 657,
    "range": [
      649,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Identifier",
    "value": "robot",
    "start": 662,
    "end": 667,
    "range": [
      662,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 684,
    "end": 686,
    "range": [
      684,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 694,
    "end": 701,
    "range": [
      694,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 702,
    "end": 705,
    "range": [
      702,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 706,
    "end": 711,
    "range": [
      706,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 716,
    "end": 719,
    "range": [
      716,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 722,
    "end": 726,
    "range": [
      722,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 728,
    "end": 733,
    "range": [
      728,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 736,
    "end": 744,
    "range": [
      736,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 749,
    "end": 757,
    "range": [
      749,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 776,
    "end": 778,
    "range": [
      776,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 786,
    "end": 793,
    "range": [
      786,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 794,
    "end": 797,
    "range": [
      794,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 798,
    "end": 803,
    "range": [
      798,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 808,
    "end": 811,
    "range": [
      808,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 814,
    "end": 818,
    "range": [
      814,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 820,
    "end": 825,
    "range": [
      820,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 828,
    "end": 836,
    "range": [
      828,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 842,
    "end": 847,
    "range": [
      842,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 850,
    "end": 854,
    "range": [
      850,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 854,
    "end": 855,
    "range": [
      854,
      855
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 856,
    "end": 865,
    "range": [
      856,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 867,
    "end": 872,
    "range": [
      867,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 874,
    "end": 884,
    "range": [
      874,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 890,
    "end": 891,
    "range": [
      890,
      891
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 899,
    "end": 900,
    "range": [
      899,
      900
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 900,
    "end": 901,
    "range": [
      900,
      901
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 903,
    "end": 905,
    "range": [
      903,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 913,
    "end": 920,
    "range": [
      913,
      920
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 921,
    "end": 924,
    "range": [
      921,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 925,
    "end": 930,
    "range": [
      925,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 930,
    "end": 931,
    "range": [
      930,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 935,
    "end": 938,
    "range": [
      935,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 946,
    "end": 952,
    "range": [
      946,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 964,
    "end": 971,
    "range": [
      964,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 973,
    "end": 981,
    "range": [
      973,
      981
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 982,
    "end": 983,
    "range": [
      982,
      983
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 984,
    "end": 993,
    "range": [
      984,
      993
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1003,
    "end": 1012,
    "range": [
      1003,
      1012
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1012,
    "end": 1013,
    "range": [
      1012,
      1013
    ]
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1014,
    "end": 1024,
    "range": [
      1014,
      1024
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1025,
    "end": 1026,
    "range": [
      1025,
      1026
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 1027,
    "end": 1038,
    "range": [
      1027,
      1038
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1049,
    "end": 1056,
    "range": [
      1049,
      1056
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1056,
    "end": 1057,
    "range": [
      1056,
      1057
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1058,
    "end": 1064,
    "range": [
      1058,
      1064
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1066,
    "end": 1075,
    "range": [
      1066,
      1075
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1075,
    "end": 1076,
    "range": [
      1075,
      1076
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1077,
    "end": 1083,
    "range": [
      1077,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1086,
    "end": 1087,
    "range": [
      1086,
      1087
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobot",
    "start": 1090,
    "end": 1100,
    "range": [
      1090,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1100,
    "end": 1101,
    "range": [
      1100,
      1101
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1107,
    "end": 1108,
    "range": [
      1107,
      1108
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1109,
    "end": 1110,
    "range": [
      1109,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1111,
    "end": 1112,
    "range": [
      1111,
      1112
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1117,
    "end": 1119,
    "range": [
      1117,
      1119
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1119,
    "end": 1120,
    "range": [
      1119,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1121,
    "end": 1122,
    "range": [
      1121,
      1122
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1127,
    "end": 1134,
    "range": [
      1127,
      1134
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1135,
    "end": 1138,
    "range": [
      1135,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1139,
    "end": 1147,
    "range": [
      1139,
      1147
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1148,
    "end": 1149,
    "range": [
      1148,
      1149
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1152,
    "end": 1155,
    "range": [
      1152,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1157,
    "end": 1158,
    "range": [
      1157,
      1158
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1163,
    "end": 1169,
    "range": [
      1163,
      1169
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1181,
    "end": 1188,
    "range": [
      1181,
      1188
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1188,
    "end": 1189,
    "range": [
      1188,
      1189
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1190,
    "end": 1198,
    "range": [
      1190,
      1198
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 1201,
    "end": 1210,
    "range": [
      1201,
      1210
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1210,
    "end": 1211,
    "range": [
      1210,
      1211
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1220,
    "end": 1229,
    "range": [
      1220,
      1229
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1231,
    "end": 1241,
    "range": [
      1231,
      1241
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1242,
    "end": 1243,
    "range": [
      1242,
      1243
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 1244,
    "end": 1255,
    "range": [
      1244,
      1255
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1260,
    "end": 1261,
    "range": [
      1260,
      1261
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1266,
    "end": 1273,
    "range": [
      1266,
      1273
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1273,
    "end": 1274,
    "range": [
      1273,
      1274
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1275,
    "end": 1281,
    "range": [
      1275,
      1281
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1281,
    "end": 1282,
    "range": [
      1281,
      1282
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1283,
    "end": 1292,
    "range": [
      1283,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1294,
    "end": 1300,
    "range": [
      1294,
      1300
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1301,
    "end": 1302,
    "range": [
      1301,
      1302
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1303,
    "end": 1304,
    "range": [
      1303,
      1304
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 1307,
    "end": 1320,
    "range": [
      1307,
      1320
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1320,
    "end": 1321,
    "range": [
      1320,
      1321
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1322,
    "end": 1323,
    "range": [
      1322,
      1323
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1324,
    "end": 1325,
    "range": [
      1324,
      1325
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1326,
    "end": 1327,
    "range": [
      1326,
      1327
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1328,
    "end": 1329,
    "range": [
      1328,
      1329
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1329,
    "end": 1330,
    "range": [
      1329,
      1330
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1331,
    "end": 1332,
    "range": [
      1331,
      1332
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1333,
    "end": 1334,
    "range": [
      1333,
      1334
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1335,
    "end": 1336,
    "range": [
      1335,
      1336
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1336,
    "end": 1337,
    "range": [
      1336,
      1337
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1338,
    "end": 1339,
    "range": [
      1338,
      1339
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1339,
    "end": 1341,
    "range": [
      1339,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1341,
    "end": 1342,
    "range": [
      1341,
      1342
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1343,
    "end": 1344,
    "range": [
      1343,
      1344
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1349,
    "end": 1356,
    "range": [
      1349,
      1356
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1356,
    "end": 1357,
    "range": [
      1356,
      1357
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1357,
    "end": 1360,
    "range": [
      1357,
      1360
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1360,
    "end": 1361,
    "range": [
      1360,
      1361
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1361,
    "end": 1369,
    "range": [
      1361,
      1369
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1369,
    "end": 1370,
    "range": [
      1369,
      1370
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1370,
    "end": 1371,
    "range": [
      1370,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1372,
    "end": 1373,
    "range": [
      1372,
      1373
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1374,
    "end": 1377,
    "range": [
      1374,
      1377
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1378,
    "end": 1379,
    "range": [
      1378,
      1379
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1379,
    "end": 1380,
    "range": [
      1379,
      1380
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1385,
    "end": 1391,
    "range": [
      1385,
      1391
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1391,
    "end": 1392,
    "range": [
      1391,
      1392
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1403,
    "end": 1410,
    "range": [
      1403,
      1410
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1412,
    "end": 1420,
    "range": [
      1412,
      1420
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1421,
    "end": 1422,
    "range": [
      1421,
      1422
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 1423,
    "end": 1432,
    "range": [
      1423,
      1432
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1432,
    "end": 1433,
    "range": [
      1432,
      1433
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1442,
    "end": 1451,
    "range": [
      1442,
      1451
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1451,
    "end": 1452,
    "range": [
      1451,
      1452
    ]
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 1453,
    "end": 1463,
    "range": [
      1453,
      1463
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1464,
    "end": 1465,
    "range": [
      1464,
      1465
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 1466,
    "end": 1477,
    "range": [
      1466,
      1477
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1482,
    "end": 1483,
    "range": [
      1482,
      1483
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1484,
    "end": 1485,
    "range": [
      1484,
      1485
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1486,
    "end": 1487,
    "range": [
      1486,
      1487
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1488,
    "end": 1495,
    "range": [
      1488,
      1495
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1495,
    "end": 1496,
    "range": [
      1495,
      1496
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1497,
    "end": 1503,
    "range": [
      1497,
      1503
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1503,
    "end": 1504,
    "range": [
      1503,
      1504
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1505,
    "end": 1514,
    "range": [
      1505,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1514,
    "end": 1515,
    "range": [
      1514,
      1515
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1516,
    "end": 1522,
    "range": [
      1516,
      1522
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1523,
    "end": 1524,
    "range": [
      1523,
      1524
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1525,
    "end": 1526,
    "range": [
      1525,
      1526
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1527,
    "end": 1528,
    "range": [
      1527,
      1528
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1529,
    "end": 1530,
    "range": [
      1529,
      1530
    ]
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 1530,
    "end": 1540,
    "range": [
      1530,
      1540
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1540,
    "end": 1541,
    "range": [
      1540,
      1541
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1541,
    "end": 1542,
    "range": [
      1541,
      1542
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1543,
    "end": 1547,
    "range": [
      1543,
      1547
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1547,
    "end": 1548,
    "range": [
      1547,
      1548
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1549,
    "end": 1558,
    "range": [
      1549,
      1558
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1558,
    "end": 1559,
    "range": [
      1558,
      1559
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1560,
    "end": 1566,
    "range": [
      1560,
      1566
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1566,
    "end": 1567,
    "range": [
      1566,
      1567
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1568,
    "end": 1569,
    "range": [
      1568,
      1569
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1570,
    "end": 1577,
    "range": [
      1570,
      1577
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1577,
    "end": 1578,
    "range": [
      1577,
      1578
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1579,
    "end": 1589,
    "range": [
      1579,
      1589
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1589,
    "end": 1590,
    "range": [
      1589,
      1590
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 1591,
    "end": 1600,
    "range": [
      1591,
      1600
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1600,
    "end": 1601,
    "range": [
      1600,
      1601
    ]
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 1602,
    "end": 1610,
    "range": [
      1602,
      1610
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1611,
    "end": 1612,
    "range": [
      1611,
      1612
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1613,
    "end": 1614,
    "range": [
      1613,
      1614
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1614,
    "end": 1615,
    "range": [
      1614,
      1615
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1620,
    "end": 1621,
    "range": [
      1620,
      1621
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1622,
    "end": 1623,
    "range": [
      1622,
      1623
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1624,
    "end": 1625,
    "range": [
      1624,
      1625
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1627,
    "end": 1628,
    "range": [
      1627,
      1628
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1629,
    "end": 1630,
    "range": [
      1629,
      1630
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1631,
    "end": 1632,
    "range": [
      1631,
      1632
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1632,
    "end": 1633,
    "range": [
      1632,
      1633
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1634,
    "end": 1635,
    "range": [
      1634,
      1635
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1635,
    "end": 1637,
    "range": [
      1635,
      1637
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1637,
    "end": 1638,
    "range": [
      1637,
      1638
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1639,
    "end": 1640,
    "range": [
      1639,
      1640
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1645,
    "end": 1652,
    "range": [
      1645,
      1652
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1653,
    "end": 1656,
    "range": [
      1653,
      1656
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1656,
    "end": 1657,
    "range": [
      1656,
      1657
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 1657,
    "end": 1665,
    "range": [
      1657,
      1665
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1665,
    "end": 1666,
    "range": [
      1665,
      1666
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1666,
    "end": 1667,
    "range": [
      1666,
      1667
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
      1669
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1671,
    "end": 1674,
    "range": [
      1671,
      1674
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1675,
    "end": 1676,
    "range": [
      1675,
      1676
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1676,
    "end": 1677,
    "range": [
      1676,
      1677
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1678,
    "end": 1682,
    "range": [
      1678,
      1682
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1683,
    "end": 1684,
    "range": [
      1683,
      1684
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 1685,
    "end": 1693,
    "range": [
      1685,
      1693
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1694,
    "end": 1695,
    "range": [
      1694,
      1695
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1696,
    "end": 1697,
    "range": [
      1696,
      1697
    ]
  },
  {
    "type": "Identifier",
    "value": "robot",
    "start": 1698,
    "end": 1703,
    "range": [
      1698,
      1703
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1703,
    "end": 1704,
    "range": [
      1703,
      1704
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1707,
    "end": 1708,
    "range": [
      1707,
      1708
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1709,
    "end": 1710,
    "range": [
      1709,
      1710
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1710,
    "end": 1711,
    "range": [
      1710,
      1711
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1714,
    "end": 1715,
    "range": [
      1714,
      1715
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1716,
    "end": 1717,
    "range": [
      1716,
      1717
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1717,
    "end": 1718,
    "range": [
      1717,
      1718
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1719,
    "end": 1720,
    "range": [
      1719,
      1720
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1720,
    "end": 1722,
    "range": [
      1720,
      1722
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1724,
    "end": 1725,
    "range": [
      1724,
      1725
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1730,
    "end": 1737,
    "range": [
      1730,
      1737
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1737,
    "end": 1738,
    "range": [
      1737,
      1738
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1738,
    "end": 1741,
    "range": [
      1738,
      1741
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1741,
    "end": 1742,
    "range": [
      1741,
      1742
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1742,
    "end": 1747,
    "range": [
      1742,
      1747
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1747,
    "end": 1748,
    "range": [
      1747,
      1748
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1748,
    "end": 1749,
    "range": [
      1748,
      1749
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1750,
    "end": 1751,
    "range": [
      1750,
      1751
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1752,
    "end": 1755,
    "range": [
      1752,
      1755
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1756,
    "end": 1757,
    "range": [
      1756,
      1757
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1757,
    "end": 1758,
    "range": [
      1757,
      1758
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1759,
    "end": 1763,
    "range": [
      1759,
      1763
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1764,
    "end": 1765,
    "range": [
      1764,
      1765
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 1766,
    "end": 1774,
    "range": [
      1766,
      1774
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1775,
    "end": 1776,
    "range": [
      1775,
      1776
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1777,
    "end": 1778,
    "range": [
      1777,
      1778
    ]
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 1779,
    "end": 1787,
    "range": [
      1779,
      1787
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1787,
    "end": 1788,
    "range": [
      1787,
      1788
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1788,
    "end": 1789,
    "range": [
      1788,
      1789
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1789,
    "end": 1790,
    "range": [
      1789,
      1790
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1791,
    "end": 1792,
    "range": [
      1791,
      1792
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1793,
    "end": 1794,
    "range": [
      1793,
      1794
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1795,
    "end": 1796,
    "range": [
      1795,
      1796
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1796,
    "end": 1797,
    "range": [
      1796,
      1797
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1798,
    "end": 1799,
    "range": [
      1798,
      1799
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1803,
    "end": 1804,
    "range": [
      1803,
      1804
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1805,
    "end": 1806,
    "range": [
      1805,
      1806
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1806,
    "end": 1808,
    "range": [
      1806,
      1808
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1808,
    "end": 1809,
    "range": [
      1808,
      1809
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1810,
    "end": 1811,
    "range": [
      1810,
      1811
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1816,
    "end": 1823,
    "range": [
      1816,
      1823
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1823,
    "end": 1824,
    "range": [
      1823,
      1824
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1824,
    "end": 1827,
    "range": [
      1824,
      1827
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1827,
    "end": 1828,
    "range": [
      1827,
      1828
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1828,
    "end": 1833,
    "range": [
      1828,
      1833
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1833,
    "end": 1834,
    "range": [
      1833,
      1834
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1834,
    "end": 1835,
    "range": [
      1834,
      1835
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1836,
    "end": 1837,
    "range": [
      1836,
      1837
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1838,
    "end": 1841,
    "range": [
      1838,
      1841
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1842,
    "end": 1843,
    "range": [
      1842,
      1843
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1843,
    "end": 1844,
    "range": [
      1843,
      1844
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1845,
    "end": 1849,
    "range": [
      1845,
      1849
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1850,
    "end": 1851,
    "range": [
      1850,
      1851
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 1852,
    "end": 1860,
    "range": [
      1852,
      1860
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1861,
    "end": 1862,
    "range": [
      1861,
      1862
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1863,
    "end": 1864,
    "range": [
      1863,
      1864
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1865,
    "end": 1866,
    "range": [
      1865,
      1866
    ]
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 1866,
    "end": 1871,
    "range": [
      1866,
      1871
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1871,
    "end": 1872,
    "range": [
      1871,
      1872
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1872,
    "end": 1873,
    "range": [
      1872,
      1873
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1874,
    "end": 1878,
    "range": [
      1874,
      1878
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1878,
    "end": 1879,
    "range": [
      1878,
      1879
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 1880,
    "end": 1889,
    "range": [
      1880,
      1889
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1889,
    "end": 1890,
    "range": [
      1889,
      1890
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 1891,
    "end": 1896,
    "range": [
      1891,
      1896
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1896,
    "end": 1897,
    "range": [
      1896,
      1897
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 1898,
    "end": 1908,
    "range": [
      1898,
      1908
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1909,
    "end": 1910,
    "range": [
      1909,
      1910
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1910,
    "end": 1911,
    "range": [
      1910,
      1911
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1912,
    "end": 1913,
    "range": [
      1912,
      1913
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1914,
    "end": 1915,
    "range": [
      1914,
      1915
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1916,
    "end": 1917,
    "range": [
      1916,
      1917
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1917,
    "end": 1918,
    "range": [
      1917,
      1918
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1919,
    "end": 1920,
    "range": [
      1919,
      1920
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1921,
    "end": 1922,
    "range": [
      1921,
      1922
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1923,
    "end": 1924,
    "range": [
      1923,
      1924
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1924,
    "end": 1925,
    "range": [
      1924,
      1925
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1926,
    "end": 1927,
    "range": [
      1926,
      1927
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1927,
    "end": 1929,
    "range": [
      1927,
      1929
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1929,
    "end": 1930,
    "range": [
      1929,
      1930
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1937,
    "end": 1944,
    "range": [
      1937,
      1944
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1944,
    "end": 1945,
    "range": [
      1944,
      1945
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1945,
    "end": 1948,
    "range": [
      1945,
      1948
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1948,
    "end": 1949,
    "range": [
      1948,
      1949
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 1949,
    "end": 1954,
    "range": [
      1949,
      1954
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1954,
    "end": 1955,
    "range": [
      1954,
      1955
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1955,
    "end": 1956,
    "range": [
      1955,
      1956
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1957,
    "end": 1958,
    "range": [
      1957,
      1958
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1959,
    "end": 1962,
    "range": [
      1959,
      1962
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1963,
    "end": 1964,
    "range": [
      1963,
      1964
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1964,
    "end": 1965,
    "range": [
      1964,
      1965
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 1970,
    "end": 1976,
    "range": [
      1970,
      1976
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1976,
    "end": 1977,
    "range": [
      1976,
      1977
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1978,
    "end": 1979,
    "range": [
      1978,
      1979
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1988,
    "end": 1995,
    "range": [
      1988,
      1995
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1996,
    "end": 1997,
    "range": [
      1996,
      1997
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 1998,
    "end": 2007,
    "range": [
      1998,
      2007
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2007,
    "end": 2008,
    "range": [
      2007,
      2008
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2017,
    "end": 2026,
    "range": [
      2017,
      2026
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2027,
    "end": 2028,
    "range": [
      2027,
      2028
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2029,
    "end": 2040,
    "range": [
      2029,
      2040
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2045,
    "end": 2046,
    "range": [
      2045,
      2046
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2047,
    "end": 2048,
    "range": [
      2047,
      2048
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2049,
    "end": 2050,
    "range": [
      2049,
      2050
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2051,
    "end": 2058,
    "range": [
      2051,
      2058
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2058,
    "end": 2059,
    "range": [
      2058,
      2059
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2060,
    "end": 2066,
    "range": [
      2060,
      2066
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2066,
    "end": 2067,
    "range": [
      2066,
      2067
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2068,
    "end": 2077,
    "range": [
      2068,
      2077
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2077,
    "end": 2078,
    "range": [
      2077,
      2078
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2079,
    "end": 2085,
    "range": [
      2079,
      2085
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2086,
    "end": 2087,
    "range": [
      2086,
      2087
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2088,
    "end": 2089,
    "range": [
      2088,
      2089
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2090,
    "end": 2091,
    "range": [
      2090,
      2091
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobot",
    "start": 2092,
    "end": 2102,
    "range": [
      2092,
      2102
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2102,
    "end": 2103,
    "range": [
      2102,
      2103
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2104,
    "end": 2105,
    "range": [
      2104,
      2105
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2106,
    "end": 2107,
    "range": [
      2106,
      2107
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2108,
    "end": 2109,
    "range": [
      2108,
      2109
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2109,
    "end": 2110,
    "range": [
      2109,
      2110
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2111,
    "end": 2112,
    "range": [
      2111,
      2112
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2113,
    "end": 2114,
    "range": [
      2113,
      2114
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2115,
    "end": 2116,
    "range": [
      2115,
      2116
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2116,
    "end": 2117,
    "range": [
      2116,
      2117
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2118,
    "end": 2119,
    "range": [
      2118,
      2119
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2119,
    "end": 2121,
    "range": [
      2119,
      2121
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2121,
    "end": 2122,
    "range": [
      2121,
      2122
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2123,
    "end": 2124,
    "range": [
      2123,
      2124
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2129,
    "end": 2136,
    "range": [
      2129,
      2136
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2136,
    "end": 2137,
    "range": [
      2136,
      2137
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2137,
    "end": 2140,
    "range": [
      2137,
      2140
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2140,
    "end": 2141,
    "range": [
      2140,
      2141
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2141,
    "end": 2149,
    "range": [
      2141,
      2149
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2149,
    "end": 2150,
    "range": [
      2149,
      2150
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2150,
    "end": 2151,
    "range": [
      2150,
      2151
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2152,
    "end": 2153,
    "range": [
      2152,
      2153
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2154,
    "end": 2157,
    "range": [
      2154,
      2157
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2158,
    "end": 2159,
    "range": [
      2158,
      2159
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2165,
    "end": 2171,
    "range": [
      2165,
      2171
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2171,
    "end": 2172,
    "range": [
      2171,
      2172
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2173,
    "end": 2174,
    "range": [
      2173,
      2174
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2183,
    "end": 2190,
    "range": [
      2183,
      2190
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2191,
    "end": 2192,
    "range": [
      2191,
      2192
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 2193,
    "end": 2202,
    "range": [
      2193,
      2202
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2202,
    "end": 2203,
    "range": [
      2202,
      2203
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2212,
    "end": 2221,
    "range": [
      2212,
      2221
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2222,
    "end": 2223,
    "range": [
      2222,
      2223
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2224,
    "end": 2235,
    "range": [
      2224,
      2235
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2240,
    "end": 2241,
    "range": [
      2240,
      2241
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2242,
    "end": 2243,
    "range": [
      2242,
      2243
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2244,
    "end": 2245,
    "range": [
      2244,
      2245
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2246,
    "end": 2253,
    "range": [
      2246,
      2253
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2253,
    "end": 2254,
    "range": [
      2253,
      2254
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2255,
    "end": 2261,
    "range": [
      2255,
      2261
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2261,
    "end": 2262,
    "range": [
      2261,
      2262
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2263,
    "end": 2272,
    "range": [
      2263,
      2272
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2272,
    "end": 2273,
    "range": [
      2272,
      2273
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2274,
    "end": 2280,
    "range": [
      2274,
      2280
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2281,
    "end": 2282,
    "range": [
      2281,
      2282
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2283,
    "end": 2284,
    "range": [
      2283,
      2284
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2285,
    "end": 2286,
    "range": [
      2285,
      2286
    ]
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 2287,
    "end": 2300,
    "range": [
      2287,
      2300
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2300,
    "end": 2301,
    "range": [
      2300,
      2301
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2301,
    "end": 2302,
    "range": [
      2301,
      2302
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2302,
    "end": 2303,
    "range": [
      2302,
      2303
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2304,
    "end": 2305,
    "range": [
      2304,
      2305
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2306,
    "end": 2307,
    "range": [
      2306,
      2307
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2308,
    "end": 2309,
    "range": [
      2308,
      2309
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2309,
    "end": 2310,
    "range": [
      2309,
      2310
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2311,
    "end": 2312,
    "range": [
      2311,
      2312
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2313,
    "end": 2314,
    "range": [
      2313,
      2314
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2315,
    "end": 2316,
    "range": [
      2315,
      2316
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2316,
    "end": 2317,
    "range": [
      2316,
      2317
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2318,
    "end": 2319,
    "range": [
      2318,
      2319
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2319,
    "end": 2321,
    "range": [
      2319,
      2321
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2321,
    "end": 2322,
    "range": [
      2321,
      2322
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2323,
    "end": 2324,
    "range": [
      2323,
      2324
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2329,
    "end": 2336,
    "range": [
      2329,
      2336
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2336,
    "end": 2337,
    "range": [
      2336,
      2337
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2337,
    "end": 2340,
    "range": [
      2337,
      2340
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2340,
    "end": 2341,
    "range": [
      2340,
      2341
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2341,
    "end": 2349,
    "range": [
      2341,
      2349
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2349,
    "end": 2350,
    "range": [
      2349,
      2350
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2350,
    "end": 2351,
    "range": [
      2350,
      2351
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2352,
    "end": 2353,
    "range": [
      2352,
      2353
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2354,
    "end": 2357,
    "range": [
      2354,
      2357
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2358,
    "end": 2359,
    "range": [
      2358,
      2359
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2359,
    "end": 2360,
    "range": [
      2359,
      2360
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2365,
    "end": 2371,
    "range": [
      2365,
      2371
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2371,
    "end": 2372,
    "range": [
      2371,
      2372
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2373,
    "end": 2374,
    "range": [
      2373,
      2374
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2383,
    "end": 2390,
    "range": [
      2383,
      2390
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2391,
    "end": 2392,
    "range": [
      2391,
      2392
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 2393,
    "end": 2402,
    "range": [
      2393,
      2402
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2402,
    "end": 2403,
    "range": [
      2402,
      2403
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2412,
    "end": 2421,
    "range": [
      2412,
      2421
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2422,
    "end": 2423,
    "range": [
      2422,
      2423
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 2424,
    "end": 2435,
    "range": [
      2424,
      2435
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2440,
    "end": 2441,
    "range": [
      2440,
      2441
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2442,
    "end": 2443,
    "range": [
      2442,
      2443
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2444,
    "end": 2445,
    "range": [
      2444,
      2445
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2446,
    "end": 2453,
    "range": [
      2446,
      2453
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2453,
    "end": 2454,
    "range": [
      2453,
      2454
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2455,
    "end": 2461,
    "range": [
      2455,
      2461
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2461,
    "end": 2462,
    "range": [
      2461,
      2462
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2463,
    "end": 2472,
    "range": [
      2463,
      2472
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2472,
    "end": 2473,
    "range": [
      2472,
      2473
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 2474,
    "end": 2480,
    "range": [
      2474,
      2480
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2481,
    "end": 2482,
    "range": [
      2481,
      2482
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2483,
    "end": 2484,
    "range": [
      2483,
      2484
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2485,
    "end": 2486,
    "range": [
      2485,
      2486
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2487,
    "end": 2488,
    "range": [
      2487,
      2488
    ]
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 2488,
    "end": 2498,
    "range": [
      2488,
      2498
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2498,
    "end": 2499,
    "range": [
      2498,
      2499
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2499,
    "end": 2500,
    "range": [
      2499,
      2500
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2501,
    "end": 2505,
    "range": [
      2501,
      2505
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2505,
    "end": 2506,
    "range": [
      2505,
      2506
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 2507,
    "end": 2516,
    "range": [
      2507,
      2516
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2516,
    "end": 2517,
    "range": [
      2516,
      2517
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 2518,
    "end": 2524,
    "range": [
      2518,
      2524
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2524,
    "end": 2525,
    "range": [
      2524,
      2525
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2526,
    "end": 2527,
    "range": [
      2526,
      2527
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 2528,
    "end": 2535,
    "range": [
      2528,
      2535
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2535,
    "end": 2536,
    "range": [
      2535,
      2536
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 2537,
    "end": 2547,
    "range": [
      2537,
      2547
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2547,
    "end": 2548,
    "range": [
      2547,
      2548
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 2549,
    "end": 2558,
    "range": [
      2549,
      2558
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2558,
    "end": 2559,
    "range": [
      2558,
      2559
    ]
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 2560,
    "end": 2568,
    "range": [
      2560,
      2568
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2569,
    "end": 2570,
    "range": [
      2569,
      2570
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2571,
    "end": 2572,
    "range": [
      2571,
      2572
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2572,
    "end": 2573,
    "range": [
      2572,
      2573
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2578,
    "end": 2579,
    "range": [
      2578,
      2579
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2580,
    "end": 2581,
    "range": [
      2580,
      2581
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2582,
    "end": 2583,
    "range": [
      2582,
      2583
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2583,
    "end": 2584,
    "range": [
      2583,
      2584
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2585,
    "end": 2586,
    "range": [
      2585,
      2586
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2587,
    "end": 2588,
    "range": [
      2587,
      2588
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2589,
    "end": 2590,
    "range": [
      2589,
      2590
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2590,
    "end": 2591,
    "range": [
      2590,
      2591
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2592,
    "end": 2593,
    "range": [
      2592,
      2593
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2593,
    "end": 2595,
    "range": [
      2593,
      2595
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2595,
    "end": 2596,
    "range": [
      2595,
      2596
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2597,
    "end": 2598,
    "range": [
      2597,
      2598
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2603,
    "end": 2610,
    "range": [
      2603,
      2610
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2610,
    "end": 2611,
    "range": [
      2610,
      2611
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2611,
    "end": 2614,
    "range": [
      2611,
      2614
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2614,
    "end": 2615,
    "range": [
      2614,
      2615
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 2615,
    "end": 2623,
    "range": [
      2615,
      2623
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2623,
    "end": 2624,
    "range": [
      2623,
      2624
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2624,
    "end": 2625,
    "range": [
      2624,
      2625
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2626,
    "end": 2627,
    "range": [
      2626,
      2627
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2630,
    "end": 2633,
    "range": [
      2630,
      2633
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2634,
    "end": 2635,
    "range": [
      2634,
      2635
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2635,
    "end": 2636,
    "range": [
      2635,
      2636
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2636,
    "end": 2640,
    "range": [
      2636,
      2640
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2640,
    "end": 2641,
    "range": [
      2640,
      2641
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2642,
    "end": 2647,
    "range": [
      2642,
      2647
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2648,
    "end": 2649,
    "range": [
      2648,
      2649
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2650,
    "end": 2658,
    "range": [
      2650,
      2658
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2658,
    "end": 2659,
    "range": [
      2658,
      2659
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2660,
    "end": 2665,
    "range": [
      2660,
      2665
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2665,
    "end": 2666,
    "range": [
      2665,
      2666
    ]
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 2667,
    "end": 2673,
    "range": [
      2667,
      2673
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2674,
    "end": 2675,
    "range": [
      2674,
      2675
    ]
  },
  {
    "type": "String",
    "value": "\"skill\"",
    "start": 2676,
    "end": 2683,
    "range": [
      2676,
      2683
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2684,
    "end": 2685,
    "range": [
      2684,
      2685
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2686,
    "end": 2687,
    "range": [
      2686,
      2687
    ]
  },
  {
    "type": "Identifier",
    "value": "robot",
    "start": 2688,
    "end": 2693,
    "range": [
      2688,
      2693
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2693,
    "end": 2694,
    "range": [
      2693,
      2694
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2695,
    "end": 2696,
    "range": [
      2695,
      2696
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2697,
    "end": 2698,
    "range": [
      2697,
      2698
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2699,
    "end": 2700,
    "range": [
      2699,
      2700
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2700,
    "end": 2701,
    "range": [
      2700,
      2701
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2702,
    "end": 2703,
    "range": [
      2702,
      2703
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2704,
    "end": 2705,
    "range": [
      2704,
      2705
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2706,
    "end": 2707,
    "range": [
      2706,
      2707
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2707,
    "end": 2708,
    "range": [
      2707,
      2708
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2709,
    "end": 2710,
    "range": [
      2709,
      2710
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2710,
    "end": 2712,
    "range": [
      2710,
      2712
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2712,
    "end": 2713,
    "range": [
      2712,
      2713
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2714,
    "end": 2715,
    "range": [
      2714,
      2715
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2720,
    "end": 2727,
    "range": [
      2720,
      2727
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2727,
    "end": 2728,
    "range": [
      2727,
      2728
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2728,
    "end": 2731,
    "range": [
      2728,
      2731
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2731,
    "end": 2732,
    "range": [
      2731,
      2732
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2732,
    "end": 2737,
    "range": [
      2732,
      2737
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2737,
    "end": 2738,
    "range": [
      2737,
      2738
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2738,
    "end": 2739,
    "range": [
      2738,
      2739
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2740,
    "end": 2741,
    "range": [
      2740,
      2741
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2742,
    "end": 2745,
    "range": [
      2742,
      2745
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2746,
    "end": 2747,
    "range": [
      2746,
      2747
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2747,
    "end": 2748,
    "range": [
      2747,
      2748
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2748,
    "end": 2752,
    "range": [
      2748,
      2752
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2752,
    "end": 2753,
    "range": [
      2752,
      2753
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2754,
    "end": 2759,
    "range": [
      2754,
      2759
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2760,
    "end": 2761,
    "range": [
      2760,
      2761
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2762,
    "end": 2770,
    "range": [
      2762,
      2770
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2770,
    "end": 2771,
    "range": [
      2770,
      2771
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2772,
    "end": 2777,
    "range": [
      2772,
      2777
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2777,
    "end": 2778,
    "range": [
      2777,
      2778
    ]
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 2779,
    "end": 2785,
    "range": [
      2779,
      2785
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2786,
    "end": 2787,
    "range": [
      2786,
      2787
    ]
  },
  {
    "type": "String",
    "value": "\"skill\"",
    "start": 2788,
    "end": 2795,
    "range": [
      2788,
      2795
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2796,
    "end": 2797,
    "range": [
      2796,
      2797
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2798,
    "end": 2799,
    "range": [
      2798,
      2799
    ]
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 2800,
    "end": 2808,
    "range": [
      2800,
      2808
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2808,
    "end": 2809,
    "range": [
      2808,
      2809
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2809,
    "end": 2810,
    "range": [
      2809,
      2810
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2810,
    "end": 2811,
    "range": [
      2810,
      2811
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2812,
    "end": 2813,
    "range": [
      2812,
      2813
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2814,
    "end": 2815,
    "range": [
      2814,
      2815
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2816,
    "end": 2817,
    "range": [
      2816,
      2817
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2817,
    "end": 2818,
    "range": [
      2817,
      2818
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2819,
    "end": 2820,
    "range": [
      2819,
      2820
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2821,
    "end": 2822,
    "range": [
      2821,
      2822
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2823,
    "end": 2824,
    "range": [
      2823,
      2824
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2824,
    "end": 2825,
    "range": [
      2824,
      2825
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2826,
    "end": 2827,
    "range": [
      2826,
      2827
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2827,
    "end": 2829,
    "range": [
      2827,
      2829
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2829,
    "end": 2830,
    "range": [
      2829,
      2830
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2831,
    "end": 2832,
    "range": [
      2831,
      2832
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2837,
    "end": 2844,
    "range": [
      2837,
      2844
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2844,
    "end": 2845,
    "range": [
      2844,
      2845
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2845,
    "end": 2848,
    "range": [
      2845,
      2848
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2848,
    "end": 2849,
    "range": [
      2848,
      2849
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2849,
    "end": 2854,
    "range": [
      2849,
      2854
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2854,
    "end": 2855,
    "range": [
      2854,
      2855
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2855,
    "end": 2856,
    "range": [
      2855,
      2856
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2857,
    "end": 2858,
    "range": [
      2857,
      2858
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2859,
    "end": 2862,
    "range": [
      2859,
      2862
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2863,
    "end": 2864,
    "range": [
      2863,
      2864
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2864,
    "end": 2865,
    "range": [
      2864,
      2865
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2865,
    "end": 2869,
    "range": [
      2865,
      2869
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2869,
    "end": 2870,
    "range": [
      2869,
      2870
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 2871,
    "end": 2876,
    "range": [
      2871,
      2876
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2877,
    "end": 2878,
    "range": [
      2877,
      2878
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 2879,
    "end": 2887,
    "range": [
      2879,
      2887
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2887,
    "end": 2888,
    "range": [
      2887,
      2888
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2889,
    "end": 2894,
    "range": [
      2889,
      2894
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2894,
    "end": 2895,
    "range": [
      2894,
      2895
    ]
  },
  {
    "type": "Identifier",
    "value": "skillA",
    "start": 2896,
    "end": 2902,
    "range": [
      2896,
      2902
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2903,
    "end": 2904,
    "range": [
      2903,
      2904
    ]
  },
  {
    "type": "String",
    "value": "\"skill\"",
    "start": 2905,
    "end": 2912,
    "range": [
      2905,
      2912
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2913,
    "end": 2914,
    "range": [
      2913,
      2914
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2915,
    "end": 2916,
    "range": [
      2915,
      2916
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2917,
    "end": 2918,
    "range": [
      2917,
      2918
    ]
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 2918,
    "end": 2923,
    "range": [
      2918,
      2923
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2923,
    "end": 2924,
    "range": [
      2923,
      2924
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2924,
    "end": 2925,
    "range": [
      2924,
      2925
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2926,
    "end": 2930,
    "range": [
      2926,
      2930
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2930,
    "end": 2931,
    "range": [
      2930,
      2931
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 2932,
    "end": 2941,
    "range": [
      2932,
      2941
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2941,
    "end": 2942,
    "range": [
      2941,
      2942
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 2943,
    "end": 2948,
    "range": [
      2943,
      2948
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2948,
    "end": 2949,
    "range": [
      2948,
      2949
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 2950,
    "end": 2960,
    "range": [
      2950,
      2960
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2961,
    "end": 2962,
    "range": [
      2961,
      2962
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2962,
    "end": 2963,
    "range": [
      2962,
      2963
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2964,
    "end": 2965,
    "range": [
      2964,
      2965
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2966,
    "end": 2967,
    "range": [
      2966,
      2967
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2968,
    "end": 2969,
    "range": [
      2968,
      2969
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2969,
    "end": 2970,
    "range": [
      2969,
      2970
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2971,
    "end": 2972,
    "range": [
      2971,
      2972
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2973,
    "end": 2974,
    "range": [
      2973,
      2974
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2975,
    "end": 2976,
    "range": [
      2975,
      2976
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2976,
    "end": 2977,
    "range": [
      2976,
      2977
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2978,
    "end": 2979,
    "range": [
      2978,
      2979
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2979,
    "end": 2981,
    "range": [
      2979,
      2981
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2981,
    "end": 2982,
    "range": [
      2981,
      2982
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2983,
    "end": 2984,
    "range": [
      2983,
      2984
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2989,
    "end": 2996,
    "range": [
      2989,
      2996
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2996,
    "end": 2997,
    "range": [
      2996,
      2997
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2997,
    "end": 3000,
    "range": [
      2997,
      3000
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3000,
    "end": 3001,
    "range": [
      3000,
      3001
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3001,
    "end": 3006,
    "range": [
      3001,
      3006
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3006,
    "end": 3007,
    "range": [
      3006,
      3007
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3007,
    "end": 3008,
    "range": [
      3007,
      3008
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3009,
    "end": 3010,
    "range": [
      3009,
      3010
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3011,
    "end": 3014,
    "range": [
      3011,
      3014
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3015,
    "end": 3016,
    "range": [
      3015,
      3016
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3016,
    "end": 3017,
    "range": [
      3016,
      3017
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3022,
    "end": 3026,
    "range": [
      3022,
      3026
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3026,
    "end": 3027,
    "range": [
      3026,
      3027
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3028,
    "end": 3033,
    "range": [
      3028,
      3033
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3034,
    "end": 3035,
    "range": [
      3034,
      3035
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 3036,
    "end": 3044,
    "range": [
      3036,
      3044
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3044,
    "end": 3045,
    "range": [
      3044,
      3045
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3050,
    "end": 3056,
    "range": [
      3050,
      3056
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3056,
    "end": 3057,
    "range": [
      3056,
      3057
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3058,
    "end": 3059,
    "range": [
      3058,
      3059
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3068,
    "end": 3075,
    "range": [
      3068,
      3075
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3075,
    "end": 3076,
    "range": [
      3075,
      3076
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 3077,
    "end": 3085,
    "range": [
      3077,
      3085
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3086,
    "end": 3087,
    "range": [
      3086,
      3087
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 3088,
    "end": 3097,
    "range": [
      3088,
      3097
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3097,
    "end": 3098,
    "range": [
      3097,
      3098
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3107,
    "end": 3116,
    "range": [
      3107,
      3116
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3116,
    "end": 3117,
    "range": [
      3116,
      3117
    ]
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 3118,
    "end": 3128,
    "range": [
      3118,
      3128
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3129,
    "end": 3130,
    "range": [
      3129,
      3130
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 3131,
    "end": 3142,
    "range": [
      3131,
      3142
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3147,
    "end": 3148,
    "range": [
      3147,
      3148
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3149,
    "end": 3150,
    "range": [
      3149,
      3150
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3151,
    "end": 3152,
    "range": [
      3151,
      3152
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3153,
    "end": 3160,
    "range": [
      3153,
      3160
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3160,
    "end": 3161,
    "range": [
      3160,
      3161
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 3162,
    "end": 3168,
    "range": [
      3162,
      3168
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3168,
    "end": 3169,
    "range": [
      3168,
      3169
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3170,
    "end": 3179,
    "range": [
      3170,
      3179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3179,
    "end": 3180,
    "range": [
      3179,
      3180
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 3181,
    "end": 3187,
    "range": [
      3181,
      3187
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3188,
    "end": 3189,
    "range": [
      3188,
      3189
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3190,
    "end": 3191,
    "range": [
      3190,
      3191
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3192,
    "end": 3193,
    "range": [
      3192,
      3193
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobot",
    "start": 3194,
    "end": 3204,
    "range": [
      3194,
      3204
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3204,
    "end": 3205,
    "range": [
      3204,
      3205
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3206,
    "end": 3207,
    "range": [
      3206,
      3207
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3208,
    "end": 3209,
    "range": [
      3208,
      3209
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3210,
    "end": 3211,
    "range": [
      3210,
      3211
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3211,
    "end": 3212,
    "range": [
      3211,
      3212
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3213,
    "end": 3214,
    "range": [
      3213,
      3214
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3215,
    "end": 3216,
    "range": [
      3215,
      3216
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3217,
    "end": 3218,
    "range": [
      3217,
      3218
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3218,
    "end": 3219,
    "range": [
      3218,
      3219
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3220,
    "end": 3221,
    "range": [
      3220,
      3221
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 3221,
    "end": 3223,
    "range": [
      3221,
      3223
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3223,
    "end": 3224,
    "range": [
      3223,
      3224
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3225,
    "end": 3226,
    "range": [
      3225,
      3226
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3231,
    "end": 3238,
    "range": [
      3231,
      3238
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3238,
    "end": 3239,
    "range": [
      3238,
      3239
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3239,
    "end": 3242,
    "range": [
      3239,
      3242
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3242,
    "end": 3243,
    "range": [
      3242,
      3243
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 3243,
    "end": 3251,
    "range": [
      3243,
      3251
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3251,
    "end": 3252,
    "range": [
      3251,
      3252
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3252,
    "end": 3253,
    "range": [
      3252,
      3253
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3254,
    "end": 3255,
    "range": [
      3254,
      3255
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3256,
    "end": 3259,
    "range": [
      3256,
      3259
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3260,
    "end": 3261,
    "range": [
      3260,
      3261
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3261,
    "end": 3262,
    "range": [
      3261,
      3262
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3267,
    "end": 3271,
    "range": [
      3267,
      3271
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3271,
    "end": 3272,
    "range": [
      3271,
      3272
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3273,
    "end": 3278,
    "range": [
      3273,
      3278
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3279,
    "end": 3280,
    "range": [
      3279,
      3280
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 3281,
    "end": 3289,
    "range": [
      3281,
      3289
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3289,
    "end": 3290,
    "range": [
      3289,
      3290
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3295,
    "end": 3301,
    "range": [
      3295,
      3301
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3301,
    "end": 3302,
    "range": [
      3301,
      3302
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3303,
    "end": 3304,
    "range": [
      3303,
      3304
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3313,
    "end": 3320,
    "range": [
      3313,
      3320
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3320,
    "end": 3321,
    "range": [
      3320,
      3321
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 3322,
    "end": 3330,
    "range": [
      3322,
      3330
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3331,
    "end": 3332,
    "range": [
      3331,
      3332
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 3333,
    "end": 3342,
    "range": [
      3333,
      3342
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3342,
    "end": 3343,
    "range": [
      3342,
      3343
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3352,
    "end": 3361,
    "range": [
      3352,
      3361
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3361,
    "end": 3362,
    "range": [
      3361,
      3362
    ]
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 3363,
    "end": 3373,
    "range": [
      3363,
      3373
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3374,
    "end": 3375,
    "range": [
      3374,
      3375
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 3376,
    "end": 3387,
    "range": [
      3376,
      3387
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3392,
    "end": 3393,
    "range": [
      3392,
      3393
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3394,
    "end": 3395,
    "range": [
      3394,
      3395
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3396,
    "end": 3397,
    "range": [
      3396,
      3397
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3398,
    "end": 3405,
    "range": [
      3398,
      3405
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3405,
    "end": 3406,
    "range": [
      3405,
      3406
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 3407,
    "end": 3413,
    "range": [
      3407,
      3413
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3413,
    "end": 3414,
    "range": [
      3413,
      3414
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3415,
    "end": 3424,
    "range": [
      3415,
      3424
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3424,
    "end": 3425,
    "range": [
      3424,
      3425
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 3426,
    "end": 3432,
    "range": [
      3426,
      3432
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3433,
    "end": 3434,
    "range": [
      3433,
      3434
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3435,
    "end": 3436,
    "range": [
      3435,
      3436
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3437,
    "end": 3438,
    "range": [
      3437,
      3438
    ]
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 3439,
    "end": 3452,
    "range": [
      3439,
      3452
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3452,
    "end": 3453,
    "range": [
      3452,
      3453
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3453,
    "end": 3454,
    "range": [
      3453,
      3454
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3454,
    "end": 3455,
    "range": [
      3454,
      3455
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3456,
    "end": 3457,
    "range": [
      3456,
      3457
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3458,
    "end": 3459,
    "range": [
      3458,
      3459
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3460,
    "end": 3461,
    "range": [
      3460,
      3461
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3461,
    "end": 3462,
    "range": [
      3461,
      3462
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3463,
    "end": 3464,
    "range": [
      3463,
      3464
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3465,
    "end": 3466,
    "range": [
      3465,
      3466
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3467,
    "end": 3468,
    "range": [
      3467,
      3468
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3468,
    "end": 3469,
    "range": [
      3468,
      3469
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3470,
    "end": 3471,
    "range": [
      3470,
      3471
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 3471,
    "end": 3473,
    "range": [
      3471,
      3473
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3473,
    "end": 3474,
    "range": [
      3473,
      3474
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3475,
    "end": 3476,
    "range": [
      3475,
      3476
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3481,
    "end": 3488,
    "range": [
      3481,
      3488
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3488,
    "end": 3489,
    "range": [
      3488,
      3489
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3489,
    "end": 3492,
    "range": [
      3489,
      3492
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3492,
    "end": 3493,
    "range": [
      3492,
      3493
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 3493,
    "end": 3501,
    "range": [
      3493,
      3501
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3501,
    "end": 3502,
    "range": [
      3501,
      3502
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3502,
    "end": 3503,
    "range": [
      3502,
      3503
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3504,
    "end": 3505,
    "range": [
      3504,
      3505
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3506,
    "end": 3509,
    "range": [
      3506,
      3509
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3510,
    "end": 3511,
    "range": [
      3510,
      3511
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3511,
    "end": 3512,
    "range": [
      3511,
      3512
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3517,
    "end": 3521,
    "range": [
      3517,
      3521
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3521,
    "end": 3522,
    "range": [
      3521,
      3522
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3523,
    "end": 3528,
    "range": [
      3523,
      3528
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3529,
    "end": 3530,
    "range": [
      3529,
      3530
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 3531,
    "end": 3539,
    "range": [
      3531,
      3539
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3539,
    "end": 3540,
    "range": [
      3539,
      3540
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3545,
    "end": 3551,
    "range": [
      3545,
      3551
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3551,
    "end": 3552,
    "range": [
      3551,
      3552
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3553,
    "end": 3554,
    "range": [
      3553,
      3554
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3563,
    "end": 3570,
    "range": [
      3563,
      3570
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3570,
    "end": 3571,
    "range": [
      3570,
      3571
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 3572,
    "end": 3580,
    "range": [
      3572,
      3580
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3581,
    "end": 3582,
    "range": [
      3581,
      3582
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 3583,
    "end": 3592,
    "range": [
      3583,
      3592
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3592,
    "end": 3593,
    "range": [
      3592,
      3593
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3602,
    "end": 3611,
    "range": [
      3602,
      3611
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3611,
    "end": 3612,
    "range": [
      3611,
      3612
    ]
  },
  {
    "type": "Identifier",
    "value": "secondaryA",
    "start": 3613,
    "end": 3623,
    "range": [
      3613,
      3623
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3624,
    "end": 3625,
    "range": [
      3624,
      3625
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 3626,
    "end": 3637,
    "range": [
      3626,
      3637
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3642,
    "end": 3643,
    "range": [
      3642,
      3643
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3644,
    "end": 3645,
    "range": [
      3644,
      3645
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3646,
    "end": 3647,
    "range": [
      3646,
      3647
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3648,
    "end": 3655,
    "range": [
      3648,
      3655
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3655,
    "end": 3656,
    "range": [
      3655,
      3656
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 3657,
    "end": 3663,
    "range": [
      3657,
      3663
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3663,
    "end": 3664,
    "range": [
      3663,
      3664
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3665,
    "end": 3674,
    "range": [
      3665,
      3674
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3674,
    "end": 3675,
    "range": [
      3674,
      3675
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 3676,
    "end": 3682,
    "range": [
      3676,
      3682
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3683,
    "end": 3684,
    "range": [
      3683,
      3684
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3685,
    "end": 3686,
    "range": [
      3685,
      3686
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3687,
    "end": 3688,
    "range": [
      3687,
      3688
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3689,
    "end": 3690,
    "range": [
      3689,
      3690
    ]
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 3690,
    "end": 3700,
    "range": [
      3690,
      3700
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3700,
    "end": 3701,
    "range": [
      3700,
      3701
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3701,
    "end": 3702,
    "range": [
      3701,
      3702
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3703,
    "end": 3707,
    "range": [
      3703,
      3707
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3707,
    "end": 3708,
    "range": [
      3707,
      3708
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 3709,
    "end": 3718,
    "range": [
      3709,
      3718
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3718,
    "end": 3719,
    "range": [
      3718,
      3719
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 3720,
    "end": 3726,
    "range": [
      3720,
      3726
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3726,
    "end": 3727,
    "range": [
      3726,
      3727
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3728,
    "end": 3729,
    "range": [
      3728,
      3729
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 3730,
    "end": 3737,
    "range": [
      3730,
      3737
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3737,
    "end": 3738,
    "range": [
      3737,
      3738
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 3739,
    "end": 3749,
    "range": [
      3739,
      3749
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3749,
    "end": 3750,
    "range": [
      3749,
      3750
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 3751,
    "end": 3760,
    "range": [
      3751,
      3760
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3760,
    "end": 3761,
    "range": [
      3760,
      3761
    ]
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 3762,
    "end": 3770,
    "range": [
      3762,
      3770
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3771,
    "end": 3772,
    "range": [
      3771,
      3772
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3773,
    "end": 3774,
    "range": [
      3773,
      3774
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3774,
    "end": 3775,
    "range": [
      3774,
      3775
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3780,
    "end": 3781,
    "range": [
      3780,
      3781
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3782,
    "end": 3783,
    "range": [
      3782,
      3783
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3784,
    "end": 3785,
    "range": [
      3784,
      3785
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3785,
    "end": 3786,
    "range": [
      3785,
      3786
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3787,
    "end": 3788,
    "range": [
      3787,
      3788
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3789,
    "end": 3790,
    "range": [
      3789,
      3790
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3791,
    "end": 3792,
    "range": [
      3791,
      3792
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3792,
    "end": 3793,
    "range": [
      3792,
      3793
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3794,
    "end": 3795,
    "range": [
      3794,
      3795
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 3795,
    "end": 3797,
    "range": [
      3795,
      3797
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3797,
    "end": 3798,
    "range": [
      3797,
      3798
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3799,
    "end": 3800,
    "range": [
      3799,
      3800
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3805,
    "end": 3812,
    "range": [
      3805,
      3812
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3812,
    "end": 3813,
    "range": [
      3812,
      3813
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3813,
    "end": 3816,
    "range": [
      3813,
      3816
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3816,
    "end": 3817,
    "range": [
      3816,
      3817
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 3817,
    "end": 3825,
    "range": [
      3817,
      3825
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3825,
    "end": 3826,
    "range": [
      3825,
      3826
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3826,
    "end": 3827,
    "range": [
      3826,
      3827
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3828,
    "end": 3829,
    "range": [
      3828,
      3829
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3831,
    "end": 3834,
    "range": [
      3831,
      3834
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3835,
    "end": 3836,
    "range": [
      3835,
      3836
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3836,
    "end": 3837,
    "range": [
      3836,
      3837
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3838,
    "end": 3842,
    "range": [
      3838,
      3842
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3843,
    "end": 3844,
    "range": [
      3843,
      3844
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 3845,
    "end": 3853,
    "range": [
      3845,
      3853
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3853,
    "end": 3854,
    "range": [
      3853,
      3854
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 3855,
    "end": 3860,
    "range": [
      3855,
      3860
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3861,
    "end": 3862,
    "range": [
      3861,
      3862
    ]
  },
  {
    "type": "String",
    "value": "\"skill\"",
    "start": 3863,
    "end": 3870,
    "range": [
      3863,
      3870
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3871,
    "end": 3872,
    "range": [
      3871,
      3872
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3873,
    "end": 3874,
    "range": [
      3873,
      3874
    ]
  },
  {
    "type": "Identifier",
    "value": "robot",
    "start": 3875,
    "end": 3880,
    "range": [
      3875,
      3880
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3880,
    "end": 3881,
    "range": [
      3880,
      3881
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3882,
    "end": 3883,
    "range": [
      3882,
      3883
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3884,
    "end": 3885,
    "range": [
      3884,
      3885
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3886,
    "end": 3887,
    "range": [
      3886,
      3887
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3887,
    "end": 3888,
    "range": [
      3887,
      3888
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3889,
    "end": 3890,
    "range": [
      3889,
      3890
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3891,
    "end": 3892,
    "range": [
      3891,
      3892
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3893,
    "end": 3894,
    "range": [
      3893,
      3894
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3894,
    "end": 3895,
    "range": [
      3894,
      3895
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3896,
    "end": 3897,
    "range": [
      3896,
      3897
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 3897,
    "end": 3899,
    "range": [
      3897,
      3899
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3899,
    "end": 3900,
    "range": [
      3899,
      3900
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3901,
    "end": 3902,
    "range": [
      3901,
      3902
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 3907,
    "end": 3914,
    "range": [
      3907,
      3914
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3914,
    "end": 3915,
    "range": [
      3914,
      3915
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3915,
    "end": 3918,
    "range": [
      3915,
      3918
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3918,
    "end": 3919,
    "range": [
      3918,
      3919
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 3919,
    "end": 3924,
    "range": [
      3919,
      3924
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3924,
    "end": 3925,
    "range": [
      3924,
      3925
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3925,
    "end": 3926,
    "range": [
      3925,
      3926
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3927,
    "end": 3928,
    "range": [
      3927,
      3928
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3929,
    "end": 3932,
    "range": [
      3929,
      3932
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3933,
    "end": 3934,
    "range": [
      3933,
      3934
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3934,
    "end": 3935,
    "range": [
      3934,
      3935
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3936,
    "end": 3940,
    "range": [
      3936,
      3940
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3941,
    "end": 3942,
    "range": [
      3941,
      3942
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 3943,
    "end": 3951,
    "range": [
      3943,
      3951
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3951,
    "end": 3952,
    "range": [
      3951,
      3952
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 3953,
    "end": 3958,
    "range": [
      3953,
      3958
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3959,
    "end": 3960,
    "range": [
      3959,
      3960
    ]
  },
  {
    "type": "String",
    "value": "\"skill\"",
    "start": 3961,
    "end": 3968,
    "range": [
      3961,
      3968
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3969,
    "end": 3970,
    "range": [
      3969,
      3970
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3971,
    "end": 3972,
    "range": [
      3971,
      3972
    ]
  },
  {
    "type": "Identifier",
    "value": "getRobot",
    "start": 3973,
    "end": 3981,
    "range": [
      3973,
      3981
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3981,
    "end": 3982,
    "range": [
      3981,
      3982
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3982,
    "end": 3983,
    "range": [
      3982,
      3983
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3983,
    "end": 3984,
    "range": [
      3983,
      3984
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3985,
    "end": 3986,
    "range": [
      3985,
      3986
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3987,
    "end": 3988,
    "range": [
      3987,
      3988
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3989,
    "end": 3990,
    "range": [
      3989,
      3990
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3990,
    "end": 3991,
    "range": [
      3990,
      3991
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3992,
    "end": 3993,
    "range": [
      3992,
      3993
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3994,
    "end": 3995,
    "range": [
      3994,
      3995
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3996,
    "end": 3997,
    "range": [
      3996,
      3997
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3997,
    "end": 3998,
    "range": [
      3997,
      3998
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3999,
    "end": 4000,
    "range": [
      3999,
      4000
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 4000,
    "end": 4002,
    "range": [
      4000,
      4002
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4002,
    "end": 4003,
    "range": [
      4002,
      4003
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4004,
    "end": 4005,
    "range": [
      4004,
      4005
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 4010,
    "end": 4017,
    "range": [
      4010,
      4017
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4017,
    "end": 4018,
    "range": [
      4017,
      4018
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 4018,
    "end": 4021,
    "range": [
      4018,
      4021
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4021,
    "end": 4022,
    "range": [
      4021,
      4022
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 4022,
    "end": 4027,
    "range": [
      4022,
      4027
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4027,
    "end": 4028,
    "range": [
      4027,
      4028
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4028,
    "end": 4029,
    "range": [
      4028,
      4029
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4030,
    "end": 4031,
    "range": [
      4030,
      4031
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 4032,
    "end": 4035,
    "range": [
      4032,
      4035
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4036,
    "end": 4037,
    "range": [
      4036,
      4037
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4037,
    "end": 4038,
    "range": [
      4037,
      4038
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4039,
    "end": 4043,
    "range": [
      4039,
      4043
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4044,
    "end": 4045,
    "range": [
      4044,
      4045
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 4046,
    "end": 4054,
    "range": [
      4046,
      4054
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4054,
    "end": 4055,
    "range": [
      4054,
      4055
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 4056,
    "end": 4061,
    "range": [
      4056,
      4061
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4062,
    "end": 4063,
    "range": [
      4062,
      4063
    ]
  },
  {
    "type": "String",
    "value": "\"skill\"",
    "start": 4064,
    "end": 4071,
    "range": [
      4064,
      4071
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4072,
    "end": 4073,
    "range": [
      4072,
      4073
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4074,
    "end": 4075,
    "range": [
      4074,
      4075
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4076,
    "end": 4077,
    "range": [
      4076,
      4077
    ]
  },
  {
    "type": "Identifier",
    "value": "Robot",
    "start": 4077,
    "end": 4082,
    "range": [
      4077,
      4082
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4082,
    "end": 4083,
    "range": [
      4082,
      4083
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4083,
    "end": 4084,
    "range": [
      4083,
      4084
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4085,
    "end": 4089,
    "range": [
      4085,
      4089
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4089,
    "end": 4090,
    "range": [
      4089,
      4090
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 4091,
    "end": 4100,
    "range": [
      4091,
      4100
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4100,
    "end": 4101,
    "range": [
      4100,
      4101
    ]
  },
  {
    "type": "Identifier",
    "value": "skill",
    "start": 4102,
    "end": 4107,
    "range": [
      4102,
      4107
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4107,
    "end": 4108,
    "range": [
      4107,
      4108
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 4109,
    "end": 4119,
    "range": [
      4109,
      4119
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4120,
    "end": 4121,
    "range": [
      4120,
      4121
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4121,
    "end": 4122,
    "range": [
      4121,
      4122
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4123,
    "end": 4124,
    "range": [
      4123,
      4124
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4125,
    "end": 4126,
    "range": [
      4125,
      4126
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4127,
    "end": 4128,
    "range": [
      4127,
      4128
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4128,
    "end": 4129,
    "range": [
      4128,
      4129
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4130,
    "end": 4131,
    "range": [
      4130,
      4131
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4132,
    "end": 4133,
    "range": [
      4132,
      4133
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4134,
    "end": 4135,
    "range": [
      4134,
      4135
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4135,
    "end": 4136,
    "range": [
      4135,
      4136
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4137,
    "end": 4138,
    "range": [
      4137,
      4138
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 4138,
    "end": 4140,
    "range": [
      4138,
      4140
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4140,
    "end": 4141,
    "range": [
      4140,
      4141
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4142,
    "end": 4143,
    "range": [
      4142,
      4143
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 4148,
    "end": 4155,
    "range": [
      4148,
      4155
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4155,
    "end": 4156,
    "range": [
      4155,
      4156
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 4156,
    "end": 4159,
    "range": [
      4156,
      4159
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4159,
    "end": 4160,
    "range": [
      4159,
      4160
    ]
  },
  {
    "type": "Identifier",
    "value": "nameA",
    "start": 4160,
    "end": 4165,
    "range": [
      4160,
      4165
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4165,
    "end": 4166,
    "range": [
      4165,
      4166
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4166,
    "end": 4167,
    "range": [
      4166,
      4167
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4168,
    "end": 4169,
    "range": [
      4168,
      4169
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 4170,
    "end": 4173,
    "range": [
      4170,
      4173
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4174,
    "end": 4175,
    "range": [
      4174,
      4175
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4175,
    "end": 4176,
    "range": [
      4175,
      4176
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4181,
    "end": 4185,
    "range": [
      4181,
      4185
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4186,
    "end": 4187,
    "range": [
      4186,
      4187
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 4188,
    "end": 4196,
    "range": [
      4188,
      4196
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4196,
    "end": 4197,
    "range": [
      4196,
      4197
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 4202,
    "end": 4208,
    "range": [
      4202,
      4208
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4208,
    "end": 4209,
    "range": [
      4208,
      4209
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4210,
    "end": 4211,
    "range": [
      4210,
      4211
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 4220,
    "end": 4227,
    "range": [
      4220,
      4227
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4228,
    "end": 4229,
    "range": [
      4228,
      4229
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 4230,
    "end": 4239,
    "range": [
      4230,
      4239
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4239,
    "end": 4240,
    "range": [
      4239,
      4240
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 4249,
    "end": 4258,
    "range": [
      4249,
      4258
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4259,
    "end": 4260,
    "range": [
      4259,
      4260
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 4261,
    "end": 4272,
    "range": [
      4261,
      4272
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4277,
    "end": 4278,
    "range": [
      4277,
      4278
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4279,
    "end": 4280,
    "range": [
      4279,
      4280
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4281,
    "end": 4282,
    "range": [
      4281,
      4282
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 4283,
    "end": 4290,
    "range": [
      4283,
      4290
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4290,
    "end": 4291,
    "range": [
      4290,
      4291
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 4292,
    "end": 4298,
    "range": [
      4292,
      4298
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4298,
    "end": 4299,
    "range": [
      4298,
      4299
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 4300,
    "end": 4309,
    "range": [
      4300,
      4309
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4309,
    "end": 4310,
    "range": [
      4309,
      4310
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 4311,
    "end": 4317,
    "range": [
      4311,
      4317
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4318,
    "end": 4319,
    "range": [
      4318,
      4319
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4320,
    "end": 4321,
    "range": [
      4320,
      4321
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4322,
    "end": 4323,
    "range": [
      4322,
      4323
    ]
  },
  {
    "type": "Identifier",
    "value": "multiRobot",
    "start": 4324,
    "end": 4334,
    "range": [
      4324,
      4334
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4334,
    "end": 4335,
    "range": [
      4334,
      4335
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4336,
    "end": 4337,
    "range": [
      4336,
      4337
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4338,
    "end": 4339,
    "range": [
      4338,
      4339
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4340,
    "end": 4341,
    "range": [
      4340,
      4341
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4341,
    "end": 4342,
    "range": [
      4341,
      4342
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4343,
    "end": 4344,
    "range": [
      4343,
      4344
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4345,
    "end": 4346,
    "range": [
      4345,
      4346
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4347,
    "end": 4348,
    "range": [
      4347,
      4348
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4348,
    "end": 4349,
    "range": [
      4348,
      4349
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4350,
    "end": 4351,
    "range": [
      4350,
      4351
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 4351,
    "end": 4353,
    "range": [
      4351,
      4353
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4353,
    "end": 4354,
    "range": [
      4353,
      4354
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4355,
    "end": 4356,
    "range": [
      4355,
      4356
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 4361,
    "end": 4368,
    "range": [
      4361,
      4368
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4368,
    "end": 4369,
    "range": [
      4368,
      4369
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 4369,
    "end": 4372,
    "range": [
      4369,
      4372
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4372,
    "end": 4373,
    "range": [
      4372,
      4373
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 4373,
    "end": 4381,
    "range": [
      4373,
      4381
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4381,
    "end": 4382,
    "range": [
      4381,
      4382
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4382,
    "end": 4383,
    "range": [
      4382,
      4383
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4384,
    "end": 4385,
    "range": [
      4384,
      4385
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 4386,
    "end": 4389,
    "range": [
      4386,
      4389
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4390,
    "end": 4391,
    "range": [
      4390,
      4391
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4391,
    "end": 4392,
    "range": [
      4391,
      4392
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4397,
    "end": 4401,
    "range": [
      4397,
      4401
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4402,
    "end": 4403,
    "range": [
      4402,
      4403
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 4404,
    "end": 4412,
    "range": [
      4404,
      4412
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4412,
    "end": 4413,
    "range": [
      4412,
      4413
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 4418,
    "end": 4424,
    "range": [
      4418,
      4424
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4424,
    "end": 4425,
    "range": [
      4424,
      4425
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4426,
    "end": 4427,
    "range": [
      4426,
      4427
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 4436,
    "end": 4443,
    "range": [
      4436,
      4443
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4444,
    "end": 4445,
    "range": [
      4444,
      4445
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 4446,
    "end": 4455,
    "range": [
      4446,
      4455
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4455,
    "end": 4456,
    "range": [
      4455,
      4456
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 4465,
    "end": 4474,
    "range": [
      4465,
      4474
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4475,
    "end": 4476,
    "range": [
      4475,
      4476
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 4477,
    "end": 4488,
    "range": [
      4477,
      4488
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4493,
    "end": 4494,
    "range": [
      4493,
      4494
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4495,
    "end": 4496,
    "range": [
      4495,
      4496
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4497,
    "end": 4498,
    "range": [
      4497,
      4498
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 4499,
    "end": 4506,
    "range": [
      4499,
      4506
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4506,
    "end": 4507,
    "range": [
      4506,
      4507
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 4508,
    "end": 4514,
    "range": [
      4508,
      4514
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4514,
    "end": 4515,
    "range": [
      4514,
      4515
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 4516,
    "end": 4525,
    "range": [
      4516,
      4525
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4525,
    "end": 4526,
    "range": [
      4525,
      4526
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 4527,
    "end": 4533,
    "range": [
      4527,
      4533
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4534,
    "end": 4535,
    "range": [
      4534,
      4535
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4536,
    "end": 4537,
    "range": [
      4536,
      4537
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4538,
    "end": 4539,
    "range": [
      4538,
      4539
    ]
  },
  {
    "type": "Identifier",
    "value": "getMultiRobot",
    "start": 4540,
    "end": 4553,
    "range": [
      4540,
      4553
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4553,
    "end": 4554,
    "range": [
      4553,
      4554
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4554,
    "end": 4555,
    "range": [
      4554,
      4555
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4555,
    "end": 4556,
    "range": [
      4555,
      4556
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4557,
    "end": 4558,
    "range": [
      4557,
      4558
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4559,
    "end": 4560,
    "range": [
      4559,
      4560
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4561,
    "end": 4562,
    "range": [
      4561,
      4562
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4562,
    "end": 4563,
    "range": [
      4562,
      4563
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4564,
    "end": 4565,
    "range": [
      4564,
      4565
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4566,
    "end": 4567,
    "range": [
      4566,
      4567
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4568,
    "end": 4569,
    "range": [
      4568,
      4569
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4569,
    "end": 4570,
    "range": [
      4569,
      4570
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4571,
    "end": 4572,
    "range": [
      4571,
      4572
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 4572,
    "end": 4574,
    "range": [
      4572,
      4574
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4574,
    "end": 4575,
    "range": [
      4574,
      4575
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4576,
    "end": 4577,
    "range": [
      4576,
      4577
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 4582,
    "end": 4589,
    "range": [
      4582,
      4589
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4589,
    "end": 4590,
    "range": [
      4589,
      4590
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 4590,
    "end": 4593,
    "range": [
      4590,
      4593
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4593,
    "end": 4594,
    "range": [
      4593,
      4594
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 4594,
    "end": 4602,
    "range": [
      4594,
      4602
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4602,
    "end": 4603,
    "range": [
      4602,
      4603
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4603,
    "end": 4604,
    "range": [
      4603,
      4604
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4605,
    "end": 4606,
    "range": [
      4605,
      4606
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 4607,
    "end": 4610,
    "range": [
      4607,
      4610
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4611,
    "end": 4612,
    "range": [
      4611,
      4612
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4612,
    "end": 4613,
    "range": [
      4612,
      4613
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4618,
    "end": 4622,
    "range": [
      4618,
      4622
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4623,
    "end": 4624,
    "range": [
      4623,
      4624
    ]
  },
  {
    "type": "String",
    "value": "\"noName\"",
    "start": 4625,
    "end": 4633,
    "range": [
      4625,
      4633
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4633,
    "end": 4634,
    "range": [
      4633,
      4634
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 4639,
    "end": 4645,
    "range": [
      4639,
      4645
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4645,
    "end": 4646,
    "range": [
      4645,
      4646
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4647,
    "end": 4648,
    "range": [
      4647,
      4648
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 4657,
    "end": 4664,
    "range": [
      4657,
      4664
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4665,
    "end": 4666,
    "range": [
      4665,
      4666
    ]
  },
  {
    "type": "String",
    "value": "\"primary\"",
    "start": 4667,
    "end": 4676,
    "range": [
      4667,
      4676
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4676,
    "end": 4677,
    "range": [
      4676,
      4677
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 4686,
    "end": 4695,
    "range": [
      4686,
      4695
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4696,
    "end": 4697,
    "range": [
      4696,
      4697
    ]
  },
  {
    "type": "String",
    "value": "\"secondary\"",
    "start": 4698,
    "end": 4709,
    "range": [
      4698,
      4709
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4714,
    "end": 4715,
    "range": [
      4714,
      4715
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4716,
    "end": 4717,
    "range": [
      4716,
      4717
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4718,
    "end": 4719,
    "range": [
      4718,
      4719
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 4720,
    "end": 4727,
    "range": [
      4720,
      4727
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4727,
    "end": 4728,
    "range": [
      4727,
      4728
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 4729,
    "end": 4735,
    "range": [
      4729,
      4735
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4735,
    "end": 4736,
    "range": [
      4735,
      4736
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 4737,
    "end": 4746,
    "range": [
      4737,
      4746
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4746,
    "end": 4747,
    "range": [
      4746,
      4747
    ]
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 4748,
    "end": 4754,
    "range": [
      4748,
      4754
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4755,
    "end": 4756,
    "range": [
      4755,
      4756
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4757,
    "end": 4758,
    "range": [
      4757,
      4758
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4759,
    "end": 4760,
    "range": [
      4759,
      4760
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4761,
    "end": 4762,
    "range": [
      4761,
      4762
    ]
  },
  {
    "type": "Identifier",
    "value": "MultiRobot",
    "start": 4762,
    "end": 4772,
    "range": [
      4762,
      4772
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4772,
    "end": 4773,
    "range": [
      4772,
      4773
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4773,
    "end": 4774,
    "range": [
      4773,
      4774
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 4775,
    "end": 4779,
    "range": [
      4775,
      4779
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4779,
    "end": 4780,
    "range": [
      4779,
      4780
    ]
  },
  {
    "type": "String",
    "value": "\"trimmer\"",
    "start": 4781,
    "end": 4790,
    "range": [
      4781,
      4790
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4790,
    "end": 4791,
    "range": [
      4790,
      4791
    ]
  },
  {
    "type": "Identifier",
    "value": "skills",
    "start": 4792,
    "end": 4798,
    "range": [
      4792,
      4798
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4798,
    "end": 4799,
    "range": [
      4798,
      4799
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4800,
    "end": 4801,
    "range": [
      4800,
      4801
    ]
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 4802,
    "end": 4809,
    "range": [
      4802,
      4809
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4809,
    "end": 4810,
    "range": [
      4809,
      4810
    ]
  },
  {
    "type": "String",
    "value": "\"trimming\"",
    "start": 4811,
    "end": 4821,
    "range": [
      4811,
      4821
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4821,
    "end": 4822,
    "range": [
      4821,
      4822
    ]
  },
  {
    "type": "Identifier",
    "value": "secondary",
    "start": 4823,
    "end": 4832,
    "range": [
      4823,
      4832
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4832,
    "end": 4833,
    "range": [
      4832,
      4833
    ]
  },
  {
    "type": "String",
    "value": "\"edging\"",
    "start": 4834,
    "end": 4842,
    "range": [
      4834,
      4842
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4843,
    "end": 4844,
    "range": [
      4843,
      4844
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4845,
    "end": 4846,
    "range": [
      4845,
      4846
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4846,
    "end": 4847,
    "range": [
      4846,
      4847
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4852,
    "end": 4853,
    "range": [
      4852,
      4853
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4854,
    "end": 4855,
    "range": [
      4854,
      4855
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4856,
    "end": 4857,
    "range": [
      4856,
      4857
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4857,
    "end": 4858,
    "range": [
      4857,
      4858
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4859,
    "end": 4860,
    "range": [
      4859,
      4860
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4861,
    "end": 4862,
    "range": [
      4861,
      4862
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4863,
    "end": 4864,
    "range": [
      4863,
      4864
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4864,
    "end": 4865,
    "range": [
      4864,
      4865
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4866,
    "end": 4867,
    "range": [
      4866,
      4867
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 4867,
    "end": 4869,
    "range": [
      4867,
      4869
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4869,
    "end": 4870,
    "range": [
      4869,
      4870
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4871,
    "end": 4872,
    "range": [
      4871,
      4872
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 4877,
    "end": 4884,
    "range": [
      4877,
      4884
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4884,
    "end": 4885,
    "range": [
      4884,
      4885
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 4885,
    "end": 4888,
    "range": [
      4885,
      4888
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4888,
    "end": 4889,
    "range": [
      4888,
      4889
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryA",
    "start": 4889,
    "end": 4897,
    "range": [
      4889,
      4897
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4897,
    "end": 4898,
    "range": [
      4897,
      4898
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4898,
    "end": 4899,
    "range": [
      4898,
      4899
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4900,
    "end": 4901,
    "range": [
      4900,
      4901
    ]
  }
]
```
