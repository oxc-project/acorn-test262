__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 161,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 30,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9,
              "end": 30,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 11,
                "end": 30,
                "elementType": {
                  "type": "TSUnionType",
                  "start": 12,
                  "end": 27,
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 12,
                      "end": 18
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 21,
                      "end": 27
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 33,
            "end": 40,
            "elements": [
              {
                "type": "Literal",
                "start": 34,
                "end": 39,
                "raw": "'aaa'",
                "value": "aaa"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 110,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 57,
            "decorators": [],
            "name": "isString",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 60,
            "end": 110,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 89,
              "end": 110,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 89,
                "end": 97,
                "argument": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 102,
                "end": 110,
                "raw": "'string'",
                "value": "string"
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 61,
                "end": 71,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 62,
                  "end": 71,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 64,
                    "end": 71
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 85,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 74,
                "end": 85,
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 79,
                  "end": 85,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 79,
                    "end": 85
                  }
                }
              }
            },
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 113,
      "end": 160,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 138,
        "end": 160,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 142,
            "end": 158,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 142,
              "end": 157,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 155,
                  "end": 156,
                  "raw": "0",
                  "value": 0
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 142,
                "end": 154,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 142,
                  "end": 148,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 145,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 146,
                    "end": 147,
                    "raw": "0",
                    "value": 0
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 154,
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
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 117,
        "end": 136,
        "arguments": [
          {
            "type": "Identifier",
            "start": 127,
            "end": 135,
            "decorators": [],
            "name": "isString",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 117,
          "end": 126,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 117,
            "end": 120,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 121,
            "end": 126,
            "decorators": [],
            "name": "every",
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
