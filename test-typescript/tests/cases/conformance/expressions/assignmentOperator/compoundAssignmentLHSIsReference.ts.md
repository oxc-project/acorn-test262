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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 65,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 65,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 59,
                "end": 65
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 67,
      "end": 79,
      "expression": {
        "type": "AssignmentExpression",
        "start": 67,
        "end": 78,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 67,
          "end": 69,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 73,
          "end": 78,
          "name": "value",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 80,
      "end": 92,
      "expression": {
        "type": "AssignmentExpression",
        "start": 80,
        "end": 91,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 80,
          "end": 82,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 86,
          "end": 91,
          "name": "value",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 94,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 106,
        "name": "fn1",
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
          "start": 107,
          "end": 117,
          "name": "x2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 109,
            "end": 117,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
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
        "end": 156,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 125,
            "end": 137,
            "expression": {
              "type": "AssignmentExpression",
              "start": 125,
              "end": 136,
              "operator": "*=",
              "left": {
                "type": "Identifier",
                "start": 125,
                "end": 127,
                "name": "x2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 131,
                "end": 136,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 142,
            "end": 154,
            "expression": {
              "type": "AssignmentExpression",
              "start": 142,
              "end": 153,
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "start": 142,
                "end": 144,
                "name": "x2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 148,
                "end": 153,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 200,
            "name": "x3",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 189,
                      "end": 190,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 190,
                      "end": 198,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 192,
                        "end": 198
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 202,
      "end": 216,
      "expression": {
        "type": "AssignmentExpression",
        "start": 202,
        "end": 215,
        "operator": "*=",
        "left": {
          "type": "MemberExpression",
          "start": 202,
          "end": 206,
          "object": {
            "type": "Identifier",
            "start": 202,
            "end": 204,
            "name": "x3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 205,
            "end": 206,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 210,
          "end": 215,
          "name": "value",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 217,
      "end": 231,
      "expression": {
        "type": "AssignmentExpression",
        "start": 217,
        "end": 230,
        "operator": "+=",
        "left": {
          "type": "MemberExpression",
          "start": 217,
          "end": 221,
          "object": {
            "type": "Identifier",
            "start": 217,
            "end": 219,
            "name": "x3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 220,
            "end": 221,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 225,
          "end": 230,
          "name": "value",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 233,
      "end": 250,
      "expression": {
        "type": "AssignmentExpression",
        "start": 233,
        "end": 249,
        "operator": "*=",
        "left": {
          "type": "MemberExpression",
          "start": 233,
          "end": 240,
          "object": {
            "type": "Identifier",
            "start": 233,
            "end": 235,
            "name": "x3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 236,
            "end": 239,
            "value": "a",
            "raw": "'a'"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 244,
          "end": 249,
          "name": "value",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 251,
      "end": 268,
      "expression": {
        "type": "AssignmentExpression",
        "start": 251,
        "end": 267,
        "operator": "+=",
        "left": {
          "type": "MemberExpression",
          "start": 251,
          "end": 258,
          "object": {
            "type": "Identifier",
            "start": 251,
            "end": 253,
            "name": "x3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 254,
            "end": 257,
            "value": "a",
            "raw": "'a'"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 262,
          "end": 267,
          "name": "value",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 324,
      "end": 338,
      "expression": {
        "type": "AssignmentExpression",
        "start": 324,
        "end": 337,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 325,
          "end": 327,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 332,
          "end": 337,
          "name": "value",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 339,
      "end": 353,
      "expression": {
        "type": "AssignmentExpression",
        "start": 339,
        "end": 352,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 340,
          "end": 342,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 347,
          "end": 352,
          "name": "value",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 355,
      "end": 421,
      "id": {
        "type": "Identifier",
        "start": 364,
        "end": 367,
        "name": "fn2",
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
          "start": 368,
          "end": 378,
          "name": "x4",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 370,
            "end": 378,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 372,
              "end": 378
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 380,
        "end": 421,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 386,
            "end": 400,
            "expression": {
              "type": "AssignmentExpression",
              "start": 386,
              "end": 399,
              "operator": "*=",
              "left": {
                "type": "Identifier",
                "start": 387,
                "end": 389,
                "name": "x4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 394,
                "end": 399,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 405,
            "end": 419,
            "expression": {
              "type": "AssignmentExpression",
              "start": 405,
              "end": 418,
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "start": 406,
                "end": 408,
                "name": "x4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 413,
                "end": 418,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 423,
      "end": 439,
      "expression": {
        "type": "AssignmentExpression",
        "start": 423,
        "end": 438,
        "operator": "*=",
        "left": {
          "type": "MemberExpression",
          "start": 424,
          "end": 428,
          "object": {
            "type": "Identifier",
            "start": 424,
            "end": 426,
            "name": "x3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 427,
            "end": 428,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 433,
          "end": 438,
          "name": "value",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 440,
      "end": 456,
      "expression": {
        "type": "AssignmentExpression",
        "start": 440,
        "end": 455,
        "operator": "+=",
        "left": {
          "type": "MemberExpression",
          "start": 441,
          "end": 445,
          "object": {
            "type": "Identifier",
            "start": 441,
            "end": 443,
            "name": "x3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 444,
            "end": 445,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 450,
          "end": 455,
          "name": "value",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 458,
      "end": 477,
      "expression": {
        "type": "AssignmentExpression",
        "start": 458,
        "end": 476,
        "operator": "*=",
        "left": {
          "type": "MemberExpression",
          "start": 459,
          "end": 466,
          "object": {
            "type": "Identifier",
            "start": 459,
            "end": 461,
            "name": "x3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 462,
            "end": 465,
            "value": "a",
            "raw": "'a'"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 471,
          "end": 476,
          "name": "value",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 478,
      "end": 497,
      "expression": {
        "type": "AssignmentExpression",
        "start": 478,
        "end": 496,
        "operator": "+=",
        "left": {
          "type": "MemberExpression",
          "start": 479,
          "end": 486,
          "object": {
            "type": "Identifier",
            "start": 479,
            "end": 481,
            "name": "x3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 482,
            "end": 485,
            "value": "a",
            "raw": "'a'"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 491,
          "end": 496,
          "name": "value",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
