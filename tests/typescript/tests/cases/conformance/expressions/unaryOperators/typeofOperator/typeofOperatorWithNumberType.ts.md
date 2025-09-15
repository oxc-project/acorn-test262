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
                "start": 47,
                "end": 53
              },
              "start": 45,
              "end": 53
            },
            "start": 39,
            "end": 53
          },
          "init": null,
          "definite": false,
          "start": 39,
          "end": 53
        }
      ],
      "declare": false,
      "start": 35,
      "end": 54
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
                  "start": 68,
                  "end": 74
                },
                "start": 68,
                "end": 76
              },
              "start": 66,
              "end": 76
            },
            "start": 59,
            "end": 76
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 80,
                "end": 81
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 83,
                "end": 84
              }
            ],
            "start": 79,
            "end": 85
          },
          "definite": false,
          "start": 59,
          "end": 85
        }
      ],
      "declare": false,
      "start": 55,
      "end": 86
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 100
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 104,
          "end": 110
        },
        "start": 102,
        "end": 110
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
              "start": 120,
              "end": 121
            },
            "start": 113,
            "end": 122
          }
        ],
        "start": 111,
        "end": 124
      },
      "expression": false,
      "start": 88,
      "end": 124
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
        "start": 132,
        "end": 133
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
              "start": 147,
              "end": 148
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 150,
                "end": 156
              },
              "start": 148,
              "end": 156
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
            "start": 140,
            "end": 157
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
              "start": 169,
              "end": 172
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
                      "start": 184,
                      "end": 185
                    },
                    "start": 177,
                    "end": 186
                  }
                ],
                "start": 175,
                "end": 188
              },
              "expression": false,
              "start": 172,
              "end": 188
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 162,
            "end": 188
          }
        ],
        "start": 134,
        "end": 190
      },
      "abstract": false,
      "declare": false,
      "start": 126,
      "end": 190
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 202
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
                        "start": 223,
                        "end": 229
                      },
                      "start": 221,
                      "end": 229
                    },
                    "start": 220,
                    "end": 229
                  },
                  "init": null,
                  "definite": false,
                  "start": 220,
                  "end": 229
                }
              ],
              "declare": false,
              "start": 216,
              "end": 230
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 209,
            "end": 230
          }
        ],
        "start": 203,
        "end": 232
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 191,
      "end": 232
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
            "start": 238,
            "end": 242
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 249,
              "end": 250
            },
            "typeArguments": null,
            "arguments": [],
            "start": 245,
            "end": 252
          },
          "definite": false,
          "start": 238,
          "end": 252
        }
      ],
      "declare": false,
      "start": 234,
      "end": 253
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
            "name": "ResultIsString1",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 293
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 309
            },
            "prefix": true,
            "start": 296,
            "end": 309
          },
          "definite": false,
          "start": 278,
          "end": 309
        }
      ],
      "declare": false,
      "start": 274,
      "end": 310
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
            "name": "ResultIsString2",
            "optional": false,
            "typeAnnotation": null,
            "start": 315,
            "end": 330
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER1",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 347
            },
            "prefix": true,
            "start": 333,
            "end": 347
          },
          "definite": false,
          "start": 315,
          "end": 347
        }
      ],
      "declare": false,
      "start": 311,
      "end": 348
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
            "name": "ResultIsString3",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 392
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 402,
              "end": 403
            },
            "prefix": true,
            "start": 395,
            "end": 403
          },
          "definite": false,
          "start": 377,
          "end": 403
        }
      ],
      "declare": false,
      "start": 373,
      "end": 404
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
            "name": "ResultIsString4",
            "optional": false,
            "typeAnnotation": null,
            "start": 409,
            "end": 424
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
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
                    "start": 436,
                    "end": 437
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 439,
                    "end": 440
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 436,
                  "end": 440
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
                    "start": 442,
                    "end": 443
                  },
                  "value": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 445,
                    "end": 446
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 442,
                  "end": 446
                }
              ],
              "start": 434,
              "end": 447
            },
            "prefix": true,
            "start": 427,
            "end": 447
          },
          "definite": false,
          "start": 409,
          "end": 447
        }
      ],
      "declare": false,
      "start": 405,
      "end": 448
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
            "name": "ResultIsString5",
            "optional": false,
            "typeAnnotation": null,
            "start": 453,
            "end": 468
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
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
                    "start": 480,
                    "end": 481
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 483,
                    "end": 484
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 480,
                  "end": 484
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
                    "start": 486,
                    "end": 487
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 493,
                            "end": 499
                          },
                          "start": 491,
                          "end": 499
                        },
                        "start": 490,
                        "end": 499
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 513,
                            "end": 514
                          },
                          "start": 506,
                          "end": 515
                        }
                      ],
                      "start": 504,
                      "end": 517
                    },
                    "id": null,
                    "generator": false,
                    "start": 489,
                    "end": 517
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 486,
                  "end": 517
                }
              ],
              "start": 478,
              "end": 519
            },
            "prefix": true,
            "start": 471,
            "end": 519
          },
          "definite": false,
          "start": 453,
          "end": 519
        }
      ],
      "declare": false,
      "start": 449,
      "end": 520
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
            "name": "ResultIsString6",
            "optional": false,
            "typeAnnotation": null,
            "start": 553,
            "end": 568
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 578,
                "end": 582
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 583,
                "end": 584
              },
              "optional": false,
              "computed": false,
              "start": 578,
              "end": 584
            },
            "prefix": true,
            "start": 571,
            "end": 584
          },
          "definite": false,
          "start": 553,
          "end": 584
        }
      ],
      "declare": false,
      "start": 549,
      "end": 585
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
            "name": "ResultIsString7",
            "optional": false,
            "typeAnnotation": null,
            "start": 590,
            "end": 605
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 615,
                "end": 616
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 617,
                "end": 618
              },
              "optional": false,
              "computed": false,
              "start": 615,
              "end": 618
            },
            "prefix": true,
            "start": 608,
            "end": 618
          },
          "definite": false,
          "start": 590,
          "end": 618
        }
      ],
      "declare": false,
      "start": 586,
      "end": 619
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
            "name": "ResultIsString8",
            "optional": false,
            "typeAnnotation": null,
            "start": 624,
            "end": 639
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER1",
                "optional": false,
                "typeAnnotation": null,
                "start": 649,
                "end": 656
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 657,
                "end": 658
              },
              "optional": false,
              "computed": true,
              "start": 649,
              "end": 659
            },
            "prefix": true,
            "start": 642,
            "end": 659
          },
          "definite": false,
          "start": 624,
          "end": 659
        }
      ],
      "declare": false,
      "start": 620,
      "end": 660
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
            "name": "ResultIsString9",
            "optional": false,
            "typeAnnotation": null,
            "start": 665,
            "end": 680
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 690,
                "end": 693
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 690,
              "end": 695
            },
            "prefix": true,
            "start": 683,
            "end": 695
          },
          "definite": false,
          "start": 665,
          "end": 695
        }
      ],
      "declare": false,
      "start": 661,
      "end": 696
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
            "name": "ResultIsString10",
            "optional": false,
            "typeAnnotation": null,
            "start": 701,
            "end": 717
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
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
                  "start": 727,
                  "end": 728
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 729,
                  "end": 732
                },
                "optional": false,
                "computed": false,
                "start": 727,
                "end": 732
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 727,
              "end": 734
            },
            "prefix": true,
            "start": 720,
            "end": 734
          },
          "definite": false,
          "start": 701,
          "end": 734
        }
      ],
      "declare": false,
      "start": 697,
      "end": 735
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
            "name": "ResultIsString11",
            "optional": false,
            "typeAnnotation": null,
            "start": 740,
            "end": 756
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 767,
                "end": 773
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 776,
                "end": 782
              },
              "start": 767,
              "end": 782
            },
            "prefix": true,
            "start": 759,
            "end": 783
          },
          "definite": false,
          "start": 740,
          "end": 783
        }
      ],
      "declare": false,
      "start": 736,
      "end": 784
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
            "name": "ResultIsString12",
            "optional": false,
            "typeAnnotation": null,
            "start": 820,
            "end": 836
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 853,
                "end": 859
              },
              "prefix": true,
              "start": 846,
              "end": 859
            },
            "prefix": true,
            "start": 839,
            "end": 859
          },
          "definite": false,
          "start": 820,
          "end": 859
        }
      ],
      "declare": false,
      "start": 816,
      "end": 860
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
            "name": "ResultIsString13",
            "optional": false,
            "typeAnnotation": null,
            "start": 865,
            "end": 881
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 906,
                    "end": 912
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 915,
                    "end": 921
                  },
                  "start": 906,
                  "end": 921
                },
                "prefix": true,
                "start": 898,
                "end": 922
              },
              "prefix": true,
              "start": 891,
              "end": 922
            },
            "prefix": true,
            "start": 884,
            "end": 922
          },
          "definite": false,
          "start": 865,
          "end": 922
        }
      ],
      "declare": false,
      "start": 861,
      "end": 923
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 961,
          "end": 962
        },
        "prefix": true,
        "start": 954,
        "end": 962
      },
      "directive": null,
      "start": 954,
      "end": 963
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "NUMBER",
          "optional": false,
          "typeAnnotation": null,
          "start": 971,
          "end": 977
        },
        "prefix": true,
        "start": 964,
        "end": 977
      },
      "directive": null,
      "start": 964,
      "end": 978
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "NUMBER1",
          "optional": false,
          "typeAnnotation": null,
          "start": 986,
          "end": 993
        },
        "prefix": true,
        "start": 979,
        "end": 993
      },
      "directive": null,
      "start": 979,
      "end": 994
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1002,
            "end": 1005
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1002,
          "end": 1007
        },
        "prefix": true,
        "start": 995,
        "end": 1007
      },
      "directive": null,
      "start": 995,
      "end": 1008
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 1016,
            "end": 1020
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1021,
            "end": 1022
          },
          "optional": false,
          "computed": false,
          "start": 1016,
          "end": 1022
        },
        "prefix": true,
        "start": 1009,
        "end": 1022
      },
      "directive": null,
      "start": 1009,
      "end": 1023
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 1031,
            "end": 1032
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1033,
            "end": 1034
          },
          "optional": false,
          "computed": false,
          "start": 1031,
          "end": 1034
        },
        "prefix": true,
        "start": 1024,
        "end": 1034
      },
      "directive": null,
      "start": 1024,
      "end": 1035
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 1043,
                "end": 1047
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1048,
                "end": 1049
              },
              "optional": false,
              "computed": false,
              "start": 1043,
              "end": 1049
            },
            "prefix": true,
            "start": 1036,
            "end": 1049
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1051,
              "end": 1052
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1053,
              "end": 1054
            },
            "optional": false,
            "computed": false,
            "start": 1051,
            "end": 1054
          }
        ],
        "start": 1036,
        "end": 1054
      },
      "directive": null,
      "start": 1036,
      "end": 1055
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1092,
                "end": 1098
              },
              "start": 1090,
              "end": 1098
            },
            "start": 1089,
            "end": 1098
          },
          "init": null,
          "definite": false,
          "start": 1089,
          "end": 1098
        }
      ],
      "declare": false,
      "start": 1085,
      "end": 1099
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 1107,
                  "end": 1113
                },
                "start": 1107,
                "end": 1115
              },
              "start": 1105,
              "end": 1115
            },
            "start": 1104,
            "end": 1115
          },
          "init": null,
          "definite": false,
          "start": 1104,
          "end": 1115
        }
      ],
      "declare": false,
      "start": 1100,
      "end": 1116
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1117,
        "end": 1118
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": null,
            "start": 1127,
            "end": 1133
          },
          "prefix": true,
          "start": 1120,
          "end": 1133
        },
        "directive": null,
        "start": 1120,
        "end": 1134
      },
      "start": 1117,
      "end": 1134
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 1135,
        "end": 1136
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "NUMBER1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1145,
            "end": 1152
          },
          "prefix": true,
          "start": 1138,
          "end": 1152
        },
        "directive": null,
        "start": 1138,
        "end": 1153
      },
      "start": 1135,
      "end": 1153
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "r",
        "optional": false,
        "typeAnnotation": null,
        "start": 1154,
        "end": 1155
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1164,
            "end": 1167
          },
          "prefix": true,
          "start": 1157,
          "end": 1167
        },
        "directive": null,
        "start": 1157,
        "end": 1168
      },
      "start": 1154,
      "end": 1168
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 1173,
            "end": 1174
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1179,
                  "end": 1180
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1182,
                  "end": 1183
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1179,
                "end": 1183
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1185,
                  "end": 1186
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1188,
                  "end": 1189
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1185,
                "end": 1189
              }
            ],
            "start": 1177,
            "end": 1191
          },
          "definite": false,
          "start": 1173,
          "end": 1191
        }
      ],
      "declare": false,
      "start": 1169,
      "end": 1192
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1193,
        "end": 1194
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1203,
              "end": 1204
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1205,
              "end": 1206
            },
            "optional": false,
            "computed": false,
            "start": 1203,
            "end": 1206
          },
          "prefix": true,
          "start": 1196,
          "end": 1206
        },
        "directive": null,
        "start": 1196,
        "end": 1207
      },
      "start": 1193,
      "end": 1207
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1208,
        "end": 1209
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "objA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1218,
              "end": 1222
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1223,
              "end": 1224
            },
            "optional": false,
            "computed": false,
            "start": 1218,
            "end": 1224
          },
          "prefix": true,
          "start": 1211,
          "end": 1224
        },
        "directive": null,
        "start": 1211,
        "end": 1225
      },
      "start": 1208,
      "end": 1225
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1226,
        "end": 1227
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1236,
              "end": 1237
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1238,
              "end": 1241
            },
            "optional": false,
            "computed": false,
            "start": 1236,
            "end": 1241
          },
          "prefix": true,
          "start": 1229,
          "end": 1241
        },
        "directive": null,
        "start": 1229,
        "end": 1242
      },
      "start": 1226,
      "end": 1242
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1243,
        "end": 1244
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1253,
              "end": 1254
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1255,
              "end": 1256
            },
            "optional": false,
            "computed": false,
            "start": 1253,
            "end": 1256
          },
          "prefix": true,
          "start": 1246,
          "end": 1256
        },
        "directive": null,
        "start": 1246,
        "end": 1257
      },
      "start": 1243,
      "end": 1257
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 35,
  "end": 1257
}
```
