__ESTREE_TEST__:PASS:
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
