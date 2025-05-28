__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 804,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 18,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 18,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 21,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 32,
        "decorators": [],
        "name": "t1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 35,
        "end": 94,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 41,
            "end": 92,
            "argument": {
              "type": "TSAsExpression",
              "start": 77,
              "end": 85,
              "expression": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 82,
                "end": 85
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 95,
      "end": 172,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 106,
        "decorators": [],
        "name": "t2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 109,
        "end": 172,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 115,
            "end": 170,
            "argument": {
              "type": "BinaryExpression",
              "start": 122,
              "end": 169,
              "left": {
                "type": "TSAsExpression",
                "start": 151,
                "end": 159,
                "expression": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 152,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 156,
                  "end": 159
                }
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 168,
                "end": 169,
                "value": 1,
                "raw": "1"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 173,
      "end": 254,
      "id": {
        "type": "Identifier",
        "start": 182,
        "end": 184,
        "decorators": [],
        "name": "t3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 187,
        "end": 254,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 193,
            "end": 252,
            "argument": {
              "type": "ConditionalExpression",
              "start": 200,
              "end": 251,
              "test": {
                "type": "TSAsExpression",
                "start": 229,
                "end": 237,
                "expression": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 230,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 234,
                  "end": 237
                }
              },
              "consequent": {
                "type": "Literal",
                "start": 246,
                "end": 247,
                "value": 0,
                "raw": "0"
              },
              "alternate": {
                "type": "Literal",
                "start": 250,
                "end": 251,
                "value": 1,
                "raw": "1"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 255,
      "end": 330,
      "id": {
        "type": "Identifier",
        "start": 264,
        "end": 266,
        "decorators": [],
        "name": "t4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 269,
        "end": 330,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 275,
            "end": 328,
            "argument": {
              "type": "MemberExpression",
              "start": 282,
              "end": 327,
              "object": {
                "type": "TSAsExpression",
                "start": 311,
                "end": 319,
                "expression": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 312,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 316,
                  "end": 319
                }
              },
              "property": {
                "type": "Identifier",
                "start": 326,
                "end": 327,
                "decorators": [],
                "name": "b",
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
    {
      "type": "FunctionDeclaration",
      "start": 331,
      "end": 407,
      "id": {
        "type": "Identifier",
        "start": 340,
        "end": 342,
        "decorators": [],
        "name": "t5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 345,
        "end": 407,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 351,
            "end": 405,
            "argument": {
              "type": "MemberExpression",
              "start": 358,
              "end": 404,
              "object": {
                "type": "TSAsExpression",
                "start": 387,
                "end": 395,
                "expression": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 388,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 392,
                  "end": 395
                }
              },
              "property": {
                "type": "Identifier",
                "start": 402,
                "end": 403,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 408,
      "end": 483,
      "id": {
        "type": "Identifier",
        "start": 417,
        "end": 419,
        "decorators": [],
        "name": "t6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 422,
        "end": 483,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 428,
            "end": 481,
            "argument": {
              "type": "CallExpression",
              "start": 435,
              "end": 480,
              "callee": {
                "type": "TSAsExpression",
                "start": 464,
                "end": 472,
                "expression": {
                  "type": "Identifier",
                  "start": 464,
                  "end": 465,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 469,
                  "end": 472
                }
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 484,
      "end": 559,
      "id": {
        "type": "Identifier",
        "start": 493,
        "end": 495,
        "decorators": [],
        "name": "t7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 498,
        "end": 559,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 504,
            "end": 557,
            "argument": {
              "type": "TaggedTemplateExpression",
              "start": 511,
              "end": 556,
              "tag": {
                "type": "TSAsExpression",
                "start": 540,
                "end": 548,
                "expression": {
                  "type": "Identifier",
                  "start": 540,
                  "end": 541,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 545,
                  "end": 548
                }
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 554,
                "end": 556,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 554,
                    "end": 556,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": true
                  }
                ],
                "expressions": []
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 560,
      "end": 640,
      "id": {
        "type": "Identifier",
        "start": 569,
        "end": 571,
        "decorators": [],
        "name": "t8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 574,
        "end": 640,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 580,
            "end": 638,
            "argument": {
              "type": "TSAsExpression",
              "start": 587,
              "end": 637,
              "expression": {
                "type": "TSAsExpression",
                "start": 616,
                "end": 624,
                "expression": {
                  "type": "Identifier",
                  "start": 616,
                  "end": 617,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 621,
                  "end": 624
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 634,
                "end": 637
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 641,
      "end": 728,
      "id": {
        "type": "Identifier",
        "start": 650,
        "end": 652,
        "decorators": [],
        "name": "t9",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 655,
        "end": 728,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 661,
            "end": 726,
            "argument": {
              "type": "TSSatisfiesExpression",
              "start": 668,
              "end": 725,
              "expression": {
                "type": "TSAsExpression",
                "start": 697,
                "end": 705,
                "expression": {
                  "type": "Identifier",
                  "start": 697,
                  "end": 698,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 702,
                  "end": 705
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 722,
                "end": 725
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 729,
      "end": 804,
      "id": {
        "type": "Identifier",
        "start": 738,
        "end": 741,
        "decorators": [],
        "name": "t10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 744,
        "end": 804,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 750,
            "end": 802,
            "argument": {
              "type": "TSNonNullExpression",
              "start": 757,
              "end": 801,
              "expression": {
                "type": "TSAsExpression",
                "start": 786,
                "end": 794,
                "expression": {
                  "type": "Identifier",
                  "start": 786,
                  "end": 787,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 791,
                  "end": 794
                }
              }
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
