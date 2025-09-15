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
            "name": "ANY",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 37,
                "end": 40
              },
              "start": 35,
              "end": 40
            },
            "start": 32,
            "end": 40
          },
          "init": null,
          "definite": false,
          "start": 32,
          "end": 40
        }
      ],
      "declare": false,
      "start": 28,
      "end": 41
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
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 52,
                "end": 55
              },
              "start": 50,
              "end": 55
            },
            "start": 46,
            "end": 55
          },
          "init": null,
          "definite": false,
          "start": 46,
          "end": 55
        }
      ],
      "declare": false,
      "start": 42,
      "end": 56
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
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 67,
                  "end": 70
                },
                "start": 67,
                "end": 72
              },
              "start": 65,
              "end": 72
            },
            "start": 61,
            "end": 72
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 76,
                "end": 78
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 80,
                "end": 82
              }
            ],
            "start": 75,
            "end": 83
          },
          "definite": false,
          "start": 61,
          "end": 83
        }
      ],
      "declare": false,
      "start": 57,
      "end": 84
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 92
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 97
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 98,
                  "end": 99
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 96,
                "end": 99
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 101
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 102,
                  "end": 106
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 100,
                "end": 106
              }
            ],
            "start": 95,
            "end": 107
          },
          "definite": false,
          "start": 89,
          "end": 107
        }
      ],
      "declare": false,
      "start": 85,
      "end": 108
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
        "start": 115,
        "end": 116
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
              "start": 130,
              "end": 131
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 133,
                "end": 136
              },
              "start": 131,
              "end": 136
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
            "start": 123,
            "end": 137
          }
        ],
        "start": 117,
        "end": 139
      },
      "abstract": false,
      "declare": false,
      "start": 109,
      "end": 139
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 150,
        "end": 151
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
                        "type": "TSAnyKeyword",
                        "start": 172,
                        "end": 175
                      },
                      "start": 170,
                      "end": 175
                    },
                    "start": 169,
                    "end": 175
                  },
                  "init": null,
                  "definite": false,
                  "start": 169,
                  "end": 175
                }
              ],
              "declare": false,
              "start": 165,
              "end": 176
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 158,
            "end": 176
          }
        ],
        "start": 152,
        "end": 178
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 140,
      "end": 178
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
            "start": 183,
            "end": 187
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 194,
              "end": 195
            },
            "typeArguments": null,
            "arguments": [],
            "start": 190,
            "end": 197
          },
          "definite": false,
          "start": 183,
          "end": 197
        }
      ],
      "declare": false,
      "start": 179,
      "end": 198
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
            "start": 220,
            "end": 235
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null,
              "start": 240,
              "end": 243
            },
            "start": 238,
            "end": 243
          },
          "definite": false,
          "start": 220,
          "end": 243
        }
      ],
      "declare": false,
      "start": 216,
      "end": 244
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
            "start": 249,
            "end": 264
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 273
            },
            "start": 267,
            "end": 273
          },
          "definite": false,
          "start": 249,
          "end": 273
        }
      ],
      "declare": false,
      "start": 245,
      "end": 274
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
            "start": 280,
            "end": 295
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 302
            },
            "start": 298,
            "end": 304
          },
          "definite": false,
          "start": 280,
          "end": 304
        }
      ],
      "declare": false,
      "start": 276,
      "end": 305
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
            "start": 310,
            "end": 325
          },
          "init": {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 332
            },
            "start": 328,
            "end": 334
          },
          "definite": false,
          "start": 310,
          "end": 334
        }
      ],
      "declare": false,
      "start": 306,
      "end": 335
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
            "start": 356,
            "end": 371
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
                "name": "ANY2",
                "optional": false,
                "typeAnnotation": null,
                "start": 376,
                "end": 380
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 381,
                "end": 382
              },
              "optional": false,
              "computed": true,
              "start": 376,
              "end": 383
            },
            "start": 374,
            "end": 383
          },
          "definite": false,
          "start": 356,
          "end": 383
        }
      ],
      "declare": false,
      "start": 352,
      "end": 384
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
            "start": 389,
            "end": 404
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
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 412
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 413,
                "end": 414
              },
              "optional": false,
              "computed": false,
              "start": 409,
              "end": 414
            },
            "start": 407,
            "end": 414
          },
          "definite": false,
          "start": 389,
          "end": 414
        }
      ],
      "declare": false,
      "start": 385,
      "end": 415
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
            "start": 420,
            "end": 435
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
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 440,
                "end": 443
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 444,
                "end": 445
              },
              "optional": false,
              "computed": false,
              "start": 440,
              "end": 445
            },
            "start": 438,
            "end": 445
          },
          "definite": false,
          "start": 420,
          "end": 445
        }
      ],
      "declare": false,
      "start": 416,
      "end": 446
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
            "name": "ResultIsNumber8",
            "optional": false,
            "typeAnnotation": null,
            "start": 451,
            "end": 466
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
                "start": 471,
                "end": 475
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 476,
                "end": 477
              },
              "optional": false,
              "computed": false,
              "start": 471,
              "end": 477
            },
            "start": 469,
            "end": 477
          },
          "definite": false,
          "start": 451,
          "end": 477
        }
      ],
      "declare": false,
      "start": 447,
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
            "name": "ResultIsNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 483,
            "end": 497
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
                "start": 502,
                "end": 503
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 504,
                "end": 505
              },
              "optional": false,
              "computed": false,
              "start": 502,
              "end": 505
            },
            "start": 500,
            "end": 505
          },
          "definite": false,
          "start": 483,
          "end": 505
        }
      ],
      "declare": false,
      "start": 479,
      "end": 506
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
            "name": "ResultIsNumber9",
            "optional": false,
            "typeAnnotation": null,
            "start": 512,
            "end": 527
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
                "name": "ANY2",
                "optional": false,
                "typeAnnotation": null,
                "start": 530,
                "end": 534
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 535,
                "end": 536
              },
              "optional": false,
              "computed": true,
              "start": 530,
              "end": 537
            },
            "start": 530,
            "end": 539
          },
          "definite": false,
          "start": 512,
          "end": 539
        }
      ],
      "declare": false,
      "start": 508,
      "end": 540
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
            "name": "ResultIsNumber10",
            "optional": false,
            "typeAnnotation": null,
            "start": 545,
            "end": 561
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
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 564,
                "end": 567
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 568,
                "end": 569
              },
              "optional": false,
              "computed": false,
              "start": 564,
              "end": 569
            },
            "start": 564,
            "end": 571
          },
          "definite": false,
          "start": 545,
          "end": 571
        }
      ],
      "declare": false,
      "start": 541,
      "end": 572
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
            "name": "ResultIsNumber11",
            "optional": false,
            "typeAnnotation": null,
            "start": 577,
            "end": 593
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
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 596,
                "end": 599
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 600,
                "end": 601
              },
              "optional": false,
              "computed": false,
              "start": 596,
              "end": 601
            },
            "start": 596,
            "end": 603
          },
          "definite": false,
          "start": 577,
          "end": 603
        }
      ],
      "declare": false,
      "start": 573,
      "end": 604
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
            "name": "ResultIsNumber12",
            "optional": false,
            "typeAnnotation": null,
            "start": 609,
            "end": 625
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
                "start": 628,
                "end": 632
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 633,
                "end": 634
              },
              "optional": false,
              "computed": false,
              "start": 628,
              "end": 634
            },
            "start": 628,
            "end": 636
          },
          "definite": false,
          "start": 609,
          "end": 636
        }
      ],
      "declare": false,
      "start": 605,
      "end": 637
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
            "name": "ResultIsNumber13",
            "optional": false,
            "typeAnnotation": null,
            "start": 642,
            "end": 658
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
                "start": 661,
                "end": 662
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 663,
                "end": 664
              },
              "optional": false,
              "computed": false,
              "start": 661,
              "end": 664
            },
            "start": 661,
            "end": 666
          },
          "definite": false,
          "start": 642,
          "end": 666
        }
      ],
      "declare": false,
      "start": 638,
      "end": 667
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
          "name": "ANY",
          "optional": false,
          "typeAnnotation": null,
          "start": 699,
          "end": 702
        },
        "start": 697,
        "end": 702
      },
      "directive": null,
      "start": 697,
      "end": 703
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
          "name": "ANY1",
          "optional": false,
          "typeAnnotation": null,
          "start": 706,
          "end": 710
        },
        "start": 704,
        "end": 710
      },
      "directive": null,
      "start": 704,
      "end": 711
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
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null,
            "start": 714,
            "end": 718
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 719,
            "end": 720
          },
          "optional": false,
          "computed": true,
          "start": 714,
          "end": 721
        },
        "start": 712,
        "end": 721
      },
      "directive": null,
      "start": 712,
      "end": 722
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
              "type": "Identifier",
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null,
              "start": 725,
              "end": 728
            },
            "start": 723,
            "end": 728
          },
          {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null,
              "start": 732,
              "end": 736
            },
            "start": 730,
            "end": 736
          }
        ],
        "start": 723,
        "end": 736
      },
      "directive": null,
      "start": 723,
      "end": 737
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
            "start": 740,
            "end": 744
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 745,
            "end": 746
          },
          "optional": false,
          "computed": false,
          "start": 740,
          "end": 746
        },
        "start": 738,
        "end": 746
      },
      "directive": null,
      "start": 738,
      "end": 747
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
            "start": 750,
            "end": 751
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 752,
            "end": 753
          },
          "optional": false,
          "computed": false,
          "start": 750,
          "end": 753
        },
        "start": 748,
        "end": 753
      },
      "directive": null,
      "start": 748,
      "end": 754
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
          "name": "ANY",
          "optional": false,
          "typeAnnotation": null,
          "start": 756,
          "end": 759
        },
        "start": 756,
        "end": 761
      },
      "directive": null,
      "start": 756,
      "end": 762
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
          "name": "ANY1",
          "optional": false,
          "typeAnnotation": null,
          "start": 763,
          "end": 767
        },
        "start": 763,
        "end": 769
      },
      "directive": null,
      "start": 763,
      "end": 770
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
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null,
            "start": 771,
            "end": 775
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 776,
            "end": 777
          },
          "optional": false,
          "computed": true,
          "start": 771,
          "end": 778
        },
        "start": 771,
        "end": 780
      },
      "directive": null,
      "start": 771,
      "end": 781
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
              "type": "Identifier",
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null,
              "start": 782,
              "end": 785
            },
            "start": 782,
            "end": 787
          },
          {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": false,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null,
              "start": 789,
              "end": 793
            },
            "start": 789,
            "end": 795
          }
        ],
        "start": 782,
        "end": 795
      },
      "directive": null,
      "start": 782,
      "end": 796
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
            "start": 797,
            "end": 801
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 802,
            "end": 803
          },
          "optional": false,
          "computed": false,
          "start": 797,
          "end": 803
        },
        "start": 797,
        "end": 805
      },
      "directive": null,
      "start": 797,
      "end": 806
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
            "start": 807,
            "end": 808
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 809,
            "end": 810
          },
          "optional": false,
          "computed": false,
          "start": 807,
          "end": 810
        },
        "start": 807,
        "end": 812
      },
      "directive": null,
      "start": 807,
      "end": 813
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 28,
  "end": 813
}
```
