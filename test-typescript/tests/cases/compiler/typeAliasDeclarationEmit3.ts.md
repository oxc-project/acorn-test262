__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 105,
        "body": [
          {
            "type": "ForStatement",
            "start": 26,
            "end": 76,
            "init": {
              "type": "VariableDeclaration",
              "start": 31,
              "end": 40,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 35,
                  "end": 40,
                  "id": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 36,
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 39,
                    "end": 40,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 42,
              "end": 47,
              "left": {
                "type": "Identifier",
                "start": 42,
                "end": 43,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 46,
                "end": 47,
                "value": 1,
                "raw": "1"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 49,
              "end": 52,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 49,
                "end": 50,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "body": {
              "type": "TSTypeAliasDeclaration",
              "start": 62,
              "end": 76,
              "id": {
                "type": "Identifier",
                "start": 67,
                "end": 70,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 73,
                "end": 75,
                "elementTypes": []
              },
              "declare": false
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
              "callee": {
                "type": "MemberExpression",
                "start": 85,
                "end": 96,
                "object": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 92,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 96,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 97,
                  "end": 101,
                  "value": "f1",
                  "raw": "'f1'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 118,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 127,
        "end": 197,
        "body": [
          {
            "type": "WhileStatement",
            "start": 133,
            "end": 168,
            "test": {
              "type": "Literal",
              "start": 140,
              "end": 144,
              "value": true,
              "raw": "true"
            },
            "body": {
              "type": "TSTypeAliasDeclaration",
              "start": 154,
              "end": 168,
              "id": {
                "type": "Identifier",
                "start": 159,
                "end": 162,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 165,
                "end": 167,
                "elementTypes": []
              },
              "declare": false
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
              "callee": {
                "type": "MemberExpression",
                "start": 177,
                "end": 188,
                "object": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 184,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 188,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 189,
                  "end": 193,
                  "value": "f2",
                  "raw": "'f2'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 208,
        "end": 210,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 219,
        "end": 286,
        "body": [
          {
            "type": "IfStatement",
            "start": 225,
            "end": 257,
            "test": {
              "type": "Literal",
              "start": 229,
              "end": 233,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "TSTypeAliasDeclaration",
              "start": 243,
              "end": 257,
              "id": {
                "type": "Identifier",
                "start": 248,
                "end": 251,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 254,
                "end": 256,
                "elementTypes": []
              },
              "declare": false
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 266,
            "end": 284,
            "expression": {
              "type": "CallExpression",
              "start": 266,
              "end": 283,
              "callee": {
                "type": "MemberExpression",
                "start": 266,
                "end": 277,
                "object": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 273,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 277,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 278,
                  "end": 282,
                  "value": "f3",
                  "raw": "'f3'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
  "sourceType": "script",
  "hashbang": null
}
```
