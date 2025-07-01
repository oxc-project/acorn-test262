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
                "start": 36,
                "end": 39
              },
              "start": 34,
              "end": 39
            },
            "start": 31,
            "end": 39
          },
          "init": null,
          "definite": false,
          "start": 31,
          "end": 39
        }
      ],
      "declare": false,
      "start": 27,
      "end": 40
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
            "typeAnnotation": null,
            "start": 45,
            "end": 49
          },
          "init": null,
          "definite": false,
          "start": 45,
          "end": 49
        }
      ],
      "declare": false,
      "start": 41,
      "end": 50
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
                  "start": 61,
                  "end": 64
                },
                "start": 61,
                "end": 66
              },
              "start": 59,
              "end": 66
            },
            "start": 55,
            "end": 66
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 70,
                "end": 72
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 74,
                "end": 76
              }
            ],
            "start": 69,
            "end": 77
          },
          "definite": false,
          "start": 55,
          "end": 77
        }
      ],
      "declare": false,
      "start": 51,
      "end": 78
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 94,
                    "end": 96
                  },
                  "start": 91,
                  "end": 96
                },
                "start": 88,
                "end": 96
              },
              "start": 86,
              "end": 96
            },
            "start": 83,
            "end": 96
          },
          "init": null,
          "definite": false,
          "start": 83,
          "end": 96
        }
      ],
      "declare": false,
      "start": 79,
      "end": 96
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 105
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
                  "start": 110,
                  "end": 111
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 112,
                  "end": 114
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 110,
                "end": 114
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
                  "start": 116,
                  "end": 117
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 125,
                    "end": 128
                  },
                  "id": null,
                  "generator": false,
                  "start": 119,
                  "end": 128
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 116,
                "end": 128
              }
            ],
            "start": 108,
            "end": 129
          },
          "definite": false,
          "start": 101,
          "end": 129
        }
      ],
      "declare": false,
      "start": 97,
      "end": 130
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 144
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 148,
          "end": 151
        },
        "start": 146,
        "end": 151
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 162,
                  "end": 163
                },
                "init": null,
                "definite": false,
                "start": 162,
                "end": 163
              }
            ],
            "declare": false,
            "start": 158,
            "end": 164
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 177
            },
            "start": 169,
            "end": 178
          }
        ],
        "start": 152,
        "end": 180
      },
      "expression": false,
      "start": 132,
      "end": 180
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
        "start": 187,
        "end": 188
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
              "start": 202,
              "end": 203
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 205,
                "end": 208
              },
              "start": 203,
              "end": 208
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
            "start": 195,
            "end": 209
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
              "start": 221,
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
                          "start": 241,
                          "end": 242
                        },
                        "init": null,
                        "definite": false,
                        "start": 241,
                        "end": 242
                      }
                    ],
                    "declare": false,
                    "start": 237,
                    "end": 243
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 259,
                      "end": 260
                    },
                    "start": 252,
                    "end": 261
                  }
                ],
                "start": 227,
                "end": 267
              },
              "expression": false,
              "start": 224,
              "end": 267
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 214,
            "end": 267
          }
        ],
        "start": 189,
        "end": 269
      },
      "abstract": false,
      "declare": false,
      "start": 181,
      "end": 269
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 277,
        "end": 278
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
                        "start": 299,
                        "end": 302
                      },
                      "start": 297,
                      "end": 302
                    },
                    "start": 296,
                    "end": 302
                  },
                  "init": null,
                  "definite": false,
                  "start": 296,
                  "end": 302
                }
              ],
              "declare": false,
              "start": 292,
              "end": 303
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 285,
            "end": 303
          }
        ],
        "start": 279,
        "end": 305
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 270,
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
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 310,
            "end": 314
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 321,
              "end": 322
            },
            "typeArguments": null,
            "arguments": [],
            "start": 317,
            "end": 324
          },
          "definite": false,
          "start": 310,
          "end": 324
        }
      ],
      "declare": false,
      "start": 306,
      "end": 325
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
            "start": 353,
            "end": 367
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null,
              "start": 371,
              "end": 375
            },
            "prefix": true,
            "start": 370,
            "end": 375
          },
          "definite": false,
          "start": 353,
          "end": 375
        }
      ],
      "declare": false,
      "start": 349,
      "end": 376
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
            "start": 381,
            "end": 396
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY2",
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 404
            },
            "prefix": true,
            "start": 399,
            "end": 404
          },
          "definite": false,
          "start": 381,
          "end": 404
        }
      ],
      "declare": false,
      "start": 377,
      "end": 405
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
            "start": 410,
            "end": 425
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 429,
              "end": 430
            },
            "prefix": true,
            "start": 428,
            "end": 430
          },
          "definite": false,
          "start": 410,
          "end": 430
        }
      ],
      "declare": false,
      "start": 406,
      "end": 431
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
            "start": 436,
            "end": 451
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 455,
              "end": 456
            },
            "prefix": true,
            "start": 454,
            "end": 456
          },
          "definite": false,
          "start": 436,
          "end": 456
        }
      ],
      "declare": false,
      "start": 432,
      "end": 457
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
            "start": 462,
            "end": 477
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 481,
              "end": 484
            },
            "prefix": true,
            "start": 480,
            "end": 484
          },
          "definite": false,
          "start": 462,
          "end": 484
        }
      ],
      "declare": false,
      "start": 458,
      "end": 485
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
            "start": 490,
            "end": 505
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 513
            },
            "prefix": true,
            "start": 508,
            "end": 513
          },
          "definite": false,
          "start": 490,
          "end": 513
        }
      ],
      "declare": false,
      "start": 486,
      "end": 514
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
            "start": 540,
            "end": 555
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 559,
              "end": 568
            },
            "prefix": true,
            "start": 558,
            "end": 568
          },
          "definite": false,
          "start": 540,
          "end": 568
        }
      ],
      "declare": false,
      "start": 536,
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
            "name": "ResultIsNumber7",
            "optional": false,
            "typeAnnotation": null,
            "start": 574,
            "end": 589
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 593,
              "end": 597
            },
            "prefix": true,
            "start": 592,
            "end": 597
          },
          "definite": false,
          "start": 574,
          "end": 597
        }
      ],
      "declare": false,
      "start": 570,
      "end": 598
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
            "start": 628,
            "end": 643
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY2",
                "optional": false,
                "typeAnnotation": null,
                "start": 647,
                "end": 651
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 652,
                "end": 653
              },
              "optional": false,
              "computed": true,
              "start": 647,
              "end": 654
            },
            "prefix": true,
            "start": 646,
            "end": 654
          },
          "definite": false,
          "start": 628,
          "end": 654
        }
      ],
      "declare": false,
      "start": 624,
      "end": 654
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
            "start": 659,
            "end": 674
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 678,
                "end": 682
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 683,
                "end": 684
              },
              "optional": false,
              "computed": false,
              "start": 678,
              "end": 684
            },
            "prefix": true,
            "start": 677,
            "end": 684
          },
          "definite": false,
          "start": 659,
          "end": 684
        }
      ],
      "declare": false,
      "start": 655,
      "end": 685
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
            "start": 690,
            "end": 706
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 710,
                "end": 714
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 715,
                "end": 716
              },
              "optional": false,
              "computed": false,
              "start": 710,
              "end": 716
            },
            "prefix": true,
            "start": 709,
            "end": 716
          },
          "definite": false,
          "start": 690,
          "end": 716
        }
      ],
      "declare": false,
      "start": 686,
      "end": 717
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
            "start": 722,
            "end": 738
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 742,
                "end": 746
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 747,
                "end": 748
              },
              "optional": false,
              "computed": false,
              "start": 742,
              "end": 748
            },
            "prefix": true,
            "start": 741,
            "end": 748
          },
          "definite": false,
          "start": 722,
          "end": 748
        }
      ],
      "declare": false,
      "start": 718,
      "end": 749
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
            "start": 754,
            "end": 770
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 774,
                "end": 775
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 776,
                "end": 777
              },
              "optional": false,
              "computed": false,
              "start": 774,
              "end": 777
            },
            "prefix": true,
            "start": 773,
            "end": 777
          },
          "definite": false,
          "start": 754,
          "end": 777
        }
      ],
      "declare": false,
      "start": 750,
      "end": 778
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
            "start": 783,
            "end": 799
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 803,
                "end": 806
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 803,
              "end": 808
            },
            "prefix": true,
            "start": 802,
            "end": 808
          },
          "definite": false,
          "start": 783,
          "end": 808
        }
      ],
      "declare": false,
      "start": 779,
      "end": 809
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
            "name": "ResultIsNumber14",
            "optional": false,
            "typeAnnotation": null,
            "start": 814,
            "end": 830
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 834,
                  "end": 835
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 836,
                  "end": 839
                },
                "optional": false,
                "computed": false,
                "start": 834,
                "end": 839
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 834,
              "end": 841
            },
            "prefix": true,
            "start": 833,
            "end": 841
          },
          "definite": false,
          "start": 814,
          "end": 841
        }
      ],
      "declare": false,
      "start": 810,
      "end": 842
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
            "name": "ResultIsNumber15",
            "optional": false,
            "typeAnnotation": null,
            "start": 847,
            "end": 863
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 868,
                "end": 871
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY1",
                "optional": false,
                "typeAnnotation": null,
                "start": 874,
                "end": 878
              },
              "start": 868,
              "end": 878
            },
            "prefix": true,
            "start": 866,
            "end": 879
          },
          "definite": false,
          "start": 847,
          "end": 879
        }
      ],
      "declare": false,
      "start": 843,
      "end": 880
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
            "name": "ResultIsNumber16",
            "optional": false,
            "typeAnnotation": null,
            "start": 885,
            "end": 901
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 906,
                "end": 910
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 913,
                "end": 922
              },
              "start": 906,
              "end": 922
            },
            "prefix": true,
            "start": 904,
            "end": 923
          },
          "definite": false,
          "start": 885,
          "end": 923
        }
      ],
      "declare": false,
      "start": 881,
      "end": 924
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
            "name": "ResultIsNumber17",
            "optional": false,
            "typeAnnotation": null,
            "start": 929,
            "end": 945
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 950,
                "end": 954
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 957,
                "end": 961
              },
              "start": 950,
              "end": 961
            },
            "prefix": true,
            "start": 948,
            "end": 962
          },
          "definite": false,
          "start": 929,
          "end": 962
        }
      ],
      "declare": false,
      "start": 925,
      "end": 963
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
            "name": "ResultIsNumber18",
            "optional": false,
            "typeAnnotation": null,
            "start": 968,
            "end": 984
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 989,
                "end": 998
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1001,
                "end": 1010
              },
              "start": 989,
              "end": 1010
            },
            "prefix": true,
            "start": 987,
            "end": 1011
          },
          "definite": false,
          "start": 968,
          "end": 1011
        }
      ],
      "declare": false,
      "start": 964,
      "end": 1012
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
            "name": "ResultIsNumber19",
            "optional": false,
            "typeAnnotation": null,
            "start": 1042,
            "end": 1058
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "UnaryExpression",
              "operator": "~",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 1063,
                "end": 1066
              },
              "prefix": true,
              "start": 1062,
              "end": 1066
            },
            "prefix": true,
            "start": 1061,
            "end": 1066
          },
          "definite": false,
          "start": 1042,
          "end": 1066
        }
      ],
      "declare": false,
      "start": 1038,
      "end": 1067
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
            "name": "ResultIsNumber20",
            "optional": false,
            "typeAnnotation": null,
            "start": 1072,
            "end": 1088
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "UnaryExpression",
              "operator": "~",
              "argument": {
                "type": "UnaryExpression",
                "operator": "~",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANY",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1095,
                    "end": 1098
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANY1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1101,
                    "end": 1105
                  },
                  "start": 1095,
                  "end": 1105
                },
                "prefix": true,
                "start": 1093,
                "end": 1106
              },
              "prefix": true,
              "start": 1092,
              "end": 1106
            },
            "prefix": true,
            "start": 1091,
            "end": 1106
          },
          "definite": false,
          "start": 1072,
          "end": 1106
        }
      ],
      "declare": false,
      "start": 1068,
      "end": 1107
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY",
          "optional": false,
          "typeAnnotation": null,
          "start": 1138,
          "end": 1141
        },
        "prefix": true,
        "start": 1137,
        "end": 1141
      },
      "directive": null,
      "start": 1137,
      "end": 1142
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1144,
          "end": 1148
        },
        "prefix": true,
        "start": 1143,
        "end": 1148
      },
      "directive": null,
      "start": 1143,
      "end": 1149
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1151,
            "end": 1155
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1156,
            "end": 1157
          },
          "optional": false,
          "computed": true,
          "start": 1151,
          "end": 1158
        },
        "prefix": true,
        "start": 1150,
        "end": 1158
      },
      "directive": null,
      "start": 1150,
      "end": 1159
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null,
              "start": 1161,
              "end": 1164
            },
            "prefix": true,
            "start": 1160,
            "end": 1164
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1166,
            "end": 1170
          }
        ],
        "start": 1160,
        "end": 1170
      },
      "directive": null,
      "start": 1160,
      "end": 1171
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1173,
            "end": 1177
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 1178,
            "end": 1179
          },
          "optional": false,
          "computed": false,
          "start": 1173,
          "end": 1179
        },
        "prefix": true,
        "start": 1172,
        "end": 1179
      },
      "directive": null,
      "start": 1172,
      "end": 1180
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 1182,
            "end": 1186
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1187,
            "end": 1188
          },
          "optional": false,
          "computed": false,
          "start": 1182,
          "end": 1188
        },
        "prefix": true,
        "start": 1181,
        "end": 1188
      },
      "directive": null,
      "start": 1181,
      "end": 1189
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 1191,
            "end": 1192
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1193,
            "end": 1194
          },
          "optional": false,
          "computed": false,
          "start": 1191,
          "end": 1194
        },
        "prefix": true,
        "start": 1190,
        "end": 1194
      },
      "directive": null,
      "start": 1190,
      "end": 1195
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "UnaryExpression",
          "operator": "~",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1198,
              "end": 1202
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1203,
              "end": 1204
            },
            "optional": false,
            "computed": false,
            "start": 1198,
            "end": 1204
          },
          "prefix": true,
          "start": 1197,
          "end": 1204
        },
        "prefix": true,
        "start": 1196,
        "end": 1204
      },
      "directive": null,
      "start": 1196,
      "end": 1205
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 27,
  "end": 1205
}
```
