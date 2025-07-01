__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1,
                    "end": 5
                  },
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 7,
                    "end": 11
                  },
                  {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 13,
                    "end": 18
                  },
                  {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 20,
                    "end": 24
                  }
                ],
                "start": 0,
                "end": 25
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 37
              },
              "optional": false,
              "computed": false,
              "start": 0,
              "end": 37
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 39,
                    "end": 44
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "parameterName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "thing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 47,
                      "end": 52
                    },
                    "asserts": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 56,
                        "end": 63
                      },
                      "start": 56,
                      "end": 63
                    },
                    "start": 47,
                    "end": 63
                  },
                  "start": 45,
                  "end": 63
                },
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 67,
                    "end": 72
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 77,
                    "end": 81
                  },
                  "start": 67,
                  "end": 81
                },
                "id": null,
                "generator": false,
                "start": 38,
                "end": 81
              }
            ],
            "optional": false,
            "start": 0,
            "end": 82
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 91
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 91
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 92,
                "end": 97
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 106
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 107,
                  "end": 115
                },
                "optional": false,
                "computed": false,
                "start": 101,
                "end": 115
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 101,
              "end": 117
            },
            "id": null,
            "generator": false,
            "start": 92,
            "end": 117
          }
        ],
        "optional": false,
        "start": 0,
        "end": 118
      },
      "directive": null,
      "start": 0,
      "end": 119
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 119
}
```
