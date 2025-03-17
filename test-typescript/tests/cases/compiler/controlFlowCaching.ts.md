__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 3175,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 20,
      "end": 3174,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 31,
          "end": 34,
          "name": "dim",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 36,
          "end": 43,
          "name": "offsets",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 45,
          "end": 48,
          "name": "arr",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 50,
          "end": 57,
          "name": "acommon",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 59,
          "end": 76,
          "name": "centerAnchorLimit",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 78,
          "end": 79,
          "name": "g",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 81,
          "end": 84,
          "name": "has",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 86,
          "end": 89,
          "name": "lin",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 91,
        "end": 3174,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 97,
            "end": 123,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 101,
                "end": 122,
                "id": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 106,
                  "name": "isRtl",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 109,
                  "end": 122,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 109,
                    "end": 120,
                    "object": {
                      "type": "ThisExpression",
                      "start": 109,
                      "end": 113
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 114,
                      "end": 120,
                      "name": "_isRtl",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 172,
            "end": 1595,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 176,
                "end": 188,
                "id": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 177,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 180,
                  "end": 188,
                  "object": {
                    "type": "ThisExpression",
                    "start": 180,
                    "end": 184
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 188,
                    "name": "opt",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 190,
                "end": 216,
                "id": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 192,
                  "name": "ta",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 195,
                  "end": 216,
                  "object": {
                    "type": "MemberExpression",
                    "start": 195,
                    "end": 211,
                    "object": {
                      "type": "MemberExpression",
                      "start": 195,
                      "end": 205,
                      "object": {
                        "type": "ThisExpression",
                        "start": 195,
                        "end": 199
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 200,
                        "end": 205,
                        "name": "chart",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 206,
                      "end": 211,
                      "name": "theme",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 216,
                    "name": "axis",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 218,
                "end": 239,
                "id": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 226,
                  "name": "position",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 229,
                  "end": 239,
                  "object": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 230,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 239,
                    "name": "position",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 249,
                "end": 287,
                "id": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 259,
                  "name": "leftBottom",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 262,
                  "end": 287,
                  "left": {
                    "type": "Identifier",
                    "start": 262,
                    "end": 270,
                    "name": "position",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "start": 275,
                    "end": 287,
                    "value": "rightOrTop",
                    "raw": "\"rightOrTop\""
                  }
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 289,
                "end": 316,
                "id": {
                  "type": "Identifier",
                  "start": 289,
                  "end": 297,
                  "name": "rotation",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 300,
                  "end": 316,
                  "left": {
                    "type": "MemberExpression",
                    "start": 300,
                    "end": 310,
                    "object": {
                      "type": "Identifier",
                      "start": 300,
                      "end": 301,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 302,
                      "end": 310,
                      "name": "rotation",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "operator": "%",
                  "right": {
                    "type": "Literal",
                    "start": 313,
                    "end": 316,
                    "value": 360,
                    "raw": "360"
                  }
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 326,
                "end": 331,
                "id": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 331,
                  "name": "start",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 333,
                "end": 337,
                "id": {
                  "type": "Identifier",
                  "start": 333,
                  "end": 337,
                  "name": "stop",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 339,
                "end": 347,
                "id": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 347,
                  "name": "titlePos",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 349,
                "end": 366,
                "id": {
                  "type": "Identifier",
                  "start": 349,
                  "end": 362,
                  "name": "titleRotation",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 365,
                  "end": 366,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 368,
                "end": 379,
                "id": {
                  "type": "Identifier",
                  "start": 368,
                  "end": 379,
                  "name": "titleOffset",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 381,
                "end": 391,
                "id": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 391,
                  "name": "axisVector",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 393,
                "end": 403,
                "id": {
                  "type": "Identifier",
                  "start": 393,
                  "end": 403,
                  "name": "tickVector",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 405,
                "end": 417,
                "id": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 417,
                  "name": "anchorOffset",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 419,
                "end": 430,
                "id": {
                  "type": "Identifier",
                  "start": 419,
                  "end": 430,
                  "name": "labelOffset",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 432,
                "end": 442,
                "id": {
                  "type": "Identifier",
                  "start": 432,
                  "end": 442,
                  "name": "labelAlign",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 452,
                "end": 498,
                "id": {
                  "type": "Identifier",
                  "start": 452,
                  "end": 460,
                  "name": "labelGap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 463,
                  "end": 498,
                  "object": {
                    "type": "MemberExpression",
                    "start": 463,
                    "end": 489,
                    "object": {
                      "type": "MemberExpression",
                      "start": 463,
                      "end": 484,
                      "object": {
                        "type": "MemberExpression",
                        "start": 463,
                        "end": 479,
                        "object": {
                          "type": "MemberExpression",
                          "start": 463,
                          "end": 473,
                          "object": {
                            "type": "ThisExpression",
                            "start": 463,
                            "end": 467
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 468,
                            "end": 473,
                            "name": "chart",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 474,
                          "end": 479,
                          "name": "theme",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 480,
                        "end": 484,
                        "name": "axis",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 485,
                      "end": 489,
                      "name": "tick",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 490,
                    "end": 498,
                    "name": "labelGap",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 508,
                "end": 591,
                "id": {
                  "type": "Identifier",
                  "start": 508,
                  "end": 514,
                  "name": "taFont",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 517,
                  "end": 591,
                  "left": {
                    "type": "LogicalExpression",
                    "start": 517,
                    "end": 562,
                    "left": {
                      "type": "MemberExpression",
                      "start": 517,
                      "end": 523,
                      "object": {
                        "type": "Identifier",
                        "start": 517,
                        "end": 518,
                        "name": "o",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 519,
                        "end": 523,
                        "name": "font",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "operator": "||",
                    "right": {
                      "type": "LogicalExpression",
                      "start": 528,
                      "end": 561,
                      "left": {
                        "type": "MemberExpression",
                        "start": 528,
                        "end": 540,
                        "object": {
                          "type": "Identifier",
                          "start": 528,
                          "end": 530,
                          "name": "ta",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 531,
                          "end": 540,
                          "name": "majorTick",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "start": 544,
                        "end": 561,
                        "object": {
                          "type": "MemberExpression",
                          "start": 544,
                          "end": 556,
                          "object": {
                            "type": "Identifier",
                            "start": 544,
                            "end": 546,
                            "name": "ta",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 547,
                            "end": 556,
                            "name": "majorTick",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 557,
                          "end": 561,
                          "name": "font",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    }
                  },
                  "operator": "||",
                  "right": {
                    "type": "LogicalExpression",
                    "start": 567,
                    "end": 590,
                    "left": {
                      "type": "MemberExpression",
                      "start": 567,
                      "end": 574,
                      "object": {
                        "type": "Identifier",
                        "start": 567,
                        "end": 569,
                        "name": "ta",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 570,
                        "end": 574,
                        "name": "tick",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "operator": "&&",
                    "right": {
                      "type": "MemberExpression",
                      "start": 578,
                      "end": 590,
                      "object": {
                        "type": "MemberExpression",
                        "start": 578,
                        "end": 585,
                        "object": {
                          "type": "Identifier",
                          "start": 578,
                          "end": 580,
                          "name": "ta",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 581,
                          "end": 585,
                          "name": "tick",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 586,
                        "end": 590,
                        "name": "font",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 601,
                "end": 657,
                "id": {
                  "type": "Identifier",
                  "start": 601,
                  "end": 612,
                  "name": "taTitleFont",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 615,
                  "end": 657,
                  "left": {
                    "type": "MemberExpression",
                    "start": 615,
                    "end": 626,
                    "object": {
                      "type": "Identifier",
                      "start": 615,
                      "end": 616,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 617,
                      "end": 626,
                      "name": "titleFont",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "LogicalExpression",
                    "start": 631,
                    "end": 656,
                    "left": {
                      "type": "MemberExpression",
                      "start": 631,
                      "end": 639,
                      "object": {
                        "type": "Identifier",
                        "start": 631,
                        "end": 633,
                        "name": "ta",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 634,
                        "end": 639,
                        "name": "title",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "operator": "&&",
                    "right": {
                      "type": "MemberExpression",
                      "start": 643,
                      "end": 656,
                      "object": {
                        "type": "MemberExpression",
                        "start": 643,
                        "end": 651,
                        "object": {
                          "type": "Identifier",
                          "start": 643,
                          "end": 645,
                          "name": "ta",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 646,
                          "end": 651,
                          "name": "title",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 652,
                        "end": 656,
                        "name": "font",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 667,
                "end": 781,
                "id": {
                  "type": "Identifier",
                  "start": 667,
                  "end": 678,
                  "name": "taFontColor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 681,
                  "end": 781,
                  "left": {
                    "type": "LogicalExpression",
                    "start": 681,
                    "end": 770,
                    "left": {
                      "type": "LogicalExpression",
                      "start": 681,
                      "end": 736,
                      "left": {
                        "type": "MemberExpression",
                        "start": 681,
                        "end": 692,
                        "object": {
                          "type": "Identifier",
                          "start": 681,
                          "end": 682,
                          "name": "o",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 683,
                          "end": 692,
                          "name": "fontColor",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "||",
                      "right": {
                        "type": "LogicalExpression",
                        "start": 697,
                        "end": 735,
                        "left": {
                          "type": "MemberExpression",
                          "start": 697,
                          "end": 709,
                          "object": {
                            "type": "Identifier",
                            "start": 697,
                            "end": 699,
                            "name": "ta",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 700,
                            "end": 709,
                            "name": "majorTick",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 713,
                          "end": 735,
                          "object": {
                            "type": "MemberExpression",
                            "start": 713,
                            "end": 725,
                            "object": {
                              "type": "Identifier",
                              "start": 713,
                              "end": 715,
                              "name": "ta",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 716,
                              "end": 725,
                              "name": "majorTick",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 726,
                            "end": 735,
                            "name": "fontColor",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      }
                    },
                    "operator": "||",
                    "right": {
                      "type": "LogicalExpression",
                      "start": 741,
                      "end": 769,
                      "left": {
                        "type": "MemberExpression",
                        "start": 741,
                        "end": 748,
                        "object": {
                          "type": "Identifier",
                          "start": 741,
                          "end": 743,
                          "name": "ta",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 744,
                          "end": 748,
                          "name": "tick",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "start": 752,
                        "end": 769,
                        "object": {
                          "type": "MemberExpression",
                          "start": 752,
                          "end": 759,
                          "object": {
                            "type": "Identifier",
                            "start": 752,
                            "end": 754,
                            "name": "ta",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 755,
                            "end": 759,
                            "name": "tick",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 760,
                          "end": 769,
                          "name": "fontColor",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    }
                  },
                  "operator": "||",
                  "right": {
                    "type": "Literal",
                    "start": 774,
                    "end": 781,
                    "value": "black",
                    "raw": "\"black\""
                  }
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 791,
                "end": 873,
                "id": {
                  "type": "Identifier",
                  "start": 791,
                  "end": 807,
                  "name": "taTitleFontColor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 810,
                  "end": 873,
                  "left": {
                    "type": "LogicalExpression",
                    "start": 810,
                    "end": 862,
                    "left": {
                      "type": "MemberExpression",
                      "start": 810,
                      "end": 826,
                      "object": {
                        "type": "Identifier",
                        "start": 810,
                        "end": 811,
                        "name": "o",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 812,
                        "end": 826,
                        "name": "titleFontColor",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "operator": "||",
                    "right": {
                      "type": "LogicalExpression",
                      "start": 831,
                      "end": 861,
                      "left": {
                        "type": "MemberExpression",
                        "start": 831,
                        "end": 839,
                        "object": {
                          "type": "Identifier",
                          "start": 831,
                          "end": 833,
                          "name": "ta",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 834,
                          "end": 839,
                          "name": "title",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "start": 843,
                        "end": 861,
                        "object": {
                          "type": "MemberExpression",
                          "start": 843,
                          "end": 851,
                          "object": {
                            "type": "Identifier",
                            "start": 843,
                            "end": 845,
                            "name": "ta",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 846,
                            "end": 851,
                            "name": "title",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 852,
                          "end": 861,
                          "name": "fontColor",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    }
                  },
                  "operator": "||",
                  "right": {
                    "type": "Literal",
                    "start": 866,
                    "end": 873,
                    "value": "black",
                    "raw": "\"black\""
                  }
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 883,
                "end": 966,
                "id": {
                  "type": "Identifier",
                  "start": 883,
                  "end": 893,
                  "name": "taTitleGap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 896,
                  "end": 966,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 897,
                    "end": 912,
                    "left": {
                      "type": "MemberExpression",
                      "start": 897,
                      "end": 907,
                      "object": {
                        "type": "Identifier",
                        "start": 897,
                        "end": 898,
                        "name": "o",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 899,
                        "end": 907,
                        "name": "titleGap",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 911,
                      "end": 912,
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 916,
                    "end": 917,
                    "value": 0,
                    "raw": "0"
                  },
                  "alternate": {
                    "type": "LogicalExpression",
                    "start": 920,
                    "end": 966,
                    "left": {
                      "type": "LogicalExpression",
                      "start": 920,
                      "end": 960,
                      "left": {
                        "type": "MemberExpression",
                        "start": 920,
                        "end": 930,
                        "object": {
                          "type": "Identifier",
                          "start": 920,
                          "end": 921,
                          "name": "o",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 922,
                          "end": 930,
                          "name": "titleGap",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "||",
                      "right": {
                        "type": "LogicalExpression",
                        "start": 935,
                        "end": 959,
                        "left": {
                          "type": "MemberExpression",
                          "start": 935,
                          "end": 943,
                          "object": {
                            "type": "Identifier",
                            "start": 935,
                            "end": 937,
                            "name": "ta",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 938,
                            "end": 943,
                            "name": "title",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "operator": "&&",
                        "right": {
                          "type": "MemberExpression",
                          "start": 947,
                          "end": 959,
                          "object": {
                            "type": "MemberExpression",
                            "start": 947,
                            "end": 955,
                            "object": {
                              "type": "Identifier",
                              "start": 947,
                              "end": 949,
                              "name": "ta",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 950,
                              "end": 955,
                              "name": "title",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 956,
                            "end": 959,
                            "name": "gap",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      }
                    },
                    "operator": "||",
                    "right": {
                      "type": "Literal",
                      "start": 964,
                      "end": 966,
                      "value": 15,
                      "raw": "15"
                    }
                  }
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 976,
                "end": 1063,
                "id": {
                  "type": "Identifier",
                  "start": 976,
                  "end": 994,
                  "name": "taTitleOrientation",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 997,
                  "end": 1063,
                  "left": {
                    "type": "LogicalExpression",
                    "start": 997,
                    "end": 1053,
                    "left": {
                      "type": "MemberExpression",
                      "start": 997,
                      "end": 1015,
                      "object": {
                        "type": "Identifier",
                        "start": 997,
                        "end": 998,
                        "name": "o",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 999,
                        "end": 1015,
                        "name": "titleOrientation",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "operator": "||",
                    "right": {
                      "type": "LogicalExpression",
                      "start": 1020,
                      "end": 1052,
                      "left": {
                        "type": "MemberExpression",
                        "start": 1020,
                        "end": 1028,
                        "object": {
                          "type": "Identifier",
                          "start": 1020,
                          "end": 1022,
                          "name": "ta",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1023,
                          "end": 1028,
                          "name": "title",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "start": 1032,
                        "end": 1052,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1032,
                          "end": 1040,
                          "object": {
                            "type": "Identifier",
                            "start": 1032,
                            "end": 1034,
                            "name": "ta",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1035,
                            "end": 1040,
                            "name": "title",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1041,
                          "end": 1052,
                          "name": "orientation",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    }
                  },
                  "operator": "||",
                  "right": {
                    "type": "Literal",
                    "start": 1057,
                    "end": 1063,
                    "value": "axis",
                    "raw": "\"axis\""
                  }
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 1073,
                "end": 1123,
                "id": {
                  "type": "Identifier",
                  "start": 1073,
                  "end": 1084,
                  "name": "taMajorTick",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1087,
                  "end": 1123,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1087,
                    "end": 1111,
                    "object": {
                      "type": "MemberExpression",
                      "start": 1087,
                      "end": 1103,
                      "object": {
                        "type": "MemberExpression",
                        "start": 1087,
                        "end": 1097,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1087,
                          "end": 1091
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1092,
                          "end": 1097,
                          "name": "chart",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1098,
                        "end": 1103,
                        "name": "theme",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1104,
                      "end": 1111,
                      "name": "getTick",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1112,
                      "end": 1119,
                      "value": "major",
                      "raw": "\"major\""
                    },
                    {
                      "type": "Identifier",
                      "start": 1121,
                      "end": 1122,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 1133,
                "end": 1183,
                "id": {
                  "type": "Identifier",
                  "start": 1133,
                  "end": 1144,
                  "name": "taMinorTick",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1147,
                  "end": 1183,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1147,
                    "end": 1171,
                    "object": {
                      "type": "MemberExpression",
                      "start": 1147,
                      "end": 1163,
                      "object": {
                        "type": "MemberExpression",
                        "start": 1147,
                        "end": 1157,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1147,
                          "end": 1151
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1152,
                          "end": 1157,
                          "name": "chart",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1158,
                        "end": 1163,
                        "name": "theme",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1164,
                      "end": 1171,
                      "name": "getTick",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1172,
                      "end": 1179,
                      "value": "minor",
                      "raw": "\"minor\""
                    },
                    {
                      "type": "Identifier",
                      "start": 1181,
                      "end": 1182,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 1193,
                "end": 1243,
                "id": {
                  "type": "Identifier",
                  "start": 1193,
                  "end": 1204,
                  "name": "taMicroTick",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1207,
                  "end": 1243,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1207,
                    "end": 1231,
                    "object": {
                      "type": "MemberExpression",
                      "start": 1207,
                      "end": 1223,
                      "object": {
                        "type": "MemberExpression",
                        "start": 1207,
                        "end": 1217,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1207,
                          "end": 1211
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1212,
                          "end": 1217,
                          "name": "chart",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1218,
                        "end": 1223,
                        "name": "theme",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1224,
                      "end": 1231,
                      "name": "getTick",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1232,
                      "end": 1239,
                      "value": "micro",
                      "raw": "\"micro\""
                    },
                    {
                      "type": "Identifier",
                      "start": 1241,
                      "end": 1242,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 1254,
                "end": 1301,
                "id": {
                  "type": "Identifier",
                  "start": 1254,
                  "end": 1262,
                  "name": "taStroke",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1265,
                  "end": 1301,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1265,
                    "end": 1278,
                    "left": {
                      "type": "Literal",
                      "start": 1265,
                      "end": 1273,
                      "value": "stroke",
                      "raw": "\"stroke\""
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "start": 1277,
                      "end": 1278,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "consequent": {
                    "type": "MemberExpression",
                    "start": 1281,
                    "end": 1289,
                    "object": {
                      "type": "Identifier",
                      "start": 1281,
                      "end": 1282,
                      "name": "o",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1283,
                      "end": 1289,
                      "name": "stroke",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "alternate": {
                    "type": "MemberExpression",
                    "start": 1292,
                    "end": 1301,
                    "object": {
                      "type": "Identifier",
                      "start": 1292,
                      "end": 1294,
                      "name": "ta",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1295,
                      "end": 1301,
                      "name": "stroke",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 1311,
                "end": 1381,
                "id": {
                  "type": "Identifier",
                  "start": 1311,
                  "end": 1315,
                  "name": "size",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1318,
                  "end": 1381,
                  "test": {
                    "type": "Identifier",
                    "start": 1318,
                    "end": 1324,
                    "name": "taFont",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "CallExpression",
                    "start": 1327,
                    "end": 1377,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1327,
                      "end": 1345,
                      "object": {
                        "type": "Identifier",
                        "start": 1327,
                        "end": 1328,
                        "name": "g",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1329,
                        "end": 1345,
                        "name": "normalizedLength",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 1346,
                        "end": 1376,
                        "object": {
                          "type": "CallExpression",
                          "start": 1346,
                          "end": 1371,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1346,
                            "end": 1363,
                            "object": {
                              "type": "Identifier",
                              "start": 1346,
                              "end": 1347,
                              "name": "g",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1348,
                              "end": 1363,
                              "name": "splitFontString",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1364,
                              "end": 1370,
                              "name": "taFont",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1372,
                          "end": 1376,
                          "name": "size",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 1380,
                    "end": 1381,
                    "value": 0,
                    "raw": "0"
                  }
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 1391,
                "end": 1442,
                "id": {
                  "type": "Identifier",
                  "start": 1391,
                  "end": 1395,
                  "name": "cosr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1398,
                  "end": 1442,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1398,
                    "end": 1406,
                    "object": {
                      "type": "Identifier",
                      "start": 1398,
                      "end": 1402,
                      "name": "Math",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1403,
                      "end": 1406,
                      "name": "abs",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1407,
                      "end": 1441,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1407,
                        "end": 1415,
                        "object": {
                          "type": "Identifier",
                          "start": 1407,
                          "end": 1411,
                          "name": "Math",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1412,
                          "end": 1415,
                          "name": "cos",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "start": 1416,
                          "end": 1440,
                          "left": {
                            "type": "BinaryExpression",
                            "start": 1416,
                            "end": 1434,
                            "left": {
                              "type": "Identifier",
                              "start": 1416,
                              "end": 1424,
                              "name": "rotation",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "*",
                            "right": {
                              "type": "MemberExpression",
                              "start": 1427,
                              "end": 1434,
                              "object": {
                                "type": "Identifier",
                                "start": 1427,
                                "end": 1431,
                                "name": "Math",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1432,
                                "end": 1434,
                                "name": "PI",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          },
                          "operator": "/",
                          "right": {
                            "type": "Literal",
                            "start": 1437,
                            "end": 1440,
                            "value": 180,
                            "raw": "180"
                          }
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 1452,
                "end": 1503,
                "id": {
                  "type": "Identifier",
                  "start": 1452,
                  "end": 1456,
                  "name": "sinr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1459,
                  "end": 1503,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1459,
                    "end": 1467,
                    "object": {
                      "type": "Identifier",
                      "start": 1459,
                      "end": 1463,
                      "name": "Math",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1464,
                      "end": 1467,
                      "name": "abs",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1468,
                      "end": 1502,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1468,
                        "end": 1476,
                        "object": {
                          "type": "Identifier",
                          "start": 1468,
                          "end": 1472,
                          "name": "Math",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1473,
                          "end": 1476,
                          "name": "sin",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "start": 1477,
                          "end": 1501,
                          "left": {
                            "type": "BinaryExpression",
                            "start": 1477,
                            "end": 1495,
                            "left": {
                              "type": "Identifier",
                              "start": 1477,
                              "end": 1485,
                              "name": "rotation",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "*",
                            "right": {
                              "type": "MemberExpression",
                              "start": 1488,
                              "end": 1495,
                              "object": {
                                "type": "Identifier",
                                "start": 1488,
                                "end": 1492,
                                "name": "Math",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1493,
                                "end": 1495,
                                "name": "PI",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          },
                          "operator": "/",
                          "right": {
                            "type": "Literal",
                            "start": 1498,
                            "end": 1501,
                            "value": 180,
                            "raw": "180"
                          }
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 1513,
                "end": 1594,
                "id": {
                  "type": "Identifier",
                  "start": 1513,
                  "end": 1518,
                  "name": "tsize",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1521,
                  "end": 1594,
                  "test": {
                    "type": "Identifier",
                    "start": 1521,
                    "end": 1532,
                    "name": "taTitleFont",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "CallExpression",
                    "start": 1535,
                    "end": 1590,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1535,
                      "end": 1553,
                      "object": {
                        "type": "Identifier",
                        "start": 1535,
                        "end": 1536,
                        "name": "g",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1537,
                        "end": 1553,
                        "name": "normalizedLength",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 1554,
                        "end": 1589,
                        "object": {
                          "type": "CallExpression",
                          "start": 1554,
                          "end": 1584,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1554,
                            "end": 1571,
                            "object": {
                              "type": "Identifier",
                              "start": 1554,
                              "end": 1555,
                              "name": "g",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1556,
                              "end": 1571,
                              "name": "splitFontString",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1572,
                              "end": 1583,
                              "name": "taTitleFont",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1585,
                          "end": 1589,
                          "name": "size",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 1593,
                    "end": 1594,
                    "value": 0,
                    "raw": "0"
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 1600,
            "end": 1650,
            "test": {
              "type": "BinaryExpression",
              "start": 1604,
              "end": 1616,
              "left": {
                "type": "Identifier",
                "start": 1604,
                "end": 1612,
                "name": "rotation",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 1615,
                "end": 1616,
                "value": 0,
                "raw": "0"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1618,
              "end": 1650,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1628,
                  "end": 1644,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1628,
                    "end": 1643,
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "start": 1628,
                      "end": 1636,
                      "name": "rotation",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1640,
                      "end": 1643,
                      "value": 360,
                      "raw": "360"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1655,
            "end": 1698,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1659,
                "end": 1697,
                "id": {
                  "type": "Identifier",
                  "start": 1659,
                  "end": 1671,
                  "name": "cachedLabelW",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1674,
                  "end": 1697,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1674,
                    "end": 1695,
                    "object": {
                      "type": "ThisExpression",
                      "start": 1674,
                      "end": 1678
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1679,
                      "end": 1695,
                      "name": "_getMaxLabelSize",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1703,
            "end": 1757,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1703,
              "end": 1756,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1703,
                "end": 1715,
                "name": "cachedLabelW",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "LogicalExpression",
                "start": 1718,
                "end": 1756,
                "left": {
                  "type": "Identifier",
                  "start": 1718,
                  "end": 1730,
                  "name": "cachedLabelW",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "start": 1734,
                  "end": 1756,
                  "object": {
                    "type": "Identifier",
                    "start": 1734,
                    "end": 1746,
                    "name": "cachedLabelW",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1747,
                    "end": 1756,
                    "name": "majLabelW",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1762,
            "end": 1974,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1762,
              "end": 1973,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1762,
                "end": 1773,
                "name": "titleOffset",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 1776,
                "end": 1973,
                "left": {
                  "type": "BinaryExpression",
                  "start": 1776,
                  "end": 1960,
                  "left": {
                    "type": "BinaryExpression",
                    "start": 1776,
                    "end": 1944,
                    "left": {
                      "type": "BinaryExpression",
                      "start": 1776,
                      "end": 1827,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 1776,
                        "end": 1816,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 1776,
                          "end": 1787,
                          "left": {
                            "type": "Identifier",
                            "start": 1776,
                            "end": 1780,
                            "name": "size",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "*",
                          "right": {
                            "type": "Identifier",
                            "start": 1783,
                            "end": 1787,
                            "name": "cosr",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "operator": "+",
                        "right": {
                          "type": "BinaryExpression",
                          "start": 1790,
                          "end": 1816,
                          "left": {
                            "type": "LogicalExpression",
                            "start": 1791,
                            "end": 1808,
                            "left": {
                              "type": "Identifier",
                              "start": 1791,
                              "end": 1803,
                              "name": "cachedLabelW",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "||",
                            "right": {
                              "type": "Literal",
                              "start": 1807,
                              "end": 1808,
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "operator": "*",
                          "right": {
                            "type": "Identifier",
                            "start": 1812,
                            "end": 1816,
                            "name": "sinr",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1819,
                        "end": 1827,
                        "name": "labelGap",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "+",
                    "right": {
                      "type": "CallExpression",
                      "start": 1830,
                      "end": 1944,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1830,
                        "end": 1838,
                        "object": {
                          "type": "Identifier",
                          "start": 1830,
                          "end": 1834,
                          "name": "Math",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1835,
                          "end": 1838,
                          "name": "max",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ConditionalExpression",
                          "start": 1839,
                          "end": 1886,
                          "test": {
                            "type": "BinaryExpression",
                            "start": 1839,
                            "end": 1861,
                            "left": {
                              "type": "MemberExpression",
                              "start": 1839,
                              "end": 1857,
                              "object": {
                                "type": "Identifier",
                                "start": 1839,
                                "end": 1850,
                                "name": "taMajorTick",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1851,
                                "end": 1857,
                                "name": "length",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "operator": ">",
                            "right": {
                              "type": "Literal",
                              "start": 1860,
                              "end": 1861,
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "consequent": {
                            "type": "MemberExpression",
                            "start": 1864,
                            "end": 1882,
                            "object": {
                              "type": "Identifier",
                              "start": 1864,
                              "end": 1875,
                              "name": "taMajorTick",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1876,
                              "end": 1882,
                              "name": "length",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "alternate": {
                            "type": "Literal",
                            "start": 1885,
                            "end": 1886,
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        {
                          "type": "ConditionalExpression",
                          "start": 1896,
                          "end": 1943,
                          "test": {
                            "type": "BinaryExpression",
                            "start": 1896,
                            "end": 1918,
                            "left": {
                              "type": "MemberExpression",
                              "start": 1896,
                              "end": 1914,
                              "object": {
                                "type": "Identifier",
                                "start": 1896,
                                "end": 1907,
                                "name": "taMinorTick",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1908,
                                "end": 1914,
                                "name": "length",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "operator": ">",
                            "right": {
                              "type": "Literal",
                              "start": 1917,
                              "end": 1918,
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "consequent": {
                            "type": "MemberExpression",
                            "start": 1921,
                            "end": 1939,
                            "object": {
                              "type": "Identifier",
                              "start": 1921,
                              "end": 1932,
                              "name": "taMinorTick",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1933,
                              "end": 1939,
                              "name": "length",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "alternate": {
                            "type": "Literal",
                            "start": 1942,
                            "end": 1943,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 1955,
                    "end": 1960,
                    "name": "tsize",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 1963,
                  "end": 1973,
                  "name": "taTitleGap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1979,
            "end": 2020,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1979,
              "end": 2019,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1979,
                "end": 1989,
                "name": "axisVector",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ObjectExpression",
                "start": 1992,
                "end": 2019,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1994,
                    "end": 2011,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1994,
                      "end": 1995,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ConditionalExpression",
                      "start": 1997,
                      "end": 2011,
                      "test": {
                        "type": "Identifier",
                        "start": 1997,
                        "end": 2002,
                        "name": "isRtl",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "consequent": {
                        "type": "UnaryExpression",
                        "start": 2005,
                        "end": 2007,
                        "operator": "-",
                        "prefix": true,
                        "argument": {
                          "type": "Literal",
                          "start": 2006,
                          "end": 2007,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "alternate": {
                        "type": "Literal",
                        "start": 2010,
                        "end": 2011,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2013,
                    "end": 2017,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2013,
                      "end": 2014,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2016,
                      "end": 2017,
                      "value": 0,
                      "raw": "0"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "SwitchStatement",
            "start": 2048,
            "end": 2737,
            "discriminant": {
              "type": "Identifier",
              "start": 2056,
              "end": 2064,
              "name": "rotation",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2076,
                "end": 2731,
                "consequent": [
                  {
                    "type": "IfStatement",
                    "start": 2097,
                    "end": 2731,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 2101,
                      "end": 2136,
                      "left": {
                        "type": "Identifier",
                        "start": 2101,
                        "end": 2109,
                        "name": "rotation",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "<",
                      "right": {
                        "type": "BinaryExpression",
                        "start": 2113,
                        "end": 2135,
                        "left": {
                          "type": "Literal",
                          "start": 2113,
                          "end": 2115,
                          "value": 90,
                          "raw": "90"
                        },
                        "operator": "-",
                        "right": {
                          "type": "Identifier",
                          "start": 2118,
                          "end": 2135,
                          "name": "centerAnchorLimit",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 2138,
                      "end": 2208,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 2156,
                          "end": 2194,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 2156,
                            "end": 2193,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 2156,
                              "end": 2169,
                              "object": {
                                "type": "Identifier",
                                "start": 2156,
                                "end": 2167,
                                "name": "labelOffset",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2168,
                                "end": 2169,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "right": {
                              "type": "ConditionalExpression",
                              "start": 2172,
                              "end": 2193,
                              "test": {
                                "type": "Identifier",
                                "start": 2172,
                                "end": 2182,
                                "name": "leftBottom",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "consequent": {
                                "type": "Identifier",
                                "start": 2185,
                                "end": 2189,
                                "name": "size",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "alternate": {
                                "type": "Literal",
                                "start": 2192,
                                "end": 2193,
                                "value": 0,
                                "raw": "0"
                              }
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": {
                      "type": "IfStatement",
                      "start": 2214,
                      "end": 2731,
                      "test": {
                        "type": "BinaryExpression",
                        "start": 2218,
                        "end": 2253,
                        "left": {
                          "type": "Identifier",
                          "start": 2218,
                          "end": 2226,
                          "name": "rotation",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "<",
                        "right": {
                          "type": "BinaryExpression",
                          "start": 2230,
                          "end": 2252,
                          "left": {
                            "type": "Literal",
                            "start": 2230,
                            "end": 2232,
                            "value": 90,
                            "raw": "90"
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "start": 2235,
                            "end": 2252,
                            "name": "centerAnchorLimit",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 2255,
                        "end": 2315,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 2273,
                            "end": 2301,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 2273,
                              "end": 2300,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 2273,
                                "end": 2286,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2273,
                                  "end": 2284,
                                  "name": "labelOffset",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2285,
                                  "end": 2286,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "start": 2289,
                                "end": 2300,
                                "left": {
                                  "type": "UnaryExpression",
                                  "start": 2289,
                                  "end": 2294,
                                  "operator": "-",
                                  "prefix": true,
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 2290,
                                    "end": 2294,
                                    "name": "size",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "operator": "*",
                                "right": {
                                  "type": "Literal",
                                  "start": 2297,
                                  "end": 2300,
                                  "value": 0.4,
                                  "raw": "0.4"
                                }
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
                      "alternate": {
                        "type": "IfStatement",
                        "start": 2321,
                        "end": 2731,
                        "test": {
                          "type": "BinaryExpression",
                          "start": 2325,
                          "end": 2339,
                          "left": {
                            "type": "Identifier",
                            "start": 2325,
                            "end": 2333,
                            "name": "rotation",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "<",
                          "right": {
                            "type": "Literal",
                            "start": 2336,
                            "end": 2339,
                            "value": 180,
                            "raw": "180"
                          }
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 2341,
                          "end": 2412,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 2359,
                              "end": 2398,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 2359,
                                "end": 2397,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 2359,
                                  "end": 2372,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 2359,
                                    "end": 2370,
                                    "name": "labelOffset",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 2371,
                                    "end": 2372,
                                    "name": "y",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "right": {
                                  "type": "ConditionalExpression",
                                  "start": 2375,
                                  "end": 2397,
                                  "test": {
                                    "type": "Identifier",
                                    "start": 2375,
                                    "end": 2385,
                                    "name": "leftBottom",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "consequent": {
                                    "type": "Literal",
                                    "start": 2388,
                                    "end": 2389,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "alternate": {
                                    "type": "UnaryExpression",
                                    "start": 2392,
                                    "end": 2397,
                                    "operator": "-",
                                    "prefix": true,
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 2393,
                                      "end": 2397,
                                      "name": "size",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  }
                                }
                              },
                              "directive": null
                            }
                          ]
                        },
                        "alternate": {
                          "type": "IfStatement",
                          "start": 2418,
                          "end": 2731,
                          "test": {
                            "type": "BinaryExpression",
                            "start": 2422,
                            "end": 2458,
                            "left": {
                              "type": "Identifier",
                              "start": 2422,
                              "end": 2430,
                              "name": "rotation",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "<",
                            "right": {
                              "type": "BinaryExpression",
                              "start": 2434,
                              "end": 2457,
                              "left": {
                                "type": "Literal",
                                "start": 2434,
                                "end": 2437,
                                "value": 270,
                                "raw": "270"
                              },
                              "operator": "-",
                              "right": {
                                "type": "Identifier",
                                "start": 2440,
                                "end": 2457,
                                "name": "centerAnchorLimit",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            }
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 2460,
                            "end": 2531,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 2478,
                                "end": 2517,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 2478,
                                  "end": 2516,
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 2478,
                                    "end": 2491,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 2478,
                                      "end": 2489,
                                      "name": "labelOffset",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 2490,
                                      "end": 2491,
                                      "name": "y",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "ConditionalExpression",
                                    "start": 2494,
                                    "end": 2516,
                                    "test": {
                                      "type": "Identifier",
                                      "start": 2494,
                                      "end": 2504,
                                      "name": "leftBottom",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "consequent": {
                                      "type": "Literal",
                                      "start": 2507,
                                      "end": 2508,
                                      "value": 0,
                                      "raw": "0"
                                    },
                                    "alternate": {
                                      "type": "UnaryExpression",
                                      "start": 2511,
                                      "end": 2516,
                                      "operator": "-",
                                      "prefix": true,
                                      "argument": {
                                        "type": "Identifier",
                                        "start": 2512,
                                        "end": 2516,
                                        "name": "size",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    }
                                  }
                                },
                                "directive": null
                              }
                            ]
                          },
                          "alternate": {
                            "type": "IfStatement",
                            "start": 2537,
                            "end": 2731,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 2541,
                              "end": 2577,
                              "left": {
                                "type": "Identifier",
                                "start": 2541,
                                "end": 2549,
                                "name": "rotation",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "<",
                              "right": {
                                "type": "BinaryExpression",
                                "start": 2553,
                                "end": 2576,
                                "left": {
                                  "type": "Literal",
                                  "start": 2553,
                                  "end": 2556,
                                  "value": 270,
                                  "raw": "270"
                                },
                                "operator": "+",
                                "right": {
                                  "type": "Identifier",
                                  "start": 2559,
                                  "end": 2576,
                                  "name": "centerAnchorLimit",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 2579,
                              "end": 2655,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 2597,
                                  "end": 2641,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 2597,
                                    "end": 2640,
                                    "operator": "=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 2597,
                                      "end": 2610,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 2597,
                                        "end": 2608,
                                        "name": "labelOffset",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 2609,
                                        "end": 2610,
                                        "name": "y",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "ConditionalExpression",
                                      "start": 2613,
                                      "end": 2640,
                                      "test": {
                                        "type": "Identifier",
                                        "start": 2613,
                                        "end": 2623,
                                        "name": "leftBottom",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "consequent": {
                                        "type": "BinaryExpression",
                                        "start": 2626,
                                        "end": 2636,
                                        "left": {
                                          "type": "Identifier",
                                          "start": 2626,
                                          "end": 2630,
                                          "name": "size",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "operator": "*",
                                        "right": {
                                          "type": "Literal",
                                          "start": 2633,
                                          "end": 2636,
                                          "value": 0.4,
                                          "raw": "0.4"
                                        }
                                      },
                                      "alternate": {
                                        "type": "Literal",
                                        "start": 2639,
                                        "end": 2640,
                                        "value": 0,
                                        "raw": "0"
                                      }
                                    }
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "alternate": {
                              "type": "BlockStatement",
                              "start": 2661,
                              "end": 2731,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 2679,
                                  "end": 2717,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 2679,
                                    "end": 2716,
                                    "operator": "=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 2679,
                                      "end": 2692,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 2679,
                                        "end": 2690,
                                        "name": "labelOffset",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 2691,
                                        "end": 2692,
                                        "name": "y",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "right": {
                                      "type": "ConditionalExpression",
                                      "start": 2695,
                                      "end": 2716,
                                      "test": {
                                        "type": "Identifier",
                                        "start": 2695,
                                        "end": 2705,
                                        "name": "leftBottom",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "consequent": {
                                        "type": "Identifier",
                                        "start": 2708,
                                        "end": 2712,
                                        "name": "size",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "alternate": {
                                        "type": "Literal",
                                        "start": 2715,
                                        "end": 2716,
                                        "value": 0,
                                        "raw": "0"
                                      }
                                    }
                                  },
                                  "directive": null
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  }
                ],
                "test": null
              }
            ]
          },
          {
            "type": "ExpressionStatement",
            "start": 2743,
            "end": 2822,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2743,
              "end": 2821,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2743,
                "end": 2756,
                "name": "titleRotation",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ConditionalExpression",
                "start": 2759,
                "end": 2821,
                "test": {
                  "type": "LogicalExpression",
                  "start": 2760,
                  "end": 2810,
                  "left": {
                    "type": "Identifier",
                    "start": 2760,
                    "end": 2778,
                    "name": "taTitleOrientation",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "start": 2782,
                    "end": 2810,
                    "left": {
                      "type": "Identifier",
                      "start": 2782,
                      "end": 2800,
                      "name": "taTitleOrientation",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "start": 2804,
                      "end": 2810,
                      "value": "away",
                      "raw": "\"away\""
                    }
                  }
                },
                "consequent": {
                  "type": "Literal",
                  "start": 2814,
                  "end": 2817,
                  "value": 180,
                  "raw": "180"
                },
                "alternate": {
                  "type": "Literal",
                  "start": 2820,
                  "end": 2821,
                  "value": 0,
                  "raw": "0"
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2827,
            "end": 2894,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2827,
              "end": 2893,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 2827,
                "end": 2837,
                "object": {
                  "type": "Identifier",
                  "start": 2827,
                  "end": 2835,
                  "name": "titlePos",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2836,
                  "end": 2837,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "BinaryExpression",
                "start": 2840,
                "end": 2893,
                "left": {
                  "type": "BinaryExpression",
                  "start": 2840,
                  "end": 2863,
                  "left": {
                    "type": "MemberExpression",
                    "start": 2840,
                    "end": 2849,
                    "object": {
                      "type": "Identifier",
                      "start": 2840,
                      "end": 2847,
                      "name": "offsets",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2848,
                      "end": 2849,
                      "name": "t",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "start": 2852,
                    "end": 2863,
                    "name": "titleOffset",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "+",
                "right": {
                  "type": "ConditionalExpression",
                  "start": 2867,
                  "end": 2892,
                  "test": {
                    "type": "Identifier",
                    "start": 2867,
                    "end": 2880,
                    "name": "titleRotation",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 2883,
                    "end": 2884,
                    "value": 0,
                    "raw": "0"
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2887,
                    "end": 2892,
                    "name": "tsize",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              }
            },
            "directive": null
          },
          {
            "type": "SwitchStatement",
            "start": 2899,
            "end": 3149,
            "discriminant": {
              "type": "Identifier",
              "start": 2907,
              "end": 2917,
              "name": "labelAlign",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2929,
                "end": 2993,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2955,
                    "end": 2974,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2955,
                      "end": 2973,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 2955,
                        "end": 2965,
                        "name": "labelAlign",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2968,
                        "end": 2973,
                        "value": "end",
                        "raw": "\"end\""
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 2987,
                    "end": 2993,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 2934,
                  "end": 2941,
                  "value": "start",
                  "raw": "\"start\""
                }
              },
              {
                "type": "SwitchCase",
                "start": 3002,
                "end": 3066,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3026,
                    "end": 3047,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 3026,
                      "end": 3046,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 3026,
                        "end": 3036,
                        "name": "labelAlign",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 3039,
                        "end": 3046,
                        "value": "start",
                        "raw": "\"start\""
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 3060,
                    "end": 3066,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 3007,
                  "end": 3012,
                  "value": "end",
                  "raw": "\"end\""
                }
              },
              {
                "type": "SwitchCase",
                "start": 3075,
                "end": 3143,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3102,
                    "end": 3124,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 3102,
                      "end": 3123,
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 3102,
                        "end": 3115,
                        "object": {
                          "type": "Identifier",
                          "start": 3102,
                          "end": 3113,
                          "name": "labelOffset",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3114,
                          "end": 3115,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 3119,
                        "end": 3123,
                        "name": "size",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 3137,
                    "end": 3143,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 3080,
                  "end": 3088,
                  "value": "middle",
                  "raw": "\"middle\""
                }
              }
            ]
          },
          {
            "type": "VariableDeclaration",
            "start": 3155,
            "end": 3172,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3159,
                "end": 3171,
                "id": {
                  "type": "Identifier",
                  "start": 3159,
                  "end": 3160,
                  "name": "_",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 3163,
                  "end": 3171,
                  "name": "rotation",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
