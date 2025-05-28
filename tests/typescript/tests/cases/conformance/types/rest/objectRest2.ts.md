__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 337,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 19,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 55,
        "decorators": [],
        "name": "connectionFromArray",
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
          "start": 56,
          "end": 71,
          "decorators": [],
          "name": "objects",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 63,
            "end": 71,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 65,
              "end": 71
            }
          }
        },
        {
          "type": "Identifier",
          "start": 73,
          "end": 82,
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 77,
            "end": 82,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 79,
              "end": 82
            }
          }
        }
      ],
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 89,
      "end": 313,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 112,
        "decorators": [],
        "name": "rootConnection",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 113,
          "end": 125,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 117,
            "end": 125,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 119,
              "end": 125
            }
          }
        }
      ],
      "returnType": null,
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 151,
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 153,
                    "end": 306,
                    "expression": false,
                    "async": true,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 160,
                        "end": 167,
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 169,
                        "end": 173,
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 178,
                      "end": 306,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 188,
                          "end": 230,
                          "kind": "const",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 194,
                              "end": 229,
                              "id": {
                                "type": "ObjectPattern",
                                "start": 194,
                                "end": 205,
                                "decorators": [],
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 196,
                                    "end": 203,
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "start": 196,
                                      "end": 203,
                                      "decorators": [],
                                      "name": "objects",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "value": {
                                      "type": "Identifier",
                                      "start": 196,
                                      "end": 203,
                                      "decorators": [],
                                      "name": "objects",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "method": false,
                                    "shorthand": true,
                                    "computed": false,
                                    "optional": false
                                  }
                                ],
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
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "start": 216,
                                        "end": 223,
                                        "decorators": [],
                                        "name": "objects",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "start": 225,
                                        "end": 227,
                                        "value": 12,
                                        "raw": "12"
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false
                                    }
                                  ]
                                }
                              },
                              "definite": false
                            }
                          ],
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
                                    "decorators": [],
                                    "name": "connectionFromArray",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 277,
                                      "end": 284,
                                      "decorators": [],
                                      "name": "objects",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    {
                                      "type": "Identifier",
                                      "start": 286,
                                      "end": 290,
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "optional": false
                                }
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
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
          "decorators": [],
          "name": "rootConnection",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 329,
            "end": 335,
            "value": "test",
            "raw": "'test'"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
