__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 269,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 132,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 131,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 66,
            "name": "iter",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 69,
            "end": 131,
            "properties": [
              {
                "type": "Property",
                "start": 75,
                "end": 129,
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 77,
                  "end": 92,
                  "object": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 83,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 92,
                    "name": "iterator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 93,
                  "end": 129,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 94,
                      "end": 103,
                      "name": "_",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 95,
                        "end": 103,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 97,
                          "end": 103
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 105,
                    "end": 129,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 115,
                        "end": 123,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 115,
                          "end": 122,
                          "delegate": false,
                          "argument": {
                            "type": "Literal",
                            "start": 121,
                            "end": 122,
                            "value": 0,
                            "raw": "0"
                          }
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 134,
      "end": 172,
      "id": {
        "type": "Identifier",
        "start": 151,
        "end": 152,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 153,
          "end": 165,
          "argument": {
            "type": "Identifier",
            "start": 156,
            "end": 160,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 160,
            "end": 165,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 162,
              "end": 165
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 166,
        "end": 171,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 168,
          "end": 171
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 174,
      "end": 268,
      "id": {
        "type": "Identifier",
        "start": 184,
        "end": 185,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 188,
        "end": 268,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 194,
            "end": 216,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 199,
              "end": 206,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 205,
                  "end": 206,
                  "id": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 206,
                    "name": "_",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 210,
              "end": 214,
              "name": "iter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "EmptyStatement",
              "start": 215,
              "end": 216
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 222,
            "end": 234,
            "expression": {
              "type": "YieldExpression",
              "start": 222,
              "end": 233,
              "delegate": true,
              "argument": {
                "type": "Identifier",
                "start": 229,
                "end": 233,
                "name": "iter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 240,
            "end": 249,
            "expression": {
              "type": "ArrayExpression",
              "start": 240,
              "end": 249,
              "elements": [
                {
                  "type": "SpreadElement",
                  "start": 241,
                  "end": 248,
                  "argument": {
                    "type": "Identifier",
                    "start": 244,
                    "end": 248,
                    "name": "iter",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 255,
            "end": 266,
            "expression": {
              "type": "CallExpression",
              "start": 255,
              "end": 265,
              "callee": {
                "type": "Identifier",
                "start": 255,
                "end": 256,
                "name": "g",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "SpreadElement",
                  "start": 257,
                  "end": 264,
                  "argument": {
                    "type": "Identifier",
                    "start": 260,
                    "end": 264,
                    "name": "iter",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
