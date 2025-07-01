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
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 21
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 41
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 56
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 58,
                "end": 64
              },
              "start": 56,
              "end": 64
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 48,
            "end": 65
          }
        ],
        "start": 42,
        "end": 67
      },
      "abstract": false,
      "declare": true,
      "start": 23,
      "end": 67
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 76
          },
          "init": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 79,
            "end": 82
          },
          "definite": false,
          "start": 75,
          "end": 82
        }
      ],
      "declare": false,
      "start": 69,
      "end": 83
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ClassExpression",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 90
            },
            "start": 86,
            "end": 90
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 97,
          "end": 98
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null,
          "start": 107,
          "end": 111
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "StaticBlock",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 135,
                      "end": 140
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 141,
                      "end": 142
                    },
                    "optional": false,
                    "computed": false,
                    "start": 135,
                    "end": 142
                  },
                  "directive": null,
                  "start": 135,
                  "end": 143
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 152,
                        "end": 157
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 158,
                        "end": 159
                      },
                      "optional": false,
                      "computed": false,
                      "start": 152,
                      "end": 159
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 162,
                      "end": 163
                    },
                    "start": 152,
                    "end": 163
                  },
                  "directive": null,
                  "start": 152,
                  "end": 164
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 173,
                        "end": 178
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 179,
                        "end": 180
                      },
                      "optional": false,
                      "computed": false,
                      "start": 173,
                      "end": 180
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 184,
                      "end": 185
                    },
                    "start": 173,
                    "end": 185
                  },
                  "directive": null,
                  "start": 173,
                  "end": 186
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 195,
                        "end": 200
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 201,
                        "end": 202
                      },
                      "optional": false,
                      "computed": false,
                      "start": 195,
                      "end": 202
                    },
                    "start": 195,
                    "end": 204
                  },
                  "directive": null,
                  "start": 195,
                  "end": 205
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "operator": "--",
                    "prefix": false,
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 214,
                        "end": 219
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 220,
                        "end": 221
                      },
                      "optional": false,
                      "computed": false,
                      "start": 214,
                      "end": 221
                    },
                    "start": 214,
                    "end": 223
                  },
                  "directive": null,
                  "start": 214,
                  "end": 224
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": true,
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 235,
                        "end": 240
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 241,
                        "end": 242
                      },
                      "optional": false,
                      "computed": false,
                      "start": 235,
                      "end": 242
                    },
                    "start": 233,
                    "end": 242
                  },
                  "directive": null,
                  "start": 233,
                  "end": 243
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "operator": "--",
                    "prefix": true,
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 254,
                        "end": 259
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 260,
                        "end": 261
                      },
                      "optional": false,
                      "computed": false,
                      "start": 254,
                      "end": 261
                    },
                    "start": 252,
                    "end": 261
                  },
                  "directive": null,
                  "start": 252,
                  "end": 262
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 274,
                            "end": 275
                          },
                          "value": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 277,
                              "end": 282
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 283,
                              "end": 284
                            },
                            "optional": false,
                            "computed": false,
                            "start": 277,
                            "end": 284
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 274,
                          "end": 284
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 272,
                      "end": 286
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 291,
                            "end": 292
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 294,
                            "end": 295
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 291,
                          "end": 295
                        }
                      ],
                      "start": 289,
                      "end": 297
                    },
                    "start": 272,
                    "end": 297
                  },
                  "directive": null,
                  "start": 271,
                  "end": 299
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 309,
                            "end": 314
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 315,
                            "end": 316
                          },
                          "optional": false,
                          "computed": false,
                          "start": 309,
                          "end": 316
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 308,
                      "end": 317
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 321,
                          "end": 322
                        }
                      ],
                      "start": 320,
                      "end": 323
                    },
                    "start": 308,
                    "end": 323
                  },
                  "directive": null,
                  "start": 308,
                  "end": 324
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 334,
                      "end": 339
                    },
                    "property": {
                      "type": "Literal",
                      "value": "x",
                      "raw": "\"x\"",
                      "start": 340,
                      "end": 343
                    },
                    "optional": false,
                    "computed": true,
                    "start": 334,
                    "end": 344
                  },
                  "directive": null,
                  "start": 334,
                  "end": 345
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 354,
                        "end": 359
                      },
                      "property": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "\"x\"",
                        "start": 360,
                        "end": 363
                      },
                      "optional": false,
                      "computed": true,
                      "start": 354,
                      "end": 364
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 367,
                      "end": 368
                    },
                    "start": 354,
                    "end": 368
                  },
                  "directive": null,
                  "start": 354,
                  "end": 369
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 378,
                        "end": 383
                      },
                      "property": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "\"x\"",
                        "start": 384,
                        "end": 387
                      },
                      "optional": false,
                      "computed": true,
                      "start": 378,
                      "end": 388
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 392,
                      "end": 393
                    },
                    "start": 378,
                    "end": 393
                  },
                  "directive": null,
                  "start": 378,
                  "end": 394
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 403,
                        "end": 408
                      },
                      "property": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "\"x\"",
                        "start": 409,
                        "end": 412
                      },
                      "optional": false,
                      "computed": true,
                      "start": 403,
                      "end": 413
                    },
                    "start": 403,
                    "end": 415
                  },
                  "directive": null,
                  "start": 403,
                  "end": 416
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "operator": "--",
                    "prefix": false,
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 425,
                        "end": 430
                      },
                      "property": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "\"x\"",
                        "start": 431,
                        "end": 434
                      },
                      "optional": false,
                      "computed": true,
                      "start": 425,
                      "end": 435
                    },
                    "start": 425,
                    "end": 437
                  },
                  "directive": null,
                  "start": 425,
                  "end": 438
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": true,
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 449,
                        "end": 454
                      },
                      "property": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "\"x\"",
                        "start": 455,
                        "end": 458
                      },
                      "optional": false,
                      "computed": true,
                      "start": 449,
                      "end": 459
                    },
                    "start": 447,
                    "end": 459
                  },
                  "directive": null,
                  "start": 447,
                  "end": 460
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "operator": "--",
                    "prefix": true,
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 471,
                        "end": 476
                      },
                      "property": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "\"x\"",
                        "start": 477,
                        "end": 480
                      },
                      "optional": false,
                      "computed": true,
                      "start": 471,
                      "end": 481
                    },
                    "start": 469,
                    "end": 481
                  },
                  "directive": null,
                  "start": 469,
                  "end": 482
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 494,
                            "end": 495
                          },
                          "value": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 497,
                              "end": 502
                            },
                            "property": {
                              "type": "Literal",
                              "value": "x",
                              "raw": "\"x\"",
                              "start": 503,
                              "end": 506
                            },
                            "optional": false,
                            "computed": true,
                            "start": 497,
                            "end": 507
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 494,
                          "end": 507
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 492,
                      "end": 509
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 514,
                            "end": 515
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 517,
                            "end": 518
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 514,
                          "end": 518
                        }
                      ],
                      "start": 512,
                      "end": 520
                    },
                    "start": 492,
                    "end": 520
                  },
                  "directive": null,
                  "start": 491,
                  "end": 522
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 532,
                            "end": 537
                          },
                          "property": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 538,
                            "end": 541
                          },
                          "optional": false,
                          "computed": true,
                          "start": 532,
                          "end": 542
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 531,
                      "end": 543
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 547,
                          "end": 548
                        }
                      ],
                      "start": 546,
                      "end": 549
                    },
                    "start": 531,
                    "end": 549
                  },
                  "directive": null,
                  "start": 531,
                  "end": 550
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 560,
                      "end": 565
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 566,
                      "end": 567
                    },
                    "optional": false,
                    "computed": true,
                    "start": 560,
                    "end": 568
                  },
                  "directive": null,
                  "start": 560,
                  "end": 569
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 578,
                        "end": 583
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 584,
                        "end": 585
                      },
                      "optional": false,
                      "computed": true,
                      "start": 578,
                      "end": 586
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 589,
                      "end": 590
                    },
                    "start": 578,
                    "end": 590
                  },
                  "directive": null,
                  "start": 578,
                  "end": 591
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 600,
                        "end": 605
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 606,
                        "end": 607
                      },
                      "optional": false,
                      "computed": true,
                      "start": 600,
                      "end": 608
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 612,
                      "end": 613
                    },
                    "start": 600,
                    "end": 613
                  },
                  "directive": null,
                  "start": 600,
                  "end": 614
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 623,
                        "end": 628
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 629,
                        "end": 630
                      },
                      "optional": false,
                      "computed": true,
                      "start": 623,
                      "end": 631
                    },
                    "start": 623,
                    "end": 633
                  },
                  "directive": null,
                  "start": 623,
                  "end": 634
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "operator": "--",
                    "prefix": false,
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 643,
                        "end": 648
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 649,
                        "end": 650
                      },
                      "optional": false,
                      "computed": true,
                      "start": 643,
                      "end": 651
                    },
                    "start": 643,
                    "end": 653
                  },
                  "directive": null,
                  "start": 643,
                  "end": 654
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": true,
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 665,
                        "end": 670
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 671,
                        "end": 672
                      },
                      "optional": false,
                      "computed": true,
                      "start": 665,
                      "end": 673
                    },
                    "start": 663,
                    "end": 673
                  },
                  "directive": null,
                  "start": 663,
                  "end": 674
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "operator": "--",
                    "prefix": true,
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 685,
                        "end": 690
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 691,
                        "end": 692
                      },
                      "optional": false,
                      "computed": true,
                      "start": 685,
                      "end": 693
                    },
                    "start": 683,
                    "end": 693
                  },
                  "directive": null,
                  "start": 683,
                  "end": 694
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 706,
                            "end": 707
                          },
                          "value": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 709,
                              "end": 714
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 715,
                              "end": 716
                            },
                            "optional": false,
                            "computed": true,
                            "start": 709,
                            "end": 717
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 706,
                          "end": 717
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 704,
                      "end": 719
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 724,
                            "end": 725
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 727,
                            "end": 728
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 724,
                          "end": 728
                        }
                      ],
                      "start": 722,
                      "end": 730
                    },
                    "start": 704,
                    "end": 730
                  },
                  "directive": null,
                  "start": 703,
                  "end": 732
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 742,
                            "end": 747
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 748,
                            "end": 749
                          },
                          "optional": false,
                          "computed": true,
                          "start": 742,
                          "end": 750
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 741,
                      "end": 751
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 755,
                          "end": 756
                        }
                      ],
                      "start": 754,
                      "end": 757
                    },
                    "start": 741,
                    "end": 757
                  },
                  "directive": null,
                  "start": 741,
                  "end": 758
                }
              ],
              "start": 118,
              "end": 764
            }
          ],
          "start": 112,
          "end": 766
        },
        "abstract": false,
        "declare": false,
        "start": 86,
        "end": 766
      },
      "directive": null,
      "start": 85,
      "end": 768
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 768
}
```
