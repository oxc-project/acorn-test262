__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 379,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
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
      "type": "VariableDeclaration",
      "start": 15,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 28,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
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
      "type": "VariableDeclaration",
      "start": 30,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 40,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 40,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 37,
                "end": 40
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
      "type": "ClassDeclaration",
      "start": 42,
      "end": 379,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 50,
        "end": 379,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 56,
            "end": 78,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 63,
              "end": 78,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 66,
                "end": 78,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 68,
                    "end": 77,
                    "argument": {
                      "type": "Literal",
                      "start": 75,
                      "end": 76,
                      "raw": "0",
                      "value": 0
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
            "start": 83,
            "end": 97,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 90,
              "end": 97,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 94,
                "end": 97,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 91,
                  "end": 92,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 102,
            "end": 136,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "start": 114,
              "end": 119,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 120,
              "end": 136,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 123,
                "end": 136,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 125,
                    "end": 134,
                    "argument": {
                      "type": "Literal",
                      "start": 132,
                      "end": 133,
                      "raw": "0",
                      "value": 0
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
            "start": 141,
            "end": 159,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "start": 146,
              "end": 151,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 146,
                "end": 147,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 150,
                "end": 151,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 152,
              "end": 159,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 156,
                "end": 159,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 153,
                  "end": 154,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 164,
            "end": 188,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "UnaryExpression",
              "start": 169,
              "end": 171,
              "argument": {
                "type": "Identifier",
                "start": 170,
                "end": 171,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "prefix": true
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 172,
              "end": 188,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 175,
                "end": 188,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 177,
                    "end": 186,
                    "argument": {
                      "type": "Literal",
                      "start": 184,
                      "end": 185,
                      "raw": "0",
                      "value": 0
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
            "start": 193,
            "end": 215,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 205,
              "end": 207,
              "raw": "\"\"",
              "value": ""
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 208,
              "end": 215,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 212,
                "end": 215,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 209,
                  "end": 210,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 220,
            "end": 243,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 225,
              "end": 226,
              "raw": "0",
              "value": 0
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 227,
              "end": 243,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 230,
                "end": 243,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 232,
                    "end": 241,
                    "argument": {
                      "type": "Literal",
                      "start": 239,
                      "end": 240,
                      "raw": "0",
                      "value": 0
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
            "start": 248,
            "end": 262,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 253,
              "end": 254,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 255,
              "end": 262,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 259,
                "end": 262,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 256,
                  "end": 257,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 267,
            "end": 305,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "TSTypeAssertion",
              "start": 279,
              "end": 288,
              "expression": {
                "type": "Literal",
                "start": 284,
                "end": 288,
                "raw": "true",
                "value": true
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 280,
                "end": 283
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 289,
              "end": 305,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 292,
                "end": 305,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 294,
                    "end": 303,
                    "argument": {
                      "type": "Literal",
                      "start": 301,
                      "end": 302,
                      "raw": "0",
                      "value": 0
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
            "start": 310,
            "end": 334,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "TemplateLiteral",
              "start": 315,
              "end": 326,
              "expressions": [],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 315,
                  "end": 326,
                  "tail": true,
                  "value": {
                    "cooked": "hello bye",
                    "raw": "hello bye"
                  }
                }
              ]
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 327,
              "end": 334,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 331,
                "end": 334,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 328,
                  "end": 329,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 339,
            "end": 377,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "TemplateLiteral",
              "start": 344,
              "end": 360,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 353,
                  "end": 354,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 344,
                  "end": 353,
                  "tail": false,
                  "value": {
                    "cooked": "hello ",
                    "raw": "hello "
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 354,
                  "end": 360,
                  "tail": true,
                  "value": {
                    "cooked": " bye",
                    "raw": " bye"
                  }
                }
              ]
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 361,
              "end": 377,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 364,
                "end": 377,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 366,
                    "end": 375,
                    "argument": {
                      "type": "Literal",
                      "start": 373,
                      "end": 374,
                      "raw": "0",
                      "value": 0
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
        "start": 48,
        "end": 49,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
