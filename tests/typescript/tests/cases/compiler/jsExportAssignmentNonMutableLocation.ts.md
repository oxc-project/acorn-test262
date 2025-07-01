__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "customSymbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 18
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 27
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "custom",
                "raw": "\"custom\"",
                "start": 28,
                "end": 36
              }
            ],
            "optional": false,
            "start": 21,
            "end": 37
          },
          "definite": false,
          "start": 6,
          "end": 37
        }
      ],
      "declare": false,
      "start": 0,
      "end": 38
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
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 102
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 110
          },
          "optional": false,
          "computed": false,
          "start": 96,
          "end": 110
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "customSymbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 131
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "customSymbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 131
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 119,
              "end": 131
            }
          ],
          "start": 113,
          "end": 134
        },
        "start": 96,
        "end": 134
      },
      "directive": null,
      "start": 96,
      "end": 135
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 144
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "customSymbol2",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 158
          },
          "optional": false,
          "computed": false,
          "start": 137,
          "end": 158
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 161,
            "end": 167
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "custom",
              "raw": "\"custom\"",
              "start": 168,
              "end": 176
            }
          ],
          "optional": false,
          "start": 161,
          "end": 177
        },
        "start": 137,
        "end": 177
      },
      "directive": null,
      "start": 137,
      "end": 178
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 178
}
```
