__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 707,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 26,
        "name": "invariant",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 27,
          "end": 45,
          "name": "condition",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 36,
            "end": 45,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 38,
              "end": 45
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 46,
        "end": 65,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 48,
          "end": 65,
          "parameterName": {
            "type": "Identifier",
            "start": 56,
            "end": 65,
            "name": "condition",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": true,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 68,
      "end": 174,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 79,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 80,
          "end": 107,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 83,
            "end": 107,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 85,
              "end": 107,
              "typeName": {
                "type": "Identifier",
                "start": 85,
                "end": 91,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 109,
        "end": 174,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 115,
            "end": 140,
            "expression": {
              "type": "CallExpression",
              "start": 115,
              "end": 139,
              "callee": {
                "type": "Identifier",
                "start": 115,
                "end": 124,
                "name": "invariant",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 125,
                  "end": 138,
                  "left": {
                    "type": "Literal",
                    "start": 125,
                    "end": 131,
                    "value": "test",
                    "raw": "\"test\""
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "start": 135,
                    "end": 138,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 145,
            "end": 161,
            "argument": {
              "type": "MemberExpression",
              "start": 152,
              "end": 160,
              "object": {
                "type": "Identifier",
                "start": 152,
                "end": 155,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 156,
                "end": 160,
                "name": "test",
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 176,
      "end": 309,
      "id": {
        "type": "Identifier",
        "start": 185,
        "end": 187,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 188,
          "end": 215,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 191,
            "end": 215,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 193,
              "end": 215,
              "typeName": {
                "type": "Identifier",
                "start": 193,
                "end": 199,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 217,
        "end": 309,
        "body": [
          {
            "type": "IfStatement",
            "start": 223,
            "end": 285,
            "test": {
              "type": "BinaryExpression",
              "start": 227,
              "end": 240,
              "left": {
                "type": "Literal",
                "start": 227,
                "end": 233,
                "value": "test",
                "raw": "\"test\""
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 237,
                "end": 240,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
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
                    "object": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 262,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 267,
                      "name": "test",
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
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 290,
            "end": 307,
            "argument": {
              "type": "Literal",
              "start": 297,
              "end": 306,
              "value": "default",
              "raw": "\"default\""
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 311,
      "end": 501,
      "id": {
        "type": "Identifier",
        "start": 320,
        "end": 322,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 323,
          "end": 350,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 326,
            "end": 350,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 328,
              "end": 350,
              "typeName": {
                "type": "Identifier",
                "start": 328,
                "end": 334,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 352,
        "end": 501,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 358,
            "end": 367,
            "expression": {
              "type": "MemberExpression",
              "start": 358,
              "end": 366,
              "object": {
                "type": "Identifier",
                "start": 358,
                "end": 361,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 362,
                "end": 366,
                "name": "test",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 395,
            "end": 499,
            "test": {
              "type": "BinaryExpression",
              "start": 399,
              "end": 412,
              "left": {
                "type": "Literal",
                "start": 399,
                "end": 405,
                "value": "test",
                "raw": "\"test\""
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 409,
                "end": 412,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
                  "expression": {
                    "type": "MemberExpression",
                    "start": 424,
                    "end": 432,
                    "object": {
                      "type": "Identifier",
                      "start": 424,
                      "end": 427,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 428,
                      "end": 432,
                      "name": "test",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 460,
              "end": 499,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 470,
                  "end": 479,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 470,
                    "end": 478,
                    "object": {
                      "type": "Identifier",
                      "start": 470,
                      "end": 473,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 474,
                      "end": 478,
                      "name": "test",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
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
    {
      "type": "FunctionDeclaration",
      "start": 503,
      "end": 706,
      "id": {
        "type": "Identifier",
        "start": 512,
        "end": 514,
        "name": "f4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 515,
          "end": 542,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 518,
            "end": 542,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 520,
              "end": 542,
              "typeName": {
                "type": "Identifier",
                "start": 520,
                "end": 526,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 544,
        "end": 706,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 550,
            "end": 559,
            "expression": {
              "type": "MemberExpression",
              "start": 550,
              "end": 558,
              "object": {
                "type": "Identifier",
                "start": 550,
                "end": 553,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 554,
                "end": 558,
                "name": "test",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 587,
            "end": 704,
            "test": {
              "type": "CallExpression",
              "start": 591,
              "end": 617,
              "callee": {
                "type": "MemberExpression",
                "start": 591,
                "end": 609,
                "object": {
                  "type": "Identifier",
                  "start": 591,
                  "end": 594,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 595,
                  "end": 609,
                  "name": "hasOwnProperty",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 610,
                  "end": 616,
                  "value": "test",
                  "raw": "\"test\""
                }
              ],
              "optional": false,
              "typeArguments": null
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
                  "expression": {
                    "type": "MemberExpression",
                    "start": 629,
                    "end": 637,
                    "object": {
                      "type": "Identifier",
                      "start": 629,
                      "end": 632,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 633,
                      "end": 637,
                      "name": "test",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 665,
              "end": 704,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 675,
                  "end": 684,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 675,
                    "end": 683,
                    "object": {
                      "type": "Identifier",
                      "start": 675,
                      "end": 678,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 679,
                      "end": 683,
                      "name": "test",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
