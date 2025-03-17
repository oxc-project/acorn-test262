__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 1124,
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
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 67,
            "end": 70,
            "value": "C",
            "raw": "\"C\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 80,
            "name": "num",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 83,
            "end": 84,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 97,
            "name": "numStr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 100,
            "end": 104,
            "value": "10",
            "raw": "\"10\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 125,
            "name": "withWhitespace",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 128,
            "end": 137,
            "value": "foo bar",
            "raw": "\"foo bar\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 149,
            "name": "emoji",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 152,
            "end": 159,
            "value": "🤷‍♂️",
            "raw": "\"🤷‍♂️\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 161,
      "end": 186,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 168,
        "end": 186,
        "id": {
          "type": "Identifier",
          "start": 177,
          "end": 181,
          "name": "decl",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 184,
          "end": 186,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 187,
      "end": 204,
      "expression": {
        "type": "AssignmentExpression",
        "start": 187,
        "end": 204,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 187,
          "end": 196,
          "object": {
            "type": "Identifier",
            "start": 187,
            "end": 191,
            "name": "decl",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 192,
            "end": 195,
            "value": "B",
            "raw": "\"B\""
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 199,
          "end": 204,
          "value": "foo",
          "raw": "'foo'"
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 206,
      "end": 232,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 213,
        "end": 232,
        "id": {
          "type": "Identifier",
          "start": 222,
          "end": 227,
          "name": "decl2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 230,
          "end": 232,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 233,
      "end": 245,
      "expression": {
        "type": "AssignmentExpression",
        "start": 233,
        "end": 245,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 233,
          "end": 241,
          "object": {
            "type": "Identifier",
            "start": 233,
            "end": 238,
            "name": "decl2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 239,
            "end": 240,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 244,
          "end": 245,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 247,
      "end": 273,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 254,
        "end": 273,
        "id": {
          "type": "Identifier",
          "start": 263,
          "end": 268,
          "name": "decl3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 271,
          "end": 273,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 274,
      "end": 287,
      "expression": {
        "type": "AssignmentExpression",
        "start": 274,
        "end": 287,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 274,
          "end": 283,
          "object": {
            "type": "Identifier",
            "start": 274,
            "end": 279,
            "name": "decl3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 280,
            "end": 282,
            "value": 77,
            "raw": "77"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 286,
          "end": 287,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 289,
      "end": 315,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 296,
        "end": 315,
        "id": {
          "type": "Identifier",
          "start": 305,
          "end": 310,
          "name": "decl4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 313,
          "end": 315,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 316,
      "end": 330,
      "expression": {
        "type": "AssignmentExpression",
        "start": 316,
        "end": 330,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 316,
          "end": 326,
          "object": {
            "type": "Identifier",
            "start": 316,
            "end": 321,
            "name": "decl4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 322,
            "end": 325,
            "name": "num",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 329,
          "end": 330,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 332,
      "end": 358,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 339,
        "end": 358,
        "id": {
          "type": "Identifier",
          "start": 348,
          "end": 353,
          "name": "decl5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 356,
          "end": 358,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 359,
      "end": 375,
      "expression": {
        "type": "AssignmentExpression",
        "start": 359,
        "end": 375,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 359,
          "end": 371,
          "object": {
            "type": "Identifier",
            "start": 359,
            "end": 364,
            "name": "decl5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 365,
            "end": 370,
            "value": "101",
            "raw": "\"101\""
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 374,
          "end": 375,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 377,
      "end": 403,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 384,
        "end": 403,
        "id": {
          "type": "Identifier",
          "start": 393,
          "end": 398,
          "name": "decl6",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 401,
          "end": 403,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 404,
      "end": 421,
      "expression": {
        "type": "AssignmentExpression",
        "start": 404,
        "end": 421,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 404,
          "end": 417,
          "object": {
            "type": "Identifier",
            "start": 404,
            "end": 409,
            "name": "decl6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 410,
            "end": 416,
            "name": "numStr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 420,
          "end": 421,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 423,
      "end": 449,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 430,
        "end": 449,
        "id": {
          "type": "Identifier",
          "start": 439,
          "end": 444,
          "name": "decl7",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 447,
          "end": 449,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 450,
      "end": 470,
      "expression": {
        "type": "AssignmentExpression",
        "start": 450,
        "end": 470,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 450,
          "end": 466,
          "object": {
            "type": "Identifier",
            "start": 450,
            "end": 455,
            "name": "decl7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 456,
            "end": 465,
            "value": "qwe rty",
            "raw": "\"qwe rty\""
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 469,
          "end": 470,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 472,
      "end": 498,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 479,
        "end": 498,
        "id": {
          "type": "Identifier",
          "start": 488,
          "end": 493,
          "name": "decl8",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 496,
          "end": 498,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 499,
      "end": 524,
      "expression": {
        "type": "AssignmentExpression",
        "start": 499,
        "end": 524,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 499,
          "end": 520,
          "object": {
            "type": "Identifier",
            "start": 499,
            "end": 504,
            "name": "decl8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 505,
            "end": 519,
            "name": "withWhitespace",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 523,
          "end": 524,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 526,
      "end": 552,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 533,
        "end": 552,
        "id": {
          "type": "Identifier",
          "start": 542,
          "end": 547,
          "name": "decl9",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 550,
          "end": 552,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 553,
      "end": 568,
      "expression": {
        "type": "AssignmentExpression",
        "start": 553,
        "end": 568,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 553,
          "end": 564,
          "object": {
            "type": "Identifier",
            "start": 553,
            "end": 558,
            "name": "decl9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 559,
            "end": 563,
            "value": "🤪",
            "raw": "\"🤪\""
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 567,
          "end": 568,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 570,
      "end": 597,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 577,
        "end": 597,
        "id": {
          "type": "Identifier",
          "start": 586,
          "end": 592,
          "name": "decl10",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 595,
          "end": 597,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 598,
      "end": 615,
      "expression": {
        "type": "AssignmentExpression",
        "start": 598,
        "end": 615,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 598,
          "end": 611,
          "object": {
            "type": "Identifier",
            "start": 598,
            "end": 604,
            "name": "decl10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 605,
            "end": 610,
            "name": "emoji",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 614,
          "end": 615,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 617,
      "end": 646,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 624,
        "end": 646,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 630,
            "end": 646,
            "id": {
              "type": "Identifier",
              "start": 630,
              "end": 635,
              "name": "arrow",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 638,
              "end": 646,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 644,
                "end": 646,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 647,
      "end": 665,
      "expression": {
        "type": "AssignmentExpression",
        "start": 647,
        "end": 665,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 647,
          "end": 657,
          "object": {
            "type": "Identifier",
            "start": 647,
            "end": 652,
            "name": "arrow",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 653,
            "end": 656,
            "value": "B",
            "raw": "\"B\""
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 660,
          "end": 665,
          "value": "bar",
          "raw": "'bar'"
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 667,
      "end": 697,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 674,
        "end": 697,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 680,
            "end": 697,
            "id": {
              "type": "Identifier",
              "start": 680,
              "end": 686,
              "name": "arrow2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 689,
              "end": 697,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 695,
                "end": 697,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 698,
      "end": 713,
      "expression": {
        "type": "AssignmentExpression",
        "start": 698,
        "end": 713,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 698,
          "end": 707,
          "object": {
            "type": "Identifier",
            "start": 698,
            "end": 704,
            "name": "arrow2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 705,
            "end": 706,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 710,
          "end": 713,
          "value": 100,
          "raw": "100"
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 715,
      "end": 745,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 722,
        "end": 745,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 728,
            "end": 745,
            "id": {
              "type": "Identifier",
              "start": 728,
              "end": 734,
              "name": "arrow3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 737,
              "end": 745,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 743,
                "end": 745,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 746,
      "end": 760,
      "expression": {
        "type": "AssignmentExpression",
        "start": 746,
        "end": 760,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 746,
          "end": 756,
          "object": {
            "type": "Identifier",
            "start": 746,
            "end": 752,
            "name": "arrow3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 753,
            "end": 755,
            "value": 77,
            "raw": "77"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 759,
          "end": 760,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 762,
      "end": 792,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 769,
        "end": 792,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 775,
            "end": 792,
            "id": {
              "type": "Identifier",
              "start": 775,
              "end": 781,
              "name": "arrow4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 784,
              "end": 792,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 790,
                "end": 792,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 793,
      "end": 808,
      "expression": {
        "type": "AssignmentExpression",
        "start": 793,
        "end": 808,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 793,
          "end": 804,
          "object": {
            "type": "Identifier",
            "start": 793,
            "end": 799,
            "name": "arrow4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 800,
            "end": 803,
            "name": "num",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 807,
          "end": 808,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 810,
      "end": 840,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 817,
        "end": 840,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 823,
            "end": 840,
            "id": {
              "type": "Identifier",
              "start": 823,
              "end": 829,
              "name": "arrow5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 832,
              "end": 840,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 838,
                "end": 840,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 841,
      "end": 858,
      "expression": {
        "type": "AssignmentExpression",
        "start": 841,
        "end": 858,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 841,
          "end": 854,
          "object": {
            "type": "Identifier",
            "start": 841,
            "end": 847,
            "name": "arrow5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 848,
            "end": 853,
            "value": "101",
            "raw": "\"101\""
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 857,
          "end": 858,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 860,
      "end": 890,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 867,
        "end": 890,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 873,
            "end": 890,
            "id": {
              "type": "Identifier",
              "start": 873,
              "end": 879,
              "name": "arrow6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 882,
              "end": 890,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 888,
                "end": 890,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 891,
      "end": 909,
      "expression": {
        "type": "AssignmentExpression",
        "start": 891,
        "end": 909,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 891,
          "end": 905,
          "object": {
            "type": "Identifier",
            "start": 891,
            "end": 897,
            "name": "arrow6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 898,
            "end": 904,
            "name": "numStr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 908,
          "end": 909,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 911,
      "end": 941,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 918,
        "end": 941,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 924,
            "end": 941,
            "id": {
              "type": "Identifier",
              "start": 924,
              "end": 930,
              "name": "arrow7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 933,
              "end": 941,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 939,
                "end": 941,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 942,
      "end": 963,
      "expression": {
        "type": "AssignmentExpression",
        "start": 942,
        "end": 963,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 942,
          "end": 959,
          "object": {
            "type": "Identifier",
            "start": 942,
            "end": 948,
            "name": "arrow7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 949,
            "end": 958,
            "value": "qwe rty",
            "raw": "\"qwe rty\""
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 962,
          "end": 963,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 965,
      "end": 995,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 972,
        "end": 995,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 978,
            "end": 995,
            "id": {
              "type": "Identifier",
              "start": 978,
              "end": 984,
              "name": "arrow8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 987,
              "end": 995,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 993,
                "end": 995,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 996,
      "end": 1022,
      "expression": {
        "type": "AssignmentExpression",
        "start": 996,
        "end": 1022,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 996,
          "end": 1018,
          "object": {
            "type": "Identifier",
            "start": 996,
            "end": 1002,
            "name": "arrow8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1003,
            "end": 1017,
            "name": "withWhitespace",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1021,
          "end": 1022,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1024,
      "end": 1054,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1031,
        "end": 1054,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1037,
            "end": 1054,
            "id": {
              "type": "Identifier",
              "start": 1037,
              "end": 1043,
              "name": "arrow9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 1046,
              "end": 1054,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1052,
                "end": 1054,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 1055,
      "end": 1071,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1055,
        "end": 1071,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1055,
          "end": 1067,
          "object": {
            "type": "Identifier",
            "start": 1055,
            "end": 1061,
            "name": "arrow9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1062,
            "end": 1066,
            "value": "🤪",
            "raw": "\"🤪\""
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1070,
          "end": 1071,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1073,
      "end": 1104,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1080,
        "end": 1104,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1086,
            "end": 1104,
            "id": {
              "type": "Identifier",
              "start": 1086,
              "end": 1093,
              "name": "arrow10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 1096,
              "end": 1104,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1102,
                "end": 1104,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 1105,
      "end": 1123,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1105,
        "end": 1123,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1105,
          "end": 1119,
          "object": {
            "type": "Identifier",
            "start": 1105,
            "end": 1112,
            "name": "arrow10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1113,
            "end": 1118,
            "name": "emoji",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1122,
          "end": 1123,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
