__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 42,
                "end": 48
              },
              "start": 40,
              "end": 48
            },
            "start": 34,
            "end": 48
          },
          "init": null,
          "definite": false,
          "start": 34,
          "end": 48
        }
      ],
      "declare": false,
      "start": 30,
      "end": 49
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
            "name": "NUMBER1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 63,
                  "end": 69
                },
                "start": 63,
                "end": 71
              },
              "start": 61,
              "end": 71
            },
            "start": 54,
            "end": 71
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 75,
                "end": 76
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 78,
                "end": 79
              }
            ],
            "start": 74,
            "end": 80
          },
          "definite": false,
          "start": 54,
          "end": 80
        }
      ],
      "declare": false,
      "start": 50,
      "end": 81
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 90
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
              "start": 104,
              "end": 105
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 107,
                "end": 113
              },
              "start": 105,
              "end": 113
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
            "start": 97,
            "end": 114
          }
        ],
        "start": 91,
        "end": 116
      },
      "abstract": false,
      "declare": false,
      "start": 83,
      "end": 116
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 125
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
                    "name": "n",
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
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 132,
            "end": 153
          }
        ],
        "start": 126,
        "end": 155
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 117,
      "end": 155
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
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 161,
            "end": 165
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 173
            },
            "typeArguments": null,
            "arguments": [],
            "start": 168,
            "end": 175
          },
          "definite": false,
          "start": 161,
          "end": 175
        }
      ],
      "declare": false,
      "start": 157,
      "end": 176
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
            "name": "ResultIsNumber1",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 216
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 227
            },
            "start": 219,
            "end": 227
          },
          "definite": false,
          "start": 201,
          "end": 227
        }
      ],
      "declare": false,
      "start": 197,
      "end": 228
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
            "name": "ResultIsNumber2",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 249
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 258
            },
            "start": 252,
            "end": 260
          },
          "definite": false,
          "start": 234,
          "end": 260
        }
      ],
      "declare": false,
      "start": 230,
      "end": 261
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
            "name": "ResultIsNumber3",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 297
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 302,
                "end": 306
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 307,
                "end": 308
              },
              "optional": false,
              "computed": false,
              "start": 302,
              "end": 308
            },
            "start": 300,
            "end": 308
          },
          "definite": false,
          "start": 282,
          "end": 308
        }
      ],
      "declare": false,
      "start": 278,
      "end": 309
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
            "name": "ResultIsNumber4",
            "optional": false,
            "typeAnnotation": null,
            "start": 314,
            "end": 329
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 334,
                "end": 335
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 336,
                "end": 337
              },
              "optional": false,
              "computed": false,
              "start": 334,
              "end": 337
            },
            "start": 332,
            "end": 337
          },
          "definite": false,
          "start": 314,
          "end": 337
        }
      ],
      "declare": false,
      "start": 310,
      "end": 338
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
            "name": "ResultIsNumber5",
            "optional": false,
            "typeAnnotation": null,
            "start": 344,
            "end": 359
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 362,
                "end": 366
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 367,
                "end": 368
              },
              "optional": false,
              "computed": false,
              "start": 362,
              "end": 368
            },
            "start": 362,
            "end": 370
          },
          "definite": false,
          "start": 344,
          "end": 370
        }
      ],
      "declare": false,
      "start": 340,
      "end": 371
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
            "name": "ResultIsNumber6",
            "optional": false,
            "typeAnnotation": null,
            "start": 376,
            "end": 391
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 394,
                "end": 395
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 396,
                "end": 397
              },
              "optional": false,
              "computed": false,
              "start": 394,
              "end": 397
            },
            "start": 394,
            "end": 399
          },
          "definite": false,
          "start": 376,
          "end": 399
        }
      ],
      "declare": false,
      "start": 372,
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
            "name": "ResultIsNumber7",
            "optional": false,
            "typeAnnotation": null,
            "start": 405,
            "end": 420
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER1",
                "optional": false,
                "typeAnnotation": null,
                "start": 423,
                "end": 430
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 431,
                "end": 432
              },
              "optional": false,
              "computed": true,
              "start": 423,
              "end": 433
            },
            "start": 423,
            "end": 435
          },
          "definite": false,
          "start": 405,
          "end": 435
        }
      ],
      "declare": false,
      "start": 401,
      "end": 436
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "NUMBER",
          "optional": false,
          "typeAnnotation": null,
          "start": 469,
          "end": 475
        },
        "start": 467,
        "end": 475
      },
      "directive": null,
      "start": 467,
      "end": 476
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "NUMBER1",
            "optional": false,
            "typeAnnotation": null,
            "start": 480,
            "end": 487
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 488,
            "end": 489
          },
          "optional": false,
          "computed": true,
          "start": 480,
          "end": 490
        },
        "start": 478,
        "end": 490
      },
      "directive": null,
      "start": 478,
      "end": 491
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 494,
            "end": 498
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 499,
            "end": 500
          },
          "optional": false,
          "computed": false,
          "start": 494,
          "end": 500
        },
        "start": 492,
        "end": 500
      },
      "directive": null,
      "start": 492,
      "end": 501
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 504,
            "end": 505
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 506,
            "end": 507
          },
          "optional": false,
          "computed": false,
          "start": 504,
          "end": 507
        },
        "start": 502,
        "end": 507
      },
      "directive": null,
      "start": 502,
      "end": 508
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 511,
                "end": 515
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 516,
                "end": 517
              },
              "optional": false,
              "computed": false,
              "start": 511,
              "end": 517
            },
            "start": 509,
            "end": 517
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 520
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 521,
              "end": 522
            },
            "optional": false,
            "computed": false,
            "start": 519,
            "end": 522
          }
        ],
        "start": 509,
        "end": 522
      },
      "directive": null,
      "start": 509,
      "end": 523
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "NUMBER",
          "optional": false,
          "typeAnnotation": null,
          "start": 525,
          "end": 531
        },
        "start": 525,
        "end": 533
      },
      "directive": null,
      "start": 525,
      "end": 534
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "NUMBER1",
            "optional": false,
            "typeAnnotation": null,
            "start": 535,
            "end": 542
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 543,
            "end": 544
          },
          "optional": false,
          "computed": true,
          "start": 535,
          "end": 545
        },
        "start": 535,
        "end": 547
      },
      "directive": null,
      "start": 535,
      "end": 548
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 549,
            "end": 553
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 554,
            "end": 555
          },
          "optional": false,
          "computed": false,
          "start": 549,
          "end": 555
        },
        "start": 549,
        "end": 557
      },
      "directive": null,
      "start": 549,
      "end": 558
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 559,
            "end": 560
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 561,
            "end": 562
          },
          "optional": false,
          "computed": false,
          "start": 559,
          "end": 562
        },
        "start": 559,
        "end": 564
      },
      "directive": null,
      "start": 559,
      "end": 565
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 566,
                "end": 570
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 571,
                "end": 572
              },
              "optional": false,
              "computed": false,
              "start": 566,
              "end": 572
            },
            "start": 566,
            "end": 574
          },
          {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 576,
                "end": 577
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 578,
                "end": 579
              },
              "optional": false,
              "computed": false,
              "start": 576,
              "end": 579
            },
            "start": 576,
            "end": 581
          }
        ],
        "start": 566,
        "end": 581
      },
      "directive": null,
      "start": 566,
      "end": 582
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 30,
  "end": 582
}
```
