__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 268,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 57,
      "end": 87,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 78,
        "decorators": [],
        "name": "getT",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 83,
        "end": 86,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 85,
          "end": 86,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 85,
            "end": 86,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 78,
        "end": 81,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 79,
            "end": 80,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 89,
      "end": 267,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 89,
        "end": 266,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 140,
            "end": 265,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 152,
              "end": 265,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 156,
                  "end": 179,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 162,
                      "end": 178,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 162,
                        "end": 166,
                        "decorators": [],
                        "name": "head",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 169,
                        "end": 178,
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 175,
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 176,
                          "end": 177,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 192,
                  "end": 221,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 198,
                      "end": 220,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 198,
                        "end": 202,
                        "decorators": [],
                        "name": "tail",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 205,
                        "end": 220,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 218,
                            "end": 219,
                            "raw": "1",
                            "value": 1
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 205,
                          "end": 217,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 205,
                            "end": 211,
                            "decorators": [],
                            "name": "result",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 212,
                            "end": 217,
                            "decorators": [],
                            "name": "slice",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 233,
                  "end": 257,
                  "directive": null,
                  "expression": {
                    "type": "TSSatisfiesExpression",
                    "start": 233,
                    "end": 256,
                    "expression": {
                      "type": "Identifier",
                      "start": 233,
                      "end": 237,
                      "decorators": [],
                      "name": "tail",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 248,
                      "end": 256,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 248,
                        "end": 254
                      }
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 141,
                "end": 147,
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 89,
          "end": 139,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 89,
            "end": 134,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 101,
                "end": 133,
                "elements": [
                  {
                    "type": "CallExpression",
                    "start": 102,
                    "end": 116,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 106,
                      "decorators": [],
                      "name": "getT",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 106,
                      "end": 114,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 107,
                          "end": 113
                        }
                      ]
                    }
                  },
                  {
                    "type": "SpreadElement",
                    "start": 118,
                    "end": 132,
                    "argument": {
                      "type": "CallExpression",
                      "start": 121,
                      "end": 132,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 125,
                        "decorators": [],
                        "name": "getT",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 125,
                        "end": 130,
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 126,
                            "end": 129
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 89,
              "end": 100,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 89,
                "end": 96,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 97,
                "end": 100,
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 135,
            "end": 139,
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
