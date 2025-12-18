__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
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
        "start": 15,
        "end": 18
      },
      "expression": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 41
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 43,
                "end": 49
              },
              "start": 41,
              "end": 49
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 33,
            "end": 50
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 65
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
                "start": 68,
                "end": 71
              },
              "expression": false,
              "start": 65,
              "end": 71
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 55,
            "end": 71
          }
        ],
        "start": 27,
        "end": 73
      },
      "abstract": false,
      "declare": false,
      "start": 19,
      "end": 73
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 80
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 84
            },
            "initializer": null,
            "computed": false,
            "start": 83,
            "end": 84
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 87
            },
            "initializer": null,
            "computed": false,
            "start": 86,
            "end": 87
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 90
            },
            "initializer": null,
            "computed": false,
            "start": 89,
            "end": 90
          }
        ],
        "start": 81,
        "end": 92
      },
      "const": false,
      "declare": false,
      "start": 74,
      "end": 92
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 104
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 119
                  },
                  "init": null,
                  "definite": false,
                  "start": 118,
                  "end": 119
                }
              ],
              "declare": false,
              "start": 114,
              "end": 119
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 107,
            "end": 119
          }
        ],
        "start": 105,
        "end": 121
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 93,
      "end": 121
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 130,
                "end": 137
              },
              "start": 128,
              "end": 137
            },
            "start": 127,
            "end": 137
          },
          "init": null,
          "definite": false,
          "start": 127,
          "end": 137
        }
      ],
      "declare": false,
      "start": 123,
      "end": 138
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 146,
                "end": 152
              },
              "start": 144,
              "end": 152
            },
            "start": 143,
            "end": 152
          },
          "init": null,
          "definite": false,
          "start": 143,
          "end": 152
        }
      ],
      "declare": false,
      "start": 139,
      "end": 153
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 167
                },
                "typeArguments": null,
                "start": 161,
                "end": 167
              },
              "start": 159,
              "end": 167
            },
            "start": 158,
            "end": 167
          },
          "init": null,
          "definite": false,
          "start": 158,
          "end": 167
        }
      ],
      "declare": false,
      "start": 154,
      "end": 168
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 176,
                  "end": 182
                },
                "typeArguments": null,
                "start": 176,
                "end": 182
              },
              "start": 174,
              "end": 182
            },
            "start": 173,
            "end": 182
          },
          "init": null,
          "definite": false,
          "start": 173,
          "end": 182
        }
      ],
      "declare": false,
      "start": 169,
      "end": 183
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 235,
            "end": 237
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 240,
              "end": 241
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 245
            },
            "start": 240,
            "end": 245
          },
          "definite": false,
          "start": 235,
          "end": 245
        }
      ],
      "declare": false,
      "start": 231,
      "end": 246
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 251,
            "end": 253
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 256,
              "end": 257
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 260,
              "end": 261
            },
            "start": 256,
            "end": 261
          },
          "definite": false,
          "start": 251,
          "end": 261
        }
      ],
      "declare": false,
      "start": 247,
      "end": 262
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 269
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 273
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 277
            },
            "start": 272,
            "end": 277
          },
          "definite": false,
          "start": 267,
          "end": 277
        }
      ],
      "declare": false,
      "start": 263,
      "end": 278
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 329,
            "end": 331
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 334,
              "end": 335
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 339
            },
            "start": 334,
            "end": 339
          },
          "definite": false,
          "start": 329,
          "end": 339
        }
      ],
      "declare": false,
      "start": 325,
      "end": 340
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 345,
            "end": 347
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 350,
              "end": 351
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 355
            },
            "start": 350,
            "end": 355
          },
          "definite": false,
          "start": 345,
          "end": 355
        }
      ],
      "declare": false,
      "start": 341,
      "end": 356
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 389,
            "end": 391
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 394,
              "end": 395
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 399
            },
            "start": 394,
            "end": 399
          },
          "definite": false,
          "start": 389,
          "end": 399
        }
      ],
      "declare": false,
      "start": 385,
      "end": 400
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null,
            "start": 451,
            "end": 453
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 456,
              "end": 457
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 460,
              "end": 461
            },
            "start": 456,
            "end": 461
          },
          "definite": false,
          "start": 451,
          "end": 461
        }
      ],
      "declare": false,
      "start": 447,
      "end": 462
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null,
            "start": 467,
            "end": 469
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 473
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 476,
              "end": 477
            },
            "start": 472,
            "end": 477
          },
          "definite": false,
          "start": 467,
          "end": 477
        }
      ],
      "declare": false,
      "start": 463,
      "end": 478
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r9",
            "optional": false,
            "typeAnnotation": null,
            "start": 483,
            "end": 485
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 488,
              "end": 489
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 492,
              "end": 493
            },
            "start": 488,
            "end": 493
          },
          "definite": false,
          "start": 483,
          "end": 493
        }
      ],
      "declare": false,
      "start": 479,
      "end": 494
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r10",
            "optional": false,
            "typeAnnotation": null,
            "start": 515,
            "end": 518
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 521,
              "end": 522
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 525,
              "end": 529
            },
            "start": 521,
            "end": 529
          },
          "definite": false,
          "start": 515,
          "end": 529
        }
      ],
      "declare": false,
      "start": 511,
      "end": 530
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r11",
            "optional": false,
            "typeAnnotation": null,
            "start": 535,
            "end": 538
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 541,
              "end": 545
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 548,
              "end": 553
            },
            "start": 541,
            "end": 553
          },
          "definite": false,
          "start": 535,
          "end": 553
        }
      ],
      "declare": false,
      "start": 531,
      "end": 554
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r12",
            "optional": false,
            "typeAnnotation": null,
            "start": 559,
            "end": 562
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 565,
              "end": 569
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 572,
              "end": 575
            },
            "start": 565,
            "end": 575
          },
          "definite": false,
          "start": 559,
          "end": 575
        }
      ],
      "declare": false,
      "start": 555,
      "end": 576
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r13",
            "optional": false,
            "typeAnnotation": null,
            "start": 581,
            "end": 584
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 587,
              "end": 589
            },
            "operator": "+",
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 592,
              "end": 594
            },
            "start": 587,
            "end": 594
          },
          "definite": false,
          "start": 581,
          "end": 594
        }
      ],
      "declare": false,
      "start": 577,
      "end": 595
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r14",
            "optional": false,
            "typeAnnotation": null,
            "start": 600,
            "end": 603
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 606,
              "end": 607
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 610,
              "end": 611
            },
            "start": 606,
            "end": 611
          },
          "definite": false,
          "start": 600,
          "end": 611
        }
      ],
      "declare": false,
      "start": 596,
      "end": 612
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r15",
            "optional": false,
            "typeAnnotation": null,
            "start": 617,
            "end": 620
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 623,
              "end": 624
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 627,
              "end": 630
            },
            "start": 623,
            "end": 630
          },
          "definite": false,
          "start": 617,
          "end": 630
        }
      ],
      "declare": false,
      "start": 613,
      "end": 631
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r16",
            "optional": false,
            "typeAnnotation": null,
            "start": 636,
            "end": 639
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 642,
              "end": 643
            },
            "operator": "+",
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 646,
                "end": 649
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 646,
              "end": 651
            },
            "start": 642,
            "end": 651
          },
          "definite": false,
          "start": 636,
          "end": 651
        }
      ],
      "declare": false,
      "start": 632,
      "end": 652
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r17",
            "optional": false,
            "typeAnnotation": null,
            "start": 657,
            "end": 660
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 663,
              "end": 664
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 667,
              "end": 668
            },
            "start": 663,
            "end": 668
          },
          "definite": false,
          "start": 657,
          "end": 668
        }
      ],
      "declare": false,
      "start": 653,
      "end": 669
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r18",
            "optional": false,
            "typeAnnotation": null,
            "start": 674,
            "end": 677
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 680,
                "end": 681
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 682,
                "end": 683
              },
              "optional": false,
              "computed": false,
              "start": 680,
              "end": 683
            },
            "operator": "+",
            "right": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 690,
                "end": 691
              },
              "typeArguments": null,
              "arguments": [],
              "start": 686,
              "end": 693
            },
            "start": 680,
            "end": 693
          },
          "definite": false,
          "start": 674,
          "end": 693
        }
      ],
      "declare": false,
      "start": 670,
      "end": 694
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r19",
            "optional": false,
            "typeAnnotation": null,
            "start": 699,
            "end": 702
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 705,
                "end": 706
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 707,
                "end": 708
              },
              "optional": false,
              "computed": false,
              "start": 705,
              "end": 708
            },
            "operator": "+",
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 711,
                  "end": 712
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 713,
                  "end": 716
                },
                "optional": false,
                "computed": false,
                "start": 711,
                "end": 716
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 711,
              "end": 718
            },
            "start": 705,
            "end": 718
          },
          "definite": false,
          "start": 699,
          "end": 718
        }
      ],
      "declare": false,
      "start": 695,
      "end": 719
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r20",
            "optional": false,
            "typeAnnotation": null,
            "start": 724,
            "end": 727
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 730,
                "end": 731
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 732,
                "end": 733
              },
              "optional": false,
              "computed": false,
              "start": 730,
              "end": 733
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 736,
              "end": 737
            },
            "start": 730,
            "end": 737
          },
          "definite": false,
          "start": 724,
          "end": 737
        }
      ],
      "declare": false,
      "start": 720,
      "end": 738
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 738
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 17,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 33,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 55,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 62,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 74,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 93,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 107,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 114,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 123,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 130,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 139,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 146,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 154,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 161,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 169,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 176,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 231,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 235,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 247,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 251,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 263,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 267,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 325,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 329,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 341,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 345,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 385,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 389,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 447,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 451,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 463,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 467,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 477,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 479,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 483,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 493,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 511,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 515,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 523,
    "end": 524
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 525,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 531,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 535,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 539,
    "end": 540
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 541,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 546,
    "end": 547
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 548,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 555,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 559,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 563,
    "end": 564
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 565,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 570,
    "end": 571
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 572,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 577,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "r13",
    "start": 581,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 594,
    "end": 595
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 596,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "r14",
    "start": 600,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 611,
    "end": 612
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 613,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "r15",
    "start": 617,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 627,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 630,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 632,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "r16",
    "start": 636,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 646,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 651,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 653,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "r17",
    "start": 657,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 668,
    "end": 669
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 670,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "r18",
    "start": 674,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 684,
    "end": 685
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 686,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 693,
    "end": 694
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 695,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "r19",
    "start": 699,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 713,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 718,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 720,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "r20",
    "start": 724,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 737,
    "end": 738
  }
]
```
