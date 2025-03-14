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
      "type": "ForOfStatement",
      "start": 27,
      "end": 79,
      "await": false,
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
              "optional": false
            }
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
              "optional": false
            }
          }
        ]
      },
      "left": {
        "type": "ObjectPattern",
        "start": 32,
        "end": 54,
        "decorators": [],
        "optional": false,
        "properties": [
          {
            "type": "Property",
            "start": 34,
            "end": 42,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
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
                "optional": false
              },
              "optional": false,
              "right": {
                "type": "Literal",
                "start": 41,
                "end": 42,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "Property",
            "start": 44,
            "end": 53,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
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
                "optional": false
              },
              "optional": false,
              "right": {
                "type": "Literal",
                "start": 51,
                "end": 53,
                "raw": "\"\"",
                "value": ""
              }
            }
          }
        ]
      },
      "right": {
        "type": "ArrayExpression",
        "start": 58,
        "end": 60,
        "elements": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
