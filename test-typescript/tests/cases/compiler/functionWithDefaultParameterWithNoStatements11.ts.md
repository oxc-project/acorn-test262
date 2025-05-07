__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 69,
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
      "end": 41,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 38,
        "end": 41,
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
          "end": 36,
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
            "end": 36,
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
              "type": "Literal",
              "start": 34,
              "end": 35,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
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
      "start": 43,
      "end": 69,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 66,
        "end": 69,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 55,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 56,
          "end": 64,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "MemberExpression",
            "start": 60,
            "end": 64,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 62,
              "end": 63,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
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
