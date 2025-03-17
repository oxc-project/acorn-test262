__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 104,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 50,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 25,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 28,
            "end": 50,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 29,
                "end": 49,
                "properties": [
                  {
                    "type": "Property",
                    "start": 30,
                    "end": 36,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 30,
                      "end": 31,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrayExpression",
                      "start": 33,
                      "end": 36,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 34,
                          "end": 35,
                          "raw": "0",
                          "value": 0
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 38,
                    "end": 48,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 39,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 41,
                      "end": 48,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 42,
                          "end": 47,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 42,
                            "end": 43,
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 45,
                            "end": 47,
                            "raw": "\"\"",
                            "value": ""
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForOfStatement",
      "start": 51,
      "end": 104,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 87,
        "end": 104,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 93,
            "end": 95,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 100,
            "end": 102,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 56,
        "end": 76,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 60,
            "end": 76,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 60,
              "end": 76,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 61,
                  "end": 67,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 62,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrayPattern",
                    "start": 64,
                    "end": 67,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 65,
                        "end": 66,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 69,
                  "end": 75,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 70,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ObjectPattern",
                    "start": 72,
                    "end": 75,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 73,
                        "end": 74,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 74,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 74,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 80,
        "end": 85,
        "decorators": [],
        "name": "array",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
