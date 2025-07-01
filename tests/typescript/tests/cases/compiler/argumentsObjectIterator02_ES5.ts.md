__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doubleAndReturnAsArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 31
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 35,
              "end": 41
            },
            "start": 33,
            "end": 41
          },
          "start": 32,
          "end": 41
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 46,
              "end": 52
            },
            "start": 44,
            "end": 52
          },
          "start": 43,
          "end": 52
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 57,
              "end": 63
            },
            "start": 55,
            "end": 63
          },
          "start": 54,
          "end": 63
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
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
          ],
          "start": 66,
          "end": 90
        },
        "start": 64,
        "end": 90
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "blah",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 105
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 108,
                    "end": 117
                  },
                  "property": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 118,
                      "end": 124
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "iterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 125,
                      "end": 133
                    },
                    "optional": false,
                    "computed": false,
                    "start": 118,
                    "end": 133
                  },
                  "optional": false,
                  "computed": true,
                  "start": 108,
                  "end": 134
                },
                "definite": false,
                "start": 101,
                "end": 134
              }
            ],
            "declare": false,
            "start": 97,
            "end": 135
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 151
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 154,
                  "end": 156
                },
                "definite": false,
                "start": 145,
                "end": 156
              }
            ],
            "declare": false,
            "start": 141,
            "end": 157
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 171,
                    "end": 174
                  },
                  "init": null,
                  "definite": false,
                  "start": 171,
                  "end": 174
                }
              ],
              "declare": false,
              "start": 167,
              "end": 174
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "blah",
                "optional": false,
                "typeAnnotation": null,
                "start": 178,
                "end": 182
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 178,
              "end": 184
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 196,
                        "end": 202
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 203,
                        "end": 207
                      },
                      "optional": false,
                      "computed": false,
                      "start": 196,
                      "end": 207
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 208,
                          "end": 211
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 214,
                          "end": 217
                        },
                        "start": 208,
                        "end": 217
                      }
                    ],
                    "optional": false,
                    "start": 196,
                    "end": 218
                  },
                  "directive": null,
                  "start": 196,
                  "end": 219
                }
              ],
              "start": 186,
              "end": 225
            },
            "start": 162,
            "end": 225
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTupleType",
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
                ],
                "start": 238,
                "end": 253
              },
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null,
                "start": 254,
                "end": 260
              },
              "start": 237,
              "end": 260
            },
            "start": 230,
            "end": 261
          }
        ],
        "start": 91,
        "end": 263
      },
      "expression": false,
      "start": 0,
      "end": 263
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 264
}
```
