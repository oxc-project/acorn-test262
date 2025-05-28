__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 17,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 16,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 11,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 11,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 8,
                "end": 11
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 14,
            "end": 16,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 19,
      "end": 30,
      "expression": {
        "type": "AssignmentExpression",
        "start": 19,
        "end": 29,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 19,
          "end": 25,
          "object": {
            "type": "Identifier",
            "start": 19,
            "end": 22,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 23,
            "end": 25,
            "decorators": [],
            "name": "if",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 28,
          "end": 29,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 32,
      "end": 54,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 54,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 40,
            "end": 54,
            "properties": [
              {
                "type": "Property",
                "start": 42,
                "end": 52,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 44,
                  "decorators": [],
                  "name": "if",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 46,
                  "end": 52,
                  "value": "test",
                  "raw": "\"test\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 68,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 68,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 64,
            "end": 68,
            "object": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 66,
              "end": 68,
              "decorators": [],
              "name": "if",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 86,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 74,
          "end": 85,
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 75,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 78,
            "end": 85,
            "object": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 80,
              "end": 84,
              "value": "if",
              "raw": "\"if\""
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
