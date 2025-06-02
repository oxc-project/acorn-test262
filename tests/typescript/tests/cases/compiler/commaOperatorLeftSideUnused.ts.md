__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 976,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 12,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 11,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 11,
            "decorators": [],
            "name": "xx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 11,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 8,
                "end": 11
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 25,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 24,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 24,
            "decorators": [],
            "name": "yy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 24,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 27,
      "end": 200,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 38,
        "decorators": [],
        "name": "fn",
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
        "start": 41,
        "end": 200,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 45,
            "end": 65,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 49,
                "end": 64,
                "id": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 59,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 52,
                    "end": 59,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 54,
                      "end": 59,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 54,
                        "end": 57
                      }
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 62,
                  "end": 64,
                  "elements": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "SwitchStatement",
            "start": 68,
            "end": 198,
            "discriminant": {
              "type": "MemberExpression",
              "start": 75,
              "end": 85,
              "object": {
                "type": "Identifier",
                "start": 75,
                "end": 78,
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 79,
                "end": 85,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 113,
                "end": 151,
                "test": {
                  "type": "SequenceExpression",
                  "start": 118,
                  "end": 122,
                  "expressions": [
                    {
                      "type": "Literal",
                      "start": 118,
                      "end": 119,
                      "value": 0,
                      "raw": "0"
                    },
                    {
                      "type": "Literal",
                      "start": 121,
                      "end": 122,
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 130,
                    "end": 151,
                    "argument": {
                      "type": "Literal",
                      "start": 137,
                      "end": 150,
                      "value": "zero or one",
                      "raw": "'zero or one'"
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 156,
                "end": 194,
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 171,
                    "end": 194,
                    "argument": {
                      "type": "Literal",
                      "start": 178,
                      "end": 193,
                      "value": "more than one",
                      "raw": "'more than one'"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 218,
      "end": 246,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 222,
          "end": 245,
          "id": {
            "type": "Identifier",
            "start": 222,
            "end": 223,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 226,
            "end": 245,
            "callee": {
              "type": "MemberExpression",
              "start": 226,
              "end": 234,
              "object": {
                "type": "Identifier",
                "start": 226,
                "end": 230,
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 231,
                "end": 234,
                "decorators": [],
                "name": "pow",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SequenceExpression",
                "start": 236,
                "end": 240,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 236,
                    "end": 237,
                    "value": 3,
                    "raw": "3"
                  },
                  {
                    "type": "Literal",
                    "start": 239,
                    "end": 240,
                    "value": 5,
                    "raw": "5"
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 243,
                "end": 244,
                "value": 2,
                "raw": "2"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 300,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 299,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 269,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 272,
            "end": 299,
            "elements": [
              {
                "type": "BinaryExpression",
                "start": 274,
                "end": 279,
                "left": {
                  "type": "Literal",
                  "start": 274,
                  "end": 275,
                  "value": 3,
                  "raw": "3"
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 278,
                  "end": 279,
                  "value": 4,
                  "raw": "4"
                }
              },
              {
                "type": "BinaryExpression",
                "start": 283,
                "end": 297,
                "left": {
                  "type": "SequenceExpression",
                  "start": 284,
                  "end": 292,
                  "expressions": [
                    {
                      "type": "BinaryExpression",
                      "start": 284,
                      "end": 289,
                      "left": {
                        "type": "Literal",
                        "start": 284,
                        "end": 285,
                        "value": 1,
                        "raw": "1"
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 288,
                        "end": 289,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    {
                      "type": "Literal",
                      "start": 291,
                      "end": 292,
                      "value": 8,
                      "raw": "8"
                    }
                  ]
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "start": 296,
                  "end": 297,
                  "value": 4,
                  "raw": "4"
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 317,
      "end": 329,
      "expression": {
        "type": "AssignmentExpression",
        "start": 317,
        "end": 328,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 317,
          "end": 319,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 323,
          "end": 327,
          "expressions": [
            {
              "type": "Literal",
              "start": 323,
              "end": 324,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 326,
              "end": 327,
              "value": 2,
              "raw": "2"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 330,
      "end": 344,
      "expression": {
        "type": "AssignmentExpression",
        "start": 330,
        "end": 343,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 330,
          "end": 332,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 336,
          "end": 342,
          "expressions": [
            {
              "type": "Literal",
              "start": 336,
              "end": 338,
              "value": "",
              "raw": "''"
            },
            {
              "type": "Identifier",
              "start": 340,
              "end": 342,
              "decorators": [],
              "name": "xx",
              "optional": false,
              "typeAnnotation": null
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 345,
      "end": 361,
      "expression": {
        "type": "AssignmentExpression",
        "start": 345,
        "end": 360,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 345,
          "end": 347,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 351,
          "end": 359,
          "expressions": [
            {
              "type": "Literal",
              "start": 351,
              "end": 356,
              "value": null,
              "raw": "/323/",
              "regex": {
                "pattern": "323",
                "flags": ""
              }
            },
            {
              "type": "Literal",
              "start": 358,
              "end": 359,
              "value": 5,
              "raw": "5"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 362,
      "end": 401,
      "expression": {
        "type": "SequenceExpression",
        "start": 362,
        "end": 400,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 362,
            "end": 380,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 362,
              "end": 364,
              "decorators": [],
              "name": "xx",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "SequenceExpression",
              "start": 368,
              "end": 379,
              "expressions": [
                {
                  "type": "TemplateLiteral",
                  "start": 368,
                  "end": 373,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 368,
                      "end": 373,
                      "value": {
                        "raw": "wat",
                        "cooked": "wat"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                },
                {
                  "type": "Literal",
                  "start": 375,
                  "end": 379,
                  "value": "ok",
                  "raw": "'ok'"
                }
              ]
            }
          },
          {
            "type": "AssignmentExpression",
            "start": 382,
            "end": 400,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 382,
              "end": 384,
              "decorators": [],
              "name": "xx",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "SequenceExpression",
              "start": 388,
              "end": 399,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 388,
                  "end": 392,
                  "value": true,
                  "raw": "true"
                },
                {
                  "type": "Literal",
                  "start": 394,
                  "end": 399,
                  "value": false,
                  "raw": "false"
                }
              ]
            }
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 402,
      "end": 421,
      "expression": {
        "type": "AssignmentExpression",
        "start": 402,
        "end": 420,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 402,
          "end": 404,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 408,
          "end": 419,
          "expressions": [
            {
              "type": "Literal",
              "start": 408,
              "end": 413,
              "value": false,
              "raw": "false"
            },
            {
              "type": "Literal",
              "start": 415,
              "end": 419,
              "value": true,
              "raw": "true"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 422,
      "end": 438,
      "expression": {
        "type": "AssignmentExpression",
        "start": 422,
        "end": 437,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 422,
          "end": 424,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 428,
          "end": 436,
          "expressions": [
            {
              "type": "Literal",
              "start": 428,
              "end": 432,
              "value": null,
              "raw": "null"
            },
            {
              "type": "Identifier",
              "start": 434,
              "end": 436,
              "decorators": [],
              "name": "xx",
              "optional": false,
              "typeAnnotation": null
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 439,
      "end": 460,
      "expression": {
        "type": "AssignmentExpression",
        "start": 439,
        "end": 459,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 439,
          "end": 441,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 445,
          "end": 458,
          "expressions": [
            {
              "type": "Identifier",
              "start": 445,
              "end": 454,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Literal",
              "start": 456,
              "end": 458,
              "value": 10,
              "raw": "10"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 461,
      "end": 483,
      "expression": {
        "type": "AssignmentExpression",
        "start": 461,
        "end": 482,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 461,
          "end": 463,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 467,
          "end": 481,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 467,
              "end": 475,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 473,
                "end": 475,
                "body": []
              },
              "id": null,
              "generator": false
            },
            {
              "type": "Literal",
              "start": 477,
              "end": 481,
              "value": "no",
              "raw": "'no'"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 484,
      "end": 511,
      "expression": {
        "type": "AssignmentExpression",
        "start": 484,
        "end": 510,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 484,
          "end": 486,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 490,
          "end": 509,
          "expressions": [
            {
              "type": "FunctionExpression",
              "start": 490,
              "end": 504,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 501,
                "end": 504,
                "body": []
              },
              "expression": false
            },
            {
              "type": "Literal",
              "start": 506,
              "end": 509,
              "value": 100,
              "raw": "100"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 512,
      "end": 526,
      "expression": {
        "type": "AssignmentExpression",
        "start": 512,
        "end": 525,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 512,
          "end": 514,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 518,
          "end": 524,
          "expressions": [
            {
              "type": "ObjectExpression",
              "start": 518,
              "end": 520,
              "properties": []
            },
            {
              "type": "ObjectExpression",
              "start": 522,
              "end": 524,
              "properties": []
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 527,
      "end": 554,
      "expression": {
        "type": "AssignmentExpression",
        "start": 527,
        "end": 553,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 527,
          "end": 529,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 533,
          "end": 552,
          "expressions": [
            {
              "type": "UnaryExpression",
              "start": 533,
              "end": 542,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 540,
                "end": 542,
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            {
              "type": "Literal",
              "start": 544,
              "end": 552,
              "value": "unused",
              "raw": "'unused'"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 555,
      "end": 578,
      "expression": {
        "type": "AssignmentExpression",
        "start": 555,
        "end": 577,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 555,
          "end": 557,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 561,
          "end": 576,
          "expressions": [
            {
              "type": "ArrayExpression",
              "start": 561,
              "end": 572,
              "elements": [
                {
                  "type": "Literal",
                  "start": 562,
                  "end": 563,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 565,
                  "end": 566,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "UpdateExpression",
                  "start": 568,
                  "end": 571,
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "start": 568,
                    "end": 569,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            {
              "type": "Identifier",
              "start": 574,
              "end": 576,
              "decorators": [],
              "name": "xx",
              "optional": false,
              "typeAnnotation": null
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 579,
      "end": 594,
      "expression": {
        "type": "AssignmentExpression",
        "start": 579,
        "end": 593,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 579,
          "end": 581,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 585,
          "end": 592,
          "expressions": [
            {
              "type": "TSNonNullExpression",
              "start": 585,
              "end": 588,
              "expression": {
                "type": "Identifier",
                "start": 585,
                "end": 587,
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Identifier",
              "start": 590,
              "end": 592,
              "decorators": [],
              "name": "xx",
              "optional": false,
              "typeAnnotation": null
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 595,
      "end": 617,
      "expression": {
        "type": "AssignmentExpression",
        "start": 595,
        "end": 616,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 595,
          "end": 597,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 601,
          "end": 615,
          "expressions": [
            {
              "type": "ConditionalExpression",
              "start": 601,
              "end": 611,
              "test": {
                "type": "Identifier",
                "start": 601,
                "end": 603,
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null
              },
              "consequent": {
                "type": "Literal",
                "start": 606,
                "end": 607,
                "value": 3,
                "raw": "3"
              },
              "alternate": {
                "type": "Literal",
                "start": 610,
                "end": 611,
                "value": 4,
                "raw": "4"
              }
            },
            {
              "type": "Literal",
              "start": 613,
              "end": 615,
              "value": 10,
              "raw": "10"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 618,
      "end": 635,
      "expression": {
        "type": "AssignmentExpression",
        "start": 618,
        "end": 634,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 618,
          "end": 620,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 624,
          "end": 633,
          "expressions": [
            {
              "type": "BinaryExpression",
              "start": 624,
              "end": 629,
              "left": {
                "type": "Literal",
                "start": 624,
                "end": 625,
                "value": 3,
                "raw": "3"
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 628,
                "end": 629,
                "value": 4,
                "raw": "4"
              }
            },
            {
              "type": "Literal",
              "start": 631,
              "end": 633,
              "value": 10,
              "raw": "10"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 636,
      "end": 651,
      "expression": {
        "type": "AssignmentExpression",
        "start": 636,
        "end": 650,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 636,
          "end": 638,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 642,
          "end": 649,
          "expressions": [
            {
              "type": "UnaryExpression",
              "start": 642,
              "end": 645,
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "start": 643,
                "end": 645,
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            {
              "type": "Literal",
              "start": 647,
              "end": 649,
              "value": 10,
              "raw": "10"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 652,
      "end": 667,
      "expression": {
        "type": "AssignmentExpression",
        "start": 652,
        "end": 666,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 652,
          "end": 654,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 658,
          "end": 665,
          "expressions": [
            {
              "type": "UnaryExpression",
              "start": 658,
              "end": 661,
              "operator": "~",
              "argument": {
                "type": "Identifier",
                "start": 659,
                "end": 661,
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            {
              "type": "Literal",
              "start": 663,
              "end": 665,
              "value": 10,
              "raw": "10"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 668,
      "end": 683,
      "expression": {
        "type": "AssignmentExpression",
        "start": 668,
        "end": 682,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 668,
          "end": 670,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 674,
          "end": 681,
          "expressions": [
            {
              "type": "UnaryExpression",
              "start": 674,
              "end": 677,
              "operator": "-",
              "argument": {
                "type": "Identifier",
                "start": 675,
                "end": 677,
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            {
              "type": "Literal",
              "start": 679,
              "end": 681,
              "value": 10,
              "raw": "10"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 684,
      "end": 699,
      "expression": {
        "type": "AssignmentExpression",
        "start": 684,
        "end": 698,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 684,
          "end": 686,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 690,
          "end": 697,
          "expressions": [
            {
              "type": "UnaryExpression",
              "start": 690,
              "end": 693,
              "operator": "+",
              "argument": {
                "type": "Identifier",
                "start": 691,
                "end": 693,
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            {
              "type": "Literal",
              "start": 695,
              "end": 697,
              "value": 10,
              "raw": "10"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 700,
      "end": 715,
      "expression": {
        "type": "AssignmentExpression",
        "start": 700,
        "end": 714,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 700,
          "end": 702,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 705,
          "end": 714,
          "callee": {
            "type": "SequenceExpression",
            "start": 706,
            "end": 711,
            "expressions": [
              {
                "type": "Literal",
                "start": 706,
                "end": 707,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Identifier",
                "start": 709,
                "end": 711,
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 729,
      "end": 753,
      "expression": {
        "type": "AssignmentExpression",
        "start": 729,
        "end": 752,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 729,
          "end": 731,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 735,
          "end": 751,
          "expressions": [
            {
              "type": "ConditionalExpression",
              "start": 735,
              "end": 747,
              "test": {
                "type": "Identifier",
                "start": 735,
                "end": 737,
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null
              },
              "consequent": {
                "type": "UpdateExpression",
                "start": 740,
                "end": 743,
                "operator": "++",
                "prefix": false,
                "argument": {
                  "type": "Identifier",
                  "start": 740,
                  "end": 741,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "alternate": {
                "type": "Literal",
                "start": 746,
                "end": 747,
                "value": 4,
                "raw": "4"
              }
            },
            {
              "type": "Literal",
              "start": 749,
              "end": 751,
              "value": 10,
              "raw": "10"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 754,
      "end": 769,
      "expression": {
        "type": "AssignmentExpression",
        "start": 754,
        "end": 768,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 754,
          "end": 756,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 760,
          "end": 767,
          "expressions": [
            {
              "type": "UpdateExpression",
              "start": 760,
              "end": 764,
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 762,
                "end": 764,
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Literal",
              "start": 766,
              "end": 767,
              "value": 3,
              "raw": "3"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 770,
      "end": 787,
      "expression": {
        "type": "AssignmentExpression",
        "start": 770,
        "end": 786,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 770,
          "end": 772,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 776,
          "end": 785,
          "expressions": [
            {
              "type": "AssignmentExpression",
              "start": 776,
              "end": 782,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 776,
                "end": 778,
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 781,
                "end": 782,
                "value": 3,
                "raw": "3"
              }
            },
            {
              "type": "Literal",
              "start": 784,
              "end": 785,
              "value": 1,
              "raw": "1"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 788,
      "end": 807,
      "expression": {
        "type": "AssignmentExpression",
        "start": 788,
        "end": 806,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 788,
          "end": 790,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 794,
          "end": 805,
          "expressions": [
            {
              "type": "AssignmentExpression",
              "start": 795,
              "end": 801,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 795,
                "end": 797,
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 800,
                "end": 801,
                "value": 3,
                "raw": "3"
              }
            },
            {
              "type": "Literal",
              "start": 804,
              "end": 805,
              "value": 5,
              "raw": "5"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 808,
      "end": 826,
      "expression": {
        "type": "AssignmentExpression",
        "start": 808,
        "end": 825,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 808,
          "end": 810,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 814,
          "end": 824,
          "expressions": [
            {
              "type": "AssignmentExpression",
              "start": 814,
              "end": 820,
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "start": 814,
                "end": 816,
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 819,
                "end": 820,
                "value": 4,
                "raw": "4"
              }
            },
            {
              "type": "Identifier",
              "start": 822,
              "end": 824,
              "decorators": [],
              "name": "xx",
              "optional": false,
              "typeAnnotation": null
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 827,
      "end": 847,
      "expression": {
        "type": "AssignmentExpression",
        "start": 827,
        "end": 846,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 827,
          "end": 829,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 833,
          "end": 845,
          "expressions": [
            {
              "type": "AssignmentExpression",
              "start": 834,
              "end": 840,
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "start": 834,
                "end": 836,
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 839,
                "end": 840,
                "value": 4,
                "raw": "4"
              }
            },
            {
              "type": "Identifier",
              "start": 843,
              "end": 845,
              "decorators": [],
              "name": "xx",
              "optional": false,
              "typeAnnotation": null
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 848,
      "end": 873,
      "expression": {
        "type": "AssignmentExpression",
        "start": 848,
        "end": 872,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 848,
          "end": 850,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 854,
          "end": 871,
          "expressions": [
            {
              "type": "CallExpression",
              "start": 854,
              "end": 868,
              "callee": {
                "type": "MemberExpression",
                "start": 854,
                "end": 862,
                "object": {
                  "type": "Identifier",
                  "start": 854,
                  "end": 858,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 859,
                  "end": 862,
                  "decorators": [],
                  "name": "pow",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 863,
                  "end": 864,
                  "value": 3,
                  "raw": "3"
                },
                {
                  "type": "Literal",
                  "start": 866,
                  "end": 867,
                  "value": 2,
                  "raw": "2"
                }
              ],
              "optional": false
            },
            {
              "type": "Literal",
              "start": 870,
              "end": 871,
              "value": 4,
              "raw": "4"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 874,
      "end": 893,
      "expression": {
        "type": "AssignmentExpression",
        "start": 874,
        "end": 892,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 874,
          "end": 876,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 880,
          "end": 891,
          "expressions": [
            {
              "type": "UnaryExpression",
              "start": 880,
              "end": 887,
              "operator": "void",
              "argument": {
                "type": "Identifier",
                "start": 885,
                "end": 887,
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            {
              "type": "Literal",
              "start": 889,
              "end": 891,
              "value": 10,
              "raw": "10"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 894,
      "end": 916,
      "expression": {
        "type": "AssignmentExpression",
        "start": 894,
        "end": 915,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 894,
          "end": 896,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "SequenceExpression",
          "start": 900,
          "end": 914,
          "expressions": [
            {
              "type": "TSAsExpression",
              "start": 900,
              "end": 909,
              "expression": {
                "type": "Identifier",
                "start": 900,
                "end": 902,
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 906,
                "end": 909
              }
            },
            {
              "type": "Literal",
              "start": 911,
              "end": 914,
              "value": 100,
              "raw": "100"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 917,
      "end": 935,
      "expression": {
        "type": "AssignmentExpression",
        "start": 917,
        "end": 934,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 917,
          "end": 919,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 922,
          "end": 934,
          "callee": {
            "type": "SequenceExpression",
            "start": 923,
            "end": 931,
            "expressions": [
              {
                "type": "Literal",
                "start": 923,
                "end": 924,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "MemberExpression",
                "start": 926,
                "end": 931,
                "object": {
                  "type": "Identifier",
                  "start": 926,
                  "end": 928,
                  "decorators": [],
                  "name": "xx",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 929,
                  "end": 931,
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            ]
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 936,
      "end": 957,
      "expression": {
        "type": "AssignmentExpression",
        "start": 936,
        "end": 956,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 936,
          "end": 938,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 941,
          "end": 956,
          "callee": {
            "type": "SequenceExpression",
            "start": 942,
            "end": 953,
            "expressions": [
              {
                "type": "Literal",
                "start": 942,
                "end": 943,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "MemberExpression",
                "start": 945,
                "end": 953,
                "object": {
                  "type": "Identifier",
                  "start": 945,
                  "end": 947,
                  "decorators": [],
                  "name": "xx",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 948,
                  "end": 952,
                  "value": "fn",
                  "raw": "'fn'"
                },
                "optional": false,
                "computed": true
              }
            ]
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 958,
      "end": 976,
      "expression": {
        "type": "AssignmentExpression",
        "start": 958,
        "end": 975,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 958,
          "end": 960,
          "decorators": [],
          "name": "xx",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TaggedTemplateExpression",
          "start": 963,
          "end": 975,
          "tag": {
            "type": "SequenceExpression",
            "start": 964,
            "end": 972,
            "expressions": [
              {
                "type": "Literal",
                "start": 964,
                "end": 965,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "MemberExpression",
                "start": 967,
                "end": 972,
                "object": {
                  "type": "Identifier",
                  "start": 967,
                  "end": 969,
                  "decorators": [],
                  "name": "xx",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 970,
                  "end": 972,
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            ]
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 973,
            "end": 975,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 973,
                "end": 975,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true
              }
            ],
            "expressions": []
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
