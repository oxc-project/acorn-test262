__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 177,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 27,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 24,
        "end": 27,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 13,
          "end": 22,
          "decorators": [],
          "elements": [
            null,
            {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            null
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 28,
      "end": 71,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 68,
        "end": 71,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 40,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 41,
          "end": 60,
          "decorators": [],
          "elements": [
            null,
            {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 48,
            "end": 60,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 50,
              "end": 60,
              "elementTypes": [
                {
                  "type": "TSAnyKeyword",
                  "start": 51,
                  "end": 54
                },
                {
                  "type": "TSAnyKeyword",
                  "start": 56,
                  "end": 59
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 61,
        "end": 67,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 63,
          "end": 67
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 72,
      "end": 99,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 96,
        "end": 99,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 84,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 85,
          "end": 94,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            null,
            null
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 100,
      "end": 146,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 143,
        "end": 146,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 113,
        "decorators": [],
        "name": "bar1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 114,
          "end": 141,
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "start": 114,
            "end": 123,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 115,
                "end": 116,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              null,
              null
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "ArrayExpression",
            "start": 126,
            "end": 141,
            "elements": [
              {
                "type": "Literal",
                "start": 127,
                "end": 128,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 130,
                "end": 131,
                "raw": "3",
                "value": 3,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 133,
                "end": 134,
                "raw": "4",
                "value": 4,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 136,
                "end": 137,
                "raw": "6",
                "value": 6,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 139,
                "end": 140,
                "raw": "7",
                "value": 7,
                "regex": null,
                "bigint": null
              }
            ]
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 147,
      "end": 177,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 174,
        "end": 177,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 160,
        "decorators": [],
        "name": "bar2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 161,
          "end": 172,
          "decorators": [],
          "elements": [
            null,
            null,
            {
              "type": "Identifier",
              "start": 164,
              "end": 165,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            null,
            null
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
