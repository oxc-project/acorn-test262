__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 224,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 33,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 23,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 23,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 16,
              "end": 23,
              "literal": {
                "type": "Literal",
                "start": 16,
                "end": 23,
                "raw": "\"hello\"",
                "value": "hello"
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 24,
        "end": 32,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 26,
          "end": 32
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 34,
      "end": 66,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 46,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 47,
          "end": 56,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 48,
            "end": 56,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 50,
              "end": 56,
              "literal": {
                "type": "Literal",
                "start": 50,
                "end": 56,
                "raw": "\"name\"",
                "value": "name"
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 57,
        "end": 65,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 59,
          "end": 65
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 67,
      "end": 108,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 79,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 80,
          "end": 89,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 81,
            "end": 89,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 83,
              "end": 89
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 90,
        "end": 107,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 92,
          "end": 107,
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 92,
              "end": 98
            },
            {
              "type": "TSNumberKeyword",
              "start": 101,
              "end": 107
            }
          ]
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 109,
      "end": 224,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 150,
        "end": 224,
        "body": [
          {
            "type": "IfStatement",
            "start": 156,
            "end": 207,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 175,
              "end": 207,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 185,
                  "end": 201,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 192,
                    "end": 200,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 192,
                      "end": 193,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 200,
                      "decorators": [],
                      "name": "length",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 160,
              "end": 173,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 160,
                "end": 161,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 166,
                "end": 173,
                "raw": "\"hello\"",
                "value": "hello"
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 213,
            "end": 222,
            "argument": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 121,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 122,
          "end": 131,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 123,
            "end": 131,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 125,
              "end": 131
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 132,
        "end": 149,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 134,
          "end": 149,
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 134,
              "end": 140
            },
            {
              "type": "TSNumberKeyword",
              "start": 143,
              "end": 149
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
