__ESTREE_TEST__:PASS:
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
