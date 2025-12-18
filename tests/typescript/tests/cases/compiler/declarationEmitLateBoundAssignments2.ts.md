__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 64
          },
          "init": {
            "type": "Literal",
            "value": "C",
            "raw": "\"C\"",
            "start": 67,
            "end": 70
          },
          "definite": false,
          "start": 63,
          "end": 70
        }
      ],
      "declare": false,
      "start": 57,
      "end": 70
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
            "name": "num",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 80
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 83,
            "end": 84
          },
          "definite": false,
          "start": 77,
          "end": 84
        }
      ],
      "declare": false,
      "start": 71,
      "end": 84
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
            "name": "numStr",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 97
          },
          "init": {
            "type": "Literal",
            "value": "10",
            "raw": "\"10\"",
            "start": 100,
            "end": 104
          },
          "definite": false,
          "start": 91,
          "end": 104
        }
      ],
      "declare": false,
      "start": 85,
      "end": 104
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
            "name": "withWhitespace",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 125
          },
          "init": {
            "type": "Literal",
            "value": "foo bar",
            "raw": "\"foo bar\"",
            "start": 128,
            "end": 137
          },
          "definite": false,
          "start": 111,
          "end": 137
        }
      ],
      "declare": false,
      "start": 105,
      "end": 137
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
            "name": "emoji",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 149
          },
          "init": {
            "type": "Literal",
            "value": "🤷‍♂️",
            "raw": "\"🤷‍♂️\"",
            "start": 152,
            "end": 159
          },
          "definite": false,
          "start": 144,
          "end": 159
        }
      ],
      "declare": false,
      "start": 138,
      "end": 159
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "decl",
          "optional": false,
          "typeAnnotation": null,
          "start": 177,
          "end": 181
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 184,
          "end": 186
        },
        "expression": false,
        "start": 168,
        "end": 186
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 161,
      "end": 186
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
            "name": "decl",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 191
          },
          "property": {
            "type": "Literal",
            "value": "B",
            "raw": "\"B\"",
            "start": 192,
            "end": 195
          },
          "optional": false,
          "computed": true,
          "start": 187,
          "end": 196
        },
        "right": {
          "type": "Literal",
          "value": "foo",
          "raw": "'foo'",
          "start": 199,
          "end": 204
        },
        "start": 187,
        "end": 204
      },
      "directive": null,
      "start": 187,
      "end": 204
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "decl2",
          "optional": false,
          "typeAnnotation": null,
          "start": 222,
          "end": 227
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 230,
          "end": 232
        },
        "expression": false,
        "start": 213,
        "end": 232
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 206,
      "end": 232
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
            "name": "decl2",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 238
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 240
          },
          "optional": false,
          "computed": true,
          "start": 233,
          "end": 241
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 244,
          "end": 245
        },
        "start": 233,
        "end": 245
      },
      "directive": null,
      "start": 233,
      "end": 245
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "decl3",
          "optional": false,
          "typeAnnotation": null,
          "start": 263,
          "end": 268
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 271,
          "end": 273
        },
        "expression": false,
        "start": 254,
        "end": 273
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 247,
      "end": 273
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
            "name": "decl3",
            "optional": false,
            "typeAnnotation": null,
            "start": 274,
            "end": 279
          },
          "property": {
            "type": "Literal",
            "value": 77,
            "raw": "77",
            "start": 280,
            "end": 282
          },
          "optional": false,
          "computed": true,
          "start": 274,
          "end": 283
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 286,
          "end": 287
        },
        "start": 274,
        "end": 287
      },
      "directive": null,
      "start": 274,
      "end": 287
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "decl4",
          "optional": false,
          "typeAnnotation": null,
          "start": 305,
          "end": 310
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 313,
          "end": 315
        },
        "expression": false,
        "start": 296,
        "end": 315
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 289,
      "end": 315
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
            "name": "decl4",
            "optional": false,
            "typeAnnotation": null,
            "start": 316,
            "end": 321
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null,
            "start": 322,
            "end": 325
          },
          "optional": false,
          "computed": true,
          "start": 316,
          "end": 326
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 329,
          "end": 330
        },
        "start": 316,
        "end": 330
      },
      "directive": null,
      "start": 316,
      "end": 330
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "decl5",
          "optional": false,
          "typeAnnotation": null,
          "start": 348,
          "end": 353
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 356,
          "end": 358
        },
        "expression": false,
        "start": 339,
        "end": 358
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 332,
      "end": 358
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
            "name": "decl5",
            "optional": false,
            "typeAnnotation": null,
            "start": 359,
            "end": 364
          },
          "property": {
            "type": "Literal",
            "value": "101",
            "raw": "\"101\"",
            "start": 365,
            "end": 370
          },
          "optional": false,
          "computed": true,
          "start": 359,
          "end": 371
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 374,
          "end": 375
        },
        "start": 359,
        "end": 375
      },
      "directive": null,
      "start": 359,
      "end": 375
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "decl6",
          "optional": false,
          "typeAnnotation": null,
          "start": 393,
          "end": 398
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 401,
          "end": 403
        },
        "expression": false,
        "start": 384,
        "end": 403
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 377,
      "end": 403
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
            "name": "decl6",
            "optional": false,
            "typeAnnotation": null,
            "start": 404,
            "end": 409
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "numStr",
            "optional": false,
            "typeAnnotation": null,
            "start": 410,
            "end": 416
          },
          "optional": false,
          "computed": true,
          "start": 404,
          "end": 417
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 420,
          "end": 421
        },
        "start": 404,
        "end": 421
      },
      "directive": null,
      "start": 404,
      "end": 421
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "decl7",
          "optional": false,
          "typeAnnotation": null,
          "start": 439,
          "end": 444
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 447,
          "end": 449
        },
        "expression": false,
        "start": 430,
        "end": 449
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 423,
      "end": 449
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
            "name": "decl7",
            "optional": false,
            "typeAnnotation": null,
            "start": 450,
            "end": 455
          },
          "property": {
            "type": "Literal",
            "value": "qwe rty",
            "raw": "\"qwe rty\"",
            "start": 456,
            "end": 465
          },
          "optional": false,
          "computed": true,
          "start": 450,
          "end": 466
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 469,
          "end": 470
        },
        "start": 450,
        "end": 470
      },
      "directive": null,
      "start": 450,
      "end": 470
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "decl8",
          "optional": false,
          "typeAnnotation": null,
          "start": 488,
          "end": 493
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 496,
          "end": 498
        },
        "expression": false,
        "start": 479,
        "end": 498
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 472,
      "end": 498
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
            "name": "decl8",
            "optional": false,
            "typeAnnotation": null,
            "start": 499,
            "end": 504
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "withWhitespace",
            "optional": false,
            "typeAnnotation": null,
            "start": 505,
            "end": 519
          },
          "optional": false,
          "computed": true,
          "start": 499,
          "end": 520
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 523,
          "end": 524
        },
        "start": 499,
        "end": 524
      },
      "directive": null,
      "start": 499,
      "end": 524
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "decl9",
          "optional": false,
          "typeAnnotation": null,
          "start": 542,
          "end": 547
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 550,
          "end": 552
        },
        "expression": false,
        "start": 533,
        "end": 552
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 526,
      "end": 552
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
            "name": "decl9",
            "optional": false,
            "typeAnnotation": null,
            "start": 553,
            "end": 558
          },
          "property": {
            "type": "Literal",
            "value": "🤪",
            "raw": "\"🤪\"",
            "start": 559,
            "end": 563
          },
          "optional": false,
          "computed": true,
          "start": 553,
          "end": 564
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 567,
          "end": 568
        },
        "start": 553,
        "end": 568
      },
      "directive": null,
      "start": 553,
      "end": 568
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "decl10",
          "optional": false,
          "typeAnnotation": null,
          "start": 586,
          "end": 592
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 595,
          "end": 597
        },
        "expression": false,
        "start": 577,
        "end": 597
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 570,
      "end": 597
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
            "name": "decl10",
            "optional": false,
            "typeAnnotation": null,
            "start": 598,
            "end": 604
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "emoji",
            "optional": false,
            "typeAnnotation": null,
            "start": 605,
            "end": 610
          },
          "optional": false,
          "computed": true,
          "start": 598,
          "end": 611
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 614,
          "end": 615
        },
        "start": 598,
        "end": 615
      },
      "directive": null,
      "start": 598,
      "end": 615
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
              "name": "arrow",
              "optional": false,
              "typeAnnotation": null,
              "start": 630,
              "end": 635
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 644,
                "end": 646
              },
              "id": null,
              "generator": false,
              "start": 638,
              "end": 646
            },
            "definite": false,
            "start": 630,
            "end": 646
          }
        ],
        "declare": false,
        "start": 624,
        "end": 646
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 617,
      "end": 646
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
            "name": "arrow",
            "optional": false,
            "typeAnnotation": null,
            "start": 647,
            "end": 652
          },
          "property": {
            "type": "Literal",
            "value": "B",
            "raw": "\"B\"",
            "start": 653,
            "end": 656
          },
          "optional": false,
          "computed": true,
          "start": 647,
          "end": 657
        },
        "right": {
          "type": "Literal",
          "value": "bar",
          "raw": "'bar'",
          "start": 660,
          "end": 665
        },
        "start": 647,
        "end": 665
      },
      "directive": null,
      "start": 647,
      "end": 665
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
              "name": "arrow2",
              "optional": false,
              "typeAnnotation": null,
              "start": 680,
              "end": 686
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 695,
                "end": 697
              },
              "id": null,
              "generator": false,
              "start": 689,
              "end": 697
            },
            "definite": false,
            "start": 680,
            "end": 697
          }
        ],
        "declare": false,
        "start": 674,
        "end": 697
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 667,
      "end": 697
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
            "name": "arrow2",
            "optional": false,
            "typeAnnotation": null,
            "start": 698,
            "end": 704
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 705,
            "end": 706
          },
          "optional": false,
          "computed": true,
          "start": 698,
          "end": 707
        },
        "right": {
          "type": "Literal",
          "value": 100,
          "raw": "100",
          "start": 710,
          "end": 713
        },
        "start": 698,
        "end": 713
      },
      "directive": null,
      "start": 698,
      "end": 713
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
              "name": "arrow3",
              "optional": false,
              "typeAnnotation": null,
              "start": 728,
              "end": 734
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 743,
                "end": 745
              },
              "id": null,
              "generator": false,
              "start": 737,
              "end": 745
            },
            "definite": false,
            "start": 728,
            "end": 745
          }
        ],
        "declare": false,
        "start": 722,
        "end": 745
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 715,
      "end": 745
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
            "name": "arrow3",
            "optional": false,
            "typeAnnotation": null,
            "start": 746,
            "end": 752
          },
          "property": {
            "type": "Literal",
            "value": 77,
            "raw": "77",
            "start": 753,
            "end": 755
          },
          "optional": false,
          "computed": true,
          "start": 746,
          "end": 756
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 759,
          "end": 760
        },
        "start": 746,
        "end": 760
      },
      "directive": null,
      "start": 746,
      "end": 760
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
              "name": "arrow4",
              "optional": false,
              "typeAnnotation": null,
              "start": 775,
              "end": 781
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 790,
                "end": 792
              },
              "id": null,
              "generator": false,
              "start": 784,
              "end": 792
            },
            "definite": false,
            "start": 775,
            "end": 792
          }
        ],
        "declare": false,
        "start": 769,
        "end": 792
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 762,
      "end": 792
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
            "name": "arrow4",
            "optional": false,
            "typeAnnotation": null,
            "start": 793,
            "end": 799
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null,
            "start": 800,
            "end": 803
          },
          "optional": false,
          "computed": true,
          "start": 793,
          "end": 804
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 807,
          "end": 808
        },
        "start": 793,
        "end": 808
      },
      "directive": null,
      "start": 793,
      "end": 808
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
              "name": "arrow5",
              "optional": false,
              "typeAnnotation": null,
              "start": 823,
              "end": 829
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 838,
                "end": 840
              },
              "id": null,
              "generator": false,
              "start": 832,
              "end": 840
            },
            "definite": false,
            "start": 823,
            "end": 840
          }
        ],
        "declare": false,
        "start": 817,
        "end": 840
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 810,
      "end": 840
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
            "name": "arrow5",
            "optional": false,
            "typeAnnotation": null,
            "start": 841,
            "end": 847
          },
          "property": {
            "type": "Literal",
            "value": "101",
            "raw": "\"101\"",
            "start": 848,
            "end": 853
          },
          "optional": false,
          "computed": true,
          "start": 841,
          "end": 854
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 857,
          "end": 858
        },
        "start": 841,
        "end": 858
      },
      "directive": null,
      "start": 841,
      "end": 858
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
              "name": "arrow6",
              "optional": false,
              "typeAnnotation": null,
              "start": 873,
              "end": 879
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 888,
                "end": 890
              },
              "id": null,
              "generator": false,
              "start": 882,
              "end": 890
            },
            "definite": false,
            "start": 873,
            "end": 890
          }
        ],
        "declare": false,
        "start": 867,
        "end": 890
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 860,
      "end": 890
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
            "name": "arrow6",
            "optional": false,
            "typeAnnotation": null,
            "start": 891,
            "end": 897
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "numStr",
            "optional": false,
            "typeAnnotation": null,
            "start": 898,
            "end": 904
          },
          "optional": false,
          "computed": true,
          "start": 891,
          "end": 905
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 908,
          "end": 909
        },
        "start": 891,
        "end": 909
      },
      "directive": null,
      "start": 891,
      "end": 909
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
              "name": "arrow7",
              "optional": false,
              "typeAnnotation": null,
              "start": 924,
              "end": 930
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 939,
                "end": 941
              },
              "id": null,
              "generator": false,
              "start": 933,
              "end": 941
            },
            "definite": false,
            "start": 924,
            "end": 941
          }
        ],
        "declare": false,
        "start": 918,
        "end": 941
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 911,
      "end": 941
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
            "name": "arrow7",
            "optional": false,
            "typeAnnotation": null,
            "start": 942,
            "end": 948
          },
          "property": {
            "type": "Literal",
            "value": "qwe rty",
            "raw": "\"qwe rty\"",
            "start": 949,
            "end": 958
          },
          "optional": false,
          "computed": true,
          "start": 942,
          "end": 959
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 962,
          "end": 963
        },
        "start": 942,
        "end": 963
      },
      "directive": null,
      "start": 942,
      "end": 963
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
              "name": "arrow8",
              "optional": false,
              "typeAnnotation": null,
              "start": 978,
              "end": 984
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 993,
                "end": 995
              },
              "id": null,
              "generator": false,
              "start": 987,
              "end": 995
            },
            "definite": false,
            "start": 978,
            "end": 995
          }
        ],
        "declare": false,
        "start": 972,
        "end": 995
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 965,
      "end": 995
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
            "name": "arrow8",
            "optional": false,
            "typeAnnotation": null,
            "start": 996,
            "end": 1002
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "withWhitespace",
            "optional": false,
            "typeAnnotation": null,
            "start": 1003,
            "end": 1017
          },
          "optional": false,
          "computed": true,
          "start": 996,
          "end": 1018
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 1021,
          "end": 1022
        },
        "start": 996,
        "end": 1022
      },
      "directive": null,
      "start": 996,
      "end": 1022
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
              "name": "arrow9",
              "optional": false,
              "typeAnnotation": null,
              "start": 1037,
              "end": 1043
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1052,
                "end": 1054
              },
              "id": null,
              "generator": false,
              "start": 1046,
              "end": 1054
            },
            "definite": false,
            "start": 1037,
            "end": 1054
          }
        ],
        "declare": false,
        "start": 1031,
        "end": 1054
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1024,
      "end": 1054
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
            "name": "arrow9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1055,
            "end": 1061
          },
          "property": {
            "type": "Literal",
            "value": "🤪",
            "raw": "\"🤪\"",
            "start": 1062,
            "end": 1066
          },
          "optional": false,
          "computed": true,
          "start": 1055,
          "end": 1067
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 1070,
          "end": 1071
        },
        "start": 1055,
        "end": 1071
      },
      "directive": null,
      "start": 1055,
      "end": 1071
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
              "name": "arrow10",
              "optional": false,
              "typeAnnotation": null,
              "start": 1086,
              "end": 1093
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1102,
                "end": 1104
              },
              "id": null,
              "generator": false,
              "start": 1096,
              "end": 1104
            },
            "definite": false,
            "start": 1086,
            "end": 1104
          }
        ],
        "declare": false,
        "start": 1080,
        "end": 1104
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1073,
      "end": 1104
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
            "name": "arrow10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1105,
            "end": 1112
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "emoji",
            "optional": false,
            "typeAnnotation": null,
            "start": 1113,
            "end": 1118
          },
          "optional": false,
          "computed": true,
          "start": 1105,
          "end": 1119
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 1122,
          "end": 1123
        },
        "start": 1105,
        "end": 1123
      },
      "directive": null,
      "start": 1105,
      "end": 1123
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 1123
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 57,
    "end": 62,
    "range": [
      57,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "String",
    "value": "\"C\"",
    "start": 67,
    "end": 70,
    "range": [
      67,
      70
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 71,
    "end": 76,
    "range": [
      71,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 77,
    "end": 80,
    "range": [
      77,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 85,
    "end": 90,
    "range": [
      85,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "numStr",
    "start": 91,
    "end": 97,
    "range": [
      91,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "String",
    "value": "\"10\"",
    "start": 100,
    "end": 104,
    "range": [
      100,
      104
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 105,
    "end": 110,
    "range": [
      105,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "withWhitespace",
    "start": 111,
    "end": 125,
    "range": [
      111,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "String",
    "value": "\"foo bar\"",
    "start": 128,
    "end": 137,
    "range": [
      128,
      137
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 138,
    "end": 143,
    "range": [
      138,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "emoji",
    "start": 144,
    "end": 149,
    "range": [
      144,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "String",
    "value": "\"🤷‍♂️\"",
    "start": 152,
    "end": 159,
    "range": [
      152,
      159
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 161,
    "end": 167,
    "range": [
      161,
      167
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 168,
    "end": 176,
    "range": [
      168,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "decl",
    "start": 177,
    "end": 181,
    "range": [
      177,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "decl",
    "start": 187,
    "end": 191,
    "range": [
      187,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 192,
    "end": 195,
    "range": [
      192,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 199,
    "end": 204,
    "range": [
      199,
      204
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 206,
    "end": 212,
    "range": [
      206,
      212
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 213,
    "end": 221,
    "range": [
      213,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "decl2",
    "start": 222,
    "end": 227,
    "range": [
      222,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Identifier",
    "value": "decl2",
    "start": 233,
    "end": 238,
    "range": [
      233,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 247,
    "end": 253,
    "range": [
      247,
      253
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 254,
    "end": 262,
    "range": [
      254,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "decl3",
    "start": 263,
    "end": 268,
    "range": [
      263,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Identifier",
    "value": "decl3",
    "start": 274,
    "end": 279,
    "range": [
      274,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Numeric",
    "value": "77",
    "start": 280,
    "end": 282,
    "range": [
      280,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 289,
    "end": 295,
    "range": [
      289,
      295
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 296,
    "end": 304,
    "range": [
      296,
      304
    ]
  },
  {
    "type": "Identifier",
    "value": "decl4",
    "start": 305,
    "end": 310,
    "range": [
      305,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "decl4",
    "start": 316,
    "end": 321,
    "range": [
      316,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 322,
    "end": 325,
    "range": [
      322,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 332,
    "end": 338,
    "range": [
      332,
      338
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 339,
    "end": 347,
    "range": [
      339,
      347
    ]
  },
  {
    "type": "Identifier",
    "value": "decl5",
    "start": 348,
    "end": 353,
    "range": [
      348,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "decl5",
    "start": 359,
    "end": 364,
    "range": [
      359,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "String",
    "value": "\"101\"",
    "start": 365,
    "end": 370,
    "range": [
      365,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 377,
    "end": 383,
    "range": [
      377,
      383
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 384,
    "end": 392,
    "range": [
      384,
      392
    ]
  },
  {
    "type": "Identifier",
    "value": "decl6",
    "start": 393,
    "end": 398,
    "range": [
      393,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "decl6",
    "start": 404,
    "end": 409,
    "range": [
      404,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Identifier",
    "value": "numStr",
    "start": 410,
    "end": 416,
    "range": [
      410,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 423,
    "end": 429,
    "range": [
      423,
      429
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 430,
    "end": 438,
    "range": [
      430,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "decl7",
    "start": 439,
    "end": 444,
    "range": [
      439,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Identifier",
    "value": "decl7",
    "start": 450,
    "end": 455,
    "range": [
      450,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "String",
    "value": "\"qwe rty\"",
    "start": 456,
    "end": 465,
    "range": [
      456,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 472,
    "end": 478,
    "range": [
      472,
      478
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 479,
    "end": 487,
    "range": [
      479,
      487
    ]
  },
  {
    "type": "Identifier",
    "value": "decl8",
    "start": 488,
    "end": 493,
    "range": [
      488,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Identifier",
    "value": "decl8",
    "start": 499,
    "end": 504,
    "range": [
      499,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Identifier",
    "value": "withWhitespace",
    "start": 505,
    "end": 519,
    "range": [
      505,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 526,
    "end": 532,
    "range": [
      526,
      532
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 533,
    "end": 541,
    "range": [
      533,
      541
    ]
  },
  {
    "type": "Identifier",
    "value": "decl9",
    "start": 542,
    "end": 547,
    "range": [
      542,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Identifier",
    "value": "decl9",
    "start": 553,
    "end": 558,
    "range": [
      553,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "String",
    "value": "\"🤪\"",
    "start": 559,
    "end": 563,
    "range": [
      559,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 570,
    "end": 576,
    "range": [
      570,
      576
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 577,
    "end": 585,
    "range": [
      577,
      585
    ]
  },
  {
    "type": "Identifier",
    "value": "decl10",
    "start": 586,
    "end": 592,
    "range": [
      586,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Identifier",
    "value": "decl10",
    "start": 598,
    "end": 604,
    "range": [
      598,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Identifier",
    "value": "emoji",
    "start": 605,
    "end": 610,
    "range": [
      605,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 617,
    "end": 623,
    "range": [
      617,
      623
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 624,
    "end": 629,
    "range": [
      624,
      629
    ]
  },
  {
    "type": "Identifier",
    "value": "arrow",
    "start": 630,
    "end": 635,
    "range": [
      630,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 641,
    "end": 643,
    "range": [
      641,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Identifier",
    "value": "arrow",
    "start": 647,
    "end": 652,
    "range": [
      647,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 653,
    "end": 656,
    "range": [
      653,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 660,
    "end": 665,
    "range": [
      660,
      665
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 667,
    "end": 673,
    "range": [
      667,
      673
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 674,
    "end": 679,
    "range": [
      674,
      679
    ]
  },
  {
    "type": "Identifier",
    "value": "arrow2",
    "start": 680,
    "end": 686,
    "range": [
      680,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 692,
    "end": 694,
    "range": [
      692,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Identifier",
    "value": "arrow2",
    "start": 698,
    "end": 704,
    "range": [
      698,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 710,
    "end": 713,
    "range": [
      710,
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
    "value": "const",
    "start": 722,
    "end": 727,
    "range": [
      722,
      727
    ]
  },
  {
    "type": "Identifier",
    "value": "arrow3",
    "start": 728,
    "end": 734,
    "range": [
      728,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 740,
    "end": 742,
    "range": [
      740,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Identifier",
    "value": "arrow3",
    "start": 746,
    "end": 752,
    "range": [
      746,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Numeric",
    "value": "77",
    "start": 753,
    "end": 755,
    "range": [
      753,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 762,
    "end": 768,
    "range": [
      762,
      768
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 769,
    "end": 774,
    "range": [
      769,
      774
    ]
  },
  {
    "type": "Identifier",
    "value": "arrow4",
    "start": 775,
    "end": 781,
    "range": [
      775,
      781
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 787,
    "end": 789,
    "range": [
      787,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Identifier",
    "value": "arrow4",
    "start": 793,
    "end": 799,
    "range": [
      793,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 800,
    "end": 803,
    "range": [
      800,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 810,
    "end": 816,
    "range": [
      810,
      816
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 817,
    "end": 822,
    "range": [
      817,
      822
    ]
  },
  {
    "type": "Identifier",
    "value": "arrow5",
    "start": 823,
    "end": 829,
    "range": [
      823,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 835,
    "end": 837,
    "range": [
      835,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Identifier",
    "value": "arrow5",
    "start": 841,
    "end": 847,
    "range": [
      841,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "String",
    "value": "\"101\"",
    "start": 848,
    "end": 853,
    "range": [
      848,
      853
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 860,
    "end": 866,
    "range": [
      860,
      866
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 867,
    "end": 872,
    "range": [
      867,
      872
    ]
  },
  {
    "type": "Identifier",
    "value": "arrow6",
    "start": 873,
    "end": 879,
    "range": [
      873,
      879
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 885,
    "end": 887,
    "range": [
      885,
      887
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Identifier",
    "value": "arrow6",
    "start": 891,
    "end": 897,
    "range": [
      891,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Identifier",
    "value": "numStr",
    "start": 898,
    "end": 904,
    "range": [
      898,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 911,
    "end": 917,
    "range": [
      911,
      917
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 918,
    "end": 923,
    "range": [
      918,
      923
    ]
  },
  {
    "type": "Identifier",
    "value": "arrow7",
    "start": 924,
    "end": 930,
    "range": [
      924,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 936,
    "end": 938,
    "range": [
      936,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Identifier",
    "value": "arrow7",
    "start": 942,
    "end": 948,
    "range": [
      942,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "String",
    "value": "\"qwe rty\"",
    "start": 949,
    "end": 958,
    "range": [
      949,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 965,
    "end": 971,
    "range": [
      965,
      971
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 972,
    "end": 977,
    "range": [
      972,
      977
    ]
  },
  {
    "type": "Identifier",
    "value": "arrow8",
    "start": 978,
    "end": 984,
    "range": [
      978,
      984
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 988,
    "end": 989,
    "range": [
      988,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 990,
    "end": 992,
    "range": [
      990,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Identifier",
    "value": "arrow8",
    "start": 996,
    "end": 1002,
    "range": [
      996,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Identifier",
    "value": "withWhitespace",
    "start": 1003,
    "end": 1017,
    "range": [
      1003,
      1017
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1017,
    "end": 1018,
    "range": [
      1017,
      1018
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1024,
    "end": 1030,
    "range": [
      1024,
      1030
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1031,
    "end": 1036,
    "range": [
      1031,
      1036
    ]
  },
  {
    "type": "Identifier",
    "value": "arrow9",
    "start": 1037,
    "end": 1043,
    "range": [
      1037,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1049,
    "end": 1051,
    "range": [
      1049,
      1051
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1052,
    "end": 1053,
    "range": [
      1052,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Identifier",
    "value": "arrow9",
    "start": 1055,
    "end": 1061,
    "range": [
      1055,
      1061
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1061,
    "end": 1062,
    "range": [
      1061,
      1062
    ]
  },
  {
    "type": "String",
    "value": "\"🤪\"",
    "start": 1062,
    "end": 1066,
    "range": [
      1062,
      1066
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1066,
    "end": 1067,
    "range": [
      1066,
      1067
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1073,
    "end": 1079,
    "range": [
      1073,
      1079
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1080,
    "end": 1085,
    "range": [
      1080,
      1085
    ]
  },
  {
    "type": "Identifier",
    "value": "arrow10",
    "start": 1086,
    "end": 1093,
    "range": [
      1086,
      1093
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1096,
    "end": 1097,
    "range": [
      1096,
      1097
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1099,
    "end": 1101,
    "range": [
      1099,
      1101
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1103,
    "end": 1104,
    "range": [
      1103,
      1104
    ]
  },
  {
    "type": "Identifier",
    "value": "arrow10",
    "start": 1105,
    "end": 1112,
    "range": [
      1105,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Identifier",
    "value": "emoji",
    "start": 1113,
    "end": 1118,
    "range": [
      1113,
      1118
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1118,
    "end": 1119,
    "range": [
      1118,
      1119
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  }
]
```
