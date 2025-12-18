__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16,
    "range": [
      8,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "time",
    "start": 17,
    "end": 21,
    "range": [
      17,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 25,
    "end": 31,
    "range": [
      25,
      31
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 32,
    "end": 38,
    "range": [
      32,
      38
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 39,
    "end": 44,
    "range": [
      39,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "numberConst",
    "start": 45,
    "end": 56,
    "range": [
      45,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 62,
    "end": 68,
    "range": [
      62,
      68
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 69,
    "end": 74,
    "range": [
      69,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "numberConstBad1",
    "start": 75,
    "end": 90,
    "range": [
      75,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Keyword",
    "value": "export",
    "start": 100,
    "end": 106,
    "range": [
      100,
      106
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 107,
    "end": 112,
    "range": [
      107,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "numberConstBad2",
    "start": 113,
    "end": 128,
    "range": [
      113,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
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
    "type": "Identifier",
    "value": "random",
    "start": 136,
    "end": 142,
    "range": [
      136,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 146,
    "end": 152,
    "range": [
      146,
      152
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 153,
    "end": 158,
    "range": [
      153,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "numberConstBad3",
    "start": 159,
    "end": 174,
    "range": [
      159,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "numberConst",
    "start": 177,
    "end": 188,
    "range": [
      177,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 191,
    "end": 197,
    "range": [
      191,
      197
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 198,
    "end": 203,
    "range": [
      198,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntConst",
    "start": 204,
    "end": 215,
    "range": [
      204,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 218,
    "end": 220,
    "range": [
      218,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 222,
    "end": 228,
    "range": [
      222,
      228
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 229,
    "end": 234,
    "range": [
      229,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntConstBad1",
    "start": 235,
    "end": 250,
    "range": [
      235,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 253,
    "end": 255,
    "range": [
      253,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 258,
    "end": 260,
    "range": [
      258,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 262,
    "end": 268,
    "range": [
      262,
      268
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 269,
    "end": 274,
    "range": [
      269,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntConstBad2",
    "start": 275,
    "end": 290,
    "range": [
      275,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "time",
    "start": 293,
    "end": 297,
    "range": [
      293,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 301,
    "end": 307,
    "range": [
      301,
      307
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 308,
    "end": 313,
    "range": [
      308,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntConstBad3",
    "start": 314,
    "end": 329,
    "range": [
      314,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntConst",
    "start": 332,
    "end": 343,
    "range": [
      332,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 346,
    "end": 352,
    "range": [
      346,
      352
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 353,
    "end": 358,
    "range": [
      353,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "stringConst",
    "start": 359,
    "end": 370,
    "range": [
      359,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 373,
    "end": 376,
    "range": [
      373,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 378,
    "end": 384,
    "range": [
      378,
      384
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 385,
    "end": 390,
    "range": [
      385,
      390
    ]
  },
  {
    "type": "Identifier",
    "value": "stringConstBad",
    "start": 391,
    "end": 405,
    "range": [
      391,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 408,
    "end": 411,
    "range": [
      408,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 414,
    "end": 417,
    "range": [
      414,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 446,
    "end": 452,
    "range": [
      446,
      452
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 453,
    "end": 458,
    "range": [
      453,
      458
    ]
  },
  {
    "type": "Identifier",
    "value": "templateConstOk1",
    "start": 459,
    "end": 475,
    "range": [
      459,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Template",
    "value": "`s`",
    "start": 478,
    "end": 481,
    "range": [
      478,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 483,
    "end": 489,
    "range": [
      483,
      489
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 490,
    "end": 495,
    "range": [
      490,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "templateConstNotOk2",
    "start": 496,
    "end": 515,
    "range": [
      496,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Template",
    "value": "`s${",
    "start": 518,
    "end": 522,
    "range": [
      518,
      522
    ]
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 522,
    "end": 524,
    "range": [
      522,
      524
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 524,
    "end": 526,
    "range": [
      524,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 528,
    "end": 534,
    "range": [
      528,
      534
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 535,
    "end": 540,
    "range": [
      535,
      540
    ]
  },
  {
    "type": "Identifier",
    "value": "templateConstNotOk3",
    "start": 541,
    "end": 560,
    "range": [
      541,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Template",
    "value": "`s${",
    "start": 563,
    "end": 567,
    "range": [
      563,
      567
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 568,
    "end": 574,
    "range": [
      568,
      574
    ]
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 574,
    "end": 577,
    "range": [
      574,
      577
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 577,
    "end": 579,
    "range": [
      577,
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
    "type": "Keyword",
    "value": "export",
    "start": 581,
    "end": 587,
    "range": [
      581,
      587
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 588,
    "end": 593,
    "range": [
      588,
      593
    ]
  },
  {
    "type": "Identifier",
    "value": "templateConstNotOk4",
    "start": 594,
    "end": 613,
    "range": [
      594,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Template",
    "value": "`s${",
    "start": 616,
    "end": 620,
    "range": [
      616,
      620
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 621,
    "end": 627,
    "range": [
      621,
      627
    ]
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 627,
    "end": 630,
    "range": [
      627,
      630
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 630,
    "end": 636,
    "range": [
      630,
      636
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 636,
    "end": 641,
    "range": [
      636,
      641
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 641,
    "end": 643,
    "range": [
      641,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 645,
    "end": 651,
    "range": [
      645,
      651
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 652,
    "end": 657,
    "range": [
      652,
      657
    ]
  },
  {
    "type": "Identifier",
    "value": "templateConstNotOk5",
    "start": 658,
    "end": 677,
    "range": [
      658,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Template",
    "value": "`s${",
    "start": 680,
    "end": 684,
    "range": [
      680,
      684
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 689,
    "end": 695,
    "range": [
      689,
      695
    ]
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 695,
    "end": 698,
    "range": [
      695,
      698
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 698,
    "end": 704,
    "range": [
      698,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 705,
    "end": 710,
    "range": [
      705,
      710
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 710,
    "end": 712,
    "range": [
      710,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 715,
    "end": 721,
    "range": [
      715,
      721
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 722,
    "end": 725,
    "range": [
      722,
      725
    ]
  },
  {
    "type": "Identifier",
    "value": "numberLet",
    "start": 726,
    "end": 735,
    "range": [
      726,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 741,
    "end": 747,
    "range": [
      741,
      747
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 748,
    "end": 751,
    "range": [
      748,
      751
    ]
  },
  {
    "type": "Identifier",
    "value": "numberLetBad1",
    "start": 752,
    "end": 765,
    "range": [
      752,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 775,
    "end": 781,
    "range": [
      775,
      781
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 782,
    "end": 785,
    "range": [
      782,
      785
    ]
  },
  {
    "type": "Identifier",
    "value": "numberLetBad2",
    "start": 786,
    "end": 799,
    "range": [
      786,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 802,
    "end": 806,
    "range": [
      802,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 807,
    "end": 813,
    "range": [
      807,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 817,
    "end": 823,
    "range": [
      817,
      823
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 824,
    "end": 827,
    "range": [
      824,
      827
    ]
  },
  {
    "type": "Identifier",
    "value": "numberLetBad3",
    "start": 828,
    "end": 841,
    "range": [
      828,
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
    "type": "Identifier",
    "value": "numberLet",
    "start": 844,
    "end": 853,
    "range": [
      844,
      853
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 856,
    "end": 862,
    "range": [
      856,
      862
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 863,
    "end": 866,
    "range": [
      863,
      866
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntLet",
    "start": 867,
    "end": 876,
    "range": [
      867,
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
    "type": "Numeric",
    "value": "1n",
    "start": 879,
    "end": 881,
    "range": [
      879,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 883,
    "end": 889,
    "range": [
      883,
      889
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 890,
    "end": 893,
    "range": [
      890,
      893
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntLetBad1",
    "start": 894,
    "end": 907,
    "range": [
      894,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 910,
    "end": 912,
    "range": [
      910,
      912
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 915,
    "end": 917,
    "range": [
      915,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 919,
    "end": 925,
    "range": [
      919,
      925
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 926,
    "end": 929,
    "range": [
      926,
      929
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntLetBad2",
    "start": 930,
    "end": 943,
    "range": [
      930,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Identifier",
    "value": "time",
    "start": 946,
    "end": 950,
    "range": [
      946,
      950
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 951,
    "end": 952,
    "range": [
      951,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 954,
    "end": 960,
    "range": [
      954,
      960
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 961,
    "end": 964,
    "range": [
      961,
      964
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntLetBad3",
    "start": 965,
    "end": 978,
    "range": [
      965,
      978
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntLet",
    "start": 981,
    "end": 990,
    "range": [
      981,
      990
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 990,
    "end": 991,
    "range": [
      990,
      991
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 993,
    "end": 999,
    "range": [
      993,
      999
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1000,
    "end": 1003,
    "range": [
      1000,
      1003
    ]
  },
  {
    "type": "Identifier",
    "value": "stringLet",
    "start": 1004,
    "end": 1013,
    "range": [
      1004,
      1013
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1014,
    "end": 1015,
    "range": [
      1014,
      1015
    ]
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 1016,
    "end": 1019,
    "range": [
      1016,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1021,
    "end": 1027,
    "range": [
      1021,
      1027
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1028,
    "end": 1031,
    "range": [
      1028,
      1031
    ]
  },
  {
    "type": "Identifier",
    "value": "stringLetBad",
    "start": 1032,
    "end": 1044,
    "range": [
      1032,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 1047,
    "end": 1050,
    "range": [
      1047,
      1050
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 1053,
    "end": 1056,
    "range": [
      1053,
      1056
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1056,
    "end": 1057,
    "range": [
      1056,
      1057
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1059,
    "end": 1065,
    "range": [
      1059,
      1065
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1066,
    "end": 1069,
    "range": [
      1066,
      1069
    ]
  },
  {
    "type": "Identifier",
    "value": "templateLetOk1",
    "start": 1070,
    "end": 1084,
    "range": [
      1070,
      1084
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Template",
    "value": "`s`",
    "start": 1087,
    "end": 1090,
    "range": [
      1087,
      1090
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1092,
    "end": 1098,
    "range": [
      1092,
      1098
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1099,
    "end": 1102,
    "range": [
      1099,
      1102
    ]
  },
  {
    "type": "Identifier",
    "value": "templateLetOk2",
    "start": 1103,
    "end": 1117,
    "range": [
      1103,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1118,
    "end": 1119,
    "range": [
      1118,
      1119
    ]
  },
  {
    "type": "Template",
    "value": "`s${",
    "start": 1120,
    "end": 1124,
    "range": [
      1120,
      1124
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 1125,
    "end": 1131,
    "range": [
      1125,
      1131
    ]
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 1131,
    "end": 1134,
    "range": [
      1131,
      1134
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1134,
    "end": 1136,
    "range": [
      1134,
      1136
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1136,
    "end": 1137,
    "range": [
      1136,
      1137
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1138,
    "end": 1144,
    "range": [
      1138,
      1144
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1145,
    "end": 1148,
    "range": [
      1145,
      1148
    ]
  },
  {
    "type": "Identifier",
    "value": "templateLetOk3",
    "start": 1149,
    "end": 1163,
    "range": [
      1149,
      1163
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1164,
    "end": 1165,
    "range": [
      1164,
      1165
    ]
  },
  {
    "type": "Template",
    "value": "`s${",
    "start": 1166,
    "end": 1170,
    "range": [
      1166,
      1170
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1170,
    "end": 1171,
    "range": [
      1170,
      1171
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 1171,
    "end": 1177,
    "range": [
      1171,
      1177
    ]
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 1177,
    "end": 1180,
    "range": [
      1177,
      1180
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 1180,
    "end": 1186,
    "range": [
      1180,
      1186
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1186,
    "end": 1191,
    "range": [
      1186,
      1191
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1191,
    "end": 1193,
    "range": [
      1191,
      1193
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1193,
    "end": 1194,
    "range": [
      1193,
      1194
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1195,
    "end": 1201,
    "range": [
      1195,
      1201
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1202,
    "end": 1205,
    "range": [
      1202,
      1205
    ]
  },
  {
    "type": "Identifier",
    "value": "templateLetOk4",
    "start": 1206,
    "end": 1220,
    "range": [
      1206,
      1220
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1221,
    "end": 1222,
    "range": [
      1221,
      1222
    ]
  },
  {
    "type": "Template",
    "value": "`s${",
    "start": 1223,
    "end": 1227,
    "range": [
      1223,
      1227
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1231,
    "end": 1232,
    "range": [
      1231,
      1232
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 1232,
    "end": 1238,
    "range": [
      1232,
      1238
    ]
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 1238,
    "end": 1241,
    "range": [
      1238,
      1241
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 1241,
    "end": 1247,
    "range": [
      1241,
      1247
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1247,
    "end": 1248,
    "range": [
      1247,
      1248
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1248,
    "end": 1253,
    "range": [
      1248,
      1253
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1253,
    "end": 1255,
    "range": [
      1253,
      1255
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1255,
    "end": 1256,
    "range": [
      1255,
      1256
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1271,
    "end": 1277,
    "range": [
      1271,
      1277
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1278,
    "end": 1281,
    "range": [
      1278,
      1281
    ]
  },
  {
    "type": "Identifier",
    "value": "numberLetAsConst",
    "start": 1282,
    "end": 1298,
    "range": [
      1282,
      1298
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1299,
    "end": 1300,
    "range": [
      1299,
      1300
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1301,
    "end": 1302,
    "range": [
      1301,
      1302
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1303,
    "end": 1305,
    "range": [
      1303,
      1305
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1306,
    "end": 1311,
    "range": [
      1306,
      1311
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1314,
    "end": 1320,
    "range": [
      1314,
      1320
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1321,
    "end": 1324,
    "range": [
      1321,
      1324
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntLetAsConst",
    "start": 1325,
    "end": 1341,
    "range": [
      1325,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1342,
    "end": 1343,
    "range": [
      1342,
      1343
    ]
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 1344,
    "end": 1346,
    "range": [
      1344,
      1346
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1347,
    "end": 1349,
    "range": [
      1347,
      1349
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1350,
    "end": 1355,
    "range": [
      1350,
      1355
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1355,
    "end": 1356,
    "range": [
      1355,
      1356
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1358,
    "end": 1364,
    "range": [
      1358,
      1364
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1365,
    "end": 1368,
    "range": [
      1365,
      1368
    ]
  },
  {
    "type": "Identifier",
    "value": "stringLetAsConst",
    "start": 1369,
    "end": 1385,
    "range": [
      1369,
      1385
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1386,
    "end": 1387,
    "range": [
      1386,
      1387
    ]
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 1388,
    "end": 1391,
    "range": [
      1388,
      1391
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1392,
    "end": 1394,
    "range": [
      1392,
      1394
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1395,
    "end": 1400,
    "range": [
      1395,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1403,
    "end": 1409,
    "range": [
      1403,
      1409
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1410,
    "end": 1413,
    "range": [
      1410,
      1413
    ]
  },
  {
    "type": "Identifier",
    "value": "templateLetOk1AsConst",
    "start": 1414,
    "end": 1435,
    "range": [
      1414,
      1435
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1436,
    "end": 1437,
    "range": [
      1436,
      1437
    ]
  },
  {
    "type": "Template",
    "value": "`s`",
    "start": 1438,
    "end": 1441,
    "range": [
      1438,
      1441
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1442,
    "end": 1444,
    "range": [
      1442,
      1444
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1445,
    "end": 1450,
    "range": [
      1445,
      1450
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1450,
    "end": 1451,
    "range": [
      1450,
      1451
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1452,
    "end": 1458,
    "range": [
      1452,
      1458
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1459,
    "end": 1462,
    "range": [
      1459,
      1462
    ]
  },
  {
    "type": "Identifier",
    "value": "templateLetOk2AsConst",
    "start": 1463,
    "end": 1484,
    "range": [
      1463,
      1484
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1485,
    "end": 1486,
    "range": [
      1485,
      1486
    ]
  },
  {
    "type": "Template",
    "value": "`s${",
    "start": 1487,
    "end": 1491,
    "range": [
      1487,
      1491
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1491,
    "end": 1492,
    "range": [
      1491,
      1492
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 1492,
    "end": 1498,
    "range": [
      1492,
      1498
    ]
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 1498,
    "end": 1501,
    "range": [
      1498,
      1501
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1501,
    "end": 1503,
    "range": [
      1501,
      1503
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1504,
    "end": 1506,
    "range": [
      1504,
      1506
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1507,
    "end": 1512,
    "range": [
      1507,
      1512
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1512,
    "end": 1513,
    "range": [
      1512,
      1513
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1514,
    "end": 1520,
    "range": [
      1514,
      1520
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1521,
    "end": 1524,
    "range": [
      1521,
      1524
    ]
  },
  {
    "type": "Identifier",
    "value": "templateLetOk3AsConst",
    "start": 1525,
    "end": 1546,
    "range": [
      1525,
      1546
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1547,
    "end": 1548,
    "range": [
      1547,
      1548
    ]
  },
  {
    "type": "Template",
    "value": "`s${",
    "start": 1549,
    "end": 1553,
    "range": [
      1549,
      1553
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1553,
    "end": 1554,
    "range": [
      1553,
      1554
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 1554,
    "end": 1560,
    "range": [
      1554,
      1560
    ]
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 1560,
    "end": 1563,
    "range": [
      1560,
      1563
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 1563,
    "end": 1569,
    "range": [
      1563,
      1569
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1569,
    "end": 1574,
    "range": [
      1569,
      1574
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1574,
    "end": 1576,
    "range": [
      1574,
      1576
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1577,
    "end": 1579,
    "range": [
      1577,
      1579
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1580,
    "end": 1585,
    "range": [
      1580,
      1585
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1585,
    "end": 1586,
    "range": [
      1585,
      1586
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1587,
    "end": 1593,
    "range": [
      1587,
      1593
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1594,
    "end": 1597,
    "range": [
      1594,
      1597
    ]
  },
  {
    "type": "Identifier",
    "value": "templateLetOk4AsConst",
    "start": 1598,
    "end": 1619,
    "range": [
      1598,
      1619
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1620,
    "end": 1621,
    "range": [
      1620,
      1621
    ]
  },
  {
    "type": "Template",
    "value": "`s${",
    "start": 1622,
    "end": 1626,
    "range": [
      1622,
      1626
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1628,
    "end": 1629,
    "range": [
      1628,
      1629
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1630,
    "end": 1631,
    "range": [
      1630,
      1631
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 1631,
    "end": 1637,
    "range": [
      1631,
      1637
    ]
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 1637,
    "end": 1640,
    "range": [
      1637,
      1640
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 1640,
    "end": 1646,
    "range": [
      1640,
      1646
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1646,
    "end": 1647,
    "range": [
      1646,
      1647
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1647,
    "end": 1652,
    "range": [
      1647,
      1652
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1652,
    "end": 1654,
    "range": [
      1652,
      1654
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1655,
    "end": 1657,
    "range": [
      1655,
      1657
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1658,
    "end": 1663,
    "range": [
      1658,
      1663
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1663,
    "end": 1664,
    "range": [
      1663,
      1664
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1666,
    "end": 1672,
    "range": [
      1666,
      1672
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1673,
    "end": 1676,
    "range": [
      1673,
      1676
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1677,
    "end": 1680,
    "range": [
      1677,
      1680
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1681,
    "end": 1682,
    "range": [
      1681,
      1682
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1683,
    "end": 1684,
    "range": [
      1683,
      1684
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1684,
    "end": 1685,
    "range": [
      1684,
      1685
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1685,
    "end": 1686,
    "range": [
      1685,
      1686
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1687,
    "end": 1688,
    "range": [
      1687,
      1688
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1688,
    "end": 1689,
    "range": [
      1688,
      1689
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1690,
    "end": 1691,
    "range": [
      1690,
      1691
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1691,
    "end": 1692,
    "range": [
      1691,
      1692
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1692,
    "end": 1693,
    "range": [
      1692,
      1693
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1694,
    "end": 1700,
    "range": [
      1694,
      1700
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1701,
    "end": 1704,
    "range": [
      1701,
      1704
    ]
  },
  {
    "type": "Identifier",
    "value": "arrConst",
    "start": 1705,
    "end": 1713,
    "range": [
      1705,
      1713
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1714,
    "end": 1715,
    "range": [
      1714,
      1715
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1716,
    "end": 1717,
    "range": [
      1716,
      1717
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1717,
    "end": 1718,
    "range": [
      1717,
      1718
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1718,
    "end": 1719,
    "range": [
      1718,
      1719
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1720,
    "end": 1721,
    "range": [
      1720,
      1721
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1721,
    "end": 1722,
    "range": [
      1721,
      1722
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1724,
    "end": 1725,
    "range": [
      1724,
      1725
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1726,
    "end": 1728,
    "range": [
      1726,
      1728
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1729,
    "end": 1734,
    "range": [
      1729,
      1734
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1736,
    "end": 1742,
    "range": [
      1736,
      1742
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1743,
    "end": 1746,
    "range": [
      1743,
      1746
    ]
  },
  {
    "type": "Identifier",
    "value": "arrWithSpread",
    "start": 1747,
    "end": 1760,
    "range": [
      1747,
      1760
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1761,
    "end": 1762,
    "range": [
      1761,
      1762
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1763,
    "end": 1764,
    "range": [
      1763,
      1764
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1764,
    "end": 1765,
    "range": [
      1764,
      1765
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1765,
    "end": 1766,
    "range": [
      1765,
      1766
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1767,
    "end": 1768,
    "range": [
      1767,
      1768
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1768,
    "end": 1769,
    "range": [
      1768,
      1769
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1770,
    "end": 1771,
    "range": [
      1770,
      1771
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1771,
    "end": 1772,
    "range": [
      1771,
      1772
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1773,
    "end": 1776,
    "range": [
      1773,
      1776
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1776,
    "end": 1779,
    "range": [
      1776,
      1779
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1779,
    "end": 1780,
    "range": [
      1779,
      1780
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1781,
    "end": 1783,
    "range": [
      1781,
      1783
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1784,
    "end": 1789,
    "range": [
      1784,
      1789
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1789,
    "end": 1790,
    "range": [
      1789,
      1790
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1792,
    "end": 1798,
    "range": [
      1792,
      1798
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1799,
    "end": 1804,
    "range": [
      1799,
      1804
    ]
  },
  {
    "type": "Identifier",
    "value": "Exported",
    "start": 1805,
    "end": 1813,
    "range": [
      1805,
      1813
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1814,
    "end": 1815,
    "range": [
      1814,
      1815
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1820,
    "end": 1826,
    "range": [
      1820,
      1826
    ]
  },
  {
    "type": "Identifier",
    "value": "numberLet",
    "start": 1827,
    "end": 1836,
    "range": [
      1827,
      1836
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1837,
    "end": 1838,
    "range": [
      1837,
      1838
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1840,
    "end": 1841,
    "range": [
      1840,
      1841
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1846,
    "end": 1852,
    "range": [
      1846,
      1852
    ]
  },
  {
    "type": "Identifier",
    "value": "numberLetBad1",
    "start": 1853,
    "end": 1866,
    "range": [
      1853,
      1866
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1867,
    "end": 1868,
    "range": [
      1867,
      1868
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1869,
    "end": 1870,
    "range": [
      1869,
      1870
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1871,
    "end": 1872,
    "range": [
      1871,
      1872
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1873,
    "end": 1874,
    "range": [
      1873,
      1874
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1874,
    "end": 1875,
    "range": [
      1874,
      1875
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1880,
    "end": 1886,
    "range": [
      1880,
      1886
    ]
  },
  {
    "type": "Identifier",
    "value": "numberLetBad2",
    "start": 1887,
    "end": 1900,
    "range": [
      1887,
      1900
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1903,
    "end": 1907,
    "range": [
      1903,
      1907
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1907,
    "end": 1908,
    "range": [
      1907,
      1908
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 1908,
    "end": 1914,
    "range": [
      1908,
      1914
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1914,
    "end": 1915,
    "range": [
      1914,
      1915
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1915,
    "end": 1916,
    "range": [
      1915,
      1916
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1916,
    "end": 1917,
    "range": [
      1916,
      1917
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1922,
    "end": 1928,
    "range": [
      1922,
      1928
    ]
  },
  {
    "type": "Identifier",
    "value": "numberLetBad3",
    "start": 1929,
    "end": 1942,
    "range": [
      1929,
      1942
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1943,
    "end": 1944,
    "range": [
      1943,
      1944
    ]
  },
  {
    "type": "Identifier",
    "value": "numberLet",
    "start": 1945,
    "end": 1954,
    "range": [
      1945,
      1954
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1954,
    "end": 1955,
    "range": [
      1954,
      1955
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1961,
    "end": 1967,
    "range": [
      1961,
      1967
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntLet",
    "start": 1968,
    "end": 1977,
    "range": [
      1968,
      1977
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1978,
    "end": 1979,
    "range": [
      1978,
      1979
    ]
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 1980,
    "end": 1982,
    "range": [
      1980,
      1982
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1982,
    "end": 1983,
    "range": [
      1982,
      1983
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1988,
    "end": 1994,
    "range": [
      1988,
      1994
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntLetBad1",
    "start": 1995,
    "end": 2008,
    "range": [
      1995,
      2008
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2009,
    "end": 2010,
    "range": [
      2009,
      2010
    ]
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 2011,
    "end": 2013,
    "range": [
      2011,
      2013
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2014,
    "end": 2015,
    "range": [
      2014,
      2015
    ]
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 2016,
    "end": 2018,
    "range": [
      2016,
      2018
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2018,
    "end": 2019,
    "range": [
      2018,
      2019
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2024,
    "end": 2030,
    "range": [
      2024,
      2030
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntLetBad2",
    "start": 2031,
    "end": 2044,
    "range": [
      2031,
      2044
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2045,
    "end": 2046,
    "range": [
      2045,
      2046
    ]
  },
  {
    "type": "Identifier",
    "value": "time",
    "start": 2047,
    "end": 2051,
    "range": [
      2047,
      2051
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2051,
    "end": 2052,
    "range": [
      2051,
      2052
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2052,
    "end": 2053,
    "range": [
      2052,
      2053
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2053,
    "end": 2054,
    "range": [
      2053,
      2054
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2059,
    "end": 2065,
    "range": [
      2059,
      2065
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntLetBad3",
    "start": 2066,
    "end": 2079,
    "range": [
      2066,
      2079
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2080,
    "end": 2081,
    "range": [
      2080,
      2081
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntLet",
    "start": 2082,
    "end": 2091,
    "range": [
      2082,
      2091
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2091,
    "end": 2092,
    "range": [
      2091,
      2092
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2098,
    "end": 2104,
    "range": [
      2098,
      2104
    ]
  },
  {
    "type": "Identifier",
    "value": "stringLet",
    "start": 2105,
    "end": 2114,
    "range": [
      2105,
      2114
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2115,
    "end": 2116,
    "range": [
      2115,
      2116
    ]
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 2117,
    "end": 2120,
    "range": [
      2117,
      2120
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2120,
    "end": 2121,
    "range": [
      2120,
      2121
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2126,
    "end": 2132,
    "range": [
      2126,
      2132
    ]
  },
  {
    "type": "Identifier",
    "value": "stringLetBad",
    "start": 2133,
    "end": 2145,
    "range": [
      2133,
      2145
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2146,
    "end": 2147,
    "range": [
      2146,
      2147
    ]
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 2148,
    "end": 2151,
    "range": [
      2148,
      2151
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2152,
    "end": 2153,
    "range": [
      2152,
      2153
    ]
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 2154,
    "end": 2157,
    "range": [
      2154,
      2157
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2157,
    "end": 2158,
    "range": [
      2157,
      2158
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2164,
    "end": 2170,
    "range": [
      2164,
      2170
    ]
  },
  {
    "type": "Identifier",
    "value": "templateLetOk1",
    "start": 2171,
    "end": 2185,
    "range": [
      2171,
      2185
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2186,
    "end": 2187,
    "range": [
      2186,
      2187
    ]
  },
  {
    "type": "Template",
    "value": "`s`",
    "start": 2188,
    "end": 2191,
    "range": [
      2188,
      2191
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2191,
    "end": 2192,
    "range": [
      2191,
      2192
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2197,
    "end": 2203,
    "range": [
      2197,
      2203
    ]
  },
  {
    "type": "Identifier",
    "value": "templateLetOk2",
    "start": 2204,
    "end": 2218,
    "range": [
      2204,
      2218
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2219,
    "end": 2220,
    "range": [
      2219,
      2220
    ]
  },
  {
    "type": "Template",
    "value": "`s${",
    "start": 2221,
    "end": 2225,
    "range": [
      2221,
      2225
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2225,
    "end": 2226,
    "range": [
      2225,
      2226
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 2226,
    "end": 2232,
    "range": [
      2226,
      2232
    ]
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 2232,
    "end": 2235,
    "range": [
      2232,
      2235
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2235,
    "end": 2237,
    "range": [
      2235,
      2237
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2237,
    "end": 2238,
    "range": [
      2237,
      2238
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2243,
    "end": 2249,
    "range": [
      2243,
      2249
    ]
  },
  {
    "type": "Identifier",
    "value": "templateLetOk3",
    "start": 2250,
    "end": 2264,
    "range": [
      2250,
      2264
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2265,
    "end": 2266,
    "range": [
      2265,
      2266
    ]
  },
  {
    "type": "Template",
    "value": "`s${",
    "start": 2267,
    "end": 2271,
    "range": [
      2267,
      2271
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2271,
    "end": 2272,
    "range": [
      2271,
      2272
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 2272,
    "end": 2278,
    "range": [
      2272,
      2278
    ]
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 2278,
    "end": 2281,
    "range": [
      2278,
      2281
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 2281,
    "end": 2287,
    "range": [
      2281,
      2287
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2287,
    "end": 2292,
    "range": [
      2287,
      2292
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2292,
    "end": 2294,
    "range": [
      2292,
      2294
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2294,
    "end": 2295,
    "range": [
      2294,
      2295
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2300,
    "end": 2306,
    "range": [
      2300,
      2306
    ]
  },
  {
    "type": "Identifier",
    "value": "templateLetOk4",
    "start": 2307,
    "end": 2321,
    "range": [
      2307,
      2321
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2322,
    "end": 2323,
    "range": [
      2322,
      2323
    ]
  },
  {
    "type": "Template",
    "value": "`s${",
    "start": 2324,
    "end": 2328,
    "range": [
      2324,
      2328
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2328,
    "end": 2329,
    "range": [
      2328,
      2329
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2330,
    "end": 2331,
    "range": [
      2330,
      2331
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2332,
    "end": 2333,
    "range": [
      2332,
      2333
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 2333,
    "end": 2339,
    "range": [
      2333,
      2339
    ]
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 2339,
    "end": 2342,
    "range": [
      2339,
      2342
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 2342,
    "end": 2348,
    "range": [
      2342,
      2348
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2348,
    "end": 2349,
    "range": [
      2348,
      2349
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2349,
    "end": 2354,
    "range": [
      2349,
      2354
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2354,
    "end": 2356,
    "range": [
      2354,
      2356
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2356,
    "end": 2357,
    "range": [
      2356,
      2357
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2364,
    "end": 2372,
    "range": [
      2364,
      2372
    ]
  },
  {
    "type": "Identifier",
    "value": "numberConst",
    "start": 2373,
    "end": 2384,
    "range": [
      2373,
      2384
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2385,
    "end": 2386,
    "range": [
      2385,
      2386
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2387,
    "end": 2388,
    "range": [
      2387,
      2388
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2388,
    "end": 2389,
    "range": [
      2388,
      2389
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2394,
    "end": 2402,
    "range": [
      2394,
      2402
    ]
  },
  {
    "type": "Identifier",
    "value": "numberConstBad1",
    "start": 2403,
    "end": 2418,
    "range": [
      2403,
      2418
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2419,
    "end": 2420,
    "range": [
      2419,
      2420
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2421,
    "end": 2422,
    "range": [
      2421,
      2422
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2423,
    "end": 2424,
    "range": [
      2423,
      2424
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2425,
    "end": 2426,
    "range": [
      2425,
      2426
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2426,
    "end": 2427,
    "range": [
      2426,
      2427
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2432,
    "end": 2440,
    "range": [
      2432,
      2440
    ]
  },
  {
    "type": "Identifier",
    "value": "numberConstBad2",
    "start": 2441,
    "end": 2456,
    "range": [
      2441,
      2456
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2457,
    "end": 2458,
    "range": [
      2457,
      2458
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 2459,
    "end": 2463,
    "range": [
      2459,
      2463
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2463,
    "end": 2464,
    "range": [
      2463,
      2464
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 2464,
    "end": 2470,
    "range": [
      2464,
      2470
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2470,
    "end": 2471,
    "range": [
      2470,
      2471
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2471,
    "end": 2472,
    "range": [
      2471,
      2472
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2472,
    "end": 2473,
    "range": [
      2472,
      2473
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2478,
    "end": 2486,
    "range": [
      2478,
      2486
    ]
  },
  {
    "type": "Identifier",
    "value": "numberConstBad3",
    "start": 2487,
    "end": 2502,
    "range": [
      2487,
      2502
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2503,
    "end": 2504,
    "range": [
      2503,
      2504
    ]
  },
  {
    "type": "Identifier",
    "value": "numberConst",
    "start": 2505,
    "end": 2516,
    "range": [
      2505,
      2516
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2516,
    "end": 2517,
    "range": [
      2516,
      2517
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2523,
    "end": 2531,
    "range": [
      2523,
      2531
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntConst",
    "start": 2532,
    "end": 2543,
    "range": [
      2532,
      2543
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2544,
    "end": 2545,
    "range": [
      2544,
      2545
    ]
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 2546,
    "end": 2548,
    "range": [
      2546,
      2548
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2548,
    "end": 2549,
    "range": [
      2548,
      2549
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2554,
    "end": 2562,
    "range": [
      2554,
      2562
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntConstBad1",
    "start": 2563,
    "end": 2578,
    "range": [
      2563,
      2578
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2579,
    "end": 2580,
    "range": [
      2579,
      2580
    ]
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 2581,
    "end": 2583,
    "range": [
      2581,
      2583
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2584,
    "end": 2585,
    "range": [
      2584,
      2585
    ]
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 2586,
    "end": 2588,
    "range": [
      2586,
      2588
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2588,
    "end": 2589,
    "range": [
      2588,
      2589
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2594,
    "end": 2602,
    "range": [
      2594,
      2602
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntConstBad2",
    "start": 2603,
    "end": 2618,
    "range": [
      2603,
      2618
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2619,
    "end": 2620,
    "range": [
      2619,
      2620
    ]
  },
  {
    "type": "Identifier",
    "value": "time",
    "start": 2621,
    "end": 2625,
    "range": [
      2621,
      2625
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2625,
    "end": 2626,
    "range": [
      2625,
      2626
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2626,
    "end": 2627,
    "range": [
      2626,
      2627
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2627,
    "end": 2628,
    "range": [
      2627,
      2628
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2633,
    "end": 2641,
    "range": [
      2633,
      2641
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntConstBad3",
    "start": 2642,
    "end": 2657,
    "range": [
      2642,
      2657
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2658,
    "end": 2659,
    "range": [
      2658,
      2659
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntConst",
    "start": 2660,
    "end": 2671,
    "range": [
      2660,
      2671
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2671,
    "end": 2672,
    "range": [
      2671,
      2672
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2678,
    "end": 2686,
    "range": [
      2678,
      2686
    ]
  },
  {
    "type": "Identifier",
    "value": "stringConst",
    "start": 2687,
    "end": 2698,
    "range": [
      2687,
      2698
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2699,
    "end": 2700,
    "range": [
      2699,
      2700
    ]
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 2701,
    "end": 2704,
    "range": [
      2701,
      2704
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2704,
    "end": 2705,
    "range": [
      2704,
      2705
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2710,
    "end": 2718,
    "range": [
      2710,
      2718
    ]
  },
  {
    "type": "Identifier",
    "value": "stringConstBad",
    "start": 2719,
    "end": 2733,
    "range": [
      2719,
      2733
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2734,
    "end": 2735,
    "range": [
      2734,
      2735
    ]
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 2736,
    "end": 2739,
    "range": [
      2736,
      2739
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2740,
    "end": 2741,
    "range": [
      2740,
      2741
    ]
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 2742,
    "end": 2745,
    "range": [
      2742,
      2745
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2745,
    "end": 2746,
    "range": [
      2745,
      2746
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2752,
    "end": 2760,
    "range": [
      2752,
      2760
    ]
  },
  {
    "type": "Identifier",
    "value": "templateConstOk1",
    "start": 2761,
    "end": 2777,
    "range": [
      2761,
      2777
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2778,
    "end": 2779,
    "range": [
      2778,
      2779
    ]
  },
  {
    "type": "Template",
    "value": "`s`",
    "start": 2780,
    "end": 2783,
    "range": [
      2780,
      2783
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2783,
    "end": 2784,
    "range": [
      2783,
      2784
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2789,
    "end": 2797,
    "range": [
      2789,
      2797
    ]
  },
  {
    "type": "Identifier",
    "value": "templateConstNotOk2",
    "start": 2798,
    "end": 2817,
    "range": [
      2798,
      2817
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2818,
    "end": 2819,
    "range": [
      2818,
      2819
    ]
  },
  {
    "type": "Template",
    "value": "`s${",
    "start": 2820,
    "end": 2824,
    "range": [
      2820,
      2824
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2824,
    "end": 2825,
    "range": [
      2824,
      2825
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 2825,
    "end": 2831,
    "range": [
      2825,
      2831
    ]
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 2831,
    "end": 2834,
    "range": [
      2831,
      2834
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2834,
    "end": 2836,
    "range": [
      2834,
      2836
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2836,
    "end": 2837,
    "range": [
      2836,
      2837
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2842,
    "end": 2850,
    "range": [
      2842,
      2850
    ]
  },
  {
    "type": "Identifier",
    "value": "templateConstNotOk3",
    "start": 2851,
    "end": 2870,
    "range": [
      2851,
      2870
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2871,
    "end": 2872,
    "range": [
      2871,
      2872
    ]
  },
  {
    "type": "Template",
    "value": "`s${",
    "start": 2873,
    "end": 2877,
    "range": [
      2873,
      2877
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2877,
    "end": 2878,
    "range": [
      2877,
      2878
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 2878,
    "end": 2884,
    "range": [
      2878,
      2884
    ]
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 2884,
    "end": 2887,
    "range": [
      2884,
      2887
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 2887,
    "end": 2893,
    "range": [
      2887,
      2893
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2893,
    "end": 2898,
    "range": [
      2893,
      2898
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2898,
    "end": 2900,
    "range": [
      2898,
      2900
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2900,
    "end": 2901,
    "range": [
      2900,
      2901
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2906,
    "end": 2914,
    "range": [
      2906,
      2914
    ]
  },
  {
    "type": "Identifier",
    "value": "templateConstNotOk4",
    "start": 2915,
    "end": 2934,
    "range": [
      2915,
      2934
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2935,
    "end": 2936,
    "range": [
      2935,
      2936
    ]
  },
  {
    "type": "Template",
    "value": "`s${",
    "start": 2937,
    "end": 2941,
    "range": [
      2937,
      2941
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2941,
    "end": 2942,
    "range": [
      2941,
      2942
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2943,
    "end": 2944,
    "range": [
      2943,
      2944
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2945,
    "end": 2946,
    "range": [
      2945,
      2946
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 2946,
    "end": 2952,
    "range": [
      2946,
      2952
    ]
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 2952,
    "end": 2955,
    "range": [
      2952,
      2955
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 2955,
    "end": 2961,
    "range": [
      2955,
      2961
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2961,
    "end": 2962,
    "range": [
      2961,
      2962
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2962,
    "end": 2967,
    "range": [
      2962,
      2967
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2967,
    "end": 2969,
    "range": [
      2967,
      2969
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2969,
    "end": 2970,
    "range": [
      2969,
      2970
    ]
  },
  {
    "type": "Identifier",
    "value": "numberLetAsConst",
    "start": 2976,
    "end": 2992,
    "range": [
      2976,
      2992
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2993,
    "end": 2994,
    "range": [
      2993,
      2994
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2995,
    "end": 2996,
    "range": [
      2995,
      2996
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2997,
    "end": 2999,
    "range": [
      2997,
      2999
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 3000,
    "end": 3005,
    "range": [
      3000,
      3005
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3005,
    "end": 3006,
    "range": [
      3005,
      3006
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntLetAsConst",
    "start": 3012,
    "end": 3028,
    "range": [
      3012,
      3028
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3029,
    "end": 3030,
    "range": [
      3029,
      3030
    ]
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 3031,
    "end": 3033,
    "range": [
      3031,
      3033
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3034,
    "end": 3036,
    "range": [
      3034,
      3036
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 3037,
    "end": 3042,
    "range": [
      3037,
      3042
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3042,
    "end": 3043,
    "range": [
      3042,
      3043
    ]
  },
  {
    "type": "Identifier",
    "value": "stringLetAsConst",
    "start": 3049,
    "end": 3065,
    "range": [
      3049,
      3065
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3066,
    "end": 3067,
    "range": [
      3066,
      3067
    ]
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 3068,
    "end": 3071,
    "range": [
      3068,
      3071
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3072,
    "end": 3074,
    "range": [
      3072,
      3074
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 3075,
    "end": 3080,
    "range": [
      3075,
      3080
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3080,
    "end": 3081,
    "range": [
      3080,
      3081
    ]
  },
  {
    "type": "Identifier",
    "value": "templateLetOk1AsConst",
    "start": 3087,
    "end": 3108,
    "range": [
      3087,
      3108
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3109,
    "end": 3110,
    "range": [
      3109,
      3110
    ]
  },
  {
    "type": "Template",
    "value": "`s`",
    "start": 3111,
    "end": 3114,
    "range": [
      3111,
      3114
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3115,
    "end": 3117,
    "range": [
      3115,
      3117
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 3118,
    "end": 3123,
    "range": [
      3118,
      3123
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3123,
    "end": 3124,
    "range": [
      3123,
      3124
    ]
  },
  {
    "type": "Identifier",
    "value": "templateLetOk2AsConst",
    "start": 3129,
    "end": 3150,
    "range": [
      3129,
      3150
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3151,
    "end": 3152,
    "range": [
      3151,
      3152
    ]
  },
  {
    "type": "Template",
    "value": "`s${",
    "start": 3153,
    "end": 3157,
    "range": [
      3153,
      3157
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3157,
    "end": 3158,
    "range": [
      3157,
      3158
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 3158,
    "end": 3164,
    "range": [
      3158,
      3164
    ]
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 3164,
    "end": 3167,
    "range": [
      3164,
      3167
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3167,
    "end": 3169,
    "range": [
      3167,
      3169
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3170,
    "end": 3172,
    "range": [
      3170,
      3172
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 3173,
    "end": 3178,
    "range": [
      3173,
      3178
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3178,
    "end": 3179,
    "range": [
      3178,
      3179
    ]
  },
  {
    "type": "Identifier",
    "value": "templateLetOk3AsConst",
    "start": 3184,
    "end": 3205,
    "range": [
      3184,
      3205
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3206,
    "end": 3207,
    "range": [
      3206,
      3207
    ]
  },
  {
    "type": "Template",
    "value": "`s${",
    "start": 3208,
    "end": 3212,
    "range": [
      3208,
      3212
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3212,
    "end": 3213,
    "range": [
      3212,
      3213
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 3213,
    "end": 3219,
    "range": [
      3213,
      3219
    ]
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 3219,
    "end": 3222,
    "range": [
      3219,
      3222
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 3222,
    "end": 3228,
    "range": [
      3222,
      3228
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3228,
    "end": 3233,
    "range": [
      3228,
      3233
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3233,
    "end": 3235,
    "range": [
      3233,
      3235
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3236,
    "end": 3238,
    "range": [
      3236,
      3238
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 3239,
    "end": 3244,
    "range": [
      3239,
      3244
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3244,
    "end": 3245,
    "range": [
      3244,
      3245
    ]
  },
  {
    "type": "Identifier",
    "value": "templateLetOk4AsConst",
    "start": 3250,
    "end": 3271,
    "range": [
      3250,
      3271
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3272,
    "end": 3273,
    "range": [
      3272,
      3273
    ]
  },
  {
    "type": "Template",
    "value": "`s${",
    "start": 3274,
    "end": 3278,
    "range": [
      3274,
      3278
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3278,
    "end": 3279,
    "range": [
      3278,
      3279
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3280,
    "end": 3281,
    "range": [
      3280,
      3281
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3282,
    "end": 3283,
    "range": [
      3282,
      3283
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 3283,
    "end": 3289,
    "range": [
      3283,
      3289
    ]
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 3289,
    "end": 3292,
    "range": [
      3289,
      3292
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 3292,
    "end": 3298,
    "range": [
      3292,
      3298
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3298,
    "end": 3299,
    "range": [
      3298,
      3299
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3299,
    "end": 3304,
    "range": [
      3299,
      3304
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3304,
    "end": 3306,
    "range": [
      3304,
      3306
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3307,
    "end": 3309,
    "range": [
      3307,
      3309
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 3310,
    "end": 3315,
    "range": [
      3310,
      3315
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3315,
    "end": 3316,
    "range": [
      3315,
      3316
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3318,
    "end": 3319,
    "range": [
      3318,
      3319
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3321,
    "end": 3327,
    "range": [
      3321,
      3327
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3328,
    "end": 3336,
    "range": [
      3328,
      3336
    ]
  },
  {
    "type": "Identifier",
    "value": "numberParam",
    "start": 3337,
    "end": 3348,
    "range": [
      3337,
      3348
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3348,
    "end": 3349,
    "range": [
      3348,
      3349
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3349,
    "end": 3350,
    "range": [
      3349,
      3350
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3351,
    "end": 3352,
    "range": [
      3351,
      3352
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3353,
    "end": 3354,
    "range": [
      3353,
      3354
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3354,
    "end": 3355,
    "range": [
      3354,
      3355
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3355,
    "end": 3356,
    "range": [
      3355,
      3356
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3357,
    "end": 3361,
    "range": [
      3357,
      3361
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3362,
    "end": 3363,
    "range": [
      3362,
      3363
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3364,
    "end": 3365,
    "range": [
      3364,
      3365
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3366,
    "end": 3372,
    "range": [
      3366,
      3372
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3373,
    "end": 3381,
    "range": [
      3373,
      3381
    ]
  },
  {
    "type": "Identifier",
    "value": "numberParamBad1",
    "start": 3382,
    "end": 3397,
    "range": [
      3382,
      3397
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3397,
    "end": 3398,
    "range": [
      3397,
      3398
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3398,
    "end": 3399,
    "range": [
      3398,
      3399
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3400,
    "end": 3401,
    "range": [
      3400,
      3401
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3402,
    "end": 3403,
    "range": [
      3402,
      3403
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3404,
    "end": 3405,
    "range": [
      3404,
      3405
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3406,
    "end": 3407,
    "range": [
      3406,
      3407
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3407,
    "end": 3408,
    "range": [
      3407,
      3408
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3408,
    "end": 3409,
    "range": [
      3408,
      3409
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3410,
    "end": 3414,
    "range": [
      3410,
      3414
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3415,
    "end": 3416,
    "range": [
      3415,
      3416
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3417,
    "end": 3418,
    "range": [
      3417,
      3418
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3419,
    "end": 3425,
    "range": [
      3419,
      3425
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3426,
    "end": 3434,
    "range": [
      3426,
      3434
    ]
  },
  {
    "type": "Identifier",
    "value": "numberParamBad2",
    "start": 3435,
    "end": 3450,
    "range": [
      3435,
      3450
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3450,
    "end": 3451,
    "range": [
      3450,
      3451
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3451,
    "end": 3452,
    "range": [
      3451,
      3452
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3453,
    "end": 3454,
    "range": [
      3453,
      3454
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 3455,
    "end": 3459,
    "range": [
      3455,
      3459
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3459,
    "end": 3460,
    "range": [
      3459,
      3460
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 3460,
    "end": 3466,
    "range": [
      3460,
      3466
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3466,
    "end": 3467,
    "range": [
      3466,
      3467
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3467,
    "end": 3468,
    "range": [
      3467,
      3468
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3468,
    "end": 3469,
    "range": [
      3468,
      3469
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3469,
    "end": 3470,
    "range": [
      3469,
      3470
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3471,
    "end": 3475,
    "range": [
      3471,
      3475
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3476,
    "end": 3477,
    "range": [
      3476,
      3477
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3478,
    "end": 3479,
    "range": [
      3478,
      3479
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3480,
    "end": 3486,
    "range": [
      3480,
      3486
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3487,
    "end": 3495,
    "range": [
      3487,
      3495
    ]
  },
  {
    "type": "Identifier",
    "value": "numberParamBad3",
    "start": 3496,
    "end": 3511,
    "range": [
      3496,
      3511
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3511,
    "end": 3512,
    "range": [
      3511,
      3512
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3512,
    "end": 3513,
    "range": [
      3512,
      3513
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3514,
    "end": 3515,
    "range": [
      3514,
      3515
    ]
  },
  {
    "type": "Identifier",
    "value": "numberParam",
    "start": 3516,
    "end": 3527,
    "range": [
      3516,
      3527
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3527,
    "end": 3528,
    "range": [
      3527,
      3528
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3528,
    "end": 3529,
    "range": [
      3528,
      3529
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3530,
    "end": 3534,
    "range": [
      3530,
      3534
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3535,
    "end": 3536,
    "range": [
      3535,
      3536
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3537,
    "end": 3538,
    "range": [
      3537,
      3538
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3540,
    "end": 3546,
    "range": [
      3540,
      3546
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3547,
    "end": 3555,
    "range": [
      3547,
      3555
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntParam",
    "start": 3556,
    "end": 3567,
    "range": [
      3556,
      3567
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3567,
    "end": 3568,
    "range": [
      3567,
      3568
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3568,
    "end": 3569,
    "range": [
      3568,
      3569
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3570,
    "end": 3571,
    "range": [
      3570,
      3571
    ]
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 3572,
    "end": 3574,
    "range": [
      3572,
      3574
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3574,
    "end": 3575,
    "range": [
      3574,
      3575
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3575,
    "end": 3576,
    "range": [
      3575,
      3576
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3577,
    "end": 3581,
    "range": [
      3577,
      3581
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3582,
    "end": 3583,
    "range": [
      3582,
      3583
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3584,
    "end": 3585,
    "range": [
      3584,
      3585
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3586,
    "end": 3592,
    "range": [
      3586,
      3592
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3593,
    "end": 3601,
    "range": [
      3593,
      3601
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntParamBad1",
    "start": 3602,
    "end": 3617,
    "range": [
      3602,
      3617
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3617,
    "end": 3618,
    "range": [
      3617,
      3618
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3618,
    "end": 3619,
    "range": [
      3618,
      3619
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3620,
    "end": 3621,
    "range": [
      3620,
      3621
    ]
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 3622,
    "end": 3624,
    "range": [
      3622,
      3624
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3625,
    "end": 3626,
    "range": [
      3625,
      3626
    ]
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 3627,
    "end": 3629,
    "range": [
      3627,
      3629
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3629,
    "end": 3630,
    "range": [
      3629,
      3630
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3630,
    "end": 3631,
    "range": [
      3630,
      3631
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3632,
    "end": 3636,
    "range": [
      3632,
      3636
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3637,
    "end": 3638,
    "range": [
      3637,
      3638
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3639,
    "end": 3640,
    "range": [
      3639,
      3640
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3641,
    "end": 3647,
    "range": [
      3641,
      3647
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3648,
    "end": 3656,
    "range": [
      3648,
      3656
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntParamBad2",
    "start": 3657,
    "end": 3672,
    "range": [
      3657,
      3672
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3672,
    "end": 3673,
    "range": [
      3672,
      3673
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3673,
    "end": 3674,
    "range": [
      3673,
      3674
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3675,
    "end": 3676,
    "range": [
      3675,
      3676
    ]
  },
  {
    "type": "Identifier",
    "value": "time",
    "start": 3677,
    "end": 3681,
    "range": [
      3677,
      3681
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3681,
    "end": 3682,
    "range": [
      3681,
      3682
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3682,
    "end": 3683,
    "range": [
      3682,
      3683
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3683,
    "end": 3684,
    "range": [
      3683,
      3684
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3684,
    "end": 3685,
    "range": [
      3684,
      3685
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3686,
    "end": 3690,
    "range": [
      3686,
      3690
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3691,
    "end": 3692,
    "range": [
      3691,
      3692
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3693,
    "end": 3694,
    "range": [
      3693,
      3694
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3695,
    "end": 3701,
    "range": [
      3695,
      3701
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3702,
    "end": 3710,
    "range": [
      3702,
      3710
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntParamBad3",
    "start": 3711,
    "end": 3726,
    "range": [
      3711,
      3726
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3726,
    "end": 3727,
    "range": [
      3726,
      3727
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3727,
    "end": 3728,
    "range": [
      3727,
      3728
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3729,
    "end": 3730,
    "range": [
      3729,
      3730
    ]
  },
  {
    "type": "Identifier",
    "value": "bigIntParam",
    "start": 3731,
    "end": 3742,
    "range": [
      3731,
      3742
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3742,
    "end": 3743,
    "range": [
      3742,
      3743
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3743,
    "end": 3744,
    "range": [
      3743,
      3744
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3745,
    "end": 3749,
    "range": [
      3745,
      3749
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3750,
    "end": 3751,
    "range": [
      3750,
      3751
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3752,
    "end": 3753,
    "range": [
      3752,
      3753
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3755,
    "end": 3761,
    "range": [
      3755,
      3761
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3762,
    "end": 3770,
    "range": [
      3762,
      3770
    ]
  },
  {
    "type": "Identifier",
    "value": "stringParam",
    "start": 3771,
    "end": 3782,
    "range": [
      3771,
      3782
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3782,
    "end": 3783,
    "range": [
      3782,
      3783
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3783,
    "end": 3784,
    "range": [
      3783,
      3784
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3785,
    "end": 3786,
    "range": [
      3785,
      3786
    ]
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 3787,
    "end": 3790,
    "range": [
      3787,
      3790
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3790,
    "end": 3791,
    "range": [
      3790,
      3791
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3791,
    "end": 3792,
    "range": [
      3791,
      3792
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3793,
    "end": 3797,
    "range": [
      3793,
      3797
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3798,
    "end": 3799,
    "range": [
      3798,
      3799
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3800,
    "end": 3801,
    "range": [
      3800,
      3801
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3802,
    "end": 3808,
    "range": [
      3802,
      3808
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3809,
    "end": 3817,
    "range": [
      3809,
      3817
    ]
  },
  {
    "type": "Identifier",
    "value": "stringParamBad",
    "start": 3818,
    "end": 3832,
    "range": [
      3818,
      3832
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3832,
    "end": 3833,
    "range": [
      3832,
      3833
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3833,
    "end": 3834,
    "range": [
      3833,
      3834
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3835,
    "end": 3836,
    "range": [
      3835,
      3836
    ]
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 3837,
    "end": 3840,
    "range": [
      3837,
      3840
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3841,
    "end": 3842,
    "range": [
      3841,
      3842
    ]
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 3843,
    "end": 3846,
    "range": [
      3843,
      3846
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3846,
    "end": 3847,
    "range": [
      3846,
      3847
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3847,
    "end": 3848,
    "range": [
      3847,
      3848
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3849,
    "end": 3853,
    "range": [
      3849,
      3853
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3854,
    "end": 3855,
    "range": [
      3854,
      3855
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3856,
    "end": 3857,
    "range": [
      3856,
      3857
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3859,
    "end": 3865,
    "range": [
      3859,
      3865
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3866,
    "end": 3874,
    "range": [
      3866,
      3874
    ]
  },
  {
    "type": "Identifier",
    "value": "templateParamOk1",
    "start": 3875,
    "end": 3891,
    "range": [
      3875,
      3891
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3891,
    "end": 3892,
    "range": [
      3891,
      3892
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3892,
    "end": 3893,
    "range": [
      3892,
      3893
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3894,
    "end": 3895,
    "range": [
      3894,
      3895
    ]
  },
  {
    "type": "Template",
    "value": "`s`",
    "start": 3896,
    "end": 3899,
    "range": [
      3896,
      3899
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3899,
    "end": 3900,
    "range": [
      3899,
      3900
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3900,
    "end": 3901,
    "range": [
      3900,
      3901
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3902,
    "end": 3906,
    "range": [
      3902,
      3906
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3907,
    "end": 3908,
    "range": [
      3907,
      3908
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3909,
    "end": 3910,
    "range": [
      3909,
      3910
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3911,
    "end": 3917,
    "range": [
      3911,
      3917
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3918,
    "end": 3926,
    "range": [
      3918,
      3926
    ]
  },
  {
    "type": "Identifier",
    "value": "templateParamOk2",
    "start": 3927,
    "end": 3943,
    "range": [
      3927,
      3943
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3943,
    "end": 3944,
    "range": [
      3943,
      3944
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3944,
    "end": 3945,
    "range": [
      3944,
      3945
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3946,
    "end": 3947,
    "range": [
      3946,
      3947
    ]
  },
  {
    "type": "Template",
    "value": "`s${",
    "start": 3948,
    "end": 3952,
    "range": [
      3948,
      3952
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3952,
    "end": 3953,
    "range": [
      3952,
      3953
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 3953,
    "end": 3959,
    "range": [
      3953,
      3959
    ]
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 3959,
    "end": 3962,
    "range": [
      3959,
      3962
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 3962,
    "end": 3964,
    "range": [
      3962,
      3964
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3964,
    "end": 3965,
    "range": [
      3964,
      3965
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3965,
    "end": 3966,
    "range": [
      3965,
      3966
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3967,
    "end": 3971,
    "range": [
      3967,
      3971
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3972,
    "end": 3973,
    "range": [
      3972,
      3973
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3974,
    "end": 3975,
    "range": [
      3974,
      3975
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3976,
    "end": 3982,
    "range": [
      3976,
      3982
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3983,
    "end": 3991,
    "range": [
      3983,
      3991
    ]
  },
  {
    "type": "Identifier",
    "value": "templateParamOk3",
    "start": 3992,
    "end": 4008,
    "range": [
      3992,
      4008
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4008,
    "end": 4009,
    "range": [
      4008,
      4009
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4009,
    "end": 4010,
    "range": [
      4009,
      4010
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4011,
    "end": 4012,
    "range": [
      4011,
      4012
    ]
  },
  {
    "type": "Template",
    "value": "`s${",
    "start": 4013,
    "end": 4017,
    "range": [
      4013,
      4017
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4017,
    "end": 4018,
    "range": [
      4017,
      4018
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 4018,
    "end": 4024,
    "range": [
      4018,
      4024
    ]
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 4024,
    "end": 4027,
    "range": [
      4024,
      4027
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 4027,
    "end": 4033,
    "range": [
      4027,
      4033
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 4033,
    "end": 4038,
    "range": [
      4033,
      4038
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4038,
    "end": 4040,
    "range": [
      4038,
      4040
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4040,
    "end": 4041,
    "range": [
      4040,
      4041
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4041,
    "end": 4042,
    "range": [
      4041,
      4042
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4043,
    "end": 4047,
    "range": [
      4043,
      4047
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4048,
    "end": 4049,
    "range": [
      4048,
      4049
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4050,
    "end": 4051,
    "range": [
      4050,
      4051
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4052,
    "end": 4058,
    "range": [
      4052,
      4058
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4059,
    "end": 4067,
    "range": [
      4059,
      4067
    ]
  },
  {
    "type": "Identifier",
    "value": "templateParamOk4",
    "start": 4068,
    "end": 4084,
    "range": [
      4068,
      4084
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4084,
    "end": 4085,
    "range": [
      4084,
      4085
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 4085,
    "end": 4086,
    "range": [
      4085,
      4086
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4087,
    "end": 4088,
    "range": [
      4087,
      4088
    ]
  },
  {
    "type": "Template",
    "value": "`s${",
    "start": 4089,
    "end": 4093,
    "range": [
      4089,
      4093
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4093,
    "end": 4094,
    "range": [
      4093,
      4094
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4095,
    "end": 4096,
    "range": [
      4095,
      4096
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4097,
    "end": 4098,
    "range": [
      4097,
      4098
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 4098,
    "end": 4104,
    "range": [
      4098,
      4104
    ]
  },
  {
    "type": "String",
    "value": "\"S\"",
    "start": 4104,
    "end": 4107,
    "range": [
      4104,
      4107
    ]
  },
  {
    "type": "Template",
    "value": "} - ${",
    "start": 4107,
    "end": 4113,
    "range": [
      4107,
      4113
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 4113,
    "end": 4114,
    "range": [
      4113,
      4114
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 4114,
    "end": 4119,
    "range": [
      4114,
      4119
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4119,
    "end": 4121,
    "range": [
      4119,
      4121
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4121,
    "end": 4122,
    "range": [
      4121,
      4122
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4122,
    "end": 4123,
    "range": [
      4122,
      4123
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4124,
    "end": 4128,
    "range": [
      4124,
      4128
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4129,
    "end": 4130,
    "range": [
      4129,
      4130
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4131,
    "end": 4132,
    "range": [
      4131,
      4132
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4135,
    "end": 4141,
    "range": [
      4135,
      4141
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4142,
    "end": 4147,
    "range": [
      4142,
      4147
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4148,
    "end": 4149,
    "range": [
      4148,
      4149
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4150,
    "end": 4151,
    "range": [
      4150,
      4151
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4152,
    "end": 4153,
    "range": [
      4152,
      4153
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4154,
    "end": 4155,
    "range": [
      4154,
      4155
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4156,
    "end": 4157,
    "range": [
      4156,
      4157
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4158,
    "end": 4159,
    "range": [
      4158,
      4159
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4159,
    "end": 4160,
    "range": [
      4159,
      4160
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4161,
    "end": 4162,
    "range": [
      4161,
      4162
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4163,
    "end": 4164,
    "range": [
      4163,
      4164
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4164,
    "end": 4165,
    "range": [
      4164,
      4165
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4166,
    "end": 4172,
    "range": [
      4166,
      4172
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4173,
    "end": 4178,
    "range": [
      4173,
      4178
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4179,
    "end": 4180,
    "range": [
      4179,
      4180
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4180,
    "end": 4181,
    "range": [
      4180,
      4181
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4182,
    "end": 4183,
    "range": [
      4182,
      4183
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4184,
    "end": 4185,
    "range": [
      4184,
      4185
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4186,
    "end": 4187,
    "range": [
      4186,
      4187
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4188,
    "end": 4189,
    "range": [
      4188,
      4189
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4189,
    "end": 4190,
    "range": [
      4189,
      4190
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4190,
    "end": 4191,
    "range": [
      4190,
      4191
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4192,
    "end": 4193,
    "range": [
      4192,
      4193
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4193,
    "end": 4199,
    "range": [
      4193,
      4199
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4199,
    "end": 4200,
    "range": [
      4199,
      4200
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4201,
    "end": 4207,
    "range": [
      4201,
      4207
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4207,
    "end": 4208,
    "range": [
      4207,
      4208
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4209,
    "end": 4215,
    "range": [
      4209,
      4215
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4216,
    "end": 4217,
    "range": [
      4216,
      4217
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4218,
    "end": 4227,
    "range": [
      4218,
      4227
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4227,
    "end": 4228,
    "range": [
      4227,
      4228
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4229,
    "end": 4230,
    "range": [
      4229,
      4230
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4231,
    "end": 4232,
    "range": [
      4231,
      4232
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4232,
    "end": 4233,
    "range": [
      4232,
      4233
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4233,
    "end": 4234,
    "range": [
      4233,
      4234
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4235,
    "end": 4236,
    "range": [
      4235,
      4236
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4236,
    "end": 4237,
    "range": [
      4236,
      4237
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4238,
    "end": 4239,
    "range": [
      4238,
      4239
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4239,
    "end": 4240,
    "range": [
      4239,
      4240
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4240,
    "end": 4241,
    "range": [
      4240,
      4241
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4243,
    "end": 4249,
    "range": [
      4243,
      4249
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4250,
    "end": 4258,
    "range": [
      4250,
      4258
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4259,
    "end": 4262,
    "range": [
      4259,
      4262
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4262,
    "end": 4263,
    "range": [
      4262,
      4263
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4263,
    "end": 4264,
    "range": [
      4263,
      4264
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4264,
    "end": 4265,
    "range": [
      4264,
      4265
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4266,
    "end": 4267,
    "range": [
      4266,
      4267
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4268,
    "end": 4269,
    "range": [
      4268,
      4269
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4269,
    "end": 4270,
    "range": [
      4269,
      4270
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4270,
    "end": 4271,
    "range": [
      4270,
      4271
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4272,
    "end": 4273,
    "range": [
      4272,
      4273
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4278,
    "end": 4284,
    "range": [
      4278,
      4284
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4284,
    "end": 4285,
    "range": [
      4284,
      4285
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4290,
    "end": 4296,
    "range": [
      4290,
      4296
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4296,
    "end": 4297,
    "range": [
      4296,
      4297
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4302,
    "end": 4308,
    "range": [
      4302,
      4308
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4309,
    "end": 4310,
    "range": [
      4309,
      4310
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4311,
    "end": 4312,
    "range": [
      4311,
      4312
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4313,
    "end": 4314,
    "range": [
      4313,
      4314
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4314,
    "end": 4315,
    "range": [
      4314,
      4315
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4315,
    "end": 4316,
    "range": [
      4315,
      4316
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4317,
    "end": 4318,
    "range": [
      4317,
      4318
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4318,
    "end": 4319,
    "range": [
      4318,
      4319
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4320,
    "end": 4321,
    "range": [
      4320,
      4321
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4321,
    "end": 4322,
    "range": [
      4321,
      4322
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4322,
    "end": 4323,
    "range": [
      4322,
      4323
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4323,
    "end": 4324,
    "range": [
      4323,
      4324
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4325,
    "end": 4329,
    "range": [
      4325,
      4329
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4330,
    "end": 4331,
    "range": [
      4330,
      4331
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4333,
    "end": 4334,
    "range": [
      4333,
      4334
    ]
  }
]
```
