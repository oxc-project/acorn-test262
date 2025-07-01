__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "iter",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 66
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 77,
                    "end": 83
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 84,
                    "end": 92
                  },
                  "optional": false,
                  "computed": false,
                  "start": 77,
                  "end": 92
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 97,
                          "end": 103
                        },
                        "start": 95,
                        "end": 103
                      },
                      "start": 94,
                      "end": 103
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "YieldExpression",
                          "delegate": false,
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 121,
                            "end": 122
                          },
                          "start": 115,
                          "end": 122
                        },
                        "directive": null,
                        "start": 115,
                        "end": 123
                      }
                    ],
                    "start": 105,
                    "end": 129
                  },
                  "expression": false,
                  "start": 93,
                  "end": 129
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 75,
                "end": 129
              }
            ],
            "start": 69,
            "end": 131
          },
          "definite": false,
          "start": 62,
          "end": 131
        }
      ],
      "declare": false,
      "start": 56,
      "end": 132
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 151,
        "end": 152
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 160
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 162,
              "end": 165
            },
            "start": 160,
            "end": 165
          },
          "value": null,
          "start": 153,
          "end": 165
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 168,
          "end": 171
        },
        "start": 166,
        "end": 171
      },
      "body": null,
      "expression": false,
      "start": 134,
      "end": 172
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 184,
        "end": 185
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 205,
                    "end": 206
                  },
                  "init": null,
                  "definite": false,
                  "start": 205,
                  "end": 206
                }
              ],
              "declare": false,
              "start": 199,
              "end": 206
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iter",
              "optional": false,
              "typeAnnotation": null,
              "start": 210,
              "end": 214
            },
            "body": {
              "type": "EmptyStatement",
              "start": 215,
              "end": 216
            },
            "start": 194,
            "end": 216
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "iter",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 233
              },
              "start": 222,
              "end": 233
            },
            "directive": null,
            "start": 222,
            "end": 234
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 244,
                    "end": 248
                  },
                  "start": 241,
                  "end": 248
                }
              ],
              "start": 240,
              "end": 249
            },
            "directive": null,
            "start": 240,
            "end": 249
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 256
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 260,
                    "end": 264
                  },
                  "start": 257,
                  "end": 264
                }
              ],
              "optional": false,
              "start": 255,
              "end": 265
            },
            "directive": null,
            "start": 255,
            "end": 266
          }
        ],
        "start": 188,
        "end": 268
      },
      "expression": false,
      "start": 174,
      "end": 268
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 268
}
```
