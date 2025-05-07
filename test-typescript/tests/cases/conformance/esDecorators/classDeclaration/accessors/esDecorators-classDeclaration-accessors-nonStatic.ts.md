__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 302,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 36,
            "decorators": [],
            "name": "method3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 39,
            "end": 48,
            "raw": "\"method3\"",
            "value": "method3",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 302,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 302,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 101,
            "accessibility": null,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 65,
                "end": 73,
                "expression": {
                  "type": "CallExpression",
                  "start": 66,
                  "end": 73,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 70,
                      "end": 72,
                      "raw": "11",
                      "value": 11,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 69,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 85,
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 85,
              "end": 101,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 88,
                "end": 101,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 90,
                    "end": 99,
                    "argument": {
                      "type": "Literal",
                      "start": 97,
                      "end": 98,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
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
            "start": 106,
            "end": 136,
            "accessibility": null,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 106,
                "end": 114,
                "expression": {
                  "type": "CallExpression",
                  "start": 107,
                  "end": 114,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 111,
                      "end": 113,
                      "raw": "12",
                      "value": 12,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 110,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 126,
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 126,
              "end": 136,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 134,
                "end": 136,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 127,
                  "end": 132,
                  "decorators": [],
                  "name": "value",
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
            "start": 141,
            "end": 181,
            "accessibility": null,
            "computed": true,
            "decorators": [
              {
                "type": "Decorator",
                "start": 141,
                "end": 149,
                "expression": {
                  "type": "CallExpression",
                  "start": 142,
                  "end": 149,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 146,
                      "end": 148,
                      "raw": "21",
                      "value": 21,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 145,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "key": {
              "type": "Literal",
              "start": 155,
              "end": 164,
              "raw": "\"method2\"",
              "value": "method2",
              "regex": null,
              "bigint": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 165,
              "end": 181,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 168,
                "end": 181,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 170,
                    "end": 179,
                    "argument": {
                      "type": "Literal",
                      "start": 177,
                      "end": 178,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
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
            "start": 186,
            "end": 220,
            "accessibility": null,
            "computed": true,
            "decorators": [
              {
                "type": "Decorator",
                "start": 186,
                "end": 194,
                "expression": {
                  "type": "CallExpression",
                  "start": 187,
                  "end": 194,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 191,
                      "end": 193,
                      "raw": "22",
                      "value": 22,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 187,
                    "end": 190,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "key": {
              "type": "Literal",
              "start": 200,
              "end": 209,
              "raw": "\"method2\"",
              "value": "method2",
              "regex": null,
              "bigint": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 210,
              "end": 220,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 218,
                "end": 220,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 211,
                  "end": 216,
                  "decorators": [],
                  "name": "value",
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
            "start": 225,
            "end": 263,
            "accessibility": null,
            "computed": true,
            "decorators": [
              {
                "type": "Decorator",
                "start": 225,
                "end": 233,
                "expression": {
                  "type": "CallExpression",
                  "start": 226,
                  "end": 233,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 230,
                      "end": 232,
                      "raw": "31",
                      "value": 31,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 229,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 239,
              "end": 246,
              "decorators": [],
              "name": "method3",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 247,
              "end": 263,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 250,
                "end": 263,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 252,
                    "end": 261,
                    "argument": {
                      "type": "Literal",
                      "start": 259,
                      "end": 260,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
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
            "start": 268,
            "end": 300,
            "accessibility": null,
            "computed": true,
            "decorators": [
              {
                "type": "Decorator",
                "start": 268,
                "end": 276,
                "expression": {
                  "type": "CallExpression",
                  "start": 269,
                  "end": 276,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 273,
                      "end": 275,
                      "raw": "32",
                      "value": 32,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 269,
                    "end": 272,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 282,
              "end": 289,
              "decorators": [],
              "name": "method3",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 290,
              "end": 300,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 298,
                "end": 300,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 291,
                  "end": 296,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
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
        "start": 57,
        "end": 58,
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
