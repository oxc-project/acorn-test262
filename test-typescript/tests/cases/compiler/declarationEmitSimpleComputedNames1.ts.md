__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 792,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 59,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 59,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 58,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 22,
              "name": "fieldName",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ConditionalExpression",
              "start": 25,
              "end": 58,
              "test": {
                "type": "BinaryExpression",
                "start": 25,
                "end": 44,
                "left": {
                  "type": "CallExpression",
                  "start": 25,
                  "end": 38,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 25,
                    "end": 36,
                    "object": {
                      "type": "Identifier",
                      "start": 25,
                      "end": 29,
                      "name": "Math",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 30,
                      "end": 36,
                      "name": "random",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "operator": ">",
                "right": {
                  "type": "Literal",
                  "start": 41,
                  "end": 44,
                  "value": 0.5,
                  "raw": "0.5"
                }
              },
              "consequent": {
                "type": "Literal",
                "start": 47,
                "end": 51,
                "value": "f1",
                "raw": "\"f1\""
              },
              "alternate": {
                "type": "Literal",
                "start": 54,
                "end": 58,
                "value": "f2",
                "raw": "\"f2\""
              }
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 60,
      "end": 141,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 67,
        "end": 141,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 73,
            "end": 140,
            "id": {
              "type": "Identifier",
              "start": 73,
              "end": 83,
              "name": "conatainer",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 86,
              "end": 140,
              "properties": [
                {
                  "type": "Property",
                  "start": 92,
                  "end": 138,
                  "method": true,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 102,
                    "name": "fieldName",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 103,
                    "end": 138,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 106,
                      "end": 138,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 116,
                          "end": 132,
                          "argument": {
                            "type": "Literal",
                            "start": 123,
                            "end": 131,
                            "value": "result",
                            "raw": "\"result\""
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 143,
      "end": 200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 199,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 163,
            "name": "classFieldName",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 166,
            "end": 199,
            "test": {
              "type": "BinaryExpression",
              "start": 166,
              "end": 185,
              "left": {
                "type": "CallExpression",
                "start": 166,
                "end": 179,
                "callee": {
                  "type": "MemberExpression",
                  "start": 166,
                  "end": 177,
                  "object": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 170,
                    "name": "Math",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 177,
                    "name": "random",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "start": 182,
                "end": 185,
                "value": 0.5,
                "raw": "0.5"
              }
            },
            "consequent": {
              "type": "Literal",
              "start": 188,
              "end": 192,
              "value": "g1",
              "raw": "\"g1\""
            },
            "alternate": {
              "type": "Literal",
              "start": 195,
              "end": 199,
              "value": "g2",
              "raw": "\"g2\""
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
      "start": 201,
      "end": 258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 207,
          "end": 257,
          "id": {
            "type": "Identifier",
            "start": 207,
            "end": 217,
            "name": "otherField",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 220,
            "end": 257,
            "test": {
              "type": "BinaryExpression",
              "start": 220,
              "end": 243,
              "left": {
                "type": "Identifier",
                "start": 220,
                "end": 234,
                "name": "classFieldName",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 239,
                "end": 243,
                "value": "g1",
                "raw": "\"g1\""
              }
            },
            "consequent": {
              "type": "Literal",
              "start": 246,
              "end": 250,
              "value": "g2",
              "raw": "\"g2\""
            },
            "alternate": {
              "type": "Literal",
              "start": 253,
              "end": 257,
              "value": "g1",
              "raw": "\"g1\""
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
      "start": 259,
      "end": 313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 265,
          "end": 312,
          "id": {
            "type": "Identifier",
            "start": 265,
            "end": 276,
            "name": "staticField",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 279,
            "end": 312,
            "test": {
              "type": "BinaryExpression",
              "start": 279,
              "end": 298,
              "left": {
                "type": "CallExpression",
                "start": 279,
                "end": 292,
                "callee": {
                  "type": "MemberExpression",
                  "start": 279,
                  "end": 290,
                  "object": {
                    "type": "Identifier",
                    "start": 279,
                    "end": 283,
                    "name": "Math",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 284,
                    "end": 290,
                    "name": "random",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "start": 295,
                "end": 298,
                "value": 0.5,
                "raw": "0.5"
              }
            },
            "consequent": {
              "type": "Literal",
              "start": 301,
              "end": 305,
              "value": "s1",
              "raw": "\"s1\""
            },
            "alternate": {
              "type": "Literal",
              "start": 308,
              "end": 312,
              "value": "s2",
              "raw": "\"s2\""
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 314,
      "end": 581,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 321,
        "end": 581,
        "id": {
          "type": "Identifier",
          "start": 327,
          "end": 333,
          "name": "Holder",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 334,
          "end": 581,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 340,
              "end": 390,
              "static": false,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 341,
                "end": 355,
                "name": "classFieldName",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 356,
                "end": 390,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 359,
                  "end": 390,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 369,
                      "end": 384,
                      "argument": {
                        "type": "Literal",
                        "start": 376,
                        "end": 383,
                        "value": "value",
                        "raw": "\"value\""
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 395,
              "end": 436,
              "static": false,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 396,
                "end": 406,
                "name": "otherField",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 407,
                "end": 436,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 410,
                  "end": 436,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 420,
                      "end": 430,
                      "argument": {
                        "type": "Literal",
                        "start": 427,
                        "end": 429,
                        "value": 42,
                        "raw": "42"
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 441,
              "end": 504,
              "static": true,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 449,
                "end": 460,
                "name": "staticField",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 461,
                "end": 504,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 464,
                  "end": 504,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 474,
                      "end": 498,
                      "argument": {
                        "type": "ObjectExpression",
                        "start": 481,
                        "end": 497,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 483,
                            "end": 495,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 483,
                              "end": 489,
                              "name": "static",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 491,
                              "end": 495,
                              "value": true,
                              "raw": "true"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 509,
              "end": 579,
              "static": true,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 517,
                "end": 528,
                "name": "staticField",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 529,
                "end": 579,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 532,
                  "end": 579,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 542,
                      "end": 573,
                      "argument": {
                        "type": "ObjectExpression",
                        "start": 549,
                        "end": 572,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 551,
                            "end": 570,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 551,
                              "end": 557,
                              "name": "static",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 559,
                              "end": 570,
                              "value": "sometimes",
                              "raw": "\"sometimes\""
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 674,
      "end": 727,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 681,
        "end": 727,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 687,
            "end": 726,
            "id": {
              "type": "Identifier",
              "start": 687,
              "end": 699,
              "name": "staticLookup",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 702,
              "end": 726,
              "object": {
                "type": "Identifier",
                "start": 702,
                "end": 708,
                "name": "Holder",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "BinaryExpression",
                "start": 709,
                "end": 725,
                "left": {
                  "type": "Literal",
                  "start": 709,
                  "end": 715,
                  "value": "some",
                  "raw": "\"some\""
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 718,
                  "end": 725,
                  "value": "thing",
                  "raw": "\"thing\""
                }
              },
              "computed": true,
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 728,
      "end": 791,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 735,
        "end": 791,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 741,
            "end": 790,
            "id": {
              "type": "Identifier",
              "start": 741,
              "end": 755,
              "name": "instanceLookup",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 758,
              "end": 790,
              "object": {
                "type": "NewExpression",
                "start": 759,
                "end": 771,
                "callee": {
                  "type": "Identifier",
                  "start": 763,
                  "end": 769,
                  "name": "Holder",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "BinaryExpression",
                "start": 773,
                "end": 789,
                "left": {
                  "type": "Literal",
                  "start": 773,
                  "end": 779,
                  "value": "some",
                  "raw": "\"some\""
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 782,
                  "end": 789,
                  "value": "thing",
                  "raw": "\"thing\""
                }
              },
              "computed": true,
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
