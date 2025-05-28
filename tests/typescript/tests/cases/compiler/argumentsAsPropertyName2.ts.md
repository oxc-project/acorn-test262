__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 226,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 16,
      "end": 226,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 28,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 226,
        "body": [
          {
            "type": "ForStatement",
            "start": 37,
            "end": 224,
            "init": {
              "type": "VariableDeclaration",
              "start": 42,
              "end": 51,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 46,
                  "end": 51,
                  "id": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 50,
                    "end": 51,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 53,
              "end": 58,
              "left": {
                "type": "Identifier",
                "start": 53,
                "end": 54,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 57,
                "end": 58,
                "value": 1,
                "raw": "1"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 60,
              "end": 63,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 62,
                "end": 63,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 65,
              "end": 224,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 75,
                  "end": 90,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 79,
                      "end": 89,
                      "id": {
                        "type": "Identifier",
                        "start": 79,
                        "end": 89,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 81,
                          "end": 89,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 83,
                            "end": 89
                          }
                        }
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 99,
                  "end": 129,
                  "expression": {
                    "type": "CallExpression",
                    "start": 99,
                    "end": 128,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 99,
                      "end": 109,
                      "object": {
                        "type": "ArrayExpression",
                        "start": 99,
                        "end": 101,
                        "elements": []
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 102,
                        "end": 109,
                        "decorators": [],
                        "name": "forEach",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "FunctionExpression",
                        "start": 110,
                        "end": 127,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 122,
                          "end": 127,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 124,
                              "end": 125,
                              "expression": {
                                "type": "Identifier",
                                "start": 124,
                                "end": 125,
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "directive": null
                            }
                          ]
                        },
                        "expression": false
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 138,
                  "end": 157,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 139,
                    "end": 155,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 141,
                        "end": 153,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 141,
                          "end": 150,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 152,
                          "end": 153,
                          "value": 0,
                          "raw": "0"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 166,
                  "end": 182,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 167,
                    "end": 180,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 169,
                        "end": 178,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 178,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 178,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 191,
                  "end": 218,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 192,
                    "end": 216,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 194,
                        "end": 214,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 194,
                          "end": 203,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 205,
                          "end": 214,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
