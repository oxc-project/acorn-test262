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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 8,
                "end": 11
              },
              "start": 7,
              "end": 11
            },
            "start": 4,
            "end": 11
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 14,
            "end": 16
          },
          "definite": false,
          "start": 4,
          "end": 16
        }
      ],
      "declare": false,
      "start": 0,
      "end": 17
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 22
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "if",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 25
          },
          "optional": false,
          "computed": false,
          "start": 19,
          "end": 25
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 28,
          "end": 29
        },
        "start": 19,
        "end": 29
      },
      "directive": null,
      "start": 19,
      "end": 30
    },
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
            "typeAnnotation": null,
            "start": 36,
            "end": 37
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "if",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 44
                },
                "value": {
                  "type": "Literal",
                  "value": "test",
                  "raw": "\"test\"",
                  "start": 46,
                  "end": 52
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 42,
                "end": 52
              }
            ],
            "start": 40,
            "end": 54
          },
          "definite": false,
          "start": 36,
          "end": 54
        }
      ],
      "declare": false,
      "start": 32,
      "end": 54
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 61
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 65
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "if",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 68
            },
            "optional": false,
            "computed": false,
            "start": 64,
            "end": 68
          },
          "definite": false,
          "start": 60,
          "end": 68
        }
      ],
      "declare": false,
      "start": 56,
      "end": 68
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 75
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 79
            },
            "property": {
              "type": "Literal",
              "value": "if",
              "raw": "\"if\"",
              "start": 80,
              "end": 84
            },
            "optional": false,
            "computed": true,
            "start": 78,
            "end": 85
          },
          "definite": false,
          "start": 74,
          "end": 85
        }
      ],
      "declare": false,
      "start": 70,
      "end": 86
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 86
}
```
