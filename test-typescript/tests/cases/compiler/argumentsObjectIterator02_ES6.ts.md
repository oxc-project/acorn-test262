argumentsObjectIterator02_ES6.ts
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
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 105,
                  "decorators": [],
                  "name": "blah",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 108,
                  "end": 134,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 117,
                    "decorators": [],
                    "name": "arguments",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "MemberExpression",
                    "start": 118,
                    "end": 133,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 118,
                      "end": 124,
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 133,
                      "decorators": [],
                      "name": "iterator",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 151,
                  "decorators": [],
                  "name": "result",
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 154,
                  "end": 156,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForOfStatement",
            "start": 162,
            "end": 225,
            "await": false,
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
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 208,
                        "end": 217,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 208,
                          "end": 211,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 214,
                          "end": 217,
                          "decorators": [],
                          "name": "arg",
                          "optional": false
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 196,
                      "end": 207,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 196,
                        "end": 202,
                        "decorators": [],
                        "name": "result",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 203,
                        "end": 207,
                        "decorators": [],
                        "name": "push",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 167,
              "end": 174,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 171,
                  "end": 174,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 174,
                    "decorators": [],
                    "name": "arg",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "right": {
              "type": "CallExpression",
              "start": 178,
              "end": 184,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 178,
                "end": 182,
                "decorators": [],
                "name": "blah",
                "optional": false
              },
              "optional": false
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
                "decorators": [],
                "name": "result",
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
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 31,
        "decorators": [],
        "name": "doubleAndReturnAsArray",
        "optional": false
      },
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
      }
    }
  ],
  "sourceType": "script"
}
```
