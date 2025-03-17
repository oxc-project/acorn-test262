__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 227,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 16,
      "end": 226,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 28,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 46,
                  "end": 51,
                  "id": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "let",
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 79,
                      "end": 89,
                      "id": {
                        "type": "Identifier",
                        "start": 79,
                        "end": 89,
                        "name": "i",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 81,
                          "end": 89,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 83,
                            "end": 89
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "let",
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
                        "name": "forEach",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "FunctionExpression",
                        "start": 110,
                        "end": 127,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                "name": "i",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "directive": null
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 141,
                          "end": 150,
                          "name": "arguments",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 152,
                          "end": 153,
                          "value": 0,
                          "raw": "0"
                        },
                        "kind": "init",
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
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 178,
                          "name": "arguments",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 178,
                          "name": "arguments",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 194,
                          "end": 203,
                          "name": "arguments",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 205,
                          "end": 214,
                          "name": "arguments",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
