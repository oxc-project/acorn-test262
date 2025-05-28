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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 49,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 48,
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
            "value": "method3",
            "raw": "\"method3\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 302,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 302,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 101,
            "decorators": [
              {
                "type": "Decorator",
                "start": 65,
                "end": 73,
                "expression": {
                  "type": "CallExpression",
                  "start": 66,
                  "end": 73,
                  "callee": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 69,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 70,
                      "end": 72,
                      "value": 11,
                      "raw": "11"
                    }
                  ],
                  "optional": false
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
            "value": {
              "type": "FunctionExpression",
              "start": 85,
              "end": 101,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 106,
            "end": 136,
            "decorators": [
              {
                "type": "Decorator",
                "start": 106,
                "end": 114,
                "expression": {
                  "type": "CallExpression",
                  "start": 107,
                  "end": 114,
                  "callee": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 110,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 111,
                      "end": 113,
                      "value": 12,
                      "raw": "12"
                    }
                  ],
                  "optional": false
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
            "value": {
              "type": "FunctionExpression",
              "start": 126,
              "end": 136,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 134,
                "end": 136,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 141,
            "end": 181,
            "decorators": [
              {
                "type": "Decorator",
                "start": 141,
                "end": 149,
                "expression": {
                  "type": "CallExpression",
                  "start": 142,
                  "end": 149,
                  "callee": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 145,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 146,
                      "end": 148,
                      "value": 21,
                      "raw": "21"
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Literal",
              "start": 155,
              "end": 164,
              "value": "method2",
              "raw": "\"method2\""
            },
            "value": {
              "type": "FunctionExpression",
              "start": 165,
              "end": 181,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 186,
            "end": 220,
            "decorators": [
              {
                "type": "Decorator",
                "start": 186,
                "end": 194,
                "expression": {
                  "type": "CallExpression",
                  "start": 187,
                  "end": 194,
                  "callee": {
                    "type": "Identifier",
                    "start": 187,
                    "end": 190,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 191,
                      "end": 193,
                      "value": 22,
                      "raw": "22"
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Literal",
              "start": 200,
              "end": 209,
              "value": "method2",
              "raw": "\"method2\""
            },
            "value": {
              "type": "FunctionExpression",
              "start": 210,
              "end": 220,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 218,
                "end": 220,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 225,
            "end": 263,
            "decorators": [
              {
                "type": "Decorator",
                "start": 225,
                "end": 233,
                "expression": {
                  "type": "CallExpression",
                  "start": 226,
                  "end": 233,
                  "callee": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 229,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 230,
                      "end": 232,
                      "value": 31,
                      "raw": "31"
                    }
                  ],
                  "optional": false
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
            "value": {
              "type": "FunctionExpression",
              "start": 247,
              "end": 263,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 268,
            "end": 300,
            "decorators": [
              {
                "type": "Decorator",
                "start": 268,
                "end": 276,
                "expression": {
                  "type": "CallExpression",
                  "start": 269,
                  "end": 276,
                  "callee": {
                    "type": "Identifier",
                    "start": 269,
                    "end": 272,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 273,
                      "end": 275,
                      "value": 32,
                      "raw": "32"
                    }
                  ],
                  "optional": false
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
            "value": {
              "type": "FunctionExpression",
              "start": 290,
              "end": 300,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 298,
                "end": 300,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
