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
        "start": 127,
        "end": 128
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
                        "start": 149,
                        "end": 155
                      },
                      "start": 147,
                      "end": 155
                    },
                    "start": 146,
                    "end": 155
                  },
                  "init": null,
                  "definite": false,
                  "start": 146,
                  "end": 155
                }
              ],
              "declare": false,
              "start": 142,
              "end": 156
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 135,
            "end": 156
          }
        ],
        "start": 129,
        "end": 158
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 117,
      "end": 158
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
            "start": 164,
            "end": 168
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 176
            },
            "typeArguments": null,
            "arguments": [],
            "start": 171,
            "end": 178
          },
          "definite": false,
          "start": 164,
          "end": 178
        }
      ],
      "declare": false,
      "start": 160,
      "end": 179
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
            "start": 204,
            "end": 219
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 230
            },
            "start": 222,
            "end": 230
          },
          "definite": false,
          "start": 204,
          "end": 230
        }
      ],
      "declare": false,
      "start": 200,
      "end": 231
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
            "start": 237,
            "end": 252
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null,
              "start": 255,
              "end": 261
            },
            "start": 255,
            "end": 263
          },
          "definite": false,
          "start": 237,
          "end": 263
        }
      ],
      "declare": false,
      "start": 233,
      "end": 264
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
            "start": 285,
            "end": 300
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 305,
                "end": 309
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 310,
                "end": 311
              },
              "optional": false,
              "computed": false,
              "start": 305,
              "end": 311
            },
            "start": 303,
            "end": 311
          },
          "definite": false,
          "start": 285,
          "end": 311
        }
      ],
      "declare": false,
      "start": 281,
      "end": 312
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
            "start": 317,
            "end": 332
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 337,
                "end": 338
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 339,
                "end": 340
              },
              "optional": false,
              "computed": false,
              "start": 337,
              "end": 340
            },
            "start": 335,
            "end": 340
          },
          "definite": false,
          "start": 317,
          "end": 340
        }
      ],
      "declare": false,
      "start": 313,
      "end": 341
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
            "start": 347,
            "end": 362
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 365,
                "end": 369
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 370,
                "end": 371
              },
              "optional": false,
              "computed": false,
              "start": 365,
              "end": 371
            },
            "start": 365,
            "end": 373
          },
          "definite": false,
          "start": 347,
          "end": 373
        }
      ],
      "declare": false,
      "start": 343,
      "end": 374
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
            "start": 379,
            "end": 394
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 397,
                "end": 398
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 399,
                "end": 400
              },
              "optional": false,
              "computed": false,
              "start": 397,
              "end": 400
            },
            "start": 397,
            "end": 402
          },
          "definite": false,
          "start": 379,
          "end": 402
        }
      ],
      "declare": false,
      "start": 375,
      "end": 403
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
            "start": 408,
            "end": 423
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER1",
                "optional": false,
                "typeAnnotation": null,
                "start": 426,
                "end": 433
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 434,
                "end": 435
              },
              "optional": false,
              "computed": true,
              "start": 426,
              "end": 436
            },
            "start": 426,
            "end": 438
          },
          "definite": false,
          "start": 408,
          "end": 438
        }
      ],
      "declare": false,
      "start": 404,
      "end": 439
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "NUMBER",
          "optional": false,
          "typeAnnotation": null,
          "start": 472,
          "end": 478
        },
        "start": 470,
        "end": 478
      },
      "directive": null,
      "start": 470,
      "end": 479
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "NUMBER1",
            "optional": false,
            "typeAnnotation": null,
            "start": 483,
            "end": 490
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 491,
            "end": 492
          },
          "optional": false,
          "computed": true,
          "start": 483,
          "end": 493
        },
        "start": 481,
        "end": 493
      },
      "directive": null,
      "start": 481,
      "end": 494
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 497,
            "end": 501
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 502,
            "end": 503
          },
          "optional": false,
          "computed": false,
          "start": 497,
          "end": 503
        },
        "start": 495,
        "end": 503
      },
      "directive": null,
      "start": 495,
      "end": 504
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 507,
            "end": 508
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 509,
            "end": 510
          },
          "optional": false,
          "computed": false,
          "start": 507,
          "end": 510
        },
        "start": 505,
        "end": 510
      },
      "directive": null,
      "start": 505,
      "end": 511
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 514,
                "end": 518
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 519,
                "end": 520
              },
              "optional": false,
              "computed": false,
              "start": 514,
              "end": 520
            },
            "start": 512,
            "end": 520
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 522,
              "end": 523
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 524,
              "end": 525
            },
            "optional": false,
            "computed": false,
            "start": 522,
            "end": 525
          }
        ],
        "start": 512,
        "end": 525
      },
      "directive": null,
      "start": 512,
      "end": 526
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "NUMBER",
          "optional": false,
          "typeAnnotation": null,
          "start": 528,
          "end": 534
        },
        "start": 528,
        "end": 536
      },
      "directive": null,
      "start": 528,
      "end": 537
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "NUMBER1",
            "optional": false,
            "typeAnnotation": null,
            "start": 538,
            "end": 545
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 546,
            "end": 547
          },
          "optional": false,
          "computed": true,
          "start": 538,
          "end": 548
        },
        "start": 538,
        "end": 550
      },
      "directive": null,
      "start": 538,
      "end": 551
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 552,
            "end": 556
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 557,
            "end": 558
          },
          "optional": false,
          "computed": false,
          "start": 552,
          "end": 558
        },
        "start": 552,
        "end": 560
      },
      "directive": null,
      "start": 552,
      "end": 561
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 562,
            "end": 563
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 564,
            "end": 565
          },
          "optional": false,
          "computed": false,
          "start": 562,
          "end": 565
        },
        "start": 562,
        "end": 567
      },
      "directive": null,
      "start": 562,
      "end": 568
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 569,
                "end": 573
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 574,
                "end": 575
              },
              "optional": false,
              "computed": false,
              "start": 569,
              "end": 575
            },
            "start": 569,
            "end": 577
          },
          {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 579,
                "end": 580
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 581,
                "end": 582
              },
              "optional": false,
              "computed": false,
              "start": 579,
              "end": 582
            },
            "start": 579,
            "end": 584
          }
        ],
        "start": 569,
        "end": 584
      },
      "directive": null,
      "start": 569,
      "end": 585
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 30,
  "end": 585
}
```
