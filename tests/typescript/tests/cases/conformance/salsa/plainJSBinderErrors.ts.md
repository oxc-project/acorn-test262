__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 680,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 17,
      "declaration": {
        "type": "Literal",
        "start": 15,
        "end": 17,
        "value": 12,
        "raw": "12"
      },
      "exportKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 18,
      "end": 35,
      "declaration": {
        "type": "Literal",
        "start": 33,
        "end": 35,
        "value": 13,
        "raw": "13"
      },
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 51,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 51,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 47,
            "decorators": [],
            "name": "await",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 50,
            "end": 51,
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
      "start": 52,
      "end": 67,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 67,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 63,
            "decorators": [],
            "name": "yield",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 66,
            "end": 67,
            "value": 2,
            "raw": "2"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 68,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 87,
        "end": 110,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 93,
            "end": 108,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 99,
                "end": 108,
                "id": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 104,
                  "decorators": [],
                  "name": "await",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 107,
                  "end": 108,
                  "value": 3,
                  "raw": "3"
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 111,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 122,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 125,
        "end": 148,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 131,
            "end": 146,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 137,
                "end": 146,
                "id": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 142,
                  "decorators": [],
                  "name": "yield",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 145,
                  "end": 146,
                  "value": 4,
                  "raw": "4"
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 149,
      "end": 644,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 156,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 157,
        "end": 644,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 163,
            "end": 179,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 163,
              "end": 175,
              "name": "constructor"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 178,
              "end": 179,
              "value": 5,
              "raw": "5"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 184,
            "end": 324,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 184,
              "end": 191,
              "decorators": [],
              "name": "deleted",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 191,
              "end": 324,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 194,
                "end": 324,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 204,
                    "end": 258,
                    "id": {
                      "type": "Identifier",
                      "start": 213,
                      "end": 222,
                      "decorators": [],
                      "name": "container",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 223,
                        "end": 224,
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 226,
                      "end": 258,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 240,
                          "end": 248,
                          "expression": {
                            "type": "UnaryExpression",
                            "start": 240,
                            "end": 248,
                            "operator": "delete",
                            "argument": {
                              "type": "Identifier",
                              "start": 247,
                              "end": 248,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "prefix": true
                          },
                          "directive": null
                        }
                      ]
                    },
                    "expression": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 267,
                    "end": 276,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 271,
                        "end": 276,
                        "id": {
                          "type": "Identifier",
                          "start": 271,
                          "end": 272,
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 275,
                          "end": 276,
                          "value": 6,
                          "raw": "6"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 285,
                    "end": 293,
                    "expression": {
                      "type": "UnaryExpression",
                      "start": 285,
                      "end": 293,
                      "operator": "delete",
                      "argument": {
                        "type": "Identifier",
                        "start": 292,
                        "end": 293,
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "prefix": true
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 302,
                    "end": 318,
                    "expression": {
                      "type": "UnaryExpression",
                      "start": 302,
                      "end": 318,
                      "operator": "delete",
                      "argument": {
                        "type": "Identifier",
                        "start": 309,
                        "end": 318,
                        "decorators": [],
                        "name": "container",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "prefix": true
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 329,
            "end": 403,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 329,
              "end": 342,
              "decorators": [],
              "name": "evalArguments",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 342,
              "end": 403,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 345,
                "end": 403,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 355,
                    "end": 369,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 361,
                        "end": 369,
                        "id": {
                          "type": "Identifier",
                          "start": 361,
                          "end": 365,
                          "decorators": [],
                          "name": "eval",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 368,
                          "end": 369,
                          "value": 7,
                          "raw": "7"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 378,
                    "end": 397,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 384,
                        "end": 397,
                        "id": {
                          "type": "Identifier",
                          "start": 384,
                          "end": 393,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 396,
                          "end": 397,
                          "value": 8,
                          "raw": "8"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 408,
            "end": 524,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 408,
              "end": 417,
              "decorators": [],
              "name": "withOctal",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 417,
              "end": 524,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 420,
                "end": 524,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 430,
                    "end": 452,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 436,
                        "end": 452,
                        "id": {
                          "type": "Identifier",
                          "start": 436,
                          "end": 445,
                          "decorators": [],
                          "name": "redundant",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 448,
                          "end": 452,
                          "value": 8,
                          "raw": "0o10"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "WithStatement",
                    "start": 461,
                    "end": 518,
                    "object": {
                      "type": "Identifier",
                      "start": 467,
                      "end": 476,
                      "decorators": [],
                      "name": "redundant",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 478,
                      "end": 518,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 492,
                          "end": 508,
                          "argument": {
                            "type": "CallExpression",
                            "start": 499,
                            "end": 508,
                            "callee": {
                              "type": "Identifier",
                              "start": 499,
                              "end": 506,
                              "decorators": [],
                              "name": "toFixed",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 529,
            "end": 642,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 529,
              "end": 534,
              "decorators": [],
              "name": "label",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 534,
              "end": 642,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 537,
                "end": 642,
                "body": [
                  {
                    "type": "ForStatement",
                    "start": 547,
                    "end": 619,
                    "init": null,
                    "test": null,
                    "update": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 555,
                      "end": 619,
                      "body": [
                        {
                          "type": "LabeledStatement",
                          "start": 569,
                          "end": 585,
                          "label": {
                            "type": "Identifier",
                            "start": 569,
                            "end": 574,
                            "decorators": [],
                            "name": "label",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "body": {
                            "type": "VariableDeclaration",
                            "start": 576,
                            "end": 585,
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 580,
                                "end": 585,
                                "id": {
                                  "type": "Identifier",
                                  "start": 580,
                                  "end": 581,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "Literal",
                                  "start": 584,
                                  "end": 585,
                                  "value": 1,
                                  "raw": "1"
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
                          }
                        },
                        {
                          "type": "BreakStatement",
                          "start": 598,
                          "end": 609,
                          "label": {
                            "type": "Identifier",
                            "start": 604,
                            "end": 609,
                            "decorators": [],
                            "name": "label",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 628,
                    "end": 636,
                    "argument": {
                      "type": "Identifier",
                      "start": 635,
                      "end": 636,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
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
      "type": "VariableDeclaration",
      "start": 645,
      "end": 659,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 651,
          "end": 659,
          "id": {
            "type": "Identifier",
            "start": 651,
            "end": 655,
            "decorators": [],
            "name": "eval",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 658,
            "end": 659,
            "value": 9,
            "raw": "9"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 660,
      "end": 680,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 666,
          "end": 680,
          "id": {
            "type": "Identifier",
            "start": 666,
            "end": 675,
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 678,
            "end": 680,
            "value": 10,
            "raw": "10"
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
