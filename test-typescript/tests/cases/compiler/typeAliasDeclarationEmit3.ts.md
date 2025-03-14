typeAliasDeclarationEmit3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 287,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 105,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 105,
        "body": [
          {
            "type": "ForStatement",
            "start": 26,
            "end": 76,
            "body": {
              "type": "TSTypeAliasDeclaration",
              "start": 62,
              "end": 76,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 67,
                "end": 70,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 73,
                "end": 75,
                "elementTypes": []
              }
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 31,
              "end": 40,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 35,
                  "end": 40,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 36,
                    "decorators": [],
                    "name": "i",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 39,
                    "end": 40,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 42,
              "end": 47,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 42,
                "end": 43,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 46,
                "end": 47,
                "raw": "1",
                "value": 1
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 49,
              "end": 52,
              "argument": {
                "type": "Identifier",
                "start": 49,
                "end": 50,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "operator": "++",
              "prefix": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 85,
            "end": 103,
            "expression": {
              "type": "CallExpression",
              "start": 85,
              "end": 102,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 97,
                  "end": 101,
                  "raw": "'f1'",
                  "value": "f1"
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 85,
                "end": 96,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 92,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 96,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
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
        "name": "f1",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 13,
        "end": 19,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 15,
          "end": 19
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 107,
      "end": 197,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 127,
        "end": 197,
        "body": [
          {
            "type": "WhileStatement",
            "start": 133,
            "end": 168,
            "body": {
              "type": "TSTypeAliasDeclaration",
              "start": 154,
              "end": 168,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 159,
                "end": 162,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 165,
                "end": 167,
                "elementTypes": []
              }
            },
            "test": {
              "type": "Literal",
              "start": 140,
              "end": 144,
              "raw": "true",
              "value": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 177,
            "end": 195,
            "expression": {
              "type": "CallExpression",
              "start": 177,
              "end": 194,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 189,
                  "end": 193,
                  "raw": "'f2'",
                  "value": "f2"
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 177,
                "end": 188,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 184,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 188,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 118,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 120,
        "end": 126,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 122,
          "end": 126
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 199,
      "end": 286,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 219,
        "end": 286,
        "body": [
          {
            "type": "IfStatement",
            "start": 225,
            "end": 257,
            "alternate": null,
            "consequent": {
              "type": "TSTypeAliasDeclaration",
              "start": 243,
              "end": 257,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 248,
                "end": 251,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 254,
                "end": 256,
                "elementTypes": []
              }
            },
            "test": {
              "type": "Literal",
              "start": 229,
              "end": 233,
              "raw": "true",
              "value": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 266,
            "end": 284,
            "expression": {
              "type": "CallExpression",
              "start": 266,
              "end": 283,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 278,
                  "end": 282,
                  "raw": "'f3'",
                  "value": "f3"
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 266,
                "end": 277,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 273,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 277,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 208,
        "end": 210,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 212,
        "end": 218,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 214,
          "end": 218
        }
      }
    }
  ],
  "sourceType": "script"
}
```
