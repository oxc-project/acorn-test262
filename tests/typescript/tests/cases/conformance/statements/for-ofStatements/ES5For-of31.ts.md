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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
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
          "init": null,
          "definite": false
        }
      ],
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
        "decorators": [],
        "properties": [
          {
            "type": "Property",
            "start": 34,
            "end": 42,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 37,
              "end": 42,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 41,
                "end": 42,
                "value": 1,
                "raw": "1"
              },
              "optional": false,
              "typeAnnotation": null
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false
          },
          {
            "type": "Property",
            "start": 44,
            "end": 53,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "AssignmentPattern",
              "start": 47,
              "end": 53,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 51,
                "end": 53,
                "value": "",
                "raw": "\"\""
              },
              "optional": false,
              "typeAnnotation": null
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false
          }
        ],
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
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
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
