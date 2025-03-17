__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 5234,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 242,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
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
          "start": 12,
          "end": 55,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 55,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 17,
              "end": 55,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 19,
                  "end": 30,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 19,
                    "end": 20,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 21,
                    "end": 29,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 23,
                      "end": 29
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 31,
                  "end": 53,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 31,
                    "end": 32,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 33,
                    "end": 53,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 35,
                      "end": 53,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 35,
                          "end": 41
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 44,
                          "end": 53
                        }
                      ]
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 57,
        "end": 242,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 63,
            "end": 77,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 67,
                "end": 76,
                "id": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 68,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 71,
                  "end": 76,
                  "object": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 74,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 76,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 105,
            "end": 119,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 109,
                "end": 118,
                "id": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 113,
                  "end": 118,
                  "object": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 116,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 118,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 147,
            "end": 163,
            "expression": {
              "type": "AssignmentExpression",
              "start": 147,
              "end": 162,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 147,
                "end": 152,
                "object": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 150,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 152,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 155,
                "end": 162,
                "value": "hello",
                "raw": "'hello'"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 168,
            "end": 184,
            "expression": {
              "type": "AssignmentExpression",
              "start": 168,
              "end": 183,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 168,
                "end": 173,
                "object": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 171,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 176,
                "end": 183,
                "value": "hello",
                "raw": "'hello'"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 189,
            "end": 207,
            "expression": {
              "type": "AssignmentExpression",
              "start": 189,
              "end": 206,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 189,
                "end": 194,
                "object": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 192,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 194,
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
                "start": 197,
                "end": 206,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 222,
            "end": 240,
            "expression": {
              "type": "AssignmentExpression",
              "start": 222,
              "end": 239,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 222,
                "end": 227,
                "object": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 225,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 230,
                "end": 239,
                "name": "undefined",
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
      "type": "FunctionDeclaration",
      "start": 244,
      "end": 897,
      "id": {
        "type": "Identifier",
        "start": 253,
        "end": 255,
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
          "start": 256,
          "end": 299,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 259,
            "end": 299,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 261,
              "end": 299,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 263,
                  "end": 274,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 263,
                    "end": 264,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 265,
                    "end": 273,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 267,
                      "end": 273
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 275,
                  "end": 297,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 276,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 277,
                    "end": 297,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 279,
                      "end": 297,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 279,
                          "end": 285
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 288,
                          "end": 297
                        }
                      ]
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 301,
        "end": 897,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 307,
            "end": 317,
            "expression": {
              "type": "AssignmentExpression",
              "start": 307,
              "end": 316,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 307,
                "end": 310,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 313,
                "end": 316,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 322,
            "end": 336,
            "expression": {
              "type": "AssignmentExpression",
              "start": 322,
              "end": 335,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 322,
                "end": 327,
                "object": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 325,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 327,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 330,
                "end": 335,
                "object": {
                  "type": "Identifier",
                  "start": 330,
                  "end": 333,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 334,
                  "end": 335,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 351,
            "end": 365,
            "expression": {
              "type": "AssignmentExpression",
              "start": 351,
              "end": 364,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 351,
                "end": 356,
                "object": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 354,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 356,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 359,
                "end": 364,
                "object": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 362,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 364,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 370,
            "end": 496,
            "test": {
              "type": "BinaryExpression",
              "start": 374,
              "end": 384,
              "left": {
                "type": "Literal",
                "start": 374,
                "end": 377,
                "value": "a",
                "raw": "'a'"
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 381,
                "end": 384,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 386,
              "end": 431,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 396,
                  "end": 402,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 396,
                    "end": 401,
                    "object": {
                      "type": "Identifier",
                      "start": 396,
                      "end": 399,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 400,
                      "end": 401,
                      "name": "a",
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
                  "type": "ExpressionStatement",
                  "start": 411,
                  "end": 425,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 411,
                    "end": 424,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 411,
                      "end": 416,
                      "object": {
                        "type": "Identifier",
                        "start": 411,
                        "end": 414,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 415,
                        "end": 416,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 419,
                      "end": 424,
                      "object": {
                        "type": "Identifier",
                        "start": 419,
                        "end": 422,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 423,
                        "end": 424,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 441,
              "end": 496,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 451,
                  "end": 457,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 451,
                    "end": 456,
                    "object": {
                      "type": "Identifier",
                      "start": 451,
                      "end": 454,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 455,
                      "end": 456,
                      "name": "a",
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
                  "type": "ExpressionStatement",
                  "start": 466,
                  "end": 480,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 466,
                    "end": 479,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 466,
                      "end": 471,
                      "object": {
                        "type": "Identifier",
                        "start": 466,
                        "end": 469,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 470,
                        "end": 471,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 474,
                      "end": 479,
                      "object": {
                        "type": "Identifier",
                        "start": 474,
                        "end": 477,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 478,
                        "end": 479,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 501,
            "end": 640,
            "test": {
              "type": "CallExpression",
              "start": 505,
              "end": 528,
              "callee": {
                "type": "MemberExpression",
                "start": 505,
                "end": 523,
                "object": {
                  "type": "Identifier",
                  "start": 505,
                  "end": 508,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 509,
                  "end": 523,
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
                  "start": 524,
                  "end": 527,
                  "value": "a",
                  "raw": "'a'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 530,
              "end": 575,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 540,
                  "end": 546,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 540,
                    "end": 545,
                    "object": {
                      "type": "Identifier",
                      "start": 540,
                      "end": 543,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 544,
                      "end": 545,
                      "name": "a",
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
                  "type": "ExpressionStatement",
                  "start": 555,
                  "end": 569,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 555,
                    "end": 568,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 555,
                      "end": 560,
                      "object": {
                        "type": "Identifier",
                        "start": 555,
                        "end": 558,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 559,
                        "end": 560,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 563,
                      "end": 568,
                      "object": {
                        "type": "Identifier",
                        "start": 563,
                        "end": 566,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 567,
                        "end": 568,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 585,
              "end": 640,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 595,
                  "end": 601,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 595,
                    "end": 600,
                    "object": {
                      "type": "Identifier",
                      "start": 595,
                      "end": 598,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 599,
                      "end": 600,
                      "name": "a",
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
                  "type": "ExpressionStatement",
                  "start": 610,
                  "end": 624,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 610,
                    "end": 623,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 610,
                      "end": 615,
                      "object": {
                        "type": "Identifier",
                        "start": 610,
                        "end": 613,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 614,
                        "end": 615,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 618,
                      "end": 623,
                      "object": {
                        "type": "Identifier",
                        "start": 618,
                        "end": 621,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 622,
                        "end": 623,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 645,
            "end": 761,
            "test": {
              "type": "BinaryExpression",
              "start": 649,
              "end": 659,
              "left": {
                "type": "Literal",
                "start": 649,
                "end": 652,
                "value": "b",
                "raw": "'b'"
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 656,
                "end": 659,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 661,
              "end": 706,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 671,
                  "end": 677,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 671,
                    "end": 676,
                    "object": {
                      "type": "Identifier",
                      "start": 671,
                      "end": 674,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 675,
                      "end": 676,
                      "name": "b",
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
                  "type": "ExpressionStatement",
                  "start": 686,
                  "end": 700,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 686,
                    "end": 699,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 686,
                      "end": 691,
                      "object": {
                        "type": "Identifier",
                        "start": 686,
                        "end": 689,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 690,
                        "end": 691,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 694,
                      "end": 699,
                      "object": {
                        "type": "Identifier",
                        "start": 694,
                        "end": 697,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 698,
                        "end": 699,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 716,
              "end": 761,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 726,
                  "end": 732,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 726,
                    "end": 731,
                    "object": {
                      "type": "Identifier",
                      "start": 726,
                      "end": 729,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 730,
                      "end": 731,
                      "name": "b",
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
                  "type": "ExpressionStatement",
                  "start": 741,
                  "end": 755,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 741,
                    "end": 754,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 741,
                      "end": 746,
                      "object": {
                        "type": "Identifier",
                        "start": 741,
                        "end": 744,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 745,
                        "end": 746,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 749,
                      "end": 754,
                      "object": {
                        "type": "Identifier",
                        "start": 749,
                        "end": 752,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 753,
                        "end": 754,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 766,
            "end": 895,
            "test": {
              "type": "CallExpression",
              "start": 770,
              "end": 793,
              "callee": {
                "type": "MemberExpression",
                "start": 770,
                "end": 788,
                "object": {
                  "type": "Identifier",
                  "start": 770,
                  "end": 773,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 774,
                  "end": 788,
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
                  "start": 789,
                  "end": 792,
                  "value": "b",
                  "raw": "'b'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 795,
              "end": 840,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 805,
                  "end": 811,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 805,
                    "end": 810,
                    "object": {
                      "type": "Identifier",
                      "start": 805,
                      "end": 808,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 809,
                      "end": 810,
                      "name": "b",
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
                  "type": "ExpressionStatement",
                  "start": 820,
                  "end": 834,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 820,
                    "end": 833,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 820,
                      "end": 825,
                      "object": {
                        "type": "Identifier",
                        "start": 820,
                        "end": 823,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 824,
                        "end": 825,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 828,
                      "end": 833,
                      "object": {
                        "type": "Identifier",
                        "start": 828,
                        "end": 831,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 832,
                        "end": 833,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 850,
              "end": 895,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 860,
                  "end": 866,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 860,
                    "end": 865,
                    "object": {
                      "type": "Identifier",
                      "start": 860,
                      "end": 863,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 864,
                      "end": 865,
                      "name": "b",
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
                  "type": "ExpressionStatement",
                  "start": 875,
                  "end": 889,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 875,
                    "end": 888,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 875,
                      "end": 880,
                      "object": {
                        "type": "Identifier",
                        "start": 875,
                        "end": 878,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 879,
                        "end": 880,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 883,
                      "end": 888,
                      "object": {
                        "type": "Identifier",
                        "start": 883,
                        "end": 886,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 887,
                        "end": 888,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
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
      "start": 899,
      "end": 1148,
      "id": {
        "type": "Identifier",
        "start": 908,
        "end": 910,
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
          "start": 911,
          "end": 961,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 914,
            "end": 961,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 916,
              "end": 961,
              "typeName": {
                "type": "Identifier",
                "start": 916,
                "end": 923,
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 923,
                "end": 961,
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 924,
                    "end": 960,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 926,
                        "end": 936,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 926,
                          "end": 927,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 927,
                          "end": 935,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 929,
                            "end": 935
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 937,
                        "end": 958,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 937,
                          "end": 938,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 938,
                          "end": 958,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 940,
                            "end": 958,
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 940,
                                "end": 946
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 949,
                                "end": 958
                              }
                            ]
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
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
        "start": 963,
        "end": 1148,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 969,
            "end": 983,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 973,
                "end": 982,
                "id": {
                  "type": "Identifier",
                  "start": 973,
                  "end": 974,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 977,
                  "end": 982,
                  "object": {
                    "type": "Identifier",
                    "start": 977,
                    "end": 980,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 981,
                    "end": 982,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1011,
            "end": 1025,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1015,
                "end": 1024,
                "id": {
                  "type": "Identifier",
                  "start": 1015,
                  "end": 1016,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1019,
                  "end": 1024,
                  "object": {
                    "type": "Identifier",
                    "start": 1019,
                    "end": 1022,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1023,
                    "end": 1024,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1053,
            "end": 1069,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1053,
              "end": 1068,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1053,
                "end": 1058,
                "object": {
                  "type": "Identifier",
                  "start": 1053,
                  "end": 1056,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1057,
                  "end": 1058,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1061,
                "end": 1068,
                "value": "hello",
                "raw": "'hello'"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1074,
            "end": 1090,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1074,
              "end": 1089,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1074,
                "end": 1079,
                "object": {
                  "type": "Identifier",
                  "start": 1074,
                  "end": 1077,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1078,
                  "end": 1079,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1082,
                "end": 1089,
                "value": "hello",
                "raw": "'hello'"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1095,
            "end": 1113,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1095,
              "end": 1112,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1095,
                "end": 1100,
                "object": {
                  "type": "Identifier",
                  "start": 1095,
                  "end": 1098,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1099,
                  "end": 1100,
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
                "start": 1103,
                "end": 1112,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1128,
            "end": 1146,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1128,
              "end": 1145,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1128,
                "end": 1133,
                "object": {
                  "type": "Identifier",
                  "start": 1128,
                  "end": 1131,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1132,
                  "end": 1133,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1136,
                "end": 1145,
                "name": "undefined",
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
      "type": "FunctionDeclaration",
      "start": 1150,
      "end": 1272,
      "id": {
        "type": "Identifier",
        "start": 1159,
        "end": 1161,
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
          "start": 1162,
          "end": 1174,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1163,
            "end": 1174,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 1165,
              "end": 1174,
              "elementTypes": [
                {
                  "type": "TSOptionalType",
                  "start": 1166,
                  "end": 1173,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1166,
                    "end": 1172
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1176,
        "end": 1272,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1182,
            "end": 1195,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1186,
                "end": 1194,
                "id": {
                  "type": "Identifier",
                  "start": 1186,
                  "end": 1187,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1190,
                  "end": 1194,
                  "object": {
                    "type": "Identifier",
                    "start": 1190,
                    "end": 1191,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 1192,
                    "end": 1193,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1223,
            "end": 1238,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1223,
              "end": 1237,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1223,
                "end": 1227,
                "object": {
                  "type": "Identifier",
                  "start": 1223,
                  "end": 1224,
                  "name": "t",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 1225,
                  "end": 1226,
                  "value": 0,
                  "raw": "0"
                },
                "computed": true,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1230,
                "end": 1237,
                "value": "hello",
                "raw": "'hello'"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1243,
            "end": 1260,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1243,
              "end": 1259,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1243,
                "end": 1247,
                "object": {
                  "type": "Identifier",
                  "start": 1243,
                  "end": 1244,
                  "name": "t",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 1245,
                  "end": 1246,
                  "value": 0,
                  "raw": "0"
                },
                "computed": true,
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1250,
                "end": 1259,
                "name": "undefined",
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
      "type": "FunctionDeclaration",
      "start": 1274,
      "end": 1393,
      "id": {
        "type": "Identifier",
        "start": 1283,
        "end": 1286,
        "name": "f4a",
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
          "start": 1287,
          "end": 1308,
          "name": "t1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1289,
            "end": 1308,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 1291,
              "end": 1308,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1292,
                  "end": 1298
                },
                {
                  "type": "TSOptionalType",
                  "start": 1300,
                  "end": 1307,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1300,
                    "end": 1306
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1310,
          "end": 1340,
          "name": "t2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1312,
            "end": 1340,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 1314,
              "end": 1340,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1315,
                  "end": 1321
                },
                {
                  "type": "TSOptionalType",
                  "start": 1323,
                  "end": 1330,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1323,
                    "end": 1329
                  }
                },
                {
                  "type": "TSOptionalType",
                  "start": 1332,
                  "end": 1339,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1332,
                    "end": 1338
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1342,
        "end": 1393,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1348,
            "end": 1356,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1348,
              "end": 1355,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1348,
                "end": 1350,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1353,
                "end": 1355,
                "name": "t2",
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
      "type": "FunctionDeclaration",
      "start": 1395,
      "end": 1642,
      "id": {
        "type": "Identifier",
        "start": 1404,
        "end": 1406,
        "name": "f5",
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
          "start": 1407,
          "end": 1437,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1408,
            "end": 1437,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 1410,
              "end": 1437,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1411,
                  "end": 1417
                },
                {
                  "type": "TSOptionalType",
                  "start": 1419,
                  "end": 1426,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1419,
                    "end": 1425
                  }
                },
                {
                  "type": "TSOptionalType",
                  "start": 1428,
                  "end": 1436,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1428,
                    "end": 1435
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1439,
        "end": 1642,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1445,
            "end": 1454,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1445,
              "end": 1453,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1445,
                "end": 1446,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 1449,
                "end": 1453,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1450,
                    "end": 1452,
                    "value": 42,
                    "raw": "42"
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1459,
            "end": 1475,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1459,
              "end": 1474,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1459,
                "end": 1460,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 1463,
                "end": 1474,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1464,
                    "end": 1466,
                    "value": 42,
                    "raw": "42"
                  },
                  {
                    "type": "Literal",
                    "start": 1468,
                    "end": 1473,
                    "value": "abc",
                    "raw": "'abc'"
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1480,
            "end": 1502,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1480,
              "end": 1501,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1480,
                "end": 1481,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 1484,
                "end": 1501,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1485,
                    "end": 1487,
                    "value": 42,
                    "raw": "42"
                  },
                  {
                    "type": "Literal",
                    "start": 1489,
                    "end": 1494,
                    "value": "abc",
                    "raw": "'abc'"
                  },
                  {
                    "type": "Literal",
                    "start": 1496,
                    "end": 1500,
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
            "start": 1507,
            "end": 1519,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1507,
              "end": 1518,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1507,
                "end": 1508,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 1511,
                "end": 1518,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1512,
                    "end": 1514,
                    "value": 42,
                    "raw": "42"
                  },
                  null
                ]
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1524,
            "end": 1538,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1524,
              "end": 1537,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1524,
                "end": 1525,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 1528,
                "end": 1537,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1529,
                    "end": 1531,
                    "value": 42,
                    "raw": "42"
                  },
                  null,
                  null
                ]
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1543,
            "end": 1559,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1543,
              "end": 1558,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1543,
                "end": 1544,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 1547,
                "end": 1558,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1548,
                    "end": 1550,
                    "value": 42,
                    "raw": "42"
                  },
                  null,
                  null,
                  null
                ]
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1574,
            "end": 1589,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1574,
              "end": 1588,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1574,
                "end": 1575,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 1578,
                "end": 1588,
                "elements": [
                  null,
                  null,
                  {
                    "type": "Literal",
                    "start": 1583,
                    "end": 1587,
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
            "start": 1604,
            "end": 1630,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1604,
              "end": 1629,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1604,
                "end": 1605,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 1608,
                "end": 1629,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1609,
                    "end": 1611,
                    "value": 42,
                    "raw": "42"
                  },
                  {
                    "type": "Identifier",
                    "start": 1613,
                    "end": 1622,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Literal",
                    "start": 1624,
                    "end": 1628,
                    "value": true,
                    "raw": "true"
                  }
                ]
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
      "type": "FunctionDeclaration",
      "start": 1644,
      "end": 1835,
      "id": {
        "type": "Identifier",
        "start": 1653,
        "end": 1655,
        "name": "f6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1658,
        "end": 1835,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1664,
            "end": 1691,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1670,
                "end": 1690,
                "id": {
                  "type": "Identifier",
                  "start": 1670,
                  "end": 1672,
                  "name": "t1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 1675,
                  "end": 1690,
                  "expression": {
                    "type": "ArrayExpression",
                    "start": 1675,
                    "end": 1681,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 1676,
                        "end": 1677,
                        "value": 1,
                        "raw": "1"
                      },
                      {
                        "type": "Literal",
                        "start": 1679,
                        "end": 1680,
                        "value": 2,
                        "raw": "2"
                      }
                    ]
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1685,
                    "end": 1690,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1685,
                      "end": 1690,
                      "name": "const",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1696,
            "end": 1726,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1702,
                "end": 1725,
                "id": {
                  "type": "Identifier",
                  "start": 1702,
                  "end": 1704,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 1707,
                  "end": 1725,
                  "expression": {
                    "type": "ArrayExpression",
                    "start": 1707,
                    "end": 1716,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 1708,
                        "end": 1709,
                        "value": 1,
                        "raw": "1"
                      },
                      {
                        "type": "Literal",
                        "start": 1711,
                        "end": 1712,
                        "value": 2,
                        "raw": "2"
                      },
                      null
                    ]
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1720,
                    "end": 1725,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1720,
                      "end": 1725,
                      "name": "const",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1731,
            "end": 1763,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1737,
                "end": 1762,
                "id": {
                  "type": "Identifier",
                  "start": 1737,
                  "end": 1739,
                  "name": "t3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 1742,
                  "end": 1762,
                  "expression": {
                    "type": "ArrayExpression",
                    "start": 1742,
                    "end": 1753,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 1743,
                        "end": 1744,
                        "value": 1,
                        "raw": "1"
                      },
                      {
                        "type": "Literal",
                        "start": 1746,
                        "end": 1747,
                        "value": 2,
                        "raw": "2"
                      },
                      null,
                      null
                    ]
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1757,
                    "end": 1762,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1757,
                      "end": 1762,
                      "name": "const",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1768,
            "end": 1797,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1774,
                "end": 1796,
                "id": {
                  "type": "Identifier",
                  "start": 1774,
                  "end": 1776,
                  "name": "t4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 1779,
                  "end": 1796,
                  "expression": {
                    "type": "ArrayExpression",
                    "start": 1779,
                    "end": 1787,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 1780,
                        "end": 1781,
                        "value": 1,
                        "raw": "1"
                      },
                      null,
                      {
                        "type": "Literal",
                        "start": 1785,
                        "end": 1786,
                        "value": 2,
                        "raw": "2"
                      }
                    ]
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1791,
                    "end": 1796,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1791,
                      "end": 1796,
                      "name": "const",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1802,
            "end": 1833,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1808,
                "end": 1832,
                "id": {
                  "type": "Identifier",
                  "start": 1808,
                  "end": 1810,
                  "name": "t5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 1813,
                  "end": 1832,
                  "expression": {
                    "type": "ArrayExpression",
                    "start": 1813,
                    "end": 1823,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 1814,
                        "end": 1815,
                        "value": 1,
                        "raw": "1"
                      },
                      null,
                      null,
                      {
                        "type": "Literal",
                        "start": 1821,
                        "end": 1822,
                        "value": 2,
                        "raw": "2"
                      }
                    ]
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1827,
                    "end": 1832,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1827,
                      "end": 1832,
                      "name": "const",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1861,
      "end": 1910,
      "id": {
        "type": "Identifier",
        "start": 1866,
        "end": 1871,
        "name": "Props",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1874,
        "end": 1910,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1880,
            "end": 1892,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1880,
              "end": 1883,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1883,
              "end": 1891,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1885,
                "end": 1891
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1897,
            "end": 1908,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1897,
              "end": 1900,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1900,
              "end": 1908,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1902,
                "end": 1908
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1912,
      "end": 1968,
      "id": {
        "type": "Identifier",
        "start": 1917,
        "end": 1927,
        "name": "InputProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1930,
        "end": 1968,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1936,
            "end": 1949,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1936,
              "end": 1939,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1940,
              "end": 1948,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1942,
                "end": 1948
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1954,
            "end": 1966,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1954,
              "end": 1957,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1957,
              "end": 1965,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1959,
                "end": 1965
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1970,
      "end": 2026,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1976,
          "end": 2025,
          "id": {
            "type": "Identifier",
            "start": 1976,
            "end": 2008,
            "name": "defaultProps",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1988,
              "end": 2008,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1990,
                "end": 2008,
                "typeName": {
                  "type": "Identifier",
                  "start": 1990,
                  "end": 1994,
                  "name": "Pick",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1994,
                  "end": 2008,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1995,
                      "end": 2000,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1995,
                        "end": 2000,
                        "name": "Props",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 2002,
                      "end": 2007,
                      "literal": {
                        "type": "Literal",
                        "start": 2002,
                        "end": 2007,
                        "value": "foo",
                        "raw": "'foo'"
                      }
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2011,
            "end": 2025,
            "properties": [
              {
                "type": "Property",
                "start": 2013,
                "end": 2023,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2013,
                  "end": 2016,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2018,
                  "end": 2023,
                  "value": "foo",
                  "raw": "'foo'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2027,
      "end": 2089,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2033,
          "end": 2088,
          "id": {
            "type": "Identifier",
            "start": 2033,
            "end": 2055,
            "name": "inputProps",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2043,
              "end": 2055,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2045,
                "end": 2055,
                "typeName": {
                  "type": "Identifier",
                  "start": 2045,
                  "end": 2055,
                  "name": "InputProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2058,
            "end": 2088,
            "properties": [
              {
                "type": "Property",
                "start": 2060,
                "end": 2074,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2060,
                  "end": 2063,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 2065,
                  "end": 2074,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2076,
                "end": 2086,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2076,
                  "end": 2079,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2081,
                  "end": 2086,
                  "value": "bar",
                  "raw": "'bar'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2090,
      "end": 2154,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2096,
          "end": 2153,
          "id": {
            "type": "Identifier",
            "start": 2096,
            "end": 2116,
            "name": "completeProps",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2109,
              "end": 2116,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2111,
                "end": 2116,
                "typeName": {
                  "type": "Identifier",
                  "start": 2111,
                  "end": 2116,
                  "name": "Props",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2119,
            "end": 2153,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 2121,
                "end": 2136,
                "argument": {
                  "type": "Identifier",
                  "start": 2124,
                  "end": 2136,
                  "name": "defaultProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 2138,
                "end": 2151,
                "argument": {
                  "type": "Identifier",
                  "start": 2141,
                  "end": 2151,
                  "name": "inputProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2180,
      "end": 2224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2186,
          "end": 2223,
          "id": {
            "type": "Identifier",
            "start": 2186,
            "end": 2217,
            "name": "t1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2188,
              "end": 2217,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 2190,
                "end": 2217,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2191,
                    "end": 2197
                  },
                  {
                    "type": "TSOptionalType",
                    "start": 2199,
                    "end": 2206,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2199,
                      "end": 2205
                    }
                  },
                  {
                    "type": "TSOptionalType",
                    "start": 2208,
                    "end": 2216,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2208,
                      "end": 2215
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2220,
            "end": 2223,
            "elements": [
              {
                "type": "Literal",
                "start": 2221,
                "end": 2222,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2225,
      "end": 2280,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2231,
          "end": 2279,
          "id": {
            "type": "Identifier",
            "start": 2231,
            "end": 2262,
            "name": "t2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2233,
              "end": 2262,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 2235,
                "end": 2262,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2236,
                    "end": 2242
                  },
                  {
                    "type": "TSOptionalType",
                    "start": 2244,
                    "end": 2251,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2244,
                      "end": 2250
                    }
                  },
                  {
                    "type": "TSOptionalType",
                    "start": 2253,
                    "end": 2261,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2253,
                      "end": 2260
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2265,
            "end": 2279,
            "elements": [
              {
                "type": "Literal",
                "start": 2266,
                "end": 2267,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Identifier",
                "start": 2269,
                "end": 2278,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2281,
      "end": 2346,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2287,
          "end": 2345,
          "id": {
            "type": "Identifier",
            "start": 2287,
            "end": 2318,
            "name": "t3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2289,
              "end": 2318,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 2291,
                "end": 2318,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2292,
                    "end": 2298
                  },
                  {
                    "type": "TSOptionalType",
                    "start": 2300,
                    "end": 2307,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2300,
                      "end": 2306
                    }
                  },
                  {
                    "type": "TSOptionalType",
                    "start": 2309,
                    "end": 2317,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2309,
                      "end": 2316
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2321,
            "end": 2345,
            "elements": [
              {
                "type": "Literal",
                "start": 2322,
                "end": 2323,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 2325,
                "end": 2333,
                "value": "string",
                "raw": "\"string\""
              },
              {
                "type": "Identifier",
                "start": 2335,
                "end": 2344,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2347,
      "end": 2413,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2353,
          "end": 2412,
          "id": {
            "type": "Identifier",
            "start": 2353,
            "end": 2384,
            "name": "t4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2355,
              "end": 2384,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 2357,
                "end": 2384,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2358,
                    "end": 2364
                  },
                  {
                    "type": "TSOptionalType",
                    "start": 2366,
                    "end": 2373,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2366,
                      "end": 2372
                    }
                  },
                  {
                    "type": "TSOptionalType",
                    "start": 2375,
                    "end": 2383,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2375,
                      "end": 2382
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2387,
            "end": 2412,
            "elements": [
              {
                "type": "Literal",
                "start": 2388,
                "end": 2389,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Identifier",
                "start": 2391,
                "end": 2400,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2402,
                "end": 2411,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2439,
      "end": 2486,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2445,
          "end": 2485,
          "id": {
            "type": "Identifier",
            "start": 2445,
            "end": 2464,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2446,
              "end": 2464,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2448,
                "end": 2464,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2450,
                    "end": 2462,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2450,
                      "end": 2453,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2454,
                      "end": 2462,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2456,
                        "end": 2462
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
          "init": {
            "type": "ObjectExpression",
            "start": 2467,
            "end": 2485,
            "properties": [
              {
                "type": "Property",
                "start": 2469,
                "end": 2483,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2469,
                  "end": 2472,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 2474,
                  "end": 2483,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2487,
      "end": 2533,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2493,
          "end": 2532,
          "id": {
            "type": "Identifier",
            "start": 2493,
            "end": 2511,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2494,
              "end": 2511,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2496,
                "end": 2511,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2498,
                    "end": 2509,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2498,
                      "end": 2501,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2501,
                      "end": 2509,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2503,
                        "end": 2509
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
          "init": {
            "type": "ObjectExpression",
            "start": 2514,
            "end": 2532,
            "properties": [
              {
                "type": "Property",
                "start": 2516,
                "end": 2524,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2516,
                  "end": 2519,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2521,
                  "end": 2524,
                  "value": 123,
                  "raw": "123"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "SpreadElement",
                "start": 2526,
                "end": 2530,
                "argument": {
                  "type": "Identifier",
                  "start": 2529,
                  "end": 2530,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2587,
      "end": 2707,
      "id": {
        "type": "Identifier",
        "start": 2597,
        "end": 2601,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2602,
        "end": 2707,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 2608,
            "end": 2630,
            "parameters": [
              {
                "type": "Identifier",
                "start": 2609,
                "end": 2620,
                "name": "key",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2612,
                  "end": 2620,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2614,
                    "end": 2620
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2621,
              "end": 2629,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2623,
                "end": 2629
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 2635,
            "end": 2648,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2635,
              "end": 2638,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2639,
              "end": 2647,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2641,
                "end": 2647
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2670,
            "end": 2695,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2670,
              "end": 2673,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2674,
              "end": 2694,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2676,
                "end": 2694,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2676,
                    "end": 2682
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 2685,
                    "end": 2694
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2754,
      "end": 2785,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2766,
          "end": 2784,
          "id": {
            "type": "Identifier",
            "start": 2766,
            "end": 2784,
            "name": "ox1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2769,
              "end": 2784,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2771,
                "end": 2784,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2773,
                    "end": 2782,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2773,
                      "end": 2774,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2774,
                      "end": 2782,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2776,
                        "end": 2782
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2786,
      "end": 2829,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2798,
          "end": 2828,
          "id": {
            "type": "Identifier",
            "start": 2798,
            "end": 2828,
            "name": "ox2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2801,
              "end": 2828,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2803,
                "end": 2828,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2805,
                    "end": 2826,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2805,
                      "end": 2806,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2806,
                      "end": 2826,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 2808,
                        "end": 2826,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 2808,
                            "end": 2814
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 2817,
                            "end": 2826
                          }
                        ]
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2830,
      "end": 2862,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2842,
          "end": 2861,
          "id": {
            "type": "Identifier",
            "start": 2842,
            "end": 2861,
            "name": "ox3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2845,
              "end": 2861,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2847,
                "end": 2861,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2849,
                    "end": 2859,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2849,
                      "end": 2850,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2851,
                      "end": 2859,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2853,
                        "end": 2859
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2863,
      "end": 2907,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2875,
          "end": 2906,
          "id": {
            "type": "Identifier",
            "start": 2875,
            "end": 2906,
            "name": "ox4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2878,
              "end": 2906,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2880,
                "end": 2906,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2882,
                    "end": 2904,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2882,
                      "end": 2883,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2884,
                      "end": 2904,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 2886,
                        "end": 2904,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 2886,
                            "end": 2892
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 2895,
                            "end": 2904
                          }
                        ]
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2909,
      "end": 2935,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2921,
          "end": 2934,
          "id": {
            "type": "Identifier",
            "start": 2921,
            "end": 2934,
            "name": "tx1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2924,
              "end": 2934,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 2926,
                "end": 2934,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2927,
                    "end": 2933
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2936,
      "end": 2974,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2948,
          "end": 2973,
          "id": {
            "type": "Identifier",
            "start": 2948,
            "end": 2973,
            "name": "tx2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2951,
              "end": 2973,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 2953,
                "end": 2973,
                "elementTypes": [
                  {
                    "type": "TSUnionType",
                    "start": 2954,
                    "end": 2972,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2954,
                        "end": 2960
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 2963,
                        "end": 2972
                      }
                    ]
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2975,
      "end": 3002,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2987,
          "end": 3001,
          "id": {
            "type": "Identifier",
            "start": 2987,
            "end": 3001,
            "name": "tx3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2990,
              "end": 3001,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 2992,
                "end": 3001,
                "elementTypes": [
                  {
                    "type": "TSOptionalType",
                    "start": 2993,
                    "end": 3000,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2993,
                      "end": 2999
                    }
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 3003,
      "end": 3044,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3015,
          "end": 3043,
          "id": {
            "type": "Identifier",
            "start": 3015,
            "end": 3043,
            "name": "tx4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3018,
              "end": 3043,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 3020,
                "end": 3043,
                "elementTypes": [
                  {
                    "type": "TSOptionalType",
                    "start": 3021,
                    "end": 3042,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 3022,
                      "end": 3040,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 3022,
                          "end": 3028
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 3031,
                          "end": 3040
                        }
                      ]
                    }
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 3046,
      "end": 3087,
      "id": {
        "type": "Identifier",
        "start": 3063,
        "end": 3066,
        "name": "f11",
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
          "start": 3070,
          "end": 3082,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3071,
            "end": 3082,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 3073,
              "end": 3082,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3075,
                  "end": 3080,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3075,
                    "end": 3076,
                    "name": "p",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3077,
                    "end": 3080,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3079,
                      "end": 3080,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3079,
                        "end": 3080,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3066,
        "end": 3069,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3067,
            "end": 3068,
            "name": {
              "type": "Identifier",
              "start": 3067,
              "end": 3068,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3083,
        "end": 3086,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3085,
          "end": 3086,
          "typeName": {
            "type": "Identifier",
            "start": 3085,
            "end": 3086,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3089,
      "end": 3098,
      "expression": {
        "type": "CallExpression",
        "start": 3089,
        "end": 3097,
        "callee": {
          "type": "Identifier",
          "start": 3089,
          "end": 3092,
          "name": "f11",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 3093,
            "end": 3096,
            "name": "ox1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3110,
      "end": 3119,
      "expression": {
        "type": "CallExpression",
        "start": 3110,
        "end": 3118,
        "callee": {
          "type": "Identifier",
          "start": 3110,
          "end": 3113,
          "name": "f11",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 3114,
            "end": 3117,
            "name": "ox2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3143,
      "end": 3152,
      "expression": {
        "type": "CallExpression",
        "start": 3143,
        "end": 3151,
        "callee": {
          "type": "Identifier",
          "start": 3143,
          "end": 3146,
          "name": "f11",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 3147,
            "end": 3150,
            "name": "ox3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3164,
      "end": 3173,
      "expression": {
        "type": "CallExpression",
        "start": 3164,
        "end": 3172,
        "callee": {
          "type": "Identifier",
          "start": 3164,
          "end": 3167,
          "name": "f11",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 3168,
            "end": 3171,
            "name": "ox4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 3198,
      "end": 3234,
      "id": {
        "type": "Identifier",
        "start": 3215,
        "end": 3218,
        "name": "f12",
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
          "start": 3222,
          "end": 3229,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3223,
            "end": 3229,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 3225,
              "end": 3229,
              "elementTypes": [
                {
                  "type": "TSOptionalType",
                  "start": 3226,
                  "end": 3228,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3226,
                    "end": 3227,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3226,
                      "end": 3227,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3218,
        "end": 3221,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3219,
            "end": 3220,
            "name": {
              "type": "Identifier",
              "start": 3219,
              "end": 3220,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3230,
        "end": 3233,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3232,
          "end": 3233,
          "typeName": {
            "type": "Identifier",
            "start": 3232,
            "end": 3233,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3236,
      "end": 3245,
      "expression": {
        "type": "CallExpression",
        "start": 3236,
        "end": 3244,
        "callee": {
          "type": "Identifier",
          "start": 3236,
          "end": 3239,
          "name": "f12",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 3240,
            "end": 3243,
            "name": "tx1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3257,
      "end": 3266,
      "expression": {
        "type": "CallExpression",
        "start": 3257,
        "end": 3265,
        "callee": {
          "type": "Identifier",
          "start": 3257,
          "end": 3260,
          "name": "f12",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 3261,
            "end": 3264,
            "name": "tx2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3290,
      "end": 3299,
      "expression": {
        "type": "CallExpression",
        "start": 3290,
        "end": 3298,
        "callee": {
          "type": "Identifier",
          "start": 3290,
          "end": 3293,
          "name": "f12",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 3294,
            "end": 3297,
            "name": "tx3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3311,
      "end": 3320,
      "expression": {
        "type": "CallExpression",
        "start": 3311,
        "end": 3319,
        "callee": {
          "type": "Identifier",
          "start": 3311,
          "end": 3314,
          "name": "f12",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 3315,
            "end": 3318,
            "name": "tx4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 3345,
      "end": 3387,
      "id": {
        "type": "Identifier",
        "start": 3362,
        "end": 3365,
        "name": "f13",
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
          "start": 3369,
          "end": 3382,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3370,
            "end": 3382,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3372,
              "end": 3382,
              "typeName": {
                "type": "Identifier",
                "start": 3372,
                "end": 3379,
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3379,
                "end": 3382,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3380,
                    "end": 3381,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3380,
                      "end": 3381,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3365,
        "end": 3368,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3366,
            "end": 3367,
            "name": {
              "type": "Identifier",
              "start": 3366,
              "end": 3367,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3383,
        "end": 3386,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3385,
          "end": 3386,
          "typeName": {
            "type": "Identifier",
            "start": 3385,
            "end": 3386,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3389,
      "end": 3398,
      "expression": {
        "type": "CallExpression",
        "start": 3389,
        "end": 3397,
        "callee": {
          "type": "Identifier",
          "start": 3389,
          "end": 3392,
          "name": "f13",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 3393,
            "end": 3396,
            "name": "ox1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3417,
      "end": 3426,
      "expression": {
        "type": "CallExpression",
        "start": 3417,
        "end": 3425,
        "callee": {
          "type": "Identifier",
          "start": 3417,
          "end": 3420,
          "name": "f13",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 3421,
            "end": 3424,
            "name": "ox2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3457,
      "end": 3466,
      "expression": {
        "type": "CallExpression",
        "start": 3457,
        "end": 3465,
        "callee": {
          "type": "Identifier",
          "start": 3457,
          "end": 3460,
          "name": "f13",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 3461,
            "end": 3464,
            "name": "ox3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3485,
      "end": 3494,
      "expression": {
        "type": "CallExpression",
        "start": 3485,
        "end": 3493,
        "callee": {
          "type": "Identifier",
          "start": 3485,
          "end": 3488,
          "name": "f13",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 3489,
            "end": 3492,
            "name": "ox4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3526,
      "end": 3535,
      "expression": {
        "type": "CallExpression",
        "start": 3526,
        "end": 3534,
        "callee": {
          "type": "Identifier",
          "start": 3526,
          "end": 3529,
          "name": "f13",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 3530,
            "end": 3533,
            "name": "tx1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3549,
      "end": 3558,
      "expression": {
        "type": "CallExpression",
        "start": 3549,
        "end": 3557,
        "callee": {
          "type": "Identifier",
          "start": 3549,
          "end": 3552,
          "name": "f13",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 3553,
            "end": 3556,
            "name": "tx2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3584,
      "end": 3593,
      "expression": {
        "type": "CallExpression",
        "start": 3584,
        "end": 3592,
        "callee": {
          "type": "Identifier",
          "start": 3584,
          "end": 3587,
          "name": "f13",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 3588,
            "end": 3591,
            "name": "tx3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3607,
      "end": 3616,
      "expression": {
        "type": "CallExpression",
        "start": 3607,
        "end": 3615,
        "callee": {
          "type": "Identifier",
          "start": 3607,
          "end": 3610,
          "name": "f13",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 3611,
            "end": 3614,
            "name": "tx4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3665,
      "end": 3701,
      "id": {
        "type": "Identifier",
        "start": 3670,
        "end": 3681,
        "name": "Undefinable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3681,
        "end": 3684,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3682,
            "end": 3683,
            "name": {
              "type": "Identifier",
              "start": 3682,
              "end": 3683,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 3687,
        "end": 3700,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 3687,
            "end": 3688,
            "typeName": {
              "type": "Identifier",
              "start": 3687,
              "end": 3688,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 3691,
            "end": 3700
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3703,
      "end": 3869,
      "id": {
        "type": "Identifier",
        "start": 3712,
        "end": 3730,
        "name": "expectNotUndefined",
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
          "start": 3734,
          "end": 3755,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3739,
            "end": 3755,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3741,
              "end": 3755,
              "typeName": {
                "type": "Identifier",
                "start": 3741,
                "end": 3752,
                "name": "Undefinable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3752,
                "end": 3755,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3753,
                    "end": 3754,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3753,
                      "end": 3754,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
        "start": 3760,
        "end": 3869,
        "body": [
          {
            "type": "IfStatement",
            "start": 3766,
            "end": 3849,
            "test": {
              "type": "BinaryExpression",
              "start": 3770,
              "end": 3789,
              "left": {
                "type": "Identifier",
                "start": 3770,
                "end": 3775,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3780,
                "end": 3789,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3791,
              "end": 3849,
              "body": [
                {
                  "type": "ThrowStatement",
                  "start": 3801,
                  "end": 3843,
                  "argument": {
                    "type": "NewExpression",
                    "start": 3807,
                    "end": 3842,
                    "callee": {
                      "type": "Identifier",
                      "start": 3811,
                      "end": 3820,
                      "name": "TypeError",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 3821,
                        "end": 3841,
                        "value": "value is undefined",
                        "raw": "'value is undefined'"
                      }
                    ],
                    "typeArguments": null
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 3854,
            "end": 3867,
            "argument": {
              "type": "Identifier",
              "start": 3861,
              "end": 3866,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3730,
        "end": 3733,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3731,
            "end": 3732,
            "name": {
              "type": "Identifier",
              "start": 3731,
              "end": 3732,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3756,
        "end": 3759,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3758,
          "end": 3759,
          "typeName": {
            "type": "Identifier",
            "start": 3758,
            "end": 3759,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 3871,
      "end": 3906,
      "id": {
        "type": "Identifier",
        "start": 3881,
        "end": 3884,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 3885,
        "end": 3906,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 3891,
            "end": 3904,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3891,
              "end": 3894,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3895,
              "end": 3903,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3897,
                "end": 3903
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3908,
      "end": 4025,
      "id": {
        "type": "Identifier",
        "start": 3917,
        "end": 3919,
        "name": "aa",
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
          "start": 3920,
          "end": 3930,
          "name": "input",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3925,
            "end": 3930,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3927,
              "end": 3930,
              "typeName": {
                "type": "Identifier",
                "start": 3927,
                "end": 3930,
                "name": "Bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3938,
        "end": 4025,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3944,
            "end": 3998,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3950,
                "end": 3997,
                "id": {
                  "type": "Identifier",
                  "start": 3950,
                  "end": 3965,
                  "name": "notUndefinedVal",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 3968,
                  "end": 3997,
                  "callee": {
                    "type": "Identifier",
                    "start": 3968,
                    "end": 3986,
                    "name": "expectNotUndefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 3987,
                      "end": 3996,
                      "object": {
                        "type": "Identifier",
                        "start": 3987,
                        "end": 3992,
                        "name": "input",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3993,
                        "end": 3996,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 4003,
            "end": 4023,
            "expression": {
              "type": "CallExpression",
              "start": 4003,
              "end": 4022,
              "callee": {
                "type": "Identifier",
                "start": 4003,
                "end": 4005,
                "name": "bb",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 4006,
                  "end": 4021,
                  "name": "notUndefinedVal",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3931,
        "end": 3937,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 3933,
          "end": 3937
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 4027,
      "end": 4068,
      "id": {
        "type": "Identifier",
        "start": 4044,
        "end": 4046,
        "name": "bb",
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
          "start": 4047,
          "end": 4060,
          "name": "input",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4052,
            "end": 4060,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 4054,
              "end": 4060
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
        "start": 4061,
        "end": 4067,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 4063,
          "end": 4067
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 4070,
      "end": 4143,
      "id": {
        "type": "Identifier",
        "start": 4080,
        "end": 4082,
        "name": "U1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 4083,
        "end": 4143,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 4089,
            "end": 4101,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 4089,
              "end": 4093,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4093,
              "end": 4101,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4095,
                "end": 4101
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 4106,
            "end": 4141,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 4106,
              "end": 4111,
              "name": "email",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4112,
              "end": 4141,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 4114,
                "end": 4141,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 4114,
                    "end": 4120
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 4123,
                    "end": 4129
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 4132,
                    "end": 4141
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 4144,
      "end": 4205,
      "id": {
        "type": "Identifier",
        "start": 4154,
        "end": 4156,
        "name": "U2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 4157,
        "end": 4205,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 4163,
            "end": 4175,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 4163,
              "end": 4167,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4167,
              "end": 4175,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4169,
                "end": 4175
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 4180,
            "end": 4203,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 4180,
              "end": 4185,
              "name": "email",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4186,
              "end": 4203,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 4188,
                "end": 4203,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 4188,
                    "end": 4194
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 4197,
                    "end": 4203
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4206,
      "end": 4251,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4220,
          "end": 4251,
          "id": {
            "type": "Identifier",
            "start": 4220,
            "end": 4251,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4221,
              "end": 4251,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 4223,
                "end": 4251,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 4223,
                    "end": 4229
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 4232,
                    "end": 4239
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 4242,
                    "end": 4251
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 4252,
      "end": 4272,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4266,
          "end": 4272,
          "id": {
            "type": "Identifier",
            "start": 4266,
            "end": 4272,
            "name": "u1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4268,
              "end": 4272,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4270,
                "end": 4272,
                "typeName": {
                  "type": "Identifier",
                  "start": 4270,
                  "end": 4272,
                  "name": "U1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 4273,
      "end": 4291,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4285,
          "end": 4291,
          "id": {
            "type": "Identifier",
            "start": 4285,
            "end": 4291,
            "name": "u2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4287,
              "end": 4291,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4289,
                "end": 4291,
                "typeName": {
                  "type": "Identifier",
                  "start": 4289,
                  "end": 4291,
                  "name": "U2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 4292,
      "end": 4304,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4292,
        "end": 4304,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 4292,
          "end": 4300,
          "object": {
            "type": "Identifier",
            "start": 4292,
            "end": 4294,
            "name": "u1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 4295,
            "end": 4300,
            "name": "email",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 4303,
          "end": 4304,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4362,
      "end": 4374,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4362,
        "end": 4374,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 4362,
          "end": 4370,
          "object": {
            "type": "Identifier",
            "start": 4362,
            "end": 4364,
            "name": "u2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 4365,
            "end": 4370,
            "name": "email",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 4373,
          "end": 4374,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4414,
      "end": 4459,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4414,
        "end": 4459,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4414,
          "end": 4416,
          "name": "u2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 4419,
          "end": 4459,
          "properties": [
            {
              "type": "Property",
              "start": 4425,
              "end": 4435,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 4425,
                "end": 4429,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 4431,
                "end": 4435,
                "value": "hi",
                "raw": "'hi'"
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 4441,
              "end": 4457,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 4441,
                "end": 4446,
                "name": "email",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 4448,
                "end": 4457,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 4483,
      "end": 4529,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4495,
          "end": 4529,
          "id": {
            "type": "Identifier",
            "start": 4495,
            "end": 4529,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4496,
              "end": 4529,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 4498,
                "end": 4529,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 4499,
                    "end": 4527,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 4500,
                        "end": 4509,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4501,
                          "end": 4509,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4503,
                            "end": 4509
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4510,
                      "end": 4527,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 4512,
                        "end": 4527,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 4512,
                            "end": 4518
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 4521,
                            "end": 4527
                          }
                        ]
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 4530,
      "end": 4567,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4542,
          "end": 4567,
          "id": {
            "type": "Identifier",
            "start": 4542,
            "end": 4567,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4543,
              "end": 4567,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 4545,
                "end": 4567,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 4546,
                    "end": 4556,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4546,
                      "end": 4547,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4547,
                      "end": 4555,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4549,
                        "end": 4555
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 4557,
                    "end": 4566,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4557,
                      "end": 4558,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4558,
                      "end": 4566,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 4560,
                        "end": 4566
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 4568,
      "end": 4606,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4580,
          "end": 4606,
          "id": {
            "type": "Identifier",
            "start": 4580,
            "end": 4606,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4581,
              "end": 4606,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 4583,
                "end": 4606,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 4584,
                    "end": 4594,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4584,
                      "end": 4585,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4585,
                      "end": 4593,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4587,
                        "end": 4593
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 4595,
                    "end": 4605,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4595,
                      "end": 4596,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4597,
                      "end": 4605,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 4599,
                        "end": 4605
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 4607,
      "end": 4657,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4619,
          "end": 4657,
          "id": {
            "type": "Identifier",
            "start": 4619,
            "end": 4657,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4620,
              "end": 4657,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 4622,
                "end": 4657,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 4623,
                    "end": 4633,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4623,
                      "end": 4624,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4624,
                      "end": 4632,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4626,
                        "end": 4632
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 4634,
                    "end": 4655,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4634,
                      "end": 4635,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4635,
                      "end": 4655,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 4637,
                        "end": 4655,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 4637,
                            "end": 4643
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 4646,
                            "end": 4655
                          }
                        ]
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 4658,
      "end": 4709,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4670,
          "end": 4709,
          "id": {
            "type": "Identifier",
            "start": 4670,
            "end": 4709,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4671,
              "end": 4709,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 4673,
                "end": 4709,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 4674,
                    "end": 4684,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4674,
                      "end": 4675,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4675,
                      "end": 4683,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4677,
                        "end": 4683
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 4685,
                    "end": 4707,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4685,
                      "end": 4686,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4687,
                      "end": 4707,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 4689,
                        "end": 4707,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 4689,
                            "end": 4695
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 4698,
                            "end": 4707
                          }
                        ]
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
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 4711,
      "end": 4717,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4711,
        "end": 4716,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4711,
          "end": 4712,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 4715,
          "end": 4716,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4718,
      "end": 4724,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4718,
        "end": 4723,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4718,
          "end": 4719,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 4722,
          "end": 4723,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4725,
      "end": 4731,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4725,
        "end": 4730,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4725,
          "end": 4726,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 4729,
          "end": 4730,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4742,
      "end": 4748,
      "expression": {
        "type": "AssignmentExpression",
        "start": 4742,
        "end": 4747,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 4742,
          "end": 4743,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 4746,
          "end": 4747,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 4782,
      "end": 4836,
      "id": {
        "type": "Identifier",
        "start": 4792,
        "end": 4806,
        "name": "PropsFromReact",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 4807,
        "end": 4836,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 4813,
            "end": 4834,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 4813,
              "end": 4820,
              "name": "onClick",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4821,
              "end": 4833,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 4823,
                "end": 4833,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4826,
                  "end": 4833,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 4829,
                    "end": 4833
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 4838,
      "end": 4911,
      "id": {
        "type": "Identifier",
        "start": 4848,
        "end": 4867,
        "name": "PropsFromMaterialUI",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 4868,
        "end": 4911,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 4874,
            "end": 4909,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 4874,
              "end": 4881,
              "name": "onClick",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4882,
              "end": 4908,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 4884,
                "end": 4908,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 4885,
                    "end": 4895,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4888,
                      "end": 4895,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 4891,
                        "end": 4895
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 4899,
                    "end": 4908
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4913,
      "end": 4979,
      "id": {
        "type": "Identifier",
        "start": 4918,
        "end": 4939,
        "name": "TheTypeFromMaterialUI",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 4942,
        "end": 4978,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 4942,
            "end": 4956,
            "typeName": {
              "type": "Identifier",
              "start": 4942,
              "end": 4956,
              "name": "PropsFromReact",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 4959,
            "end": 4978,
            "typeName": {
              "type": "Identifier",
              "start": 4959,
              "end": 4978,
              "name": "PropsFromMaterialUI",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 4981,
      "end": 5061,
      "id": {
        "type": "Identifier",
        "start": 4991,
        "end": 5008,
        "name": "NavBottomListItem",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 5017,
          "end": 5038,
          "expression": {
            "type": "Identifier",
            "start": 5017,
            "end": 5038,
            "name": "TheTypeFromMaterialUI",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 5039,
        "end": 5061,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 5045,
            "end": 5059,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 5045,
              "end": 5050,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5050,
              "end": 5058,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5052,
                "end": 5058
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5085,
      "end": 5105,
      "id": {
        "type": "Identifier",
        "start": 5090,
        "end": 5092,
        "name": "UA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUndefinedKeyword",
        "start": 5095,
        "end": 5104
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5134,
      "end": 5163,
      "id": {
        "type": "Identifier",
        "start": 5139,
        "end": 5141,
        "name": "UB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 5144,
        "end": 5162,
        "objectType": {
          "type": "TSTypeLiteral",
          "start": 5144,
          "end": 5157,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 5146,
              "end": 5155,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 5146,
                "end": 5147,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 5148,
                "end": 5155,
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 5150,
                  "end": 5155
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 5158,
          "end": 5161,
          "literal": {
            "type": "Literal",
            "start": 5158,
            "end": 5161,
            "value": "x",
            "raw": "'x'"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5201,
      "end": 5219,
      "id": {
        "type": "Identifier",
        "start": 5206,
        "end": 5208,
        "name": "UC",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 5211,
        "end": 5218,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 5211,
            "end": 5213,
            "typeName": {
              "type": "Identifier",
              "start": 5211,
              "end": 5213,
              "name": "UA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 5216,
            "end": 5218,
            "typeName": {
              "type": "Identifier",
              "start": 5216,
              "end": 5218,
              "name": "UB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
