esDecorators-classDeclaration-accessors-static.ts
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
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 39,
            "end": 48,
            "raw": "\"method3\"",
            "value": "method3"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 344,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 344,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 108,
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
                      "value": 11
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 69,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 92,
              "decorators": [],
              "name": "method1",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 92,
              "end": 108,
              "async": false,
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
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 113,
            "end": 150,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 113,
                "end": 121,
                "expression": {
                  "type": "CallExpression",
                  "start": 114,
                  "end": 121,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 118,
                      "end": 120,
                      "raw": "12",
                      "value": 12
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 117,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 140,
              "decorators": [],
              "name": "method1",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 140,
              "end": 150,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 148,
                "end": 150,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 141,
                  "end": 146,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 155,
            "end": 202,
            "computed": true,
            "decorators": [
              {
                "type": "Decorator",
                "start": 155,
                "end": 163,
                "expression": {
                  "type": "CallExpression",
                  "start": 156,
                  "end": 163,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 160,
                      "end": 162,
                      "raw": "21",
                      "value": 21
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 159,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Literal",
              "start": 176,
              "end": 185,
              "raw": "\"method2\"",
              "value": "method2"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 186,
              "end": 202,
              "async": false,
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
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 207,
            "end": 248,
            "computed": true,
            "decorators": [
              {
                "type": "Decorator",
                "start": 207,
                "end": 215,
                "expression": {
                  "type": "CallExpression",
                  "start": 208,
                  "end": 215,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 212,
                      "end": 214,
                      "raw": "22",
                      "value": 22
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 208,
                    "end": 211,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Literal",
              "start": 228,
              "end": 237,
              "raw": "\"method2\"",
              "value": "method2"
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 238,
              "end": 248,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 246,
                "end": 248,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 239,
                  "end": 244,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 253,
            "end": 298,
            "computed": true,
            "decorators": [
              {
                "type": "Decorator",
                "start": 253,
                "end": 261,
                "expression": {
                  "type": "CallExpression",
                  "start": 254,
                  "end": 261,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 258,
                      "end": 260,
                      "raw": "31",
                      "value": 31
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 254,
                    "end": 257,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 274,
              "end": 281,
              "decorators": [],
              "name": "method3",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 282,
              "end": 298,
              "async": false,
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
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 303,
            "end": 342,
            "computed": true,
            "decorators": [
              {
                "type": "Decorator",
                "start": 303,
                "end": 311,
                "expression": {
                  "type": "CallExpression",
                  "start": 304,
                  "end": 311,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 308,
                      "end": 310,
                      "raw": "32",
                      "value": 32
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 304,
                    "end": 307,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 324,
              "end": 331,
              "decorators": [],
              "name": "method3",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 332,
              "end": 342,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 340,
                "end": 342,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 333,
                  "end": 338,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                }
              ]
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
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
