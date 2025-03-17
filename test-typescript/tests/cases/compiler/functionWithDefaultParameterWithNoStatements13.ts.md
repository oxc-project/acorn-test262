__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "name": "v",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 12,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 7,
                "end": 12,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 7,
                  "end": 10
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 15,
      "end": 44,
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 27,
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
          "type": "AssignmentPattern",
          "start": 28,
          "end": 39,
          "left": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "ArrayExpression",
            "start": 32,
            "end": 39,
            "elements": [
              {
                "type": "BinaryExpression",
                "start": 33,
                "end": 38,
                "left": {
                  "type": "Literal",
                  "start": 33,
                  "end": 34,
                  "value": 1,
                  "raw": "1"
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 37,
                  "end": 38,
                  "value": 1,
                  "raw": "1"
                }
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
        "start": 41,
        "end": 44,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 46,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 58,
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
          "type": "AssignmentPattern",
          "start": 59,
          "end": 70,
          "left": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "ArrayExpression",
            "start": 63,
            "end": 70,
            "elements": [
              {
                "type": "BinaryExpression",
                "start": 64,
                "end": 69,
                "left": {
                  "type": "Literal",
                  "start": 64,
                  "end": 65,
                  "value": 1,
                  "raw": "1"
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 68,
                  "end": 69,
                  "value": 1,
                  "raw": "1"
                }
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
        "start": 72,
        "end": 75,
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
