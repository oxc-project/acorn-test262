__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 580,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 580,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 580,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 27,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 18,
              "decorators": [],
              "name": "_bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 26,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 20,
                "end": 26
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 32,
            "end": 41,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 35,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 35,
              "end": 41,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 41,
                "body": []
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
            "start": 46,
            "end": 69,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 47,
              "end": 62,
              "raw": "\"computedName1\"",
              "value": "computedName1",
              "regex": null,
              "bigint": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 63,
              "end": 69,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 66,
                "end": 69,
                "body": []
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
            "start": 74,
            "end": 106,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 75,
              "end": 90,
              "raw": "\"computedName2\"",
              "value": "computedName2",
              "regex": null,
              "bigint": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 91,
              "end": 106,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 106,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 92,
                  "end": 101,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 93,
                    "end": 101,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 95,
                      "end": 101
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 111,
            "end": 161,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 112,
              "end": 127,
              "raw": "\"computedName3\"",
              "value": "computedName3",
              "regex": null,
              "bigint": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 128,
              "end": 161,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 148,
                "end": 161,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 150,
                    "end": 159,
                    "argument": {
                      "type": "Literal",
                      "start": 157,
                      "end": 158,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 129,
                  "end": 138,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 130,
                    "end": 138,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 132,
                      "end": 138
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 139,
                "end": 147,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 141,
                  "end": 147
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 166,
            "end": 213,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 166,
              "end": 169,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 169,
              "end": 213,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 180,
                "end": 213,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 190,
                    "end": 207,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 197,
                      "end": 206,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 197,
                        "end": 201
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 202,
                        "end": 206,
                        "decorators": [],
                        "name": "_bar",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 171,
                "end": 179,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 173,
                  "end": 179
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 219,
            "end": 281,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 219,
              "end": 222,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 222,
              "end": 281,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 250,
                "end": 281,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 260,
                    "end": 275,
                    "argument": {
                      "type": "Literal",
                      "start": 267,
                      "end": 274,
                      "raw": "\"HELLO\"",
                      "value": "HELLO",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 223,
                  "end": 229,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 224,
                    "end": 229,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 226,
                      "end": 229
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 231,
                  "end": 240,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 232,
                    "end": 240,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 234,
                      "end": 240
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 241,
                "end": 249,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 243,
                  "end": 249
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 286,
            "end": 316,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 294,
              "end": 309,
              "raw": "\"computedname4\"",
              "value": "computedname4",
              "regex": null,
              "bigint": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 310,
              "end": 316,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 313,
                "end": 316,
                "body": []
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
            "start": 321,
            "end": 360,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 329,
              "end": 344,
              "raw": "\"computedname5\"",
              "value": "computedname5",
              "regex": null,
              "bigint": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 345,
              "end": 360,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 357,
                "end": 360,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 346,
                  "end": 355,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 347,
                    "end": 355,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 349,
                      "end": 355
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 365,
            "end": 426,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 373,
              "end": 388,
              "raw": "\"computedname6\"",
              "value": "computedname6",
              "regex": null,
              "bigint": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 389,
              "end": 426,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 410,
                "end": 426,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 412,
                    "end": 424,
                    "argument": {
                      "type": "Literal",
                      "start": 419,
                      "end": 423,
                      "raw": "true",
                      "value": true,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 390,
                  "end": 399,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 391,
                    "end": 399,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 393,
                      "end": 399
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 400,
                "end": 409,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 402,
                  "end": 409
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 431,
            "end": 500,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 438,
              "end": 450,
              "decorators": [],
              "name": "staticMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 450,
              "end": 500,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 453,
                "end": 500,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 463,
                    "end": 477,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 467,
                        "end": 476,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 467,
                          "end": 468,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "start": 471,
                          "end": 476,
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "start": 471,
                            "end": 472,
                            "raw": "1",
                            "value": 1,
                            "regex": null,
                            "bigint": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 475,
                            "end": 476,
                            "raw": "2",
                            "value": 2,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 486,
                    "end": 494,
                    "argument": {
                      "type": "Identifier",
                      "start": 493,
                      "end": 494,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
            "start": 505,
            "end": 530,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 512,
              "end": 515,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 515,
              "end": 530,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 527,
                "end": 530,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 516,
                  "end": 525,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 517,
                    "end": 525,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 519,
                      "end": 525
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 535,
            "end": 578,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 542,
              "end": 545,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 545,
              "end": 578,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 565,
                "end": 578,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 567,
                    "end": 576,
                    "argument": {
                      "type": "Literal",
                      "start": 574,
                      "end": 575,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 546,
                  "end": 555,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 547,
                    "end": 555,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 549,
                      "end": 555
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 556,
                "end": 564,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 558,
                  "end": 564
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
