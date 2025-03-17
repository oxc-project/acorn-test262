__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 345,
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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "name": "dec",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
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
      "start": 23,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 36,
            "name": "method3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 344,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 344,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 108,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 92,
              "name": "method1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 92,
              "end": 108,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 95,
                "end": 108,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 97,
                    "end": 106,
                    "argument": {
                      "type": "Literal",
                      "start": 104,
                      "end": 105,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 70,
                      "end": 72,
                      "value": 11,
                      "raw": "11"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 113,
            "end": 150,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 140,
              "name": "method1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 140,
              "end": 150,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 141,
                  "end": 146,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 148,
                "end": 150,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 113,
                "end": 121,
                "expression": {
                  "type": "CallExpression",
                  "start": 114,
                  "end": 121,
                  "callee": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 117,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 118,
                      "end": 120,
                      "value": 12,
                      "raw": "12"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 155,
            "end": 202,
            "static": true,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 176,
              "end": 185,
              "value": "method2",
              "raw": "\"method2\""
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 186,
              "end": 202,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 189,
                "end": 202,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 191,
                    "end": 200,
                    "argument": {
                      "type": "Literal",
                      "start": 198,
                      "end": 199,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 155,
                "end": 163,
                "expression": {
                  "type": "CallExpression",
                  "start": 156,
                  "end": 163,
                  "callee": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 159,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 160,
                      "end": 162,
                      "value": 21,
                      "raw": "21"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 207,
            "end": 248,
            "static": true,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 228,
              "end": 237,
              "value": "method2",
              "raw": "\"method2\""
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 238,
              "end": 248,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 239,
                  "end": 244,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 246,
                "end": 248,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 207,
                "end": 215,
                "expression": {
                  "type": "CallExpression",
                  "start": 208,
                  "end": 215,
                  "callee": {
                    "type": "Identifier",
                    "start": 208,
                    "end": 211,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 212,
                      "end": 214,
                      "value": 22,
                      "raw": "22"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 253,
            "end": 298,
            "static": true,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 274,
              "end": 281,
              "name": "method3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 282,
              "end": 298,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 285,
                "end": 298,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 287,
                    "end": 296,
                    "argument": {
                      "type": "Literal",
                      "start": 294,
                      "end": 295,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 253,
                "end": 261,
                "expression": {
                  "type": "CallExpression",
                  "start": 254,
                  "end": 261,
                  "callee": {
                    "type": "Identifier",
                    "start": 254,
                    "end": 257,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 258,
                      "end": 260,
                      "value": 31,
                      "raw": "31"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 303,
            "end": 342,
            "static": true,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 324,
              "end": 331,
              "name": "method3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 332,
              "end": 342,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 333,
                  "end": 338,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 340,
                "end": 342,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 303,
                "end": 311,
                "expression": {
                  "type": "CallExpression",
                  "start": 304,
                  "end": 311,
                  "callee": {
                    "type": "Identifier",
                    "start": 304,
                    "end": 307,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 308,
                      "end": 310,
                      "value": 32,
                      "raw": "32"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
