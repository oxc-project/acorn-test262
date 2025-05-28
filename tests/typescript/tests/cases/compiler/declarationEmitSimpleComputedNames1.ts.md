__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 791,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 59,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 59,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 58,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 22,
              "decorators": [],
              "name": "fieldName",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 30,
                      "end": 36,
                      "decorators": [],
                      "name": "random",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 60,
      "end": 141,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 67,
        "end": 141,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 73,
            "end": 140,
            "id": {
              "type": "Identifier",
              "start": 73,
              "end": 83,
              "decorators": [],
              "name": "conatainer",
              "optional": false,
              "typeAnnotation": null
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 102,
                    "decorators": [],
                    "name": "fieldName",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 103,
                    "end": 138,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                    "expression": false
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 143,
      "end": 200,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 199,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 163,
            "decorators": [],
            "name": "classFieldName",
            "optional": false,
            "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 177,
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 201,
      "end": 258,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 207,
          "end": 257,
          "id": {
            "type": "Identifier",
            "start": 207,
            "end": 217,
            "decorators": [],
            "name": "otherField",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "classFieldName",
                "optional": false,
                "typeAnnotation": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 259,
      "end": 313,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 265,
          "end": 312,
          "id": {
            "type": "Identifier",
            "start": 265,
            "end": 276,
            "decorators": [],
            "name": "staticField",
            "optional": false,
            "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 284,
                    "end": 290,
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 327,
          "end": 333,
          "decorators": [],
          "name": "Holder",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 334,
          "end": 581,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 340,
              "end": 390,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 341,
                "end": 355,
                "decorators": [],
                "name": "classFieldName",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 356,
                "end": 390,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "expression": false
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 395,
              "end": 436,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 396,
                "end": 406,
                "decorators": [],
                "name": "otherField",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 407,
                "end": 436,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "expression": false
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 441,
              "end": 504,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 449,
                "end": 460,
                "decorators": [],
                "name": "staticField",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 461,
                "end": 504,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 483,
                              "end": 489,
                              "decorators": [],
                              "name": "static",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 491,
                              "end": 495,
                              "value": true,
                              "raw": "true"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": true,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 509,
              "end": 579,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 517,
                "end": 528,
                "decorators": [],
                "name": "staticField",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 529,
                "end": 579,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 551,
                              "end": 557,
                              "decorators": [],
                              "name": "static",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 559,
                              "end": 570,
                              "value": "sometimes",
                              "raw": "\"sometimes\""
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": true,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 674,
      "end": 727,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 681,
        "end": 727,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 687,
            "end": 726,
            "id": {
              "type": "Identifier",
              "start": 687,
              "end": 699,
              "decorators": [],
              "name": "staticLookup",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 702,
              "end": 726,
              "object": {
                "type": "Identifier",
                "start": 702,
                "end": 708,
                "decorators": [],
                "name": "Holder",
                "optional": false,
                "typeAnnotation": null
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
              "optional": false,
              "computed": true
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 728,
      "end": 791,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 735,
        "end": 791,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 741,
            "end": 790,
            "id": {
              "type": "Identifier",
              "start": 741,
              "end": 755,
              "decorators": [],
              "name": "instanceLookup",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "Holder",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
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
              "optional": false,
              "computed": true
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
