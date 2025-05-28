__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 127,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "chrome",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 13,
            "end": 15,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 16,
      "end": 90,
      "expression": {
        "type": "CallExpression",
        "start": 16,
        "end": 90,
        "callee": {
          "type": "MemberExpression",
          "start": 16,
          "end": 37,
          "object": {
            "type": "Identifier",
            "start": 16,
            "end": 22,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 23,
            "end": 37,
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 38,
            "end": 44,
            "decorators": [],
            "name": "chrome",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 46,
            "end": 56,
            "value": "devtools",
            "raw": "'devtools'"
          },
          {
            "type": "ObjectExpression",
            "start": 58,
            "end": 89,
            "properties": [
              {
                "type": "Property",
                "start": 60,
                "end": 69,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 65,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 67,
                  "end": 69,
                  "properties": []
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 71,
                "end": 87,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 81,
                  "decorators": [],
                  "name": "enumerable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 83,
                  "end": 87,
                  "value": true,
                  "raw": "true"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 127,
      "expression": {
        "type": "AssignmentExpression",
        "start": 91,
        "end": 127,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 91,
          "end": 122,
          "object": {
            "type": "MemberExpression",
            "start": 91,
            "end": 106,
            "object": {
              "type": "Identifier",
              "start": 91,
              "end": 97,
              "decorators": [],
              "name": "chrome",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 98,
              "end": 106,
              "decorators": [],
              "name": "devtools",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 107,
            "end": 122,
            "decorators": [],
            "name": "inspectedWindow",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 125,
          "end": 127,
          "properties": []
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
