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
                    "start": 83,
                    "end": 89
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asyncIterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 90,
                    "end": 103
                  },
                  "optional": false,
                  "computed": false,
                  "start": 83,
                  "end": 103
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": true,
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
                          "start": 108,
                          "end": 114
                        },
                        "start": 106,
                        "end": 114
                      },
                      "start": 105,
                      "end": 114
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
                            "start": 132,
                            "end": 133
                          },
                          "start": 126,
                          "end": 133
                        },
                        "directive": null,
                        "start": 126,
                        "end": 134
                      }
                    ],
                    "start": 116,
                    "end": 140
                  },
                  "expression": false,
                  "start": 104,
                  "end": 140
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 75,
                "end": 140
              }
            ],
            "start": 69,
            "end": 142
          },
          "definite": false,
          "start": 62,
          "end": 142
        }
      ],
      "declare": false,
      "start": 56,
      "end": 143
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 163
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
            "start": 167,
            "end": 171
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 173,
              "end": 176
            },
            "start": 171,
            "end": 176
          },
          "value": null,
          "start": 164,
          "end": 176
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 179,
          "end": 182
        },
        "start": 177,
        "end": 182
      },
      "body": null,
      "expression": false,
      "start": 145,
      "end": 183
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 202
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": true,
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
                    "start": 228,
                    "end": 229
                  },
                  "init": null,
                  "definite": false,
                  "start": 228,
                  "end": 229
                }
              ],
              "declare": false,
              "start": 222,
              "end": 229
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iter",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 237
            },
            "body": {
              "type": "EmptyStatement",
              "start": 238,
              "end": 239
            },
            "start": 211,
            "end": 239
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
                "start": 252,
                "end": 256
              },
              "start": 245,
              "end": 256
            },
            "directive": null,
            "start": 245,
            "end": 257
          }
        ],
        "start": 205,
        "end": 259
      },
      "expression": false,
      "start": 185,
      "end": 259
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 259
}
```
