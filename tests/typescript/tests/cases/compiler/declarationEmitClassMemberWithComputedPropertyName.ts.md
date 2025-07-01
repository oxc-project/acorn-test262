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
            "name": "k1",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 8
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 17
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 11,
            "end": 19
          },
          "definite": false,
          "start": 6,
          "end": 19
        }
      ],
      "declare": false,
      "start": 0,
      "end": 20
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
            "name": "k2",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 29
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "foo",
              "raw": "'foo'",
              "start": 32,
              "end": 37
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 46
              },
              "typeArguments": null,
              "start": 41,
              "end": 46
            },
            "start": 32,
            "end": 46
          },
          "definite": false,
          "start": 27,
          "end": 46
        }
      ],
      "declare": false,
      "start": 21,
      "end": 47
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
            "name": "k3",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 57
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 66
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 60,
            "end": 68
          },
          "definite": false,
          "start": 55,
          "end": 68
        }
      ],
      "declare": false,
      "start": 49,
      "end": 69
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
            "name": "k4",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 78
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "prop",
              "raw": "'prop'",
              "start": 81,
              "end": 87
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 91,
                "end": 96
              },
              "typeArguments": null,
              "start": 91,
              "end": 96
            },
            "start": 81,
            "end": 96
          },
          "definite": false,
          "start": 76,
          "end": 96
        }
      ],
      "declare": false,
      "start": 70,
      "end": 97
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 108
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k1",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 125
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 130,
                  "end": 136
                },
                "start": 128,
                "end": 136
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 154,
                      "end": 155
                    },
                    "start": 147,
                    "end": 156
                  }
                ],
                "start": 137,
                "end": 162
              },
              "expression": false,
              "start": 126,
              "end": 162
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 115,
            "end": 162
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k1",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 170
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 175,
                  "end": 181
                },
                "start": 173,
                "end": 181
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 199,
                      "end": 201
                    },
                    "start": 192,
                    "end": 202
                  }
                ],
                "start": 182,
                "end": 208
              },
              "expression": false,
              "start": 171,
              "end": 208
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 167,
            "end": 208
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k2",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 224
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 245,
                      "end": 246
                    },
                    "start": 238,
                    "end": 247
                  }
                ],
                "start": 228,
                "end": 253
              },
              "expression": false,
              "start": 225,
              "end": 253
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 214,
            "end": 253
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k2",
              "optional": false,
              "typeAnnotation": null,
              "start": 259,
              "end": 261
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 282,
                      "end": 284
                    },
                    "start": 275,
                    "end": 285
                  }
                ],
                "start": 265,
                "end": 291
              },
              "expression": false,
              "start": 262,
              "end": 291
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 258,
            "end": 291
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 306
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 309,
                "end": 311
              },
              "expression": false,
              "start": 306,
              "end": 311
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 297,
            "end": 311
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 316,
              "end": 318
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 321,
                "end": 323
              },
              "expression": false,
              "start": 318,
              "end": 323
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 316,
            "end": 323
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k3",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 339
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 343,
              "end": 344
            },
            "computed": true,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 329,
            "end": 345
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k3",
              "optional": false,
              "typeAnnotation": null,
              "start": 351,
              "end": 353
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 357,
              "end": 358
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 350,
            "end": 359
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k4",
              "optional": false,
              "typeAnnotation": null,
              "start": 373,
              "end": 375
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 379,
              "end": 380
            },
            "computed": true,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 365,
            "end": 381
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k4",
              "optional": false,
              "typeAnnotation": null,
              "start": 387,
              "end": 389
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 393,
              "end": 394
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 386,
            "end": 395
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 408,
              "end": 410
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 413,
              "end": 414
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 401,
            "end": 415
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 422
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 425,
              "end": 426
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 420,
            "end": 427
          }
        ],
        "start": 109,
        "end": 429
      },
      "abstract": false,
      "declare": false,
      "start": 99,
      "end": 429
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
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 444,
              "end": 446
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 452
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": null,
                "start": 453,
                "end": 455
              },
              "optional": false,
              "computed": true,
              "start": 449,
              "end": 456
            },
            "definite": false,
            "start": 444,
            "end": 456
          }
        ],
        "declare": false,
        "start": 438,
        "end": 457
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 431,
      "end": 457
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
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 471,
              "end": 473
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 480,
                  "end": 483
                },
                "typeArguments": null,
                "arguments": [],
                "start": 476,
                "end": 485
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": null,
                "start": 486,
                "end": 488
              },
              "optional": false,
              "computed": true,
              "start": 476,
              "end": 489
            },
            "definite": false,
            "start": 471,
            "end": 489
          }
        ],
        "declare": false,
        "start": 465,
        "end": 490
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 458,
      "end": 490
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
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 505,
              "end": 507
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 513
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null,
                "start": 514,
                "end": 516
              },
              "optional": false,
              "computed": true,
              "start": 510,
              "end": 517
            },
            "definite": false,
            "start": 505,
            "end": 517
          }
        ],
        "declare": false,
        "start": 499,
        "end": 518
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 492,
      "end": 518
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
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 532,
              "end": 534
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 541,
                  "end": 544
                },
                "typeArguments": null,
                "arguments": [],
                "start": 537,
                "end": 546
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null,
                "start": 547,
                "end": 549
              },
              "optional": false,
              "computed": true,
              "start": 537,
              "end": 550
            },
            "definite": false,
            "start": 532,
            "end": 550
          }
        ],
        "declare": false,
        "start": 526,
        "end": 551
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 519,
      "end": 551
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
              "name": "t5",
              "optional": false,
              "typeAnnotation": null,
              "start": 566,
              "end": 568
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 571,
                "end": 574
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 575,
                "end": 577
              },
              "optional": false,
              "computed": false,
              "start": 571,
              "end": 577
            },
            "definite": false,
            "start": 566,
            "end": 577
          }
        ],
        "declare": false,
        "start": 560,
        "end": 578
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 553,
      "end": 578
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
              "name": "t6",
              "optional": false,
              "typeAnnotation": null,
              "start": 592,
              "end": 594
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 601,
                  "end": 604
                },
                "typeArguments": null,
                "arguments": [],
                "start": 597,
                "end": 606
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 607,
                "end": 609
              },
              "optional": false,
              "computed": false,
              "start": 597,
              "end": 609
            },
            "definite": false,
            "start": 592,
            "end": 609
          }
        ],
        "declare": false,
        "start": 586,
        "end": 610
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 579,
      "end": 610
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
              "name": "t7",
              "optional": false,
              "typeAnnotation": null,
              "start": 625,
              "end": 627
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 630,
                "end": 633
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k3",
                "optional": false,
                "typeAnnotation": null,
                "start": 634,
                "end": 636
              },
              "optional": false,
              "computed": true,
              "start": 630,
              "end": 637
            },
            "definite": false,
            "start": 625,
            "end": 637
          }
        ],
        "declare": false,
        "start": 619,
        "end": 638
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 612,
      "end": 638
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
              "name": "t8",
              "optional": false,
              "typeAnnotation": null,
              "start": 652,
              "end": 654
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 661,
                  "end": 664
                },
                "typeArguments": null,
                "arguments": [],
                "start": 657,
                "end": 666
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k3",
                "optional": false,
                "typeAnnotation": null,
                "start": 667,
                "end": 669
              },
              "optional": false,
              "computed": true,
              "start": 657,
              "end": 670
            },
            "definite": false,
            "start": 652,
            "end": 670
          }
        ],
        "declare": false,
        "start": 646,
        "end": 671
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 639,
      "end": 671
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
              "name": "t9",
              "optional": false,
              "typeAnnotation": null,
              "start": 686,
              "end": 688
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 691,
                "end": 694
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k4",
                "optional": false,
                "typeAnnotation": null,
                "start": 695,
                "end": 697
              },
              "optional": false,
              "computed": true,
              "start": 691,
              "end": 698
            },
            "definite": false,
            "start": 686,
            "end": 698
          }
        ],
        "declare": false,
        "start": 680,
        "end": 699
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 673,
      "end": 699
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
              "name": "t10",
              "optional": false,
              "typeAnnotation": null,
              "start": 713,
              "end": 716
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 723,
                  "end": 726
                },
                "typeArguments": null,
                "arguments": [],
                "start": 719,
                "end": 728
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k4",
                "optional": false,
                "typeAnnotation": null,
                "start": 729,
                "end": 731
              },
              "optional": false,
              "computed": true,
              "start": 719,
              "end": 732
            },
            "definite": false,
            "start": 713,
            "end": 732
          }
        ],
        "declare": false,
        "start": 707,
        "end": 733
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 700,
      "end": 733
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
              "name": "t11",
              "optional": false,
              "typeAnnotation": null,
              "start": 748,
              "end": 751
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 754,
                "end": 757
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null,
                "start": 758,
                "end": 760
              },
              "optional": false,
              "computed": false,
              "start": 754,
              "end": 760
            },
            "definite": false,
            "start": 748,
            "end": 760
          }
        ],
        "declare": false,
        "start": 742,
        "end": 761
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 735,
      "end": 761
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
              "name": "t12",
              "optional": false,
              "typeAnnotation": null,
              "start": 775,
              "end": 778
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 785,
                  "end": 788
                },
                "typeArguments": null,
                "arguments": [],
                "start": 781,
                "end": 790
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null,
                "start": 791,
                "end": 793
              },
              "optional": false,
              "computed": false,
              "start": 781,
              "end": 793
            },
            "definite": false,
            "start": 775,
            "end": 793
          }
        ],
        "declare": false,
        "start": 769,
        "end": 794
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 762,
      "end": 794
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 794
}
```
