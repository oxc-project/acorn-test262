__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 526,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "fn",
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
          "end": 13,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
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
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
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
      "type": "ExpressionStatement",
      "start": 33,
      "end": 58,
      "expression": {
        "type": "ArrowFunctionExpression",
        "start": 33,
        "end": 58,
        "id": null,
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 37,
            "end": 41,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 41,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 40,
                "end": 41,
                "typeName": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 41,
                  "name": "T",
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ]
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 33,
          "end": 36,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 34,
              "end": 35,
              "name": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
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
        "returnType": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 73,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 73,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 67,
                "end": 73
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
      "type": "SwitchStatement",
      "start": 75,
      "end": 150,
      "discriminant": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "name": "y",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ],
          "test": {
            "type": "Literal",
            "start": 97,
            "end": 100,
            "value": "a",
            "raw": "'a'"
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
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ],
          "test": null
        }
      ]
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
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 157,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 160,
            "end": 161,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "WhileStatement",
      "start": 163,
      "end": 194,
      "test": {
        "type": "BinaryExpression",
        "start": 170,
        "end": 176,
        "left": {
          "type": "Identifier",
          "start": 170,
          "end": 171,
          "name": "z",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 174,
          "end": 176,
          "value": 10,
          "raw": "10"
        }
      },
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
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 196,
      "end": 227,
      "init": {
        "type": "VariableDeclaration",
        "start": 201,
        "end": 210,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 205,
            "end": 210,
            "id": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 209,
              "end": 210,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "test": null,
      "update": null,
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
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "ForInStatement",
      "start": 229,
      "end": 263,
      "left": {
        "type": "VariableDeclaration",
        "start": 234,
        "end": 241,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 238,
            "end": 241,
            "id": {
              "type": "Identifier",
              "start": 238,
              "end": 241,
              "name": "idx",
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
      "right": {
        "type": "ObjectExpression",
        "start": 245,
        "end": 247,
        "properties": []
      },
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
              "name": "idx",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
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
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 289,
        "end": 293,
        "value": true,
        "raw": "true"
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
          "id": {
            "type": "Identifier",
            "start": 300,
            "end": 301,
            "name": "j",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 304,
            "end": 305,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "WhileStatement",
      "start": 307,
      "end": 333,
      "test": {
        "type": "BinaryExpression",
        "start": 314,
        "end": 319,
        "left": {
          "type": "Identifier",
          "start": 314,
          "end": 315,
          "name": "j",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 318,
          "end": 319,
          "value": 0,
          "raw": "0"
        }
      },
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
              "name": "j",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 335,
      "end": 462,
      "id": {
        "type": "Identifier",
        "start": 341,
        "end": 342,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 346,
        "end": 462,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 352,
            "end": 369,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 360,
              "end": 365,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 365,
              "end": 368,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 367,
                "end": 368,
                "typeName": {
                  "type": "Identifier",
                  "start": 367,
                  "end": 368,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 374,
            "end": 413,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 374,
              "end": 377,
              "name": "biz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 377,
              "end": 413,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 396,
                        "end": 400
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 401,
                        "end": 406,
                        "name": "value",
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
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 419,
            "end": 460,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 419,
              "end": 430,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 430,
              "end": 460,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 342,
        "end": 345,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 343,
            "end": 344,
            "name": {
              "type": "Identifier",
              "start": 343,
              "end": 344,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 468,
            "end": 470,
            "name": "aa",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 481,
                  "name": "id",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 482,
                  "end": 484,
                  "value": 12,
                  "raw": "12"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 490,
                "end": 523,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 490,
                  "end": 493,
                  "name": "biz",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 493,
                  "end": 523,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
