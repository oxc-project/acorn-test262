__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 119,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 119,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 118,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 92,
            "end": 117,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 101,
              "end": 117,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 101,
                "end": 115,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 106,
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 115,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 92,
                "end": 97,
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 91,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 0,
            "end": 82,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 38,
                "end": 81,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 67,
                  "end": 81,
                  "operator": "!==",
                  "left": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 72,
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 77,
                    "end": 81,
                    "raw": "null",
                    "value": null
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 39,
                    "end": 44,
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 45,
                  "end": 63,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 47,
                    "end": 63,
                    "asserts": false,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 52,
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                },
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 0,
              "end": 37,
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "start": 0,
                "end": 25,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1,
                    "end": 5,
                    "raw": "true",
                    "value": true
                  },
                  {
                    "type": "Literal",
                    "start": 7,
                    "end": 11,
                    "raw": "true",
                    "value": true
                  },
                  {
                    "type": "Literal",
                    "start": 13,
                    "end": 18,
                    "raw": "false",
                    "value": false
                  },
                  {
                    "type": "Literal",
                    "start": 20,
                    "end": 24,
                    "raw": "null",
                    "value": null
                  }
                ]
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 31,
                "end": 37,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 88,
            "end": 91,
            "decorators": [],
            "name": "map",
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
