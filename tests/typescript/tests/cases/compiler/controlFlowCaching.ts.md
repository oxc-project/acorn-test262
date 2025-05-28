__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 3174,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 20,
      "end": 3174,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 31,
          "end": 34,
          "decorators": [],
          "name": "dim",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 36,
          "end": 43,
          "decorators": [],
          "name": "offsets",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 45,
          "end": 48,
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 50,
          "end": 57,
          "decorators": [],
          "name": "acommon",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 59,
          "end": 76,
          "decorators": [],
          "name": "centerAnchorLimit",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 78,
          "end": 79,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 81,
          "end": 84,
          "decorators": [],
          "name": "has",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 86,
          "end": 89,
          "decorators": [],
          "name": "lin",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 91,
        "end": 3174,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 97,
            "end": 123,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 101,
                "end": 122,
                "id": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 106,
                  "decorators": [],
                  "name": "isRtl",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "_isRtl",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 172,
            "end": 1595,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 176,
                "end": 188,
                "id": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 177,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
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
                    "decorators": [],
                    "name": "opt",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
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
                  "decorators": [],
                  "name": "ta",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "chart",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 206,
                      "end": 211,
                      "decorators": [],
                      "name": "theme",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 216,
                    "decorators": [],
                    "name": "axis",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
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
                  "decorators": [],
                  "name": "position",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 229,
                  "end": 239,
                  "object": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 230,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 239,
                    "decorators": [],
                    "name": "position",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
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
                  "decorators": [],
                  "name": "leftBottom",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 262,
                  "end": 287,
                  "left": {
                    "type": "Identifier",
                    "start": 262,
                    "end": 270,
                    "decorators": [],
                    "name": "position",
                    "optional": false,
                    "typeAnnotation": null
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
                  "decorators": [],
                  "name": "rotation",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 302,
                      "end": 310,
                      "decorators": [],
                      "name": "rotation",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
                  "decorators": [],
                  "name": "start",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "stop",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "titlePos",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "titleRotation",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "titleOffset",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "axisVector",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "tickVector",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "anchorOffset",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "labelOffset",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "labelAlign",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "labelGap",
                  "optional": false,
                  "typeAnnotation": null
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
                            "decorators": [],
                            "name": "chart",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 474,
                          "end": 479,
                          "decorators": [],
                          "name": "theme",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 480,
                        "end": 484,
                        "decorators": [],
                        "name": "axis",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 485,
                      "end": 489,
                      "decorators": [],
                      "name": "tick",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 490,
                    "end": 498,
                    "decorators": [],
                    "name": "labelGap",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
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
                  "decorators": [],
                  "name": "taFont",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 519,
                        "end": 523,
                        "decorators": [],
                        "name": "font",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
                          "decorators": [],
                          "name": "ta",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 531,
                          "end": 540,
                          "decorators": [],
                          "name": "majorTick",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
                            "decorators": [],
                            "name": "ta",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 547,
                            "end": 556,
                            "decorators": [],
                            "name": "majorTick",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 557,
                          "end": 561,
                          "decorators": [],
                          "name": "font",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
                        "decorators": [],
                        "name": "ta",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 570,
                        "end": 574,
                        "decorators": [],
                        "name": "tick",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
                          "decorators": [],
                          "name": "ta",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 581,
                          "end": 585,
                          "decorators": [],
                          "name": "tick",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 586,
                        "end": 590,
                        "decorators": [],
                        "name": "font",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
                  "decorators": [],
                  "name": "taTitleFont",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 617,
                      "end": 626,
                      "decorators": [],
                      "name": "titleFont",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
                        "decorators": [],
                        "name": "ta",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 634,
                        "end": 639,
                        "decorators": [],
                        "name": "title",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
                          "decorators": [],
                          "name": "ta",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 646,
                          "end": 651,
                          "decorators": [],
                          "name": "title",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 652,
                        "end": 656,
                        "decorators": [],
                        "name": "font",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
                  "decorators": [],
                  "name": "taFontColor",
                  "optional": false,
                  "typeAnnotation": null
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
                          "decorators": [],
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 683,
                          "end": 692,
                          "decorators": [],
                          "name": "fontColor",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
                            "decorators": [],
                            "name": "ta",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 700,
                            "end": 709,
                            "decorators": [],
                            "name": "majorTick",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
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
                              "decorators": [],
                              "name": "ta",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 716,
                              "end": 725,
                              "decorators": [],
                              "name": "majorTick",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 726,
                            "end": 735,
                            "decorators": [],
                            "name": "fontColor",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
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
                          "decorators": [],
                          "name": "ta",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 744,
                          "end": 748,
                          "decorators": [],
                          "name": "tick",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
                            "decorators": [],
                            "name": "ta",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 755,
                            "end": 759,
                            "decorators": [],
                            "name": "tick",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 760,
                          "end": 769,
                          "decorators": [],
                          "name": "fontColor",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
                  "decorators": [],
                  "name": "taTitleFontColor",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 812,
                        "end": 826,
                        "decorators": [],
                        "name": "titleFontColor",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
                          "decorators": [],
                          "name": "ta",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 834,
                          "end": 839,
                          "decorators": [],
                          "name": "title",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
                            "decorators": [],
                            "name": "ta",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 846,
                            "end": 851,
                            "decorators": [],
                            "name": "title",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 852,
                          "end": 861,
                          "decorators": [],
                          "name": "fontColor",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
                  "decorators": [],
                  "name": "taTitleGap",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 899,
                        "end": 907,
                        "decorators": [],
                        "name": "titleGap",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
                          "decorators": [],
                          "name": "o",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 922,
                          "end": 930,
                          "decorators": [],
                          "name": "titleGap",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
                            "decorators": [],
                            "name": "ta",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 938,
                            "end": 943,
                            "decorators": [],
                            "name": "title",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
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
                              "decorators": [],
                              "name": "ta",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 950,
                              "end": 955,
                              "decorators": [],
                              "name": "title",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 956,
                            "end": 959,
                            "decorators": [],
                            "name": "gap",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
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
                  "decorators": [],
                  "name": "taTitleOrientation",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 999,
                        "end": 1015,
                        "decorators": [],
                        "name": "titleOrientation",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
                          "decorators": [],
                          "name": "ta",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1023,
                          "end": 1028,
                          "decorators": [],
                          "name": "title",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
                            "decorators": [],
                            "name": "ta",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1035,
                            "end": 1040,
                            "decorators": [],
                            "name": "title",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1041,
                          "end": 1052,
                          "decorators": [],
                          "name": "orientation",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
                  "decorators": [],
                  "name": "taMajorTick",
                  "optional": false,
                  "typeAnnotation": null
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
                          "decorators": [],
                          "name": "chart",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1098,
                        "end": 1103,
                        "decorators": [],
                        "name": "theme",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1104,
                      "end": 1111,
                      "decorators": [],
                      "name": "getTick",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
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
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
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
                  "decorators": [],
                  "name": "taMinorTick",
                  "optional": false,
                  "typeAnnotation": null
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
                          "decorators": [],
                          "name": "chart",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1158,
                        "end": 1163,
                        "decorators": [],
                        "name": "theme",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1164,
                      "end": 1171,
                      "decorators": [],
                      "name": "getTick",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
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
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
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
                  "decorators": [],
                  "name": "taMicroTick",
                  "optional": false,
                  "typeAnnotation": null
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
                          "decorators": [],
                          "name": "chart",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1218,
                        "end": 1223,
                        "decorators": [],
                        "name": "theme",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1224,
                      "end": 1231,
                      "decorators": [],
                      "name": "getTick",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
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
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
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
                  "decorators": [],
                  "name": "taStroke",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1283,
                      "end": 1289,
                      "decorators": [],
                      "name": "stroke",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "alternate": {
                    "type": "MemberExpression",
                    "start": 1292,
                    "end": 1301,
                    "object": {
                      "type": "Identifier",
                      "start": 1292,
                      "end": 1294,
                      "decorators": [],
                      "name": "ta",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1295,
                      "end": 1301,
                      "decorators": [],
                      "name": "stroke",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
                  "decorators": [],
                  "name": "size",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1318,
                  "end": 1381,
                  "test": {
                    "type": "Identifier",
                    "start": 1318,
                    "end": 1324,
                    "decorators": [],
                    "name": "taFont",
                    "optional": false,
                    "typeAnnotation": null
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
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1329,
                        "end": 1345,
                        "decorators": [],
                        "name": "normalizedLength",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
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
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1348,
                              "end": 1363,
                              "decorators": [],
                              "name": "splitFontString",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1364,
                              "end": 1370,
                              "decorators": [],
                              "name": "taFont",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1372,
                          "end": 1376,
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    ],
                    "optional": false
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
                  "decorators": [],
                  "name": "cosr",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1403,
                      "end": 1406,
                      "decorators": [],
                      "name": "abs",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
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
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1412,
                          "end": 1415,
                          "decorators": [],
                          "name": "cos",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
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
                              "decorators": [],
                              "name": "rotation",
                              "optional": false,
                              "typeAnnotation": null
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
                                "decorators": [],
                                "name": "Math",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1432,
                                "end": 1434,
                                "decorators": [],
                                "name": "PI",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
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
                      "optional": false
                    }
                  ],
                  "optional": false
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
                  "decorators": [],
                  "name": "sinr",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1464,
                      "end": 1467,
                      "decorators": [],
                      "name": "abs",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
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
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1473,
                          "end": 1476,
                          "decorators": [],
                          "name": "sin",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
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
                              "decorators": [],
                              "name": "rotation",
                              "optional": false,
                              "typeAnnotation": null
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
                                "decorators": [],
                                "name": "Math",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1493,
                                "end": 1495,
                                "decorators": [],
                                "name": "PI",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
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
                      "optional": false
                    }
                  ],
                  "optional": false
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
                  "decorators": [],
                  "name": "tsize",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1521,
                  "end": 1594,
                  "test": {
                    "type": "Identifier",
                    "start": 1521,
                    "end": 1532,
                    "decorators": [],
                    "name": "taTitleFont",
                    "optional": false,
                    "typeAnnotation": null
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
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1537,
                        "end": 1553,
                        "decorators": [],
                        "name": "normalizedLength",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
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
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1556,
                              "end": 1571,
                              "decorators": [],
                              "name": "splitFontString",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1572,
                              "end": 1583,
                              "decorators": [],
                              "name": "taTitleFont",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1585,
                          "end": 1589,
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    ],
                    "optional": false
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
                "decorators": [],
                "name": "rotation",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "rotation",
                      "optional": false,
                      "typeAnnotation": null
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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1659,
                "end": 1697,
                "id": {
                  "type": "Identifier",
                  "start": 1659,
                  "end": 1671,
                  "decorators": [],
                  "name": "cachedLabelW",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "_getMaxLabelSize",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "definite": false
              }
            ],
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
                "decorators": [],
                "name": "cachedLabelW",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "LogicalExpression",
                "start": 1718,
                "end": 1756,
                "left": {
                  "type": "Identifier",
                  "start": 1718,
                  "end": 1730,
                  "decorators": [],
                  "name": "cachedLabelW",
                  "optional": false,
                  "typeAnnotation": null
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
                    "decorators": [],
                    "name": "cachedLabelW",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1747,
                    "end": 1756,
                    "decorators": [],
                    "name": "majLabelW",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
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
                "decorators": [],
                "name": "titleOffset",
                "optional": false,
                "typeAnnotation": null
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
                            "decorators": [],
                            "name": "size",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "*",
                          "right": {
                            "type": "Identifier",
                            "start": 1783,
                            "end": 1787,
                            "decorators": [],
                            "name": "cosr",
                            "optional": false,
                            "typeAnnotation": null
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
                              "decorators": [],
                              "name": "cachedLabelW",
                              "optional": false,
                              "typeAnnotation": null
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
                            "decorators": [],
                            "name": "sinr",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1819,
                        "end": 1827,
                        "decorators": [],
                        "name": "labelGap",
                        "optional": false,
                        "typeAnnotation": null
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
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1835,
                          "end": 1838,
                          "decorators": [],
                          "name": "max",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
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
                                "decorators": [],
                                "name": "taMajorTick",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1851,
                                "end": 1857,
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
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
                              "decorators": [],
                              "name": "taMajorTick",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1876,
                              "end": 1882,
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
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
                                "decorators": [],
                                "name": "taMinorTick",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1908,
                                "end": 1914,
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
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
                              "decorators": [],
                              "name": "taMinorTick",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1933,
                              "end": 1939,
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
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
                      "optional": false
                    }
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 1955,
                    "end": 1960,
                    "decorators": [],
                    "name": "tsize",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 1963,
                  "end": 1973,
                  "decorators": [],
                  "name": "taTitleGap",
                  "optional": false,
                  "typeAnnotation": null
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
                "decorators": [],
                "name": "axisVector",
                "optional": false,
                "typeAnnotation": null
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1994,
                      "end": 1995,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ConditionalExpression",
                      "start": 1997,
                      "end": 2011,
                      "test": {
                        "type": "Identifier",
                        "start": 1997,
                        "end": 2002,
                        "decorators": [],
                        "name": "isRtl",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "consequent": {
                        "type": "UnaryExpression",
                        "start": 2005,
                        "end": 2007,
                        "operator": "-",
                        "argument": {
                          "type": "Literal",
                          "start": 2006,
                          "end": 2007,
                          "value": 1,
                          "raw": "1"
                        },
                        "prefix": true
                      },
                      "alternate": {
                        "type": "Literal",
                        "start": 2010,
                        "end": 2011,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2013,
                    "end": 2017,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2013,
                      "end": 2014,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 2016,
                      "end": 2017,
                      "value": 0,
                      "raw": "0"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
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
              "decorators": [],
              "name": "rotation",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2076,
                "end": 2731,
                "test": null,
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
                        "decorators": [],
                        "name": "rotation",
                        "optional": false,
                        "typeAnnotation": null
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
                          "decorators": [],
                          "name": "centerAnchorLimit",
                          "optional": false,
                          "typeAnnotation": null
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
                                "decorators": [],
                                "name": "labelOffset",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2168,
                                "end": 2169,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "ConditionalExpression",
                              "start": 2172,
                              "end": 2193,
                              "test": {
                                "type": "Identifier",
                                "start": 2172,
                                "end": 2182,
                                "decorators": [],
                                "name": "leftBottom",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "consequent": {
                                "type": "Identifier",
                                "start": 2185,
                                "end": 2189,
                                "decorators": [],
                                "name": "size",
                                "optional": false,
                                "typeAnnotation": null
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
                          "decorators": [],
                          "name": "rotation",
                          "optional": false,
                          "typeAnnotation": null
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
                            "decorators": [],
                            "name": "centerAnchorLimit",
                            "optional": false,
                            "typeAnnotation": null
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
                                  "decorators": [],
                                  "name": "labelOffset",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2285,
                                  "end": 2286,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
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
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 2290,
                                    "end": 2294,
                                    "decorators": [],
                                    "name": "size",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "prefix": true
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
                            "decorators": [],
                            "name": "rotation",
                            "optional": false,
                            "typeAnnotation": null
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
                                    "decorators": [],
                                    "name": "labelOffset",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 2371,
                                    "end": 2372,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "right": {
                                  "type": "ConditionalExpression",
                                  "start": 2375,
                                  "end": 2397,
                                  "test": {
                                    "type": "Identifier",
                                    "start": 2375,
                                    "end": 2385,
                                    "decorators": [],
                                    "name": "leftBottom",
                                    "optional": false,
                                    "typeAnnotation": null
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
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 2393,
                                      "end": 2397,
                                      "decorators": [],
                                      "name": "size",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "prefix": true
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
                              "decorators": [],
                              "name": "rotation",
                              "optional": false,
                              "typeAnnotation": null
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
                                "decorators": [],
                                "name": "centerAnchorLimit",
                                "optional": false,
                                "typeAnnotation": null
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
                                      "decorators": [],
                                      "name": "labelOffset",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 2490,
                                      "end": 2491,
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "right": {
                                    "type": "ConditionalExpression",
                                    "start": 2494,
                                    "end": 2516,
                                    "test": {
                                      "type": "Identifier",
                                      "start": 2494,
                                      "end": 2504,
                                      "decorators": [],
                                      "name": "leftBottom",
                                      "optional": false,
                                      "typeAnnotation": null
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
                                      "argument": {
                                        "type": "Identifier",
                                        "start": 2512,
                                        "end": 2516,
                                        "decorators": [],
                                        "name": "size",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "prefix": true
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
                                "decorators": [],
                                "name": "rotation",
                                "optional": false,
                                "typeAnnotation": null
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
                                  "decorators": [],
                                  "name": "centerAnchorLimit",
                                  "optional": false,
                                  "typeAnnotation": null
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
                                        "decorators": [],
                                        "name": "labelOffset",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 2609,
                                        "end": 2610,
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "right": {
                                      "type": "ConditionalExpression",
                                      "start": 2613,
                                      "end": 2640,
                                      "test": {
                                        "type": "Identifier",
                                        "start": 2613,
                                        "end": 2623,
                                        "decorators": [],
                                        "name": "leftBottom",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "consequent": {
                                        "type": "BinaryExpression",
                                        "start": 2626,
                                        "end": 2636,
                                        "left": {
                                          "type": "Identifier",
                                          "start": 2626,
                                          "end": 2630,
                                          "decorators": [],
                                          "name": "size",
                                          "optional": false,
                                          "typeAnnotation": null
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
                                        "decorators": [],
                                        "name": "labelOffset",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 2691,
                                        "end": 2692,
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "right": {
                                      "type": "ConditionalExpression",
                                      "start": 2695,
                                      "end": 2716,
                                      "test": {
                                        "type": "Identifier",
                                        "start": 2695,
                                        "end": 2705,
                                        "decorators": [],
                                        "name": "leftBottom",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "consequent": {
                                        "type": "Identifier",
                                        "start": 2708,
                                        "end": 2712,
                                        "decorators": [],
                                        "name": "size",
                                        "optional": false,
                                        "typeAnnotation": null
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
                ]
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
                "decorators": [],
                "name": "titleRotation",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "taTitleOrientation",
                    "optional": false,
                    "typeAnnotation": null
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
                      "decorators": [],
                      "name": "taTitleOrientation",
                      "optional": false,
                      "typeAnnotation": null
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
                  "decorators": [],
                  "name": "titlePos",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2836,
                  "end": 2837,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
                      "decorators": [],
                      "name": "offsets",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2848,
                      "end": 2849,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "operator": "-",
                  "right": {
                    "type": "Identifier",
                    "start": 2852,
                    "end": 2863,
                    "decorators": [],
                    "name": "titleOffset",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "titleRotation",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "tsize",
                    "optional": false,
                    "typeAnnotation": null
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
              "decorators": [],
              "name": "labelAlign",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2929,
                "end": 2993,
                "test": {
                  "type": "Literal",
                  "start": 2934,
                  "end": 2941,
                  "value": "start",
                  "raw": "\"start\""
                },
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
                        "decorators": [],
                        "name": "labelAlign",
                        "optional": false,
                        "typeAnnotation": null
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
                ]
              },
              {
                "type": "SwitchCase",
                "start": 3002,
                "end": 3066,
                "test": {
                  "type": "Literal",
                  "start": 3007,
                  "end": 3012,
                  "value": "end",
                  "raw": "\"end\""
                },
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
                        "decorators": [],
                        "name": "labelAlign",
                        "optional": false,
                        "typeAnnotation": null
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
                ]
              },
              {
                "type": "SwitchCase",
                "start": 3075,
                "end": 3143,
                "test": {
                  "type": "Literal",
                  "start": 3080,
                  "end": 3088,
                  "value": "middle",
                  "raw": "\"middle\""
                },
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
                          "decorators": [],
                          "name": "labelOffset",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3114,
                          "end": 3115,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 3119,
                        "end": 3123,
                        "decorators": [],
                        "name": "size",
                        "optional": false,
                        "typeAnnotation": null
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
                ]
              }
            ]
          },
          {
            "type": "VariableDeclaration",
            "start": 3155,
            "end": 3172,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3159,
                "end": 3171,
                "id": {
                  "type": "Identifier",
                  "start": 3159,
                  "end": 3160,
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 3163,
                  "end": 3171,
                  "decorators": [],
                  "name": "rotation",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
