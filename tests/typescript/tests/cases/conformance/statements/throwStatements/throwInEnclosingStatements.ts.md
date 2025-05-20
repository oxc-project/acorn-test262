__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 525,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 31,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 31,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 21,
            "end": 29,
            "argument": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 58,
      "directive": null,
      "expression": {
        "type": "ArrowFunctionExpression",
        "start": 33,
        "end": 58,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 46,
          "end": 58,
          "body": [
            {
              "type": "ThrowStatement",
              "start": 48,
              "end": 56,
              "argument": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "expression": false,
        "generator": false,
        "id": null,
        "params": [
          {
            "type": "Identifier",
            "start": 37,
            "end": 41,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 41,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 40,
                "end": 41,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 41,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 33,
          "end": 36,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 34,
              "end": 35,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 60,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 73,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 73,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 73,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 67,
                "end": 73
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
      "type": "SwitchStatement",
      "start": 75,
      "end": 150,
      "cases": [
        {
          "type": "SwitchCase",
          "start": 92,
          "end": 118,
          "consequent": [
            {
              "type": "ThrowStatement",
              "start": 110,
              "end": 118,
              "argument": {
                "type": "Identifier",
                "start": 116,
                "end": 117,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "test": {
            "type": "Literal",
            "start": 97,
            "end": 100,
            "raw": "'a'",
            "value": "a"
          }
        },
        {
          "type": "SwitchCase",
          "start": 123,
          "end": 148,
          "consequent": [
            {
              "type": "ThrowStatement",
              "start": 140,
              "end": 148,
              "argument": {
                "type": "Identifier",
                "start": 146,
                "end": 147,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "test": null
        }
      ],
      "discriminant": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "decorators": [],
        "name": "y",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 152,
      "end": 162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 161,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 157,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 160,
            "end": 161,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "WhileStatement",
      "start": 163,
      "end": 194,
      "body": {
        "type": "BlockStatement",
        "start": 178,
        "end": 194,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 184,
            "end": 192,
            "argument": {
              "type": "Identifier",
              "start": 190,
              "end": 191,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 170,
        "end": 176,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 170,
          "end": 171,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 174,
          "end": 176,
          "raw": "10",
          "value": 10
        }
      }
    },
    {
      "type": "ForStatement",
      "start": 196,
      "end": 227,
      "body": {
        "type": "BlockStatement",
        "start": 215,
        "end": 227,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 217,
            "end": 225,
            "argument": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 201,
        "end": 210,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 205,
            "end": 210,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 209,
              "end": 210,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForInStatement",
      "start": 229,
      "end": 263,
      "body": {
        "type": "BlockStatement",
        "start": 249,
        "end": 263,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 251,
            "end": 261,
            "argument": {
              "type": "Identifier",
              "start": 257,
              "end": 260,
              "decorators": [],
              "name": "idx",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 234,
        "end": 241,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 238,
            "end": 241,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 238,
              "end": 241,
              "decorators": [],
              "name": "idx",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "ObjectExpression",
        "start": 245,
        "end": 247,
        "properties": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 265,
      "end": 294,
      "body": {
        "type": "BlockStatement",
        "start": 268,
        "end": 283,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 270,
            "end": 281,
            "argument": {
              "type": "Literal",
              "start": 276,
              "end": 280,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 289,
        "end": 293,
        "raw": "true",
        "value": true
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 296,
      "end": 306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 300,
          "end": 305,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 300,
            "end": 301,
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 304,
            "end": 305,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "WhileStatement",
      "start": 307,
      "end": 333,
      "body": {
        "type": "BlockStatement",
        "start": 321,
        "end": 333,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 323,
            "end": 331,
            "argument": {
              "type": "Identifier",
              "start": 329,
              "end": 330,
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 314,
        "end": 319,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 314,
          "end": 315,
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 318,
          "end": 319,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 335,
      "end": 462,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 346,
        "end": 462,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 352,
            "end": 369,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 360,
              "end": 365,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 365,
              "end": 368,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 367,
                "end": 368,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 367,
                  "end": 368,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 374,
            "end": 413,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 374,
              "end": 377,
              "decorators": [],
              "name": "biz",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 377,
              "end": 413,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 380,
                "end": 413,
                "body": [
                  {
                    "type": "ThrowStatement",
                    "start": 390,
                    "end": 407,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 396,
                      "end": 406,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 396,
                        "end": 400
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 401,
                        "end": 406,
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
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 419,
            "end": 460,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 419,
              "end": 430,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 430,
              "end": 460,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 433,
                "end": 460,
                "body": [
                  {
                    "type": "ThrowStatement",
                    "start": 443,
                    "end": 454,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 449,
                      "end": 453
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 341,
        "end": 342,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 342,
        "end": 345,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 343,
            "end": 344,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 343,
              "end": 344,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 464,
      "end": 525,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 468,
          "end": 525,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 468,
            "end": 470,
            "decorators": [],
            "name": "aa",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 473,
            "end": 525,
            "properties": [
              {
                "type": "Property",
                "start": 479,
                "end": 484,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 481,
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 482,
                  "end": 484,
                  "raw": "12",
                  "value": 12
                }
              },
              {
                "type": "Property",
                "start": 490,
                "end": 523,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 490,
                  "end": 493,
                  "decorators": [],
                  "name": "biz",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 493,
                  "end": 523,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 496,
                    "end": 523,
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "start": 506,
                        "end": 517,
                        "argument": {
                          "type": "ThisExpression",
                          "start": 512,
                          "end": 516
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
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
