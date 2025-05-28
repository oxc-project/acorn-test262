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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 37,
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
            "callee": {
              "type": "Identifier",
              "start": 21,
              "end": 27,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 28,
                "end": 36,
                "value": "custom",
                "raw": "\"custom\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 135,
      "expression": {
        "type": "AssignmentExpression",
        "start": 96,
        "end": 134,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 96,
          "end": 110,
          "object": {
            "type": "Identifier",
            "start": 96,
            "end": 102,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 103,
            "end": 110,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 119,
                "end": 131,
                "decorators": [],
                "name": "customSymbol",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 119,
                "end": 131,
                "decorators": [],
                "name": "customSymbol",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 137,
      "end": 178,
      "expression": {
        "type": "AssignmentExpression",
        "start": 137,
        "end": 177,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 137,
          "end": 158,
          "object": {
            "type": "Identifier",
            "start": 137,
            "end": 144,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 145,
            "end": 158,
            "decorators": [],
            "name": "customSymbol2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "CallExpression",
          "start": 161,
          "end": 177,
          "callee": {
            "type": "Identifier",
            "start": 161,
            "end": 167,
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 168,
              "end": 176,
              "value": "custom",
              "raw": "\"custom\""
            }
          ],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
