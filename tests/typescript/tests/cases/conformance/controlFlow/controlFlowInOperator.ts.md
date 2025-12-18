__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 10,
            "end": 13
          },
          "definite": false,
          "start": 6,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 22
          },
          "init": {
            "type": "Literal",
            "value": "b",
            "raw": "'b'",
            "start": 25,
            "end": 28
          },
          "definite": false,
          "start": 21,
          "end": 28
        }
      ],
      "declare": false,
      "start": 15,
      "end": 29
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 37
          },
          "init": {
            "type": "Literal",
            "value": "d",
            "raw": "'d'",
            "start": 40,
            "end": 43
          },
          "definite": false,
          "start": 36,
          "end": 43
        }
      ],
      "declare": false,
      "start": 30,
      "end": 44
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 52
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 59
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 62,
                "end": 68
              },
              "start": 60,
              "end": 68
            },
            "accessibility": null,
            "static": false,
            "start": 57,
            "end": 69
          }
        ],
        "start": 55,
        "end": 71
      },
      "declare": false,
      "start": 46,
      "end": 72
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 79
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 86
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 89,
                "end": 95
              },
              "start": 87,
              "end": 95
            },
            "accessibility": null,
            "static": false,
            "start": 84,
            "end": 96
          }
        ],
        "start": 82,
        "end": 98
      },
      "declare": false,
      "start": 73,
      "end": 99
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 118,
                      "end": 119
                    },
                    "typeArguments": null,
                    "start": 118,
                    "end": 119
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 122,
                      "end": 123
                    },
                    "typeArguments": null,
                    "start": 122,
                    "end": 123
                  }
                ],
                "start": 118,
                "end": 123
              },
              "start": 116,
              "end": 123
            },
            "start": 115,
            "end": 123
          },
          "init": null,
          "definite": false,
          "start": 115,
          "end": 123
        }
      ],
      "declare": true,
      "start": 101,
      "end": 124
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": "a",
          "raw": "'a'",
          "start": 130,
          "end": 133
        },
        "operator": "in",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 138
        },
        "start": 130,
        "end": 138
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
              "start": 146,
              "end": 147
            },
            "directive": null,
            "start": 146,
            "end": 148
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 164
              },
              "property": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 165,
                "end": 168
              },
              "optional": false,
              "computed": true,
              "start": 163,
              "end": 169
            },
            "directive": null,
            "start": 163,
            "end": 170
          }
        ],
        "start": 140,
        "end": 183
      },
      "alternate": null,
      "start": 126,
      "end": 183
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": "d",
          "raw": "'d'",
          "start": 189,
          "end": 192
        },
        "operator": "in",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 196,
          "end": 197
        },
        "start": 189,
        "end": 197
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
              "start": 205,
              "end": 206
            },
            "directive": null,
            "start": 205,
            "end": 207
          }
        ],
        "start": 199,
        "end": 218
      },
      "alternate": null,
      "start": 185,
      "end": 218
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 224,
          "end": 225
        },
        "operator": "in",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 229,
          "end": 230
        },
        "start": 224,
        "end": 230
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
              "start": 238,
              "end": 239
            },
            "directive": null,
            "start": 238,
            "end": 240
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 253,
                "end": 254
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 256
              },
              "optional": false,
              "computed": true,
              "start": 253,
              "end": 257
            },
            "directive": null,
            "start": 253,
            "end": 258
          }
        ],
        "start": 232,
        "end": 271
      },
      "alternate": null,
      "start": 220,
      "end": 271
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 277,
          "end": 278
        },
        "operator": "in",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 282,
          "end": 283
        },
        "start": 277,
        "end": 283
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
              "start": 291,
              "end": 292
            },
            "directive": null,
            "start": 291,
            "end": 293
          }
        ],
        "start": 285,
        "end": 304
      },
      "alternate": null,
      "start": 273,
      "end": 304
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "uniqueID_54790",
        "optional": false,
        "typeAnnotation": null,
        "start": 383,
        "end": 397
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 405,
                  "end": 411
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 414,
                  "end": 423
                }
              ],
              "start": 405,
              "end": 423
            },
            "start": 403,
            "end": 423
          },
          "start": 401,
          "end": 423
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "seenIDs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 444,
                          "end": 450
                        },
                        "start": 442,
                        "end": 450
                      },
                      "start": 439,
                      "end": 450
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 453,
                      "end": 459
                    },
                    "start": 451,
                    "end": 459
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 438,
                  "end": 459
                }
              ],
              "start": 436,
              "end": 461
            },
            "start": 434,
            "end": 461
          },
          "start": 427,
          "end": 461
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 465,
          "end": 471
        },
        "start": 463,
        "end": 471
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 480,
                "end": 482
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 487,
                "end": 496
              },
              "start": 480,
              "end": 496
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 504,
                      "end": 506
                    },
                    "right": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 509,
                      "end": 512
                    },
                    "start": 504,
                    "end": 512
                  },
                  "directive": null,
                  "start": 504,
                  "end": 513
                }
              ],
              "start": 498,
              "end": 517
            },
            "alternate": null,
            "start": 476,
            "end": 517
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 526,
                  "end": 528
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "seenIDs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 532,
                  "end": 539
                },
                "start": 526,
                "end": 539
              },
              "prefix": true,
              "start": 524,
              "end": 540
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 555,
                    "end": 557
                  },
                  "start": 548,
                  "end": 558
                }
              ],
              "start": 542,
              "end": 562
            },
            "alternate": null,
            "start": 520,
            "end": 562
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 574,
                    "end": 575
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 578,
                    "end": 579
                  },
                  "definite": false,
                  "start": 574,
                  "end": 579
                }
              ],
              "declare": false,
              "start": 570,
              "end": 579
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 581,
                "end": 582
              },
              "operator": "<",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 585,
                  "end": 591
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MAX_VALUE",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 592,
                  "end": 601
                },
                "optional": false,
                "computed": false,
                "start": 585,
                "end": 601
              },
              "start": 581,
              "end": 601
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
                "start": 603,
                "end": 604
              },
              "start": 603,
              "end": 606
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "newID",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 620,
                        "end": 625
                      },
                      "init": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": false,
                            "start": 628,
                            "end": 631
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "-",
                              "cooked": "-"
                            },
                            "tail": false,
                            "start": 633,
                            "end": 637
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 638,
                            "end": 640
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 631,
                            "end": 633
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 637,
                            "end": 638
                          }
                        ],
                        "start": 628,
                        "end": 640
                      },
                      "definite": false,
                      "start": 620,
                      "end": 640
                    }
                  ],
                  "declare": false,
                  "start": 614,
                  "end": 641
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "newID",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 652,
                        "end": 657
                      },
                      "operator": "in",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "seenIDs",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 661,
                        "end": 668
                      },
                      "start": 652,
                      "end": 668
                    },
                    "prefix": true,
                    "start": 650,
                    "end": 669
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "newID",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 686,
                          "end": 691
                        },
                        "start": 679,
                        "end": 692
                      }
                    ],
                    "start": 671,
                    "end": 698
                  },
                  "alternate": null,
                  "start": 646,
                  "end": 698
                }
              ],
              "start": 608,
              "end": 702
            },
            "start": 565,
            "end": 702
          },
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 711,
                "end": 716
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "heat death of the universe",
                  "raw": "\"heat death of the universe\"",
                  "start": 717,
                  "end": 745
                }
              ],
              "optional": false,
              "start": 711,
              "end": 746
            },
            "start": 705,
            "end": 747
          }
        ],
        "start": 472,
        "end": 749
      },
      "expression": false,
      "start": 374,
      "end": 749
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "uniqueID_54790_2",
        "optional": false,
        "typeAnnotation": null,
        "start": 760,
        "end": 776
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 781,
                  "end": 787
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 790,
                  "end": 796
                }
              ],
              "start": 781,
              "end": 796
            },
            "start": 779,
            "end": 796
          },
          "start": 777,
          "end": 796
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "seenIDs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 807,
              "end": 813
            },
            "start": 805,
            "end": 813
          },
          "start": 798,
          "end": 813
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 819,
                "end": 821
              },
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 824,
                "end": 827
              },
              "start": 819,
              "end": 827
            },
            "directive": null,
            "start": 819,
            "end": 828
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 840,
                    "end": 841
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 844,
                    "end": 845
                  },
                  "definite": false,
                  "start": 840,
                  "end": 845
                }
              ],
              "declare": false,
              "start": 836,
              "end": 845
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 847,
                "end": 848
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 851,
                "end": 852
              },
              "start": 847,
              "end": 852
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
                "start": 854,
                "end": 855
              },
              "start": 854,
              "end": 857
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "newID",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 871,
                        "end": 876
                      },
                      "init": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": false,
                            "start": 879,
                            "end": 882
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 884,
                            "end": 886
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 882,
                            "end": 884
                          }
                        ],
                        "start": 879,
                        "end": 886
                      },
                      "definite": false,
                      "start": 871,
                      "end": 886
                    }
                  ],
                  "declare": false,
                  "start": 865,
                  "end": 887
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "newID",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 896,
                      "end": 901
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "seenIDs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 905,
                      "end": 912
                    },
                    "start": 896,
                    "end": 912
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 914,
                    "end": 921
                  },
                  "alternate": null,
                  "start": 892,
                  "end": 921
                }
              ],
              "start": 859,
              "end": 925
            },
            "start": 831,
            "end": 925
          }
        ],
        "start": 815,
        "end": 927
      },
      "expression": false,
      "start": 751,
      "end": 927
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "uniqueID_54790_3",
        "optional": false,
        "typeAnnotation": null,
        "start": 938,
        "end": 954
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 959,
                  "end": 965
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 968,
                  "end": 974
                }
              ],
              "start": 959,
              "end": 974
            },
            "start": 957,
            "end": 974
          },
          "start": 955,
          "end": 974
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "seenIDs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 985,
              "end": 991
            },
            "start": 983,
            "end": 991
          },
          "start": 976,
          "end": 991
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 997,
                "end": 999
              },
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 1002,
                "end": 1005
              },
              "start": 997,
              "end": 1005
            },
            "directive": null,
            "start": 997,
            "end": 1006
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1018,
                    "end": 1019
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1022,
                    "end": 1023
                  },
                  "definite": false,
                  "start": 1018,
                  "end": 1023
                }
              ],
              "declare": false,
              "start": 1014,
              "end": 1023
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1025,
                "end": 1026
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1029,
                "end": 1030
              },
              "start": 1025,
              "end": 1030
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
                "start": 1032,
                "end": 1033
              },
              "start": 1032,
              "end": 1035
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "newID",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1049,
                        "end": 1054
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1057,
                        "end": 1059
                      },
                      "definite": false,
                      "start": 1049,
                      "end": 1059
                    }
                  ],
                  "declare": false,
                  "start": 1043,
                  "end": 1060
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "newID",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1069,
                      "end": 1074
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "seenIDs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1078,
                      "end": 1085
                    },
                    "start": 1069,
                    "end": 1085
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1087,
                    "end": 1094
                  },
                  "alternate": null,
                  "start": 1065,
                  "end": 1094
                }
              ],
              "start": 1037,
              "end": 1098
            },
            "start": 1009,
            "end": 1098
          }
        ],
        "start": 993,
        "end": 1100
      },
      "expression": false,
      "start": 929,
      "end": 1100
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1100
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 10,
    "end": 13,
    "range": [
      10,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 15,
    "end": 20,
    "range": [
      15,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 25,
    "end": 28,
    "range": [
      25,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 30,
    "end": 35,
    "range": [
      30,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "String",
    "value": "'d'",
    "start": 40,
    "end": 43,
    "range": [
      40,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 46,
    "end": 50,
    "range": [
      46,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 62,
    "end": 68,
    "range": [
      62,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 73,
    "end": 77,
    "range": [
      73,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 89,
    "end": 95,
    "range": [
      89,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 101,
    "end": 108,
    "range": [
      101,
      108
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 109,
    "end": 114,
    "range": [
      109,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 126,
    "end": 128,
    "range": [
      126,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 130,
    "end": 133,
    "range": [
      130,
      133
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 134,
    "end": 136,
    "range": [
      134,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 146,
    "end": 147,
    "range": [
      146,
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
    "value": "c",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 165,
    "end": 168,
    "range": [
      165,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 185,
    "end": 187,
    "range": [
      185,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "String",
    "value": "'d'",
    "start": 189,
    "end": 192,
    "range": [
      189,
      192
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 193,
    "end": 195,
    "range": [
      193,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 220,
    "end": 222,
    "range": [
      220,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 226,
    "end": 228,
    "range": [
      226,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 273,
    "end": 275,
    "range": [
      273,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 279,
    "end": 281,
    "range": [
      279,
      281
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 374,
    "end": 382,
    "range": [
      374,
      382
    ]
  },
  {
    "type": "Identifier",
    "value": "uniqueID_54790",
    "start": 383,
    "end": 397,
    "range": [
      383,
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
    "type": "Identifier",
    "value": "id",
    "start": 401,
    "end": 403,
    "range": [
      401,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 405,
    "end": 411,
    "range": [
      405,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 414,
    "end": 423,
    "range": [
      414,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Identifier",
    "value": "seenIDs",
    "start": 427,
    "end": 434,
    "range": [
      427,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 439,
    "end": 442,
    "range": [
      439,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 444,
    "end": 450,
    "range": [
      444,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 453,
    "end": 459,
    "range": [
      453,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 465,
    "end": 471,
    "range": [
      465,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 476,
    "end": 478,
    "range": [
      476,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 480,
    "end": 482,
    "range": [
      480,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 483,
    "end": 486,
    "range": [
      483,
      486
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 487,
    "end": 496,
    "range": [
      487,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 504,
    "end": 506,
    "range": [
      504,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 509,
    "end": 512,
    "range": [
      509,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 520,
    "end": 522,
    "range": [
      520,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 526,
    "end": 528,
    "range": [
      526,
      528
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 529,
    "end": 531,
    "range": [
      529,
      531
    ]
  },
  {
    "type": "Identifier",
    "value": "seenIDs",
    "start": 532,
    "end": 539,
    "range": [
      532,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 548,
    "end": 554,
    "range": [
      548,
      554
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 555,
    "end": 557,
    "range": [
      555,
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
    "type": "Punctuator",
    "value": "}",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 565,
    "end": 568,
    "range": [
      565,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 570,
    "end": 573,
    "range": [
      570,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 585,
    "end": 591,
    "range": [
      585,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Identifier",
    "value": "MAX_VALUE",
    "start": 592,
    "end": 601,
    "range": [
      592,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 604,
    "end": 606,
    "range": [
      604,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 614,
    "end": 619,
    "range": [
      614,
      619
    ]
  },
  {
    "type": "Identifier",
    "value": "newID",
    "start": 620,
    "end": 625,
    "range": [
      620,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 628,
    "end": 631,
    "range": [
      628,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 631,
    "end": 633,
    "range": [
      631,
      633
    ]
  },
  {
    "type": "Template",
    "value": "}-${",
    "start": 633,
    "end": 637,
    "range": [
      633,
      637
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 638,
    "end": 640,
    "range": [
      638,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 646,
    "end": 648,
    "range": [
      646,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Identifier",
    "value": "newID",
    "start": 652,
    "end": 657,
    "range": [
      652,
      657
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 658,
    "end": 660,
    "range": [
      658,
      660
    ]
  },
  {
    "type": "Identifier",
    "value": "seenIDs",
    "start": 661,
    "end": 668,
    "range": [
      661,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 679,
    "end": 685,
    "range": [
      679,
      685
    ]
  },
  {
    "type": "Identifier",
    "value": "newID",
    "start": 686,
    "end": 691,
    "range": [
      686,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 705,
    "end": 710,
    "range": [
      705,
      710
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 711,
    "end": 716,
    "range": [
      711,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "String",
    "value": "\"heat death of the universe\"",
    "start": 717,
    "end": 745,
    "range": [
      717,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 751,
    "end": 759,
    "range": [
      751,
      759
    ]
  },
  {
    "type": "Identifier",
    "value": "uniqueID_54790_2",
    "start": 760,
    "end": 776,
    "range": [
      760,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 777,
    "end": 779,
    "range": [
      777,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 781,
    "end": 787,
    "range": [
      781,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 790,
    "end": 796,
    "range": [
      790,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Identifier",
    "value": "seenIDs",
    "start": 798,
    "end": 805,
    "range": [
      798,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 807,
    "end": 813,
    "range": [
      807,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 819,
    "end": 821,
    "range": [
      819,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 824,
    "end": 827,
    "range": [
      824,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 831,
    "end": 834,
    "range": [
      831,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 836,
    "end": 839,
    "range": [
      836,
      839
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 842,
    "end": 843,
    "range": [
      842,
      843
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 854,
    "end": 855,
    "range": [
      854,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 855,
    "end": 857,
    "range": [
      855,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 865,
    "end": 870,
    "range": [
      865,
      870
    ]
  },
  {
    "type": "Identifier",
    "value": "newID",
    "start": 871,
    "end": 876,
    "range": [
      871,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 879,
    "end": 882,
    "range": [
      879,
      882
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 882,
    "end": 884,
    "range": [
      882,
      884
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 884,
    "end": 886,
    "range": [
      884,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 892,
    "end": 894,
    "range": [
      892,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Identifier",
    "value": "newID",
    "start": 896,
    "end": 901,
    "range": [
      896,
      901
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 902,
    "end": 904,
    "range": [
      902,
      904
    ]
  },
  {
    "type": "Identifier",
    "value": "seenIDs",
    "start": 905,
    "end": 912,
    "range": [
      905,
      912
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 912,
    "end": 913,
    "range": [
      912,
      913
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 914,
    "end": 915,
    "range": [
      914,
      915
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 929,
    "end": 937,
    "range": [
      929,
      937
    ]
  },
  {
    "type": "Identifier",
    "value": "uniqueID_54790_3",
    "start": 938,
    "end": 954,
    "range": [
      938,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 955,
    "end": 957,
    "range": [
      955,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 959,
    "end": 965,
    "range": [
      959,
      965
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 968,
    "end": 974,
    "range": [
      968,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Identifier",
    "value": "seenIDs",
    "start": 976,
    "end": 983,
    "range": [
      976,
      983
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 983,
    "end": 984,
    "range": [
      983,
      984
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 985,
    "end": 991,
    "range": [
      985,
      991
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 991,
    "end": 992,
    "range": [
      991,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 997,
    "end": 999,
    "range": [
      997,
      999
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1000,
    "end": 1001,
    "range": [
      1000,
      1001
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1002,
    "end": 1005,
    "range": [
      1002,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1009,
    "end": 1012,
    "range": [
      1009,
      1012
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1014,
    "end": 1017,
    "range": [
      1014,
      1017
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1018,
    "end": 1019,
    "range": [
      1018,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1020,
    "end": 1021,
    "range": [
      1020,
      1021
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1023,
    "end": 1024,
    "range": [
      1023,
      1024
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1025,
    "end": 1026,
    "range": [
      1025,
      1026
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1033,
    "end": 1035,
    "range": [
      1033,
      1035
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1037,
    "end": 1038,
    "range": [
      1037,
      1038
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1043,
    "end": 1048,
    "range": [
      1043,
      1048
    ]
  },
  {
    "type": "Identifier",
    "value": "newID",
    "start": 1049,
    "end": 1054,
    "range": [
      1049,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1057,
    "end": 1059,
    "range": [
      1057,
      1059
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1065,
    "end": 1067,
    "range": [
      1065,
      1067
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Identifier",
    "value": "newID",
    "start": 1069,
    "end": 1074,
    "range": [
      1069,
      1074
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1075,
    "end": 1077,
    "range": [
      1075,
      1077
    ]
  },
  {
    "type": "Identifier",
    "value": "seenIDs",
    "start": 1078,
    "end": 1085,
    "range": [
      1078,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1087,
    "end": 1088,
    "range": [
      1087,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  }
]
```
