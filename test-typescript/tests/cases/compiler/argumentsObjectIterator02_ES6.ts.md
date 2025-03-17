__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 265,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 263,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 31,
        "name": "doubleAndReturnAsArray",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 32,
          "end": 41,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 33,
            "end": 41,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 35,
              "end": 41
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 43,
          "end": 52,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 44,
            "end": 52,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 46,
              "end": 52
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 54,
          "end": 63,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 63,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 57,
              "end": 63
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 91,
        "end": 263,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 97,
            "end": 135,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 101,
                "end": 134,
                "id": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 105,
                  "name": "blah",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 108,
                  "end": 134,
                  "object": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 117,
                    "name": "arguments",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "MemberExpression",
                    "start": 118,
                    "end": 133,
                    "object": {
                      "type": "Identifier",
                      "start": 118,
                      "end": 124,
                      "name": "Symbol",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 133,
                      "name": "iterator",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 141,
            "end": 157,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 145,
                "end": 156,
                "id": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 151,
                  "name": "result",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            "kind": "let",
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 171,
                  "end": 174,
                  "id": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 174,
                    "name": "arg",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "let",
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
                "name": "blah",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
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
                        "name": "result",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 203,
                        "end": 207,
                        "name": "push",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 208,
                        "end": 217,
                        "left": {
                          "type": "Identifier",
                          "start": 208,
                          "end": 211,
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "start": 214,
                          "end": 217,
                          "name": "arg",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
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
              "expression": {
                "type": "Identifier",
                "start": 254,
                "end": 260,
                "name": "result",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
