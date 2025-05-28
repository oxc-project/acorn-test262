__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 15,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "W",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 13,
  "end": 1741,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 65,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 64,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "decorators": [],
            "name": "W",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 61,
            "end": 62,
            "value": 4,
            "raw": "4"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 67,
      "end": 100,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 99,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 72,
            "decorators": [],
            "name": "W",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 97,
            "end": 98,
            "value": 4,
            "raw": "4"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 134,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 133,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 158,
      "end": 164,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 163,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 163,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 199,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 198,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 171,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 191,
            "end": 197,
            "left": {
              "type": "Literal",
              "start": 191,
              "end": 193,
              "value": "",
              "raw": "\"\""
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 196,
              "end": 197,
              "value": 4,
              "raw": "4"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 200,
      "end": 233,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 204,
          "end": 232,
          "id": {
            "type": "Identifier",
            "start": 204,
            "end": 205,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 208,
            "end": 232,
            "left": {
              "type": "Literal",
              "start": 208,
              "end": 210,
              "value": "",
              "raw": "\"\""
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 230,
              "end": 231,
              "value": 4,
              "raw": "4"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 235,
      "end": 300,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 241,
        "end": 249,
        "decorators": [],
        "name": "SomeBase",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 250,
        "end": 300,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 256,
            "end": 298,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 267,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 267,
              "end": 298,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 270,
                "end": 298,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 280,
                    "end": 292,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 280,
                      "end": 291,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 280,
                        "end": 286,
                        "object": {
                          "type": "ThisExpression",
                          "start": 280,
                          "end": 284
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 285,
                          "end": 286,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 289,
                        "end": 291,
                        "value": 42,
                        "raw": "42"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 301,
      "end": 403,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 307,
        "end": 318,
        "decorators": [],
        "name": "SomeDerived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 327,
        "end": 335,
        "decorators": [],
        "name": "SomeBase",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 336,
        "end": 403,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 342,
            "end": 401,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 342,
              "end": 353,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 353,
              "end": 401,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 356,
                "end": 401,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 366,
                    "end": 374,
                    "expression": {
                      "type": "CallExpression",
                      "start": 366,
                      "end": 373,
                      "callee": {
                        "type": "Super",
                        "start": 366,
                        "end": 371
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 383,
                    "end": 395,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 383,
                      "end": 394,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 383,
                        "end": 389,
                        "object": {
                          "type": "ThisExpression",
                          "start": 383,
                          "end": 387
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 388,
                          "end": 389,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 392,
                        "end": 394,
                        "value": 42,
                        "raw": "42"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 404,
      "end": 470,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 410,
        "end": 419,
        "decorators": [],
        "name": "SomeOther",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 420,
        "end": 470,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 426,
            "end": 468,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 426,
              "end": 437,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 437,
              "end": 468,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 440,
                "end": 468,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 450,
                    "end": 462,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 450,
                      "end": 461,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 450,
                        "end": 456,
                        "object": {
                          "type": "ThisExpression",
                          "start": 450,
                          "end": 454
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 455,
                          "end": 456,
                          "decorators": [],
                          "name": "q",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 459,
                        "end": 461,
                        "value": 42,
                        "raw": "42"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 472,
      "end": 553,
      "id": {
        "type": "Identifier",
        "start": 481,
        "end": 494,
        "decorators": [],
        "name": "SomeFakeClass",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 497,
        "end": 553,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 536,
            "end": 551,
            "expression": {
              "type": "AssignmentExpression",
              "start": 536,
              "end": 550,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 536,
                "end": 542,
                "object": {
                  "type": "ThisExpression",
                  "start": 536,
                  "end": 540
                },
                "property": {
                  "type": "Identifier",
                  "start": 541,
                  "end": 542,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 545,
                "end": 550,
                "value": "bar",
                "raw": "\"bar\""
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 624,
      "end": 654,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 628,
          "end": 653,
          "id": {
            "type": "Identifier",
            "start": 628,
            "end": 636,
            "decorators": [],
            "name": "someBase",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 639,
            "end": 653,
            "callee": {
              "type": "Identifier",
              "start": 643,
              "end": 651,
              "decorators": [],
              "name": "SomeBase",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 655,
      "end": 691,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 659,
          "end": 690,
          "id": {
            "type": "Identifier",
            "start": 659,
            "end": 670,
            "decorators": [],
            "name": "someDerived",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 673,
            "end": 690,
            "callee": {
              "type": "Identifier",
              "start": 677,
              "end": 688,
              "decorators": [],
              "name": "SomeDerived",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 692,
      "end": 724,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 696,
          "end": 723,
          "id": {
            "type": "Identifier",
            "start": 696,
            "end": 705,
            "decorators": [],
            "name": "someOther",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 708,
            "end": 723,
            "callee": {
              "type": "Identifier",
              "start": 712,
              "end": 721,
              "decorators": [],
              "name": "SomeOther",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 725,
      "end": 765,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 729,
          "end": 764,
          "id": {
            "type": "Identifier",
            "start": 729,
            "end": 742,
            "decorators": [],
            "name": "someFakeClass",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 745,
            "end": 764,
            "callee": {
              "type": "Identifier",
              "start": 749,
              "end": 762,
              "decorators": [],
              "name": "SomeFakeClass",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 767,
      "end": 815,
      "expression": {
        "type": "AssignmentExpression",
        "start": 767,
        "end": 814,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 767,
          "end": 775,
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 802,
          "end": 813,
          "decorators": [],
          "name": "someDerived",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 816,
      "end": 861,
      "expression": {
        "type": "AssignmentExpression",
        "start": 816,
        "end": 860,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 816,
          "end": 824,
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 851,
          "end": 859,
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 862,
      "end": 908,
      "expression": {
        "type": "AssignmentExpression",
        "start": 862,
        "end": 907,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 862,
          "end": 870,
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 897,
          "end": 906,
          "decorators": [],
          "name": "someOther",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 919,
      "end": 973,
      "expression": {
        "type": "AssignmentExpression",
        "start": 919,
        "end": 972,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 919,
          "end": 930,
          "decorators": [],
          "name": "someDerived",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 960,
          "end": 971,
          "decorators": [],
          "name": "someDerived",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 974,
      "end": 1025,
      "expression": {
        "type": "AssignmentExpression",
        "start": 974,
        "end": 1024,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 974,
          "end": 985,
          "decorators": [],
          "name": "someDerived",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1015,
          "end": 1023,
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1026,
      "end": 1078,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1026,
        "end": 1077,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1026,
          "end": 1037,
          "decorators": [],
          "name": "someDerived",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1067,
          "end": 1076,
          "decorators": [],
          "name": "someOther",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1089,
      "end": 1139,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1089,
        "end": 1138,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1089,
          "end": 1098,
          "decorators": [],
          "name": "someOther",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1126,
          "end": 1137,
          "decorators": [],
          "name": "someDerived",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1149,
      "end": 1196,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1149,
        "end": 1195,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1149,
          "end": 1158,
          "decorators": [],
          "name": "someOther",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1186,
          "end": 1194,
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1206,
      "end": 1254,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1206,
        "end": 1253,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1206,
          "end": 1215,
          "decorators": [],
          "name": "someOther",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1243,
          "end": 1252,
          "decorators": [],
          "name": "someOther",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1256,
      "end": 1281,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1256,
        "end": 1280,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1256,
          "end": 1269,
          "decorators": [],
          "name": "someFakeClass",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1272,
          "end": 1280,
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1282,
      "end": 1310,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1282,
        "end": 1309,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1282,
          "end": 1295,
          "decorators": [],
          "name": "someFakeClass",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1298,
          "end": 1309,
          "decorators": [],
          "name": "someDerived",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1312,
      "end": 1337,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1312,
        "end": 1336,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1312,
          "end": 1320,
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1323,
          "end": 1336,
          "decorators": [],
          "name": "someFakeClass",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1347,
      "end": 1397,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1347,
        "end": 1396,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1347,
          "end": 1355,
          "decorators": [],
          "name": "someBase",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1382,
          "end": 1395,
          "decorators": [],
          "name": "someFakeClass",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1480,
      "end": 1493,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1484,
          "end": 1492,
          "id": {
            "type": "Identifier",
            "start": 1484,
            "end": 1492,
            "decorators": [],
            "name": "numOrStr",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1516,
      "end": 1524,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1520,
          "end": 1523,
          "id": {
            "type": "Identifier",
            "start": 1520,
            "end": 1523,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1525,
      "end": 1648,
      "test": {
        "type": "BinaryExpression",
        "start": 1562,
        "end": 1584,
        "left": {
          "type": "Identifier",
          "start": 1562,
          "end": 1570,
          "decorators": [],
          "name": "numOrStr",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 1575,
          "end": 1584,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1587,
        "end": 1648,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1599,
            "end": 1614,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1599,
              "end": 1613,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1599,
                "end": 1602,
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1605,
                "end": 1613,
                "decorators": [],
                "name": "numOrStr",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1651,
      "end": 1690,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1655,
          "end": 1689,
          "id": {
            "type": "Identifier",
            "start": 1655,
            "end": 1663,
            "decorators": [],
            "name": "asConst1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1687,
            "end": 1688,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1691,
      "end": 1741,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1695,
          "end": 1740,
          "id": {
            "type": "Identifier",
            "start": 1695,
            "end": 1703,
            "decorators": [],
            "name": "asConst2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1727,
            "end": 1739,
            "properties": [
              {
                "type": "Property",
                "start": 1733,
                "end": 1737,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1733,
                  "end": 1734,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1736,
                  "end": 1737,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
