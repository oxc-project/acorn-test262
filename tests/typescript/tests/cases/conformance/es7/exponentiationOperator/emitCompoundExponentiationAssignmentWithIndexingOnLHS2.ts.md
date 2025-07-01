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
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 77,
                    "end": 78
                  },
                  "value": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 80,
                    "end": 81
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 77,
                  "end": 81
                }
              ],
              "start": 75,
              "end": 83
            },
            "start": 68,
            "end": 84
          }
        ],
        "start": 38,
        "end": 86
      },
      "expression": false,
      "start": 23,
      "end": 86
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
              "start": 87,
              "end": 90
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 87,
            "end": 92
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 93,
            "end": 94
          },
          "optional": false,
          "computed": true,
          "start": 87,
          "end": 95
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 103
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 100,
            "end": 105
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 106,
            "end": 107
          },
          "optional": false,
          "computed": true,
          "start": 100,
          "end": 108
        },
        "start": 87,
        "end": 108
      },
      "directive": null,
      "start": 87,
      "end": 109
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
            "name": "result_foo1",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 125
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
                  "start": 128,
                  "end": 131
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 128,
                "end": 133
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 134,
                "end": 135
              },
              "optional": false,
              "computed": true,
              "start": 128,
              "end": 136
            },
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 144
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 141,
                "end": 146
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 147,
                "end": 148
              },
              "optional": false,
              "computed": true,
              "start": 141,
              "end": 149
            },
            "start": 128,
            "end": 149
          },
          "definite": false,
          "start": 114,
          "end": 149
        }
      ],
      "declare": false,
      "start": 110,
      "end": 150
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
              "start": 151,
              "end": 154
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 151,
            "end": 156
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 157,
            "end": 158
          },
          "optional": false,
          "computed": true,
          "start": 151,
          "end": 159
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
                "start": 164,
                "end": 167
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 164,
              "end": 169
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 170,
              "end": 171
            },
            "optional": false,
            "computed": true,
            "start": 164,
            "end": 172
          },
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 177,
            "end": 178
          },
          "start": 164,
          "end": 178
        },
        "start": 151,
        "end": 178
      },
      "directive": null,
      "start": 151,
      "end": 179
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
            "name": "result_foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 184,
            "end": 195
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
                  "start": 198,
                  "end": 201
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 198,
                "end": 203
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 204,
                "end": 205
              },
              "optional": false,
              "computed": true,
              "start": 198,
              "end": 206
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
                    "start": 211,
                    "end": 214
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 211,
                  "end": 216
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 217,
                  "end": 218
                },
                "optional": false,
                "computed": true,
                "start": 211,
                "end": 219
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 224,
                "end": 225
              },
              "start": 211,
              "end": 225
            },
            "start": 198,
            "end": 225
          },
          "definite": false,
          "start": 184,
          "end": 225
        }
      ],
      "declare": false,
      "start": 180,
      "end": 226
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
              "start": 227,
              "end": 230
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 227,
            "end": 232
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 233,
            "end": 234
          },
          "optional": false,
          "computed": true,
          "start": 227,
          "end": 235
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
                "start": 240,
                "end": 243
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 240,
              "end": 245
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 246,
              "end": 247
            },
            "optional": false,
            "computed": true,
            "start": 240,
            "end": 248
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 252,
            "end": 253
          },
          "start": 240,
          "end": 253
        },
        "start": 227,
        "end": 253
      },
      "directive": null,
      "start": 227,
      "end": 254
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
            "name": "result_foo3",
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 270
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
                  "start": 273,
                  "end": 276
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 273,
                "end": 278
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 279,
                "end": 280
              },
              "optional": false,
              "computed": true,
              "start": 273,
              "end": 281
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
                    "start": 286,
                    "end": 289
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 286,
                  "end": 291
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 292,
                  "end": 293
                },
                "optional": false,
                "computed": true,
                "start": 286,
                "end": 294
              },
              "operator": "**",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 298,
                "end": 299
              },
              "start": 286,
              "end": 299
            },
            "start": 273,
            "end": 299
          },
          "definite": false,
          "start": 259,
          "end": 299
        }
      ],
      "declare": false,
      "start": 255,
      "end": 300
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 300
}
```
