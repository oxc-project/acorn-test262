__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "setTimeout",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 27
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "expression",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 40,
              "end": 43
            },
            "start": 38,
            "end": 43
          },
          "start": 28,
          "end": 43
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "msec",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 52,
              "end": 58
            },
            "start": 50,
            "end": 58
          },
          "start": 45,
          "end": 58
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "language",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 71,
              "end": 74
            },
            "start": 69,
            "end": 74
          },
          "start": 60,
          "end": 74
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 77,
          "end": 83
        },
        "start": 75,
        "end": 83
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 84
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
            "name": "messenger",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 99
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 108,
                  "end": 115
                },
                "value": {
                  "type": "Literal",
                  "value": "Hello World",
                  "raw": "\"Hello World\"",
                  "start": 117,
                  "end": 130
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 108,
                "end": 130
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "start",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 141
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
                        "type": "VariableDeclaration",
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_self",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 168,
                              "end": 173
                            },
                            "init": {
                              "type": "ThisExpression",
                              "start": 176,
                              "end": 180
                            },
                            "definite": false,
                            "start": 168,
                            "end": 180
                          }
                        ],
                        "declare": false,
                        "start": 164,
                        "end": 181
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "setTimeout",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 190,
                            "end": 200
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
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
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "_self",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 226,
                                            "end": 231
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "message",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 232,
                                            "end": 239
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 226,
                                          "end": 239
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "toString",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 240,
                                          "end": 248
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 226,
                                        "end": 248
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false,
                                      "start": 226,
                                      "end": 250
                                    },
                                    "directive": null,
                                    "start": 226,
                                    "end": 251
                                  }
                                ],
                                "start": 212,
                                "end": 262
                              },
                              "expression": false,
                              "start": 201,
                              "end": 262
                            },
                            {
                              "type": "Literal",
                              "value": 3000,
                              "raw": "3000",
                              "start": 264,
                              "end": 268
                            }
                          ],
                          "optional": false,
                          "start": 190,
                          "end": 269
                        },
                        "directive": null,
                        "start": 190,
                        "end": 270
                      }
                    ],
                    "start": 154,
                    "end": 277
                  },
                  "expression": false,
                  "start": 143,
                  "end": 277
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 136,
                "end": 277
              }
            ],
            "start": 102,
            "end": 279
          },
          "definite": false,
          "start": 90,
          "end": 279
        }
      ],
      "declare": false,
      "start": 86,
      "end": 280
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
            "name": "messenger",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 291
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "start",
            "optional": false,
            "typeAnnotation": null,
            "start": 292,
            "end": 297
          },
          "optional": false,
          "computed": false,
          "start": 282,
          "end": 297
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 282,
        "end": 299
      },
      "directive": null,
      "start": 282,
      "end": 300
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 301
}
```
