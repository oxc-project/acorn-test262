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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 23,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                    "key": {
                      "type": "Identifier",
                      "start": 11,
                      "end": 12,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 13,
                      "end": 21,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 15,
                        "end": 21
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 26,
            "end": 29,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 39,
            "end": 40,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 44,
              "end": 49,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 44,
                "end": 45,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "start": 44,
                "end": 49,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 45,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 48,
                  "end": 49,
                  "raw": "1",
                  "value": 1
                }
              }
            }
          ]
        },
        "right": {
          "type": "Identifier",
          "start": 53,
          "end": 54,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 80,
      "end": 298,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 148,
                  "end": 164,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 150,
                      "end": 155,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 155,
                        "decorators": [],
                        "name": "color",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 155,
                        "decorators": [],
                        "name": "color",
                        "optional": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 157,
                      "end": 162,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 162,
                        "decorators": [],
                        "name": "width",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 157,
                        "end": 162,
                        "decorators": [],
                        "name": "width",
                        "optional": false
                      }
                    }
                  ]
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 167,
                  "end": 180,
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "start": 167,
                    "end": 174,
                    "decorators": [],
                    "name": "options",
                    "optional": false
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "start": 178,
                    "end": 180,
                    "properties": []
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 189,
                    "end": 194,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 189,
                      "end": 194,
                      "decorators": [],
                      "name": "color",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 189,
                      "end": 194,
                      "decorators": [],
                      "name": "color",
                      "optional": false
                    }
                  },
                  {
                    "type": "Property",
                    "start": 196,
                    "end": 201,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 201,
                      "decorators": [],
                      "name": "width",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 201,
                      "decorators": [],
                      "name": "width",
                      "optional": false
                    }
                  }
                ]
              },
              "right": {
                "type": "LogicalExpression",
                "start": 206,
                "end": 219,
                "operator": "||",
                "left": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 213,
                  "decorators": [],
                  "name": "options",
                  "optional": false
                },
                "right": {
                  "type": "ObjectExpression",
                  "start": 217,
                  "end": 219,
                  "properties": []
                }
              }
            }
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 232,
                  "decorators": [],
                  "name": "x1",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 235,
                  "end": 256,
                  "computed": false,
                  "object": {
                    "type": "LogicalExpression",
                    "start": 236,
                    "end": 249,
                    "operator": "||",
                    "left": {
                      "type": "Identifier",
                      "start": 236,
                      "end": 243,
                      "decorators": [],
                      "name": "options",
                      "optional": false
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 247,
                      "end": 249,
                      "properties": []
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 256,
                    "decorators": [],
                    "name": "color",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 268,
                  "decorators": [],
                  "name": "x2",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 271,
                  "end": 295,
                  "computed": true,
                  "object": {
                    "type": "LogicalExpression",
                    "start": 272,
                    "end": 285,
                    "operator": "||",
                    "left": {
                      "type": "Identifier",
                      "start": 272,
                      "end": 279,
                      "decorators": [],
                      "name": "options",
                      "optional": false
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 283,
                      "end": 285,
                      "properties": []
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 287,
                    "end": 294,
                    "raw": "\"color\"",
                    "value": "color"
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 91,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 92,
          "end": 136,
          "decorators": [],
          "name": "options",
          "optional": true,
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
                  "key": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 109,
                    "decorators": [],
                    "name": "color",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 110,
                    "end": 118,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 112,
                      "end": 118
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 120,
                  "end": 134,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 125,
                    "decorators": [],
                    "name": "width",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 126,
                    "end": 134,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 128,
                      "end": 134
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 300,
      "end": 446,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "ArrayPattern",
                  "start": 352,
                  "end": 362,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 353,
                      "end": 356,
                      "decorators": [],
                      "name": "str",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 358,
                      "end": 361,
                      "decorators": [],
                      "name": "num",
                      "optional": false
                    }
                  ],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 365,
                  "end": 378,
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "start": 365,
                    "end": 372,
                    "decorators": [],
                    "name": "options",
                    "optional": false
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 376,
                    "end": 378,
                    "elements": []
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 385,
                    "end": 388,
                    "decorators": [],
                    "name": "str",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 390,
                    "end": 393,
                    "decorators": [],
                    "name": "num",
                    "optional": false
                  }
                ],
                "optional": false
              },
              "right": {
                "type": "LogicalExpression",
                "start": 397,
                "end": 410,
                "operator": "||",
                "left": {
                  "type": "Identifier",
                  "start": 397,
                  "end": 404,
                  "decorators": [],
                  "name": "options",
                  "optional": false
                },
                "right": {
                  "type": "ArrayExpression",
                  "start": 408,
                  "end": 410,
                  "elements": []
                }
              }
            }
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 420,
                  "end": 422,
                  "decorators": [],
                  "name": "x1",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 425,
                  "end": 443,
                  "computed": true,
                  "object": {
                    "type": "LogicalExpression",
                    "start": 426,
                    "end": 439,
                    "operator": "||",
                    "left": {
                      "type": "Identifier",
                      "start": 426,
                      "end": 433,
                      "decorators": [],
                      "name": "options",
                      "optional": false
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 437,
                      "end": 439,
                      "properties": []
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 441,
                    "end": 442,
                    "raw": "0",
                    "value": 0
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 309,
        "end": 311,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 312,
          "end": 340,
          "decorators": [],
          "name": "options",
          "optional": true,
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
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 448,
      "end": 664,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 514,
                  "end": 530,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 516,
                      "end": 521,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 516,
                        "end": 521,
                        "decorators": [],
                        "name": "color",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 516,
                        "end": 521,
                        "decorators": [],
                        "name": "color",
                        "optional": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 523,
                      "end": 528,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 523,
                        "end": 528,
                        "decorators": [],
                        "name": "width",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 523,
                        "end": 528,
                        "decorators": [],
                        "name": "width",
                        "optional": false
                      }
                    }
                  ]
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 533,
                  "end": 546,
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "start": 533,
                    "end": 540,
                    "decorators": [],
                    "name": "options",
                    "optional": false
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "start": 544,
                    "end": 546,
                    "properties": []
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 555,
                    "end": 560,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 555,
                      "end": 560,
                      "decorators": [],
                      "name": "color",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 555,
                      "end": 560,
                      "decorators": [],
                      "name": "color",
                      "optional": false
                    }
                  },
                  {
                    "type": "Property",
                    "start": 562,
                    "end": 567,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 562,
                      "end": 567,
                      "decorators": [],
                      "name": "width",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 562,
                      "end": 567,
                      "decorators": [],
                      "name": "width",
                      "optional": false
                    }
                  }
                ]
              },
              "right": {
                "type": "LogicalExpression",
                "start": 572,
                "end": 585,
                "operator": "||",
                "left": {
                  "type": "Identifier",
                  "start": 572,
                  "end": 579,
                  "decorators": [],
                  "name": "options",
                  "optional": false
                },
                "right": {
                  "type": "ObjectExpression",
                  "start": 583,
                  "end": 585,
                  "properties": []
                }
              }
            }
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 596,
                  "end": 598,
                  "decorators": [],
                  "name": "x1",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 601,
                  "end": 622,
                  "computed": false,
                  "object": {
                    "type": "LogicalExpression",
                    "start": 602,
                    "end": 615,
                    "operator": "||",
                    "left": {
                      "type": "Identifier",
                      "start": 602,
                      "end": 609,
                      "decorators": [],
                      "name": "options",
                      "optional": false
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 613,
                      "end": 615,
                      "properties": []
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 617,
                    "end": 622,
                    "decorators": [],
                    "name": "color",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 632,
                  "end": 634,
                  "decorators": [],
                  "name": "x2",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 637,
                  "end": 661,
                  "computed": true,
                  "object": {
                    "type": "LogicalExpression",
                    "start": 638,
                    "end": 651,
                    "operator": "||",
                    "left": {
                      "type": "Identifier",
                      "start": 638,
                      "end": 645,
                      "decorators": [],
                      "name": "options",
                      "optional": false
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 649,
                      "end": 651,
                      "properties": []
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 653,
                    "end": 660,
                    "raw": "\"color\"",
                    "value": "color"
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 457,
        "end": 459,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 460,
          "end": 502,
          "decorators": [],
          "name": "options",
          "optional": true,
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
                  "key": {
                    "type": "Identifier",
                    "start": 472,
                    "end": 477,
                    "decorators": [],
                    "name": "color",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 477,
                    "end": 485,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 479,
                      "end": 485
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 487,
                  "end": 500,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 487,
                    "end": 492,
                    "decorators": [],
                    "name": "width",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 492,
                    "end": 500,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 494,
                      "end": 500
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 666,
      "end": 810,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "ArrayPattern",
                  "start": 716,
                  "end": 726,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 717,
                      "end": 720,
                      "decorators": [],
                      "name": "str",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 722,
                      "end": 725,
                      "decorators": [],
                      "name": "num",
                      "optional": false
                    }
                  ],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 729,
                  "end": 742,
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "start": 729,
                    "end": 736,
                    "decorators": [],
                    "name": "options",
                    "optional": false
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 740,
                    "end": 742,
                    "elements": []
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 749,
                    "end": 752,
                    "decorators": [],
                    "name": "str",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 754,
                    "end": 757,
                    "decorators": [],
                    "name": "num",
                    "optional": false
                  }
                ],
                "optional": false
              },
              "right": {
                "type": "LogicalExpression",
                "start": 761,
                "end": 774,
                "operator": "||",
                "left": {
                  "type": "Identifier",
                  "start": 761,
                  "end": 768,
                  "decorators": [],
                  "name": "options",
                  "optional": false
                },
                "right": {
                  "type": "ArrayExpression",
                  "start": 772,
                  "end": 774,
                  "elements": []
                }
              }
            }
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 784,
                  "end": 786,
                  "decorators": [],
                  "name": "x1",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 789,
                  "end": 807,
                  "computed": true,
                  "object": {
                    "type": "LogicalExpression",
                    "start": 790,
                    "end": 803,
                    "operator": "||",
                    "left": {
                      "type": "Identifier",
                      "start": 790,
                      "end": 797,
                      "decorators": [],
                      "name": "options",
                      "optional": false
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 801,
                      "end": 803,
                      "properties": []
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 805,
                    "end": 806,
                    "raw": "0",
                    "value": 0
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 675,
        "end": 677,
        "decorators": [],
        "name": "f4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 678,
          "end": 704,
          "decorators": [],
          "name": "options",
          "optional": true,
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
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
