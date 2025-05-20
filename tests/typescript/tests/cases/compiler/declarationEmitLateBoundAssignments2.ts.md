__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 1123,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 70,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 67,
            "end": 70,
            "raw": "\"C\"",
            "value": "C"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 84,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 84,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 80,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 83,
            "end": 84,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 85,
      "end": 104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 104,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 97,
            "decorators": [],
            "name": "numStr",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 100,
            "end": 104,
            "raw": "\"10\"",
            "value": "10"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 105,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 137,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 125,
            "decorators": [],
            "name": "withWhitespace",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 128,
            "end": 137,
            "raw": "\"foo bar\"",
            "value": "foo bar"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 159,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 159,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 149,
            "decorators": [],
            "name": "emoji",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 152,
            "end": 159,
            "raw": "\"🤷‍♂️\"",
            "value": "🤷‍♂️"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 161,
      "end": 186,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 168,
        "end": 186,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 184,
          "end": 186,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 177,
          "end": 181,
          "decorators": [],
          "name": "decl",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 187,
      "end": 204,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 187,
        "end": 204,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 187,
          "end": 196,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 187,
            "end": 191,
            "decorators": [],
            "name": "decl",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 192,
            "end": 195,
            "raw": "\"B\"",
            "value": "B"
          }
        },
        "right": {
          "type": "Literal",
          "start": 199,
          "end": 204,
          "raw": "'foo'",
          "value": "foo"
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 206,
      "end": 232,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 213,
        "end": 232,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 230,
          "end": 232,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 222,
          "end": 227,
          "decorators": [],
          "name": "decl2",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 233,
      "end": 245,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 233,
        "end": 245,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 233,
          "end": 241,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 233,
            "end": 238,
            "decorators": [],
            "name": "decl2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 239,
            "end": 240,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 244,
          "end": 245,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 247,
      "end": 273,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 254,
        "end": 273,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 271,
          "end": 273,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 263,
          "end": 268,
          "decorators": [],
          "name": "decl3",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 274,
      "end": 287,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 274,
        "end": 287,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 274,
          "end": 283,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 274,
            "end": 279,
            "decorators": [],
            "name": "decl3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 280,
            "end": 282,
            "raw": "77",
            "value": 77
          }
        },
        "right": {
          "type": "Literal",
          "start": 286,
          "end": 287,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 289,
      "end": 315,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 296,
        "end": 315,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 313,
          "end": 315,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 305,
          "end": 310,
          "decorators": [],
          "name": "decl4",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 316,
      "end": 330,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 316,
        "end": 330,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 316,
          "end": 326,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 316,
            "end": 321,
            "decorators": [],
            "name": "decl4",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 322,
            "end": 325,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 329,
          "end": 330,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 332,
      "end": 358,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 339,
        "end": 358,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 356,
          "end": 358,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 348,
          "end": 353,
          "decorators": [],
          "name": "decl5",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 359,
      "end": 375,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 359,
        "end": 375,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 359,
          "end": 371,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 359,
            "end": 364,
            "decorators": [],
            "name": "decl5",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 365,
            "end": 370,
            "raw": "\"101\"",
            "value": "101"
          }
        },
        "right": {
          "type": "Literal",
          "start": 374,
          "end": 375,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 377,
      "end": 403,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 384,
        "end": 403,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 401,
          "end": 403,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 393,
          "end": 398,
          "decorators": [],
          "name": "decl6",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 404,
      "end": 421,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 404,
        "end": 421,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 404,
          "end": 417,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 404,
            "end": 409,
            "decorators": [],
            "name": "decl6",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 410,
            "end": 416,
            "decorators": [],
            "name": "numStr",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 420,
          "end": 421,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 423,
      "end": 449,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 430,
        "end": 449,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 447,
          "end": 449,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 439,
          "end": 444,
          "decorators": [],
          "name": "decl7",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 450,
      "end": 470,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 450,
        "end": 470,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 450,
          "end": 466,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 450,
            "end": 455,
            "decorators": [],
            "name": "decl7",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 456,
            "end": 465,
            "raw": "\"qwe rty\"",
            "value": "qwe rty"
          }
        },
        "right": {
          "type": "Literal",
          "start": 469,
          "end": 470,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 472,
      "end": 498,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 479,
        "end": 498,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 496,
          "end": 498,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 488,
          "end": 493,
          "decorators": [],
          "name": "decl8",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 499,
      "end": 524,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 499,
        "end": 524,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 499,
          "end": 520,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 499,
            "end": 504,
            "decorators": [],
            "name": "decl8",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 505,
            "end": 519,
            "decorators": [],
            "name": "withWhitespace",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 523,
          "end": 524,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 526,
      "end": 552,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 533,
        "end": 552,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 550,
          "end": 552,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 542,
          "end": 547,
          "decorators": [],
          "name": "decl9",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 553,
      "end": 568,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 553,
        "end": 568,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 553,
          "end": 564,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 553,
            "end": 558,
            "decorators": [],
            "name": "decl9",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 559,
            "end": 563,
            "raw": "\"🤪\"",
            "value": "🤪"
          }
        },
        "right": {
          "type": "Literal",
          "start": 567,
          "end": 568,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 570,
      "end": 597,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 577,
        "end": 597,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 595,
          "end": 597,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 586,
          "end": 592,
          "decorators": [],
          "name": "decl10",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 598,
      "end": 615,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 598,
        "end": 615,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 598,
          "end": 611,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 598,
            "end": 604,
            "decorators": [],
            "name": "decl10",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 605,
            "end": 610,
            "decorators": [],
            "name": "emoji",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 614,
          "end": 615,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 617,
      "end": 646,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 624,
        "end": 646,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 630,
            "end": 646,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 630,
              "end": 635,
              "decorators": [],
              "name": "arrow",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 638,
              "end": 646,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 644,
                "end": 646,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 647,
      "end": 665,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 647,
        "end": 665,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 647,
          "end": 657,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 647,
            "end": 652,
            "decorators": [],
            "name": "arrow",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 653,
            "end": 656,
            "raw": "\"B\"",
            "value": "B"
          }
        },
        "right": {
          "type": "Literal",
          "start": 660,
          "end": 665,
          "raw": "'bar'",
          "value": "bar"
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 667,
      "end": 697,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 674,
        "end": 697,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 680,
            "end": 697,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 680,
              "end": 686,
              "decorators": [],
              "name": "arrow2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 689,
              "end": 697,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 695,
                "end": 697,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 698,
      "end": 713,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 698,
        "end": 713,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 698,
          "end": 707,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 698,
            "end": 704,
            "decorators": [],
            "name": "arrow2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 705,
            "end": 706,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 710,
          "end": 713,
          "raw": "100",
          "value": 100
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 715,
      "end": 745,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 722,
        "end": 745,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 728,
            "end": 745,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 728,
              "end": 734,
              "decorators": [],
              "name": "arrow3",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 737,
              "end": 745,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 743,
                "end": 745,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 746,
      "end": 760,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 746,
        "end": 760,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 746,
          "end": 756,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 746,
            "end": 752,
            "decorators": [],
            "name": "arrow3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 753,
            "end": 755,
            "raw": "77",
            "value": 77
          }
        },
        "right": {
          "type": "Literal",
          "start": 759,
          "end": 760,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 762,
      "end": 792,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 769,
        "end": 792,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 775,
            "end": 792,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 775,
              "end": 781,
              "decorators": [],
              "name": "arrow4",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 784,
              "end": 792,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 790,
                "end": 792,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 793,
      "end": 808,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 793,
        "end": 808,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 793,
          "end": 804,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 793,
            "end": 799,
            "decorators": [],
            "name": "arrow4",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 800,
            "end": 803,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 807,
          "end": 808,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 810,
      "end": 840,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 817,
        "end": 840,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 823,
            "end": 840,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 823,
              "end": 829,
              "decorators": [],
              "name": "arrow5",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 832,
              "end": 840,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 838,
                "end": 840,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 841,
      "end": 858,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 841,
        "end": 858,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 841,
          "end": 854,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 841,
            "end": 847,
            "decorators": [],
            "name": "arrow5",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 848,
            "end": 853,
            "raw": "\"101\"",
            "value": "101"
          }
        },
        "right": {
          "type": "Literal",
          "start": 857,
          "end": 858,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 860,
      "end": 890,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 867,
        "end": 890,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 873,
            "end": 890,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 873,
              "end": 879,
              "decorators": [],
              "name": "arrow6",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 882,
              "end": 890,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 888,
                "end": 890,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 891,
      "end": 909,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 891,
        "end": 909,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 891,
          "end": 905,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 891,
            "end": 897,
            "decorators": [],
            "name": "arrow6",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 898,
            "end": 904,
            "decorators": [],
            "name": "numStr",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 908,
          "end": 909,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 911,
      "end": 941,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 918,
        "end": 941,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 924,
            "end": 941,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 924,
              "end": 930,
              "decorators": [],
              "name": "arrow7",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 933,
              "end": 941,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 939,
                "end": 941,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 942,
      "end": 963,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 942,
        "end": 963,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 942,
          "end": 959,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 942,
            "end": 948,
            "decorators": [],
            "name": "arrow7",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 949,
            "end": 958,
            "raw": "\"qwe rty\"",
            "value": "qwe rty"
          }
        },
        "right": {
          "type": "Literal",
          "start": 962,
          "end": 963,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 965,
      "end": 995,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 972,
        "end": 995,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 978,
            "end": 995,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 978,
              "end": 984,
              "decorators": [],
              "name": "arrow8",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 987,
              "end": 995,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 993,
                "end": 995,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 996,
      "end": 1022,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 996,
        "end": 1022,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 996,
          "end": 1018,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 996,
            "end": 1002,
            "decorators": [],
            "name": "arrow8",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1003,
            "end": 1017,
            "decorators": [],
            "name": "withWhitespace",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 1021,
          "end": 1022,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1024,
      "end": 1054,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1031,
        "end": 1054,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1037,
            "end": 1054,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1037,
              "end": 1043,
              "decorators": [],
              "name": "arrow9",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 1046,
              "end": 1054,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1052,
                "end": 1054,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 1055,
      "end": 1071,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1055,
        "end": 1071,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1055,
          "end": 1067,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 1055,
            "end": 1061,
            "decorators": [],
            "name": "arrow9",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1062,
            "end": 1066,
            "raw": "\"🤪\"",
            "value": "🤪"
          }
        },
        "right": {
          "type": "Literal",
          "start": 1070,
          "end": 1071,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1073,
      "end": 1104,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1080,
        "end": 1104,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1086,
            "end": 1104,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1086,
              "end": 1093,
              "decorators": [],
              "name": "arrow10",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 1096,
              "end": 1104,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1102,
                "end": 1104,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 1105,
      "end": 1123,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1105,
        "end": 1123,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1105,
          "end": 1119,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 1105,
            "end": 1112,
            "decorators": [],
            "name": "arrow10",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1113,
            "end": 1118,
            "decorators": [],
            "name": "emoji",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 1122,
          "end": 1123,
          "raw": "0",
          "value": 0
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
