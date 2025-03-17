__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 302,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 27,
        "name": "setTimeout",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 28,
          "end": 43,
          "name": "expression",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 38,
            "end": 43,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 40,
              "end": 43
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 45,
          "end": 58,
          "name": "msec",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 50,
            "end": 58,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 52,
              "end": 58
            }
          },
          "decorators": [],
          "optional": true
        },
        {
          "type": "Identifier",
          "start": 60,
          "end": 74,
          "name": "language",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 69,
            "end": 74,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 71,
              "end": 74
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 75,
        "end": 83,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 77,
          "end": 83
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 280,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 279,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 99,
            "name": "messenger",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 115,
                  "name": "message",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 117,
                  "end": 130,
                  "value": "Hello World",
                  "raw": "\"Hello World\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 136,
                "end": 277,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 141,
                  "name": "start",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 143,
                  "end": 277,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 154,
                    "end": 277,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 164,
                        "end": 181,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 168,
                            "end": 180,
                            "id": {
                              "type": "Identifier",
                              "start": 168,
                              "end": 173,
                              "name": "_self",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "ThisExpression",
                              "start": 176,
                              "end": 180
                            },
                            "definite": false
                          }
                        ],
                        "kind": "var",
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
                            "name": "setTimeout",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "FunctionExpression",
                              "start": 201,
                              "end": 262,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
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
                                            "name": "_self",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 232,
                                            "end": 239,
                                            "name": "message",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "computed": false,
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 240,
                                          "end": 248,
                                          "name": "toString",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "arguments": [],
                                      "optional": false,
                                      "typeArguments": null
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "declare": false,
                              "typeParameters": null,
                              "returnType": null
                            },
                            {
                              "type": "Literal",
                              "start": 264,
                              "end": 268,
                              "value": 3000,
                              "raw": "3000"
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
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
            "name": "messenger",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 292,
            "end": 297,
            "name": "start",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
