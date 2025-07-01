__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "globalCounter",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 17
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 20,
            "end": 21
          },
          "definite": false,
          "start": 4,
          "end": 21
        }
      ],
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 35
      },
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "globalCounter",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 57
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 61,
                "end": 62
              },
              "start": 44,
              "end": 62
            },
            "directive": null,
            "start": 44,
            "end": 63
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 77,
                    "end": 81
                  },
                  "value": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 83,
                    "end": 84
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 77,
                  "end": 84
                }
              ],
              "start": 75,
              "end": 86
            },
            "start": 68,
            "end": 87
          }
        ],
        "start": 38,
        "end": 89
      },
      "expression": false,
      "start": 23,
      "end": 89
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 93
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 90,
            "end": 95
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 100
          },
          "optional": false,
          "computed": false,
          "start": 90,
          "end": 100
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 105,
          "end": 106
        },
        "start": 90,
        "end": 106
      },
      "directive": null,
      "start": 90,
      "end": 107
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "result0",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 119
          },
          "init": {
            "type": "AssignmentExpression",
            "operator": "**=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 125
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 122,
                "end": 127
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 132
              },
              "optional": false,
              "computed": false,
              "start": 122,
              "end": 132
            },
            "right": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 137,
              "end": 138
            },
            "start": 122,
            "end": 138
          },
          "definite": false,
          "start": 112,
          "end": 138
        }
      ],
      "declare": false,
      "start": 108,
      "end": 139
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 143
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 140,
            "end": 145
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 150
          },
          "optional": false,
          "computed": false,
          "start": 140,
          "end": 150
        },
        "right": {
          "type": "AssignmentExpression",
          "operator": "**=",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 158
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 155,
              "end": 160
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 165
            },
            "optional": false,
            "computed": false,
            "start": 155,
            "end": 165
          },
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 170,
            "end": 171
          },
          "start": 155,
          "end": 171
        },
        "start": 140,
        "end": 171
      },
      "directive": null,
      "start": 140,
      "end": 172
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "result1",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 184
          },
          "init": {
            "type": "AssignmentExpression",
            "operator": "**=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 190
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 187,
                "end": 192
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 193,
                "end": 197
              },
              "optional": false,
              "computed": false,
              "start": 187,
              "end": 197
            },
            "right": {
              "type": "AssignmentExpression",
              "operator": "**=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 202,
                    "end": 205
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 202,
                  "end": 207
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 208,
                  "end": 212
                },
                "optional": false,
                "computed": false,
                "start": 202,
                "end": 212
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 217,
                "end": 218
              },
              "start": 202,
              "end": 218
            },
            "start": 187,
            "end": 218
          },
          "definite": false,
          "start": 177,
          "end": 218
        }
      ],
      "declare": false,
      "start": 173,
      "end": 219
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 223
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 220,
            "end": 225
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 226,
            "end": 230
          },
          "optional": false,
          "computed": false,
          "start": 220,
          "end": 230
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 235,
                "end": 238
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 235,
              "end": 240
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 245
            },
            "optional": false,
            "computed": false,
            "start": 235,
            "end": 245
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 249,
            "end": 250
          },
          "start": 235,
          "end": 250
        },
        "start": 220,
        "end": 250
      },
      "directive": null,
      "start": 220,
      "end": 251
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "result2",
            "optional": false,
            "typeAnnotation": null,
            "start": 256,
            "end": 263
          },
          "init": {
            "type": "AssignmentExpression",
            "operator": "**=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 266,
                  "end": 269
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 266,
                "end": 271
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 276
              },
              "optional": false,
              "computed": false,
              "start": 266,
              "end": 276
            },
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 281,
                    "end": 284
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 281,
                  "end": 286
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 287,
                  "end": 291
                },
                "optional": false,
                "computed": false,
                "start": 281,
                "end": 291
              },
              "operator": "**",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 295,
                "end": 296
              },
              "start": 281,
              "end": 296
            },
            "start": 266,
            "end": 296
          },
          "definite": false,
          "start": 256,
          "end": 296
        }
      ],
      "declare": false,
      "start": 252,
      "end": 297
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 297
}
```
