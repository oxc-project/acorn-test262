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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 30,
            "name": "foo",
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
            },
            "decorators": [],
            "optional": false
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
                "value": "aaa",
                "raw": "'aaa'"
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
      "type": "VariableDeclaration",
      "start": 43,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 110,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 57,
            "name": "isString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 60,
            "end": 110,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 61,
                "end": 71,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 62,
                  "end": 71,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 64,
                    "end": 71
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "start": 89,
              "end": 110,
              "left": {
                "type": "UnaryExpression",
                "start": 89,
                "end": 97,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 102,
                "end": 110,
                "value": "string",
                "raw": "'string'"
              }
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 85,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 74,
                "end": 85,
                "parameterName": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "asserts": false,
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
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 113,
      "end": 160,
      "test": {
        "type": "CallExpression",
        "start": 117,
        "end": 136,
        "callee": {
          "type": "MemberExpression",
          "start": 117,
          "end": 126,
          "object": {
            "type": "Identifier",
            "start": 117,
            "end": 120,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 121,
            "end": 126,
            "name": "every",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 127,
            "end": 135,
            "name": "isString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 138,
        "end": 160,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 142,
            "end": 158,
            "expression": {
              "type": "CallExpression",
              "start": 142,
              "end": 157,
              "callee": {
                "type": "MemberExpression",
                "start": 142,
                "end": 154,
                "object": {
                  "type": "MemberExpression",
                  "start": 142,
                  "end": 148,
                  "object": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 145,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 146,
                    "end": 147,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": true,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 154,
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
                  "start": 155,
                  "end": 156,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
