__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4334,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 21,
        "decorators": [],
        "name": "time",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 23,
        "end": 31,
        "typeAnnotation": {
          "type": "TSBigIntKeyword",
          "start": 25,
          "end": 31
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 61,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 39,
        "end": 61,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 45,
            "end": 60,
            "id": {
              "type": "Identifier",
              "start": 45,
              "end": 56,
              "decorators": [],
              "name": "numberConst",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 59,
              "end": 60,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 62,
      "end": 99,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 69,
        "end": 99,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 75,
            "end": 98,
            "id": {
              "type": "Identifier",
              "start": 75,
              "end": 90,
              "decorators": [],
              "name": "numberConstBad1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "BinaryExpression",
              "start": 93,
              "end": 98,
              "left": {
                "type": "Literal",
                "start": 93,
                "end": 94,
                "value": 1,
                "raw": "1"
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 97,
                "end": 98,
                "value": 1,
                "raw": "1"
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 100,
      "end": 145,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 107,
        "end": 145,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 113,
            "end": 144,
            "id": {
              "type": "Identifier",
              "start": 113,
              "end": 128,
              "decorators": [],
              "name": "numberConstBad2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 131,
              "end": 144,
              "callee": {
                "type": "MemberExpression",
                "start": 131,
                "end": 142,
                "object": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 135,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 142,
                  "decorators": [],
                  "name": "random",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 146,
      "end": 189,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 153,
        "end": 189,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 159,
            "end": 188,
            "id": {
              "type": "Identifier",
              "start": 159,
              "end": 174,
              "decorators": [],
              "name": "numberConstBad3",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 177,
              "end": 188,
              "decorators": [],
              "name": "numberConst",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 191,
      "end": 221,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 198,
        "end": 221,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 204,
            "end": 220,
            "id": {
              "type": "Identifier",
              "start": 204,
              "end": 215,
              "decorators": [],
              "name": "bigIntConst",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 218,
              "end": 220,
              "value": null,
              "raw": "1n",
              "bigint": "1"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 222,
      "end": 261,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 229,
        "end": 261,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 235,
            "end": 260,
            "id": {
              "type": "Identifier",
              "start": 235,
              "end": 250,
              "decorators": [],
              "name": "bigIntConstBad1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "BinaryExpression",
              "start": 253,
              "end": 260,
              "left": {
                "type": "Literal",
                "start": 253,
                "end": 255,
                "value": null,
                "raw": "1n",
                "bigint": "1"
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 258,
                "end": 260,
                "value": null,
                "raw": "1n",
                "bigint": "1"
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 262,
      "end": 300,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 269,
        "end": 300,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 275,
            "end": 299,
            "id": {
              "type": "Identifier",
              "start": 275,
              "end": 290,
              "decorators": [],
              "name": "bigIntConstBad2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 293,
              "end": 299,
              "callee": {
                "type": "Identifier",
                "start": 293,
                "end": 297,
                "decorators": [],
                "name": "time",
                "optional": false,
                "typeAnnotation": null
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 301,
      "end": 344,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 308,
        "end": 344,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 314,
            "end": 343,
            "id": {
              "type": "Identifier",
              "start": 314,
              "end": 329,
              "decorators": [],
              "name": "bigIntConstBad3",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 332,
              "end": 343,
              "decorators": [],
              "name": "bigIntConst",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 346,
      "end": 377,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 353,
        "end": 377,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 359,
            "end": 376,
            "id": {
              "type": "Identifier",
              "start": 359,
              "end": 370,
              "decorators": [],
              "name": "stringConst",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 373,
              "end": 376,
              "value": "s",
              "raw": "\"s\""
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 378,
      "end": 418,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 385,
        "end": 418,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 391,
            "end": 417,
            "id": {
              "type": "Identifier",
              "start": 391,
              "end": 405,
              "decorators": [],
              "name": "stringConstBad",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "BinaryExpression",
              "start": 408,
              "end": 417,
              "left": {
                "type": "Literal",
                "start": 408,
                "end": 411,
                "value": "s",
                "raw": "\"s\""
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 414,
                "end": 417,
                "value": "s",
                "raw": "\"s\""
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 446,
      "end": 482,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 453,
        "end": 482,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 459,
            "end": 481,
            "id": {
              "type": "Identifier",
              "start": 459,
              "end": 475,
              "decorators": [],
              "name": "templateConstOk1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TemplateLiteral",
              "start": 478,
              "end": 481,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 478,
                  "end": 481,
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": true
                }
              ],
              "expressions": []
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 483,
      "end": 527,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 490,
        "end": 527,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 496,
            "end": 526,
            "id": {
              "type": "Identifier",
              "start": 496,
              "end": 515,
              "decorators": [],
              "name": "templateConstNotOk2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TemplateLiteral",
              "start": 518,
              "end": 526,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 518,
                  "end": 522,
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 524,
                  "end": 526,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "start": 522,
                  "end": 524,
                  "value": null,
                  "raw": "1n",
                  "bigint": "1"
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 528,
      "end": 580,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 535,
        "end": 580,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 541,
            "end": 579,
            "id": {
              "type": "Identifier",
              "start": 541,
              "end": 560,
              "decorators": [],
              "name": "templateConstNotOk3",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TemplateLiteral",
              "start": 563,
              "end": 579,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 563,
                  "end": 567,
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 568,
                  "end": 574,
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 577,
                  "end": 579,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "start": 567,
                  "end": 568,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 574,
                  "end": 577,
                  "value": "S",
                  "raw": "\"S\""
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 581,
      "end": 644,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 588,
        "end": 644,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 594,
            "end": 643,
            "id": {
              "type": "Identifier",
              "start": 594,
              "end": 613,
              "decorators": [],
              "name": "templateConstNotOk4",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TemplateLiteral",
              "start": 616,
              "end": 643,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 616,
                  "end": 620,
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 621,
                  "end": 627,
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 630,
                  "end": 636,
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 641,
                  "end": 643,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "start": 620,
                  "end": 621,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 627,
                  "end": 630,
                  "value": "S",
                  "raw": "\"S\""
                },
                {
                  "type": "Literal",
                  "start": 636,
                  "end": 641,
                  "value": false,
                  "raw": "false"
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 645,
      "end": 713,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 652,
        "end": 713,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 658,
            "end": 712,
            "id": {
              "type": "Identifier",
              "start": 658,
              "end": 677,
              "decorators": [],
              "name": "templateConstNotOk5",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TemplateLiteral",
              "start": 680,
              "end": 712,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 680,
                  "end": 684,
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 689,
                  "end": 695,
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 698,
                  "end": 704,
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 710,
                  "end": 712,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 684,
                  "end": 689,
                  "left": {
                    "type": "Literal",
                    "start": 684,
                    "end": 685,
                    "value": 1,
                    "raw": "1"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 688,
                    "end": 689,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "Literal",
                  "start": 695,
                  "end": 698,
                  "value": "S",
                  "raw": "\"S\""
                },
                {
                  "type": "UnaryExpression",
                  "start": 704,
                  "end": 710,
                  "operator": "!",
                  "argument": {
                    "type": "Literal",
                    "start": 705,
                    "end": 710,
                    "value": false,
                    "raw": "false"
                  },
                  "prefix": true
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 715,
      "end": 740,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 722,
        "end": 740,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 726,
            "end": 739,
            "id": {
              "type": "Identifier",
              "start": 726,
              "end": 735,
              "decorators": [],
              "name": "numberLet",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 738,
              "end": 739,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 741,
      "end": 774,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 748,
        "end": 774,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 752,
            "end": 773,
            "id": {
              "type": "Identifier",
              "start": 752,
              "end": 765,
              "decorators": [],
              "name": "numberLetBad1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "BinaryExpression",
              "start": 768,
              "end": 773,
              "left": {
                "type": "Literal",
                "start": 768,
                "end": 769,
                "value": 1,
                "raw": "1"
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 772,
                "end": 773,
                "value": 1,
                "raw": "1"
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 775,
      "end": 816,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 782,
        "end": 816,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 786,
            "end": 815,
            "id": {
              "type": "Identifier",
              "start": 786,
              "end": 799,
              "decorators": [],
              "name": "numberLetBad2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 802,
              "end": 815,
              "callee": {
                "type": "MemberExpression",
                "start": 802,
                "end": 813,
                "object": {
                  "type": "Identifier",
                  "start": 802,
                  "end": 806,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 807,
                  "end": 813,
                  "decorators": [],
                  "name": "random",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 817,
      "end": 854,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 824,
        "end": 854,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 828,
            "end": 853,
            "id": {
              "type": "Identifier",
              "start": 828,
              "end": 841,
              "decorators": [],
              "name": "numberLetBad3",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 844,
              "end": 853,
              "decorators": [],
              "name": "numberLet",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 856,
      "end": 882,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 863,
        "end": 882,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 867,
            "end": 881,
            "id": {
              "type": "Identifier",
              "start": 867,
              "end": 876,
              "decorators": [],
              "name": "bigIntLet",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 879,
              "end": 881,
              "value": null,
              "raw": "1n",
              "bigint": "1"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 883,
      "end": 918,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 890,
        "end": 918,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 894,
            "end": 917,
            "id": {
              "type": "Identifier",
              "start": 894,
              "end": 907,
              "decorators": [],
              "name": "bigIntLetBad1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "BinaryExpression",
              "start": 910,
              "end": 917,
              "left": {
                "type": "Literal",
                "start": 910,
                "end": 912,
                "value": null,
                "raw": "1n",
                "bigint": "1"
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 915,
                "end": 917,
                "value": null,
                "raw": "1n",
                "bigint": "1"
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 919,
      "end": 953,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 926,
        "end": 953,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 930,
            "end": 952,
            "id": {
              "type": "Identifier",
              "start": 930,
              "end": 943,
              "decorators": [],
              "name": "bigIntLetBad2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 946,
              "end": 952,
              "callee": {
                "type": "Identifier",
                "start": 946,
                "end": 950,
                "decorators": [],
                "name": "time",
                "optional": false,
                "typeAnnotation": null
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 954,
      "end": 991,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 961,
        "end": 991,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 965,
            "end": 990,
            "id": {
              "type": "Identifier",
              "start": 965,
              "end": 978,
              "decorators": [],
              "name": "bigIntLetBad3",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 981,
              "end": 990,
              "decorators": [],
              "name": "bigIntLet",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 993,
      "end": 1020,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1000,
        "end": 1020,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1004,
            "end": 1019,
            "id": {
              "type": "Identifier",
              "start": 1004,
              "end": 1013,
              "decorators": [],
              "name": "stringLet",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1016,
              "end": 1019,
              "value": "s",
              "raw": "\"s\""
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1021,
      "end": 1057,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1028,
        "end": 1057,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1032,
            "end": 1056,
            "id": {
              "type": "Identifier",
              "start": 1032,
              "end": 1044,
              "decorators": [],
              "name": "stringLetBad",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "BinaryExpression",
              "start": 1047,
              "end": 1056,
              "left": {
                "type": "Literal",
                "start": 1047,
                "end": 1050,
                "value": "s",
                "raw": "\"s\""
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 1053,
                "end": 1056,
                "value": "s",
                "raw": "\"s\""
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1059,
      "end": 1091,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1066,
        "end": 1091,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1070,
            "end": 1090,
            "id": {
              "type": "Identifier",
              "start": 1070,
              "end": 1084,
              "decorators": [],
              "name": "templateLetOk1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TemplateLiteral",
              "start": 1087,
              "end": 1090,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1087,
                  "end": 1090,
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": true
                }
              ],
              "expressions": []
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1092,
      "end": 1137,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1099,
        "end": 1137,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1103,
            "end": 1136,
            "id": {
              "type": "Identifier",
              "start": 1103,
              "end": 1117,
              "decorators": [],
              "name": "templateLetOk2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TemplateLiteral",
              "start": 1120,
              "end": 1136,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1120,
                  "end": 1124,
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1125,
                  "end": 1131,
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1134,
                  "end": 1136,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1124,
                  "end": 1125,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 1131,
                  "end": 1134,
                  "value": "S",
                  "raw": "\"S\""
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1138,
      "end": 1194,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1145,
        "end": 1194,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1149,
            "end": 1193,
            "id": {
              "type": "Identifier",
              "start": 1149,
              "end": 1163,
              "decorators": [],
              "name": "templateLetOk3",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TemplateLiteral",
              "start": 1166,
              "end": 1193,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1166,
                  "end": 1170,
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1171,
                  "end": 1177,
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1180,
                  "end": 1186,
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1191,
                  "end": 1193,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "start": 1170,
                  "end": 1171,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 1177,
                  "end": 1180,
                  "value": "S",
                  "raw": "\"S\""
                },
                {
                  "type": "Literal",
                  "start": 1186,
                  "end": 1191,
                  "value": false,
                  "raw": "false"
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1195,
      "end": 1256,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1202,
        "end": 1256,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1206,
            "end": 1255,
            "id": {
              "type": "Identifier",
              "start": 1206,
              "end": 1220,
              "decorators": [],
              "name": "templateLetOk4",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TemplateLiteral",
              "start": 1223,
              "end": 1255,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1223,
                  "end": 1227,
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1232,
                  "end": 1238,
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1241,
                  "end": 1247,
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1253,
                  "end": 1255,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 1227,
                  "end": 1232,
                  "left": {
                    "type": "Literal",
                    "start": 1227,
                    "end": 1228,
                    "value": 1,
                    "raw": "1"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 1231,
                    "end": 1232,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "Literal",
                  "start": 1238,
                  "end": 1241,
                  "value": "S",
                  "raw": "\"S\""
                },
                {
                  "type": "UnaryExpression",
                  "start": 1247,
                  "end": 1253,
                  "operator": "!",
                  "argument": {
                    "type": "Literal",
                    "start": 1248,
                    "end": 1253,
                    "value": false,
                    "raw": "false"
                  },
                  "prefix": true
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1271,
      "end": 1312,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1278,
        "end": 1312,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1282,
            "end": 1311,
            "id": {
              "type": "Identifier",
              "start": 1282,
              "end": 1298,
              "decorators": [],
              "name": "numberLetAsConst",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TSAsExpression",
              "start": 1301,
              "end": 1311,
              "expression": {
                "type": "Literal",
                "start": 1301,
                "end": 1302,
                "value": 1,
                "raw": "1"
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1306,
                "end": 1311,
                "typeName": {
                  "type": "Identifier",
                  "start": 1306,
                  "end": 1311,
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1314,
      "end": 1356,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1321,
        "end": 1356,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1325,
            "end": 1355,
            "id": {
              "type": "Identifier",
              "start": 1325,
              "end": 1341,
              "decorators": [],
              "name": "bigIntLetAsConst",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TSAsExpression",
              "start": 1344,
              "end": 1355,
              "expression": {
                "type": "Literal",
                "start": 1344,
                "end": 1346,
                "value": null,
                "raw": "1n",
                "bigint": "1"
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1350,
                "end": 1355,
                "typeName": {
                  "type": "Identifier",
                  "start": 1350,
                  "end": 1355,
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1358,
      "end": 1401,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1365,
        "end": 1401,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1369,
            "end": 1400,
            "id": {
              "type": "Identifier",
              "start": 1369,
              "end": 1385,
              "decorators": [],
              "name": "stringLetAsConst",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TSAsExpression",
              "start": 1388,
              "end": 1400,
              "expression": {
                "type": "Literal",
                "start": 1388,
                "end": 1391,
                "value": "s",
                "raw": "\"s\""
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1395,
                "end": 1400,
                "typeName": {
                  "type": "Identifier",
                  "start": 1395,
                  "end": 1400,
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1403,
      "end": 1451,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1410,
        "end": 1451,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1414,
            "end": 1450,
            "id": {
              "type": "Identifier",
              "start": 1414,
              "end": 1435,
              "decorators": [],
              "name": "templateLetOk1AsConst",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TSAsExpression",
              "start": 1438,
              "end": 1450,
              "expression": {
                "type": "TemplateLiteral",
                "start": 1438,
                "end": 1441,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 1438,
                    "end": 1441,
                    "value": {
                      "raw": "s",
                      "cooked": "s"
                    },
                    "tail": true
                  }
                ],
                "expressions": []
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1445,
                "end": 1450,
                "typeName": {
                  "type": "Identifier",
                  "start": 1445,
                  "end": 1450,
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1452,
      "end": 1513,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1459,
        "end": 1513,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1463,
            "end": 1512,
            "id": {
              "type": "Identifier",
              "start": 1463,
              "end": 1484,
              "decorators": [],
              "name": "templateLetOk2AsConst",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TSAsExpression",
              "start": 1487,
              "end": 1512,
              "expression": {
                "type": "TemplateLiteral",
                "start": 1487,
                "end": 1503,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 1487,
                    "end": 1491,
                    "value": {
                      "raw": "s",
                      "cooked": "s"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1492,
                    "end": 1498,
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1501,
                    "end": 1503,
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 1491,
                    "end": 1492,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 1498,
                    "end": 1501,
                    "value": "S",
                    "raw": "\"S\""
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1507,
                "end": 1512,
                "typeName": {
                  "type": "Identifier",
                  "start": 1507,
                  "end": 1512,
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1514,
      "end": 1586,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1521,
        "end": 1586,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1525,
            "end": 1585,
            "id": {
              "type": "Identifier",
              "start": 1525,
              "end": 1546,
              "decorators": [],
              "name": "templateLetOk3AsConst",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TSAsExpression",
              "start": 1549,
              "end": 1585,
              "expression": {
                "type": "TemplateLiteral",
                "start": 1549,
                "end": 1576,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 1549,
                    "end": 1553,
                    "value": {
                      "raw": "s",
                      "cooked": "s"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1554,
                    "end": 1560,
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1563,
                    "end": 1569,
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1574,
                    "end": 1576,
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 1553,
                    "end": 1554,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 1560,
                    "end": 1563,
                    "value": "S",
                    "raw": "\"S\""
                  },
                  {
                    "type": "Literal",
                    "start": 1569,
                    "end": 1574,
                    "value": false,
                    "raw": "false"
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1580,
                "end": 1585,
                "typeName": {
                  "type": "Identifier",
                  "start": 1580,
                  "end": 1585,
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1587,
      "end": 1664,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1594,
        "end": 1664,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1598,
            "end": 1663,
            "id": {
              "type": "Identifier",
              "start": 1598,
              "end": 1619,
              "decorators": [],
              "name": "templateLetOk4AsConst",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TSAsExpression",
              "start": 1622,
              "end": 1663,
              "expression": {
                "type": "TemplateLiteral",
                "start": 1622,
                "end": 1654,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 1622,
                    "end": 1626,
                    "value": {
                      "raw": "s",
                      "cooked": "s"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1631,
                    "end": 1637,
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1640,
                    "end": 1646,
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 1652,
                    "end": 1654,
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "start": 1626,
                    "end": 1631,
                    "left": {
                      "type": "Literal",
                      "start": 1626,
                      "end": 1627,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "start": 1630,
                      "end": 1631,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  {
                    "type": "Literal",
                    "start": 1637,
                    "end": 1640,
                    "value": "S",
                    "raw": "\"S\""
                  },
                  {
                    "type": "UnaryExpression",
                    "start": 1646,
                    "end": 1652,
                    "operator": "!",
                    "argument": {
                      "type": "Literal",
                      "start": 1647,
                      "end": 1652,
                      "value": false,
                      "raw": "false"
                    },
                    "prefix": true
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1658,
                "end": 1663,
                "typeName": {
                  "type": "Identifier",
                  "start": 1658,
                  "end": 1663,
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1666,
      "end": 1693,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1673,
        "end": 1693,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1677,
            "end": 1692,
            "id": {
              "type": "Identifier",
              "start": 1677,
              "end": 1680,
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrayExpression",
              "start": 1683,
              "end": 1692,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1684,
                  "end": 1685,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 1687,
                  "end": 1688,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 1690,
                  "end": 1691,
                  "value": 3,
                  "raw": "3"
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1694,
      "end": 1735,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1701,
        "end": 1735,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1705,
            "end": 1734,
            "id": {
              "type": "Identifier",
              "start": 1705,
              "end": 1713,
              "decorators": [],
              "name": "arrConst",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TSAsExpression",
              "start": 1716,
              "end": 1734,
              "expression": {
                "type": "ArrayExpression",
                "start": 1716,
                "end": 1725,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1717,
                    "end": 1718,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 1720,
                    "end": 1721,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 1723,
                    "end": 1724,
                    "value": 3,
                    "raw": "3"
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1729,
                "end": 1734,
                "typeName": {
                  "type": "Identifier",
                  "start": 1729,
                  "end": 1734,
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1736,
      "end": 1790,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1743,
        "end": 1790,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1747,
            "end": 1789,
            "id": {
              "type": "Identifier",
              "start": 1747,
              "end": 1760,
              "decorators": [],
              "name": "arrWithSpread",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "TSAsExpression",
              "start": 1763,
              "end": 1789,
              "expression": {
                "type": "ArrayExpression",
                "start": 1763,
                "end": 1780,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1764,
                    "end": 1765,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 1767,
                    "end": 1768,
                    "value": 2,
                    "raw": "2"
                  },
                  {
                    "type": "Literal",
                    "start": 1770,
                    "end": 1771,
                    "value": 3,
                    "raw": "3"
                  },
                  {
                    "type": "SpreadElement",
                    "start": 1773,
                    "end": 1779,
                    "argument": {
                      "type": "Identifier",
                      "start": 1776,
                      "end": 1779,
                      "decorators": [],
                      "name": "arr",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1784,
                "end": 1789,
                "typeName": {
                  "type": "Identifier",
                  "start": 1784,
                  "end": 1789,
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1792,
      "end": 3319,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 1799,
        "end": 3319,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 1805,
          "end": 1813,
          "decorators": [],
          "name": "Exported",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 1814,
          "end": 3319,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 1820,
              "end": 1841,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1827,
                "end": 1836,
                "decorators": [],
                "name": "numberLet",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 1839,
                "end": 1840,
                "value": 1,
                "raw": "1"
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public"
            },
            {
              "type": "PropertyDefinition",
              "start": 1846,
              "end": 1875,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1853,
                "end": 1866,
                "decorators": [],
                "name": "numberLetBad1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "BinaryExpression",
                "start": 1869,
                "end": 1874,
                "left": {
                  "type": "Literal",
                  "start": 1869,
                  "end": 1870,
                  "value": 1,
                  "raw": "1"
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 1873,
                  "end": 1874,
                  "value": 1,
                  "raw": "1"
                }
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public"
            },
            {
              "type": "PropertyDefinition",
              "start": 1880,
              "end": 1917,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1887,
                "end": 1900,
                "decorators": [],
                "name": "numberLetBad2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "CallExpression",
                "start": 1903,
                "end": 1916,
                "callee": {
                  "type": "MemberExpression",
                  "start": 1903,
                  "end": 1914,
                  "object": {
                    "type": "Identifier",
                    "start": 1903,
                    "end": 1907,
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1908,
                    "end": 1914,
                    "decorators": [],
                    "name": "random",
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
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public"
            },
            {
              "type": "PropertyDefinition",
              "start": 1922,
              "end": 1955,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1929,
                "end": 1942,
                "decorators": [],
                "name": "numberLetBad3",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Identifier",
                "start": 1945,
                "end": 1954,
                "decorators": [],
                "name": "numberLet",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public"
            },
            {
              "type": "PropertyDefinition",
              "start": 1961,
              "end": 1983,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1968,
                "end": 1977,
                "decorators": [],
                "name": "bigIntLet",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 1980,
                "end": 1982,
                "value": null,
                "raw": "1n",
                "bigint": "1"
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public"
            },
            {
              "type": "PropertyDefinition",
              "start": 1988,
              "end": 2019,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1995,
                "end": 2008,
                "decorators": [],
                "name": "bigIntLetBad1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "BinaryExpression",
                "start": 2011,
                "end": 2018,
                "left": {
                  "type": "Literal",
                  "start": 2011,
                  "end": 2013,
                  "value": null,
                  "raw": "1n",
                  "bigint": "1"
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 2016,
                  "end": 2018,
                  "value": null,
                  "raw": "1n",
                  "bigint": "1"
                }
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public"
            },
            {
              "type": "PropertyDefinition",
              "start": 2024,
              "end": 2054,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2031,
                "end": 2044,
                "decorators": [],
                "name": "bigIntLetBad2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "CallExpression",
                "start": 2047,
                "end": 2053,
                "callee": {
                  "type": "Identifier",
                  "start": 2047,
                  "end": 2051,
                  "decorators": [],
                  "name": "time",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public"
            },
            {
              "type": "PropertyDefinition",
              "start": 2059,
              "end": 2092,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2066,
                "end": 2079,
                "decorators": [],
                "name": "bigIntLetBad3",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Identifier",
                "start": 2082,
                "end": 2091,
                "decorators": [],
                "name": "bigIntLet",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public"
            },
            {
              "type": "PropertyDefinition",
              "start": 2098,
              "end": 2121,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2105,
                "end": 2114,
                "decorators": [],
                "name": "stringLet",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 2117,
                "end": 2120,
                "value": "s",
                "raw": "\"s\""
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public"
            },
            {
              "type": "PropertyDefinition",
              "start": 2126,
              "end": 2158,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2133,
                "end": 2145,
                "decorators": [],
                "name": "stringLetBad",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "BinaryExpression",
                "start": 2148,
                "end": 2157,
                "left": {
                  "type": "Literal",
                  "start": 2148,
                  "end": 2151,
                  "value": "s",
                  "raw": "\"s\""
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 2154,
                  "end": 2157,
                  "value": "s",
                  "raw": "\"s\""
                }
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public"
            },
            {
              "type": "PropertyDefinition",
              "start": 2164,
              "end": 2192,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2171,
                "end": 2185,
                "decorators": [],
                "name": "templateLetOk1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "TemplateLiteral",
                "start": 2188,
                "end": 2191,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 2188,
                    "end": 2191,
                    "value": {
                      "raw": "s",
                      "cooked": "s"
                    },
                    "tail": true
                  }
                ],
                "expressions": []
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public"
            },
            {
              "type": "PropertyDefinition",
              "start": 2197,
              "end": 2238,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2204,
                "end": 2218,
                "decorators": [],
                "name": "templateLetOk2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "TemplateLiteral",
                "start": 2221,
                "end": 2237,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 2221,
                    "end": 2225,
                    "value": {
                      "raw": "s",
                      "cooked": "s"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 2226,
                    "end": 2232,
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 2235,
                    "end": 2237,
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 2225,
                    "end": 2226,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 2232,
                    "end": 2235,
                    "value": "S",
                    "raw": "\"S\""
                  }
                ]
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public"
            },
            {
              "type": "PropertyDefinition",
              "start": 2243,
              "end": 2295,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2250,
                "end": 2264,
                "decorators": [],
                "name": "templateLetOk3",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "TemplateLiteral",
                "start": 2267,
                "end": 2294,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 2267,
                    "end": 2271,
                    "value": {
                      "raw": "s",
                      "cooked": "s"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 2272,
                    "end": 2278,
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 2281,
                    "end": 2287,
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 2292,
                    "end": 2294,
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 2271,
                    "end": 2272,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 2278,
                    "end": 2281,
                    "value": "S",
                    "raw": "\"S\""
                  },
                  {
                    "type": "Literal",
                    "start": 2287,
                    "end": 2292,
                    "value": false,
                    "raw": "false"
                  }
                ]
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public"
            },
            {
              "type": "PropertyDefinition",
              "start": 2300,
              "end": 2357,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2307,
                "end": 2321,
                "decorators": [],
                "name": "templateLetOk4",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "TemplateLiteral",
                "start": 2324,
                "end": 2356,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 2324,
                    "end": 2328,
                    "value": {
                      "raw": "s",
                      "cooked": "s"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 2333,
                    "end": 2339,
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 2342,
                    "end": 2348,
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 2354,
                    "end": 2356,
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "start": 2328,
                    "end": 2333,
                    "left": {
                      "type": "Literal",
                      "start": 2328,
                      "end": 2329,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "start": 2332,
                      "end": 2333,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  {
                    "type": "Literal",
                    "start": 2339,
                    "end": 2342,
                    "value": "S",
                    "raw": "\"S\""
                  },
                  {
                    "type": "UnaryExpression",
                    "start": 2348,
                    "end": 2354,
                    "operator": "!",
                    "argument": {
                      "type": "Literal",
                      "start": 2349,
                      "end": 2354,
                      "value": false,
                      "raw": "false"
                    },
                    "prefix": true
                  }
                ]
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public"
            },
            {
              "type": "PropertyDefinition",
              "start": 2364,
              "end": 2389,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2373,
                "end": 2384,
                "decorators": [],
                "name": "numberConst",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 2387,
                "end": 2388,
                "value": 1,
                "raw": "1"
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 2394,
              "end": 2427,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2403,
                "end": 2418,
                "decorators": [],
                "name": "numberConstBad1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "BinaryExpression",
                "start": 2421,
                "end": 2426,
                "left": {
                  "type": "Literal",
                  "start": 2421,
                  "end": 2422,
                  "value": 1,
                  "raw": "1"
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 2425,
                  "end": 2426,
                  "value": 1,
                  "raw": "1"
                }
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 2432,
              "end": 2473,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2441,
                "end": 2456,
                "decorators": [],
                "name": "numberConstBad2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "CallExpression",
                "start": 2459,
                "end": 2472,
                "callee": {
                  "type": "MemberExpression",
                  "start": 2459,
                  "end": 2470,
                  "object": {
                    "type": "Identifier",
                    "start": 2459,
                    "end": 2463,
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2464,
                    "end": 2470,
                    "decorators": [],
                    "name": "random",
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
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 2478,
              "end": 2517,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2487,
                "end": 2502,
                "decorators": [],
                "name": "numberConstBad3",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Identifier",
                "start": 2505,
                "end": 2516,
                "decorators": [],
                "name": "numberConst",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 2523,
              "end": 2549,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2532,
                "end": 2543,
                "decorators": [],
                "name": "bigIntConst",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 2546,
                "end": 2548,
                "value": null,
                "raw": "1n",
                "bigint": "1"
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 2554,
              "end": 2589,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2563,
                "end": 2578,
                "decorators": [],
                "name": "bigIntConstBad1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "BinaryExpression",
                "start": 2581,
                "end": 2588,
                "left": {
                  "type": "Literal",
                  "start": 2581,
                  "end": 2583,
                  "value": null,
                  "raw": "1n",
                  "bigint": "1"
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 2586,
                  "end": 2588,
                  "value": null,
                  "raw": "1n",
                  "bigint": "1"
                }
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 2594,
              "end": 2628,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2603,
                "end": 2618,
                "decorators": [],
                "name": "bigIntConstBad2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "CallExpression",
                "start": 2621,
                "end": 2627,
                "callee": {
                  "type": "Identifier",
                  "start": 2621,
                  "end": 2625,
                  "decorators": [],
                  "name": "time",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 2633,
              "end": 2672,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2642,
                "end": 2657,
                "decorators": [],
                "name": "bigIntConstBad3",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Identifier",
                "start": 2660,
                "end": 2671,
                "decorators": [],
                "name": "bigIntConst",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 2678,
              "end": 2705,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2687,
                "end": 2698,
                "decorators": [],
                "name": "stringConst",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 2701,
                "end": 2704,
                "value": "s",
                "raw": "\"s\""
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 2710,
              "end": 2746,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2719,
                "end": 2733,
                "decorators": [],
                "name": "stringConstBad",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "BinaryExpression",
                "start": 2736,
                "end": 2745,
                "left": {
                  "type": "Literal",
                  "start": 2736,
                  "end": 2739,
                  "value": "s",
                  "raw": "\"s\""
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 2742,
                  "end": 2745,
                  "value": "s",
                  "raw": "\"s\""
                }
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 2752,
              "end": 2784,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2761,
                "end": 2777,
                "decorators": [],
                "name": "templateConstOk1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "TemplateLiteral",
                "start": 2780,
                "end": 2783,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 2780,
                    "end": 2783,
                    "value": {
                      "raw": "s",
                      "cooked": "s"
                    },
                    "tail": true
                  }
                ],
                "expressions": []
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 2789,
              "end": 2837,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2798,
                "end": 2817,
                "decorators": [],
                "name": "templateConstNotOk2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "TemplateLiteral",
                "start": 2820,
                "end": 2836,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 2820,
                    "end": 2824,
                    "value": {
                      "raw": "s",
                      "cooked": "s"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 2825,
                    "end": 2831,
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 2834,
                    "end": 2836,
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 2824,
                    "end": 2825,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 2831,
                    "end": 2834,
                    "value": "S",
                    "raw": "\"S\""
                  }
                ]
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 2842,
              "end": 2901,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2851,
                "end": 2870,
                "decorators": [],
                "name": "templateConstNotOk3",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "TemplateLiteral",
                "start": 2873,
                "end": 2900,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 2873,
                    "end": 2877,
                    "value": {
                      "raw": "s",
                      "cooked": "s"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 2878,
                    "end": 2884,
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 2887,
                    "end": 2893,
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 2898,
                    "end": 2900,
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 2877,
                    "end": 2878,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 2884,
                    "end": 2887,
                    "value": "S",
                    "raw": "\"S\""
                  },
                  {
                    "type": "Literal",
                    "start": 2893,
                    "end": 2898,
                    "value": false,
                    "raw": "false"
                  }
                ]
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 2906,
              "end": 2970,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2915,
                "end": 2934,
                "decorators": [],
                "name": "templateConstNotOk4",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "TemplateLiteral",
                "start": 2937,
                "end": 2969,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 2937,
                    "end": 2941,
                    "value": {
                      "raw": "s",
                      "cooked": "s"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 2946,
                    "end": 2952,
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 2955,
                    "end": 2961,
                    "value": {
                      "raw": " - ",
                      "cooked": " - "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 2967,
                    "end": 2969,
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "BinaryExpression",
                    "start": 2941,
                    "end": 2946,
                    "left": {
                      "type": "Literal",
                      "start": 2941,
                      "end": 2942,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "start": 2945,
                      "end": 2946,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  {
                    "type": "Literal",
                    "start": 2952,
                    "end": 2955,
                    "value": "S",
                    "raw": "\"S\""
                  },
                  {
                    "type": "UnaryExpression",
                    "start": 2961,
                    "end": 2967,
                    "operator": "!",
                    "argument": {
                      "type": "Literal",
                      "start": 2962,
                      "end": 2967,
                      "value": false,
                      "raw": "false"
                    },
                    "prefix": true
                  }
                ]
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 2976,
              "end": 3006,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2976,
                "end": 2992,
                "decorators": [],
                "name": "numberLetAsConst",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "start": 2995,
                "end": 3005,
                "expression": {
                  "type": "Literal",
                  "start": 2995,
                  "end": 2996,
                  "value": 1,
                  "raw": "1"
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3000,
                  "end": 3005,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3000,
                    "end": 3005,
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 3012,
              "end": 3043,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3012,
                "end": 3028,
                "decorators": [],
                "name": "bigIntLetAsConst",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "start": 3031,
                "end": 3042,
                "expression": {
                  "type": "Literal",
                  "start": 3031,
                  "end": 3033,
                  "value": null,
                  "raw": "1n",
                  "bigint": "1"
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3037,
                  "end": 3042,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3037,
                    "end": 3042,
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 3049,
              "end": 3081,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3049,
                "end": 3065,
                "decorators": [],
                "name": "stringLetAsConst",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "start": 3068,
                "end": 3080,
                "expression": {
                  "type": "Literal",
                  "start": 3068,
                  "end": 3071,
                  "value": "s",
                  "raw": "\"s\""
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3075,
                  "end": 3080,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3075,
                    "end": 3080,
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 3087,
              "end": 3124,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3087,
                "end": 3108,
                "decorators": [],
                "name": "templateLetOk1AsConst",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "start": 3111,
                "end": 3123,
                "expression": {
                  "type": "TemplateLiteral",
                  "start": 3111,
                  "end": 3114,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 3111,
                      "end": 3114,
                      "value": {
                        "raw": "s",
                        "cooked": "s"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3118,
                  "end": 3123,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3118,
                    "end": 3123,
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 3129,
              "end": 3179,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3129,
                "end": 3150,
                "decorators": [],
                "name": "templateLetOk2AsConst",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "start": 3153,
                "end": 3178,
                "expression": {
                  "type": "TemplateLiteral",
                  "start": 3153,
                  "end": 3169,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 3153,
                      "end": 3157,
                      "value": {
                        "raw": "s",
                        "cooked": "s"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 3158,
                      "end": 3164,
                      "value": {
                        "raw": " - ",
                        "cooked": " - "
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 3167,
                      "end": 3169,
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Literal",
                      "start": 3157,
                      "end": 3158,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 3164,
                      "end": 3167,
                      "value": "S",
                      "raw": "\"S\""
                    }
                  ]
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3173,
                  "end": 3178,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3173,
                    "end": 3178,
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 3184,
              "end": 3245,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3184,
                "end": 3205,
                "decorators": [],
                "name": "templateLetOk3AsConst",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "start": 3208,
                "end": 3244,
                "expression": {
                  "type": "TemplateLiteral",
                  "start": 3208,
                  "end": 3235,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 3208,
                      "end": 3212,
                      "value": {
                        "raw": "s",
                        "cooked": "s"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 3213,
                      "end": 3219,
                      "value": {
                        "raw": " - ",
                        "cooked": " - "
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 3222,
                      "end": 3228,
                      "value": {
                        "raw": " - ",
                        "cooked": " - "
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 3233,
                      "end": 3235,
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Literal",
                      "start": 3212,
                      "end": 3213,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 3219,
                      "end": 3222,
                      "value": "S",
                      "raw": "\"S\""
                    },
                    {
                      "type": "Literal",
                      "start": 3228,
                      "end": 3233,
                      "value": false,
                      "raw": "false"
                    }
                  ]
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3239,
                  "end": 3244,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3239,
                    "end": 3244,
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 3250,
              "end": 3316,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 3250,
                "end": 3271,
                "decorators": [],
                "name": "templateLetOk4AsConst",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "TSAsExpression",
                "start": 3274,
                "end": 3315,
                "expression": {
                  "type": "TemplateLiteral",
                  "start": 3274,
                  "end": 3306,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 3274,
                      "end": 3278,
                      "value": {
                        "raw": "s",
                        "cooked": "s"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 3283,
                      "end": 3289,
                      "value": {
                        "raw": " - ",
                        "cooked": " - "
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 3292,
                      "end": 3298,
                      "value": {
                        "raw": " - ",
                        "cooked": " - "
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 3304,
                      "end": 3306,
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "BinaryExpression",
                      "start": 3278,
                      "end": 3283,
                      "left": {
                        "type": "Literal",
                        "start": 3278,
                        "end": 3279,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 3282,
                        "end": 3283,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    {
                      "type": "Literal",
                      "start": 3289,
                      "end": 3292,
                      "value": "S",
                      "raw": "\"S\""
                    },
                    {
                      "type": "UnaryExpression",
                      "start": 3298,
                      "end": 3304,
                      "operator": "!",
                      "argument": {
                        "type": "Literal",
                        "start": 3299,
                        "end": 3304,
                        "value": false,
                        "raw": "false"
                      },
                      "prefix": true
                    }
                  ]
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3310,
                  "end": 3315,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3310,
                    "end": 3315,
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3321,
      "end": 3365,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 3328,
        "end": 3365,
        "id": {
          "type": "Identifier",
          "start": 3337,
          "end": 3348,
          "decorators": [],
          "name": "numberParam",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 3349,
            "end": 3354,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 3349,
              "end": 3350,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 3353,
              "end": 3354,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 3355,
          "end": 3361,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 3357,
            "end": 3361
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 3362,
          "end": 3365,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3366,
      "end": 3418,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 3373,
        "end": 3418,
        "id": {
          "type": "Identifier",
          "start": 3382,
          "end": 3397,
          "decorators": [],
          "name": "numberParamBad1",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 3398,
            "end": 3407,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 3398,
              "end": 3399,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "BinaryExpression",
              "start": 3402,
              "end": 3407,
              "left": {
                "type": "Literal",
                "start": 3402,
                "end": 3403,
                "value": 1,
                "raw": "1"
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 3406,
                "end": 3407,
                "value": 1,
                "raw": "1"
              }
            },
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 3408,
          "end": 3414,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 3410,
            "end": 3414
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 3415,
          "end": 3418,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3419,
      "end": 3479,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 3426,
        "end": 3479,
        "id": {
          "type": "Identifier",
          "start": 3435,
          "end": 3450,
          "decorators": [],
          "name": "numberParamBad2",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 3451,
            "end": 3468,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 3451,
              "end": 3452,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "CallExpression",
              "start": 3455,
              "end": 3468,
              "callee": {
                "type": "MemberExpression",
                "start": 3455,
                "end": 3466,
                "object": {
                  "type": "Identifier",
                  "start": 3455,
                  "end": 3459,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3460,
                  "end": 3466,
                  "decorators": [],
                  "name": "random",
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
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 3469,
          "end": 3475,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 3471,
            "end": 3475
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 3476,
          "end": 3479,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3480,
      "end": 3538,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 3487,
        "end": 3538,
        "id": {
          "type": "Identifier",
          "start": 3496,
          "end": 3511,
          "decorators": [],
          "name": "numberParamBad3",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 3512,
            "end": 3527,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 3512,
              "end": 3513,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 3516,
              "end": 3527,
              "decorators": [],
              "name": "numberParam",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 3528,
          "end": 3534,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 3530,
            "end": 3534
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 3535,
          "end": 3538,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3540,
      "end": 3585,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 3547,
        "end": 3585,
        "id": {
          "type": "Identifier",
          "start": 3556,
          "end": 3567,
          "decorators": [],
          "name": "bigIntParam",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 3568,
            "end": 3574,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 3568,
              "end": 3569,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 3572,
              "end": 3574,
              "value": null,
              "raw": "1n",
              "bigint": "1"
            },
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 3575,
          "end": 3581,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 3577,
            "end": 3581
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 3582,
          "end": 3585,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3586,
      "end": 3640,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 3593,
        "end": 3640,
        "id": {
          "type": "Identifier",
          "start": 3602,
          "end": 3617,
          "decorators": [],
          "name": "bigIntParamBad1",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 3618,
            "end": 3629,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 3618,
              "end": 3619,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "BinaryExpression",
              "start": 3622,
              "end": 3629,
              "left": {
                "type": "Literal",
                "start": 3622,
                "end": 3624,
                "value": null,
                "raw": "1n",
                "bigint": "1"
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 3627,
                "end": 3629,
                "value": null,
                "raw": "1n",
                "bigint": "1"
              }
            },
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 3630,
          "end": 3636,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 3632,
            "end": 3636
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 3637,
          "end": 3640,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3641,
      "end": 3694,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 3648,
        "end": 3694,
        "id": {
          "type": "Identifier",
          "start": 3657,
          "end": 3672,
          "decorators": [],
          "name": "bigIntParamBad2",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 3673,
            "end": 3683,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 3673,
              "end": 3674,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "CallExpression",
              "start": 3677,
              "end": 3683,
              "callee": {
                "type": "Identifier",
                "start": 3677,
                "end": 3681,
                "decorators": [],
                "name": "time",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 3684,
          "end": 3690,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 3686,
            "end": 3690
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 3691,
          "end": 3694,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3695,
      "end": 3753,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 3702,
        "end": 3753,
        "id": {
          "type": "Identifier",
          "start": 3711,
          "end": 3726,
          "decorators": [],
          "name": "bigIntParamBad3",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 3727,
            "end": 3742,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 3727,
              "end": 3728,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 3731,
              "end": 3742,
              "decorators": [],
              "name": "bigIntParam",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 3743,
          "end": 3749,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 3745,
            "end": 3749
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 3750,
          "end": 3753,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3755,
      "end": 3801,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 3762,
        "end": 3801,
        "id": {
          "type": "Identifier",
          "start": 3771,
          "end": 3782,
          "decorators": [],
          "name": "stringParam",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 3783,
            "end": 3790,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 3783,
              "end": 3784,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 3787,
              "end": 3790,
              "value": "s",
              "raw": "\"s\""
            },
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 3791,
          "end": 3797,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 3793,
            "end": 3797
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 3798,
          "end": 3801,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3802,
      "end": 3857,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 3809,
        "end": 3857,
        "id": {
          "type": "Identifier",
          "start": 3818,
          "end": 3832,
          "decorators": [],
          "name": "stringParamBad",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 3833,
            "end": 3846,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 3833,
              "end": 3834,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "BinaryExpression",
              "start": 3837,
              "end": 3846,
              "left": {
                "type": "Literal",
                "start": 3837,
                "end": 3840,
                "value": "s",
                "raw": "\"s\""
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 3843,
                "end": 3846,
                "value": "s",
                "raw": "\"s\""
              }
            },
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 3847,
          "end": 3853,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 3849,
            "end": 3853
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 3854,
          "end": 3857,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3859,
      "end": 3910,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 3866,
        "end": 3910,
        "id": {
          "type": "Identifier",
          "start": 3875,
          "end": 3891,
          "decorators": [],
          "name": "templateParamOk1",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 3892,
            "end": 3899,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 3892,
              "end": 3893,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "TemplateLiteral",
              "start": 3896,
              "end": 3899,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 3896,
                  "end": 3899,
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": true
                }
              ],
              "expressions": []
            },
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 3900,
          "end": 3906,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 3902,
            "end": 3906
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 3907,
          "end": 3910,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3911,
      "end": 3975,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 3918,
        "end": 3975,
        "id": {
          "type": "Identifier",
          "start": 3927,
          "end": 3943,
          "decorators": [],
          "name": "templateParamOk2",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 3944,
            "end": 3964,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 3944,
              "end": 3945,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "TemplateLiteral",
              "start": 3948,
              "end": 3964,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 3948,
                  "end": 3952,
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 3953,
                  "end": 3959,
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 3962,
                  "end": 3964,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "start": 3952,
                  "end": 3953,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 3959,
                  "end": 3962,
                  "value": "S",
                  "raw": "\"S\""
                }
              ]
            },
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 3965,
          "end": 3971,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 3967,
            "end": 3971
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 3972,
          "end": 3975,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3976,
      "end": 4051,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 3983,
        "end": 4051,
        "id": {
          "type": "Identifier",
          "start": 3992,
          "end": 4008,
          "decorators": [],
          "name": "templateParamOk3",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 4009,
            "end": 4040,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 4009,
              "end": 4010,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "TemplateLiteral",
              "start": 4013,
              "end": 4040,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 4013,
                  "end": 4017,
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 4018,
                  "end": 4024,
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 4027,
                  "end": 4033,
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 4038,
                  "end": 4040,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "start": 4017,
                  "end": 4018,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 4024,
                  "end": 4027,
                  "value": "S",
                  "raw": "\"S\""
                },
                {
                  "type": "Literal",
                  "start": 4033,
                  "end": 4038,
                  "value": false,
                  "raw": "false"
                }
              ]
            },
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 4041,
          "end": 4047,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 4043,
            "end": 4047
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 4048,
          "end": 4051,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4052,
      "end": 4132,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 4059,
        "end": 4132,
        "id": {
          "type": "Identifier",
          "start": 4068,
          "end": 4084,
          "decorators": [],
          "name": "templateParamOk4",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 4085,
            "end": 4121,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 4085,
              "end": 4086,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "TemplateLiteral",
              "start": 4089,
              "end": 4121,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 4089,
                  "end": 4093,
                  "value": {
                    "raw": "s",
                    "cooked": "s"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 4098,
                  "end": 4104,
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 4107,
                  "end": 4113,
                  "value": {
                    "raw": " - ",
                    "cooked": " - "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 4119,
                  "end": 4121,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "BinaryExpression",
                  "start": 4093,
                  "end": 4098,
                  "left": {
                    "type": "Literal",
                    "start": 4093,
                    "end": 4094,
                    "value": 1,
                    "raw": "1"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 4097,
                    "end": 4098,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "Literal",
                  "start": 4104,
                  "end": 4107,
                  "value": "S",
                  "raw": "\"S\""
                },
                {
                  "type": "UnaryExpression",
                  "start": 4113,
                  "end": 4119,
                  "operator": "!",
                  "argument": {
                    "type": "Literal",
                    "start": 4114,
                    "end": 4119,
                    "value": false,
                    "raw": "false"
                  },
                  "prefix": true
                }
              ]
            },
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 4122,
          "end": 4128,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 4124,
            "end": 4128
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 4129,
          "end": 4132,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4135,
      "end": 4165,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 4142,
        "end": 4165,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 4148,
            "end": 4164,
            "id": {
              "type": "ObjectPattern",
              "start": 4148,
              "end": 4153,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 4150,
                  "end": 4151,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 4150,
                    "end": 4151,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 4150,
                    "end": 4151,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 4156,
              "end": 4164,
              "properties": [
                {
                  "type": "Property",
                  "start": 4158,
                  "end": 4162,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 4158,
                    "end": 4159,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 4161,
                    "end": 4162,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4166,
      "end": 4241,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 4173,
        "end": 4241,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 4179,
            "end": 4240,
            "id": {
              "type": "ArrayPattern",
              "start": 4179,
              "end": 4228,
              "decorators": [],
              "elements": [
                null,
                null,
                {
                  "type": "AssignmentPattern",
                  "start": 4184,
                  "end": 4189,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 4184,
                    "end": 4185,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 4188,
                    "end": 4189,
                    "value": 1,
                    "raw": "1"
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4190,
                "end": 4228,
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "start": 4192,
                  "end": 4228,
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
                      "start": 4209,
                      "end": 4227,
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
                      ]
                    }
                  ]
                }
              }
            },
            "init": {
              "type": "ArrayExpression",
              "start": 4231,
              "end": 4240,
              "elements": [
                {
                  "type": "Literal",
                  "start": 4232,
                  "end": 4233,
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Literal",
                  "start": 4235,
                  "end": 4236,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 4238,
                  "end": 4239,
                  "value": 2,
                  "raw": "2"
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4243,
      "end": 4334,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 4250,
        "end": 4334,
        "id": {
          "type": "Identifier",
          "start": 4259,
          "end": 4262,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 4263,
            "end": 4322,
            "decorators": [],
            "left": {
              "type": "ArrayPattern",
              "start": 4263,
              "end": 4310,
              "decorators": [],
              "elements": [
                null,
                null,
                {
                  "type": "Identifier",
                  "start": 4268,
                  "end": 4269,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 4270,
                "end": 4310,
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "start": 4272,
                  "end": 4310,
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
                  ]
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "start": 4313,
              "end": 4322,
              "elements": [
                {
                  "type": "Literal",
                  "start": 4314,
                  "end": 4315,
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Literal",
                  "start": 4317,
                  "end": 4318,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 4320,
                  "end": 4321,
                  "value": 2,
                  "raw": "2"
                }
              ]
            },
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 4323,
          "end": 4329,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 4325,
            "end": 4329
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 4330,
          "end": 4334,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
