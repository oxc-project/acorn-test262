__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 811,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 29,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 23,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 23,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 9,
                "end": 23,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 11,
                    "end": 21,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11,
                      "end": 12,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 13,
                      "end": 21,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 15,
                        "end": 21
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
            "start": 26,
            "end": 29,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 40,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 39,
            "end": 40,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 56,
      "expression": {
        "type": "AssignmentExpression",
        "start": 43,
        "end": 54,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 43,
          "end": 50,
          "properties": [
            {
              "type": "Property",
              "start": 44,
              "end": 49,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 44,
                "end": 45,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 44,
                "end": 49,
                "left": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 45,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 48,
                  "end": 49,
                  "value": 1,
                  "raw": "1"
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 53,
          "end": 54,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 80,
      "end": 298,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 91,
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
          "start": 92,
          "end": 136,
          "name": "options",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 100,
            "end": 136,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 102,
              "end": 136,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 104,
                  "end": 119,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 109,
                    "name": "color",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 110,
                    "end": 118,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 112,
                      "end": 118
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 120,
                  "end": 134,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 125,
                    "name": "width",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 126,
                    "end": 134,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 128,
                      "end": 134
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 138,
        "end": 298,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 144,
            "end": 181,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 148,
                "end": 180,
                "id": {
                  "type": "ObjectPattern",
                  "start": 148,
                  "end": 164,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 150,
                      "end": 155,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 155,
                        "name": "color",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 155,
                        "name": "color",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 157,
                      "end": 162,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 162,
                        "name": "width",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 162,
                        "name": "width",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 167,
                  "end": 180,
                  "left": {
                    "type": "Identifier",
                    "start": 167,
                    "end": 174,
                    "name": "options",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "ObjectExpression",
                    "start": 178,
                    "end": 180,
                    "properties": []
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 186,
            "end": 221,
            "expression": {
              "type": "AssignmentExpression",
              "start": 187,
              "end": 219,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 187,
                "end": 203,
                "properties": [
                  {
                    "type": "Property",
                    "start": 189,
                    "end": 194,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 189,
                      "end": 194,
                      "name": "color",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 189,
                      "end": 194,
                      "name": "color",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 196,
                    "end": 201,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 201,
                      "name": "width",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 201,
                      "name": "width",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "LogicalExpression",
                "start": 206,
                "end": 219,
                "left": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 213,
                  "name": "options",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "||",
                "right": {
                  "type": "ObjectExpression",
                  "start": 217,
                  "end": 219,
                  "properties": []
                }
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 226,
            "end": 257,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 230,
                "end": 256,
                "id": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 232,
                  "name": "x1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 235,
                  "end": 256,
                  "object": {
                    "type": "LogicalExpression",
                    "start": 236,
                    "end": 249,
                    "left": {
                      "type": "Identifier",
                      "start": 236,
                      "end": 243,
                      "name": "options",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "||",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 247,
                      "end": 249,
                      "properties": []
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 256,
                    "name": "color",
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
            "start": 262,
            "end": 296,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 266,
                "end": 295,
                "id": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 268,
                  "name": "x2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 271,
                  "end": 295,
                  "object": {
                    "type": "LogicalExpression",
                    "start": 272,
                    "end": 285,
                    "left": {
                      "type": "Identifier",
                      "start": 272,
                      "end": 279,
                      "name": "options",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "||",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 283,
                      "end": 285,
                      "properties": []
                    }
                  },
                  "property": {
                    "type": "Literal",
                    "start": 287,
                    "end": 294,
                    "value": "color",
                    "raw": "\"color\""
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 300,
      "end": 446,
      "id": {
        "type": "Identifier",
        "start": 309,
        "end": 311,
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
          "start": 312,
          "end": 340,
          "name": "options",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 320,
            "end": 340,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 322,
              "end": 340,
              "elementTypes": [
                {
                  "type": "TSOptionalType",
                  "start": 323,
                  "end": 330,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 323,
                    "end": 329
                  }
                },
                {
                  "type": "TSOptionalType",
                  "start": 332,
                  "end": 339,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 332,
                    "end": 338
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 342,
        "end": 446,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 348,
            "end": 379,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 352,
                "end": 378,
                "id": {
                  "type": "ArrayPattern",
                  "start": 352,
                  "end": 362,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 353,
                      "end": 356,
                      "name": "str",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 358,
                      "end": 361,
                      "name": "num",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 365,
                  "end": 378,
                  "left": {
                    "type": "Identifier",
                    "start": 365,
                    "end": 372,
                    "name": "options",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "ArrayExpression",
                    "start": 376,
                    "end": 378,
                    "elements": []
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 384,
            "end": 411,
            "expression": {
              "type": "AssignmentExpression",
              "start": 384,
              "end": 410,
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "start": 384,
                "end": 394,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 385,
                    "end": 388,
                    "name": "str",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 390,
                    "end": 393,
                    "name": "num",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "LogicalExpression",
                "start": 397,
                "end": 410,
                "left": {
                  "type": "Identifier",
                  "start": 397,
                  "end": 404,
                  "name": "options",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "||",
                "right": {
                  "type": "ArrayExpression",
                  "start": 408,
                  "end": 410,
                  "elements": []
                }
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 416,
            "end": 444,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 420,
                "end": 443,
                "id": {
                  "type": "Identifier",
                  "start": 420,
                  "end": 422,
                  "name": "x1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 425,
                  "end": 443,
                  "object": {
                    "type": "LogicalExpression",
                    "start": 426,
                    "end": 439,
                    "left": {
                      "type": "Identifier",
                      "start": 426,
                      "end": 433,
                      "name": "options",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "||",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 437,
                      "end": 439,
                      "properties": []
                    }
                  },
                  "property": {
                    "type": "Literal",
                    "start": 441,
                    "end": 442,
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
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 448,
      "end": 664,
      "id": {
        "type": "Identifier",
        "start": 457,
        "end": 459,
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
          "start": 460,
          "end": 502,
          "name": "options",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 468,
            "end": 502,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 470,
              "end": 502,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 472,
                  "end": 486,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 472,
                    "end": 477,
                    "name": "color",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 477,
                    "end": 485,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 479,
                      "end": 485
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 487,
                  "end": 500,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 487,
                    "end": 492,
                    "name": "width",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 492,
                    "end": 500,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 494,
                      "end": 500
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 504,
        "end": 664,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 510,
            "end": 547,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 514,
                "end": 546,
                "id": {
                  "type": "ObjectPattern",
                  "start": 514,
                  "end": 530,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 516,
                      "end": 521,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 516,
                        "end": 521,
                        "name": "color",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 516,
                        "end": 521,
                        "name": "color",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 523,
                      "end": 528,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 523,
                        "end": 528,
                        "name": "width",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 523,
                        "end": 528,
                        "name": "width",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 533,
                  "end": 546,
                  "left": {
                    "type": "Identifier",
                    "start": 533,
                    "end": 540,
                    "name": "options",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "ObjectExpression",
                    "start": 544,
                    "end": 546,
                    "properties": []
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 552,
            "end": 587,
            "expression": {
              "type": "AssignmentExpression",
              "start": 553,
              "end": 585,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 553,
                "end": 569,
                "properties": [
                  {
                    "type": "Property",
                    "start": 555,
                    "end": 560,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 555,
                      "end": 560,
                      "name": "color",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 555,
                      "end": 560,
                      "name": "color",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 562,
                    "end": 567,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 562,
                      "end": 567,
                      "name": "width",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 562,
                      "end": 567,
                      "name": "width",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "LogicalExpression",
                "start": 572,
                "end": 585,
                "left": {
                  "type": "Identifier",
                  "start": 572,
                  "end": 579,
                  "name": "options",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "||",
                "right": {
                  "type": "ObjectExpression",
                  "start": 583,
                  "end": 585,
                  "properties": []
                }
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 592,
            "end": 623,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 596,
                "end": 622,
                "id": {
                  "type": "Identifier",
                  "start": 596,
                  "end": 598,
                  "name": "x1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 601,
                  "end": 622,
                  "object": {
                    "type": "LogicalExpression",
                    "start": 602,
                    "end": 615,
                    "left": {
                      "type": "Identifier",
                      "start": 602,
                      "end": 609,
                      "name": "options",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "||",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 613,
                      "end": 615,
                      "properties": []
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 617,
                    "end": 622,
                    "name": "color",
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
            "start": 628,
            "end": 662,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 632,
                "end": 661,
                "id": {
                  "type": "Identifier",
                  "start": 632,
                  "end": 634,
                  "name": "x2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 637,
                  "end": 661,
                  "object": {
                    "type": "LogicalExpression",
                    "start": 638,
                    "end": 651,
                    "left": {
                      "type": "Identifier",
                      "start": 638,
                      "end": 645,
                      "name": "options",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "||",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 649,
                      "end": 651,
                      "properties": []
                    }
                  },
                  "property": {
                    "type": "Literal",
                    "start": 653,
                    "end": 660,
                    "value": "color",
                    "raw": "\"color\""
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 666,
      "end": 810,
      "id": {
        "type": "Identifier",
        "start": 675,
        "end": 677,
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
          "start": 678,
          "end": 704,
          "name": "options",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 686,
            "end": 704,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 688,
              "end": 704,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 689,
                  "end": 695
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 697,
                  "end": 703
                }
              ]
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 706,
        "end": 810,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 712,
            "end": 743,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 716,
                "end": 742,
                "id": {
                  "type": "ArrayPattern",
                  "start": 716,
                  "end": 726,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 717,
                      "end": 720,
                      "name": "str",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 722,
                      "end": 725,
                      "name": "num",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 729,
                  "end": 742,
                  "left": {
                    "type": "Identifier",
                    "start": 729,
                    "end": 736,
                    "name": "options",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "ArrayExpression",
                    "start": 740,
                    "end": 742,
                    "elements": []
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 748,
            "end": 775,
            "expression": {
              "type": "AssignmentExpression",
              "start": 748,
              "end": 774,
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "start": 748,
                "end": 758,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 749,
                    "end": 752,
                    "name": "str",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 754,
                    "end": 757,
                    "name": "num",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "LogicalExpression",
                "start": 761,
                "end": 774,
                "left": {
                  "type": "Identifier",
                  "start": 761,
                  "end": 768,
                  "name": "options",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "||",
                "right": {
                  "type": "ArrayExpression",
                  "start": 772,
                  "end": 774,
                  "elements": []
                }
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 780,
            "end": 808,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 784,
                "end": 807,
                "id": {
                  "type": "Identifier",
                  "start": 784,
                  "end": 786,
                  "name": "x1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 789,
                  "end": 807,
                  "object": {
                    "type": "LogicalExpression",
                    "start": 790,
                    "end": 803,
                    "left": {
                      "type": "Identifier",
                      "start": 790,
                      "end": 797,
                      "name": "options",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "||",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 801,
                      "end": 803,
                      "properties": []
                    }
                  },
                  "property": {
                    "type": "Literal",
                    "start": 805,
                    "end": 806,
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
