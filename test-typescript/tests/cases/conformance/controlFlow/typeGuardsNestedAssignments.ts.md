typeGuardsNestedAssignments.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 28,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 26,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 30,
      "end": 74,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 59,
        "decorators": [],
        "name": "getFooOrNull",
        "optional": false
      },
      "params": [],
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
                "decorators": [],
                "name": "Foo",
                "optional": false
              }
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 115,
        "decorators": [],
        "name": "getStringOrNumberOrNull",
        "optional": false
      },
      "params": [],
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
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 183,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
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
                            "decorators": [],
                            "name": "Foo",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 179,
                          "end": 183
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 189,
            "end": 254,
            "alternate": null,
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
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 193,
              "end": 224,
              "operator": "!==",
              "left": {
                "type": "AssignmentExpression",
                "start": 194,
                "end": 214,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 197,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "right": {
                  "type": "CallExpression",
                  "start": 200,
                  "end": 214,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 212,
                    "decorators": [],
                    "name": "getFooOrNull",
                    "optional": false
                  },
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 220,
                "end": 224,
                "raw": "null",
                "value": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 155,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 258,
      "end": 441,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 298,
                  "decorators": [],
                  "name": "foo1",
                  "optional": false,
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
                            "decorators": [],
                            "name": "Foo",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 294,
                          "end": 298
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 308,
                  "end": 324,
                  "decorators": [],
                  "name": "foo2",
                  "optional": false,
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
                            "decorators": [],
                            "name": "Foo",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 320,
                          "end": 324
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 330,
            "end": 439,
            "alternate": null,
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
                    "decorators": [],
                    "name": "foo1",
                    "optional": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 420,
                  "end": 425,
                  "expression": {
                    "type": "Identifier",
                    "start": 420,
                    "end": 424,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 334,
              "end": 379,
              "operator": "!==",
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
                      "decorators": [],
                      "name": "foo1",
                      "optional": false
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 342,
                      "end": 356,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 342,
                        "end": 354,
                        "decorators": [],
                        "name": "getFooOrNull",
                        "optional": false
                      },
                      "optional": false
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
                      "decorators": [],
                      "name": "foo2",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 365,
                      "end": 369,
                      "decorators": [],
                      "name": "foo1",
                      "optional": false
                    }
                  }
                ]
              },
              "right": {
                "type": "Literal",
                "start": 375,
                "end": 379,
                "raw": "null",
                "value": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 267,
        "end": 269,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 443,
      "end": 556,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 467,
                  "end": 485,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
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
                            "decorators": [],
                            "name": "Object",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 481,
                          "end": 485
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 491,
            "end": 554,
            "alternate": null,
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
                    "decorators": [],
                    "name": "obj",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 495,
              "end": 532,
              "operator": "instanceof",
              "left": {
                "type": "AssignmentExpression",
                "start": 496,
                "end": 516,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 496,
                  "end": 499,
                  "decorators": [],
                  "name": "obj",
                  "optional": false
                },
                "right": {
                  "type": "CallExpression",
                  "start": 502,
                  "end": 516,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 502,
                    "end": 514,
                    "decorators": [],
                    "name": "getFooOrNull",
                    "optional": false
                  },
                  "optional": false
                }
              },
              "right": {
                "type": "Identifier",
                "start": 529,
                "end": 532,
                "decorators": [],
                "name": "Foo",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 452,
        "end": 454,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 558,
      "end": 690,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 582,
                  "end": 607,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 613,
            "end": 688,
            "alternate": null,
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
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 617,
              "end": 668,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 617,
                "end": 655,
                "argument": {
                  "type": "AssignmentExpression",
                  "start": 625,
                  "end": 654,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 625,
                    "end": 626,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "CallExpression",
                    "start": 629,
                    "end": 654,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 629,
                      "end": 652,
                      "decorators": [],
                      "name": "getStringOrNumberOrNull",
                      "optional": false
                    },
                    "optional": false
                  }
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 660,
                "end": 668,
                "raw": "\"number\"",
                "value": "number"
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 567,
        "end": 569,
        "decorators": [],
        "name": "f4",
        "optional": false
      },
      "params": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 719,
            "end": 721,
            "decorators": [],
            "name": "re",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 724,
            "end": 728,
            "raw": "/./g",
            "regex": {
              "flags": "g",
              "pattern": "."
            },
            "value": {}
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 733,
            "end": 762,
            "decorators": [],
            "name": "match",
            "optional": false,
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
                      "decorators": [],
                      "name": "RegExpExecArray",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 758,
                    "end": 762
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "WhileStatement",
      "start": 764,
      "end": 861,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 817,
                  "end": 823,
                  "decorators": [],
                  "name": "length",
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 826,
                  "end": 859,
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "start": 826,
                    "end": 841,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 826,
                      "end": 834,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 826,
                        "end": 831,
                        "decorators": [],
                        "name": "match",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 832,
                        "end": 833,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 835,
                      "end": 841,
                      "decorators": [],
                      "name": "length",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "start": 844,
                    "end": 859,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 844,
                      "end": 852,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 844,
                        "end": 849,
                        "decorators": [],
                        "name": "match",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 850,
                        "end": 851,
                        "raw": "2",
                        "value": 2
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 853,
                      "end": 859,
                      "decorators": [],
                      "name": "length",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 771,
        "end": 803,
        "operator": "!=",
        "left": {
          "type": "AssignmentExpression",
          "start": 772,
          "end": 794,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 772,
            "end": 777,
            "decorators": [],
            "name": "match",
            "optional": false
          },
          "right": {
            "type": "CallExpression",
            "start": 780,
            "end": 794,
            "arguments": [
              {
                "type": "Literal",
                "start": 788,
                "end": 793,
                "raw": "\"xxx\"",
                "value": "xxx"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 780,
              "end": 787,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 780,
                "end": 782,
                "decorators": [],
                "name": "re",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 783,
                "end": 787,
                "decorators": [],
                "name": "exec",
                "optional": false
              }
            },
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 799,
          "end": 803,
          "raw": "null",
          "value": null
        }
      }
    }
  ],
  "sourceType": "script"
}
```
