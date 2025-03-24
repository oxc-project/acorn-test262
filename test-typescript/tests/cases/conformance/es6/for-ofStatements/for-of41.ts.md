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
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 25,
            "name": "array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 30,
                      "end": 31,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "start": 33,
                      "end": 36,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 34,
                          "end": 35,
                          "value": 0,
                          "raw": "0"
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 38,
                    "end": 48,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 39,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 41,
                      "end": 48,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 42,
                          "end": 47,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 42,
                            "end": 43,
                            "name": "p",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 45,
                            "end": 47,
                            "value": "",
                            "raw": "\"\""
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 51,
      "end": 104,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 56,
        "end": 76,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 60,
            "end": 76,
            "id": {
              "type": "ObjectPattern",
              "start": 60,
              "end": 76,
              "properties": [
                {
                  "type": "Property",
                  "start": 61,
                  "end": 67,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 62,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrayPattern",
                    "start": 64,
                    "end": 67,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 65,
                        "end": 66,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 69,
                  "end": 75,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 70,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 72,
                    "end": 75,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 73,
                        "end": 74,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 74,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 74,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 80,
        "end": 85,
        "name": "array",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 87,
        "end": 104,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 93,
            "end": 95,
            "expression": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 100,
            "end": 102,
            "expression": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
