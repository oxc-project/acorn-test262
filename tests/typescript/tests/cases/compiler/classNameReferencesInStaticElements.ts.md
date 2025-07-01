__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 65
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
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
                      "start": 81,
                      "end": 88
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 89,
                      "end": 92
                    },
                    "optional": false,
                    "computed": false,
                    "start": 81,
                    "end": 92
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ThisExpression",
                      "start": 93,
                      "end": 97
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 99,
                      "end": 102
                    }
                  ],
                  "optional": false,
                  "start": 81,
                  "end": 103
                },
                "directive": null,
                "start": 81,
                "end": 103
              }
            ],
            "start": 72,
            "end": 105
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 118
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
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
                          "start": 129,
                          "end": 136
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 137,
                          "end": 140
                        },
                        "optional": false,
                        "computed": false,
                        "start": 129,
                        "end": 140
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 141,
                          "end": 145
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 147,
                          "end": 150
                        }
                      ],
                      "optional": false,
                      "start": 129,
                      "end": 151
                    },
                    "directive": null,
                    "start": 129,
                    "end": 151
                  }
                ],
                "start": 127,
                "end": 153
              },
              "id": null,
              "generator": false,
              "start": 121,
              "end": 153
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 110,
            "end": 153
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 166
            },
            "typeAnnotation": null,
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 184,
                      "end": 191
                    },
                    "start": 182,
                    "end": 191
                  },
                  "start": 178,
                  "end": 191
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
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
                          "start": 195,
                          "end": 202
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 203,
                          "end": 206
                        },
                        "optional": false,
                        "computed": false,
                        "start": 195,
                        "end": 206
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 207,
                          "end": 211
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 213,
                          "end": 216
                        }
                      ],
                      "optional": false,
                      "start": 195,
                      "end": 217
                    },
                    "directive": null,
                    "start": 195,
                    "end": 217
                  }
                ],
                "start": 193,
                "end": 219
              },
              "expression": false,
              "start": 169,
              "end": 219
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 158,
            "end": 219
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "x",
              "start": 225,
              "end": 227
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
                          "start": 232,
                          "end": 239
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 240,
                          "end": 243
                        },
                        "optional": false,
                        "computed": false,
                        "start": 232,
                        "end": 243
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 244,
                          "end": 247
                        }
                      ],
                      "optional": false,
                      "start": 232,
                      "end": 248
                    },
                    "directive": null,
                    "start": 232,
                    "end": 249
                  }
                ],
                "start": 230,
                "end": 251
              },
              "expression": false,
              "start": 227,
              "end": 251
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 225,
            "end": 251
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 256,
              "end": 257
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 262,
                          "end": 266
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "x",
                          "start": 267,
                          "end": 269
                        },
                        "optional": false,
                        "computed": false,
                        "start": 262,
                        "end": 269
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 262,
                      "end": 271
                    },
                    "directive": null,
                    "start": 262,
                    "end": 272
                  }
                ],
                "start": 260,
                "end": 274
              },
              "expression": false,
              "start": 257,
              "end": 274
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 256,
            "end": 274
          }
        ],
        "start": 66,
        "end": 276
      },
      "abstract": false,
      "declare": false,
      "start": 56,
      "end": 276
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
            "name": "oldFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 284,
            "end": 290
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 293,
            "end": 296
          },
          "definite": false,
          "start": 284,
          "end": 296
        }
      ],
      "declare": false,
      "start": 278,
      "end": 297
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "TSAsExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 299,
            "end": 302
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 306,
            "end": 309
          },
          "start": 299,
          "end": 309
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 313,
          "end": 317
        },
        "start": 298,
        "end": 317
      },
      "directive": null,
      "start": 298,
      "end": 318
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
            "name": "oldFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 319,
            "end": 325
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 327
          },
          "optional": false,
          "computed": false,
          "start": 319,
          "end": 327
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 319,
        "end": 329
      },
      "directive": null,
      "start": 319,
      "end": 330
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
            "name": "oldFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 331,
            "end": 337
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 338,
            "end": 339
          },
          "optional": false,
          "computed": false,
          "start": 331,
          "end": 339
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 331,
        "end": 341
      },
      "directive": null,
      "start": 331,
      "end": 342
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "oldFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 353
            },
            "typeArguments": null,
            "arguments": [],
            "start": 343,
            "end": 355
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 356,
            "end": 357
          },
          "optional": false,
          "computed": false,
          "start": 343,
          "end": 357
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 343,
        "end": 359
      },
      "directive": null,
      "start": 343,
      "end": 360
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 360
}
```
