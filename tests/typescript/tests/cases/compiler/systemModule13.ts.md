__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 12,
                  "end": 13
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 14,
                  "end": 15
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 16,
                  "end": 17
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 18
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 22,
                  "end": 23
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 25,
                  "end": 26
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 28,
                  "end": 29
                }
              ],
              "start": 21,
              "end": 30
            },
            "definite": false,
            "start": 11,
            "end": 30
          }
        ],
        "declare": false,
        "start": 7,
        "end": 31
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 46,
                    "end": 47
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 49,
                    "end": 51
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 46,
                  "end": 51
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 53,
                    "end": 54
                  },
                  "value": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 57,
                          "end": 58
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 60,
                          "end": 62
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 57,
                        "end": 62
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 56,
                    "end": 63
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 53,
                  "end": 63
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 64
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 68,
                    "end": 69
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 71,
                    "end": 75
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 68,
                  "end": 75
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 77,
                    "end": 78
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 81,
                          "end": 82
                        },
                        "value": {
                          "type": "Literal",
                          "value": "123",
                          "raw": "\"123\"",
                          "start": 84,
                          "end": 89
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 81,
                        "end": 89
                      }
                    ],
                    "start": 80,
                    "end": 90
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 77,
                  "end": 90
                }
              ],
              "start": 67,
              "end": 91
            },
            "definite": false,
            "start": 45,
            "end": 91
          }
        ],
        "declare": false,
        "start": 39,
        "end": 92
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 32,
      "end": 92
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "decorators": [],
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 100
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 101
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 107,
                "end": 108
              }
            ],
            "start": 106,
            "end": 109
          }
        ],
        "start": 105,
        "end": 110
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 112,
        "end": 114
      },
      "start": 93,
      "end": 114
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 114
}
```
