declarationEmitDestructuring5.ts
```json
{
  "type": "Program",
  "start": 23,
  "end": 200,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 23,
      "end": 50,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 47,
        "end": 50,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
        "decorators": [],
        "name": "baz",
        "optional": false
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 36,
          "end": 45,
          "decorators": [],
          "elements": [
            null,
            {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            null
          ],
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 51,
      "end": 94,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 91,
        "end": 94,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 63,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 64,
          "end": 83,
          "decorators": [],
          "elements": [
            null,
            {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 71,
            "end": 83,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 73,
              "end": 83,
              "elementTypes": [
                {
                  "type": "TSAnyKeyword",
                  "start": 74,
                  "end": 77
                },
                {
                  "type": "TSAnyKeyword",
                  "start": 79,
                  "end": 82
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 84,
        "end": 90,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 86,
          "end": 90
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 95,
      "end": 122,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 119,
        "end": 122,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 107,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 108,
          "end": 117,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            null,
            null
          ],
          "optional": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 123,
      "end": 169,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 166,
        "end": 169,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 136,
        "decorators": [],
        "name": "bar1",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 137,
          "end": 164,
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "start": 137,
            "end": 146,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 138,
                "end": 139,
                "decorators": [],
                "name": "z",
                "optional": false
              },
              null,
              null
            ],
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "ArrayExpression",
            "start": 149,
            "end": 164,
            "elements": [
              {
                "type": "Literal",
                "start": 150,
                "end": 151,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 153,
                "end": 154,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 156,
                "end": 157,
                "raw": "4",
                "value": 4
              },
              {
                "type": "Literal",
                "start": 159,
                "end": 160,
                "raw": "6",
                "value": 6
              },
              {
                "type": "Literal",
                "start": 162,
                "end": 163,
                "raw": "7",
                "value": 7
              }
            ]
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 170,
      "end": 200,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 197,
        "end": 200,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 179,
        "end": 183,
        "decorators": [],
        "name": "bar2",
        "optional": false
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 184,
          "end": 195,
          "decorators": [],
          "elements": [
            null,
            null,
            {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            null,
            null
          ],
          "optional": false
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
