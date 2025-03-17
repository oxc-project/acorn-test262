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
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 78,
        "name": "getT",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 78,
        "end": 81,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 79,
            "end": 80,
            "name": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 83,
        "end": 86,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 85,
          "end": 86,
          "typeName": {
            "type": "Identifier",
            "start": 85,
            "end": 86,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 89,
      "end": 267,
      "expression": {
        "type": "CallExpression",
        "start": 89,
        "end": 266,
        "callee": {
          "type": "MemberExpression",
          "start": 89,
          "end": 139,
          "object": {
            "type": "CallExpression",
            "start": 89,
            "end": 134,
            "callee": {
              "type": "MemberExpression",
              "start": 89,
              "end": 100,
              "object": {
                "type": "Identifier",
                "start": 89,
                "end": 96,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 97,
                "end": 100,
                "name": "all",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
                    "callee": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 106,
                      "name": "getT",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
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
                      "callee": {
                        "type": "Identifier",
                        "start": 121,
                        "end": 125,
                        "name": "getT",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
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
            "optional": false,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 135,
            "end": 139,
            "name": "then",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 140,
            "end": 265,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 141,
                "end": 147,
                "name": "result",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
                      "id": {
                        "type": "Identifier",
                        "start": 162,
                        "end": 166,
                        "name": "head",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 169,
                        "end": 178,
                        "object": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 175,
                          "name": "result",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Literal",
                          "start": 176,
                          "end": 177,
                          "value": 0,
                          "raw": "0"
                        },
                        "computed": true,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
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
                      "id": {
                        "type": "Identifier",
                        "start": 198,
                        "end": 202,
                        "name": "tail",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 205,
                        "end": 220,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 205,
                          "end": 217,
                          "object": {
                            "type": "Identifier",
                            "start": 205,
                            "end": 211,
                            "name": "result",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 212,
                            "end": 217,
                            "name": "slice",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 218,
                            "end": 219,
                            "value": 1,
                            "raw": "1"
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 233,
                  "end": 257,
                  "expression": {
                    "type": "TSSatisfiesExpression",
                    "start": 233,
                    "end": 256,
                    "expression": {
                      "type": "Identifier",
                      "start": 233,
                      "end": 237,
                      "name": "tail",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                  },
                  "directive": null
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
