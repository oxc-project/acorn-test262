__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 15,
          "end": 19
        },
        "start": 13,
        "end": 19
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 35,
                    "end": 36
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 39,
                    "end": 40
                  },
                  "definite": false,
                  "start": 35,
                  "end": 40
                }
              ],
              "declare": false,
              "start": 31,
              "end": 40
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 42,
                "end": 43
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 46,
                "end": 47
              },
              "start": 42,
              "end": 47
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 50
              },
              "start": 49,
              "end": 52
            },
            "body": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 70
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 73,
                "end": 75
              },
              "declare": false,
              "start": 62,
              "end": 76
            },
            "start": 26,
            "end": 76
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 92
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 96
                },
                "optional": false,
                "computed": false,
                "start": 85,
                "end": 96
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "f1",
                  "raw": "'f1'",
                  "start": 97,
                  "end": 101
                }
              ],
              "optional": false,
              "start": 85,
              "end": 102
            },
            "directive": null,
            "start": 85,
            "end": 103
          }
        ],
        "start": 20,
        "end": 105
      },
      "expression": false,
      "start": 0,
      "end": 105
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 118
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 122,
          "end": 126
        },
        "start": 120,
        "end": 126
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 140,
              "end": 144
            },
            "body": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 159,
                "end": 162
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 165,
                "end": 167
              },
              "declare": false,
              "start": 154,
              "end": 168
            },
            "start": 133,
            "end": 168
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 184
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 185,
                  "end": 188
                },
                "optional": false,
                "computed": false,
                "start": 177,
                "end": 188
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "f2",
                  "raw": "'f2'",
                  "start": 189,
                  "end": 193
                }
              ],
              "optional": false,
              "start": 177,
              "end": 194
            },
            "directive": null,
            "start": 177,
            "end": 195
          }
        ],
        "start": 127,
        "end": 197
      },
      "expression": false,
      "start": 107,
      "end": 197
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 208,
        "end": 210
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 214,
          "end": 218
        },
        "start": 212,
        "end": 218
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 229,
              "end": 233
            },
            "consequent": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 248,
                "end": 251
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 254,
                "end": 256
              },
              "declare": false,
              "start": 243,
              "end": 257
            },
            "alternate": null,
            "start": 225,
            "end": 257
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 266,
                  "end": 273
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 274,
                  "end": 277
                },
                "optional": false,
                "computed": false,
                "start": 266,
                "end": 277
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "f3",
                  "raw": "'f3'",
                  "start": 278,
                  "end": 282
                }
              ],
              "optional": false,
              "start": 266,
              "end": 283
            },
            "directive": null,
            "start": 266,
            "end": 284
          }
        ],
        "start": 219,
        "end": 286
      },
      "expression": false,
      "start": 199,
      "end": 286
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 286
}
```
