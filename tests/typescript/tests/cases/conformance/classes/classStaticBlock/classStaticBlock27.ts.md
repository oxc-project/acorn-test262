__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "ClassExpression",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 71
          },
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 89
                },
                "typeAnnotation": null,
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 92,
                  "end": 93
                },
                "computed": false,
                "static": true,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 78,
                "end": 93
              },
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
                          "start": 115,
                          "end": 122
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 123,
                          "end": 126
                        },
                        "optional": false,
                        "computed": false,
                        "start": 115,
                        "end": 126
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 127,
                            "end": 130
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 131,
                            "end": 135
                          },
                          "optional": false,
                          "computed": false,
                          "start": 127,
                          "end": 135
                        }
                      ],
                      "optional": false,
                      "start": 115,
                      "end": 136
                    },
                    "directive": null,
                    "start": 115,
                    "end": 137
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 146,
                          "end": 149
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 150,
                          "end": 154
                        },
                        "optional": false,
                        "computed": false,
                        "start": 146,
                        "end": 154
                      },
                      "start": 146,
                      "end": 156
                    },
                    "directive": null,
                    "start": 146,
                    "end": 157
                  }
                ],
                "start": 98,
                "end": 163
              },
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
                          "start": 185,
                          "end": 192
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 193,
                          "end": 196
                        },
                        "optional": false,
                        "computed": false,
                        "start": 185,
                        "end": 196
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 197,
                            "end": 200
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 201,
                            "end": 205
                          },
                          "optional": false,
                          "computed": false,
                          "start": 197,
                          "end": 205
                        }
                      ],
                      "optional": false,
                      "start": 185,
                      "end": 206
                    },
                    "directive": null,
                    "start": 185,
                    "end": 207
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 216,
                          "end": 219
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 220,
                          "end": 224
                        },
                        "optional": false,
                        "computed": false,
                        "start": 216,
                        "end": 224
                      },
                      "start": 216,
                      "end": 226
                    },
                    "directive": null,
                    "start": 216,
                    "end": 227
                  }
                ],
                "start": 168,
                "end": 233
              },
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
                          "start": 255,
                          "end": 262
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 263,
                          "end": 266
                        },
                        "optional": false,
                        "computed": false,
                        "start": 255,
                        "end": 266
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 267,
                            "end": 270
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 271,
                            "end": 275
                          },
                          "optional": false,
                          "computed": false,
                          "start": 267,
                          "end": 275
                        }
                      ],
                      "optional": false,
                      "start": 255,
                      "end": 276
                    },
                    "directive": null,
                    "start": 255,
                    "end": 277
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 286,
                          "end": 289
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 290,
                          "end": 294
                        },
                        "optional": false,
                        "computed": false,
                        "start": 286,
                        "end": 294
                      },
                      "start": 286,
                      "end": 296
                    },
                    "directive": null,
                    "start": 286,
                    "end": 297
                  }
                ],
                "start": 238,
                "end": 303
              }
            ],
            "start": 72,
            "end": 305
          },
          "abstract": false,
          "declare": false,
          "start": 62,
          "end": 305
        },
        "prefix": true,
        "start": 57,
        "end": 305
      },
      "directive": null,
      "start": 57,
      "end": 305
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 305
}
```
