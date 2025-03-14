emitClassDeclarationWithMethodInES6.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 24,
        "end": 596,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 30,
            "end": 43,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 34,
              "decorators": [],
              "name": "_bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 48,
            "end": 57,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 51,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 51,
              "end": 57,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 54,
                "end": 57,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 62,
            "end": 85,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 63,
              "end": 78,
              "raw": "\"computedName1\"",
              "value": "computedName1"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 79,
              "end": 85,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 82,
                "end": 85,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 90,
            "end": 122,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 91,
              "end": 106,
              "raw": "\"computedName2\"",
              "value": "computedName2"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 107,
              "end": 122,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 119,
                "end": 122,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 108,
                  "end": 117,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 109,
                    "end": 117,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 111,
                      "end": 117
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 127,
            "end": 177,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 128,
              "end": 143,
              "raw": "\"computedName3\"",
              "value": "computedName3"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 144,
              "end": 177,
              "async": false,
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
                      "raw": "1",
                      "value": 1
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
                  "start": 145,
                  "end": 154,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 146,
                    "end": 154,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 148,
                      "end": 154
                    }
                  }
                }
              ],
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
            }
          },
          {
            "type": "MethodDefinition",
            "start": 182,
            "end": 229,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 185,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 185,
              "end": 229,
              "async": false,
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
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 213,
                        "end": 217
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 218,
                        "end": 222,
                        "decorators": [],
                        "name": "_bar",
                        "optional": false
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
                "start": 187,
                "end": 195,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 189,
                  "end": 195
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 235,
            "end": 297,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 235,
              "end": 238,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 238,
              "end": 297,
              "async": false,
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
                      "raw": "\"HELLO\"",
                      "value": "HELLO"
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
                  "start": 239,
                  "end": 245,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 240,
                    "end": 245,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 242,
                      "end": 245
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 247,
                  "end": 256,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 248,
                    "end": 256,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 250,
                      "end": 256
                    }
                  }
                }
              ],
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
            }
          },
          {
            "type": "MethodDefinition",
            "start": 302,
            "end": 332,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 310,
              "end": 325,
              "raw": "\"computedname4\"",
              "value": "computedname4"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 326,
              "end": 332,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 329,
                "end": 332,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 337,
            "end": 376,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 345,
              "end": 360,
              "raw": "\"computedname5\"",
              "value": "computedname5"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 361,
              "end": 376,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 373,
                "end": 376,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 362,
                  "end": 371,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 363,
                    "end": 371,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 365,
                      "end": 371
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 381,
            "end": 442,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 389,
              "end": 404,
              "raw": "\"computedname6\"",
              "value": "computedname6"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 405,
              "end": 442,
              "async": false,
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
                      "raw": "true",
                      "value": true
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
                  "start": 406,
                  "end": 415,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 407,
                    "end": 415,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 409,
                      "end": 415
                    }
                  }
                }
              ],
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
            }
          },
          {
            "type": "MethodDefinition",
            "start": 447,
            "end": 516,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 454,
              "end": 466,
              "decorators": [],
              "name": "staticMethod",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 466,
              "end": 516,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 483,
                          "end": 484,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "start": 487,
                          "end": 492,
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "start": 487,
                            "end": 488,
                            "raw": "1",
                            "value": 1
                          },
                          "right": {
                            "type": "Literal",
                            "start": 491,
                            "end": 492,
                            "raw": "2",
                            "value": 2
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 502,
                    "end": 510,
                    "argument": {
                      "type": "Identifier",
                      "start": 509,
                      "end": 510,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 521,
            "end": 546,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 528,
              "end": 531,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 531,
              "end": 546,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 543,
                "end": 546,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 532,
                  "end": 541,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 533,
                    "end": 541,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 535,
                      "end": 541
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 551,
            "end": 594,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 558,
              "end": 561,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 561,
              "end": 594,
              "async": false,
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
                      "raw": "1",
                      "value": 1
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
                  "start": 562,
                  "end": 571,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 563,
                    "end": 571,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 565,
                      "end": 571
                    }
                  }
                }
              ],
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
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 23,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
