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
        "start": 147,
        "end": 148
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
                        "start": 169,
                        "end": 172
                      },
                      "start": 167,
                      "end": 172
                    },
                    "start": 166,
                    "end": 172
                  },
                  "init": null,
                  "definite": false,
                  "start": 166,
                  "end": 172
                }
              ],
              "declare": false,
              "start": 162,
              "end": 173
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 155,
            "end": 173
          }
        ],
        "start": 149,
        "end": 175
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 140,
      "end": 175
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
            "start": 180,
            "end": 184
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 192
            },
            "typeArguments": null,
            "arguments": [],
            "start": 187,
            "end": 194
          },
          "definite": false,
          "start": 180,
          "end": 194
        }
      ],
      "declare": false,
      "start": 176,
      "end": 195
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
            "start": 217,
            "end": 232
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
              "start": 237,
              "end": 240
            },
            "start": 235,
            "end": 240
          },
          "definite": false,
          "start": 217,
          "end": 240
        }
      ],
      "declare": false,
      "start": 213,
      "end": 241
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
            "start": 246,
            "end": 261
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
              "start": 266,
              "end": 270
            },
            "start": 264,
            "end": 270
          },
          "definite": false,
          "start": 246,
          "end": 270
        }
      ],
      "declare": false,
      "start": 242,
      "end": 271
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
            "start": 277,
            "end": 292
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
              "start": 295,
              "end": 299
            },
            "start": 295,
            "end": 301
          },
          "definite": false,
          "start": 277,
          "end": 301
        }
      ],
      "declare": false,
      "start": 273,
      "end": 302
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
            "start": 307,
            "end": 322
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
              "start": 325,
              "end": 329
            },
            "start": 325,
            "end": 331
          },
          "definite": false,
          "start": 307,
          "end": 331
        }
      ],
      "declare": false,
      "start": 303,
      "end": 332
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
            "start": 353,
            "end": 368
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
                "start": 373,
                "end": 377
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 378,
                "end": 379
              },
              "optional": false,
              "computed": true,
              "start": 373,
              "end": 380
            },
            "start": 371,
            "end": 380
          },
          "definite": false,
          "start": 353,
          "end": 380
        }
      ],
      "declare": false,
      "start": 349,
      "end": 381
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
            "start": 386,
            "end": 401
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
                "start": 406,
                "end": 409
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 410,
                "end": 411
              },
              "optional": false,
              "computed": false,
              "start": 406,
              "end": 411
            },
            "start": 404,
            "end": 411
          },
          "definite": false,
          "start": 386,
          "end": 411
        }
      ],
      "declare": false,
      "start": 382,
      "end": 412
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
            "start": 417,
            "end": 432
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
                "start": 437,
                "end": 440
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 441,
                "end": 442
              },
              "optional": false,
              "computed": false,
              "start": 437,
              "end": 442
            },
            "start": 435,
            "end": 442
          },
          "definite": false,
          "start": 417,
          "end": 442
        }
      ],
      "declare": false,
      "start": 413,
      "end": 443
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
            "start": 448,
            "end": 463
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
                "start": 468,
                "end": 472
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 473,
                "end": 474
              },
              "optional": false,
              "computed": false,
              "start": 468,
              "end": 474
            },
            "start": 466,
            "end": 474
          },
          "definite": false,
          "start": 448,
          "end": 474
        }
      ],
      "declare": false,
      "start": 444,
      "end": 475
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
            "start": 480,
            "end": 494
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
                "start": 499,
                "end": 500
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 501,
                "end": 502
              },
              "optional": false,
              "computed": false,
              "start": 499,
              "end": 502
            },
            "start": 497,
            "end": 502
          },
          "definite": false,
          "start": 480,
          "end": 502
        }
      ],
      "declare": false,
      "start": 476,
      "end": 503
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
            "start": 509,
            "end": 524
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
                "start": 527,
                "end": 531
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 532,
                "end": 533
              },
              "optional": false,
              "computed": true,
              "start": 527,
              "end": 534
            },
            "start": 527,
            "end": 536
          },
          "definite": false,
          "start": 509,
          "end": 536
        }
      ],
      "declare": false,
      "start": 505,
      "end": 537
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
            "start": 542,
            "end": 558
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
                "start": 561,
                "end": 564
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 565,
                "end": 566
              },
              "optional": false,
              "computed": false,
              "start": 561,
              "end": 566
            },
            "start": 561,
            "end": 568
          },
          "definite": false,
          "start": 542,
          "end": 568
        }
      ],
      "declare": false,
      "start": 538,
      "end": 569
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
            "start": 574,
            "end": 590
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
                "start": 593,
                "end": 596
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 597,
                "end": 598
              },
              "optional": false,
              "computed": false,
              "start": 593,
              "end": 598
            },
            "start": 593,
            "end": 600
          },
          "definite": false,
          "start": 574,
          "end": 600
        }
      ],
      "declare": false,
      "start": 570,
      "end": 601
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
            "start": 606,
            "end": 622
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
                "start": 625,
                "end": 629
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 630,
                "end": 631
              },
              "optional": false,
              "computed": false,
              "start": 625,
              "end": 631
            },
            "start": 625,
            "end": 633
          },
          "definite": false,
          "start": 606,
          "end": 633
        }
      ],
      "declare": false,
      "start": 602,
      "end": 634
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
            "start": 639,
            "end": 655
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
                "start": 658,
                "end": 659
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 660,
                "end": 661
              },
              "optional": false,
              "computed": false,
              "start": 658,
              "end": 661
            },
            "start": 658,
            "end": 663
          },
          "definite": false,
          "start": 639,
          "end": 663
        }
      ],
      "declare": false,
      "start": 635,
      "end": 664
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
          "start": 696,
          "end": 699
        },
        "start": 694,
        "end": 699
      },
      "directive": null,
      "start": 694,
      "end": 700
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
          "start": 703,
          "end": 707
        },
        "start": 701,
        "end": 707
      },
      "directive": null,
      "start": 701,
      "end": 708
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
            "start": 711,
            "end": 715
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 716,
            "end": 717
          },
          "optional": false,
          "computed": true,
          "start": 711,
          "end": 718
        },
        "start": 709,
        "end": 718
      },
      "directive": null,
      "start": 709,
      "end": 719
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
              "start": 722,
              "end": 725
            },
            "start": 720,
            "end": 725
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
              "start": 729,
              "end": 733
            },
            "start": 727,
            "end": 733
          }
        ],
        "start": 720,
        "end": 733
      },
      "directive": null,
      "start": 720,
      "end": 734
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
            "start": 737,
            "end": 741
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 742,
            "end": 743
          },
          "optional": false,
          "computed": false,
          "start": 737,
          "end": 743
        },
        "start": 735,
        "end": 743
      },
      "directive": null,
      "start": 735,
      "end": 744
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
            "start": 747,
            "end": 748
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 749,
            "end": 750
          },
          "optional": false,
          "computed": false,
          "start": 747,
          "end": 750
        },
        "start": 745,
        "end": 750
      },
      "directive": null,
      "start": 745,
      "end": 751
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
          "start": 753,
          "end": 756
        },
        "start": 753,
        "end": 758
      },
      "directive": null,
      "start": 753,
      "end": 759
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
          "start": 760,
          "end": 764
        },
        "start": 760,
        "end": 766
      },
      "directive": null,
      "start": 760,
      "end": 767
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
            "start": 768,
            "end": 772
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 773,
            "end": 774
          },
          "optional": false,
          "computed": true,
          "start": 768,
          "end": 775
        },
        "start": 768,
        "end": 777
      },
      "directive": null,
      "start": 768,
      "end": 778
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
              "start": 779,
              "end": 782
            },
            "start": 779,
            "end": 784
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
              "start": 786,
              "end": 790
            },
            "start": 786,
            "end": 792
          }
        ],
        "start": 779,
        "end": 792
      },
      "directive": null,
      "start": 779,
      "end": 793
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
            "start": 794,
            "end": 798
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 799,
            "end": 800
          },
          "optional": false,
          "computed": false,
          "start": 794,
          "end": 800
        },
        "start": 794,
        "end": 802
      },
      "directive": null,
      "start": 794,
      "end": 803
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
            "start": 804,
            "end": 805
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 806,
            "end": 807
          },
          "optional": false,
          "computed": false,
          "start": 804,
          "end": 807
        },
        "start": 804,
        "end": 809
      },
      "directive": null,
      "start": 804,
      "end": 810
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 28,
  "end": 810
}
```
