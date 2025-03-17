__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 206,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 1,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 25,
        "name": "wrapper",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 26,
          "end": 32,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 32,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 29,
              "end": 32
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 35,
      "end": 206,
      "expression": {
        "type": "CallExpression",
        "start": 35,
        "end": 205,
        "callee": {
          "type": "Identifier",
          "start": 35,
          "end": 42,
          "name": "wrapper",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 43,
            "end": 204,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 44,
                "end": 56,
                "name": "array",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 49,
                  "end": 56,
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "start": 51,
                    "end": 56,
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 52,
                        "end": 55
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 61,
              "end": 204,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 67,
                  "end": 111,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 67,
                    "end": 110,
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "start": 67,
                      "end": 102,
                      "elements": [
                        {
                          "type": "MemberExpression",
                          "start": 68,
                          "end": 77,
                          "object": {
                            "type": "ThisExpression",
                            "start": 68,
                            "end": 72
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 73,
                            "end": 77,
                            "name": "test",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "MemberExpression",
                          "start": 79,
                          "end": 89,
                          "object": {
                            "type": "ThisExpression",
                            "start": 79,
                            "end": 83
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 84,
                            "end": 89,
                            "name": "test1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "MemberExpression",
                          "start": 91,
                          "end": 101,
                          "object": {
                            "type": "ThisExpression",
                            "start": 91,
                            "end": 95
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 96,
                            "end": 101,
                            "name": "test2",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 105,
                      "end": 110,
                      "name": "array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
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
