__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 267,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 57,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 78,
        "decorators": [],
        "name": "getT",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
          "typeName": {
            "type": "Identifier",
            "start": 85,
            "end": 86,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
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
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 97,
                "end": 100,
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
                      "decorators": [],
                      "name": "getT",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    },
                    "arguments": [],
                    "optional": false
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
                        "decorators": [],
                        "name": "getT",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                      },
                      "arguments": [],
                      "optional": false
                    }
                  }
                ]
              }
            ],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 135,
            "end": 139,
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 140,
            "end": 265,
            "expression": false,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "BlockStatement",
              "start": 152,
              "end": 265,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 156,
                  "end": 179,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 162,
                      "end": 178,
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
                        "object": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 175,
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Literal",
                          "start": 176,
                          "end": 177,
                          "value": 0,
                          "raw": "0"
                        },
                        "optional": false,
                        "computed": true
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 192,
                  "end": 221,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 198,
                      "end": 220,
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
                        "callee": {
                          "type": "MemberExpression",
                          "start": 205,
                          "end": 217,
                          "object": {
                            "type": "Identifier",
                            "start": 205,
                            "end": 211,
                            "decorators": [],
                            "name": "result",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 212,
                            "end": 217,
                            "decorators": [],
                            "name": "slice",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 218,
                            "end": 219,
                            "value": 1,
                            "raw": "1"
                          }
                        ],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
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
                  },
                  "directive": null
                }
              ]
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
