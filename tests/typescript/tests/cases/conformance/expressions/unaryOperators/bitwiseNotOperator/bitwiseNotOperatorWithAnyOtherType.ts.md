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
        "start": 280,
        "end": 281
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
                        "start": 302,
                        "end": 305
                      },
                      "start": 300,
                      "end": 305
                    },
                    "start": 299,
                    "end": 305
                  },
                  "init": null,
                  "definite": false,
                  "start": 299,
                  "end": 305
                }
              ],
              "declare": false,
              "start": 295,
              "end": 306
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 288,
            "end": 306
          }
        ],
        "start": 282,
        "end": 308
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 270,
      "end": 308
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
            "start": 313,
            "end": 317
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 325
            },
            "typeArguments": null,
            "arguments": [],
            "start": 320,
            "end": 327
          },
          "definite": false,
          "start": 313,
          "end": 327
        }
      ],
      "declare": false,
      "start": 309,
      "end": 328
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
            "start": 356,
            "end": 370
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
              "start": 374,
              "end": 378
            },
            "prefix": true,
            "start": 373,
            "end": 378
          },
          "definite": false,
          "start": 356,
          "end": 378
        }
      ],
      "declare": false,
      "start": 352,
      "end": 379
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
            "start": 384,
            "end": 399
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
              "start": 403,
              "end": 407
            },
            "prefix": true,
            "start": 402,
            "end": 407
          },
          "definite": false,
          "start": 384,
          "end": 407
        }
      ],
      "declare": false,
      "start": 380,
      "end": 408
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
            "start": 413,
            "end": 428
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
              "start": 432,
              "end": 433
            },
            "prefix": true,
            "start": 431,
            "end": 433
          },
          "definite": false,
          "start": 413,
          "end": 433
        }
      ],
      "declare": false,
      "start": 409,
      "end": 434
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
            "start": 439,
            "end": 454
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
              "start": 458,
              "end": 459
            },
            "prefix": true,
            "start": 457,
            "end": 459
          },
          "definite": false,
          "start": 439,
          "end": 459
        }
      ],
      "declare": false,
      "start": 435,
      "end": 460
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
            "start": 465,
            "end": 480
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
              "start": 484,
              "end": 487
            },
            "prefix": true,
            "start": 483,
            "end": 487
          },
          "definite": false,
          "start": 465,
          "end": 487
        }
      ],
      "declare": false,
      "start": 461,
      "end": 488
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
            "start": 493,
            "end": 508
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
              "start": 512,
              "end": 516
            },
            "prefix": true,
            "start": 511,
            "end": 516
          },
          "definite": false,
          "start": 493,
          "end": 516
        }
      ],
      "declare": false,
      "start": 489,
      "end": 517
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
            "start": 543,
            "end": 558
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
              "start": 562,
              "end": 571
            },
            "prefix": true,
            "start": 561,
            "end": 571
          },
          "definite": false,
          "start": 543,
          "end": 571
        }
      ],
      "declare": false,
      "start": 539,
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
            "name": "ResultIsNumber7",
            "optional": false,
            "typeAnnotation": null,
            "start": 577,
            "end": 592
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 596,
              "end": 600
            },
            "prefix": true,
            "start": 595,
            "end": 600
          },
          "definite": false,
          "start": 577,
          "end": 600
        }
      ],
      "declare": false,
      "start": 573,
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
            "name": "ResultIsNumber8",
            "optional": false,
            "typeAnnotation": null,
            "start": 631,
            "end": 646
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
                "start": 650,
                "end": 654
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 655,
                "end": 656
              },
              "optional": false,
              "computed": true,
              "start": 650,
              "end": 657
            },
            "prefix": true,
            "start": 649,
            "end": 657
          },
          "definite": false,
          "start": 631,
          "end": 657
        }
      ],
      "declare": false,
      "start": 627,
      "end": 657
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
            "start": 662,
            "end": 677
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
                "start": 681,
                "end": 685
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 686,
                "end": 687
              },
              "optional": false,
              "computed": false,
              "start": 681,
              "end": 687
            },
            "prefix": true,
            "start": 680,
            "end": 687
          },
          "definite": false,
          "start": 662,
          "end": 687
        }
      ],
      "declare": false,
      "start": 658,
      "end": 688
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
            "start": 693,
            "end": 709
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
                "start": 713,
                "end": 717
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 718,
                "end": 719
              },
              "optional": false,
              "computed": false,
              "start": 713,
              "end": 719
            },
            "prefix": true,
            "start": 712,
            "end": 719
          },
          "definite": false,
          "start": 693,
          "end": 719
        }
      ],
      "declare": false,
      "start": 689,
      "end": 720
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
            "start": 725,
            "end": 741
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
                "start": 745,
                "end": 749
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 750,
                "end": 751
              },
              "optional": false,
              "computed": false,
              "start": 745,
              "end": 751
            },
            "prefix": true,
            "start": 744,
            "end": 751
          },
          "definite": false,
          "start": 725,
          "end": 751
        }
      ],
      "declare": false,
      "start": 721,
      "end": 752
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
            "start": 757,
            "end": 773
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
                "start": 777,
                "end": 778
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 779,
                "end": 780
              },
              "optional": false,
              "computed": false,
              "start": 777,
              "end": 780
            },
            "prefix": true,
            "start": 776,
            "end": 780
          },
          "definite": false,
          "start": 757,
          "end": 780
        }
      ],
      "declare": false,
      "start": 753,
      "end": 781
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
            "start": 786,
            "end": 802
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
                "start": 806,
                "end": 809
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 806,
              "end": 811
            },
            "prefix": true,
            "start": 805,
            "end": 811
          },
          "definite": false,
          "start": 786,
          "end": 811
        }
      ],
      "declare": false,
      "start": 782,
      "end": 812
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
            "start": 817,
            "end": 833
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
                  "start": 837,
                  "end": 838
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 839,
                  "end": 842
                },
                "optional": false,
                "computed": false,
                "start": 837,
                "end": 842
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 837,
              "end": 844
            },
            "prefix": true,
            "start": 836,
            "end": 844
          },
          "definite": false,
          "start": 817,
          "end": 844
        }
      ],
      "declare": false,
      "start": 813,
      "end": 845
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
            "start": 850,
            "end": 866
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
                "start": 871,
                "end": 874
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY1",
                "optional": false,
                "typeAnnotation": null,
                "start": 877,
                "end": 881
              },
              "start": 871,
              "end": 881
            },
            "prefix": true,
            "start": 869,
            "end": 882
          },
          "definite": false,
          "start": 850,
          "end": 882
        }
      ],
      "declare": false,
      "start": 846,
      "end": 883
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
            "start": 888,
            "end": 904
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
                "start": 909,
                "end": 913
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 916,
                "end": 925
              },
              "start": 909,
              "end": 925
            },
            "prefix": true,
            "start": 907,
            "end": 926
          },
          "definite": false,
          "start": 888,
          "end": 926
        }
      ],
      "declare": false,
      "start": 884,
      "end": 927
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
            "start": 932,
            "end": 948
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
                "start": 953,
                "end": 957
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 960,
                "end": 964
              },
              "start": 953,
              "end": 964
            },
            "prefix": true,
            "start": 951,
            "end": 965
          },
          "definite": false,
          "start": 932,
          "end": 965
        }
      ],
      "declare": false,
      "start": 928,
      "end": 966
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
            "start": 971,
            "end": 987
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
                "start": 992,
                "end": 1001
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1004,
                "end": 1013
              },
              "start": 992,
              "end": 1013
            },
            "prefix": true,
            "start": 990,
            "end": 1014
          },
          "definite": false,
          "start": 971,
          "end": 1014
        }
      ],
      "declare": false,
      "start": 967,
      "end": 1015
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
            "start": 1045,
            "end": 1061
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
                "start": 1066,
                "end": 1069
              },
              "prefix": true,
              "start": 1065,
              "end": 1069
            },
            "prefix": true,
            "start": 1064,
            "end": 1069
          },
          "definite": false,
          "start": 1045,
          "end": 1069
        }
      ],
      "declare": false,
      "start": 1041,
      "end": 1070
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
            "start": 1075,
            "end": 1091
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
                    "start": 1098,
                    "end": 1101
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANY1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1104,
                    "end": 1108
                  },
                  "start": 1098,
                  "end": 1108
                },
                "prefix": true,
                "start": 1096,
                "end": 1109
              },
              "prefix": true,
              "start": 1095,
              "end": 1109
            },
            "prefix": true,
            "start": 1094,
            "end": 1109
          },
          "definite": false,
          "start": 1075,
          "end": 1109
        }
      ],
      "declare": false,
      "start": 1071,
      "end": 1110
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
          "start": 1141,
          "end": 1144
        },
        "prefix": true,
        "start": 1140,
        "end": 1144
      },
      "directive": null,
      "start": 1140,
      "end": 1145
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
          "start": 1147,
          "end": 1151
        },
        "prefix": true,
        "start": 1146,
        "end": 1151
      },
      "directive": null,
      "start": 1146,
      "end": 1152
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
            "start": 1154,
            "end": 1158
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1159,
            "end": 1160
          },
          "optional": false,
          "computed": true,
          "start": 1154,
          "end": 1161
        },
        "prefix": true,
        "start": 1153,
        "end": 1161
      },
      "directive": null,
      "start": 1153,
      "end": 1162
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
              "start": 1164,
              "end": 1167
            },
            "prefix": true,
            "start": 1163,
            "end": 1167
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1169,
            "end": 1173
          }
        ],
        "start": 1163,
        "end": 1173
      },
      "directive": null,
      "start": 1163,
      "end": 1174
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
            "start": 1176,
            "end": 1180
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 1181,
            "end": 1182
          },
          "optional": false,
          "computed": false,
          "start": 1176,
          "end": 1182
        },
        "prefix": true,
        "start": 1175,
        "end": 1182
      },
      "directive": null,
      "start": 1175,
      "end": 1183
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
            "start": 1185,
            "end": 1189
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1190,
            "end": 1191
          },
          "optional": false,
          "computed": false,
          "start": 1185,
          "end": 1191
        },
        "prefix": true,
        "start": 1184,
        "end": 1191
      },
      "directive": null,
      "start": 1184,
      "end": 1192
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
            "start": 1194,
            "end": 1195
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1196,
            "end": 1197
          },
          "optional": false,
          "computed": false,
          "start": 1194,
          "end": 1197
        },
        "prefix": true,
        "start": 1193,
        "end": 1197
      },
      "directive": null,
      "start": 1193,
      "end": 1198
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
              "start": 1201,
              "end": 1205
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1206,
              "end": 1207
            },
            "optional": false,
            "computed": false,
            "start": 1201,
            "end": 1207
          },
          "prefix": true,
          "start": 1200,
          "end": 1207
        },
        "prefix": true,
        "start": 1199,
        "end": 1207
      },
      "directive": null,
      "start": 1199,
      "end": 1208
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 27,
  "end": 1208
}
```
