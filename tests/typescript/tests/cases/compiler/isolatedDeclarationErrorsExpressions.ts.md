__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "time",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 21
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBigIntKeyword",
          "start": 25,
          "end": 31
        },
        "start": 23,
        "end": 31
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberConst",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 56
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 59,
              "end": 60
            },
            "definite": false,
            "start": 45,
            "end": 60
          }
        ],
        "declare": false,
        "start": 39,
        "end": 61
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 32,
      "end": 61
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberConstBad1",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 90
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 93,
                "end": 94
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 97,
                "end": 98
              },
              "start": 93,
              "end": 98
            },
            "definite": false,
            "start": 75,
            "end": 98
          }
        ],
        "declare": false,
        "start": 69,
        "end": 99
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 62,
      "end": 99
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberConstBad2",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 128
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
                  "start": 131,
                  "end": 135
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 142
                },
                "optional": false,
                "computed": false,
                "start": 131,
                "end": 142
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 131,
              "end": 144
            },
            "definite": false,
            "start": 113,
            "end": 144
          }
        ],
        "declare": false,
        "start": 107,
        "end": 145
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 100,
      "end": 145
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberConstBad3",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 174
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberConst",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 188
            },
            "definite": false,
            "start": 159,
            "end": 188
          }
        ],
        "declare": false,
        "start": 153,
        "end": 189
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 146,
      "end": 189
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntConst",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 215
            },
            "init": {
              "type": "Literal",
              "value": null,
              "raw": "1n",
              "bigint": "1",
              "start": 218,
              "end": 220
            },
            "definite": false,
            "start": 204,
            "end": 220
          }
        ],
        "declare": false,
        "start": 198,
        "end": 221
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 191,
      "end": 221
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntConstBad1",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 250
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "1n",
                "bigint": "1",
                "start": 253,
                "end": 255
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "1n",
                "bigint": "1",
                "start": 258,
                "end": 260
              },
              "start": 253,
              "end": 260
            },
            "definite": false,
            "start": 235,
            "end": 260
          }
        ],
        "declare": false,
        "start": 229,
        "end": 261
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 222,
      "end": 261
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntConstBad2",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
              "end": 290
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "time",
                "optional": false,
                "typeAnnotation": null,
                "start": 293,
                "end": 297
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 293,
              "end": 299
            },
            "definite": false,
            "start": 275,
            "end": 299
          }
        ],
        "declare": false,
        "start": 269,
        "end": 300
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 262,
      "end": 300
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntConstBad3",
              "optional": false,
              "typeAnnotation": null,
              "start": 314,
              "end": 329
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntConst",
              "optional": false,
              "typeAnnotation": null,
              "start": 332,
              "end": 343
            },
            "definite": false,
            "start": 314,
            "end": 343
          }
        ],
        "declare": false,
        "start": 308,
        "end": 344
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 301,
      "end": 344
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringConst",
              "optional": false,
              "typeAnnotation": null,
              "start": 359,
              "end": 370
            },
            "init": {
              "type": "Literal",
              "value": "s",
              "raw": "\"s\"",
              "start": 373,
              "end": 376
            },
            "definite": false,
            "start": 359,
            "end": 376
          }
        ],
        "declare": false,
        "start": 353,
        "end": 377
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 346,
      "end": 377
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringConstBad",
              "optional": false,
              "typeAnnotation": null,
              "start": 391,
              "end": 405
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 408,
                "end": 411
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 414,
                "end": 417
              },
              "start": 408,
              "end": 417
            },
            "definite": false,
            "start": 391,
            "end": 417
          }
        ],
        "declare": false,
        "start": 385,
        "end": 418
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 378,
      "end": 418
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateConstOk1",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 475
            },
            "init": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": true,
                  "start": 478,
                  "end": 481
                }
              ],
              "expressions": [],
              "start": 478,
              "end": 481
            },
            "definite": false,
            "start": 459,
            "end": 481
          }
        ],
        "declare": false,
        "start": 453,
        "end": 482
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 446,
      "end": 482
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateConstNotOk2",
              "optional": false,
              "typeAnnotation": null,
              "start": 496,
              "end": 515
            },
            "init": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": false,
                  "start": 518,
                  "end": 522
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 524,
                  "end": 526
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "1n",
                  "bigint": "1",
                  "start": 522,
                  "end": 524
                }
              ],
              "start": 518,
              "end": 526
            },
            "definite": false,
            "start": 496,
            "end": 526
          }
        ],
        "declare": false,
        "start": 490,
        "end": 527
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 483,
      "end": 527
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateConstNotOk3",
              "optional": false,
              "typeAnnotation": null,
              "start": 541,
              "end": 560
            },
            "init": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": false,
                  "start": 563,
                  "end": 567
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false,
                  "start": 568,
                  "end": 574
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 577,
                  "end": 579
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 567,
                  "end": 568
                },
                {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 574,
                  "end": 577
                }
              ],
              "start": 563,
              "end": 579
            },
            "definite": false,
            "start": 541,
            "end": 579
          }
        ],
        "declare": false,
        "start": 535,
        "end": 580
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 528,
      "end": 580
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateConstNotOk4",
              "optional": false,
              "typeAnnotation": null,
              "start": 594,
              "end": 613
            },
            "init": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": false,
                  "start": 616,
                  "end": 620
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false,
                  "start": 621,
                  "end": 627
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false,
                  "start": 630,
                  "end": 636
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 641,
                  "end": 643
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 620,
                  "end": 621
                },
                {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 627,
                  "end": 630
                },
                {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 636,
                  "end": 641
                }
              ],
              "start": 616,
              "end": 643
            },
            "definite": false,
            "start": 594,
            "end": 643
          }
        ],
        "declare": false,
        "start": 588,
        "end": 644
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 581,
      "end": 644
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateConstNotOk5",
              "optional": false,
              "typeAnnotation": null,
              "start": 658,
              "end": 677
            },
            "init": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": false,
                  "start": 680,
                  "end": 684
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false,
                  "start": 689,
                  "end": 695
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false,
                  "start": 698,
                  "end": 704
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 710,
                  "end": 712
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 684,
                    "end": 685
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 688,
                    "end": 689
                  },
                  "start": 684,
                  "end": 689
                },
                {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 695,
                  "end": 698
                },
                {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 705,
                    "end": 710
                  },
                  "prefix": true,
                  "start": 704,
                  "end": 710
                }
              ],
              "start": 680,
              "end": 712
            },
            "definite": false,
            "start": 658,
            "end": 712
          }
        ],
        "declare": false,
        "start": 652,
        "end": 713
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 645,
      "end": 713
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberLet",
              "optional": false,
              "typeAnnotation": null,
              "start": 726,
              "end": 735
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 738,
              "end": 739
            },
            "definite": false,
            "start": 726,
            "end": 739
          }
        ],
        "declare": false,
        "start": 722,
        "end": 740
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 715,
      "end": 740
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberLetBad1",
              "optional": false,
              "typeAnnotation": null,
              "start": 752,
              "end": 765
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 768,
                "end": 769
              },
              "operator": "+",
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
            "definite": false,
            "start": 752,
            "end": 773
          }
        ],
        "declare": false,
        "start": 748,
        "end": 774
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 741,
      "end": 774
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberLetBad2",
              "optional": false,
              "typeAnnotation": null,
              "start": 786,
              "end": 799
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
                  "start": 802,
                  "end": 806
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 807,
                  "end": 813
                },
                "optional": false,
                "computed": false,
                "start": 802,
                "end": 813
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 802,
              "end": 815
            },
            "definite": false,
            "start": 786,
            "end": 815
          }
        ],
        "declare": false,
        "start": 782,
        "end": 816
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 775,
      "end": 816
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberLetBad3",
              "optional": false,
              "typeAnnotation": null,
              "start": 828,
              "end": 841
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberLet",
              "optional": false,
              "typeAnnotation": null,
              "start": 844,
              "end": 853
            },
            "definite": false,
            "start": 828,
            "end": 853
          }
        ],
        "declare": false,
        "start": 824,
        "end": 854
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 817,
      "end": 854
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntLet",
              "optional": false,
              "typeAnnotation": null,
              "start": 867,
              "end": 876
            },
            "init": {
              "type": "Literal",
              "value": null,
              "raw": "1n",
              "bigint": "1",
              "start": 879,
              "end": 881
            },
            "definite": false,
            "start": 867,
            "end": 881
          }
        ],
        "declare": false,
        "start": 863,
        "end": 882
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 856,
      "end": 882
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntLetBad1",
              "optional": false,
              "typeAnnotation": null,
              "start": 894,
              "end": 907
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "1n",
                "bigint": "1",
                "start": 910,
                "end": 912
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "1n",
                "bigint": "1",
                "start": 915,
                "end": 917
              },
              "start": 910,
              "end": 917
            },
            "definite": false,
            "start": 894,
            "end": 917
          }
        ],
        "declare": false,
        "start": 890,
        "end": 918
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 883,
      "end": 918
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntLetBad2",
              "optional": false,
              "typeAnnotation": null,
              "start": 930,
              "end": 943
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "time",
                "optional": false,
                "typeAnnotation": null,
                "start": 946,
                "end": 950
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 946,
              "end": 952
            },
            "definite": false,
            "start": 930,
            "end": 952
          }
        ],
        "declare": false,
        "start": 926,
        "end": 953
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 919,
      "end": 953
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntLetBad3",
              "optional": false,
              "typeAnnotation": null,
              "start": 965,
              "end": 978
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntLet",
              "optional": false,
              "typeAnnotation": null,
              "start": 981,
              "end": 990
            },
            "definite": false,
            "start": 965,
            "end": 990
          }
        ],
        "declare": false,
        "start": 961,
        "end": 991
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 954,
      "end": 991
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringLet",
              "optional": false,
              "typeAnnotation": null,
              "start": 1004,
              "end": 1013
            },
            "init": {
              "type": "Literal",
              "value": "s",
              "raw": "\"s\"",
              "start": 1016,
              "end": 1019
            },
            "definite": false,
            "start": 1004,
            "end": 1019
          }
        ],
        "declare": false,
        "start": 1000,
        "end": 1020
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 993,
      "end": 1020
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringLetBad",
              "optional": false,
              "typeAnnotation": null,
              "start": 1032,
              "end": 1044
            },
            "init": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 1047,
                "end": 1050
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 1053,
                "end": 1056
              },
              "start": 1047,
              "end": 1056
            },
            "definite": false,
            "start": 1032,
            "end": 1056
          }
        ],
        "declare": false,
        "start": 1028,
        "end": 1057
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1021,
      "end": 1057
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateLetOk1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1070,
              "end": 1084
            },
            "init": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": true,
                  "start": 1087,
                  "end": 1090
                }
              ],
              "expressions": [],
              "start": 1087,
              "end": 1090
            },
            "definite": false,
            "start": 1070,
            "end": 1090
          }
        ],
        "declare": false,
        "start": 1066,
        "end": 1091
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1059,
      "end": 1091
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateLetOk2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1103,
              "end": 1117
            },
            "init": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": false,
                  "start": 1120,
                  "end": 1124
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false,
                  "start": 1125,
                  "end": 1131
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1134,
                  "end": 1136
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1124,
                  "end": 1125
                },
                {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 1131,
                  "end": 1134
                }
              ],
              "start": 1120,
              "end": 1136
            },
            "definite": false,
            "start": 1103,
            "end": 1136
          }
        ],
        "declare": false,
        "start": 1099,
        "end": 1137
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1092,
      "end": 1137
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateLetOk3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1149,
              "end": 1163
            },
            "init": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": false,
                  "start": 1166,
                  "end": 1170
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false,
                  "start": 1171,
                  "end": 1177
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false,
                  "start": 1180,
                  "end": 1186
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1191,
                  "end": 1193
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1170,
                  "end": 1171
                },
                {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 1177,
                  "end": 1180
                },
                {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 1186,
                  "end": 1191
                }
              ],
              "start": 1166,
              "end": 1193
            },
            "definite": false,
            "start": 1149,
            "end": 1193
          }
        ],
        "declare": false,
        "start": 1145,
        "end": 1194
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1138,
      "end": 1194
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateLetOk4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1206,
              "end": 1220
            },
            "init": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": false,
                  "start": 1223,
                  "end": 1227
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false,
                  "start": 1232,
                  "end": 1238
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false,
                  "start": 1241,
                  "end": 1247
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1253,
                  "end": 1255
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1227,
                    "end": 1228
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1231,
                    "end": 1232
                  },
                  "start": 1227,
                  "end": 1232
                },
                {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 1238,
                  "end": 1241
                },
                {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 1248,
                    "end": 1253
                  },
                  "prefix": true,
                  "start": 1247,
                  "end": 1253
                }
              ],
              "start": 1223,
              "end": 1255
            },
            "definite": false,
            "start": 1206,
            "end": 1255
          }
        ],
        "declare": false,
        "start": 1202,
        "end": 1256
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1195,
      "end": 1256
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberLetAsConst",
              "optional": false,
              "typeAnnotation": null,
              "start": 1282,
              "end": 1298
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1301,
                "end": 1302
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1306,
                  "end": 1311
                },
                "typeArguments": null,
                "start": 1306,
                "end": 1311
              },
              "start": 1301,
              "end": 1311
            },
            "definite": false,
            "start": 1282,
            "end": 1311
          }
        ],
        "declare": false,
        "start": 1278,
        "end": 1312
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1271,
      "end": 1312
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntLetAsConst",
              "optional": false,
              "typeAnnotation": null,
              "start": 1325,
              "end": 1341
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "1n",
                "bigint": "1",
                "start": 1344,
                "end": 1346
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1350,
                  "end": 1355
                },
                "typeArguments": null,
                "start": 1350,
                "end": 1355
              },
              "start": 1344,
              "end": 1355
            },
            "definite": false,
            "start": 1325,
            "end": 1355
          }
        ],
        "declare": false,
        "start": 1321,
        "end": 1356
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1314,
      "end": 1356
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringLetAsConst",
              "optional": false,
              "typeAnnotation": null,
              "start": 1369,
              "end": 1385
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 1388,
                "end": 1391
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1395,
                  "end": 1400
                },
                "typeArguments": null,
                "start": 1395,
                "end": 1400
              },
              "start": 1388,
              "end": 1400
            },
            "definite": false,
            "start": 1369,
            "end": 1400
          }
        ],
        "declare": false,
        "start": 1365,
        "end": 1401
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1358,
      "end": 1401
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateLetOk1AsConst",
              "optional": false,
              "typeAnnotation": null,
              "start": 1414,
              "end": 1435
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "s",
                      "cooked": "s"
                    },
                    "tail": true,
                    "start": 1438,
                    "end": 1441
                  }
                ],
                "expressions": [],
                "start": 1438,
                "end": 1441
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1445,
                  "end": 1450
                },
                "typeArguments": null,
                "start": 1445,
                "end": 1450
              },
              "start": 1438,
              "end": 1450
            },
            "definite": false,
            "start": 1414,
            "end": 1450
          }
        ],
        "declare": false,
        "start": 1410,
        "end": 1451
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1403,
      "end": 1451
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateLetOk2AsConst",
              "optional": false,
              "typeAnnotation": null,
              "start": 1463,
              "end": 1484
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "s",
                      "cooked": "s"
                    },
                    "tail": false,
                    "start": 1487,
                    "end": 1491
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false,
                    "start": 1492,
                    "end": 1498
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 1501,
                    "end": 1503
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1491,
                    "end": 1492
                  },
                  {
                    "type": "Literal",
                    "value": "S",
                    "raw": "\"S\"",
                    "start": 1498,
                    "end": 1501
                  }
                ],
                "start": 1487,
                "end": 1503
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1507,
                  "end": 1512
                },
                "typeArguments": null,
                "start": 1507,
                "end": 1512
              },
              "start": 1487,
              "end": 1512
            },
            "definite": false,
            "start": 1463,
            "end": 1512
          }
        ],
        "declare": false,
        "start": 1459,
        "end": 1513
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1452,
      "end": 1513
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateLetOk3AsConst",
              "optional": false,
              "typeAnnotation": null,
              "start": 1525,
              "end": 1546
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "s",
                      "cooked": "s"
                    },
                    "tail": false,
                    "start": 1549,
                    "end": 1553
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false,
                    "start": 1554,
                    "end": 1560
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false,
                    "start": 1563,
                    "end": 1569
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 1574,
                    "end": 1576
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1553,
                    "end": 1554
                  },
                  {
                    "type": "Literal",
                    "value": "S",
                    "raw": "\"S\"",
                    "start": 1560,
                    "end": 1563
                  },
                  {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 1569,
                    "end": 1574
                  }
                ],
                "start": 1549,
                "end": 1576
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1580,
                  "end": 1585
                },
                "typeArguments": null,
                "start": 1580,
                "end": 1585
              },
              "start": 1549,
              "end": 1585
            },
            "definite": false,
            "start": 1525,
            "end": 1585
          }
        ],
        "declare": false,
        "start": 1521,
        "end": 1586
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1514,
      "end": 1586
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "templateLetOk4AsConst",
              "optional": false,
              "typeAnnotation": null,
              "start": 1598,
              "end": 1619
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "s",
                      "cooked": "s"
                    },
                    "tail": false,
                    "start": 1622,
                    "end": 1626
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false,
                    "start": 1631,
                    "end": 1637
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false,
                    "start": 1640,
                    "end": 1646
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 1652,
                    "end": 1654
                  }
                ],
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1626,
                      "end": 1627
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1630,
                      "end": 1631
                    },
                    "start": 1626,
                    "end": 1631
                  },
                  {
                    "type": "Literal",
                    "value": "S",
                    "raw": "\"S\"",
                    "start": 1637,
                    "end": 1640
                  },
                  {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 1647,
                      "end": 1652
                    },
                    "prefix": true,
                    "start": 1646,
                    "end": 1652
                  }
                ],
                "start": 1622,
                "end": 1654
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1658,
                  "end": 1663
                },
                "typeArguments": null,
                "start": 1658,
                "end": 1663
              },
              "start": 1622,
              "end": 1663
            },
            "definite": false,
            "start": 1598,
            "end": 1663
          }
        ],
        "declare": false,
        "start": 1594,
        "end": 1664
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1587,
      "end": 1664
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 1677,
              "end": 1680
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1684,
                  "end": 1685
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1687,
                  "end": 1688
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 1690,
                  "end": 1691
                }
              ],
              "start": 1683,
              "end": 1692
            },
            "definite": false,
            "start": 1677,
            "end": 1692
          }
        ],
        "declare": false,
        "start": 1673,
        "end": 1693
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1666,
      "end": 1693
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrConst",
              "optional": false,
              "typeAnnotation": null,
              "start": 1705,
              "end": 1713
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1717,
                    "end": 1718
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1720,
                    "end": 1721
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 1723,
                    "end": 1724
                  }
                ],
                "start": 1716,
                "end": 1725
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1729,
                  "end": 1734
                },
                "typeArguments": null,
                "start": 1729,
                "end": 1734
              },
              "start": 1716,
              "end": 1734
            },
            "definite": false,
            "start": 1705,
            "end": 1734
          }
        ],
        "declare": false,
        "start": 1701,
        "end": 1735
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1694,
      "end": 1735
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrWithSpread",
              "optional": false,
              "typeAnnotation": null,
              "start": 1747,
              "end": 1760
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1764,
                    "end": 1765
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1767,
                    "end": 1768
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 1770,
                    "end": 1771
                  },
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1776,
                      "end": 1779
                    },
                    "start": 1773,
                    "end": 1779
                  }
                ],
                "start": 1763,
                "end": 1780
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1784,
                  "end": 1789
                },
                "typeArguments": null,
                "start": 1784,
                "end": 1789
              },
              "start": 1763,
              "end": 1789
            },
            "definite": false,
            "start": 1747,
            "end": 1789
          }
        ],
        "declare": false,
        "start": 1743,
        "end": 1790
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1736,
      "end": 1790
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Exported",
          "optional": false,
          "typeAnnotation": null,
          "start": 1805,
          "end": 1813
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
                "name": "numberLet",
                "optional": false,
                "typeAnnotation": null,
                "start": 1827,
                "end": 1836
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1839,
                "end": 1840
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 1820,
              "end": 1841
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberLetBad1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1853,
                "end": 1866
              },
              "typeAnnotation": null,
              "value": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1869,
                  "end": 1870
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1873,
                  "end": 1874
                },
                "start": 1869,
                "end": 1874
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 1846,
              "end": 1875
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberLetBad2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1887,
                "end": 1900
              },
              "typeAnnotation": null,
              "value": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1903,
                    "end": 1907
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1908,
                    "end": 1914
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1903,
                  "end": 1914
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1903,
                "end": 1916
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 1880,
              "end": 1917
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberLetBad3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1929,
                "end": 1942
              },
              "typeAnnotation": null,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberLet",
                "optional": false,
                "typeAnnotation": null,
                "start": 1945,
                "end": 1954
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 1922,
              "end": 1955
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigIntLet",
                "optional": false,
                "typeAnnotation": null,
                "start": 1968,
                "end": 1977
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": null,
                "raw": "1n",
                "bigint": "1",
                "start": 1980,
                "end": 1982
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 1961,
              "end": 1983
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigIntLetBad1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1995,
                "end": 2008
              },
              "typeAnnotation": null,
              "value": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": null,
                  "raw": "1n",
                  "bigint": "1",
                  "start": 2011,
                  "end": 2013
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": null,
                  "raw": "1n",
                  "bigint": "1",
                  "start": 2016,
                  "end": 2018
                },
                "start": 2011,
                "end": 2018
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 1988,
              "end": 2019
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigIntLetBad2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2031,
                "end": 2044
              },
              "typeAnnotation": null,
              "value": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "time",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2047,
                  "end": 2051
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 2047,
                "end": 2053
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 2024,
              "end": 2054
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigIntLetBad3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2066,
                "end": 2079
              },
              "typeAnnotation": null,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigIntLet",
                "optional": false,
                "typeAnnotation": null,
                "start": 2082,
                "end": 2091
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 2059,
              "end": 2092
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "stringLet",
                "optional": false,
                "typeAnnotation": null,
                "start": 2105,
                "end": 2114
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 2117,
                "end": 2120
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 2098,
              "end": 2121
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "stringLetBad",
                "optional": false,
                "typeAnnotation": null,
                "start": 2133,
                "end": 2145
              },
              "typeAnnotation": null,
              "value": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "s",
                  "raw": "\"s\"",
                  "start": 2148,
                  "end": 2151
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": "s",
                  "raw": "\"s\"",
                  "start": 2154,
                  "end": 2157
                },
                "start": 2148,
                "end": 2157
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 2126,
              "end": 2158
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "templateLetOk1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2171,
                "end": 2185
              },
              "typeAnnotation": null,
              "value": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "s",
                      "cooked": "s"
                    },
                    "tail": true,
                    "start": 2188,
                    "end": 2191
                  }
                ],
                "expressions": [],
                "start": 2188,
                "end": 2191
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 2164,
              "end": 2192
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "templateLetOk2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2204,
                "end": 2218
              },
              "typeAnnotation": null,
              "value": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "s",
                      "cooked": "s"
                    },
                    "tail": false,
                    "start": 2221,
                    "end": 2225
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false,
                    "start": 2226,
                    "end": 2232
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 2235,
                    "end": 2237
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2225,
                    "end": 2226
                  },
                  {
                    "type": "Literal",
                    "value": "S",
                    "raw": "\"S\"",
                    "start": 2232,
                    "end": 2235
                  }
                ],
                "start": 2221,
                "end": 2237
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 2197,
              "end": 2238
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "templateLetOk3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2250,
                "end": 2264
              },
              "typeAnnotation": null,
              "value": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "s",
                      "cooked": "s"
                    },
                    "tail": false,
                    "start": 2267,
                    "end": 2271
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false,
                    "start": 2272,
                    "end": 2278
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false,
                    "start": 2281,
                    "end": 2287
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 2292,
                    "end": 2294
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2271,
                    "end": 2272
                  },
                  {
                    "type": "Literal",
                    "value": "S",
                    "raw": "\"S\"",
                    "start": 2278,
                    "end": 2281
                  },
                  {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 2287,
                    "end": 2292
                  }
                ],
                "start": 2267,
                "end": 2294
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 2243,
              "end": 2295
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "templateLetOk4",
                "optional": false,
                "typeAnnotation": null,
                "start": 2307,
                "end": 2321
              },
              "typeAnnotation": null,
              "value": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "s",
                      "cooked": "s"
                    },
                    "tail": false,
                    "start": 2324,
                    "end": 2328
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false,
                    "start": 2333,
                    "end": 2339
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false,
                    "start": 2342,
                    "end": 2348
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 2354,
                    "end": 2356
                  }
                ],
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2328,
                      "end": 2329
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2332,
                      "end": 2333
                    },
                    "start": 2328,
                    "end": 2333
                  },
                  {
                    "type": "Literal",
                    "value": "S",
                    "raw": "\"S\"",
                    "start": 2339,
                    "end": 2342
                  },
                  {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 2349,
                      "end": 2354
                    },
                    "prefix": true,
                    "start": 2348,
                    "end": 2354
                  }
                ],
                "start": 2324,
                "end": 2356
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public",
              "start": 2300,
              "end": 2357
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberConst",
                "optional": false,
                "typeAnnotation": null,
                "start": 2373,
                "end": 2384
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2387,
                "end": 2388
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null,
              "start": 2364,
              "end": 2389
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberConstBad1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2403,
                "end": 2418
              },
              "typeAnnotation": null,
              "value": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2421,
                  "end": 2422
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2425,
                  "end": 2426
                },
                "start": 2421,
                "end": 2426
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null,
              "start": 2394,
              "end": 2427
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberConstBad2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2441,
                "end": 2456
              },
              "typeAnnotation": null,
              "value": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2459,
                    "end": 2463
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2464,
                    "end": 2470
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2459,
                  "end": 2470
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 2459,
                "end": 2472
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null,
              "start": 2432,
              "end": 2473
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberConstBad3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2487,
                "end": 2502
              },
              "typeAnnotation": null,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberConst",
                "optional": false,
                "typeAnnotation": null,
                "start": 2505,
                "end": 2516
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null,
              "start": 2478,
              "end": 2517
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigIntConst",
                "optional": false,
                "typeAnnotation": null,
                "start": 2532,
                "end": 2543
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": null,
                "raw": "1n",
                "bigint": "1",
                "start": 2546,
                "end": 2548
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null,
              "start": 2523,
              "end": 2549
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigIntConstBad1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2563,
                "end": 2578
              },
              "typeAnnotation": null,
              "value": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": null,
                  "raw": "1n",
                  "bigint": "1",
                  "start": 2581,
                  "end": 2583
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": null,
                  "raw": "1n",
                  "bigint": "1",
                  "start": 2586,
                  "end": 2588
                },
                "start": 2581,
                "end": 2588
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null,
              "start": 2554,
              "end": 2589
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigIntConstBad2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2603,
                "end": 2618
              },
              "typeAnnotation": null,
              "value": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "time",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2621,
                  "end": 2625
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 2621,
                "end": 2627
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null,
              "start": 2594,
              "end": 2628
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigIntConstBad3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2642,
                "end": 2657
              },
              "typeAnnotation": null,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigIntConst",
                "optional": false,
                "typeAnnotation": null,
                "start": 2660,
                "end": 2671
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null,
              "start": 2633,
              "end": 2672
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "stringConst",
                "optional": false,
                "typeAnnotation": null,
                "start": 2687,
                "end": 2698
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 2701,
                "end": 2704
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null,
              "start": 2678,
              "end": 2705
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "stringConstBad",
                "optional": false,
                "typeAnnotation": null,
                "start": 2719,
                "end": 2733
              },
              "typeAnnotation": null,
              "value": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "s",
                  "raw": "\"s\"",
                  "start": 2736,
                  "end": 2739
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": "s",
                  "raw": "\"s\"",
                  "start": 2742,
                  "end": 2745
                },
                "start": 2736,
                "end": 2745
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null,
              "start": 2710,
              "end": 2746
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "templateConstOk1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2761,
                "end": 2777
              },
              "typeAnnotation": null,
              "value": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "s",
                      "cooked": "s"
                    },
                    "tail": true,
                    "start": 2780,
                    "end": 2783
                  }
                ],
                "expressions": [],
                "start": 2780,
                "end": 2783
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null,
              "start": 2752,
              "end": 2784
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "templateConstNotOk2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2798,
                "end": 2817
              },
              "typeAnnotation": null,
              "value": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "s",
                      "cooked": "s"
                    },
                    "tail": false,
                    "start": 2820,
                    "end": 2824
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false,
                    "start": 2825,
                    "end": 2831
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 2834,
                    "end": 2836
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2824,
                    "end": 2825
                  },
                  {
                    "type": "Literal",
                    "value": "S",
                    "raw": "\"S\"",
                    "start": 2831,
                    "end": 2834
                  }
                ],
                "start": 2820,
                "end": 2836
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null,
              "start": 2789,
              "end": 2837
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "templateConstNotOk3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2851,
                "end": 2870
              },
              "typeAnnotation": null,
              "value": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "s",
                      "cooked": "s"
                    },
                    "tail": false,
                    "start": 2873,
                    "end": 2877
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false,
                    "start": 2878,
                    "end": 2884
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false,
                    "start": 2887,
                    "end": 2893
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 2898,
                    "end": 2900
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2877,
                    "end": 2878
                  },
                  {
                    "type": "Literal",
                    "value": "S",
                    "raw": "\"S\"",
                    "start": 2884,
                    "end": 2887
                  },
                  {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 2893,
                    "end": 2898
                  }
                ],
                "start": 2873,
                "end": 2900
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null,
              "start": 2842,
              "end": 2901
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "templateConstNotOk4",
                "optional": false,
                "typeAnnotation": null,
                "start": 2915,
                "end": 2934
              },
              "typeAnnotation": null,
              "value": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "s",
                      "cooked": "s"
                    },
                    "tail": false,
                    "start": 2937,
                    "end": 2941
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false,
                    "start": 2946,
                    "end": 2952
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false,
                    "start": 2955,
                    "end": 2961
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 2967,
                    "end": 2969
                  }
                ],
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2941,
                      "end": 2942
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2945,
                      "end": 2946
                    },
                    "start": 2941,
                    "end": 2946
                  },
                  {
                    "type": "Literal",
                    "value": "S",
                    "raw": "\"S\"",
                    "start": 2952,
                    "end": 2955
                  },
                  {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 2962,
                      "end": 2967
                    },
                    "prefix": true,
                    "start": 2961,
                    "end": 2967
                  }
                ],
                "start": 2937,
                "end": 2969
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null,
              "start": 2906,
              "end": 2970
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "numberLetAsConst",
                "optional": false,
                "typeAnnotation": null,
                "start": 2976,
                "end": 2992
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2995,
                  "end": 2996
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3000,
                    "end": 3005
                  },
                  "typeArguments": null,
                  "start": 3000,
                  "end": 3005
                },
                "start": 2995,
                "end": 3005
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 2976,
              "end": 3006
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bigIntLetAsConst",
                "optional": false,
                "typeAnnotation": null,
                "start": 3012,
                "end": 3028
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "1n",
                  "bigint": "1",
                  "start": 3031,
                  "end": 3033
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3037,
                    "end": 3042
                  },
                  "typeArguments": null,
                  "start": 3037,
                  "end": 3042
                },
                "start": 3031,
                "end": 3042
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 3012,
              "end": 3043
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "stringLetAsConst",
                "optional": false,
                "typeAnnotation": null,
                "start": 3049,
                "end": 3065
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": "s",
                  "raw": "\"s\"",
                  "start": 3068,
                  "end": 3071
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3075,
                    "end": 3080
                  },
                  "typeArguments": null,
                  "start": 3075,
                  "end": 3080
                },
                "start": 3068,
                "end": 3080
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 3049,
              "end": 3081
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "templateLetOk1AsConst",
                "optional": false,
                "typeAnnotation": null,
                "start": 3087,
                "end": 3108
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "s",
                        "cooked": "s"
                      },
                      "tail": true,
                      "start": 3111,
                      "end": 3114
                    }
                  ],
                  "expressions": [],
                  "start": 3111,
                  "end": 3114
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3118,
                    "end": 3123
                  },
                  "typeArguments": null,
                  "start": 3118,
                  "end": 3123
                },
                "start": 3111,
                "end": 3123
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 3087,
              "end": 3124
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "templateLetOk2AsConst",
                "optional": false,
                "typeAnnotation": null,
                "start": 3129,
                "end": 3150
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "s",
                        "cooked": "s"
                      },
                      "tail": false,
                      "start": 3153,
                      "end": 3157
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": " - ",
                        "cooked": " - "
                      },
                      "tail": false,
                      "start": 3158,
                      "end": 3164
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 3167,
                      "end": 3169
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3157,
                      "end": 3158
                    },
                    {
                      "type": "Literal",
                      "value": "S",
                      "raw": "\"S\"",
                      "start": 3164,
                      "end": 3167
                    }
                  ],
                  "start": 3153,
                  "end": 3169
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3173,
                    "end": 3178
                  },
                  "typeArguments": null,
                  "start": 3173,
                  "end": 3178
                },
                "start": 3153,
                "end": 3178
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 3129,
              "end": 3179
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "templateLetOk3AsConst",
                "optional": false,
                "typeAnnotation": null,
                "start": 3184,
                "end": 3205
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "s",
                        "cooked": "s"
                      },
                      "tail": false,
                      "start": 3208,
                      "end": 3212
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": " - ",
                        "cooked": " - "
                      },
                      "tail": false,
                      "start": 3213,
                      "end": 3219
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": " - ",
                        "cooked": " - "
                      },
                      "tail": false,
                      "start": 3222,
                      "end": 3228
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 3233,
                      "end": 3235
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3212,
                      "end": 3213
                    },
                    {
                      "type": "Literal",
                      "value": "S",
                      "raw": "\"S\"",
                      "start": 3219,
                      "end": 3222
                    },
                    {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 3228,
                      "end": 3233
                    }
                  ],
                  "start": 3208,
                  "end": 3235
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3239,
                    "end": 3244
                  },
                  "typeArguments": null,
                  "start": 3239,
                  "end": 3244
                },
                "start": 3208,
                "end": 3244
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 3184,
              "end": 3245
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "templateLetOk4AsConst",
                "optional": false,
                "typeAnnotation": null,
                "start": 3250,
                "end": 3271
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "s",
                        "cooked": "s"
                      },
                      "tail": false,
                      "start": 3274,
                      "end": 3278
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": " - ",
                        "cooked": " - "
                      },
                      "tail": false,
                      "start": 3283,
                      "end": 3289
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": " - ",
                        "cooked": " - "
                      },
                      "tail": false,
                      "start": 3292,
                      "end": 3298
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 3304,
                      "end": 3306
                    }
                  ],
                  "expressions": [
                    {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3278,
                        "end": 3279
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3282,
                        "end": 3283
                      },
                      "start": 3278,
                      "end": 3283
                    },
                    {
                      "type": "Literal",
                      "value": "S",
                      "raw": "\"S\"",
                      "start": 3289,
                      "end": 3292
                    },
                    {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 3299,
                        "end": 3304
                      },
                      "prefix": true,
                      "start": 3298,
                      "end": 3304
                    }
                  ],
                  "start": 3274,
                  "end": 3306
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3310,
                    "end": 3315
                  },
                  "typeArguments": null,
                  "start": 3310,
                  "end": 3315
                },
                "start": 3274,
                "end": 3315
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 3250,
              "end": 3316
            }
          ],
          "start": 1814,
          "end": 3319
        },
        "abstract": false,
        "declare": false,
        "start": 1799,
        "end": 3319
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1792,
      "end": 3319
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "numberParam",
          "optional": false,
          "typeAnnotation": null,
          "start": 3337,
          "end": 3348
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 3349,
              "end": 3350
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 3353,
              "end": 3354
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 3349,
            "end": 3354
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 3357,
            "end": 3361
          },
          "start": 3355,
          "end": 3361
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 3362,
          "end": 3365
        },
        "expression": false,
        "start": 3328,
        "end": 3365
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3321,
      "end": 3365
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "numberParamBad1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3382,
          "end": 3397
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 3398,
              "end": 3399
            },
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3402,
                "end": 3403
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3406,
                "end": 3407
              },
              "start": 3402,
              "end": 3407
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 3398,
            "end": 3407
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 3410,
            "end": 3414
          },
          "start": 3408,
          "end": 3414
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 3415,
          "end": 3418
        },
        "expression": false,
        "start": 3373,
        "end": 3418
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3366,
      "end": 3418
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "numberParamBad2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3435,
          "end": 3450
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 3451,
              "end": 3452
            },
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
                  "start": 3455,
                  "end": 3459
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3460,
                  "end": 3466
                },
                "optional": false,
                "computed": false,
                "start": 3455,
                "end": 3466
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3455,
              "end": 3468
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 3451,
            "end": 3468
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 3471,
            "end": 3475
          },
          "start": 3469,
          "end": 3475
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 3476,
          "end": 3479
        },
        "expression": false,
        "start": 3426,
        "end": 3479
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3419,
      "end": 3479
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "numberParamBad3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3496,
          "end": 3511
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 3512,
              "end": 3513
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberParam",
              "optional": false,
              "typeAnnotation": null,
              "start": 3516,
              "end": 3527
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 3512,
            "end": 3527
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 3530,
            "end": 3534
          },
          "start": 3528,
          "end": 3534
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 3535,
          "end": 3538
        },
        "expression": false,
        "start": 3487,
        "end": 3538
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3480,
      "end": 3538
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntParam",
          "optional": false,
          "typeAnnotation": null,
          "start": 3556,
          "end": 3567
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 3568,
              "end": 3569
            },
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "1n",
              "bigint": "1",
              "start": 3572,
              "end": 3574
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 3568,
            "end": 3574
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 3577,
            "end": 3581
          },
          "start": 3575,
          "end": 3581
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 3582,
          "end": 3585
        },
        "expression": false,
        "start": 3547,
        "end": 3585
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3540,
      "end": 3585
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntParamBad1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3602,
          "end": 3617
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 3618,
              "end": 3619
            },
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "1n",
                "bigint": "1",
                "start": 3622,
                "end": 3624
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "1n",
                "bigint": "1",
                "start": 3627,
                "end": 3629
              },
              "start": 3622,
              "end": 3629
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 3618,
            "end": 3629
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 3632,
            "end": 3636
          },
          "start": 3630,
          "end": 3636
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 3637,
          "end": 3640
        },
        "expression": false,
        "start": 3593,
        "end": 3640
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3586,
      "end": 3640
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntParamBad2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3657,
          "end": 3672
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 3673,
              "end": 3674
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "time",
                "optional": false,
                "typeAnnotation": null,
                "start": 3677,
                "end": 3681
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3677,
              "end": 3683
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 3673,
            "end": 3683
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 3686,
            "end": 3690
          },
          "start": 3684,
          "end": 3690
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 3691,
          "end": 3694
        },
        "expression": false,
        "start": 3648,
        "end": 3694
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3641,
      "end": 3694
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigIntParamBad3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3711,
          "end": 3726
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 3727,
              "end": 3728
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntParam",
              "optional": false,
              "typeAnnotation": null,
              "start": 3731,
              "end": 3742
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 3727,
            "end": 3742
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 3745,
            "end": 3749
          },
          "start": 3743,
          "end": 3749
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 3750,
          "end": 3753
        },
        "expression": false,
        "start": 3702,
        "end": 3753
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3695,
      "end": 3753
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringParam",
          "optional": false,
          "typeAnnotation": null,
          "start": 3771,
          "end": 3782
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 3783,
              "end": 3784
            },
            "right": {
              "type": "Literal",
              "value": "s",
              "raw": "\"s\"",
              "start": 3787,
              "end": 3790
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 3783,
            "end": 3790
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 3793,
            "end": 3797
          },
          "start": 3791,
          "end": 3797
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 3798,
          "end": 3801
        },
        "expression": false,
        "start": 3762,
        "end": 3801
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3755,
      "end": 3801
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringParamBad",
          "optional": false,
          "typeAnnotation": null,
          "start": 3818,
          "end": 3832
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 3833,
              "end": 3834
            },
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 3837,
                "end": 3840
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 3843,
                "end": 3846
              },
              "start": 3837,
              "end": 3846
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 3833,
            "end": 3846
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 3849,
            "end": 3853
          },
          "start": 3847,
          "end": 3853
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 3854,
          "end": 3857
        },
        "expression": false,
        "start": 3809,
        "end": 3857
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3802,
      "end": 3857
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "templateParamOk1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3875,
          "end": 3891
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 3892,
              "end": 3893
            },
            "right": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": true,
                  "start": 3896,
                  "end": 3899
                }
              ],
              "expressions": [],
              "start": 3896,
              "end": 3899
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 3892,
            "end": 3899
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 3902,
            "end": 3906
          },
          "start": 3900,
          "end": 3906
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 3907,
          "end": 3910
        },
        "expression": false,
        "start": 3866,
        "end": 3910
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3859,
      "end": 3910
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "templateParamOk2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3927,
          "end": 3943
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 3944,
              "end": 3945
            },
            "right": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": false,
                  "start": 3948,
                  "end": 3952
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false,
                  "start": 3953,
                  "end": 3959
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 3962,
                  "end": 3964
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3952,
                  "end": 3953
                },
                {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 3959,
                  "end": 3962
                }
              ],
              "start": 3948,
              "end": 3964
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 3944,
            "end": 3964
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 3967,
            "end": 3971
          },
          "start": 3965,
          "end": 3971
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 3972,
          "end": 3975
        },
        "expression": false,
        "start": 3918,
        "end": 3975
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3911,
      "end": 3975
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "templateParamOk3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3992,
          "end": 4008
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 4009,
              "end": 4010
            },
            "right": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": false,
                  "start": 4013,
                  "end": 4017
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false,
                  "start": 4018,
                  "end": 4024
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false,
                  "start": 4027,
                  "end": 4033
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 4038,
                  "end": 4040
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 4017,
                  "end": 4018
                },
                {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 4024,
                  "end": 4027
                },
                {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 4033,
                  "end": 4038
                }
              ],
              "start": 4013,
              "end": 4040
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 4009,
            "end": 4040
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 4043,
            "end": 4047
          },
          "start": 4041,
          "end": 4047
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 4048,
          "end": 4051
        },
        "expression": false,
        "start": 3983,
        "end": 4051
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3976,
      "end": 4051
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "templateParamOk4",
          "optional": false,
          "typeAnnotation": null,
          "start": 4068,
          "end": 4084
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 4085,
              "end": 4086
            },
            "right": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": false,
                  "start": 4089,
                  "end": 4093
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false,
                  "start": 4098,
                  "end": 4104
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false,
                  "start": 4107,
                  "end": 4113
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 4119,
                  "end": 4121
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 4093,
                    "end": 4094
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 4097,
                    "end": 4098
                  },
                  "start": 4093,
                  "end": 4098
                },
                {
                  "type": "Literal",
                  "value": "S",
                  "raw": "\"S\"",
                  "start": 4104,
                  "end": 4107
                },
                {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 4114,
                    "end": 4119
                  },
                  "prefix": true,
                  "start": 4113,
                  "end": 4119
                }
              ],
              "start": 4089,
              "end": 4121
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 4085,
            "end": 4121
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 4124,
            "end": 4128
          },
          "start": 4122,
          "end": 4128
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 4129,
          "end": 4132
        },
        "expression": false,
        "start": 4059,
        "end": 4132
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4052,
      "end": 4132
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4150,
                    "end": 4151
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4150,
                    "end": 4151
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 4150,
                  "end": 4151
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 4148,
              "end": 4153
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4158,
                    "end": 4159
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 4161,
                    "end": 4162
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 4158,
                  "end": 4162
                }
              ],
              "start": 4156,
              "end": 4164
            },
            "definite": false,
            "start": 4148,
            "end": 4164
          }
        ],
        "declare": false,
        "start": 4142,
        "end": 4165
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4135,
      "end": 4165
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                null,
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4184,
                    "end": 4185
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 4188,
                    "end": 4189
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4184,
                  "end": 4189
                }
              ],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 4193,
                      "end": 4199
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 4201,
                      "end": 4207
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 4209,
                          "end": 4215
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 4218,
                          "end": 4227
                        }
                      ],
                      "start": 4209,
                      "end": 4227
                    }
                  ],
                  "start": 4192,
                  "end": 4228
                },
                "start": 4190,
                "end": 4228
              },
              "start": 4179,
              "end": 4228
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 4232,
                  "end": 4233
                },
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 4235,
                  "end": 4236
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 4238,
                  "end": 4239
                }
              ],
              "start": 4231,
              "end": 4240
            },
            "definite": false,
            "start": 4179,
            "end": 4240
          }
        ],
        "declare": false,
        "start": 4173,
        "end": 4241
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4166,
      "end": 4241
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 4259,
          "end": 4262
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                null,
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4268,
                  "end": 4269
                }
              ],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 4278,
                      "end": 4284
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 4290,
                      "end": 4296
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 4302,
                      "end": 4308
                    }
                  ],
                  "start": 4272,
                  "end": 4310
                },
                "start": 4270,
                "end": 4310
              },
              "start": 4263,
              "end": 4310
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 4314,
                  "end": 4315
                },
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 4317,
                  "end": 4318
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 4320,
                  "end": 4321
                }
              ],
              "start": 4313,
              "end": 4322
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 4263,
            "end": 4322
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 4325,
            "end": 4329
          },
          "start": 4323,
          "end": 4329
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 4330,
          "end": 4334
        },
        "expression": false,
        "start": 4250,
        "end": 4334
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4243,
      "end": 4334
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 4334
}
```
