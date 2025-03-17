__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 861,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 28,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 28,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 26,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 30,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 59,
        "name": "getFooOrNull",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 61,
        "end": 73,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 63,
          "end": 73,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 63,
              "end": 66,
              "typeName": {
                "type": "Identifier",
                "start": 63,
                "end": 66,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSNullKeyword",
              "start": 69,
              "end": 73
            }
          ]
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 75,
      "end": 142,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 115,
        "name": "getStringOrNumberOrNull",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 117,
        "end": 141,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 119,
          "end": 141,
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 119,
              "end": 125
            },
            {
              "type": "TSNumberKeyword",
              "start": 128,
              "end": 134
            },
            {
              "type": "TSNullKeyword",
              "start": 137,
              "end": 141
            }
          ]
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 144,
      "end": 256,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 155,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 158,
        "end": 256,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 164,
            "end": 184,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 168,
                "end": 183,
                "id": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 183,
                  "name": "foo",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 171,
                    "end": 183,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 173,
                      "end": 183,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 173,
                          "end": 176,
                          "typeName": {
                            "type": "Identifier",
                            "start": 173,
                            "end": 176,
                            "name": "Foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 179,
                          "end": 183
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 189,
            "end": 254,
            "test": {
              "type": "BinaryExpression",
              "start": 193,
              "end": 224,
              "left": {
                "type": "AssignmentExpression",
                "start": 194,
                "end": 214,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 197,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "CallExpression",
                  "start": 200,
                  "end": 214,
                  "callee": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 212,
                    "name": "getFooOrNull",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 220,
                "end": 224,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 226,
              "end": 254,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 236,
                  "end": 240,
                  "expression": {
                    "type": "Identifier",
                    "start": 236,
                    "end": 239,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 258,
      "end": 441,
      "id": {
        "type": "Identifier",
        "start": 267,
        "end": 269,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 272,
        "end": 441,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 278,
            "end": 299,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 282,
                "end": 298,
                "id": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 298,
                  "name": "foo1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 286,
                    "end": 298,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 288,
                      "end": 298,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 288,
                          "end": 291,
                          "typeName": {
                            "type": "Identifier",
                            "start": 288,
                            "end": 291,
                            "name": "Foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 294,
                          "end": 298
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 304,
            "end": 325,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 308,
                "end": 324,
                "id": {
                  "type": "Identifier",
                  "start": 308,
                  "end": 324,
                  "name": "foo2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 312,
                    "end": 324,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 314,
                      "end": 324,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 314,
                          "end": 317,
                          "typeName": {
                            "type": "Identifier",
                            "start": 314,
                            "end": 317,
                            "name": "Foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 320,
                          "end": 324
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 330,
            "end": 439,
            "test": {
              "type": "BinaryExpression",
              "start": 334,
              "end": 379,
              "left": {
                "type": "SequenceExpression",
                "start": 335,
                "end": 369,
                "expressions": [
                  {
                    "type": "AssignmentExpression",
                    "start": 335,
                    "end": 356,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 335,
                      "end": 339,
                      "name": "foo1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 342,
                      "end": 356,
                      "callee": {
                        "type": "Identifier",
                        "start": 342,
                        "end": 354,
                        "name": "getFooOrNull",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "AssignmentExpression",
                    "start": 358,
                    "end": 369,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 358,
                      "end": 362,
                      "name": "foo2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 365,
                      "end": 369,
                      "name": "foo1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 375,
                "end": 379,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 381,
              "end": 439,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 391,
                  "end": 396,
                  "expression": {
                    "type": "Identifier",
                    "start": 391,
                    "end": 395,
                    "name": "foo1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 420,
                  "end": 425,
                  "expression": {
                    "type": "Identifier",
                    "start": 420,
                    "end": 424,
                    "name": "foo2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 443,
      "end": 556,
      "id": {
        "type": "Identifier",
        "start": 452,
        "end": 454,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 457,
        "end": 556,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 463,
            "end": 486,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 467,
                "end": 485,
                "id": {
                  "type": "Identifier",
                  "start": 467,
                  "end": 485,
                  "name": "obj",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 470,
                    "end": 485,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 472,
                      "end": 485,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 472,
                          "end": 478,
                          "typeName": {
                            "type": "Identifier",
                            "start": 472,
                            "end": 478,
                            "name": "Object",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 481,
                          "end": 485
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 491,
            "end": 554,
            "test": {
              "type": "BinaryExpression",
              "start": 495,
              "end": 532,
              "left": {
                "type": "AssignmentExpression",
                "start": 496,
                "end": 516,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 496,
                  "end": 499,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "CallExpression",
                  "start": 502,
                  "end": 516,
                  "callee": {
                    "type": "Identifier",
                    "start": 502,
                    "end": 514,
                    "name": "getFooOrNull",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                }
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 529,
                "end": 532,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 534,
              "end": 554,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 544,
                  "end": 548,
                  "expression": {
                    "type": "Identifier",
                    "start": 544,
                    "end": 547,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 558,
      "end": 690,
      "id": {
        "type": "Identifier",
        "start": 567,
        "end": 569,
        "name": "f4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 572,
        "end": 690,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 578,
            "end": 608,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 582,
                "end": 607,
                "id": {
                  "type": "Identifier",
                  "start": 582,
                  "end": 607,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 583,
                    "end": 607,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 585,
                      "end": 607,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 585,
                          "end": 591
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 594,
                          "end": 600
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 603,
                          "end": 607
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 613,
            "end": 688,
            "test": {
              "type": "BinaryExpression",
              "start": 617,
              "end": 668,
              "left": {
                "type": "UnaryExpression",
                "start": 617,
                "end": 655,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "AssignmentExpression",
                  "start": 625,
                  "end": 654,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 625,
                    "end": 626,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "CallExpression",
                    "start": 629,
                    "end": 654,
                    "callee": {
                      "type": "Identifier",
                      "start": 629,
                      "end": 652,
                      "name": "getStringOrNumberOrNull",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 660,
                "end": 668,
                "value": "number",
                "raw": "\"number\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 670,
              "end": 688,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 680,
                  "end": 682,
                  "expression": {
                    "type": "Identifier",
                    "start": 680,
                    "end": 681,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 713,
      "end": 728,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 719,
          "end": 728,
          "id": {
            "type": "Identifier",
            "start": 719,
            "end": 721,
            "name": "re",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 724,
            "end": 728,
            "value": null,
            "raw": "/./g",
            "regex": {
              "flags": "g",
              "pattern": "."
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 729,
      "end": 762,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 733,
          "end": 762,
          "id": {
            "type": "Identifier",
            "start": 733,
            "end": 762,
            "name": "match",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 738,
              "end": 762,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 740,
                "end": 762,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 740,
                    "end": 755,
                    "typeName": {
                      "type": "Identifier",
                      "start": 740,
                      "end": 755,
                      "name": "RegExpExecArray",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 758,
                    "end": 762
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "WhileStatement",
      "start": 764,
      "end": 861,
      "test": {
        "type": "BinaryExpression",
        "start": 771,
        "end": 803,
        "left": {
          "type": "AssignmentExpression",
          "start": 772,
          "end": 794,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 772,
            "end": 777,
            "name": "match",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "CallExpression",
            "start": 780,
            "end": 794,
            "callee": {
              "type": "MemberExpression",
              "start": 780,
              "end": 787,
              "object": {
                "type": "Identifier",
                "start": 780,
                "end": 782,
                "name": "re",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 783,
                "end": 787,
                "name": "exec",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 788,
                "end": 793,
                "value": "xxx",
                "raw": "\"xxx\""
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        },
        "operator": "!=",
        "right": {
          "type": "Literal",
          "start": 799,
          "end": 803,
          "value": null,
          "raw": "null"
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 805,
        "end": 861,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 811,
            "end": 859,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 817,
                "end": 859,
                "id": {
                  "type": "Identifier",
                  "start": 817,
                  "end": 823,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 826,
                  "end": 859,
                  "left": {
                    "type": "MemberExpression",
                    "start": 826,
                    "end": 841,
                    "object": {
                      "type": "MemberExpression",
                      "start": 826,
                      "end": 834,
                      "object": {
                        "type": "Identifier",
                        "start": 826,
                        "end": 831,
                        "name": "match",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 832,
                        "end": 833,
                        "value": 1,
                        "raw": "1"
                      },
                      "computed": true,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 835,
                      "end": 841,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "start": 844,
                    "end": 859,
                    "object": {
                      "type": "MemberExpression",
                      "start": 844,
                      "end": 852,
                      "object": {
                        "type": "Identifier",
                        "start": 844,
                        "end": 849,
                        "name": "match",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 850,
                        "end": 851,
                        "value": 2,
                        "raw": "2"
                      },
                      "computed": true,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 853,
                      "end": 859,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
