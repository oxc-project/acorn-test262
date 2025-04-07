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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 59,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 58,
            "definite": false,
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
              "alternate": {
                "type": "Literal",
                "start": 54,
                "end": 58,
                "raw": "\"f2\"",
                "value": "f2"
              },
              "consequent": {
                "type": "Literal",
                "start": 47,
                "end": 51,
                "raw": "\"f1\"",
                "value": "f1"
              },
              "test": {
                "type": "BinaryExpression",
                "start": 25,
                "end": 44,
                "operator": ">",
                "left": {
                  "type": "CallExpression",
                  "start": 25,
                  "end": 38,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 25,
                    "end": 36,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 25,
                      "end": 29,
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 30,
                      "end": 36,
                      "decorators": [],
                      "name": "random",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "right": {
                  "type": "Literal",
                  "start": 41,
                  "end": 44,
                  "raw": "0.5",
                  "value": 0.5
                }
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 60,
      "end": 141,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 67,
        "end": 141,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 73,
            "end": 140,
            "definite": false,
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
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 102,
                    "decorators": [],
                    "name": "fieldName",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 103,
                    "end": 138,
                    "async": false,
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
                            "raw": "\"result\"",
                            "value": "result"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
          "definite": false,
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
            "alternate": {
              "type": "Literal",
              "start": 195,
              "end": 199,
              "raw": "\"g2\"",
              "value": "g2"
            },
            "consequent": {
              "type": "Literal",
              "start": 188,
              "end": 192,
              "raw": "\"g1\"",
              "value": "g1"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 166,
              "end": 185,
              "operator": ">",
              "left": {
                "type": "CallExpression",
                "start": 166,
                "end": 179,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 166,
                  "end": 177,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 170,
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 177,
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "right": {
                "type": "Literal",
                "start": 182,
                "end": 185,
                "raw": "0.5",
                "value": 0.5
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "alternate": {
              "type": "Literal",
              "start": 253,
              "end": 257,
              "raw": "\"g1\"",
              "value": "g1"
            },
            "consequent": {
              "type": "Literal",
              "start": 246,
              "end": 250,
              "raw": "\"g2\"",
              "value": "g2"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 220,
              "end": 243,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 220,
                "end": 234,
                "decorators": [],
                "name": "classFieldName",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 239,
                "end": 243,
                "raw": "\"g1\"",
                "value": "g1"
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
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
            "alternate": {
              "type": "Literal",
              "start": 308,
              "end": 312,
              "raw": "\"s2\"",
              "value": "s2"
            },
            "consequent": {
              "type": "Literal",
              "start": 301,
              "end": 305,
              "raw": "\"s1\"",
              "value": "s1"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 279,
              "end": 298,
              "operator": ">",
              "left": {
                "type": "CallExpression",
                "start": 279,
                "end": 292,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 279,
                  "end": 290,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 279,
                    "end": 283,
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 284,
                    "end": 290,
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "right": {
                "type": "Literal",
                "start": 295,
                "end": 298,
                "raw": "0.5",
                "value": 0.5
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 314,
      "end": 581,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 321,
        "end": 581,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 334,
          "end": 581,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 340,
              "end": 390,
              "accessibility": null,
              "computed": true,
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
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 356,
                "end": 390,
                "async": false,
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
                        "raw": "\"value\"",
                        "value": "value"
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 395,
              "end": 436,
              "accessibility": null,
              "computed": true,
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
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 407,
                "end": 436,
                "async": false,
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
                        "raw": "42",
                        "value": 42
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 441,
              "end": 504,
              "accessibility": null,
              "computed": true,
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
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 461,
                "end": 504,
                "async": false,
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
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 483,
                              "end": 489,
                              "decorators": [],
                              "name": "static",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 491,
                              "end": 495,
                              "raw": "true",
                              "value": true
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 509,
              "end": 579,
              "accessibility": null,
              "computed": true,
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
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 529,
                "end": 579,
                "async": false,
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
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 551,
                              "end": 557,
                              "decorators": [],
                              "name": "static",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 559,
                              "end": 570,
                              "raw": "\"sometimes\"",
                              "value": "sometimes"
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
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
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 674,
      "end": 727,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 681,
        "end": 727,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 687,
            "end": 726,
            "definite": false,
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
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 702,
                "end": 708,
                "decorators": [],
                "name": "Holder",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "BinaryExpression",
                "start": 709,
                "end": 725,
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "start": 709,
                  "end": 715,
                  "raw": "\"some\"",
                  "value": "some"
                },
                "right": {
                  "type": "Literal",
                  "start": 718,
                  "end": 725,
                  "raw": "\"thing\"",
                  "value": "thing"
                }
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 728,
      "end": 791,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 735,
        "end": 791,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 741,
            "end": 790,
            "definite": false,
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
              "computed": true,
              "object": {
                "type": "NewExpression",
                "start": 759,
                "end": 771,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 763,
                  "end": 769,
                  "decorators": [],
                  "name": "Holder",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "BinaryExpression",
                "start": 773,
                "end": 789,
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "start": 773,
                  "end": 779,
                  "raw": "\"some\"",
                  "value": "some"
                },
                "right": {
                  "type": "Literal",
                  "start": 782,
                  "end": 789,
                  "raw": "\"thing\"",
                  "value": "thing"
                }
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
