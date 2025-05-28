__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 264,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 263,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 31,
        "decorators": [],
        "name": "doubleAndReturnAsArray",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 32,
          "end": 41,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 33,
            "end": 41,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 35,
              "end": 41
            }
          }
        },
        {
          "type": "Identifier",
          "start": 43,
          "end": 52,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 44,
            "end": 52,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 46,
              "end": 52
            }
          }
        },
        {
          "type": "Identifier",
          "start": 54,
          "end": 63,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 63,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 57,
              "end": 63
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 64,
        "end": 90,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 66,
          "end": 90,
          "elementTypes": [
            {
              "type": "TSNumberKeyword",
              "start": 67,
              "end": 73
            },
            {
              "type": "TSNumberKeyword",
              "start": 75,
              "end": 81
            },
            {
              "type": "TSNumberKeyword",
              "start": 83,
              "end": 89
            }
          ]
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 91,
        "end": 263,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 97,
            "end": 135,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 101,
                "end": 134,
                "id": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 105,
                  "decorators": [],
                  "name": "blah",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 108,
                  "end": 134,
                  "object": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 117,
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "MemberExpression",
                    "start": 118,
                    "end": 133,
                    "object": {
                      "type": "Identifier",
                      "start": 118,
                      "end": 124,
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 133,
                      "decorators": [],
                      "name": "iterator",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
            "start": 141,
            "end": 157,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 145,
                "end": 156,
                "id": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 151,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 154,
                  "end": 156,
                  "elements": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ForOfStatement",
            "start": 162,
            "end": 225,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 167,
              "end": 174,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 171,
                  "end": 174,
                  "id": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 174,
                    "decorators": [],
                    "name": "arg",
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
              "type": "CallExpression",
              "start": 178,
              "end": 184,
              "callee": {
                "type": "Identifier",
                "start": 178,
                "end": 182,
                "decorators": [],
                "name": "blah",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 186,
              "end": 225,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 196,
                  "end": 219,
                  "expression": {
                    "type": "CallExpression",
                    "start": 196,
                    "end": 218,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 196,
                      "end": 207,
                      "object": {
                        "type": "Identifier",
                        "start": 196,
                        "end": 202,
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 203,
                        "end": 207,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 208,
                        "end": 217,
                        "left": {
                          "type": "Identifier",
                          "start": 208,
                          "end": 211,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 214,
                          "end": 217,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ReturnStatement",
            "start": 230,
            "end": 261,
            "argument": {
              "type": "TSTypeAssertion",
              "start": 237,
              "end": 260,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 238,
                "end": 253,
                "elementTypes": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 239,
                    "end": 242
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 244,
                    "end": 247
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 249,
                    "end": 252
                  }
                ]
              },
              "expression": {
                "type": "Identifier",
                "start": 254,
                "end": 260,
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null
              }
            }
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
