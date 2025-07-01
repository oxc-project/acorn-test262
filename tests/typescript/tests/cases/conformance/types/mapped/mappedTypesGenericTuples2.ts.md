__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getT",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 78
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 79,
            "end": 80
          }
        ],
        "start": 78,
        "end": 81
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 86
          },
          "typeArguments": null,
          "start": 85,
          "end": 86
        },
        "start": 83,
        "end": 86
      },
      "body": null,
      "expression": false,
      "start": 57,
      "end": 87
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 96
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 97,
                "end": 100
              },
              "optional": false,
              "computed": false,
              "start": 89,
              "end": 100
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getT",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 102,
                      "end": 106
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 107,
                          "end": 113
                        }
                      ],
                      "start": 106,
                      "end": 114
                    },
                    "arguments": [],
                    "optional": false,
                    "start": 102,
                    "end": 116
                  },
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 121,
                        "end": 125
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 126,
                            "end": 129
                          }
                        ],
                        "start": 125,
                        "end": 130
                      },
                      "arguments": [],
                      "optional": false,
                      "start": 121,
                      "end": 132
                    },
                    "start": 118,
                    "end": 132
                  }
                ],
                "start": 101,
                "end": 133
              }
            ],
            "optional": false,
            "start": 89,
            "end": 134
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 139
          },
          "optional": false,
          "computed": false,
          "start": 89,
          "end": 139
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 147
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "head",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 162,
                        "end": 166
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 169,
                          "end": 175
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 176,
                          "end": 177
                        },
                        "optional": false,
                        "computed": true,
                        "start": 169,
                        "end": 178
                      },
                      "definite": false,
                      "start": 162,
                      "end": 178
                    }
                  ],
                  "declare": false,
                  "start": 156,
                  "end": 179
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
                        "name": "tail",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 198,
                        "end": 202
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "result",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 205,
                            "end": 211
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "slice",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 212,
                            "end": 217
                          },
                          "optional": false,
                          "computed": false,
                          "start": 205,
                          "end": 217
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 218,
                            "end": 219
                          }
                        ],
                        "optional": false,
                        "start": 205,
                        "end": 220
                      },
                      "definite": false,
                      "start": 198,
                      "end": 220
                    }
                  ],
                  "declare": false,
                  "start": 192,
                  "end": 221
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "TSSatisfiesExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tail",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 233,
                      "end": 237
                    },
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 248,
                        "end": 254
                      },
                      "start": 248,
                      "end": 256
                    },
                    "start": 233,
                    "end": 256
                  },
                  "directive": null,
                  "start": 233,
                  "end": 257
                }
              ],
              "start": 152,
              "end": 265
            },
            "id": null,
            "generator": false,
            "start": 140,
            "end": 265
          }
        ],
        "optional": false,
        "start": 89,
        "end": 266
      },
      "directive": null,
      "start": 89,
      "end": 267
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 267
}
```
