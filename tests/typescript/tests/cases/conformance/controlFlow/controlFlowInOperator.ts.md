__ESTREE_TEST__:PASS:
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
