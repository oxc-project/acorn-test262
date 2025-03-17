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
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 81,
        "name": "doSthWithParams",
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
          "start": 82,
          "end": 97,
          "name": "params",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 88,
            "end": 97,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 90,
              "end": 97
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 120,
                  "name": "params",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 173,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 175,
                    "end": 180,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 186,
                  "end": 194,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 186,
                    "end": 187,
                    "name": "p",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 189,
                    "end": 194,
                    "value": "bar",
                    "raw": "\"bar\""
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 200,
                  "end": 208,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 201,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 203,
                    "end": 208,
                    "value": "baz",
                    "raw": "\"baz\""
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
      "type": "VariableDeclaration",
      "start": 218,
      "end": 317,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 224,
          "end": 316,
          "id": {
            "type": "Identifier",
            "start": 224,
            "end": 227,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 235,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 237,
                  "end": 241,
                  "value": null,
                  "raw": "null"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 245,
                "end": 252,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 246,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 248,
                  "end": 252,
                  "value": null,
                  "raw": "null"
                },
                "kind": "init",
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
                    "name": "doSthWithParams",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 281,
                            "end": 282,
                            "name": "p",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 284,
                            "end": 291,
                            "value": "hello",
                            "raw": "\"hello\""
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 297,
                          "end": 307,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 297,
                            "end": 298,
                            "name": "s",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 300,
                            "end": 307,
                            "value": "world",
                            "raw": "\"world\""
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
