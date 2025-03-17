__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 119,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 118,
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 91,
          "object": {
            "type": "CallExpression",
            "start": 0,
            "end": 82,
            "callee": {
              "type": "MemberExpression",
              "start": 0,
              "end": 37,
              "object": {
                "type": "ArrayExpression",
                "start": 0,
                "end": 25,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1,
                    "end": 5,
                    "value": true,
                    "raw": "true"
                  },
                  {
                    "type": "Literal",
                    "start": 7,
                    "end": 11,
                    "value": true,
                    "raw": "true"
                  },
                  {
                    "type": "Literal",
                    "start": 13,
                    "end": 18,
                    "value": false,
                    "raw": "false"
                  },
                  {
                    "type": "Literal",
                    "start": 20,
                    "end": 24,
                    "value": null,
                    "raw": "null"
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 31,
                "end": 37,
                "name": "filter",
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
                "start": 38,
                "end": 81,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 39,
                    "end": 44,
                    "name": "thing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BinaryExpression",
                  "start": 67,
                  "end": 81,
                  "left": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 72,
                    "name": "thing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "start": 77,
                    "end": 81,
                    "value": null,
                    "raw": "null"
                  }
                },
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 45,
                  "end": 63,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 47,
                    "end": 63,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 52,
                      "name": "thing",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "asserts": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 56,
                      "end": 63,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 56,
                        "end": 63
                      }
                    }
                  }
                }
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 88,
            "end": 91,
            "name": "map",
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
            "start": 92,
            "end": 117,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 92,
                "end": 97,
                "name": "thing",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "CallExpression",
              "start": 101,
              "end": 117,
              "callee": {
                "type": "MemberExpression",
                "start": 101,
                "end": 115,
                "object": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 106,
                  "name": "thing",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 115,
                  "name": "toString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
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
