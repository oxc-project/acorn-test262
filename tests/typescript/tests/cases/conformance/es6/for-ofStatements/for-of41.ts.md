__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 88,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 34,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 34,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 12,
            "end": 34,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 13,
                "end": 33,
                "properties": [
                  {
                    "type": "Property",
                    "start": 14,
                    "end": 20,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 14,
                      "end": 15,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "start": 17,
                      "end": 20,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 18,
                          "end": 19,
                          "value": 0,
                          "raw": "0"
                        }
                      ]
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 22,
                    "end": 32,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 22,
                      "end": 23,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 25,
                      "end": 32,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 26,
                          "end": 31,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 26,
                            "end": 27,
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 29,
                            "end": 31,
                            "value": "",
                            "raw": "\"\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 35,
      "end": 88,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 40,
        "end": 60,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 44,
            "end": 60,
            "id": {
              "type": "ObjectPattern",
              "start": 44,
              "end": 60,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 45,
                  "end": 51,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 46,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrayPattern",
                    "start": 48,
                    "end": 51,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 49,
                        "end": 50,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 53,
                  "end": 59,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 56,
                    "end": 59,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 57,
                        "end": 58,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 57,
                          "end": 58,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 57,
                          "end": 58,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 64,
        "end": 69,
        "decorators": [],
        "name": "array",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 71,
        "end": 88,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 77,
            "end": 79,
            "expression": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 84,
            "end": 86,
            "expression": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
