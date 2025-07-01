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
        "name": "appendMeta",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 19
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 25,
              "end": 31
            },
            "start": 23,
            "end": 31
          },
          "start": 20,
          "end": 31
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 40,
              "end": 46
            },
            "start": 38,
            "end": 46
          },
          "start": 33,
          "end": 46
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 63
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 65,
                  "end": 72
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "existing",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 93,
                          "end": 101
                        },
                        "init": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 104,
                                "end": 111
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "metadata",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 112,
                                "end": 120
                              },
                              "optional": false,
                              "computed": false,
                              "start": 104,
                              "end": 120
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 121,
                              "end": 124
                            },
                            "optional": false,
                            "computed": true,
                            "start": 104,
                            "end": 125
                          },
                          "operator": "??",
                          "right": {
                            "type": "ArrayExpression",
                            "elements": [],
                            "start": 129,
                            "end": 131
                          },
                          "start": 104,
                          "end": 131
                        },
                        "definite": false,
                        "start": 93,
                        "end": 131
                      }
                    ],
                    "declare": false,
                    "start": 87,
                    "end": 132
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "context",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 141,
                            "end": 148
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "metadata",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 149,
                            "end": 157
                          },
                          "optional": false,
                          "computed": false,
                          "start": 141,
                          "end": 157
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 158,
                          "end": 161
                        },
                        "optional": false,
                        "computed": true,
                        "start": 141,
                        "end": 162
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "SpreadElement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "existing",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 169,
                              "end": 177
                            },
                            "start": 166,
                            "end": 177
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 179,
                            "end": 184
                          }
                        ],
                        "start": 165,
                        "end": 185
                      },
                      "start": 141,
                      "end": 185
                    },
                    "directive": null,
                    "start": 141,
                    "end": 186
                  }
                ],
                "start": 77,
                "end": 192
              },
              "id": null,
              "generator": false,
              "start": 61,
              "end": 192
            },
            "start": 54,
            "end": 193
          }
        ],
        "start": 48,
        "end": 195
      },
      "expression": false,
      "start": 0,
      "end": 195
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "appendMeta",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 208
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 209,
                "end": 212
              },
              {
                "type": "Literal",
                "value": "x",
                "raw": "'x'",
                "start": 214,
                "end": 217
              }
            ],
            "optional": false,
            "start": 198,
            "end": 218
          },
          "start": 197,
          "end": 218
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 225,
        "end": 226
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 227,
        "end": 230
      },
      "abstract": false,
      "declare": false,
      "start": 197,
      "end": 230
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "appendMeta",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 243
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 244,
                "end": 247
              },
              {
                "type": "Literal",
                "value": "z",
                "raw": "'z'",
                "start": 249,
                "end": 252
              }
            ],
            "optional": false,
            "start": 233,
            "end": 253
          },
          "start": 232,
          "end": 253
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 260,
        "end": 261
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 270,
        "end": 271
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 272,
        "end": 275
      },
      "abstract": false,
      "declare": false,
      "start": 232,
      "end": 275
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 278
          },
          "property": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 285
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "metadata",
              "optional": false,
              "typeAnnotation": null,
              "start": 286,
              "end": 294
            },
            "optional": false,
            "computed": false,
            "start": 279,
            "end": 294
          },
          "optional": false,
          "computed": true,
          "start": 277,
          "end": 295
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 296,
          "end": 297
        },
        "optional": false,
        "computed": false,
        "start": 277,
        "end": 297
      },
      "directive": null,
      "start": 277,
      "end": 298
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 309
          },
          "property": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 316
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "metadata",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 325
            },
            "optional": false,
            "computed": false,
            "start": 310,
            "end": 325
          },
          "optional": false,
          "computed": true,
          "start": 308,
          "end": 326
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 327,
          "end": 328
        },
        "optional": false,
        "computed": false,
        "start": 308,
        "end": 328
      },
      "directive": null,
      "start": 308,
      "end": 329
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 343
}
```
