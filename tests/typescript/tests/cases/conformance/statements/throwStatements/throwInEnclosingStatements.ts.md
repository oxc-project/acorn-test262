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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 58,
      "expression": {
        "type": "ArrowFunctionExpression",
        "start": 33,
        "end": 58,
        "expression": false,
        "async": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
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
                "typeName": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 41,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": null,
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
        "id": null,
        "generator": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 60,
      "end": 74,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 73,
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
          "init": null,
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "y",
        "optional": false,
        "typeAnnotation": null
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 92,
          "end": 118,
          "test": {
            "type": "Literal",
            "start": 97,
            "end": 100,
            "value": "a",
            "raw": "'a'"
          },
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
          ]
        },
        {
          "type": "SwitchCase",
          "start": 123,
          "end": 148,
          "test": null,
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
          ]
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 152,
      "end": 162,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 161,
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
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 205,
            "end": 210,
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
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
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
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 238,
            "end": 241,
            "id": {
              "type": "Identifier",
              "start": 238,
              "end": 241,
              "decorators": [],
              "name": "idx",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
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
              "decorators": [],
              "name": "idx",
              "optional": false,
              "typeAnnotation": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 300,
          "end": 305,
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
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 335,
      "end": 462,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 346,
        "end": 462,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 352,
            "end": 369,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 360,
              "end": 365,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 374,
            "end": 413,
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
            "value": {
              "type": "FunctionExpression",
              "start": 377,
              "end": 413,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                        "decorators": [],
                        "name": "value",
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
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 419,
            "end": 460,
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
            "value": {
              "type": "FunctionExpression",
              "start": 430,
              "end": 460,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 464,
      "end": 525,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 468,
          "end": 525,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 481,
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 482,
                  "end": 484,
                  "value": 12,
                  "raw": "12"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 490,
                "end": 523,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 490,
                  "end": 493,
                  "decorators": [],
                  "name": "biz",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 493,
                  "end": 523,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
