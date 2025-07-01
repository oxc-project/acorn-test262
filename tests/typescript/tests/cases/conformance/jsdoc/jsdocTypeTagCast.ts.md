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
            "name": "W",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              },
              "start": 5,
              "end": 13
            },
            "start": 4,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 15
}
```
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
            "name": "W",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 18
          },
          "init": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 61,
            "end": 62
          },
          "definite": false,
          "start": 17,
          "end": 64
        }
      ],
      "declare": false,
      "start": 13,
      "end": 65
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
            "name": "W",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 72
          },
          "init": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 97,
            "end": 98
          },
          "definite": false,
          "start": 71,
          "end": 99
        }
      ],
      "declare": false,
      "start": 67,
      "end": 100
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
            "typeAnnotation": null,
            "start": 132,
            "end": 133
          },
          "init": null,
          "definite": false,
          "start": 132,
          "end": 133
        }
      ],
      "declare": false,
      "start": 128,
      "end": 134
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
            "name": "s",
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
            "start": 170,
            "end": 171
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 191,
              "end": 193
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 196,
              "end": 197
            },
            "start": 191,
            "end": 197
          },
          "definite": false,
          "start": 170,
          "end": 198
        }
      ],
      "declare": false,
      "start": 166,
      "end": 199
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 205
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 208,
              "end": 210
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 230,
              "end": 231
            },
            "start": 208,
            "end": 232
          },
          "definite": false,
          "start": 204,
          "end": 232
        }
      ],
      "declare": false,
      "start": 200,
      "end": 233
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 249
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 256,
              "end": 267
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 280,
                          "end": 284
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 285,
                          "end": 286
                        },
                        "optional": false,
                        "computed": false,
                        "start": 280,
                        "end": 286
                      },
                      "right": {
                        "type": "Literal",
                        "value": 42,
                        "raw": "42",
                        "start": 289,
                        "end": 291
                      },
                      "start": 280,
                      "end": 291
                    },
                    "directive": null,
                    "start": 280,
                    "end": 292
                  }
                ],
                "start": 270,
                "end": 298
              },
              "expression": false,
              "start": 267,
              "end": 298
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 256,
            "end": 298
          }
        ],
        "start": 250,
        "end": 300
      },
      "abstract": false,
      "declare": false,
      "start": 235,
      "end": 300
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeDerived",
        "optional": false,
        "typeAnnotation": null,
        "start": 307,
        "end": 318
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 327,
        "end": 335
      },
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 353
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 366,
                        "end": 371
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 366,
                      "end": 373
                    },
                    "directive": null,
                    "start": 366,
                    "end": 374
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 383,
                          "end": 387
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 388,
                          "end": 389
                        },
                        "optional": false,
                        "computed": false,
                        "start": 383,
                        "end": 389
                      },
                      "right": {
                        "type": "Literal",
                        "value": 42,
                        "raw": "42",
                        "start": 392,
                        "end": 394
                      },
                      "start": 383,
                      "end": 394
                    },
                    "directive": null,
                    "start": 383,
                    "end": 395
                  }
                ],
                "start": 356,
                "end": 401
              },
              "expression": false,
              "start": 353,
              "end": 401
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 342,
            "end": 401
          }
        ],
        "start": 336,
        "end": 403
      },
      "abstract": false,
      "declare": false,
      "start": 301,
      "end": 403
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeOther",
        "optional": false,
        "typeAnnotation": null,
        "start": 410,
        "end": 419
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 426,
              "end": 437
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 450,
                          "end": 454
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "q",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 455,
                          "end": 456
                        },
                        "optional": false,
                        "computed": false,
                        "start": 450,
                        "end": 456
                      },
                      "right": {
                        "type": "Literal",
                        "value": 42,
                        "raw": "42",
                        "start": 459,
                        "end": 461
                      },
                      "start": 450,
                      "end": 461
                    },
                    "directive": null,
                    "start": 450,
                    "end": 462
                  }
                ],
                "start": 440,
                "end": 468
              },
              "expression": false,
              "start": 437,
              "end": 468
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 426,
            "end": 468
          }
        ],
        "start": 420,
        "end": 470
      },
      "abstract": false,
      "declare": false,
      "start": 404,
      "end": 470
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeFakeClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 481,
        "end": 494
      },
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 536,
                  "end": 540
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 541,
                  "end": 542
                },
                "optional": false,
                "computed": false,
                "start": 536,
                "end": 542
              },
              "right": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 545,
                "end": 550
              },
              "start": 536,
              "end": 550
            },
            "directive": null,
            "start": 536,
            "end": 551
          }
        ],
        "start": 497,
        "end": 553
      },
      "expression": false,
      "start": 472,
      "end": 553
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
            "name": "someBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 628,
            "end": 636
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SomeBase",
              "optional": false,
              "typeAnnotation": null,
              "start": 643,
              "end": 651
            },
            "typeArguments": null,
            "arguments": [],
            "start": 639,
            "end": 653
          },
          "definite": false,
          "start": 628,
          "end": 653
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
            "name": "someDerived",
            "optional": false,
            "typeAnnotation": null,
            "start": 659,
            "end": 670
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SomeDerived",
              "optional": false,
              "typeAnnotation": null,
              "start": 677,
              "end": 688
            },
            "typeArguments": null,
            "arguments": [],
            "start": 673,
            "end": 690
          },
          "definite": false,
          "start": 659,
          "end": 690
        }
      ],
      "declare": false,
      "start": 655,
      "end": 691
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
            "name": "someOther",
            "optional": false,
            "typeAnnotation": null,
            "start": 696,
            "end": 705
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SomeOther",
              "optional": false,
              "typeAnnotation": null,
              "start": 712,
              "end": 721
            },
            "typeArguments": null,
            "arguments": [],
            "start": 708,
            "end": 723
          },
          "definite": false,
          "start": 696,
          "end": 723
        }
      ],
      "declare": false,
      "start": 692,
      "end": 724
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
            "name": "someFakeClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 729,
            "end": 742
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SomeFakeClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 749,
              "end": 762
            },
            "typeArguments": null,
            "arguments": [],
            "start": 745,
            "end": 764
          },
          "definite": false,
          "start": 729,
          "end": 764
        }
      ],
      "declare": false,
      "start": 725,
      "end": 765
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 767,
          "end": 775
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "someDerived",
          "optional": false,
          "typeAnnotation": null,
          "start": 802,
          "end": 813
        },
        "start": 767,
        "end": 814
      },
      "directive": null,
      "start": 767,
      "end": 815
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 816,
          "end": 824
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 851,
          "end": 859
        },
        "start": 816,
        "end": 860
      },
      "directive": null,
      "start": 816,
      "end": 861
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 862,
          "end": 870
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "someOther",
          "optional": false,
          "typeAnnotation": null,
          "start": 897,
          "end": 906
        },
        "start": 862,
        "end": 907
      },
      "directive": null,
      "start": 862,
      "end": 908
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someDerived",
          "optional": false,
          "typeAnnotation": null,
          "start": 919,
          "end": 930
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "someDerived",
          "optional": false,
          "typeAnnotation": null,
          "start": 960,
          "end": 971
        },
        "start": 919,
        "end": 972
      },
      "directive": null,
      "start": 919,
      "end": 973
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someDerived",
          "optional": false,
          "typeAnnotation": null,
          "start": 974,
          "end": 985
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 1015,
          "end": 1023
        },
        "start": 974,
        "end": 1024
      },
      "directive": null,
      "start": 974,
      "end": 1025
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someDerived",
          "optional": false,
          "typeAnnotation": null,
          "start": 1026,
          "end": 1037
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "someOther",
          "optional": false,
          "typeAnnotation": null,
          "start": 1067,
          "end": 1076
        },
        "start": 1026,
        "end": 1077
      },
      "directive": null,
      "start": 1026,
      "end": 1078
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someOther",
          "optional": false,
          "typeAnnotation": null,
          "start": 1089,
          "end": 1098
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "someDerived",
          "optional": false,
          "typeAnnotation": null,
          "start": 1126,
          "end": 1137
        },
        "start": 1089,
        "end": 1138
      },
      "directive": null,
      "start": 1089,
      "end": 1139
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someOther",
          "optional": false,
          "typeAnnotation": null,
          "start": 1149,
          "end": 1158
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 1186,
          "end": 1194
        },
        "start": 1149,
        "end": 1195
      },
      "directive": null,
      "start": 1149,
      "end": 1196
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someOther",
          "optional": false,
          "typeAnnotation": null,
          "start": 1206,
          "end": 1215
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "someOther",
          "optional": false,
          "typeAnnotation": null,
          "start": 1243,
          "end": 1252
        },
        "start": 1206,
        "end": 1253
      },
      "directive": null,
      "start": 1206,
      "end": 1254
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someFakeClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1256,
          "end": 1269
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 1272,
          "end": 1280
        },
        "start": 1256,
        "end": 1280
      },
      "directive": null,
      "start": 1256,
      "end": 1281
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someFakeClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1282,
          "end": 1295
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "someDerived",
          "optional": false,
          "typeAnnotation": null,
          "start": 1298,
          "end": 1309
        },
        "start": 1282,
        "end": 1309
      },
      "directive": null,
      "start": 1282,
      "end": 1310
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 1312,
          "end": 1320
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "someFakeClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1323,
          "end": 1336
        },
        "start": 1312,
        "end": 1336
      },
      "directive": null,
      "start": 1312,
      "end": 1337
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null,
          "start": 1347,
          "end": 1355
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "someFakeClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1382,
          "end": 1395
        },
        "start": 1347,
        "end": 1396
      },
      "directive": null,
      "start": 1347,
      "end": 1397
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
            "name": "numOrStr",
            "optional": false,
            "typeAnnotation": null,
            "start": 1484,
            "end": 1492
          },
          "init": null,
          "definite": false,
          "start": 1484,
          "end": 1492
        }
      ],
      "declare": false,
      "start": 1480,
      "end": 1493
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
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 1520,
            "end": 1523
          },
          "init": null,
          "definite": false,
          "start": 1520,
          "end": 1523
        }
      ],
      "declare": false,
      "start": 1516,
      "end": 1524
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numOrStr",
          "optional": false,
          "typeAnnotation": null,
          "start": 1562,
          "end": 1570
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 1575,
          "end": 1584
        },
        "start": 1562,
        "end": 1584
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 1599,
                "end": 1602
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrStr",
                "optional": false,
                "typeAnnotation": null,
                "start": 1605,
                "end": 1613
              },
              "start": 1599,
              "end": 1613
            },
            "directive": null,
            "start": 1599,
            "end": 1614
          }
        ],
        "start": 1587,
        "end": 1648
      },
      "alternate": null,
      "start": 1525,
      "end": 1648
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
            "name": "asConst1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1655,
            "end": 1663
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1687,
            "end": 1688
          },
          "definite": false,
          "start": 1655,
          "end": 1689
        }
      ],
      "declare": false,
      "start": 1651,
      "end": 1690
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
            "name": "asConst2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1695,
            "end": 1703
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
                  "start": 1733,
                  "end": 1734
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1736,
                  "end": 1737
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1733,
                "end": 1737
              }
            ],
            "start": 1727,
            "end": 1739
          },
          "definite": false,
          "start": 1695,
          "end": 1740
        }
      ],
      "declare": false,
      "start": 1691,
      "end": 1741
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 13,
  "end": 1741
}
```
