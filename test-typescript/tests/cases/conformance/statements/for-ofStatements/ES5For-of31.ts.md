__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 79,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 24,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 24,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 24,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 18,
                "end": 24
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
      "type": "ForOfStatement",
      "start": 27,
      "end": 79,
      "await": false,
      "left": {
        "type": "ObjectPattern",
        "start": 32,
        "end": 54,
        "properties": [
          {
            "type": "Property",
            "start": 34,
            "end": 42,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 37,
              "end": 42,
              "left": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 41,
                "end": 42,
                "value": 1,
                "raw": "1"
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "init",
            "optional": false
          },
          {
            "type": "Property",
            "start": 44,
            "end": 53,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 47,
              "end": 53,
              "left": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 51,
                "end": 53,
                "value": "",
                "raw": "\"\""
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "init",
            "optional": false
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "ArrayExpression",
        "start": 58,
        "end": 60,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 62,
        "end": 79,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 68,
            "end": 70,
            "expression": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 75,
            "end": 77,
            "expression": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
