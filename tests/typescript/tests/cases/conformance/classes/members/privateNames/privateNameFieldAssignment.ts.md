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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "type": "PrivateIdentifier",
              "name": "field",
              "start": 14,
              "end": 20
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 23,
              "end": 24
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 25
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 41
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 54,
                          "end": 58
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 59,
                          "end": 65
                        },
                        "optional": false,
                        "computed": false,
                        "start": 54,
                        "end": 65
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 68,
                        "end": 69
                      },
                      "start": 54,
                      "end": 69
                    },
                    "directive": null,
                    "start": 54,
                    "end": 70
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 79,
                          "end": 83
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 84,
                          "end": 90
                        },
                        "optional": false,
                        "computed": false,
                        "start": 79,
                        "end": 90
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 94,
                        "end": 95
                      },
                      "start": 79,
                      "end": 95
                    },
                    "directive": null,
                    "start": 79,
                    "end": 96
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 105,
                          "end": 109
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 110,
                          "end": 116
                        },
                        "optional": false,
                        "computed": false,
                        "start": 105,
                        "end": 116
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 120,
                        "end": 121
                      },
                      "start": 105,
                      "end": 121
                    },
                    "directive": null,
                    "start": 105,
                    "end": 122
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "/=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 131,
                          "end": 135
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 136,
                          "end": 142
                        },
                        "optional": false,
                        "computed": false,
                        "start": 131,
                        "end": 142
                      },
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 146,
                        "end": 147
                      },
                      "start": 131,
                      "end": 147
                    },
                    "directive": null,
                    "start": 131,
                    "end": 148
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "*=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 157,
                          "end": 161
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 162,
                          "end": 168
                        },
                        "optional": false,
                        "computed": false,
                        "start": 157,
                        "end": 168
                      },
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 172,
                        "end": 173
                      },
                      "start": 157,
                      "end": 173
                    },
                    "directive": null,
                    "start": 157,
                    "end": 174
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "**=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 183,
                          "end": 187
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 188,
                          "end": 194
                        },
                        "optional": false,
                        "computed": false,
                        "start": 183,
                        "end": 194
                      },
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 199,
                        "end": 200
                      },
                      "start": 183,
                      "end": 200
                    },
                    "directive": null,
                    "start": 183,
                    "end": 201
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "%=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 210,
                          "end": 214
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 215,
                          "end": 221
                        },
                        "optional": false,
                        "computed": false,
                        "start": 210,
                        "end": 221
                      },
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 225,
                        "end": 226
                      },
                      "start": 210,
                      "end": 226
                    },
                    "directive": null,
                    "start": 210,
                    "end": 227
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "<<=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 236,
                          "end": 240
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 241,
                          "end": 247
                        },
                        "optional": false,
                        "computed": false,
                        "start": 236,
                        "end": 247
                      },
                      "right": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 252,
                        "end": 253
                      },
                      "start": 236,
                      "end": 253
                    },
                    "directive": null,
                    "start": 236,
                    "end": 254
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": ">>=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 263,
                          "end": 267
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 268,
                          "end": 274
                        },
                        "optional": false,
                        "computed": false,
                        "start": 263,
                        "end": 274
                      },
                      "right": {
                        "type": "Literal",
                        "value": 9,
                        "raw": "9",
                        "start": 279,
                        "end": 280
                      },
                      "start": 263,
                      "end": 280
                    },
                    "directive": null,
                    "start": 263,
                    "end": 281
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": ">>>=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 290,
                          "end": 294
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 295,
                          "end": 301
                        },
                        "optional": false,
                        "computed": false,
                        "start": 290,
                        "end": 301
                      },
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 307,
                        "end": 309
                      },
                      "start": 290,
                      "end": 309
                    },
                    "directive": null,
                    "start": 290,
                    "end": 310
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "&=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 319,
                          "end": 323
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 324,
                          "end": 330
                        },
                        "optional": false,
                        "computed": false,
                        "start": 319,
                        "end": 330
                      },
                      "right": {
                        "type": "Literal",
                        "value": 11,
                        "raw": "11",
                        "start": 334,
                        "end": 336
                      },
                      "start": 319,
                      "end": 336
                    },
                    "directive": null,
                    "start": 319,
                    "end": 337
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "|=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 346,
                          "end": 350
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 351,
                          "end": 357
                        },
                        "optional": false,
                        "computed": false,
                        "start": 346,
                        "end": 357
                      },
                      "right": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 361,
                        "end": 363
                      },
                      "start": 346,
                      "end": 363
                    },
                    "directive": null,
                    "start": 346,
                    "end": 364
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "^=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 373,
                          "end": 377
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 378,
                          "end": 384
                        },
                        "optional": false,
                        "computed": false,
                        "start": 373,
                        "end": 384
                      },
                      "right": {
                        "type": "Literal",
                        "value": 13,
                        "raw": "13",
                        "start": 388,
                        "end": 390
                      },
                      "start": 373,
                      "end": 390
                    },
                    "directive": null,
                    "start": 373,
                    "end": 391
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 400,
                              "end": 401
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 402,
                              "end": 413
                            },
                            "optional": false,
                            "computed": false,
                            "start": 400,
                            "end": 413
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 400,
                          "end": 415
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 416,
                          "end": 422
                        },
                        "optional": false,
                        "computed": false,
                        "start": 400,
                        "end": 422
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 425,
                        "end": 426
                      },
                      "start": 400,
                      "end": 426
                    },
                    "directive": null,
                    "start": 400,
                    "end": 427
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 436,
                              "end": 437
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 438,
                              "end": 449
                            },
                            "optional": false,
                            "computed": false,
                            "start": 436,
                            "end": 449
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 436,
                          "end": 451
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 452,
                          "end": 458
                        },
                        "optional": false,
                        "computed": false,
                        "start": 436,
                        "end": 458
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 462,
                        "end": 463
                      },
                      "start": 436,
                      "end": 463
                    },
                    "directive": null,
                    "start": 436,
                    "end": 464
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 473,
                              "end": 474
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 475,
                              "end": 486
                            },
                            "optional": false,
                            "computed": false,
                            "start": 473,
                            "end": 486
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 473,
                          "end": 488
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 489,
                          "end": 495
                        },
                        "optional": false,
                        "computed": false,
                        "start": 473,
                        "end": 495
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 499,
                        "end": 500
                      },
                      "start": 473,
                      "end": 500
                    },
                    "directive": null,
                    "start": 473,
                    "end": 501
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "/=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 510,
                              "end": 511
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 512,
                              "end": 523
                            },
                            "optional": false,
                            "computed": false,
                            "start": 510,
                            "end": 523
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 510,
                          "end": 525
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 526,
                          "end": 532
                        },
                        "optional": false,
                        "computed": false,
                        "start": 510,
                        "end": 532
                      },
                      "right": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 536,
                        "end": 537
                      },
                      "start": 510,
                      "end": 537
                    },
                    "directive": null,
                    "start": 510,
                    "end": 538
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "*=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 547,
                              "end": 548
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 549,
                              "end": 560
                            },
                            "optional": false,
                            "computed": false,
                            "start": 547,
                            "end": 560
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 547,
                          "end": 562
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 563,
                          "end": 569
                        },
                        "optional": false,
                        "computed": false,
                        "start": 547,
                        "end": 569
                      },
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 573,
                        "end": 574
                      },
                      "start": 547,
                      "end": 574
                    },
                    "directive": null,
                    "start": 547,
                    "end": 575
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "**=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 584,
                              "end": 585
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 586,
                              "end": 597
                            },
                            "optional": false,
                            "computed": false,
                            "start": 584,
                            "end": 597
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 584,
                          "end": 599
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 600,
                          "end": 606
                        },
                        "optional": false,
                        "computed": false,
                        "start": 584,
                        "end": 606
                      },
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 611,
                        "end": 612
                      },
                      "start": 584,
                      "end": 612
                    },
                    "directive": null,
                    "start": 584,
                    "end": 613
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "%=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 622,
                              "end": 623
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 624,
                              "end": 635
                            },
                            "optional": false,
                            "computed": false,
                            "start": 622,
                            "end": 635
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 622,
                          "end": 637
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 638,
                          "end": 644
                        },
                        "optional": false,
                        "computed": false,
                        "start": 622,
                        "end": 644
                      },
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 648,
                        "end": 649
                      },
                      "start": 622,
                      "end": 649
                    },
                    "directive": null,
                    "start": 622,
                    "end": 650
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "<<=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 659,
                              "end": 660
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 661,
                              "end": 672
                            },
                            "optional": false,
                            "computed": false,
                            "start": 659,
                            "end": 672
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 659,
                          "end": 674
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 675,
                          "end": 681
                        },
                        "optional": false,
                        "computed": false,
                        "start": 659,
                        "end": 681
                      },
                      "right": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 686,
                        "end": 687
                      },
                      "start": 659,
                      "end": 687
                    },
                    "directive": null,
                    "start": 659,
                    "end": 688
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": ">>=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 697,
                              "end": 698
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 699,
                              "end": 710
                            },
                            "optional": false,
                            "computed": false,
                            "start": 697,
                            "end": 710
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 697,
                          "end": 712
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 713,
                          "end": 719
                        },
                        "optional": false,
                        "computed": false,
                        "start": 697,
                        "end": 719
                      },
                      "right": {
                        "type": "Literal",
                        "value": 9,
                        "raw": "9",
                        "start": 724,
                        "end": 725
                      },
                      "start": 697,
                      "end": 725
                    },
                    "directive": null,
                    "start": 697,
                    "end": 726
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": ">>>=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 735,
                              "end": 736
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 737,
                              "end": 748
                            },
                            "optional": false,
                            "computed": false,
                            "start": 735,
                            "end": 748
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 735,
                          "end": 750
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 751,
                          "end": 757
                        },
                        "optional": false,
                        "computed": false,
                        "start": 735,
                        "end": 757
                      },
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 763,
                        "end": 765
                      },
                      "start": 735,
                      "end": 765
                    },
                    "directive": null,
                    "start": 735,
                    "end": 766
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "&=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 775,
                              "end": 776
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 777,
                              "end": 788
                            },
                            "optional": false,
                            "computed": false,
                            "start": 775,
                            "end": 788
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 775,
                          "end": 790
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 791,
                          "end": 797
                        },
                        "optional": false,
                        "computed": false,
                        "start": 775,
                        "end": 797
                      },
                      "right": {
                        "type": "Literal",
                        "value": 11,
                        "raw": "11",
                        "start": 801,
                        "end": 803
                      },
                      "start": 775,
                      "end": 803
                    },
                    "directive": null,
                    "start": 775,
                    "end": 804
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "|=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 813,
                              "end": 814
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 815,
                              "end": 826
                            },
                            "optional": false,
                            "computed": false,
                            "start": 813,
                            "end": 826
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 813,
                          "end": 828
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 829,
                          "end": 835
                        },
                        "optional": false,
                        "computed": false,
                        "start": 813,
                        "end": 835
                      },
                      "right": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 839,
                        "end": 841
                      },
                      "start": 813,
                      "end": 841
                    },
                    "directive": null,
                    "start": 813,
                    "end": 842
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "^=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 851,
                              "end": 852
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 853,
                              "end": 864
                            },
                            "optional": false,
                            "computed": false,
                            "start": 851,
                            "end": 864
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 851,
                          "end": 866
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 867,
                          "end": 873
                        },
                        "optional": false,
                        "computed": false,
                        "start": 851,
                        "end": 873
                      },
                      "right": {
                        "type": "Literal",
                        "value": 13,
                        "raw": "13",
                        "start": 877,
                        "end": 879
                      },
                      "start": 851,
                      "end": 879
                    },
                    "directive": null,
                    "start": 851,
                    "end": 880
                  }
                ],
                "start": 44,
                "end": 886
              },
              "expression": false,
              "start": 41,
              "end": 886
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 30,
            "end": 886
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 898,
              "end": 909
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 933,
                        "end": 934
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 929,
                      "end": 936
                    },
                    "start": 922,
                    "end": 937
                  }
                ],
                "start": 912,
                "end": 943
              },
              "expression": false,
              "start": 909,
              "end": 943
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 891,
            "end": 943
          }
        ],
        "start": 8,
        "end": 945
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 945
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 945
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 14,
    "end": 20,
    "range": [
      14,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 30,
    "end": 41,
    "range": [
      30,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 54,
    "end": 58,
    "range": [
      54,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 59,
    "end": 65,
    "range": [
      59,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 79,
    "end": 83,
    "range": [
      79,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 84,
    "end": 90,
    "range": [
      84,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 91,
    "end": 93,
    "range": [
      91,
      93
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 94,
    "end": 95,
    "range": [
      94,
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
    "type": "Keyword",
    "value": "this",
    "start": 105,
    "end": 109,
    "range": [
      105,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 110,
    "end": 116,
    "range": [
      110,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "-=",
    "start": 117,
    "end": 119,
    "range": [
      117,
      119
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 131,
    "end": 135,
    "range": [
      131,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 136,
    "end": 142,
    "range": [
      136,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": "/=",
    "start": 143,
    "end": 145,
    "range": [
      143,
      145
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
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
    "type": "Keyword",
    "value": "this",
    "start": 157,
    "end": 161,
    "range": [
      157,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 162,
    "end": 168,
    "range": [
      162,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 169,
    "end": 171,
    "range": [
      169,
      171
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 183,
    "end": 187,
    "range": [
      183,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 188,
    "end": 194,
    "range": [
      188,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 195,
    "end": 198,
    "range": [
      195,
      198
    ]
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 210,
    "end": 214,
    "range": [
      210,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 215,
    "end": 221,
    "range": [
      215,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": "%=",
    "start": 222,
    "end": 224,
    "range": [
      222,
      224
    ]
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 236,
    "end": 240,
    "range": [
      236,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 241,
    "end": 247,
    "range": [
      241,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "<<=",
    "start": 248,
    "end": 251,
    "range": [
      248,
      251
    ]
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 263,
    "end": 267,
    "range": [
      263,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 268,
    "end": 274,
    "range": [
      268,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": ">>=",
    "start": 275,
    "end": 278,
    "range": [
      275,
      278
    ]
  },
  {
    "type": "Numeric",
    "value": "9",
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
    "value": "this",
    "start": 290,
    "end": 294,
    "range": [
      290,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 295,
    "end": 301,
    "range": [
      295,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": ">>>=",
    "start": 302,
    "end": 306,
    "range": [
      302,
      306
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 307,
    "end": 309,
    "range": [
      307,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 319,
    "end": 323,
    "range": [
      319,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 324,
    "end": 330,
    "range": [
      324,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "&=",
    "start": 331,
    "end": 333,
    "range": [
      331,
      333
    ]
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 334,
    "end": 336,
    "range": [
      334,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 346,
    "end": 350,
    "range": [
      346,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 351,
    "end": 357,
    "range": [
      351,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "|=",
    "start": 358,
    "end": 360,
    "range": [
      358,
      360
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 361,
    "end": 363,
    "range": [
      361,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 373,
    "end": 377,
    "range": [
      373,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 378,
    "end": 384,
    "range": [
      378,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": "^=",
    "start": 385,
    "end": 387,
    "range": [
      385,
      387
    ]
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 388,
    "end": 390,
    "range": [
      388,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 402,
    "end": 413,
    "range": [
      402,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 416,
    "end": 422,
    "range": [
      416,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 438,
    "end": 449,
    "range": [
      438,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 452,
    "end": 458,
    "range": [
      452,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 459,
    "end": 461,
    "range": [
      459,
      461
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 475,
    "end": 486,
    "range": [
      475,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 489,
    "end": 495,
    "range": [
      489,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": "-=",
    "start": 496,
    "end": 498,
    "range": [
      496,
      498
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 512,
    "end": 523,
    "range": [
      512,
      523
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
    "value": ")",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 526,
    "end": 532,
    "range": [
      526,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": "/=",
    "start": 533,
    "end": 535,
    "range": [
      533,
      535
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 549,
    "end": 560,
    "range": [
      549,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 563,
    "end": 569,
    "range": [
      563,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 570,
    "end": 572,
    "range": [
      570,
      572
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 586,
    "end": 597,
    "range": [
      586,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 600,
    "end": 606,
    "range": [
      600,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 607,
    "end": 610,
    "range": [
      607,
      610
    ]
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 624,
    "end": 635,
    "range": [
      624,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 638,
    "end": 644,
    "range": [
      638,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": "%=",
    "start": 645,
    "end": 647,
    "range": [
      645,
      647
    ]
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 661,
    "end": 672,
    "range": [
      661,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 675,
    "end": 681,
    "range": [
      675,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": "<<=",
    "start": 682,
    "end": 685,
    "range": [
      682,
      685
    ]
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 699,
    "end": 710,
    "range": [
      699,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 710,
    "end": 711,
    "range": [
      710,
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
    "value": ".",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 713,
    "end": 719,
    "range": [
      713,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": ">>=",
    "start": 720,
    "end": 723,
    "range": [
      720,
      723
    ]
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 737,
    "end": 748,
    "range": [
      737,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 751,
    "end": 757,
    "range": [
      751,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": ">>>=",
    "start": 758,
    "end": 762,
    "range": [
      758,
      762
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 763,
    "end": 765,
    "range": [
      763,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 777,
    "end": 788,
    "range": [
      777,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 791,
    "end": 797,
    "range": [
      791,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": "&=",
    "start": 798,
    "end": 800,
    "range": [
      798,
      800
    ]
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 801,
    "end": 803,
    "range": [
      801,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 815,
    "end": 826,
    "range": [
      815,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 829,
    "end": 835,
    "range": [
      829,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": "|=",
    "start": 836,
    "end": 838,
    "range": [
      836,
      838
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 839,
    "end": 841,
    "range": [
      839,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 853,
    "end": 864,
    "range": [
      853,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 867,
    "end": 873,
    "range": [
      867,
      873
    ]
  },
  {
    "type": "Punctuator",
    "value": "^=",
    "start": 874,
    "end": 876,
    "range": [
      874,
      876
    ]
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 877,
    "end": 879,
    "range": [
      877,
      879
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
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
    "type": "Keyword",
    "value": "static",
    "start": 891,
    "end": 897,
    "range": [
      891,
      897
    ]
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 898,
    "end": 909,
    "range": [
      898,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 912,
    "end": 913,
    "range": [
      912,
      913
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 922,
    "end": 928,
    "range": [
      922,
      928
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 929,
    "end": 932,
    "range": [
      929,
      932
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  }
]
```
