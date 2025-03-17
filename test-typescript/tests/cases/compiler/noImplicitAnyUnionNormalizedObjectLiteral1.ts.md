__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 318,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 216,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 99,
        "end": 216,
        "body": [
          {
            "type": "IfStatement",
            "start": 103,
            "end": 155,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 135,
              "end": 155,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 141,
                  "end": 151,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 148,
                    "end": 150,
                    "properties": []
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 107,
              "end": 133,
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "start": 107,
                "end": 120,
                "argument": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 120,
                  "decorators": [],
                  "name": "params",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 125,
                "end": 133,
                "raw": "\"object\"",
                "value": "object"
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 159,
            "end": 214,
            "argument": {
              "type": "ObjectExpression",
              "start": 166,
              "end": 213,
              "properties": [
                {
                  "type": "Property",
                  "start": 172,
                  "end": 180,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 173,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 175,
                    "end": 180,
                    "raw": "\"foo\"",
                    "value": "foo"
                  }
                },
                {
                  "type": "Property",
                  "start": 186,
                  "end": 194,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 186,
                    "end": 187,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 189,
                    "end": 194,
                    "raw": "\"bar\"",
                    "value": "bar"
                  }
                },
                {
                  "type": "Property",
                  "start": 200,
                  "end": 208,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 201,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 203,
                    "end": 208,
                    "raw": "\"baz\"",
                    "value": "baz"
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 81,
        "decorators": [],
        "name": "doSthWithParams",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 82,
          "end": 97,
          "decorators": [],
          "name": "params",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 88,
            "end": 97,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 90,
              "end": 97
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 218,
      "end": 317,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 316,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 224,
            "end": 227,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 230,
            "end": 316,
            "properties": [
              {
                "type": "Property",
                "start": 234,
                "end": 241,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 235,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 237,
                  "end": 241,
                  "raw": "null",
                  "value": null
                }
              },
              {
                "type": "Property",
                "start": 245,
                "end": 252,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 246,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 248,
                  "end": 252,
                  "raw": "null",
                  "value": null
                }
              },
              {
                "type": "SpreadElement",
                "start": 256,
                "end": 313,
                "argument": {
                  "type": "CallExpression",
                  "start": 259,
                  "end": 313,
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "start": 275,
                      "end": 312,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 281,
                          "end": 291,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 281,
                            "end": 282,
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 284,
                            "end": 291,
                            "raw": "\"hello\"",
                            "value": "hello"
                          }
                        },
                        {
                          "type": "Property",
                          "start": 297,
                          "end": 307,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 297,
                            "end": 298,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 300,
                            "end": 307,
                            "raw": "\"world\"",
                            "value": "world"
                          }
                        }
                      ]
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 259,
                    "end": 274,
                    "decorators": [],
                    "name": "doSthWithParams",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
