__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
        "name": "baz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 36,
          "end": 45,
          "elements": [
            null,
            {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            null
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 47,
        "end": 50,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 51,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 63,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 64,
          "end": 83,
          "elements": [
            null,
            {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "decorators": [],
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
      "body": {
        "type": "BlockStatement",
        "start": 91,
        "end": 94,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 107,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 108,
          "end": 117,
          "elements": [
            {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            null,
            null
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 119,
        "end": 122,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 123,
      "end": 169,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 136,
        "name": "bar1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 137,
          "end": 164,
          "left": {
            "type": "ArrayPattern",
            "start": 137,
            "end": 146,
            "elements": [
              {
                "type": "Identifier",
                "start": 138,
                "end": 139,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              null,
              null
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ArrayExpression",
            "start": 149,
            "end": 164,
            "elements": [
              {
                "type": "Literal",
                "start": 150,
                "end": 151,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 153,
                "end": 154,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 156,
                "end": 157,
                "value": 4,
                "raw": "4"
              },
              {
                "type": "Literal",
                "start": 159,
                "end": 160,
                "value": 6,
                "raw": "6"
              },
              {
                "type": "Literal",
                "start": 162,
                "end": 163,
                "value": 7,
                "raw": "7"
              }
            ]
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 166,
        "end": 169,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 170,
      "end": 200,
      "id": {
        "type": "Identifier",
        "start": 179,
        "end": 183,
        "name": "bar2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 184,
          "end": 195,
          "elements": [
            null,
            null,
            {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            null,
            null
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 197,
        "end": 200,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
