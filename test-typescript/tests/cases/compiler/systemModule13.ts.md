__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 31,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 31,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 30,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 11,
              "end": 18,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 12,
                  "end": 13,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 14,
                  "end": 15,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 16,
                  "end": 17,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrayExpression",
              "start": 21,
              "end": 30,
              "elements": [
                {
                  "type": "Literal",
                  "start": 22,
                  "end": 23,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 25,
                  "end": 26,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 28,
                  "end": 29,
                  "raw": "3",
                  "value": 3,
                  "regex": null,
                  "bigint": null
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 92,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 39,
        "end": 92,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 45,
            "end": 91,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 45,
              "end": 64,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 46,
                  "end": 51,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 51,
                    "decorators": [],
                    "name": "z0",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 53,
                  "end": 63,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ObjectPattern",
                    "start": 56,
                    "end": 63,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 57,
                        "end": 62,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 57,
                          "end": 58,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 60,
                          "end": 62,
                          "decorators": [],
                          "name": "z1",
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
            "init": {
              "type": "ObjectExpression",
              "start": 67,
              "end": 91,
              "properties": [
                {
                  "type": "Property",
                  "start": 68,
                  "end": 75,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 69,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 71,
                    "end": 75,
                    "raw": "true",
                    "value": true,
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "Property",
                  "start": 77,
                  "end": 90,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 78,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ObjectExpression",
                    "start": 80,
                    "end": 90,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 81,
                        "end": 89,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 81,
                          "end": 82,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 84,
                          "end": 89,
                          "raw": "\"123\"",
                          "value": "123",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ForOfStatement",
      "start": 93,
      "end": 114,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 112,
        "end": 114,
        "body": []
      },
      "left": {
        "type": "ArrayPattern",
        "start": 98,
        "end": 101,
        "decorators": [],
        "elements": [
          {
            "type": "Identifier",
            "start": 99,
            "end": 100,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "ArrayExpression",
        "start": 105,
        "end": 110,
        "elements": [
          {
            "type": "ArrayExpression",
            "start": 106,
            "end": 109,
            "elements": [
              {
                "type": "Literal",
                "start": 107,
                "end": 108,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            ]
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
