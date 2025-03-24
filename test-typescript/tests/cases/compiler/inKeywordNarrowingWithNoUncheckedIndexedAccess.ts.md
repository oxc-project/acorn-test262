__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 706,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 66,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 26,
        "decorators": [],
        "name": "invariant",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 27,
          "end": 45,
          "decorators": [],
          "name": "condition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 36,
            "end": 45,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 38,
              "end": 45
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 46,
        "end": 65,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 48,
          "end": 65,
          "asserts": true,
          "parameterName": {
            "type": "Identifier",
            "start": 56,
            "end": 65,
            "decorators": [],
            "name": "condition",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 68,
      "end": 174,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 109,
        "end": 174,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 115,
            "end": 140,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 115,
              "end": 139,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 125,
                  "end": 138,
                  "operator": "in",
                  "left": {
                    "type": "Literal",
                    "start": 125,
                    "end": 131,
                    "raw": "\"test\"",
                    "value": "test"
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 135,
                    "end": 138,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 115,
                "end": 124,
                "decorators": [],
                "name": "invariant",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 145,
            "end": 161,
            "argument": {
              "type": "MemberExpression",
              "start": 152,
              "end": 160,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 152,
                "end": 155,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 156,
                "end": 160,
                "decorators": [],
                "name": "test",
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
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 79,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 80,
          "end": 107,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 83,
            "end": 107,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 85,
              "end": 107,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 91,
                "end": 107,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 92,
                    "end": 98
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 100,
                    "end": 106
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 85,
                "end": 91,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 176,
      "end": 309,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 217,
        "end": 309,
        "body": [
          {
            "type": "IfStatement",
            "start": 223,
            "end": 285,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 242,
              "end": 285,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 252,
                  "end": 268,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 259,
                    "end": 267,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 262,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 267,
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 227,
              "end": 240,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 227,
                "end": 233,
                "raw": "\"test\"",
                "value": "test"
              },
              "right": {
                "type": "Identifier",
                "start": 237,
                "end": 240,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 290,
            "end": 307,
            "argument": {
              "type": "Literal",
              "start": 297,
              "end": 306,
              "raw": "\"default\"",
              "value": "default"
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 185,
        "end": 187,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 188,
          "end": 215,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 191,
            "end": 215,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 193,
              "end": 215,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 199,
                "end": 215,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 200,
                    "end": 206
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 208,
                    "end": 214
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 193,
                "end": 199,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 311,
      "end": 501,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 352,
        "end": 501,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 358,
            "end": 367,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 358,
              "end": 366,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 358,
                "end": 361,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 362,
                "end": 366,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 395,
            "end": 499,
            "alternate": {
              "type": "BlockStatement",
              "start": 460,
              "end": 499,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 470,
                  "end": 479,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 470,
                    "end": 478,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 470,
                      "end": 473,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 474,
                      "end": 478,
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 414,
              "end": 450,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 424,
                  "end": 433,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 424,
                    "end": 432,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 424,
                      "end": 427,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 428,
                      "end": 432,
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 399,
              "end": 412,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 399,
                "end": 405,
                "raw": "\"test\"",
                "value": "test"
              },
              "right": {
                "type": "Identifier",
                "start": 409,
                "end": 412,
                "decorators": [],
                "name": "obj",
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
      "id": {
        "type": "Identifier",
        "start": 320,
        "end": 322,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 323,
          "end": 350,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 326,
            "end": 350,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 328,
              "end": 350,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 334,
                "end": 350,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 335,
                    "end": 341
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 343,
                    "end": 349
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 328,
                "end": 334,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 503,
      "end": 706,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 544,
        "end": 706,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 550,
            "end": 559,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 550,
              "end": 558,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 550,
                "end": 553,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 554,
                "end": 558,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 587,
            "end": 704,
            "alternate": {
              "type": "BlockStatement",
              "start": 665,
              "end": 704,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 675,
                  "end": 684,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 675,
                    "end": 683,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 675,
                      "end": 678,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 679,
                      "end": 683,
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 619,
              "end": 655,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 629,
                  "end": 638,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 629,
                    "end": 637,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 629,
                      "end": 632,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 633,
                      "end": 637,
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 591,
              "end": 617,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 610,
                  "end": 616,
                  "raw": "\"test\"",
                  "value": "test"
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 591,
                "end": 609,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 591,
                  "end": 594,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 595,
                  "end": 609,
                  "decorators": [],
                  "name": "hasOwnProperty",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 512,
        "end": 514,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 515,
          "end": 542,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 518,
            "end": 542,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 520,
              "end": 542,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 526,
                "end": 542,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 527,
                    "end": 533
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 535,
                    "end": 541
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 520,
                "end": 526,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
