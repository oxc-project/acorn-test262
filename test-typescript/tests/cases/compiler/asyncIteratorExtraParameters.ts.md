asyncIteratorExtraParameters.ts
```json
{
  "type": "Program",
  "start": 56,
  "end": 260,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 142,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 66,
            "decorators": [],
            "name": "iter",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 69,
            "end": 142,
            "properties": [
              {
                "type": "Property",
                "start": 75,
                "end": 140,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 83,
                  "end": 103,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 89,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 103,
                    "decorators": [],
                    "name": "asyncIterator",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 104,
                  "end": 140,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 116,
                    "end": 140,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 126,
                        "end": 134,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 126,
                          "end": 133,
                          "argument": {
                            "type": "Literal",
                            "start": 132,
                            "end": 133,
                            "raw": "0",
                            "value": 0
                          },
                          "delegate": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 105,
                      "end": 114,
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 106,
                        "end": 114,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 108,
                          "end": 114
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 145,
      "end": 183,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 163,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 164,
          "end": 176,
          "argument": {
            "type": "Identifier",
            "start": 167,
            "end": 171,
            "decorators": [],
            "name": "args",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 171,
            "end": 176,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 173,
              "end": 176
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 177,
        "end": 182,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 179,
          "end": 182
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 185,
      "end": 259,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 205,
        "end": 259,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 211,
            "end": 239,
            "await": true,
            "body": {
              "type": "EmptyStatement",
              "start": 238,
              "end": 239
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 222,
              "end": 229,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 228,
                  "end": 229,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 229,
                    "decorators": [],
                    "name": "_",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "right": {
              "type": "Identifier",
              "start": 233,
              "end": 237,
              "decorators": [],
              "name": "iter",
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 245,
            "end": 257,
            "expression": {
              "type": "YieldExpression",
              "start": 245,
              "end": 256,
              "argument": {
                "type": "Identifier",
                "start": 252,
                "end": 256,
                "decorators": [],
                "name": "iter",
                "optional": false
              },
              "delegate": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 202,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
