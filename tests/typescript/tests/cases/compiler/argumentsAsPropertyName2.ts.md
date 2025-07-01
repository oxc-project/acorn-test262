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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 28
      },
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
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 46,
                    "end": 47
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 50,
                    "end": 51
                  },
                  "definite": false,
                  "start": 46,
                  "end": 51
                }
              ],
              "declare": false,
              "start": 42,
              "end": 51
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 54
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 57,
                "end": 58
              },
              "start": 53,
              "end": 58
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 62,
                "end": 63
              },
              "start": 60,
              "end": 63
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 83,
                            "end": 89
                          },
                          "start": 81,
                          "end": 89
                        },
                        "start": 79,
                        "end": 89
                      },
                      "init": null,
                      "definite": false,
                      "start": 79,
                      "end": 89
                    }
                  ],
                  "declare": false,
                  "start": 75,
                  "end": 90
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "start": 99,
                        "end": 101
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "forEach",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 102,
                        "end": 109
                      },
                      "optional": false,
                      "computed": false,
                      "start": 99,
                      "end": 109
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
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 124,
                                "end": 125
                              },
                              "directive": null,
                              "start": 124,
                              "end": 125
                            }
                          ],
                          "start": 122,
                          "end": 127
                        },
                        "expression": false,
                        "start": 110,
                        "end": 127
                      }
                    ],
                    "optional": false,
                    "start": 99,
                    "end": 128
                  },
                  "directive": null,
                  "start": 99,
                  "end": 129
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 141,
                          "end": 150
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 152,
                          "end": 153
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 141,
                        "end": 153
                      }
                    ],
                    "start": 139,
                    "end": 155
                  },
                  "directive": null,
                  "start": 138,
                  "end": 157
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 169,
                          "end": 178
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 169,
                          "end": 178
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 169,
                        "end": 178
                      }
                    ],
                    "start": 167,
                    "end": 180
                  },
                  "directive": null,
                  "start": 166,
                  "end": 182
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 194,
                          "end": 203
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 205,
                          "end": 214
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 194,
                        "end": 214
                      }
                    ],
                    "start": 192,
                    "end": 216
                  },
                  "directive": null,
                  "start": 191,
                  "end": 218
                }
              ],
              "start": 65,
              "end": 224
            },
            "start": 37,
            "end": 224
          }
        ],
        "start": 31,
        "end": 226
      },
      "expression": false,
      "start": 16,
      "end": 226
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 16,
  "end": 226
}
```
