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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 580,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 27,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 18,
              "decorators": [],
              "name": "_bar",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
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
            "start": 32,
            "end": 41,
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
            "value": {
              "type": "FunctionExpression",
              "start": 35,
              "end": 41,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 41,
                "body": []
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
            "start": 46,
            "end": 69,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 47,
              "end": 62,
              "value": "computedName1",
              "raw": "\"computedName1\""
            },
            "value": {
              "type": "FunctionExpression",
              "start": 63,
              "end": 69,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 66,
                "end": 69,
                "body": []
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
            "start": 74,
            "end": 106,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 75,
              "end": 90,
              "value": "computedName2",
              "raw": "\"computedName2\""
            },
            "value": {
              "type": "FunctionExpression",
              "start": 91,
              "end": 106,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 106,
                "body": []
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
            "start": 111,
            "end": 161,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 112,
              "end": 127,
              "value": "computedName3",
              "raw": "\"computedName3\""
            },
            "value": {
              "type": "FunctionExpression",
              "start": 128,
              "end": 161,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                      "value": 1,
                      "raw": "1"
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
            "start": 166,
            "end": 213,
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
            "value": {
              "type": "FunctionExpression",
              "start": 169,
              "end": 213,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 197,
                        "end": 201
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 202,
                        "end": 206,
                        "decorators": [],
                        "name": "_bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
            "start": 219,
            "end": 281,
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
            "value": {
              "type": "FunctionExpression",
              "start": 222,
              "end": 281,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                      "value": "HELLO",
                      "raw": "\"HELLO\""
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
            "start": 286,
            "end": 316,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 294,
              "end": 309,
              "value": "computedname4",
              "raw": "\"computedname4\""
            },
            "value": {
              "type": "FunctionExpression",
              "start": 310,
              "end": 316,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 313,
                "end": 316,
                "body": []
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
            "start": 321,
            "end": 360,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 329,
              "end": 344,
              "value": "computedname5",
              "raw": "\"computedname5\""
            },
            "value": {
              "type": "FunctionExpression",
              "start": 345,
              "end": 360,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 357,
                "end": 360,
                "body": []
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
            "start": 365,
            "end": 426,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 373,
              "end": 388,
              "value": "computedname6",
              "raw": "\"computedname6\""
            },
            "value": {
              "type": "FunctionExpression",
              "start": 389,
              "end": 426,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                      "value": true,
                      "raw": "true"
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
            "start": 431,
            "end": 500,
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
            "value": {
              "type": "FunctionExpression",
              "start": 450,
              "end": 500,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 453,
                "end": 500,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 463,
                    "end": 477,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 467,
                        "end": 476,
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
                          "left": {
                            "type": "Literal",
                            "start": 471,
                            "end": 472,
                            "value": 1,
                            "raw": "1"
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 475,
                            "end": 476,
                            "value": 2,
                            "raw": "2"
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 505,
            "end": 530,
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
            "value": {
              "type": "FunctionExpression",
              "start": 515,
              "end": 530,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 527,
                "end": 530,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 535,
            "end": 578,
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
            "value": {
              "type": "FunctionExpression",
              "start": 545,
              "end": 578,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
