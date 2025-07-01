__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 39
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "right": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 51,
                    "end": 52
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 55,
                    "end": 56
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 51,
                  "end": 56
                }
              ],
              "start": 50,
              "end": 57
            },
            "abstract": false,
            "declare": false,
            "start": 44,
            "end": 57
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 40,
          "end": 57
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 60
          },
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 63,
            "end": 64
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 64
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 77
                },
                "typeArguments": null,
                "arguments": [],
                "start": 72,
                "end": 79
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 81
              },
              "optional": false,
              "computed": false,
              "start": 72,
              "end": 81
            },
            "directive": null,
            "start": 72,
            "end": 82
          }
        ],
        "start": 66,
        "end": 84
      },
      "expression": false,
      "start": 26,
      "end": 84
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 120
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 122
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 144,
                      "end": 145
                    },
                    "typeArguments": null,
                    "start": 137,
                    "end": 145
                  },
                  "start": 135,
                  "end": 145
                },
                "start": 134,
                "end": 145
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 147,
              "end": 149
            },
            "expression": false,
            "start": 125,
            "end": 149
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 121,
          "end": 149
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 152
          },
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 155,
            "end": 156
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 151,
          "end": 156
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 158,
        "end": 166
      },
      "expression": false,
      "start": 107,
      "end": 166
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 192,
            "end": 193
          },
          "init": null,
          "definite": false,
          "start": 192,
          "end": 193
        }
      ],
      "declare": false,
      "start": 188,
      "end": 194
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 204,
        "end": 208
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 209,
            "end": 210
          },
          "right": {
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
                  "start": 215,
                  "end": 216
                },
                "value": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 226,
                      "end": 227
                    },
                    "typeArguments": null,
                    "start": 219,
                    "end": 227
                  },
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 228,
                    "end": 229
                  },
                  "start": 218,
                  "end": 229
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 215,
                "end": 229
              }
            ],
            "start": 213,
            "end": 231
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 209,
          "end": 231
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 234
          },
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 237,
            "end": 238
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 233,
          "end": 238
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 240,
        "end": 248
      },
      "expression": false,
      "start": 195,
      "end": 248
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 294,
        "end": 298
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 299,
            "end": 300
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 305
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 305
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 304,
                "end": 305
              }
            ],
            "start": 303,
            "end": 306
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 299,
          "end": 306
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 309
          },
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 312,
            "end": 313
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 308,
          "end": 313
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 315,
        "end": 318
      },
      "expression": false,
      "start": 285,
      "end": 318
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 383,
        "end": 387
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 388,
            "end": 389
          },
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 399,
                "end": 400
              },
              "id": null,
              "generator": false,
              "start": 393,
              "end": 400
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 392,
            "end": 403
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 388,
          "end": 403
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 405,
            "end": 406
          },
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 409,
            "end": 410
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 405,
          "end": 410
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 412,
        "end": 415
      },
      "expression": false,
      "start": 374,
      "end": 415
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 463,
        "end": 467
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 468,
            "end": 469
          },
          "right": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 485,
                  "end": 486
                },
                "id": null,
                "generator": false,
                "start": 479,
                "end": 486
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 478,
              "end": 489
            },
            "id": null,
            "generator": false,
            "start": 472,
            "end": 489
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 468,
          "end": 489
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 491,
            "end": 492
          },
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 495,
            "end": 496
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 491,
          "end": 496
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 498,
        "end": 501
      },
      "expression": false,
      "start": 454,
      "end": 501
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 571,
        "end": 575
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 576,
            "end": 577
          },
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "FunctionExpression",
              "id": null,
              "generator": true,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "YieldExpression",
                      "delegate": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 600,
                        "end": 601
                      },
                      "start": 594,
                      "end": 601
                    },
                    "directive": null,
                    "start": 594,
                    "end": 601
                  }
                ],
                "start": 593,
                "end": 602
              },
              "expression": false,
              "start": 581,
              "end": 602
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 580,
            "end": 605
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 576,
          "end": 605
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 607,
            "end": 608
          },
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 611,
            "end": 612
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 607,
          "end": 612
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 614,
        "end": 617
      },
      "expression": false,
      "start": 562,
      "end": 617
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 683,
        "end": 687
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 688,
            "end": 689
          },
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": true,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 705,
                "end": 706
              },
              "id": null,
              "generator": false,
              "start": 693,
              "end": 706
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 692,
            "end": 709
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 688,
          "end": 709
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 711,
            "end": 712
          },
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 715,
            "end": 716
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 711,
          "end": 716
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 718,
        "end": 721
      },
      "expression": false,
      "start": 674,
      "end": 721
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 775,
        "end": 779
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 780,
            "end": 781
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 786,
                  "end": 787
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 800,
                          "end": 801
                        },
                        "start": 793,
                        "end": 802
                      }
                    ],
                    "start": 791,
                    "end": 804
                  },
                  "expression": false,
                  "start": 788,
                  "end": 804
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 785,
                "end": 804
              }
            ],
            "start": 784,
            "end": 805
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 780,
          "end": 805
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 807,
            "end": 808
          },
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 811,
            "end": 812
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 807,
          "end": 812
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 814,
        "end": 817
      },
      "expression": false,
      "start": 766,
      "end": 817
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 26,
  "end": 817
}
```
