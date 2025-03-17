__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 338,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 19,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 55,
        "name": "connectionFromArray",
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
          "start": 56,
          "end": 71,
          "name": "objects",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 63,
            "end": 71,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 65,
              "end": 71
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 73,
          "end": 82,
          "name": "args",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 77,
            "end": 82,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 79,
              "end": 82
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 83,
        "end": 87,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 85,
          "end": 87,
          "members": []
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 89,
      "end": 313,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 112,
        "name": "rootConnection",
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
          "start": 113,
          "end": 125,
          "name": "name",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 117,
            "end": 125,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 119,
              "end": 125
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 127,
        "end": 313,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 131,
            "end": 311,
            "argument": {
              "type": "ObjectExpression",
              "start": 138,
              "end": 310,
              "properties": [
                {
                  "type": "Property",
                  "start": 144,
                  "end": 306,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 151,
                    "name": "resolve",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 153,
                    "end": 306,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": true,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 160,
                        "end": 167,
                        "name": "context",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 169,
                        "end": 173,
                        "name": "args",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 178,
                      "end": 306,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 188,
                          "end": 230,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 194,
                              "end": 229,
                              "id": {
                                "type": "ObjectPattern",
                                "start": 194,
                                "end": 205,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 196,
                                    "end": 203,
                                    "method": false,
                                    "shorthand": true,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 196,
                                      "end": 203,
                                      "name": "objects",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "value": {
                                      "type": "Identifier",
                                      "start": 196,
                                      "end": 203,
                                      "name": "objects",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "kind": "init",
                                    "optional": false
                                  }
                                ],
                                "decorators": [],
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "AwaitExpression",
                                "start": 208,
                                "end": 229,
                                "argument": {
                                  "type": "ObjectExpression",
                                  "start": 214,
                                  "end": 229,
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "start": 216,
                                      "end": 227,
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 216,
                                        "end": 223,
                                        "name": "objects",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "start": 225,
                                        "end": 227,
                                        "value": 12,
                                        "raw": "12"
                                      },
                                      "kind": "init",
                                      "optional": false
                                    }
                                  ]
                                }
                              },
                              "definite": false
                            }
                          ],
                          "kind": "const",
                          "declare": false
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 237,
                          "end": 300,
                          "argument": {
                            "type": "ObjectExpression",
                            "start": 244,
                            "end": 299,
                            "properties": [
                              {
                                "type": "SpreadElement",
                                "start": 254,
                                "end": 291,
                                "argument": {
                                  "type": "CallExpression",
                                  "start": 257,
                                  "end": 291,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 257,
                                    "end": 276,
                                    "name": "connectionFromArray",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 277,
                                      "end": 284,
                                      "name": "objects",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    {
                                      "type": "Identifier",
                                      "start": 286,
                                      "end": 290,
                                      "name": "args",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                }
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 314,
      "end": 337,
      "expression": {
        "type": "CallExpression",
        "start": 314,
        "end": 336,
        "callee": {
          "type": "Identifier",
          "start": 314,
          "end": 328,
          "name": "rootConnection",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 329,
            "end": 335,
            "value": "test",
            "raw": "'test'"
          }
        ],
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
