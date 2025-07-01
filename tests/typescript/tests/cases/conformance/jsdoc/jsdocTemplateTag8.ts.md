__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "super_covariant",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 135
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
                  "start": 140,
                  "end": 141
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 143,
                  "end": 144
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 140,
                "end": 144
              }
            ],
            "start": 138,
            "end": 146
          },
          "definite": false,
          "start": 120,
          "end": 146
        }
      ],
      "declare": false,
      "start": 116,
      "end": 147
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
            "name": "sub_covariant",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 203
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
                  "start": 208,
                  "end": 209
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 211,
                  "end": 213
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 208,
                "end": 213
              }
            ],
            "start": 206,
            "end": 215
          },
          "definite": false,
          "start": 190,
          "end": 215
        }
      ],
      "declare": false,
      "start": 186,
      "end": 216
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "super_covariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 218,
          "end": 233
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sub_covariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 236,
          "end": 249
        },
        "start": 218,
        "end": 249
      },
      "directive": null,
      "start": 218,
      "end": 250
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sub_covariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 251,
          "end": 264
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "super_covariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 269,
          "end": 284
        },
        "start": 251,
        "end": 284
      },
      "directive": null,
      "start": 251,
      "end": 285
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
            "name": "super_contravariant",
            "optional": false,
            "typeAnnotation": null,
            "start": 436,
            "end": 455
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 460,
                  "end": 461
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 464,
                      "end": 465
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 470,
                    "end": 472
                  },
                  "id": null,
                  "generator": false,
                  "start": 463,
                  "end": 472
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 460,
                "end": 472
              }
            ],
            "start": 458,
            "end": 474
          },
          "definite": false,
          "start": 436,
          "end": 474
        }
      ],
      "declare": false,
      "start": 432,
      "end": 475
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
            "name": "sub_contravariant",
            "optional": false,
            "typeAnnotation": null,
            "start": 522,
            "end": 539
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 544,
                  "end": 545
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 548,
                      "end": 549
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 554,
                    "end": 556
                  },
                  "id": null,
                  "generator": false,
                  "start": 547,
                  "end": 556
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 544,
                "end": 556
              }
            ],
            "start": 542,
            "end": 558
          },
          "definite": false,
          "start": 522,
          "end": 558
        }
      ],
      "declare": false,
      "start": 518,
      "end": 559
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "super_contravariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 561,
          "end": 580
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sub_contravariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 583,
          "end": 600
        },
        "start": 561,
        "end": 600
      },
      "directive": null,
      "start": 561,
      "end": 601
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sub_contravariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 612,
          "end": 629
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "super_contravariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 632,
          "end": 651
        },
        "start": 612,
        "end": 651
      },
      "directive": null,
      "start": 612,
      "end": 652
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
            "name": "super_invariant",
            "optional": false,
            "typeAnnotation": null,
            "start": 787,
            "end": 802
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 807,
                  "end": 808
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 811,
                      "end": 812
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 817,
                    "end": 819
                  },
                  "id": null,
                  "generator": false,
                  "start": 810,
                  "end": 819
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 807,
                "end": 819
              }
            ],
            "start": 805,
            "end": 821
          },
          "definite": false,
          "start": 787,
          "end": 821
        }
      ],
      "declare": false,
      "start": 783,
      "end": 822
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
            "name": "sub_invariant",
            "optional": false,
            "typeAnnotation": null,
            "start": 865,
            "end": 878
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 883,
                  "end": 884
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 887,
                      "end": 888
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 902,
                          "end": 904
                        },
                        "start": 895,
                        "end": 904
                      }
                    ],
                    "start": 893,
                    "end": 906
                  },
                  "id": null,
                  "generator": false,
                  "start": 886,
                  "end": 906
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 883,
                "end": 906
              }
            ],
            "start": 881,
            "end": 908
          },
          "definite": false,
          "start": 865,
          "end": 908
        }
      ],
      "declare": false,
      "start": 861,
      "end": 909
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "super_invariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 911,
          "end": 926
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sub_invariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 929,
          "end": 942
        },
        "start": 911,
        "end": 942
      },
      "directive": null,
      "start": 911,
      "end": 943
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sub_invariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 954,
          "end": 967
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "super_invariant",
          "optional": false,
          "typeAnnotation": null,
          "start": 970,
          "end": 985
        },
        "start": 954,
        "end": 985
      },
      "directive": null,
      "start": 954,
      "end": 986
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1049,
        "end": 1050
      },
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
          "typeAnnotation": null,
          "start": 1051,
          "end": 1052
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1054,
        "end": 1056
      },
      "expression": false,
      "start": 1040,
      "end": 1056
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 116,
  "end": 1056
}
```
