__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 116,
  "end": 1056,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 146,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 135,
            "decorators": [],
            "name": "super_covariant",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 138,
            "end": 146,
            "properties": [
              {
                "type": "Property",
                "start": 140,
                "end": 144,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 143,
                  "end": 144,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 186,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 215,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 203,
            "decorators": [],
            "name": "sub_covariant",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 206,
            "end": 215,
            "properties": [
              {
                "type": "Property",
                "start": 208,
                "end": 213,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 209,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 211,
                  "end": 213,
                  "raw": "''",
                  "value": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 218,
      "end": 250,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 218,
        "end": 249,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 218,
          "end": 233,
          "decorators": [],
          "name": "super_covariant",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 236,
          "end": 249,
          "decorators": [],
          "name": "sub_covariant",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 251,
      "end": 285,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 251,
        "end": 284,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 251,
          "end": 264,
          "decorators": [],
          "name": "sub_covariant",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 269,
          "end": 284,
          "decorators": [],
          "name": "super_covariant",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 432,
      "end": 475,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 436,
          "end": 474,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 455,
            "decorators": [],
            "name": "super_contravariant",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 458,
            "end": 474,
            "properties": [
              {
                "type": "Property",
                "start": 460,
                "end": 472,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 460,
                  "end": 461,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 463,
                  "end": 472,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 470,
                    "end": 472,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 464,
                      "end": 465,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 518,
      "end": 559,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 522,
          "end": 558,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 522,
            "end": 539,
            "decorators": [],
            "name": "sub_contravariant",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 542,
            "end": 558,
            "properties": [
              {
                "type": "Property",
                "start": 544,
                "end": 556,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 544,
                  "end": 545,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 547,
                  "end": 556,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 554,
                    "end": 556,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 548,
                      "end": 549,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 561,
      "end": 601,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 561,
        "end": 600,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 561,
          "end": 580,
          "decorators": [],
          "name": "super_contravariant",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 583,
          "end": 600,
          "decorators": [],
          "name": "sub_contravariant",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 612,
      "end": 652,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 612,
        "end": 651,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 612,
          "end": 629,
          "decorators": [],
          "name": "sub_contravariant",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 632,
          "end": 651,
          "decorators": [],
          "name": "super_contravariant",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 783,
      "end": 822,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 787,
          "end": 821,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 787,
            "end": 802,
            "decorators": [],
            "name": "super_invariant",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 805,
            "end": 821,
            "properties": [
              {
                "type": "Property",
                "start": 807,
                "end": 819,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 807,
                  "end": 808,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 810,
                  "end": 819,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 817,
                    "end": 819,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 811,
                      "end": 812,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 861,
      "end": 909,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 865,
          "end": 908,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 865,
            "end": 878,
            "decorators": [],
            "name": "sub_invariant",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 881,
            "end": 908,
            "properties": [
              {
                "type": "Property",
                "start": 883,
                "end": 906,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 883,
                  "end": 884,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 886,
                  "end": 906,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 893,
                    "end": 906,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 895,
                        "end": 904,
                        "argument": {
                          "type": "Literal",
                          "start": 902,
                          "end": 904,
                          "raw": "\"\"",
                          "value": ""
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 887,
                      "end": 888,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 911,
      "end": 943,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 911,
        "end": 942,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 911,
          "end": 926,
          "decorators": [],
          "name": "super_invariant",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 929,
          "end": 942,
          "decorators": [],
          "name": "sub_invariant",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 954,
      "end": 986,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 954,
        "end": 985,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 954,
          "end": 967,
          "decorators": [],
          "name": "sub_invariant",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 970,
          "end": 985,
          "decorators": [],
          "name": "super_invariant",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1040,
      "end": 1056,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1054,
        "end": 1056,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1049,
        "end": 1050,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1051,
          "end": 1052,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
