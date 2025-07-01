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
            "name": "chrome",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 10
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 13,
            "end": 15
          },
          "definite": false,
          "start": 4,
          "end": 15
        }
      ],
      "declare": false,
      "start": 0,
      "end": 15
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 22
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 37
          },
          "optional": false,
          "computed": false,
          "start": 16,
          "end": 37
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "chrome",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 44
          },
          {
            "type": "Literal",
            "value": "devtools",
            "raw": "'devtools'",
            "start": 46,
            "end": 56
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 65
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 67,
                  "end": 69
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 60,
                "end": 69
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "enumerable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 81
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 83,
                  "end": 87
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 71,
                "end": 87
              }
            ],
            "start": 58,
            "end": 89
          }
        ],
        "optional": false,
        "start": 16,
        "end": 90
      },
      "directive": null,
      "start": 16,
      "end": 90
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "chrome",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 97
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "devtools",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 106
            },
            "optional": false,
            "computed": false,
            "start": 91,
            "end": 106
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "inspectedWindow",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 122
          },
          "optional": false,
          "computed": false,
          "start": 91,
          "end": 122
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 125,
          "end": 127
        },
        "start": 91,
        "end": 127
      },
      "directive": null,
      "start": 91,
      "end": 127
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 127
}
```
