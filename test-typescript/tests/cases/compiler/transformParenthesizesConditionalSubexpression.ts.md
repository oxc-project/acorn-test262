__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 117,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 11,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "K",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 11,
            "raw": "'k'",
            "value": "k"
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 64,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 20,
            "end": 64,
            "properties": [
              {
                "type": "Property",
                "start": 22,
                "end": 62,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 23,
                  "decorators": [],
                  "name": "p",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ConditionalExpression",
                  "start": 28,
                  "end": 61,
                  "alternate": {
                    "type": "Literal",
                    "start": 57,
                    "end": 61,
                    "raw": "null",
                    "value": null
                  },
                  "consequent": {
                    "type": "ObjectExpression",
                    "start": 35,
                    "end": 47,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 37,
                        "end": 46,
                        "computed": true,
                        "key": {
                          "type": "Identifier",
                          "start": 38,
                          "end": 39,
                          "decorators": [],
                          "name": "K",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 43,
                          "end": 46,
                          "raw": "'v'",
                          "value": "v"
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "Literal",
                    "start": 28,
                    "end": 32,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 117,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 117,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 73,
            "end": 117,
            "properties": [
              {
                "type": "Property",
                "start": 75,
                "end": 115,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "decorators": [],
                  "name": "p",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ConditionalExpression",
                  "start": 81,
                  "end": 114,
                  "alternate": {
                    "type": "Literal",
                    "start": 110,
                    "end": 114,
                    "raw": "null",
                    "value": null
                  },
                  "consequent": {
                    "type": "TSAsExpression",
                    "start": 88,
                    "end": 107,
                    "expression": {
                      "type": "ObjectExpression",
                      "start": 88,
                      "end": 100,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 90,
                          "end": 99,
                          "computed": true,
                          "key": {
                            "type": "Identifier",
                            "start": 91,
                            "end": 92,
                            "decorators": [],
                            "name": "K",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 96,
                            "end": 99,
                            "raw": "'v'",
                            "value": "v"
                          }
                        }
                      ]
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 104,
                      "end": 107
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "start": 81,
                    "end": 85,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
