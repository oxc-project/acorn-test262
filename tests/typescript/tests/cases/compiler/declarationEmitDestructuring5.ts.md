__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
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
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            null,
            {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            null
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 22
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 24,
        "end": 27
      },
      "expression": false,
      "start": 0,
      "end": 27
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 40
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            null,
            {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 45
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
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
              ],
              "start": 50,
              "end": 60
            },
            "start": 48,
            "end": 60
          },
          "start": 41,
          "end": 60
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 63,
          "end": 67
        },
        "start": 61,
        "end": 67
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 68,
        "end": 71
      },
      "expression": false,
      "start": 28,
      "end": 71
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 84
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 87
            },
            null,
            null
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 85,
          "end": 94
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 96,
        "end": 99
      },
      "expression": false,
      "start": 72,
      "end": 99
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar1",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 113
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 116
              },
              null,
              null
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 123
          },
          "right": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 127,
                "end": 128
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 130,
                "end": 131
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 133,
                "end": 134
              },
              {
                "type": "Literal",
                "value": 6,
                "raw": "6",
                "start": 136,
                "end": 137
              },
              {
                "type": "Literal",
                "value": 7,
                "raw": "7",
                "start": 139,
                "end": 140
              }
            ],
            "start": 126,
            "end": 141
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 114,
          "end": 141
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 143,
        "end": 146
      },
      "expression": false,
      "start": 100,
      "end": 146
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar2",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 160
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            null,
            null,
            {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 165
            },
            null,
            null
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 161,
          "end": 172
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 174,
        "end": 177
      },
      "expression": false,
      "start": 147,
      "end": 177
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 177
}
```
