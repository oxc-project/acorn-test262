__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doSthWithParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 81
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "params",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 90,
              "end": 97
            },
            "start": 88,
            "end": 97
          },
          "start": 82,
          "end": 97
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 114,
                  "end": 120
                },
                "prefix": true,
                "start": 107,
                "end": 120
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "object",
                "raw": "\"object\"",
                "start": 125,
                "end": 133
              },
              "start": 107,
              "end": 133
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 148,
                    "end": 150
                  },
                  "start": 141,
                  "end": 151
                }
              ],
              "start": 135,
              "end": 155
            },
            "alternate": null,
            "start": 103,
            "end": 155
          },
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 172,
                    "end": 173
                  },
                  "value": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 175,
                    "end": 180
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 172,
                  "end": 180
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 186,
                    "end": 187
                  },
                  "value": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 189,
                    "end": 194
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 186,
                  "end": 194
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 200,
                    "end": 201
                  },
                  "value": {
                    "type": "Literal",
                    "value": "baz",
                    "raw": "\"baz\"",
                    "start": 203,
                    "end": 208
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 200,
                  "end": 208
                }
              ],
              "start": 166,
              "end": 213
            },
            "start": 159,
            "end": 214
          }
        ],
        "start": 99,
        "end": 216
      },
      "expression": false,
      "start": 57,
      "end": 216
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 227
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 234,
                  "end": 235
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 237,
                  "end": 241
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 234,
                "end": 241
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 245,
                  "end": 246
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 248,
                  "end": 252
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 245,
                "end": 252
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "doSthWithParams",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 259,
                    "end": 274
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 281,
                            "end": 282
                          },
                          "value": {
                            "type": "Literal",
                            "value": "hello",
                            "raw": "\"hello\"",
                            "start": 284,
                            "end": 291
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 281,
                          "end": 291
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 297,
                            "end": 298
                          },
                          "value": {
                            "type": "Literal",
                            "value": "world",
                            "raw": "\"world\"",
                            "start": 300,
                            "end": 307
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 297,
                          "end": 307
                        }
                      ],
                      "start": 275,
                      "end": 312
                    }
                  ],
                  "optional": false,
                  "start": 259,
                  "end": 313
                },
                "start": 256,
                "end": 313
              }
            ],
            "start": 230,
            "end": 316
          },
          "definite": false,
          "start": 224,
          "end": 316
        }
      ],
      "declare": false,
      "start": 218,
      "end": 317
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 317
}
```
