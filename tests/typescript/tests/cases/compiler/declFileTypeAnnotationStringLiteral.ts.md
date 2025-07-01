__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 16,
                "end": 23
              },
              "start": 16,
              "end": 23
            },
            "start": 14,
            "end": 23
          },
          "start": 13,
          "end": 23
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 26,
          "end": 32
        },
        "start": 24,
        "end": 32
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 46
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "name",
                "raw": "\"name\"",
                "start": 50,
                "end": 56
              },
              "start": 50,
              "end": 56
            },
            "start": 48,
            "end": 56
          },
          "start": 47,
          "end": 56
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 59,
          "end": 65
        },
        "start": 57,
        "end": 65
      },
      "body": null,
      "expression": false,
      "start": 34,
      "end": 66
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 76,
        "end": 79
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 83,
              "end": 89
            },
            "start": 81,
            "end": 89
          },
          "start": 80,
          "end": 89
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
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
          ],
          "start": 92,
          "end": 107
        },
        "start": 90,
        "end": 107
      },
      "body": null,
      "expression": false,
      "start": 67,
      "end": 108
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 121
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 125,
              "end": 131
            },
            "start": 123,
            "end": 131
          },
          "start": 122,
          "end": 131
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
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
          ],
          "start": 134,
          "end": 149
        },
        "start": 132,
        "end": 149
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 160,
                "end": 161
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 166,
                "end": 173
              },
              "start": 160,
              "end": 173
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 192,
                      "end": 193
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 194,
                      "end": 200
                    },
                    "optional": false,
                    "computed": false,
                    "start": 192,
                    "end": 200
                  },
                  "start": 185,
                  "end": 201
                }
              ],
              "start": 175,
              "end": 207
            },
            "alternate": null,
            "start": 156,
            "end": 207
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 221
            },
            "start": 213,
            "end": 222
          }
        ],
        "start": 150,
        "end": 224
      },
      "expression": false,
      "start": 109,
      "end": 224
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 224
}
```
