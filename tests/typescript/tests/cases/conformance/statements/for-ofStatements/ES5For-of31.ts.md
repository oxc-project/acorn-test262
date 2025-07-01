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
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 35
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 38
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 41,
                "end": 42
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 42
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 34,
            "end": 42
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 45
            },
            "value": {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 47,
                "end": 48
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 51,
                "end": 53
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 53
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 44,
            "end": 53
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 54
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 58,
        "end": 60
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
              "start": 68,
              "end": 69
            },
            "directive": null,
            "start": 68,
            "end": 70
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 76
            },
            "directive": null,
            "start": 75,
            "end": 77
          }
        ],
        "start": 62,
        "end": 79
      },
      "start": 27,
      "end": 79
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 79
}
```
