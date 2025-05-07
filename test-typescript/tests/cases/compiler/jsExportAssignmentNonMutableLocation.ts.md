__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 178,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 38,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 37,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 18,
            "decorators": [],
            "name": "customSymbol",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 21,
            "end": 37,
            "arguments": [
              {
                "type": "Literal",
                "start": 28,
                "end": 36,
                "raw": "\"custom\"",
                "value": "custom",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 21,
              "end": 27,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 135,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 96,
        "end": 134,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 96,
          "end": 110,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 96,
            "end": 102,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 103,
            "end": 110,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 113,
          "end": 134,
          "properties": [
            {
              "type": "Property",
              "start": 119,
              "end": 131,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 119,
                "end": 131,
                "decorators": [],
                "name": "customSymbol",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 119,
                "end": 131,
                "decorators": [],
                "name": "customSymbol",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 137,
      "end": 178,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 137,
        "end": 177,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 137,
          "end": 158,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 137,
            "end": 144,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 145,
            "end": 158,
            "decorators": [],
            "name": "customSymbol2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "CallExpression",
          "start": 161,
          "end": 177,
          "arguments": [
            {
              "type": "Literal",
              "start": 168,
              "end": 176,
              "raw": "\"custom\"",
              "value": "custom",
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 161,
            "end": 167,
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
