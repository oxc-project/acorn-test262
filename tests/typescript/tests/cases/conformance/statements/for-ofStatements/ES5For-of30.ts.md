__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              },
              "start": 5,
              "end": 13
            },
            "start": 4,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 13
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 18,
                "end": 24
              },
              "start": 16,
              "end": 24
            },
            "start": 15,
            "end": 24
          },
          "init": null,
          "definite": false,
          "start": 15,
          "end": 24
        }
      ],
      "declare": false,
      "start": 0,
      "end": 25
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
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
                ],
                "start": 37,
                "end": 53
              },
              "start": 35,
              "end": 53
            },
            "start": 30,
            "end": 53
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 57,
                "end": 58
              },
              {
                "type": "Literal",
                "value": "3",
                "raw": "\"3\"",
                "start": 60,
                "end": 63
              }
            ],
            "start": 56,
            "end": 64
          },
          "definite": false,
          "start": 30,
          "end": 64
        }
      ],
      "declare": false,
      "start": 26,
      "end": 65
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "decorators": [],
        "elements": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 73
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 76,
              "end": 77
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 77
          },
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
            },
            "right": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 83,
              "end": 85
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 85
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 86
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "tuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 95
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 104
            },
            "directive": null,
            "start": 103,
            "end": 105
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 111
            },
            "directive": null,
            "start": 110,
            "end": 112
          }
        ],
        "start": 97,
        "end": 114
      },
      "start": 66,
      "end": 114
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 114
}
```
