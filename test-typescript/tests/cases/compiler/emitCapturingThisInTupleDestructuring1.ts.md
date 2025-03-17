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
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 25,
        "decorators": [],
        "name": "wrapper",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 26,
          "end": 32,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 32,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 29,
              "end": 32
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 35,
      "end": 206,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 35,
        "end": 205,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 43,
            "end": 204,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 61,
              "end": 204,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 67,
                  "end": 111,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 67,
                    "end": 110,
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "start": 67,
                      "end": 102,
                      "decorators": [],
                      "elements": [
                        {
                          "type": "MemberExpression",
                          "start": 68,
                          "end": 77,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 68,
                            "end": 72
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 73,
                            "end": 77,
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "MemberExpression",
                          "start": 79,
                          "end": 89,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 79,
                            "end": 83
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 84,
                            "end": 89,
                            "decorators": [],
                            "name": "test1",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "MemberExpression",
                          "start": 91,
                          "end": 101,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 91,
                            "end": 95
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 96,
                            "end": 101,
                            "decorators": [],
                            "name": "test2",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 105,
                      "end": 110,
                      "decorators": [],
                      "name": "array",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 44,
                "end": 56,
                "decorators": [],
                "name": "array",
                "optional": false,
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
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 35,
          "end": 42,
          "decorators": [],
          "name": "wrapper",
          "optional": false,
          "typeAnnotation": null
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
