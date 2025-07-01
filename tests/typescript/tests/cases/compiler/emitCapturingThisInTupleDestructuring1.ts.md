__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wrapper",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 24
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 28,
              "end": 31
            },
            "start": 26,
            "end": 31
          },
          "start": 25,
          "end": 31
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "wrapper",
          "optional": false,
          "typeAnnotation": null,
          "start": 34,
          "end": 41
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "array",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 51,
                        "end": 54
                      }
                    ],
                    "start": 50,
                    "end": 55
                  },
                  "start": 48,
                  "end": 55
                },
                "start": 43,
                "end": 55
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 67,
                            "end": 71
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 72,
                            "end": 76
                          },
                          "optional": false,
                          "computed": false,
                          "start": 67,
                          "end": 76
                        },
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 78,
                            "end": 82
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 83,
                            "end": 88
                          },
                          "optional": false,
                          "computed": false,
                          "start": 78,
                          "end": 88
                        },
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 90,
                            "end": 94
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 95,
                            "end": 100
                          },
                          "optional": false,
                          "computed": false,
                          "start": 90,
                          "end": 100
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 66,
                      "end": 101
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 104,
                      "end": 109
                    },
                    "start": 66,
                    "end": 109
                  },
                  "directive": null,
                  "start": 66,
                  "end": 110
                }
              ],
              "start": 60,
              "end": 203
            },
            "id": null,
            "generator": false,
            "start": 42,
            "end": 203
          }
        ],
        "optional": false,
        "start": 34,
        "end": 204
      },
      "directive": null,
      "start": 34,
      "end": 205
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 205
}
```
