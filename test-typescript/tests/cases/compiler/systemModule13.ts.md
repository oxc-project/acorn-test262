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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 31,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 30,
            "id": {
              "type": "ArrayPattern",
              "start": 11,
              "end": 18,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 12,
                  "end": 13,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 14,
                  "end": 15,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 16,
                  "end": 17,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "decorators": [],
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
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 25,
                  "end": 26,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 28,
                  "end": 29,
                  "value": 3,
                  "raw": "3"
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 92,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 39,
        "end": 92,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 45,
            "end": 91,
            "id": {
              "type": "ObjectPattern",
              "start": 45,
              "end": 64,
              "properties": [
                {
                  "type": "Property",
                  "start": 46,
                  "end": 51,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 51,
                    "name": "z0",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 53,
                  "end": 63,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "start": 56,
                    "end": 63,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 57,
                        "end": 62,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 57,
                          "end": 58,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 60,
                          "end": 62,
                          "name": "z1",
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
            "init": {
              "type": "ObjectExpression",
              "start": 67,
              "end": 91,
              "properties": [
                {
                  "type": "Property",
                  "start": 68,
                  "end": 75,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 69,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 71,
                    "end": 75,
                    "value": true,
                    "raw": "true"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 77,
                  "end": 90,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 78,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "start": 80,
                    "end": 90,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 81,
                        "end": 89,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 81,
                          "end": 82,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 84,
                          "end": 89,
                          "value": "123",
                          "raw": "\"123\""
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
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ForOfStatement",
      "start": 93,
      "end": 114,
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "start": 98,
        "end": 101,
        "elements": [
          {
            "type": "Identifier",
            "start": 99,
            "end": 100,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "decorators": [],
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
                "value": 1,
                "raw": "1"
              }
            ]
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 112,
        "end": 114,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
