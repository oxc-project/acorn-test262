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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 11,
            "value": "k",
            "raw": "'k'"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 23,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ConditionalExpression",
                  "start": 28,
                  "end": 61,
                  "test": {
                    "type": "Literal",
                    "start": 28,
                    "end": 32,
                    "value": true,
                    "raw": "true"
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
                        "method": false,
                        "shorthand": false,
                        "computed": true,
                        "key": {
                          "type": "Identifier",
                          "start": 38,
                          "end": 39,
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 43,
                          "end": 46,
                          "value": "v",
                          "raw": "'v'"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 57,
                    "end": 61,
                    "value": null,
                    "raw": "null"
                  }
                },
                "kind": "init",
                "optional": false
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
      "type": "VariableDeclaration",
      "start": 65,
      "end": 117,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 117,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ConditionalExpression",
                  "start": 81,
                  "end": 114,
                  "test": {
                    "type": "Literal",
                    "start": 81,
                    "end": 85,
                    "value": true,
                    "raw": "true"
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
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "key": {
                            "type": "Identifier",
                            "start": 91,
                            "end": 92,
                            "name": "K",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 96,
                            "end": 99,
                            "value": "v",
                            "raw": "'v'"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 104,
                      "end": 107
                    }
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 110,
                    "end": 114,
                    "value": null,
                    "raw": "null"
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
