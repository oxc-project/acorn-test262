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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "value": "hello",
                "raw": "\"hello\""
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 34,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 46,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "value": "name",
                "raw": "\"name\""
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 67,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 79,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 109,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 121,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      },
      "body": {
        "type": "BlockStatement",
        "start": 150,
        "end": 224,
        "body": [
          {
            "type": "IfStatement",
            "start": 156,
            "end": 207,
            "test": {
              "type": "BinaryExpression",
              "start": 160,
              "end": 173,
              "left": {
                "type": "Identifier",
                "start": 160,
                "end": 161,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 166,
                "end": 173,
                "value": "hello",
                "raw": "\"hello\""
              }
            },
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
                    "object": {
                      "type": "Identifier",
                      "start": 192,
                      "end": 193,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 200,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                }
              ]
            },
            "alternate": null
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
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
