__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 259,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 143,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 142,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 66,
            "decorators": [],
            "name": "iter",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 83,
                  "end": 103,
                  "object": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 89,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 103,
                    "decorators": [],
                    "name": "asyncIterator",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 104,
                  "end": 140,
                  "id": null,
                  "generator": true,
                  "async": true,
                  "declare": false,
                  "typeParameters": null,
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
                  ],
                  "returnType": null,
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
                          "delegate": false,
                          "argument": {
                            "type": "Literal",
                            "start": 132,
                            "end": 133,
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 145,
      "end": 183,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 163,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 164,
          "end": 176,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 167,
            "end": 171,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
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
          },
          "value": null
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 185,
      "end": 259,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 202,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
            "left": {
              "type": "VariableDeclaration",
              "start": 222,
              "end": 229,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 228,
                  "end": 229,
                  "id": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 229,
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 233,
              "end": 237,
              "decorators": [],
              "name": "iter",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "EmptyStatement",
              "start": 238,
              "end": 239
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
              "delegate": true,
              "argument": {
                "type": "Identifier",
                "start": 252,
                "end": 256,
                "decorators": [],
                "name": "iter",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
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
