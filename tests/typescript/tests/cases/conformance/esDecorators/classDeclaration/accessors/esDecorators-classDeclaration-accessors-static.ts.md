__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 21
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "method3",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 36
          },
          "init": {
            "type": "Literal",
            "value": "method3",
            "raw": "\"method3\"",
            "start": 39,
            "end": 48
          },
          "definite": false,
          "start": 29,
          "end": 48
        }
      ],
      "declare": false,
      "start": 23,
      "end": 49
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 58
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 66,
                    "end": 69
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 11,
                      "raw": "11",
                      "start": 70,
                      "end": 72
                    }
                  ],
                  "optional": false,
                  "start": 66,
                  "end": 73
                },
                "start": 65,
                "end": 73
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 92
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 104,
                      "end": 105
                    },
                    "start": 97,
                    "end": 106
                  }
                ],
                "start": 95,
                "end": 108
              },
              "expression": false,
              "start": 92,
              "end": 108
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 65,
            "end": 108
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 114,
                    "end": 117
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 118,
                      "end": 120
                    }
                  ],
                  "optional": false,
                  "start": 114,
                  "end": 121
                },
                "start": 113,
                "end": 121
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 140
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 146
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 148,
                "end": 150
              },
              "expression": false,
              "start": 140,
              "end": 150
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 113,
            "end": 150
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 159
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 21,
                      "raw": "21",
                      "start": 160,
                      "end": 162
                    }
                  ],
                  "optional": false,
                  "start": 156,
                  "end": 163
                },
                "start": 155,
                "end": 163
              }
            ],
            "key": {
              "type": "Literal",
              "value": "method2",
              "raw": "\"method2\"",
              "start": 176,
              "end": 185
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 198,
                      "end": 199
                    },
                    "start": 191,
                    "end": 200
                  }
                ],
                "start": 189,
                "end": 202
              },
              "expression": false,
              "start": 186,
              "end": 202
            },
            "kind": "get",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 155,
            "end": 202
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 208,
                    "end": 211
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 22,
                      "raw": "22",
                      "start": 212,
                      "end": 214
                    }
                  ],
                  "optional": false,
                  "start": 208,
                  "end": 215
                },
                "start": 207,
                "end": 215
              }
            ],
            "key": {
              "type": "Literal",
              "value": "method2",
              "raw": "\"method2\"",
              "start": 228,
              "end": 237
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 239,
                  "end": 244
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 246,
                "end": 248
              },
              "expression": false,
              "start": 238,
              "end": 248
            },
            "kind": "set",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 207,
            "end": 248
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 254,
                    "end": 257
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 31,
                      "raw": "31",
                      "start": 258,
                      "end": 260
                    }
                  ],
                  "optional": false,
                  "start": 254,
                  "end": 261
                },
                "start": 253,
                "end": 261
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method3",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 281
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 294,
                      "end": 295
                    },
                    "start": 287,
                    "end": 296
                  }
                ],
                "start": 285,
                "end": 298
              },
              "expression": false,
              "start": 282,
              "end": 298
            },
            "kind": "get",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 253,
            "end": 298
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 304,
                    "end": 307
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 32,
                      "raw": "32",
                      "start": 308,
                      "end": 310
                    }
                  ],
                  "optional": false,
                  "start": 304,
                  "end": 311
                },
                "start": 303,
                "end": 311
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method3",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 331
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 333,
                  "end": 338
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 340,
                "end": 342
              },
              "expression": false,
              "start": 332,
              "end": 342
            },
            "kind": "set",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 303,
            "end": 342
          }
        ],
        "start": 59,
        "end": 344
      },
      "abstract": false,
      "declare": false,
      "start": 51,
      "end": 344
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 344
}
```
