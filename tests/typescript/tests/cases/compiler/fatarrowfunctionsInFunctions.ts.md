__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 301,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 27,
        "decorators": [],
        "name": "setTimeout",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 28,
          "end": 43,
          "decorators": [],
          "name": "expression",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 38,
            "end": 43,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 40,
              "end": 43
            }
          }
        },
        {
          "type": "Identifier",
          "start": 45,
          "end": 58,
          "decorators": [],
          "name": "msec",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 50,
            "end": 58,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 52,
              "end": 58
            }
          }
        },
        {
          "type": "Identifier",
          "start": 60,
          "end": 74,
          "decorators": [],
          "name": "language",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 69,
            "end": 74,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 71,
              "end": 74
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 75,
        "end": 83,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 77,
          "end": 83
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 280,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 279,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 99,
            "decorators": [],
            "name": "messenger",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 102,
            "end": 279,
            "properties": [
              {
                "type": "Property",
                "start": 108,
                "end": 130,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 115,
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 117,
                  "end": 130,
                  "value": "Hello World",
                  "raw": "\"Hello World\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 136,
                "end": 277,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 141,
                  "decorators": [],
                  "name": "start",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 143,
                  "end": 277,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 154,
                    "end": 277,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 164,
                        "end": 181,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 168,
                            "end": 180,
                            "id": {
                              "type": "Identifier",
                              "start": 168,
                              "end": 173,
                              "decorators": [],
                              "name": "_self",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "ThisExpression",
                              "start": 176,
                              "end": 180
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 190,
                        "end": 270,
                        "expression": {
                          "type": "CallExpression",
                          "start": 190,
                          "end": 269,
                          "callee": {
                            "type": "Identifier",
                            "start": 190,
                            "end": 200,
                            "decorators": [],
                            "name": "setTimeout",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "FunctionExpression",
                              "start": 201,
                              "end": 262,
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 212,
                                "end": 262,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 226,
                                    "end": 251,
                                    "expression": {
                                      "type": "CallExpression",
                                      "start": 226,
                                      "end": 250,
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 226,
                                        "end": 248,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 226,
                                          "end": 239,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 226,
                                            "end": 231,
                                            "decorators": [],
                                            "name": "_self",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 232,
                                            "end": 239,
                                            "decorators": [],
                                            "name": "message",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 240,
                                          "end": 248,
                                          "decorators": [],
                                          "name": "toString",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "expression": false
                            },
                            {
                              "type": "Literal",
                              "start": 264,
                              "end": 268,
                              "value": 3000,
                              "raw": "3000"
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 282,
      "end": 300,
      "expression": {
        "type": "CallExpression",
        "start": 282,
        "end": 299,
        "callee": {
          "type": "MemberExpression",
          "start": 282,
          "end": 297,
          "object": {
            "type": "Identifier",
            "start": 282,
            "end": 291,
            "decorators": [],
            "name": "messenger",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 292,
            "end": 297,
            "decorators": [],
            "name": "start",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
