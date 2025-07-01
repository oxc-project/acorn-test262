__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
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
                  ],
                  "start": 12,
                  "end": 27
                },
                "start": 11,
                "end": 30
              },
              "start": 9,
              "end": 30
            },
            "start": 6,
            "end": 30
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "aaa",
                "raw": "'aaa'",
                "start": 34,
                "end": 39
              }
            ],
            "start": 33,
            "end": 40
          },
          "definite": false,
          "start": 6,
          "end": 40
        }
      ],
      "declare": false,
      "start": 0,
      "end": 41
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
            "name": "isString",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 57
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "type": "TSUnknownKeyword",
                    "start": 64,
                    "end": 71
                  },
                  "start": 62,
                  "end": 71
                },
                "start": 61,
                "end": 71
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 75
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 79,
                    "end": 85
                  },
                  "start": 79,
                  "end": 85
                },
                "start": 74,
                "end": 85
              },
              "start": 72,
              "end": 85
            },
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 97
                },
                "prefix": true,
                "start": 89,
                "end": 97
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 102,
                "end": 110
              },
              "start": 89,
              "end": 110
            },
            "id": null,
            "generator": false,
            "start": 60,
            "end": 110
          },
          "definite": false,
          "start": 49,
          "end": 110
        }
      ],
      "declare": false,
      "start": 43,
      "end": 111
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 120
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "every",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 126
          },
          "optional": false,
          "computed": false,
          "start": 117,
          "end": 126
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "isString",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 135
          }
        ],
        "optional": false,
        "start": 117,
        "end": 136
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 142,
                    "end": 145
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 146,
                    "end": 147
                  },
                  "optional": false,
                  "computed": true,
                  "start": 142,
                  "end": 148
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 149,
                  "end": 154
                },
                "optional": false,
                "computed": false,
                "start": 142,
                "end": 154
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 155,
                  "end": 156
                }
              ],
              "optional": false,
              "start": 142,
              "end": 157
            },
            "directive": null,
            "start": 142,
            "end": 158
          }
        ],
        "start": 138,
        "end": 160
      },
      "alternate": null,
      "start": 113,
      "end": 160
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 160
}
```
