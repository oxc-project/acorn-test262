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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "decorators": [],
            "name": "v",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 15,
      "end": 44,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 44,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 27,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 28,
          "end": 39,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "ArrayExpression",
            "start": 32,
            "end": 39,
            "elements": [
              {
                "type": "BinaryExpression",
                "start": 33,
                "end": 38,
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "start": 33,
                  "end": 34,
                  "raw": "1",
                  "value": 1
                },
                "right": {
                  "type": "Literal",
                  "start": 37,
                  "end": 38,
                  "raw": "1",
                  "value": 1
                }
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
      "start": 46,
      "end": 75,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 72,
        "end": 75,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 58,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 59,
          "end": 70,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "ArrayExpression",
            "start": 63,
            "end": 70,
            "elements": [
              {
                "type": "BinaryExpression",
                "start": 64,
                "end": 69,
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "start": 64,
                  "end": 65,
                  "raw": "1",
                  "value": 1
                },
                "right": {
                  "type": "Literal",
                  "start": 68,
                  "end": 69,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          },
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
