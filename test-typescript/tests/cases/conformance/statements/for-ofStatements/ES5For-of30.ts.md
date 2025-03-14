ES5For-of30.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 24,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 24,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 24,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 18,
                "end": 24
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 26,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 64,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 53,
            "decorators": [],
            "name": "tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 53,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 37,
                "end": 53,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 38,
                    "end": 44
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 46,
                    "end": 52
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 56,
            "end": 64,
            "elements": [
              {
                "type": "Literal",
                "start": 57,
                "end": 58,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 60,
                "end": 63,
                "raw": "\"3\"",
                "value": "3"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForOfStatement",
      "start": 66,
      "end": 114,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 97,
        "end": 114,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 103,
            "end": 105,
            "expression": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 110,
            "end": 112,
            "expression": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        ]
      },
      "left": {
        "type": "ArrayPattern",
        "start": 71,
        "end": 86,
        "decorators": [],
        "elements": [
          {
            "type": "AssignmentPattern",
            "start": 72,
            "end": 77,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "start": 76,
              "end": 77,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "AssignmentPattern",
            "start": 79,
            "end": 85,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "right": {
              "type": "Literal",
              "start": 83,
              "end": 85,
              "raw": "\"\"",
              "value": ""
            }
          }
        ],
        "optional": false
      },
      "right": {
        "type": "Identifier",
        "start": 90,
        "end": 95,
        "decorators": [],
        "name": "tuple",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
