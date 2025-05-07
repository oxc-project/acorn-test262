__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 77,
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
      "end": 45,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 42,
        "end": 45,
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
          "end": 40,
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
            "type": "MemberExpression",
            "start": 32,
            "end": 40,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "BinaryExpression",
              "start": 34,
              "end": 39,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 34,
                "end": 35,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Literal",
                "start": 38,
                "end": 39,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            }
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 47,
      "end": 77,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 74,
        "end": 77,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 59,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 60,
          "end": 72,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "MemberExpression",
            "start": 64,
            "end": 72,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "BinaryExpression",
              "start": 66,
              "end": 71,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 66,
                "end": 67,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Literal",
                "start": 70,
                "end": 71,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            }
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
