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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "definite": false,
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 16,
      "end": 90,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 16,
        "end": 90,
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
            "raw": "'devtools'",
            "value": "devtools",
            "regex": null,
            "bigint": null
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 65,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 67,
                  "end": 69,
                  "properties": []
                }
              },
              {
                "type": "Property",
                "start": 71,
                "end": 87,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 81,
                  "decorators": [],
                  "name": "enumerable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 83,
                  "end": 87,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 16,
          "end": 37,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 16,
            "end": 22,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 23,
            "end": 37,
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 127,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 91,
        "end": 127,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 91,
          "end": 122,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 91,
            "end": 106,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 91,
              "end": 97,
              "decorators": [],
              "name": "chrome",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 98,
              "end": 106,
              "decorators": [],
              "name": "devtools",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 107,
            "end": 122,
            "decorators": [],
            "name": "inspectedWindow",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 125,
          "end": 127,
          "properties": []
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
