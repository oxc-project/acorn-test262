__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 10,
                "end": 16
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "freeze",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 23
              },
              "optional": false,
              "computed": false,
              "start": 10,
              "end": 23
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 36
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 40,
                        "end": 46
                      },
                      "start": 38,
                      "end": 46
                    },
                    "start": 37,
                    "end": 46
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 51,
                        "end": 57
                      },
                      "start": 49,
                      "end": 57
                    },
                    "start": 48,
                    "end": 57
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 68,
                        "end": 73
                      },
                      "start": 61,
                      "end": 74
                    }
                  ],
                  "start": 59,
                  "end": 76
                },
                "expression": false,
                "start": 24,
                "end": 76
              }
            ],
            "optional": false,
            "start": 10,
            "end": 77
          },
          "definite": false,
          "start": 6,
          "end": 77
        }
      ],
      "declare": false,
      "start": 0,
      "end": 78
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 80
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 81,
              "end": 82
            },
            {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 84,
              "end": 86
            }
          ],
          "optional": false,
          "start": 79,
          "end": 87
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 92,
          "end": 97
        },
        "start": 79,
        "end": 97
      },
      "directive": null,
      "start": 79,
      "end": 98
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
        "start": 106,
        "end": 107
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
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 121
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 125,
                      "end": 131
                    },
                    "start": 123,
                    "end": 131
                  },
                  "start": 122,
                  "end": 131
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 133,
                "end": 136
              },
              "expression": false,
              "start": 121,
              "end": 136
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 110,
            "end": 136
          }
        ],
        "start": 108,
        "end": 138
      },
      "abstract": false,
      "declare": false,
      "start": 100,
      "end": 138
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 146
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 155
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "freeze",
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 162
              },
              "optional": false,
              "computed": false,
              "start": 149,
              "end": 162
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 164
              }
            ],
            "optional": false,
            "start": 149,
            "end": 165
          },
          "definite": false,
          "start": 145,
          "end": 165
        }
      ],
      "declare": false,
      "start": 139,
      "end": 166
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 171,
          "end": 172
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 173,
            "end": 174
          }
        ],
        "start": 167,
        "end": 175
      },
      "directive": null,
      "start": 167,
      "end": 176
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 184,
            "end": 185
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 188,
                "end": 194
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "freeze",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 201
              },
              "optional": false,
              "computed": false,
              "start": 188,
              "end": 201
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 203,
                    "end": 204
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 206,
                    "end": 207
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 209,
                    "end": 210
                  }
                ],
                "start": 202,
                "end": 211
              }
            ],
            "optional": false,
            "start": 188,
            "end": 212
          },
          "definite": false,
          "start": 184,
          "end": 212
        }
      ],
      "declare": false,
      "start": 178,
      "end": 213
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 214,
            "end": 215
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 216,
            "end": 217
          },
          "optional": false,
          "computed": true,
          "start": 214,
          "end": 218
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 221,
                "end": 222
              },
              "property": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 223,
                "end": 224
              },
              "optional": false,
              "computed": true,
              "start": 221,
              "end": 225
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 226,
              "end": 234
            },
            "optional": false,
            "computed": false,
            "start": 221,
            "end": 234
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 221,
          "end": 236
        },
        "start": 214,
        "end": 236
      },
      "directive": null,
      "start": 214,
      "end": 237
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 246
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 249,
                "end": 255
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "freeze",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 262
              },
              "optional": false,
              "computed": false,
              "start": 249,
              "end": 262
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 265,
                      "end": 266
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 268,
                      "end": 269
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 265,
                    "end": 269
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 271,
                      "end": 272
                    },
                    "value": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "\"string\"",
                      "start": 274,
                      "end": 282
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 271,
                    "end": 282
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 284,
                      "end": 285
                    },
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 287,
                      "end": 291
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 284,
                    "end": 291
                  }
                ],
                "start": 263,
                "end": 293
              }
            ],
            "optional": false,
            "start": 249,
            "end": 294
          },
          "definite": false,
          "start": 245,
          "end": 294
        }
      ],
      "declare": false,
      "start": 239,
      "end": 295
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 297
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 299
          },
          "optional": false,
          "computed": false,
          "start": 296,
          "end": 299
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 302,
                "end": 303
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 304,
                "end": 305
              },
              "optional": false,
              "computed": false,
              "start": 302,
              "end": 305
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 314
            },
            "optional": false,
            "computed": false,
            "start": 302,
            "end": 314
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 302,
          "end": 316
        },
        "start": 296,
        "end": 316
      },
      "directive": null,
      "start": 296,
      "end": 317
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 317
}
```
