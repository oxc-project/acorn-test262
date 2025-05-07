__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 497,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 66,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 65,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 65,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 65,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 59,
                "end": 65
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 67,
      "end": 79,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 67,
        "end": 78,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 67,
          "end": 69,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 73,
          "end": 78,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 80,
      "end": 92,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 80,
        "end": 91,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 80,
          "end": 82,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 86,
          "end": 91,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 94,
      "end": 156,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 119,
        "end": 156,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 125,
            "end": 137,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 125,
              "end": 136,
              "operator": "*=",
              "left": {
                "type": "Identifier",
                "start": 125,
                "end": 127,
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 131,
                "end": 136,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 142,
            "end": 154,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 142,
              "end": 153,
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "start": 142,
                "end": 144,
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 148,
                "end": 153,
                "decorators": [],
                "name": "value",
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
        "start": 103,
        "end": 106,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 107,
          "end": 117,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 109,
            "end": 117,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 111,
              "end": 117
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 179,
      "end": 201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 200,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 200,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 200,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 187,
                "end": 200,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 189,
                    "end": 198,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 189,
                      "end": 190,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 190,
                      "end": 198,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 192,
                        "end": 198
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 202,
      "end": 216,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 202,
        "end": 215,
        "operator": "*=",
        "left": {
          "type": "MemberExpression",
          "start": 202,
          "end": 206,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 202,
            "end": 204,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 205,
            "end": 206,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 210,
          "end": 215,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 217,
      "end": 231,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 217,
        "end": 230,
        "operator": "+=",
        "left": {
          "type": "MemberExpression",
          "start": 217,
          "end": 221,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 217,
            "end": 219,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 220,
            "end": 221,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 225,
          "end": 230,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 233,
      "end": 250,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 233,
        "end": 249,
        "operator": "*=",
        "left": {
          "type": "MemberExpression",
          "start": 233,
          "end": 240,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 233,
            "end": 235,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 236,
            "end": 239,
            "raw": "'a'",
            "value": "a",
            "regex": null,
            "bigint": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 244,
          "end": 249,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 251,
      "end": 268,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 251,
        "end": 267,
        "operator": "+=",
        "left": {
          "type": "MemberExpression",
          "start": 251,
          "end": 258,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 251,
            "end": 253,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 254,
            "end": 257,
            "raw": "'a'",
            "value": "a",
            "regex": null,
            "bigint": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 262,
          "end": 267,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 324,
      "end": 338,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 324,
        "end": 337,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 325,
          "end": 327,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 332,
          "end": 337,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 339,
      "end": 353,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 339,
        "end": 352,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 340,
          "end": 342,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 347,
          "end": 352,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 355,
      "end": 421,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 380,
        "end": 421,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 386,
            "end": 400,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 386,
              "end": 399,
              "operator": "*=",
              "left": {
                "type": "Identifier",
                "start": 387,
                "end": 389,
                "decorators": [],
                "name": "x4",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 394,
                "end": 399,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 405,
            "end": 419,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 405,
              "end": 418,
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "start": 406,
                "end": 408,
                "decorators": [],
                "name": "x4",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 413,
                "end": 418,
                "decorators": [],
                "name": "value",
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
        "start": 364,
        "end": 367,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 368,
          "end": 378,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 370,
            "end": 378,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 372,
              "end": 378
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 423,
      "end": 439,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 423,
        "end": 438,
        "operator": "*=",
        "left": {
          "type": "MemberExpression",
          "start": 424,
          "end": 428,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 424,
            "end": 426,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 427,
            "end": 428,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 433,
          "end": 438,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 440,
      "end": 456,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 440,
        "end": 455,
        "operator": "+=",
        "left": {
          "type": "MemberExpression",
          "start": 441,
          "end": 445,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 441,
            "end": 443,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 444,
            "end": 445,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 450,
          "end": 455,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 458,
      "end": 477,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 458,
        "end": 476,
        "operator": "*=",
        "left": {
          "type": "MemberExpression",
          "start": 459,
          "end": 466,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 459,
            "end": 461,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 462,
            "end": 465,
            "raw": "'a'",
            "value": "a",
            "regex": null,
            "bigint": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 471,
          "end": 476,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 478,
      "end": 497,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 478,
        "end": 496,
        "operator": "+=",
        "left": {
          "type": "MemberExpression",
          "start": 479,
          "end": 486,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 479,
            "end": 481,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 482,
            "end": 485,
            "raw": "'a'",
            "value": "a",
            "regex": null,
            "bigint": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 491,
          "end": 496,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
