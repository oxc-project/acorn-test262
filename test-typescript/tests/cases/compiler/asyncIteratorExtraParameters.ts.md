__ESTREE_TEST__:PASS:
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
            "end": 142,
            "properties": [
              {
                "type": "Property",
                "start": 75,
                "end": 140,
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 83,
                  "end": 103,
                  "object": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 89,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 103,
                    "name": "asyncIterator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 104,
                  "end": 140,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": true,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 105,
                      "end": 114,
                      "name": "_",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 106,
                        "end": 114,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 108,
                          "end": 114
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
      "start": 145,
      "end": 183,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 163,
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
          "start": 164,
          "end": 176,
          "argument": {
            "type": "Identifier",
            "start": 167,
            "end": 171,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
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
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 202,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 228,
                  "end": 229,
                  "id": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 229,
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
              "start": 233,
              "end": 237,
              "name": "iter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "iter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
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
