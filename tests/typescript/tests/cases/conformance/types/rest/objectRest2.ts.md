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
        "name": "connectionFromArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 55
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "objects",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 65,
              "end": 71
            },
            "start": 63,
            "end": 71
          },
          "start": 56,
          "end": 71
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 79,
              "end": 82
            },
            "start": 77,
            "end": 82
          },
          "start": 73,
          "end": 82
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 85,
          "end": 87
        },
        "start": 83,
        "end": 87
      },
      "body": null,
      "expression": false,
      "start": 19,
      "end": 88
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "rootConnection",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 112
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 119,
              "end": 125
            },
            "start": 117,
            "end": 125
          },
          "start": 113,
          "end": 125
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 144,
                    "end": 151
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": true,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 160,
                        "end": 167
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 169,
                        "end": 173
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
                                "type": "ObjectPattern",
                                "decorators": [],
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "objects",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 196,
                                      "end": 203
                                    },
                                    "value": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "objects",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 196,
                                      "end": 203
                                    },
                                    "method": false,
                                    "shorthand": true,
                                    "computed": false,
                                    "optional": false,
                                    "start": 196,
                                    "end": 203
                                  }
                                ],
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 194,
                                "end": 205
                              },
                              "init": {
                                "type": "AwaitExpression",
                                "argument": {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "objects",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 216,
                                        "end": 223
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "value": 12,
                                        "raw": "12",
                                        "start": 225,
                                        "end": 227
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 216,
                                      "end": 227
                                    }
                                  ],
                                  "start": 214,
                                  "end": 229
                                },
                                "start": 208,
                                "end": 229
                              },
                              "definite": false,
                              "start": 194,
                              "end": 229
                            }
                          ],
                          "declare": false,
                          "start": 188,
                          "end": 230
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "SpreadElement",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "connectionFromArray",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 257,
                                    "end": 276
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "objects",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 277,
                                      "end": 284
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 286,
                                      "end": 290
                                    }
                                  ],
                                  "optional": false,
                                  "start": 257,
                                  "end": 291
                                },
                                "start": 254,
                                "end": 291
                              }
                            ],
                            "start": 244,
                            "end": 299
                          },
                          "start": 237,
                          "end": 300
                        }
                      ],
                      "start": 178,
                      "end": 306
                    },
                    "id": null,
                    "generator": false,
                    "start": 153,
                    "end": 306
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 144,
                  "end": 306
                }
              ],
              "start": 138,
              "end": 310
            },
            "start": 131,
            "end": 311
          }
        ],
        "start": 127,
        "end": 313
      },
      "expression": false,
      "start": 89,
      "end": 313
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "rootConnection",
          "optional": false,
          "typeAnnotation": null,
          "start": 314,
          "end": 328
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "test",
            "raw": "'test'",
            "start": 329,
            "end": 335
          }
        ],
        "optional": false,
        "start": 314,
        "end": 336
      },
      "directive": null,
      "start": 314,
      "end": 337
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 19,
  "end": 337
}
```
