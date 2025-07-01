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
                    "optional": false,
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
                        "start": 180,
                        "end": 186
                      },
                      "start": 178,
                      "end": 186
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 171,
                    "end": 187
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondary",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 196,
                      "end": 205
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 207,
                        "end": 213
                      },
                      "start": 205,
                      "end": 213
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 196,
                    "end": 214
                  }
                ],
                "start": 161,
                "end": 220
              },
              "start": 159,
              "end": 220
            },
            "accessibility": null,
            "static": false,
            "start": 153,
            "end": 221
          }
        ],
        "start": 129,
        "end": 223
      },
      "declare": false,
      "start": 108,
      "end": 223
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
                  "start": 236,
                  "end": 241
                },
                "typeArguments": null,
                "start": 236,
                "end": 241
              },
              "start": 234,
              "end": 241
            },
            "start": 229,
            "end": 241
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
                  "start": 246,
                  "end": 250
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 252,
                  "end": 259
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 246,
                "end": 259
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
                  "start": 261,
                  "end": 266
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 268,
                  "end": 276
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 261,
                "end": 276
              }
            ],
            "start": 244,
            "end": 278
          },
          "definite": false,
          "start": 229,
          "end": 278
        }
      ],
      "declare": false,
      "start": 225,
      "end": 279
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
                  "start": 296,
                  "end": 306
                },
                "typeArguments": null,
                "start": 296,
                "end": 306
              },
              "start": 294,
              "end": 306
            },
            "start": 284,
            "end": 306
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
                  "start": 311,
                  "end": 315
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 317,
                  "end": 324
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 311,
                "end": 324
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
                  "start": 326,
                  "end": 332
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
                        "start": 336,
                        "end": 343
                      },
                      "value": {
                        "type": "Literal",
                        "value": "mowing",
                        "raw": "\"mowing\"",
                        "start": 345,
                        "end": 353
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 336,
                      "end": 353
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
                        "start": 355,
                        "end": 364
                      },
                      "value": {
                        "type": "Literal",
                        "value": "none",
                        "raw": "\"none\"",
                        "start": 366,
                        "end": 372
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 355,
                      "end": 372
                    }
                  ],
                  "start": 334,
                  "end": 374
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 326,
                "end": 374
              }
            ],
            "start": 309,
            "end": 376
          },
          "definite": false,
          "start": 284,
          "end": 376
        }
      ],
      "declare": false,
      "start": 280,
      "end": 377
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 387,
        "end": 395
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
              "start": 411,
              "end": 416
            },
            "start": 404,
            "end": 417
          }
        ],
        "start": 398,
        "end": 419
      },
      "expression": false,
      "start": 378,
      "end": 419
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getMultiRobot",
        "optional": false,
        "typeAnnotation": null,
        "start": 429,
        "end": 442
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
              "start": 458,
              "end": 468
            },
            "start": 451,
            "end": 469
          }
        ],
        "start": 445,
        "end": 471
      },
      "expression": false,
      "start": 420,
      "end": 471
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
                "start": 484,
                "end": 490
              },
              "start": 482,
              "end": 490
            },
            "start": 477,
            "end": 490
          },
          "init": null,
          "definite": false,
          "start": 477,
          "end": 490
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
                "start": 502,
                "end": 508
              },
              "start": 500,
              "end": 508
            },
            "start": 492,
            "end": 508
          },
          "init": null,
          "definite": false,
          "start": 492,
          "end": 508
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
                "start": 522,
                "end": 528
              },
              "start": 520,
              "end": 528
            },
            "start": 510,
            "end": 528
          },
          "init": null,
          "definite": false,
          "start": 510,
          "end": 528
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
                "start": 533,
                "end": 539
              },
              "start": 531,
              "end": 539
            },
            "start": 530,
            "end": 539
          },
          "init": null,
          "definite": false,
          "start": 530,
          "end": 539
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
                "start": 549,
                "end": 555
              },
              "start": 547,
              "end": 555
            },
            "start": 541,
            "end": 555
          },
          "init": null,
          "definite": false,
          "start": 541,
          "end": 555
        }
      ],
      "declare": false,
      "start": 473,
      "end": 556
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
                "start": 567,
                "end": 573
              },
              "start": 565,
              "end": 573
            },
            "start": 561,
            "end": 573
          },
          "init": null,
          "definite": false,
          "start": 561,
          "end": 573
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
                "start": 584,
                "end": 590
              },
              "start": 582,
              "end": 590
            },
            "start": 575,
            "end": 590
          },
          "init": null,
          "definite": false,
          "start": 575,
          "end": 590
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
                "start": 603,
                "end": 609
              },
              "start": 601,
              "end": 609
            },
            "start": 592,
            "end": 609
          },
          "init": null,
          "definite": false,
          "start": 592,
          "end": 609
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
                "start": 618,
                "end": 624
              },
              "start": 616,
              "end": 624
            },
            "start": 611,
            "end": 624
          },
          "init": null,
          "definite": false,
          "start": 611,
          "end": 624
        }
      ],
      "declare": false,
      "start": 557,
      "end": 625
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
                    "start": 634,
                    "end": 638
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 640,
                    "end": 645
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 634,
                  "end": 645
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 632,
              "end": 647
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null,
              "start": 650,
              "end": 655
            },
            "start": 632,
            "end": 655
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
              "start": 657,
              "end": 658
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 661,
              "end": 662
            },
            "start": 657,
            "end": 662
          }
        ],
        "start": 632,
        "end": 662
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 664,
          "end": 665
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 668,
          "end": 669
        },
        "start": 664,
        "end": 669
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
          "start": 671,
          "end": 672
        },
        "start": 671,
        "end": 674
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
                  "start": 682,
                  "end": 689
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 690,
                  "end": 693
                },
                "optional": false,
                "computed": false,
                "start": 682,
                "end": 693
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 694,
                  "end": 699
                }
              ],
              "optional": false,
              "start": 682,
              "end": 700
            },
            "directive": null,
            "start": 682,
            "end": 701
          }
        ],
        "start": 676,
        "end": 703
      },
      "start": 627,
      "end": 703
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
                    "start": 711,
                    "end": 715
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 717,
                    "end": 722
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 711,
                  "end": 722
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 709,
              "end": 724
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 727,
                "end": 735
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 727,
              "end": 737
            },
            "start": 709,
            "end": 737
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
              "start": 739,
              "end": 740
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 743,
              "end": 744
            },
            "start": 739,
            "end": 744
          }
        ],
        "start": 709,
        "end": 744
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 746,
          "end": 747
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 750,
          "end": 751
        },
        "start": 746,
        "end": 751
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
          "start": 753,
          "end": 754
        },
        "start": 753,
        "end": 756
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
                  "start": 764,
                  "end": 771
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 772,
                  "end": 775
                },
                "optional": false,
                "computed": false,
                "start": 764,
                "end": 775
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 776,
                  "end": 781
                }
              ],
              "optional": false,
              "start": 764,
              "end": 782
            },
            "directive": null,
            "start": 764,
            "end": 783
          }
        ],
        "start": 758,
        "end": 785
      },
      "start": 704,
      "end": 785
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
                    "start": 793,
                    "end": 797
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 799,
                    "end": 804
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 793,
                  "end": 804
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 791,
              "end": 806
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
                  "start": 810,
                  "end": 815
                },
                "typeArguments": null,
                "start": 810,
                "end": 815
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
                      "start": 818,
                      "end": 822
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 824,
                      "end": 833
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 818,
                    "end": 833
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
                      "start": 835,
                      "end": 840
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 842,
                      "end": 852
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 835,
                    "end": 852
                  }
                ],
                "start": 816,
                "end": 854
              },
              "start": 809,
              "end": 854
            },
            "start": 791,
            "end": 854
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
              "start": 856,
              "end": 857
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 860,
              "end": 861
            },
            "start": 856,
            "end": 861
          }
        ],
        "start": 791,
        "end": 861
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 863,
          "end": 864
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 867,
          "end": 868
        },
        "start": 863,
        "end": 868
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
          "start": 870,
          "end": 871
        },
        "start": 870,
        "end": 873
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
                  "start": 881,
                  "end": 888
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 889,
                  "end": 892
                },
                "optional": false,
                "computed": false,
                "start": 881,
                "end": 892
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 893,
                  "end": 898
                }
              ],
              "optional": false,
              "start": 881,
              "end": 899
            },
            "directive": null,
            "start": 881,
            "end": 900
          }
        ],
        "start": 875,
        "end": 902
      },
      "start": 786,
      "end": 902
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
                    "start": 910,
                    "end": 916
                  },
                  "value": {
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
                          "start": 920,
                          "end": 927
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 929,
                          "end": 937
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 920,
                        "end": 937
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
                          "start": 939,
                          "end": 948
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 950,
                          "end": 960
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 939,
                        "end": 960
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 918,
                    "end": 962
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 910,
                  "end": 962
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 908,
              "end": 964
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null,
              "start": 967,
              "end": 977
            },
            "start": 908,
            "end": 977
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
              "start": 979,
              "end": 980
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 983,
              "end": 984
            },
            "start": 979,
            "end": 984
          }
        ],
        "start": 908,
        "end": 984
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 986,
          "end": 987
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 990,
          "end": 991
        },
        "start": 986,
        "end": 991
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
          "start": 993,
          "end": 994
        },
        "start": 993,
        "end": 996
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
                  "start": 1004,
                  "end": 1011
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1012,
                  "end": 1015
                },
                "optional": false,
                "computed": false,
                "start": 1004,
                "end": 1015
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1016,
                  "end": 1024
                }
              ],
              "optional": false,
              "start": 1004,
              "end": 1025
            },
            "directive": null,
            "start": 1004,
            "end": 1026
          }
        ],
        "start": 998,
        "end": 1028
      },
      "start": 903,
      "end": 1028
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
                    "start": 1036,
                    "end": 1042
                  },
                  "value": {
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
                          "start": 1046,
                          "end": 1053
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1055,
                          "end": 1063
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1046,
                        "end": 1063
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
                          "start": 1065,
                          "end": 1074
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1076,
                          "end": 1086
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1065,
                        "end": 1086
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1044,
                    "end": 1088
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1036,
                  "end": 1088
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1034,
              "end": 1090
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1093,
                "end": 1106
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1093,
              "end": 1108
            },
            "start": 1034,
            "end": 1108
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
              "start": 1110,
              "end": 1111
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1114,
              "end": 1115
            },
            "start": 1110,
            "end": 1115
          }
        ],
        "start": 1034,
        "end": 1115
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1117,
          "end": 1118
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1121,
          "end": 1122
        },
        "start": 1117,
        "end": 1122
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
          "start": 1124,
          "end": 1125
        },
        "start": 1124,
        "end": 1127
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
                  "start": 1135,
                  "end": 1142
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1143,
                  "end": 1146
                },
                "optional": false,
                "computed": false,
                "start": 1135,
                "end": 1146
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1147,
                  "end": 1155
                }
              ],
              "optional": false,
              "start": 1135,
              "end": 1156
            },
            "directive": null,
            "start": 1135,
            "end": 1157
          }
        ],
        "start": 1129,
        "end": 1159
      },
      "start": 1029,
      "end": 1159
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
                    "start": 1167,
                    "end": 1173
                  },
                  "value": {
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
                          "start": 1177,
                          "end": 1184
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1186,
                          "end": 1194
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1177,
                        "end": 1194
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
                          "start": 1196,
                          "end": 1205
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1207,
                          "end": 1217
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1196,
                        "end": 1217
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1175,
                    "end": 1219
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1167,
                  "end": 1219
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1165,
              "end": 1221
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
                  "start": 1229,
                  "end": 1239
                },
                "typeArguments": null,
                "start": 1229,
                "end": 1239
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
                      "start": 1242,
                      "end": 1246
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 1248,
                      "end": 1257
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1242,
                    "end": 1257
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
                      "start": 1259,
                      "end": 1265
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
                            "start": 1269,
                            "end": 1276
                          },
                          "value": {
                            "type": "Literal",
                            "value": "trimming",
                            "raw": "\"trimming\"",
                            "start": 1278,
                            "end": 1288
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1269,
                          "end": 1288
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
                            "start": 1290,
                            "end": 1299
                          },
                          "value": {
                            "type": "Literal",
                            "value": "edging",
                            "raw": "\"edging\"",
                            "start": 1301,
                            "end": 1309
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1290,
                          "end": 1309
                        }
                      ],
                      "start": 1267,
                      "end": 1311
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1259,
                    "end": 1311
                  }
                ],
                "start": 1240,
                "end": 1313
              },
              "start": 1228,
              "end": 1313
            },
            "start": 1165,
            "end": 1313
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
              "start": 1319,
              "end": 1320
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1323,
              "end": 1324
            },
            "start": 1319,
            "end": 1324
          }
        ],
        "start": 1165,
        "end": 1324
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1326,
          "end": 1327
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1330,
          "end": 1331
        },
        "start": 1326,
        "end": 1331
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
          "start": 1333,
          "end": 1334
        },
        "start": 1333,
        "end": 1336
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
                  "start": 1344,
                  "end": 1351
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1352,
                  "end": 1355
                },
                "optional": false,
                "computed": false,
                "start": 1344,
                "end": 1355
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1356,
                  "end": 1364
                }
              ],
              "optional": false,
              "start": 1344,
              "end": 1365
            },
            "directive": null,
            "start": 1344,
            "end": 1366
          }
        ],
        "start": 1338,
        "end": 1368
      },
      "start": 1160,
      "end": 1368
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
                    "start": 1376,
                    "end": 1380
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1376,
                    "end": 1380
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1376,
                  "end": 1380
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1374,
              "end": 1382
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null,
              "start": 1385,
              "end": 1390
            },
            "start": 1374,
            "end": 1390
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
              "start": 1392,
              "end": 1393
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1396,
              "end": 1397
            },
            "start": 1392,
            "end": 1397
          }
        ],
        "start": 1374,
        "end": 1397
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1399,
          "end": 1400
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1403,
          "end": 1404
        },
        "start": 1399,
        "end": 1404
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
          "start": 1406,
          "end": 1407
        },
        "start": 1406,
        "end": 1409
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
                  "start": 1417,
                  "end": 1424
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1425,
                  "end": 1428
                },
                "optional": false,
                "computed": false,
                "start": 1417,
                "end": 1428
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1429,
                  "end": 1434
                }
              ],
              "optional": false,
              "start": 1417,
              "end": 1435
            },
            "directive": null,
            "start": 1417,
            "end": 1436
          }
        ],
        "start": 1411,
        "end": 1438
      },
      "start": 1369,
      "end": 1438
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
                    "start": 1446,
                    "end": 1450
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1446,
                    "end": 1450
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1446,
                  "end": 1450
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1444,
              "end": 1452
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1455,
                "end": 1463
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1455,
              "end": 1465
            },
            "start": 1444,
            "end": 1465
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
              "start": 1467,
              "end": 1468
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1471,
              "end": 1472
            },
            "start": 1467,
            "end": 1472
          }
        ],
        "start": 1444,
        "end": 1472
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1474,
          "end": 1475
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1478,
          "end": 1479
        },
        "start": 1474,
        "end": 1479
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
          "start": 1481,
          "end": 1482
        },
        "start": 1481,
        "end": 1484
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
                  "start": 1492,
                  "end": 1499
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1500,
                  "end": 1503
                },
                "optional": false,
                "computed": false,
                "start": 1492,
                "end": 1503
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1504,
                  "end": 1509
                }
              ],
              "optional": false,
              "start": 1492,
              "end": 1510
            },
            "directive": null,
            "start": 1492,
            "end": 1511
          }
        ],
        "start": 1486,
        "end": 1513
      },
      "start": 1439,
      "end": 1513
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
                    "start": 1521,
                    "end": 1525
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1521,
                    "end": 1525
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 1521,
                  "end": 1525
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1519,
              "end": 1527
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
                  "start": 1531,
                  "end": 1536
                },
                "typeArguments": null,
                "start": 1531,
                "end": 1536
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
                      "start": 1539,
                      "end": 1543
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 1545,
                      "end": 1554
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1539,
                    "end": 1554
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
                      "start": 1556,
                      "end": 1561
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 1563,
                      "end": 1573
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1556,
                    "end": 1573
                  }
                ],
                "start": 1537,
                "end": 1575
              },
              "start": 1530,
              "end": 1575
            },
            "start": 1519,
            "end": 1575
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
              "start": 1577,
              "end": 1578
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1581,
              "end": 1582
            },
            "start": 1577,
            "end": 1582
          }
        ],
        "start": 1519,
        "end": 1582
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1584,
          "end": 1585
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1588,
          "end": 1589
        },
        "start": 1584,
        "end": 1589
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
          "start": 1591,
          "end": 1592
        },
        "start": 1591,
        "end": 1594
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
                  "start": 1602,
                  "end": 1609
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1610,
                  "end": 1613
                },
                "optional": false,
                "computed": false,
                "start": 1602,
                "end": 1613
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1614,
                  "end": 1619
                }
              ],
              "optional": false,
              "start": 1602,
              "end": 1620
            },
            "directive": null,
            "start": 1602,
            "end": 1621
          }
        ],
        "start": 1596,
        "end": 1623
      },
      "start": 1514,
      "end": 1623
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
                    "start": 1631,
                    "end": 1637
                  },
                  "value": {
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
                          "start": 1641,
                          "end": 1648
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1641,
                          "end": 1648
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 1641,
                        "end": 1648
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
                          "start": 1650,
                          "end": 1659
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1650,
                          "end": 1659
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 1650,
                        "end": 1659
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1639,
                    "end": 1661
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1631,
                  "end": 1661
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1629,
              "end": 1663
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null,
              "start": 1666,
              "end": 1676
            },
            "start": 1629,
            "end": 1676
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
              "start": 1678,
              "end": 1679
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1682,
              "end": 1683
            },
            "start": 1678,
            "end": 1683
          }
        ],
        "start": 1629,
        "end": 1683
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1685,
          "end": 1686
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1689,
          "end": 1690
        },
        "start": 1685,
        "end": 1690
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
          "start": 1692,
          "end": 1693
        },
        "start": 1692,
        "end": 1695
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
                  "start": 1703,
                  "end": 1710
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1711,
                  "end": 1714
                },
                "optional": false,
                "computed": false,
                "start": 1703,
                "end": 1714
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1715,
                  "end": 1723
                }
              ],
              "optional": false,
              "start": 1703,
              "end": 1724
            },
            "directive": null,
            "start": 1703,
            "end": 1725
          }
        ],
        "start": 1697,
        "end": 1727
      },
      "start": 1624,
      "end": 1727
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
                    "start": 1735,
                    "end": 1741
                  },
                  "value": {
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
                          "start": 1745,
                          "end": 1752
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1745,
                          "end": 1752
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 1745,
                        "end": 1752
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
                          "start": 1754,
                          "end": 1763
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1754,
                          "end": 1763
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 1754,
                        "end": 1763
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1743,
                    "end": 1765
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1735,
                  "end": 1765
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1733,
              "end": 1767
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 1770,
                "end": 1783
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1770,
              "end": 1785
            },
            "start": 1733,
            "end": 1785
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
              "start": 1787,
              "end": 1788
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1791,
              "end": 1792
            },
            "start": 1787,
            "end": 1792
          }
        ],
        "start": 1733,
        "end": 1792
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1794,
          "end": 1795
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1798,
          "end": 1799
        },
        "start": 1794,
        "end": 1799
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
          "start": 1801,
          "end": 1802
        },
        "start": 1801,
        "end": 1804
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
                  "start": 1812,
                  "end": 1819
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1820,
                  "end": 1823
                },
                "optional": false,
                "computed": false,
                "start": 1812,
                "end": 1823
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1824,
                  "end": 1832
                }
              ],
              "optional": false,
              "start": 1812,
              "end": 1833
            },
            "directive": null,
            "start": 1812,
            "end": 1834
          }
        ],
        "start": 1806,
        "end": 1836
      },
      "start": 1728,
      "end": 1836
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
                    "start": 1844,
                    "end": 1850
                  },
                  "value": {
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
                          "start": 1854,
                          "end": 1861
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1854,
                          "end": 1861
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 1854,
                        "end": 1861
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
                          "start": 1863,
                          "end": 1872
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1863,
                          "end": 1872
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 1863,
                        "end": 1872
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1852,
                    "end": 1874
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1844,
                  "end": 1874
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 1842,
              "end": 1876
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
                  "start": 1884,
                  "end": 1894
                },
                "typeArguments": null,
                "start": 1884,
                "end": 1894
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
                      "start": 1897,
                      "end": 1901
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 1903,
                      "end": 1912
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1897,
                    "end": 1912
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
                      "start": 1914,
                      "end": 1920
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
                            "start": 1924,
                            "end": 1931
                          },
                          "value": {
                            "type": "Literal",
                            "value": "trimming",
                            "raw": "\"trimming\"",
                            "start": 1933,
                            "end": 1943
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1924,
                          "end": 1943
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
                            "start": 1945,
                            "end": 1954
                          },
                          "value": {
                            "type": "Literal",
                            "value": "edging",
                            "raw": "\"edging\"",
                            "start": 1956,
                            "end": 1964
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1945,
                          "end": 1964
                        }
                      ],
                      "start": 1922,
                      "end": 1966
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1914,
                    "end": 1966
                  }
                ],
                "start": 1895,
                "end": 1968
              },
              "start": 1883,
              "end": 1968
            },
            "start": 1842,
            "end": 1968
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
              "start": 1974,
              "end": 1975
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1978,
              "end": 1979
            },
            "start": 1974,
            "end": 1979
          }
        ],
        "start": 1842,
        "end": 1979
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1981,
          "end": 1982
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1985,
          "end": 1986
        },
        "start": 1981,
        "end": 1986
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
          "start": 1988,
          "end": 1989
        },
        "start": 1988,
        "end": 1991
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
                  "start": 1999,
                  "end": 2006
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2007,
                  "end": 2010
                },
                "optional": false,
                "computed": false,
                "start": 1999,
                "end": 2010
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2011,
                  "end": 2019
                }
              ],
              "optional": false,
              "start": 1999,
              "end": 2020
            },
            "directive": null,
            "start": 1999,
            "end": 2021
          }
        ],
        "start": 1993,
        "end": 2023
      },
      "start": 1837,
      "end": 2023
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
                    "start": 2033,
                    "end": 2037
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2039,
                    "end": 2044
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2033,
                  "end": 2044
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
                    "start": 2046,
                    "end": 2051
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2053,
                    "end": 2059
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2046,
                  "end": 2059
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2031,
              "end": 2061
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null,
              "start": 2064,
              "end": 2069
            },
            "start": 2031,
            "end": 2069
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
              "start": 2071,
              "end": 2072
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2075,
              "end": 2076
            },
            "start": 2071,
            "end": 2076
          }
        ],
        "start": 2031,
        "end": 2076
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2078,
          "end": 2079
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2082,
          "end": 2083
        },
        "start": 2078,
        "end": 2083
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
          "start": 2085,
          "end": 2086
        },
        "start": 2085,
        "end": 2088
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
                  "start": 2096,
                  "end": 2103
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2104,
                  "end": 2107
                },
                "optional": false,
                "computed": false,
                "start": 2096,
                "end": 2107
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2108,
                  "end": 2113
                }
              ],
              "optional": false,
              "start": 2096,
              "end": 2114
            },
            "directive": null,
            "start": 2096,
            "end": 2115
          }
        ],
        "start": 2090,
        "end": 2117
      },
      "start": 2026,
      "end": 2117
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
                    "start": 2125,
                    "end": 2129
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2131,
                    "end": 2136
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2125,
                  "end": 2136
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
                    "start": 2138,
                    "end": 2143
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2145,
                    "end": 2151
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2138,
                  "end": 2151
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2123,
              "end": 2153
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2156,
                "end": 2164
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2156,
              "end": 2166
            },
            "start": 2123,
            "end": 2166
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
              "start": 2168,
              "end": 2169
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2172,
              "end": 2173
            },
            "start": 2168,
            "end": 2173
          }
        ],
        "start": 2123,
        "end": 2173
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2175,
          "end": 2176
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2179,
          "end": 2180
        },
        "start": 2175,
        "end": 2180
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
          "start": 2182,
          "end": 2183
        },
        "start": 2182,
        "end": 2185
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
                  "start": 2193,
                  "end": 2200
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2201,
                  "end": 2204
                },
                "optional": false,
                "computed": false,
                "start": 2193,
                "end": 2204
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2205,
                  "end": 2210
                }
              ],
              "optional": false,
              "start": 2193,
              "end": 2211
            },
            "directive": null,
            "start": 2193,
            "end": 2212
          }
        ],
        "start": 2187,
        "end": 2214
      },
      "start": 2118,
      "end": 2214
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
                    "start": 2222,
                    "end": 2226
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2228,
                    "end": 2233
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2222,
                  "end": 2233
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
                    "start": 2235,
                    "end": 2240
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2242,
                    "end": 2248
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2235,
                  "end": 2248
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2220,
              "end": 2250
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
                  "start": 2254,
                  "end": 2259
                },
                "typeArguments": null,
                "start": 2254,
                "end": 2259
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
                      "start": 2262,
                      "end": 2266
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 2268,
                      "end": 2277
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2262,
                    "end": 2277
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
                      "start": 2279,
                      "end": 2284
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 2286,
                      "end": 2296
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2279,
                    "end": 2296
                  }
                ],
                "start": 2260,
                "end": 2298
              },
              "start": 2253,
              "end": 2298
            },
            "start": 2220,
            "end": 2298
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
              "start": 2300,
              "end": 2301
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2304,
              "end": 2305
            },
            "start": 2300,
            "end": 2305
          }
        ],
        "start": 2220,
        "end": 2305
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2307,
          "end": 2308
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2311,
          "end": 2312
        },
        "start": 2307,
        "end": 2312
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
          "start": 2314,
          "end": 2315
        },
        "start": 2314,
        "end": 2317
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
                  "start": 2325,
                  "end": 2332
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2333,
                  "end": 2336
                },
                "optional": false,
                "computed": false,
                "start": 2325,
                "end": 2336
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2337,
                  "end": 2342
                }
              ],
              "optional": false,
              "start": 2325,
              "end": 2343
            },
            "directive": null,
            "start": 2325,
            "end": 2344
          }
        ],
        "start": 2319,
        "end": 2346
      },
      "start": 2215,
      "end": 2346
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
                    "start": 2354,
                    "end": 2358
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2360,
                    "end": 2365
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2354,
                  "end": 2365
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
                    "start": 2367,
                    "end": 2373
                  },
                  "value": {
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
                          "start": 2377,
                          "end": 2384
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2386,
                          "end": 2394
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2377,
                        "end": 2394
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
                          "start": 2396,
                          "end": 2405
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2407,
                          "end": 2417
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2396,
                        "end": 2417
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2375,
                    "end": 2419
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2367,
                  "end": 2419
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2352,
              "end": 2421
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null,
              "start": 2424,
              "end": 2434
            },
            "start": 2352,
            "end": 2434
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
              "start": 2436,
              "end": 2437
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2440,
              "end": 2441
            },
            "start": 2436,
            "end": 2441
          }
        ],
        "start": 2352,
        "end": 2441
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2443,
          "end": 2444
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2447,
          "end": 2448
        },
        "start": 2443,
        "end": 2448
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
          "start": 2450,
          "end": 2451
        },
        "start": 2450,
        "end": 2453
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
                  "start": 2461,
                  "end": 2468
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2469,
                  "end": 2472
                },
                "optional": false,
                "computed": false,
                "start": 2461,
                "end": 2472
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2473,
                  "end": 2481
                }
              ],
              "optional": false,
              "start": 2461,
              "end": 2482
            },
            "directive": null,
            "start": 2461,
            "end": 2483
          }
        ],
        "start": 2455,
        "end": 2485
      },
      "start": 2347,
      "end": 2485
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
                    "start": 2493,
                    "end": 2497
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2499,
                    "end": 2504
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2493,
                  "end": 2504
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
                    "start": 2506,
                    "end": 2512
                  },
                  "value": {
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
                          "start": 2516,
                          "end": 2523
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2525,
                          "end": 2533
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2516,
                        "end": 2533
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
                          "start": 2535,
                          "end": 2544
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2546,
                          "end": 2556
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2535,
                        "end": 2556
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2514,
                    "end": 2558
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2506,
                  "end": 2558
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2491,
              "end": 2560
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2563,
                "end": 2576
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2563,
              "end": 2578
            },
            "start": 2491,
            "end": 2578
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
              "start": 2580,
              "end": 2581
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2584,
              "end": 2585
            },
            "start": 2580,
            "end": 2585
          }
        ],
        "start": 2491,
        "end": 2585
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2587,
          "end": 2588
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2591,
          "end": 2592
        },
        "start": 2587,
        "end": 2592
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
          "start": 2594,
          "end": 2595
        },
        "start": 2594,
        "end": 2597
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
                  "start": 2605,
                  "end": 2612
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2613,
                  "end": 2616
                },
                "optional": false,
                "computed": false,
                "start": 2605,
                "end": 2616
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2617,
                  "end": 2625
                }
              ],
              "optional": false,
              "start": 2605,
              "end": 2626
            },
            "directive": null,
            "start": 2605,
            "end": 2627
          }
        ],
        "start": 2599,
        "end": 2629
      },
      "start": 2486,
      "end": 2629
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
                    "start": 2637,
                    "end": 2641
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2643,
                    "end": 2648
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2637,
                  "end": 2648
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
                    "start": 2650,
                    "end": 2656
                  },
                  "value": {
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
                          "start": 2660,
                          "end": 2667
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2669,
                          "end": 2677
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2660,
                        "end": 2677
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
                          "start": 2679,
                          "end": 2688
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondaryA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2690,
                          "end": 2700
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2679,
                        "end": 2700
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2658,
                    "end": 2702
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2650,
                  "end": 2702
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2635,
              "end": 2704
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
                  "start": 2712,
                  "end": 2722
                },
                "typeArguments": null,
                "start": 2712,
                "end": 2722
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
                      "start": 2725,
                      "end": 2729
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 2731,
                      "end": 2740
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2725,
                    "end": 2740
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
                      "start": 2742,
                      "end": 2748
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
                            "start": 2752,
                            "end": 2759
                          },
                          "value": {
                            "type": "Literal",
                            "value": "trimming",
                            "raw": "\"trimming\"",
                            "start": 2761,
                            "end": 2771
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2752,
                          "end": 2771
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
                            "start": 2773,
                            "end": 2782
                          },
                          "value": {
                            "type": "Literal",
                            "value": "edging",
                            "raw": "\"edging\"",
                            "start": 2784,
                            "end": 2792
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2773,
                          "end": 2792
                        }
                      ],
                      "start": 2750,
                      "end": 2794
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2742,
                    "end": 2794
                  }
                ],
                "start": 2723,
                "end": 2796
              },
              "start": 2711,
              "end": 2796
            },
            "start": 2635,
            "end": 2796
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
              "start": 2802,
              "end": 2803
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2806,
              "end": 2807
            },
            "start": 2802,
            "end": 2807
          }
        ],
        "start": 2635,
        "end": 2807
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2809,
          "end": 2810
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2813,
          "end": 2814
        },
        "start": 2809,
        "end": 2814
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
          "start": 2816,
          "end": 2817
        },
        "start": 2816,
        "end": 2819
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
                  "start": 2827,
                  "end": 2834
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2835,
                  "end": 2838
                },
                "optional": false,
                "computed": false,
                "start": 2827,
                "end": 2838
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2839,
                  "end": 2847
                }
              ],
              "optional": false,
              "start": 2827,
              "end": 2848
            },
            "directive": null,
            "start": 2827,
            "end": 2849
          }
        ],
        "start": 2821,
        "end": 2851
      },
      "start": 2630,
      "end": 2851
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
                    "start": 2859,
                    "end": 2863
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2859,
                    "end": 2863
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 2859,
                  "end": 2863
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
                    "start": 2865,
                    "end": 2870
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2865,
                    "end": 2870
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 2865,
                  "end": 2870
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2857,
              "end": 2872
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robot",
              "optional": false,
              "typeAnnotation": null,
              "start": 2875,
              "end": 2880
            },
            "start": 2857,
            "end": 2880
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
              "start": 2882,
              "end": 2883
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2886,
              "end": 2887
            },
            "start": 2882,
            "end": 2887
          }
        ],
        "start": 2857,
        "end": 2887
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 2889,
          "end": 2890
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2893,
          "end": 2894
        },
        "start": 2889,
        "end": 2894
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
          "start": 2896,
          "end": 2897
        },
        "start": 2896,
        "end": 2899
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
                  "start": 2907,
                  "end": 2914
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2915,
                  "end": 2918
                },
                "optional": false,
                "computed": false,
                "start": 2907,
                "end": 2918
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2919,
                  "end": 2924
                }
              ],
              "optional": false,
              "start": 2907,
              "end": 2925
            },
            "directive": null,
            "start": 2907,
            "end": 2926
          }
        ],
        "start": 2901,
        "end": 2928
      },
      "start": 2852,
      "end": 2928
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
                    "start": 2936,
                    "end": 2940
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2936,
                    "end": 2940
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 2936,
                  "end": 2940
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
                    "start": 2942,
                    "end": 2947
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2942,
                    "end": 2947
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 2942,
                  "end": 2947
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 2934,
              "end": 2949
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 2952,
                "end": 2960
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2952,
              "end": 2962
            },
            "start": 2934,
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
        "start": 2934,
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
      "start": 2929,
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
                    "start": 3018,
                    "end": 3022
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3018,
                    "end": 3022
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3018,
                  "end": 3022
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
                    "start": 3024,
                    "end": 3029
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skill",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3024,
                    "end": 3029
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3024,
                  "end": 3029
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3016,
              "end": 3031
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
                  "start": 3035,
                  "end": 3040
                },
                "typeArguments": null,
                "start": 3035,
                "end": 3040
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
                      "start": 3043,
                      "end": 3047
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 3049,
                      "end": 3058
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3043,
                    "end": 3058
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
                      "start": 3060,
                      "end": 3065
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimming",
                      "raw": "\"trimming\"",
                      "start": 3067,
                      "end": 3077
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3060,
                    "end": 3077
                  }
                ],
                "start": 3041,
                "end": 3079
              },
              "start": 3034,
              "end": 3079
            },
            "start": 3016,
            "end": 3079
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
              "start": 3081,
              "end": 3082
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3085,
              "end": 3086
            },
            "start": 3081,
            "end": 3086
          }
        ],
        "start": 3016,
        "end": 3086
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3088,
          "end": 3089
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3092,
          "end": 3093
        },
        "start": 3088,
        "end": 3093
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
          "start": 3095,
          "end": 3096
        },
        "start": 3095,
        "end": 3098
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
                  "start": 3106,
                  "end": 3113
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3114,
                  "end": 3117
                },
                "optional": false,
                "computed": false,
                "start": 3106,
                "end": 3117
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3118,
                  "end": 3123
                }
              ],
              "optional": false,
              "start": 3106,
              "end": 3124
            },
            "directive": null,
            "start": 3106,
            "end": 3125
          }
        ],
        "start": 3100,
        "end": 3127
      },
      "start": 3011,
      "end": 3127
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
                    "start": 3135,
                    "end": 3139
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3135,
                    "end": 3139
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3135,
                  "end": 3139
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
                    "start": 3141,
                    "end": 3147
                  },
                  "value": {
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
                          "start": 3151,
                          "end": 3158
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3151,
                          "end": 3158
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 3151,
                        "end": 3158
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
                          "start": 3160,
                          "end": 3169
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3160,
                          "end": 3169
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 3160,
                        "end": 3169
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3149,
                    "end": 3171
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3141,
                  "end": 3171
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3133,
              "end": 3173
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobot",
              "optional": false,
              "typeAnnotation": null,
              "start": 3176,
              "end": 3186
            },
            "start": 3133,
            "end": 3186
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
              "start": 3188,
              "end": 3189
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3192,
              "end": 3193
            },
            "start": 3188,
            "end": 3193
          }
        ],
        "start": 3133,
        "end": 3193
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3195,
          "end": 3196
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3199,
          "end": 3200
        },
        "start": 3195,
        "end": 3200
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
          "start": 3202,
          "end": 3203
        },
        "start": 3202,
        "end": 3205
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
                  "start": 3213,
                  "end": 3220
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3221,
                  "end": 3224
                },
                "optional": false,
                "computed": false,
                "start": 3213,
                "end": 3224
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3225,
                  "end": 3233
                }
              ],
              "optional": false,
              "start": 3213,
              "end": 3234
            },
            "directive": null,
            "start": 3213,
            "end": 3235
          }
        ],
        "start": 3207,
        "end": 3237
      },
      "start": 3128,
      "end": 3237
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
                    "start": 3245,
                    "end": 3249
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3245,
                    "end": 3249
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3245,
                  "end": 3249
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
                    "start": 3251,
                    "end": 3257
                  },
                  "value": {
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
                          "start": 3261,
                          "end": 3268
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3261,
                          "end": 3268
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 3261,
                        "end": 3268
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
                          "start": 3270,
                          "end": 3279
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3270,
                          "end": 3279
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 3270,
                        "end": 3279
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3259,
                    "end": 3281
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3251,
                  "end": 3281
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3243,
              "end": 3283
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "typeAnnotation": null,
                "start": 3286,
                "end": 3299
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3286,
              "end": 3301
            },
            "start": 3243,
            "end": 3301
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
              "start": 3303,
              "end": 3304
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3307,
              "end": 3308
            },
            "start": 3303,
            "end": 3308
          }
        ],
        "start": 3243,
        "end": 3308
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3310,
          "end": 3311
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3314,
          "end": 3315
        },
        "start": 3310,
        "end": 3315
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
          "start": 3317,
          "end": 3318
        },
        "start": 3317,
        "end": 3320
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
                  "start": 3328,
                  "end": 3335
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3336,
                  "end": 3339
                },
                "optional": false,
                "computed": false,
                "start": 3328,
                "end": 3339
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3340,
                  "end": 3348
                }
              ],
              "optional": false,
              "start": 3328,
              "end": 3349
            },
            "directive": null,
            "start": 3328,
            "end": 3350
          }
        ],
        "start": 3322,
        "end": 3352
      },
      "start": 3238,
      "end": 3352
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
                    "start": 3360,
                    "end": 3364
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3360,
                    "end": 3364
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 3360,
                  "end": 3364
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
                    "start": 3366,
                    "end": 3372
                  },
                  "value": {
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
                          "start": 3376,
                          "end": 3383
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3376,
                          "end": 3383
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 3376,
                        "end": 3383
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
                          "start": 3385,
                          "end": 3394
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3385,
                          "end": 3394
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 3385,
                        "end": 3394
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3374,
                    "end": 3396
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3366,
                  "end": 3396
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 3358,
              "end": 3398
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
                  "start": 3406,
                  "end": 3416
                },
                "typeArguments": null,
                "start": 3406,
                "end": 3416
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
                      "start": 3419,
                      "end": 3423
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trimmer",
                      "raw": "\"trimmer\"",
                      "start": 3425,
                      "end": 3434
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3419,
                    "end": 3434
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
                      "start": 3436,
                      "end": 3442
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
                            "start": 3446,
                            "end": 3453
                          },
                          "value": {
                            "type": "Literal",
                            "value": "trimming",
                            "raw": "\"trimming\"",
                            "start": 3455,
                            "end": 3465
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3446,
                          "end": 3465
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
                            "start": 3467,
                            "end": 3476
                          },
                          "value": {
                            "type": "Literal",
                            "value": "edging",
                            "raw": "\"edging\"",
                            "start": 3478,
                            "end": 3486
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3467,
                          "end": 3486
                        }
                      ],
                      "start": 3444,
                      "end": 3488
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3436,
                    "end": 3488
                  }
                ],
                "start": 3417,
                "end": 3490
              },
              "start": 3405,
              "end": 3490
            },
            "start": 3358,
            "end": 3490
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
              "start": 3496,
              "end": 3497
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3500,
              "end": 3501
            },
            "start": 3496,
            "end": 3501
          }
        ],
        "start": 3358,
        "end": 3501
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 3503,
          "end": 3504
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3507,
          "end": 3508
        },
        "start": 3503,
        "end": 3508
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
          "start": 3510,
          "end": 3511
        },
        "start": 3510,
        "end": 3513
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
                  "start": 3521,
                  "end": 3528
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3529,
                  "end": 3532
                },
                "optional": false,
                "computed": false,
                "start": 3521,
                "end": 3532
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primaryA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3533,
                  "end": 3541
                }
              ],
              "optional": false,
              "start": 3521,
              "end": 3542
            },
            "directive": null,
            "start": 3521,
            "end": 3543
          }
        ],
        "start": 3515,
        "end": 3545
      },
      "start": 3353,
      "end": 3545
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3545
}
```
