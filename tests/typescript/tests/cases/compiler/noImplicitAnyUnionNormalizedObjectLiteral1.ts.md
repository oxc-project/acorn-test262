__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 317,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 216,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 81,
        "decorators": [],
        "name": "doSthWithParams",
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
      "body": {
        "type": "BlockStatement",
        "start": 99,
        "end": 216,
        "body": [
          {
            "type": "IfStatement",
            "start": 103,
            "end": 155,
            "test": {
              "type": "BinaryExpression",
              "start": 107,
              "end": 133,
              "left": {
                "type": "UnaryExpression",
                "start": 107,
                "end": 120,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 120,
                  "decorators": [],
                  "name": "params",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 125,
                "end": 133,
                "value": "object",
                "raw": "\"object\""
              }
            },
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
            "alternate": null
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 173,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 175,
                    "end": 180,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 186,
                  "end": 194,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 186,
                    "end": 187,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 189,
                    "end": 194,
                    "value": "bar",
                    "raw": "\"bar\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 200,
                  "end": 208,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 201,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 203,
                    "end": 208,
                    "value": "baz",
                    "raw": "\"baz\""
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
      "type": "VariableDeclaration",
      "start": 218,
      "end": 317,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 316,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 235,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 237,
                  "end": 241,
                  "value": null,
                  "raw": "null"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 245,
                "end": 252,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 246,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 248,
                  "end": 252,
                  "value": null,
                  "raw": "null"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "SpreadElement",
                "start": 256,
                "end": 313,
                "argument": {
                  "type": "CallExpression",
                  "start": 259,
                  "end": 313,
                  "callee": {
                    "type": "Identifier",
                    "start": 259,
                    "end": 274,
                    "decorators": [],
                    "name": "doSthWithParams",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 281,
                            "end": 282,
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 284,
                            "end": 291,
                            "value": "hello",
                            "raw": "\"hello\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 297,
                          "end": 307,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 297,
                            "end": 298,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 300,
                            "end": 307,
                            "value": "world",
                            "raw": "\"world\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
