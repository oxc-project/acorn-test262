__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 596,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 596,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 23,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 24,
        "end": 596,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 30,
            "end": 43,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 34,
              "name": "_bar",
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
              "start": 34,
              "end": 42,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 36,
                "end": 42
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 48,
            "end": 57,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 51,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 51,
              "end": 57,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 54,
                "end": 57,
                "body": []
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
            "start": 62,
            "end": 85,
            "static": false,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 63,
              "end": 78,
              "value": "computedName1",
              "raw": "\"computedName1\""
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 79,
              "end": 85,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 82,
                "end": 85,
                "body": []
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
            "start": 90,
            "end": 122,
            "static": false,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 91,
              "end": 106,
              "value": "computedName2",
              "raw": "\"computedName2\""
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 107,
              "end": 122,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 108,
                  "end": 117,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 109,
                    "end": 117,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 111,
                      "end": 117
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 119,
                "end": 122,
                "body": []
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
            "start": 127,
            "end": 177,
            "static": false,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 128,
              "end": 143,
              "value": "computedName3",
              "raw": "\"computedName3\""
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 144,
              "end": 177,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 145,
                  "end": 154,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 146,
                    "end": 154,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 148,
                      "end": 154
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 164,
                "end": 177,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 166,
                    "end": 175,
                    "argument": {
                      "type": "Literal",
                      "start": 173,
                      "end": 174,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 155,
                "end": 163,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 157,
                  "end": 163
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 182,
            "end": 229,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 185,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 185,
              "end": 229,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 196,
                "end": 229,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 206,
                    "end": 223,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 213,
                      "end": 222,
                      "object": {
                        "type": "ThisExpression",
                        "start": 213,
                        "end": 217
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 218,
                        "end": 222,
                        "name": "_bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 187,
                "end": 195,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 189,
                  "end": 195
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 235,
            "end": 297,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 235,
              "end": 238,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 238,
              "end": 297,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 239,
                  "end": 245,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 240,
                    "end": 245,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 242,
                      "end": 245
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 247,
                  "end": 256,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 248,
                    "end": 256,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 250,
                      "end": 256
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 266,
                "end": 297,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 276,
                    "end": 291,
                    "argument": {
                      "type": "Literal",
                      "start": 283,
                      "end": 290,
                      "value": "HELLO",
                      "raw": "\"HELLO\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 257,
                "end": 265,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 259,
                  "end": 265
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 302,
            "end": 332,
            "static": true,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 310,
              "end": 325,
              "value": "computedname4",
              "raw": "\"computedname4\""
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 326,
              "end": 332,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 329,
                "end": 332,
                "body": []
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
            "start": 337,
            "end": 376,
            "static": true,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 345,
              "end": 360,
              "value": "computedname5",
              "raw": "\"computedname5\""
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 361,
              "end": 376,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 362,
                  "end": 371,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 363,
                    "end": 371,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 365,
                      "end": 371
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 373,
                "end": 376,
                "body": []
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
            "start": 381,
            "end": 442,
            "static": true,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 389,
              "end": 404,
              "value": "computedname6",
              "raw": "\"computedname6\""
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 405,
              "end": 442,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 406,
                  "end": 415,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 407,
                    "end": 415,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 409,
                      "end": 415
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 426,
                "end": 442,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 428,
                    "end": 440,
                    "argument": {
                      "type": "Literal",
                      "start": 435,
                      "end": 439,
                      "value": true,
                      "raw": "true"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 416,
                "end": 425,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 418,
                  "end": 425
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 447,
            "end": 516,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 454,
              "end": 466,
              "name": "staticMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 466,
              "end": 516,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 469,
                "end": 516,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 479,
                    "end": 493,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 483,
                        "end": 492,
                        "id": {
                          "type": "Identifier",
                          "start": 483,
                          "end": 484,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "start": 487,
                          "end": 492,
                          "left": {
                            "type": "Literal",
                            "start": 487,
                            "end": 488,
                            "value": 1,
                            "raw": "1"
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 491,
                            "end": 492,
                            "value": 2,
                            "raw": "2"
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 502,
                    "end": 510,
                    "argument": {
                      "type": "Identifier",
                      "start": 509,
                      "end": 510,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "start": 521,
            "end": 546,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 528,
              "end": 531,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 531,
              "end": 546,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 532,
                  "end": 541,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 533,
                    "end": 541,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 535,
                      "end": 541
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 543,
                "end": 546,
                "body": []
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
            "start": 551,
            "end": 594,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 558,
              "end": 561,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 561,
              "end": 594,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 562,
                  "end": 571,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 563,
                    "end": 571,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 565,
                      "end": 571
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 581,
                "end": 594,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 583,
                    "end": 592,
                    "argument": {
                      "type": "Literal",
                      "start": 590,
                      "end": 591,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 572,
                "end": 580,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 574,
                  "end": 580
                }
              }
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
