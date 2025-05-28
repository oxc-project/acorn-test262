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
                "decorators": [],
                "name": "filter",
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
                "start": 38,
                "end": 81,
                "expression": true,
                "async": false,
                "typeParameters": null,
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
                    "parameterName": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 52,
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null
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
                },
                "body": {
                  "type": "BinaryExpression",
                  "start": 67,
                  "end": 81,
                  "left": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 72,
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "typeAnnotation": null
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
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 88,
            "end": 91,
            "decorators": [],
            "name": "map",
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
            "start": 92,
            "end": 117,
            "expression": true,
            "async": false,
            "typeParameters": null,
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
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 115,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
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
