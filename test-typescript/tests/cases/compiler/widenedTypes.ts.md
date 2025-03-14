__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 587,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 28,
      "expression": {
        "type": "BinaryExpression",
        "start": 0,
        "end": 27,
        "operator": "instanceof",
        "left": {
          "type": "Literal",
          "start": 0,
          "end": 4,
          "raw": "null",
          "value": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 17,
          "end": 26,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 23,
            "end": 26,
            "body": []
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 50,
      "expression": {
        "type": "BinaryExpression",
        "start": 29,
        "end": 49,
        "operator": "instanceof",
        "left": {
          "type": "ObjectExpression",
          "start": 30,
          "end": 32,
          "properties": []
        },
        "right": {
          "type": "Literal",
          "start": 45,
          "end": 49,
          "raw": "null",
          "value": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 107,
      "expression": {
        "type": "BinaryExpression",
        "start": 96,
        "end": 106,
        "operator": "in",
        "left": {
          "type": "Literal",
          "start": 96,
          "end": 100,
          "raw": "null",
          "value": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 104,
          "end": 106,
          "properties": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 119,
      "expression": {
        "type": "BinaryExpression",
        "start": 108,
        "end": 118,
        "operator": "in",
        "left": {
          "type": "Literal",
          "start": 108,
          "end": 110,
          "raw": "\"\"",
          "value": ""
        },
        "right": {
          "type": "Literal",
          "start": 114,
          "end": 118,
          "raw": "null",
          "value": null
        }
      }
    },
    {
      "type": "ForInStatement",
      "start": 121,
      "end": 144,
      "body": {
        "type": "BlockStatement",
        "start": 141,
        "end": 144,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 126,
        "end": 131,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 130,
            "end": 131,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Literal",
        "start": 135,
        "end": 139,
        "raw": "null",
        "value": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 146,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 150,
          "end": 168,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 150,
            "end": 151,
            "decorators": [],
            "name": "t",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 154,
            "end": 168,
            "elements": [
              {
                "type": "Literal",
                "start": 155,
                "end": 156,
                "raw": "3",
                "value": 3
              },
              {
                "type": "SequenceExpression",
                "start": 159,
                "end": 166,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 159,
                    "end": 160,
                    "raw": "3",
                    "value": 3
                  },
                  {
                    "type": "Literal",
                    "start": 162,
                    "end": 166,
                    "raw": "null",
                    "value": null
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 170,
      "end": 180,
      "expression": {
        "type": "AssignmentExpression",
        "start": 170,
        "end": 179,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 170,
          "end": 174,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 170,
            "end": 171,
            "decorators": [],
            "name": "t",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 172,
            "end": 173,
            "raw": "3",
            "value": 3
          }
        },
        "right": {
          "type": "Literal",
          "start": 177,
          "end": 179,
          "raw": "\"\"",
          "value": ""
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 182,
      "end": 210,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 186,
          "end": 209,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 186,
            "end": 205,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 187,
              "end": 205,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 189,
                "end": 205,
                "exprName": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 205,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 208,
            "end": 209,
            "raw": "3",
            "value": 3
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 211,
      "end": 217,
      "expression": {
        "type": "AssignmentExpression",
        "start": 211,
        "end": 216,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 211,
          "end": 212,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 215,
          "end": 216,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 219,
      "end": 225,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 223,
          "end": 224,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 223,
            "end": 224,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 226,
      "end": 250,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 230,
          "end": 249,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 230,
            "end": 231,
            "decorators": [],
            "name": "u",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 234,
            "end": 249,
            "elements": [
              {
                "type": "Literal",
                "start": 235,
                "end": 236,
                "raw": "3",
                "value": 3
              },
              {
                "type": "AssignmentExpression",
                "start": 239,
                "end": 247,
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 240,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 243,
                  "end": 247,
                  "raw": "null",
                  "value": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 251,
      "end": 261,
      "expression": {
        "type": "AssignmentExpression",
        "start": 251,
        "end": 260,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 251,
          "end": 255,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 251,
            "end": 252,
            "decorators": [],
            "name": "u",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 253,
            "end": 254,
            "raw": "3",
            "value": 3
          }
        },
        "right": {
          "type": "Literal",
          "start": 258,
          "end": 260,
          "raw": "\"\"",
          "value": ""
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 263,
      "end": 307,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 267,
          "end": 306,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 294,
            "decorators": [],
            "name": "ob",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 269,
              "end": 294,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 271,
                "end": 294,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 273,
                    "end": 292,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 273,
                      "end": 274,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 274,
                      "end": 292,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 276,
                        "end": 292,
                        "exprName": {
                          "type": "Identifier",
                          "start": 283,
                          "end": 292,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 297,
            "end": 306,
            "properties": [
              {
                "type": "Property",
                "start": 299,
                "end": 304,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 300,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 302,
                  "end": 304,
                  "raw": "\"\"",
                  "value": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 381,
      "end": 411,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 385,
          "end": 410,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 385,
            "end": 398,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 388,
              "end": 398,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 390,
                "end": 398,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 390,
                  "end": 396
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 401,
            "end": 410,
            "elements": [
              {
                "type": "Literal",
                "start": 402,
                "end": 403,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 405,
                "end": 409,
                "raw": "null",
                "value": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 469,
      "end": 523,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 473,
          "end": 522,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 473,
            "end": 502,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 476,
              "end": 502,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 478,
                "end": 502,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 480,
                    "end": 500,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 481,
                        "end": 490,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 482,
                          "end": 490,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 484,
                            "end": 490
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 491,
                      "end": 499,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 493,
                        "end": 499
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 505,
            "end": 522,
            "properties": [
              {
                "type": "Property",
                "start": 507,
                "end": 511,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 507,
                  "end": 508,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 510,
                  "end": 511,
                  "raw": "3",
                  "value": 3
                }
              },
              {
                "type": "Property",
                "start": 513,
                "end": 520,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 513,
                  "end": 514,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 516,
                  "end": 520,
                  "raw": "null",
                  "value": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
