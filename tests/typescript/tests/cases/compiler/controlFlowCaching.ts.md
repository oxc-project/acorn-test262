__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 30
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "dim",
          "optional": false,
          "typeAnnotation": null,
          "start": 31,
          "end": 34
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "offsets",
          "optional": false,
          "typeAnnotation": null,
          "start": 36,
          "end": 43
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": null,
          "start": 45,
          "end": 48
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "acommon",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 57
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "centerAnchorLimit",
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 76
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 78,
          "end": 79
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "has",
          "optional": false,
          "typeAnnotation": null,
          "start": 81,
          "end": 84
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "lin",
          "optional": false,
          "typeAnnotation": null,
          "start": 86,
          "end": 89
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "isRtl",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 106
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 109,
                      "end": 113
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_isRtl",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 114,
                      "end": 120
                    },
                    "optional": false,
                    "computed": false,
                    "start": 109,
                    "end": 120
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 109,
                  "end": 122
                },
                "definite": false,
                "start": 101,
                "end": 122
              }
            ],
            "declare": false,
            "start": 97,
            "end": 123
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 176,
                  "end": 177
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 180,
                    "end": 184
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "opt",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 185,
                    "end": 188
                  },
                  "optional": false,
                  "computed": false,
                  "start": 180,
                  "end": 188
                },
                "definite": false,
                "start": 176,
                "end": 188
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ta",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 190,
                  "end": 192
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 195,
                        "end": 199
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "chart",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 200,
                        "end": 205
                      },
                      "optional": false,
                      "computed": false,
                      "start": 195,
                      "end": 205
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "theme",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 206,
                      "end": 211
                    },
                    "optional": false,
                    "computed": false,
                    "start": 195,
                    "end": 211
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "axis",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 212,
                    "end": 216
                  },
                  "optional": false,
                  "computed": false,
                  "start": 195,
                  "end": 216
                },
                "definite": false,
                "start": 190,
                "end": 216
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "position",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 218,
                  "end": 226
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 229,
                    "end": 230
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "position",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 231,
                    "end": 239
                  },
                  "optional": false,
                  "computed": false,
                  "start": 229,
                  "end": 239
                },
                "definite": false,
                "start": 218,
                "end": 239
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "leftBottom",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 249,
                  "end": 259
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "position",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 262,
                    "end": 270
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "value": "rightOrTop",
                    "raw": "\"rightOrTop\"",
                    "start": 275,
                    "end": 287
                  },
                  "start": 262,
                  "end": 287
                },
                "definite": false,
                "start": 249,
                "end": 287
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rotation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 289,
                  "end": 297
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 300,
                      "end": 301
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rotation",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 302,
                      "end": 310
                    },
                    "optional": false,
                    "computed": false,
                    "start": 300,
                    "end": 310
                  },
                  "operator": "%",
                  "right": {
                    "type": "Literal",
                    "value": 360,
                    "raw": "360",
                    "start": 313,
                    "end": 316
                  },
                  "start": 300,
                  "end": 316
                },
                "definite": false,
                "start": 289,
                "end": 316
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "start",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 331
                },
                "init": null,
                "definite": false,
                "start": 326,
                "end": 331
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "stop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 333,
                  "end": 337
                },
                "init": null,
                "definite": false,
                "start": 333,
                "end": 337
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "titlePos",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 339,
                  "end": 347
                },
                "init": null,
                "definite": false,
                "start": 339,
                "end": 347
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "titleRotation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 349,
                  "end": 362
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 365,
                  "end": 366
                },
                "definite": false,
                "start": 349,
                "end": 366
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "titleOffset",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 368,
                  "end": 379
                },
                "init": null,
                "definite": false,
                "start": 368,
                "end": 379
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "axisVector",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 381,
                  "end": 391
                },
                "init": null,
                "definite": false,
                "start": 381,
                "end": 391
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tickVector",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 393,
                  "end": 403
                },
                "init": null,
                "definite": false,
                "start": 393,
                "end": 403
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anchorOffset",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 405,
                  "end": 417
                },
                "init": null,
                "definite": false,
                "start": 405,
                "end": 417
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "labelOffset",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 419,
                  "end": 430
                },
                "init": null,
                "definite": false,
                "start": 419,
                "end": 430
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "labelAlign",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 432,
                  "end": 442
                },
                "init": null,
                "definite": false,
                "start": 432,
                "end": 442
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "labelGap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 452,
                  "end": 460
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 463,
                            "end": 467
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "chart",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 468,
                            "end": 473
                          },
                          "optional": false,
                          "computed": false,
                          "start": 463,
                          "end": 473
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "theme",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 474,
                          "end": 479
                        },
                        "optional": false,
                        "computed": false,
                        "start": 463,
                        "end": 479
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "axis",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 480,
                        "end": 484
                      },
                      "optional": false,
                      "computed": false,
                      "start": 463,
                      "end": 484
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 485,
                      "end": 489
                    },
                    "optional": false,
                    "computed": false,
                    "start": 463,
                    "end": 489
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "labelGap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 490,
                    "end": 498
                  },
                  "optional": false,
                  "computed": false,
                  "start": 463,
                  "end": 498
                },
                "definite": false,
                "start": 452,
                "end": 498
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taFont",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 508,
                  "end": 514
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 517,
                        "end": 518
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "font",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 519,
                        "end": 523
                      },
                      "optional": false,
                      "computed": false,
                      "start": 517,
                      "end": 523
                    },
                    "operator": "||",
                    "right": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ta",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 528,
                          "end": 530
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "majorTick",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 531,
                          "end": 540
                        },
                        "optional": false,
                        "computed": false,
                        "start": 528,
                        "end": 540
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ta",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 544,
                            "end": 546
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "majorTick",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 547,
                            "end": 556
                          },
                          "optional": false,
                          "computed": false,
                          "start": 544,
                          "end": 556
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "font",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 557,
                          "end": 561
                        },
                        "optional": false,
                        "computed": false,
                        "start": 544,
                        "end": 561
                      },
                      "start": 528,
                      "end": 561
                    },
                    "start": 517,
                    "end": 562
                  },
                  "operator": "||",
                  "right": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ta",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 567,
                        "end": 569
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tick",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 570,
                        "end": 574
                      },
                      "optional": false,
                      "computed": false,
                      "start": 567,
                      "end": 574
                    },
                    "operator": "&&",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ta",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 578,
                          "end": 580
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "tick",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 581,
                          "end": 585
                        },
                        "optional": false,
                        "computed": false,
                        "start": 578,
                        "end": 585
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "font",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 586,
                        "end": 590
                      },
                      "optional": false,
                      "computed": false,
                      "start": 578,
                      "end": 590
                    },
                    "start": 567,
                    "end": 590
                  },
                  "start": 517,
                  "end": 591
                },
                "definite": false,
                "start": 508,
                "end": 591
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taTitleFont",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 601,
                  "end": 612
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 615,
                      "end": 616
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "titleFont",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 617,
                      "end": 626
                    },
                    "optional": false,
                    "computed": false,
                    "start": 615,
                    "end": 626
                  },
                  "operator": "||",
                  "right": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ta",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 631,
                        "end": 633
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "title",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 634,
                        "end": 639
                      },
                      "optional": false,
                      "computed": false,
                      "start": 631,
                      "end": 639
                    },
                    "operator": "&&",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ta",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 643,
                          "end": 645
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "title",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 646,
                          "end": 651
                        },
                        "optional": false,
                        "computed": false,
                        "start": 643,
                        "end": 651
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "font",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 652,
                        "end": 656
                      },
                      "optional": false,
                      "computed": false,
                      "start": 643,
                      "end": 656
                    },
                    "start": 631,
                    "end": 656
                  },
                  "start": 615,
                  "end": 657
                },
                "definite": false,
                "start": 601,
                "end": 657
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taFontColor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 667,
                  "end": 678
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 681,
                          "end": 682
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fontColor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 683,
                          "end": 692
                        },
                        "optional": false,
                        "computed": false,
                        "start": 681,
                        "end": 692
                      },
                      "operator": "||",
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ta",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 697,
                            "end": 699
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "majorTick",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 700,
                            "end": 709
                          },
                          "optional": false,
                          "computed": false,
                          "start": 697,
                          "end": 709
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ta",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 713,
                              "end": 715
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "majorTick",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 716,
                              "end": 725
                            },
                            "optional": false,
                            "computed": false,
                            "start": 713,
                            "end": 725
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fontColor",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 726,
                            "end": 735
                          },
                          "optional": false,
                          "computed": false,
                          "start": 713,
                          "end": 735
                        },
                        "start": 697,
                        "end": 735
                      },
                      "start": 681,
                      "end": 736
                    },
                    "operator": "||",
                    "right": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ta",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 741,
                          "end": 743
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "tick",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 744,
                          "end": 748
                        },
                        "optional": false,
                        "computed": false,
                        "start": 741,
                        "end": 748
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ta",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 752,
                            "end": 754
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tick",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 755,
                            "end": 759
                          },
                          "optional": false,
                          "computed": false,
                          "start": 752,
                          "end": 759
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fontColor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 760,
                          "end": 769
                        },
                        "optional": false,
                        "computed": false,
                        "start": 752,
                        "end": 769
                      },
                      "start": 741,
                      "end": 769
                    },
                    "start": 681,
                    "end": 770
                  },
                  "operator": "||",
                  "right": {
                    "type": "Literal",
                    "value": "black",
                    "raw": "\"black\"",
                    "start": 774,
                    "end": 781
                  },
                  "start": 681,
                  "end": 781
                },
                "definite": false,
                "start": 667,
                "end": 781
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taTitleFontColor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 791,
                  "end": 807
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 810,
                        "end": 811
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "titleFontColor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 812,
                        "end": 826
                      },
                      "optional": false,
                      "computed": false,
                      "start": 810,
                      "end": 826
                    },
                    "operator": "||",
                    "right": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ta",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 831,
                          "end": 833
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "title",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 834,
                          "end": 839
                        },
                        "optional": false,
                        "computed": false,
                        "start": 831,
                        "end": 839
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ta",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 843,
                            "end": 845
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "title",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 846,
                            "end": 851
                          },
                          "optional": false,
                          "computed": false,
                          "start": 843,
                          "end": 851
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fontColor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 852,
                          "end": 861
                        },
                        "optional": false,
                        "computed": false,
                        "start": 843,
                        "end": 861
                      },
                      "start": 831,
                      "end": 861
                    },
                    "start": 810,
                    "end": 862
                  },
                  "operator": "||",
                  "right": {
                    "type": "Literal",
                    "value": "black",
                    "raw": "\"black\"",
                    "start": 866,
                    "end": 873
                  },
                  "start": 810,
                  "end": 873
                },
                "definite": false,
                "start": 791,
                "end": 873
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taTitleGap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 883,
                  "end": 893
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 897,
                        "end": 898
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "titleGap",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 899,
                        "end": 907
                      },
                      "optional": false,
                      "computed": false,
                      "start": 897,
                      "end": 907
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 911,
                      "end": 912
                    },
                    "start": 897,
                    "end": 912
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 916,
                    "end": 917
                  },
                  "alternate": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 920,
                          "end": 921
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "titleGap",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 922,
                          "end": 930
                        },
                        "optional": false,
                        "computed": false,
                        "start": 920,
                        "end": 930
                      },
                      "operator": "||",
                      "right": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ta",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 935,
                            "end": 937
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "title",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 938,
                            "end": 943
                          },
                          "optional": false,
                          "computed": false,
                          "start": 935,
                          "end": 943
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ta",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 947,
                              "end": 949
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "title",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 950,
                              "end": 955
                            },
                            "optional": false,
                            "computed": false,
                            "start": 947,
                            "end": 955
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "gap",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 956,
                            "end": 959
                          },
                          "optional": false,
                          "computed": false,
                          "start": 947,
                          "end": 959
                        },
                        "start": 935,
                        "end": 959
                      },
                      "start": 920,
                      "end": 960
                    },
                    "operator": "||",
                    "right": {
                      "type": "Literal",
                      "value": 15,
                      "raw": "15",
                      "start": 964,
                      "end": 966
                    },
                    "start": 920,
                    "end": 966
                  },
                  "start": 896,
                  "end": 966
                },
                "definite": false,
                "start": 883,
                "end": 966
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taTitleOrientation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 976,
                  "end": 994
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 997,
                        "end": 998
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "titleOrientation",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 999,
                        "end": 1015
                      },
                      "optional": false,
                      "computed": false,
                      "start": 997,
                      "end": 1015
                    },
                    "operator": "||",
                    "right": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ta",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1020,
                          "end": 1022
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "title",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1023,
                          "end": 1028
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1020,
                        "end": 1028
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ta",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1032,
                            "end": 1034
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "title",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1035,
                            "end": 1040
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1032,
                          "end": 1040
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "orientation",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1041,
                          "end": 1052
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1032,
                        "end": 1052
                      },
                      "start": 1020,
                      "end": 1052
                    },
                    "start": 997,
                    "end": 1053
                  },
                  "operator": "||",
                  "right": {
                    "type": "Literal",
                    "value": "axis",
                    "raw": "\"axis\"",
                    "start": 1057,
                    "end": 1063
                  },
                  "start": 997,
                  "end": 1063
                },
                "definite": false,
                "start": 976,
                "end": 1063
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taMajorTick",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1073,
                  "end": 1084
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1087,
                          "end": 1091
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "chart",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1092,
                          "end": 1097
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1087,
                        "end": 1097
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "theme",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1098,
                        "end": 1103
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1087,
                      "end": 1103
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getTick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1104,
                      "end": 1111
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1087,
                    "end": 1111
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "major",
                      "raw": "\"major\"",
                      "start": 1112,
                      "end": 1119
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1121,
                      "end": 1122
                    }
                  ],
                  "optional": false,
                  "start": 1087,
                  "end": 1123
                },
                "definite": false,
                "start": 1073,
                "end": 1123
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taMinorTick",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1133,
                  "end": 1144
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1147,
                          "end": 1151
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "chart",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1152,
                          "end": 1157
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1147,
                        "end": 1157
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "theme",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1158,
                        "end": 1163
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1147,
                      "end": 1163
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getTick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1164,
                      "end": 1171
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1147,
                    "end": 1171
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "minor",
                      "raw": "\"minor\"",
                      "start": 1172,
                      "end": 1179
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1181,
                      "end": 1182
                    }
                  ],
                  "optional": false,
                  "start": 1147,
                  "end": 1183
                },
                "definite": false,
                "start": 1133,
                "end": 1183
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taMicroTick",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1193,
                  "end": 1204
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1207,
                          "end": 1211
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "chart",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1212,
                          "end": 1217
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1207,
                        "end": 1217
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "theme",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1218,
                        "end": 1223
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1207,
                      "end": 1223
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getTick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1224,
                      "end": 1231
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1207,
                    "end": 1231
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "micro",
                      "raw": "\"micro\"",
                      "start": 1232,
                      "end": 1239
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1241,
                      "end": 1242
                    }
                  ],
                  "optional": false,
                  "start": 1207,
                  "end": 1243
                },
                "definite": false,
                "start": 1193,
                "end": 1243
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taStroke",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1254,
                  "end": 1262
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "stroke",
                      "raw": "\"stroke\"",
                      "start": 1265,
                      "end": 1273
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1277,
                      "end": 1278
                    },
                    "start": 1265,
                    "end": 1278
                  },
                  "consequent": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1281,
                      "end": 1282
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "stroke",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1283,
                      "end": 1289
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1281,
                    "end": 1289
                  },
                  "alternate": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ta",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1292,
                      "end": 1294
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "stroke",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1295,
                      "end": 1301
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1292,
                    "end": 1301
                  },
                  "start": 1265,
                  "end": 1301
                },
                "definite": false,
                "start": 1254,
                "end": 1301
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "size",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1311,
                  "end": 1315
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "taFont",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1318,
                    "end": 1324
                  },
                  "consequent": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1327,
                        "end": 1328
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "normalizedLength",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1329,
                        "end": 1345
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1327,
                      "end": 1345
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1346,
                              "end": 1347
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "splitFontString",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1348,
                              "end": 1363
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1346,
                            "end": 1363
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "taFont",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1364,
                              "end": 1370
                            }
                          ],
                          "optional": false,
                          "start": 1346,
                          "end": 1371
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1372,
                          "end": 1376
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1346,
                        "end": 1376
                      }
                    ],
                    "optional": false,
                    "start": 1327,
                    "end": 1377
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1380,
                    "end": 1381
                  },
                  "start": 1318,
                  "end": 1381
                },
                "definite": false,
                "start": 1311,
                "end": 1381
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cosr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1391,
                  "end": 1395
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1398,
                      "end": 1402
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "abs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1403,
                      "end": 1406
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1398,
                    "end": 1406
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1407,
                          "end": 1411
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cos",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1412,
                          "end": 1415
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1407,
                        "end": 1415
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "rotation",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1416,
                              "end": 1424
                            },
                            "operator": "*",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Math",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1427,
                                "end": 1431
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PI",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1432,
                                "end": 1434
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1427,
                              "end": 1434
                            },
                            "start": 1416,
                            "end": 1434
                          },
                          "operator": "/",
                          "right": {
                            "type": "Literal",
                            "value": 180,
                            "raw": "180",
                            "start": 1437,
                            "end": 1440
                          },
                          "start": 1416,
                          "end": 1440
                        }
                      ],
                      "optional": false,
                      "start": 1407,
                      "end": 1441
                    }
                  ],
                  "optional": false,
                  "start": 1398,
                  "end": 1442
                },
                "definite": false,
                "start": 1391,
                "end": 1442
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sinr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1452,
                  "end": 1456
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1459,
                      "end": 1463
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "abs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1464,
                      "end": 1467
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1459,
                    "end": 1467
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1468,
                          "end": 1472
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "sin",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1473,
                          "end": 1476
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1468,
                        "end": 1476
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "rotation",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1477,
                              "end": 1485
                            },
                            "operator": "*",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Math",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1488,
                                "end": 1492
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PI",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1493,
                                "end": 1495
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1488,
                              "end": 1495
                            },
                            "start": 1477,
                            "end": 1495
                          },
                          "operator": "/",
                          "right": {
                            "type": "Literal",
                            "value": 180,
                            "raw": "180",
                            "start": 1498,
                            "end": 1501
                          },
                          "start": 1477,
                          "end": 1501
                        }
                      ],
                      "optional": false,
                      "start": 1468,
                      "end": 1502
                    }
                  ],
                  "optional": false,
                  "start": 1459,
                  "end": 1503
                },
                "definite": false,
                "start": 1452,
                "end": 1503
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tsize",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1513,
                  "end": 1518
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "taTitleFont",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1521,
                    "end": 1532
                  },
                  "consequent": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1535,
                        "end": 1536
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "normalizedLength",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1537,
                        "end": 1553
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1535,
                      "end": 1553
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1554,
                              "end": 1555
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "splitFontString",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1556,
                              "end": 1571
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1554,
                            "end": 1571
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "taTitleFont",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1572,
                              "end": 1583
                            }
                          ],
                          "optional": false,
                          "start": 1554,
                          "end": 1584
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1585,
                          "end": 1589
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1554,
                        "end": 1589
                      }
                    ],
                    "optional": false,
                    "start": 1535,
                    "end": 1590
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1593,
                    "end": 1594
                  },
                  "start": 1521,
                  "end": 1594
                },
                "definite": false,
                "start": 1513,
                "end": 1594
              }
            ],
            "declare": false,
            "start": 172,
            "end": 1595
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "rotation",
                "optional": false,
                "typeAnnotation": null,
                "start": 1604,
                "end": 1612
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1615,
                "end": 1616
              },
              "start": 1604,
              "end": 1616
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rotation",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1628,
                      "end": 1636
                    },
                    "right": {
                      "type": "Literal",
                      "value": 360,
                      "raw": "360",
                      "start": 1640,
                      "end": 1643
                    },
                    "start": 1628,
                    "end": 1643
                  },
                  "directive": null,
                  "start": 1628,
                  "end": 1644
                }
              ],
              "start": 1618,
              "end": 1650
            },
            "alternate": null,
            "start": 1600,
            "end": 1650
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
                  "name": "cachedLabelW",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1659,
                  "end": 1671
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 1674,
                      "end": 1678
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_getMaxLabelSize",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1679,
                      "end": 1695
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1674,
                    "end": 1695
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1674,
                  "end": 1697
                },
                "definite": false,
                "start": 1659,
                "end": 1697
              }
            ],
            "declare": false,
            "start": 1655,
            "end": 1698
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "cachedLabelW",
                "optional": false,
                "typeAnnotation": null,
                "start": 1703,
                "end": 1715
              },
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cachedLabelW",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1718,
                  "end": 1730
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cachedLabelW",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1734,
                    "end": 1746
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "majLabelW",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1747,
                    "end": 1756
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1734,
                  "end": 1756
                },
                "start": 1718,
                "end": 1756
              },
              "start": 1703,
              "end": 1756
            },
            "directive": null,
            "start": 1703,
            "end": 1757
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "titleOffset",
                "optional": false,
                "typeAnnotation": null,
                "start": 1762,
                "end": 1773
              },
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "size",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1776,
                            "end": 1780
                          },
                          "operator": "*",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "cosr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1783,
                            "end": 1787
                          },
                          "start": 1776,
                          "end": 1787
                        },
                        "operator": "+",
                        "right": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "cachedLabelW",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1791,
                              "end": 1803
                            },
                            "operator": "||",
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1807,
                              "end": 1808
                            },
                            "start": 1791,
                            "end": 1808
                          },
                          "operator": "*",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sinr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1812,
                            "end": 1816
                          },
                          "start": 1790,
                          "end": 1816
                        },
                        "start": 1776,
                        "end": 1816
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "labelGap",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1819,
                        "end": 1827
                      },
                      "start": 1776,
                      "end": 1827
                    },
                    "operator": "+",
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1830,
                          "end": 1834
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "max",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1835,
                          "end": 1838
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1830,
                        "end": 1838
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "taMajorTick",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1839,
                                "end": 1850
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1851,
                                "end": 1857
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1839,
                              "end": 1857
                            },
                            "operator": ">",
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1860,
                              "end": 1861
                            },
                            "start": 1839,
                            "end": 1861
                          },
                          "consequent": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "taMajorTick",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1864,
                              "end": 1875
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1876,
                              "end": 1882
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1864,
                            "end": 1882
                          },
                          "alternate": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1885,
                            "end": 1886
                          },
                          "start": 1839,
                          "end": 1886
                        },
                        {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "taMinorTick",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1896,
                                "end": 1907
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1908,
                                "end": 1914
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1896,
                              "end": 1914
                            },
                            "operator": ">",
                            "right": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1917,
                              "end": 1918
                            },
                            "start": 1896,
                            "end": 1918
                          },
                          "consequent": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "taMinorTick",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1921,
                              "end": 1932
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1933,
                              "end": 1939
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1921,
                            "end": 1939
                          },
                          "alternate": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1942,
                            "end": 1943
                          },
                          "start": 1896,
                          "end": 1943
                        }
                      ],
                      "optional": false,
                      "start": 1830,
                      "end": 1944
                    },
                    "start": 1776,
                    "end": 1944
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tsize",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1955,
                    "end": 1960
                  },
                  "start": 1776,
                  "end": 1960
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "taTitleGap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1963,
                  "end": 1973
                },
                "start": 1776,
                "end": 1973
              },
              "start": 1762,
              "end": 1973
            },
            "directive": null,
            "start": 1762,
            "end": 1974
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "axisVector",
                "optional": false,
                "typeAnnotation": null,
                "start": 1979,
                "end": 1989
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
                      "start": 1994,
                      "end": 1995
                    },
                    "value": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isRtl",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1997,
                        "end": 2002
                      },
                      "consequent": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 2006,
                          "end": 2007
                        },
                        "prefix": true,
                        "start": 2005,
                        "end": 2007
                      },
                      "alternate": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2010,
                        "end": 2011
                      },
                      "start": 1997,
                      "end": 2011
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1994,
                    "end": 2011
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2013,
                      "end": 2014
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 2016,
                      "end": 2017
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2013,
                    "end": 2017
                  }
                ],
                "start": 1992,
                "end": 2019
              },
              "start": 1979,
              "end": 2019
            },
            "directive": null,
            "start": 1979,
            "end": 2020
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "rotation",
              "optional": false,
              "typeAnnotation": null,
              "start": 2056,
              "end": 2064
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rotation",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2101,
                        "end": 2109
                      },
                      "operator": "<",
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Literal",
                          "value": 90,
                          "raw": "90",
                          "start": 2113,
                          "end": 2115
                        },
                        "operator": "-",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "centerAnchorLimit",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2118,
                          "end": 2135
                        },
                        "start": 2113,
                        "end": 2135
                      },
                      "start": 2101,
                      "end": 2136
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
                                "type": "Identifier",
                                "decorators": [],
                                "name": "labelOffset",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2156,
                                "end": 2167
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2168,
                                "end": 2169
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2156,
                              "end": 2169
                            },
                            "right": {
                              "type": "ConditionalExpression",
                              "test": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "leftBottom",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2172,
                                "end": 2182
                              },
                              "consequent": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "size",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2185,
                                "end": 2189
                              },
                              "alternate": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 2192,
                                "end": 2193
                              },
                              "start": 2172,
                              "end": 2193
                            },
                            "start": 2156,
                            "end": 2193
                          },
                          "directive": null,
                          "start": 2156,
                          "end": 2194
                        }
                      ],
                      "start": 2138,
                      "end": 2208
                    },
                    "alternate": {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rotation",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2218,
                          "end": 2226
                        },
                        "operator": "<",
                        "right": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Literal",
                            "value": 90,
                            "raw": "90",
                            "start": 2230,
                            "end": 2232
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "centerAnchorLimit",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2235,
                            "end": 2252
                          },
                          "start": 2230,
                          "end": 2252
                        },
                        "start": 2218,
                        "end": 2253
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "labelOffset",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2273,
                                  "end": 2284
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2285,
                                  "end": 2286
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2273,
                                "end": 2286
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "UnaryExpression",
                                  "operator": "-",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "size",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2290,
                                    "end": 2294
                                  },
                                  "prefix": true,
                                  "start": 2289,
                                  "end": 2294
                                },
                                "operator": "*",
                                "right": {
                                  "type": "Literal",
                                  "value": 0.4,
                                  "raw": "0.4",
                                  "start": 2297,
                                  "end": 2300
                                },
                                "start": 2289,
                                "end": 2300
                              },
                              "start": 2273,
                              "end": 2300
                            },
                            "directive": null,
                            "start": 2273,
                            "end": 2301
                          }
                        ],
                        "start": 2255,
                        "end": 2315
                      },
                      "alternate": {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rotation",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2325,
                            "end": 2333
                          },
                          "operator": "<",
                          "right": {
                            "type": "Literal",
                            "value": 180,
                            "raw": "180",
                            "start": 2336,
                            "end": 2339
                          },
                          "start": 2325,
                          "end": 2339
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
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "labelOffset",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2359,
                                    "end": 2370
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2371,
                                    "end": 2372
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2359,
                                  "end": 2372
                                },
                                "right": {
                                  "type": "ConditionalExpression",
                                  "test": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "leftBottom",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2375,
                                    "end": 2385
                                  },
                                  "consequent": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 2388,
                                    "end": 2389
                                  },
                                  "alternate": {
                                    "type": "UnaryExpression",
                                    "operator": "-",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "size",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2393,
                                      "end": 2397
                                    },
                                    "prefix": true,
                                    "start": 2392,
                                    "end": 2397
                                  },
                                  "start": 2375,
                                  "end": 2397
                                },
                                "start": 2359,
                                "end": 2397
                              },
                              "directive": null,
                              "start": 2359,
                              "end": 2398
                            }
                          ],
                          "start": 2341,
                          "end": 2412
                        },
                        "alternate": {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "rotation",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2422,
                              "end": 2430
                            },
                            "operator": "<",
                            "right": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Literal",
                                "value": 270,
                                "raw": "270",
                                "start": 2434,
                                "end": 2437
                              },
                              "operator": "-",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "centerAnchorLimit",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2440,
                                "end": 2457
                              },
                              "start": 2434,
                              "end": 2457
                            },
                            "start": 2422,
                            "end": 2458
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
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "labelOffset",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2478,
                                      "end": 2489
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2490,
                                      "end": 2491
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2478,
                                    "end": 2491
                                  },
                                  "right": {
                                    "type": "ConditionalExpression",
                                    "test": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "leftBottom",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2494,
                                      "end": 2504
                                    },
                                    "consequent": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0",
                                      "start": 2507,
                                      "end": 2508
                                    },
                                    "alternate": {
                                      "type": "UnaryExpression",
                                      "operator": "-",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "size",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2512,
                                        "end": 2516
                                      },
                                      "prefix": true,
                                      "start": 2511,
                                      "end": 2516
                                    },
                                    "start": 2494,
                                    "end": 2516
                                  },
                                  "start": 2478,
                                  "end": 2516
                                },
                                "directive": null,
                                "start": 2478,
                                "end": 2517
                              }
                            ],
                            "start": 2460,
                            "end": 2531
                          },
                          "alternate": {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "rotation",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2541,
                                "end": 2549
                              },
                              "operator": "<",
                              "right": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Literal",
                                  "value": 270,
                                  "raw": "270",
                                  "start": 2553,
                                  "end": 2556
                                },
                                "operator": "+",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "centerAnchorLimit",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2559,
                                  "end": 2576
                                },
                                "start": 2553,
                                "end": 2576
                              },
                              "start": 2541,
                              "end": 2577
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
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "labelOffset",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2597,
                                        "end": 2608
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2609,
                                        "end": 2610
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2597,
                                      "end": 2610
                                    },
                                    "right": {
                                      "type": "ConditionalExpression",
                                      "test": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "leftBottom",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2613,
                                        "end": 2623
                                      },
                                      "consequent": {
                                        "type": "BinaryExpression",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "size",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2626,
                                          "end": 2630
                                        },
                                        "operator": "*",
                                        "right": {
                                          "type": "Literal",
                                          "value": 0.4,
                                          "raw": "0.4",
                                          "start": 2633,
                                          "end": 2636
                                        },
                                        "start": 2626,
                                        "end": 2636
                                      },
                                      "alternate": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0",
                                        "start": 2639,
                                        "end": 2640
                                      },
                                      "start": 2613,
                                      "end": 2640
                                    },
                                    "start": 2597,
                                    "end": 2640
                                  },
                                  "directive": null,
                                  "start": 2597,
                                  "end": 2641
                                }
                              ],
                              "start": 2579,
                              "end": 2655
                            },
                            "alternate": {
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
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "labelOffset",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2679,
                                        "end": 2690
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2691,
                                        "end": 2692
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2679,
                                      "end": 2692
                                    },
                                    "right": {
                                      "type": "ConditionalExpression",
                                      "test": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "leftBottom",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2695,
                                        "end": 2705
                                      },
                                      "consequent": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "size",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2708,
                                        "end": 2712
                                      },
                                      "alternate": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0",
                                        "start": 2715,
                                        "end": 2716
                                      },
                                      "start": 2695,
                                      "end": 2716
                                    },
                                    "start": 2679,
                                    "end": 2716
                                  },
                                  "directive": null,
                                  "start": 2679,
                                  "end": 2717
                                }
                              ],
                              "start": 2661,
                              "end": 2731
                            },
                            "start": 2537,
                            "end": 2731
                          },
                          "start": 2418,
                          "end": 2731
                        },
                        "start": 2321,
                        "end": 2731
                      },
                      "start": 2214,
                      "end": 2731
                    },
                    "start": 2097,
                    "end": 2731
                  }
                ],
                "start": 2076,
                "end": 2731
              }
            ],
            "start": 2048,
            "end": 2737
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "titleRotation",
                "optional": false,
                "typeAnnotation": null,
                "start": 2743,
                "end": 2756
              },
              "right": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "taTitleOrientation",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2760,
                    "end": 2778
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "taTitleOrientation",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2782,
                      "end": 2800
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": "away",
                      "raw": "\"away\"",
                      "start": 2804,
                      "end": 2810
                    },
                    "start": 2782,
                    "end": 2810
                  },
                  "start": 2760,
                  "end": 2810
                },
                "consequent": {
                  "type": "Literal",
                  "value": 180,
                  "raw": "180",
                  "start": 2814,
                  "end": 2817
                },
                "alternate": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 2820,
                  "end": 2821
                },
                "start": 2759,
                "end": 2821
              },
              "start": 2743,
              "end": 2821
            },
            "directive": null,
            "start": 2743,
            "end": 2822
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
                  "name": "titlePos",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2827,
                  "end": 2835
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2836,
                  "end": 2837
                },
                "optional": false,
                "computed": false,
                "start": 2827,
                "end": 2837
              },
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "offsets",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2840,
                      "end": 2847
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2848,
                      "end": 2849
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2840,
                    "end": 2849
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "titleOffset",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2852,
                    "end": 2863
                  },
                  "start": 2840,
                  "end": 2863
                },
                "operator": "+",
                "right": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "titleRotation",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2867,
                    "end": 2880
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2883,
                    "end": 2884
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tsize",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2887,
                    "end": 2892
                  },
                  "start": 2867,
                  "end": 2892
                },
                "start": 2840,
                "end": 2893
              },
              "start": 2827,
              "end": 2893
            },
            "directive": null,
            "start": 2827,
            "end": 2894
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "labelAlign",
              "optional": false,
              "typeAnnotation": null,
              "start": 2907,
              "end": 2917
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "start",
                  "raw": "\"start\"",
                  "start": 2934,
                  "end": 2941
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "labelAlign",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2955,
                        "end": 2965
                      },
                      "right": {
                        "type": "Literal",
                        "value": "end",
                        "raw": "\"end\"",
                        "start": 2968,
                        "end": 2973
                      },
                      "start": 2955,
                      "end": 2973
                    },
                    "directive": null,
                    "start": 2955,
                    "end": 2974
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2987,
                    "end": 2993
                  }
                ],
                "start": 2929,
                "end": 2993
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "end",
                  "raw": "\"end\"",
                  "start": 3007,
                  "end": 3012
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "labelAlign",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3026,
                        "end": 3036
                      },
                      "right": {
                        "type": "Literal",
                        "value": "start",
                        "raw": "\"start\"",
                        "start": 3039,
                        "end": 3046
                      },
                      "start": 3026,
                      "end": 3046
                    },
                    "directive": null,
                    "start": 3026,
                    "end": 3047
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3060,
                    "end": 3066
                  }
                ],
                "start": 3002,
                "end": 3066
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "middle",
                  "raw": "\"middle\"",
                  "start": 3080,
                  "end": 3088
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "labelOffset",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3102,
                          "end": 3113
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3114,
                          "end": 3115
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3102,
                        "end": 3115
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "size",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3119,
                        "end": 3123
                      },
                      "start": 3102,
                      "end": 3123
                    },
                    "directive": null,
                    "start": 3102,
                    "end": 3124
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3137,
                    "end": 3143
                  }
                ],
                "start": 3075,
                "end": 3143
              }
            ],
            "start": 2899,
            "end": 3149
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
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3159,
                  "end": 3160
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rotation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3163,
                  "end": 3171
                },
                "definite": false,
                "start": 3159,
                "end": 3171
              }
            ],
            "declare": false,
            "start": 3155,
            "end": 3172
          }
        ],
        "start": 91,
        "end": 3174
      },
      "expression": false,
      "start": 20,
      "end": 3174
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 20,
  "end": 3174
}
```
