__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldName",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 22
            },
            "init": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 25,
                      "end": 29
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "random",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 30,
                      "end": 36
                    },
                    "optional": false,
                    "computed": false,
                    "start": 25,
                    "end": 36
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 25,
                  "end": 38
                },
                "operator": ">",
                "right": {
                  "type": "Literal",
                  "value": 0.5,
                  "raw": "0.5",
                  "start": 41,
                  "end": 44
                },
                "start": 25,
                "end": 44
              },
              "consequent": {
                "type": "Literal",
                "value": "f1",
                "raw": "\"f1\"",
                "start": 47,
                "end": 51
              },
              "alternate": {
                "type": "Literal",
                "value": "f2",
                "raw": "\"f2\"",
                "start": 54,
                "end": 58
              },
              "start": 25,
              "end": 58
            },
            "definite": false,
            "start": 13,
            "end": 58
          }
        ],
        "declare": false,
        "start": 7,
        "end": 59
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 59
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "conatainer",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 83
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
                    "name": "fieldName",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 93,
                    "end": 102
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": "result",
                            "raw": "\"result\"",
                            "start": 123,
                            "end": 131
                          },
                          "start": 116,
                          "end": 132
                        }
                      ],
                      "start": 106,
                      "end": 138
                    },
                    "expression": false,
                    "start": 103,
                    "end": 138
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 92,
                  "end": 138
                }
              ],
              "start": 86,
              "end": 140
            },
            "definite": false,
            "start": 73,
            "end": 140
          }
        ],
        "declare": false,
        "start": 67,
        "end": 141
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 60,
      "end": 141
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "classFieldName",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 163
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 166,
                    "end": 170
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 171,
                    "end": 177
                  },
                  "optional": false,
                  "computed": false,
                  "start": 166,
                  "end": 177
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 166,
                "end": 179
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 182,
                "end": 185
              },
              "start": 166,
              "end": 185
            },
            "consequent": {
              "type": "Literal",
              "value": "g1",
              "raw": "\"g1\"",
              "start": 188,
              "end": 192
            },
            "alternate": {
              "type": "Literal",
              "value": "g2",
              "raw": "\"g2\"",
              "start": 195,
              "end": 199
            },
            "start": 166,
            "end": 199
          },
          "definite": false,
          "start": 149,
          "end": 199
        }
      ],
      "declare": false,
      "start": 143,
      "end": 200
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "otherField",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 217
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "classFieldName",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 234
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "g1",
                "raw": "\"g1\"",
                "start": 239,
                "end": 243
              },
              "start": 220,
              "end": 243
            },
            "consequent": {
              "type": "Literal",
              "value": "g2",
              "raw": "\"g2\"",
              "start": 246,
              "end": 250
            },
            "alternate": {
              "type": "Literal",
              "value": "g1",
              "raw": "\"g1\"",
              "start": 253,
              "end": 257
            },
            "start": 220,
            "end": 257
          },
          "definite": false,
          "start": 207,
          "end": 257
        }
      ],
      "declare": false,
      "start": 201,
      "end": 258
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "staticField",
            "optional": false,
            "typeAnnotation": null,
            "start": 265,
            "end": 276
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 279,
                    "end": 283
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 284,
                    "end": 290
                  },
                  "optional": false,
                  "computed": false,
                  "start": 279,
                  "end": 290
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 279,
                "end": 292
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 295,
                "end": 298
              },
              "start": 279,
              "end": 298
            },
            "consequent": {
              "type": "Literal",
              "value": "s1",
              "raw": "\"s1\"",
              "start": 301,
              "end": 305
            },
            "alternate": {
              "type": "Literal",
              "value": "s2",
              "raw": "\"s2\"",
              "start": 308,
              "end": 312
            },
            "start": 279,
            "end": 312
          },
          "definite": false,
          "start": 265,
          "end": 312
        }
      ],
      "declare": false,
      "start": 259,
      "end": 313
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Holder",
          "optional": false,
          "typeAnnotation": null,
          "start": 327,
          "end": 333
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
                "name": "classFieldName",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 355
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": "value",
                        "raw": "\"value\"",
                        "start": 376,
                        "end": 383
                      },
                      "start": 369,
                      "end": 384
                    }
                  ],
                  "start": 359,
                  "end": 390
                },
                "expression": false,
                "start": 356,
                "end": 390
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 340,
              "end": 390
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "otherField",
                "optional": false,
                "typeAnnotation": null,
                "start": 396,
                "end": 406
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 42,
                        "raw": "42",
                        "start": 427,
                        "end": 429
                      },
                      "start": 420,
                      "end": 430
                    }
                  ],
                  "start": 410,
                  "end": 436
                },
                "expression": false,
                "start": 407,
                "end": 436
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 395,
              "end": 436
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "staticField",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 460
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "static",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 483,
                              "end": 489
                            },
                            "value": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 491,
                              "end": 495
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 483,
                            "end": 495
                          }
                        ],
                        "start": 481,
                        "end": 497
                      },
                      "start": 474,
                      "end": 498
                    }
                  ],
                  "start": 464,
                  "end": 504
                },
                "expression": false,
                "start": 461,
                "end": 504
              },
              "kind": "method",
              "computed": true,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 441,
              "end": 504
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "staticField",
                "optional": false,
                "typeAnnotation": null,
                "start": 517,
                "end": 528
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
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "static",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 551,
                              "end": 557
                            },
                            "value": {
                              "type": "Literal",
                              "value": "sometimes",
                              "raw": "\"sometimes\"",
                              "start": 559,
                              "end": 570
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 551,
                            "end": 570
                          }
                        ],
                        "start": 549,
                        "end": 572
                      },
                      "start": 542,
                      "end": 573
                    }
                  ],
                  "start": 532,
                  "end": 579
                },
                "expression": false,
                "start": 529,
                "end": 579
              },
              "kind": "method",
              "computed": true,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 509,
              "end": 579
            }
          ],
          "start": 334,
          "end": 581
        },
        "abstract": false,
        "declare": false,
        "start": 321,
        "end": 581
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 314,
      "end": 581
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticLookup",
              "optional": false,
              "typeAnnotation": null,
              "start": 687,
              "end": 699
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Holder",
                "optional": false,
                "typeAnnotation": null,
                "start": 702,
                "end": 708
              },
              "property": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "some",
                  "raw": "\"some\"",
                  "start": 709,
                  "end": 715
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": "thing",
                  "raw": "\"thing\"",
                  "start": 718,
                  "end": 725
                },
                "start": 709,
                "end": 725
              },
              "optional": false,
              "computed": true,
              "start": 702,
              "end": 726
            },
            "definite": false,
            "start": 687,
            "end": 726
          }
        ],
        "declare": false,
        "start": 681,
        "end": 727
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 674,
      "end": 727
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "instanceLookup",
              "optional": false,
              "typeAnnotation": null,
              "start": 741,
              "end": 755
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Holder",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 763,
                  "end": 769
                },
                "typeArguments": null,
                "arguments": [],
                "start": 759,
                "end": 771
              },
              "property": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "some",
                  "raw": "\"some\"",
                  "start": 773,
                  "end": 779
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": "thing",
                  "raw": "\"thing\"",
                  "start": 782,
                  "end": 789
                },
                "start": 773,
                "end": 789
              },
              "optional": false,
              "computed": true,
              "start": 758,
              "end": 790
            },
            "definite": false,
            "start": 741,
            "end": 790
          }
        ],
        "declare": false,
        "start": 735,
        "end": 791
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 728,
      "end": 791
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 791
}
```
