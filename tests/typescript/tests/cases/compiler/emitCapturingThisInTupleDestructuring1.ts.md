__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 205,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 24,
        "decorators": [],
        "name": "wrapper",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 25,
          "end": 31,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 26,
            "end": 31,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 28,
              "end": 31
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 34,
      "end": 205,
      "expression": {
        "type": "CallExpression",
        "start": 34,
        "end": 204,
        "callee": {
          "type": "Identifier",
          "start": 34,
          "end": 41,
          "decorators": [],
          "name": "wrapper",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 42,
            "end": 203,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 43,
                "end": 55,
                "decorators": [],
                "name": "array",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 48,
                  "end": 55,
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "start": 50,
                    "end": 55,
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 51,
                        "end": 54
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 60,
              "end": 203,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 66,
                  "end": 110,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 66,
                    "end": 109,
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "start": 66,
                      "end": 101,
                      "decorators": [],
                      "elements": [
                        {
                          "type": "MemberExpression",
                          "start": 67,
                          "end": 76,
                          "object": {
                            "type": "ThisExpression",
                            "start": 67,
                            "end": 71
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 72,
                            "end": 76,
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        {
                          "type": "MemberExpression",
                          "start": 78,
                          "end": 88,
                          "object": {
                            "type": "ThisExpression",
                            "start": 78,
                            "end": 82
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 83,
                            "end": 88,
                            "decorators": [],
                            "name": "test1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        {
                          "type": "MemberExpression",
                          "start": 90,
                          "end": 100,
                          "object": {
                            "type": "ThisExpression",
                            "start": 90,
                            "end": 94
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 95,
                            "end": 100,
                            "decorators": [],
                            "name": "test2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 109,
                      "decorators": [],
                      "name": "array",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                }
              ]
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
