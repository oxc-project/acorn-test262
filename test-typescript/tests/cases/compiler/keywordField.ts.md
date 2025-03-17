__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 87,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 17,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 16,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 11,
            "name": "obj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 11,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 8,
                "end": 11
              }
            },
            "decorators": [],
            "optional": false
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
      "kind": "var",
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
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 23,
            "end": 25,
            "name": "if",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 54,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 44,
                  "name": "if",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 46,
                  "end": 52,
                  "value": "test",
                  "raw": "\"test\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 68,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 68,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 64,
            "end": 68,
            "object": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 66,
              "end": 68,
              "name": "if",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 86,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 74,
          "end": 85,
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 75,
            "name": "q",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 78,
            "end": 85,
            "object": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 80,
              "end": 84,
              "value": "if",
              "raw": "\"if\""
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
