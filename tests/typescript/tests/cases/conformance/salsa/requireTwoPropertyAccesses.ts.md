__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 70,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 16,
      "end": 70,
      "expression": {
        "type": "AssignmentExpression",
        "start": 16,
        "end": 70,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 16,
          "end": 30,
          "object": {
            "type": "Identifier",
            "start": 16,
            "end": 22,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 23,
            "end": 30,
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
          "start": 33,
          "end": 70,
          "properties": [
            {
              "type": "Property",
              "start": 39,
              "end": 68,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ObjectExpression",
                "start": 42,
                "end": 68,
                "properties": [
                  {
                    "type": "Property",
                    "start": 52,
                    "end": 62,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 53,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 55,
                      "end": 62,
                      "value": "value",
                      "raw": "\"value\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 34,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 34,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 14,
            "end": 34,
            "object": {
              "type": "MemberExpression",
              "start": 14,
              "end": 32,
              "object": {
                "type": "CallExpression",
                "start": 14,
                "end": 30,
                "callee": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 21,
                  "decorators": [],
                  "name": "require",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 22,
                    "end": 29,
                    "value": "./mod",
                    "raw": "\"./mod\""
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "y",
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
      "type": "ExpressionStatement",
      "start": 35,
      "end": 53,
      "expression": {
        "type": "CallExpression",
        "start": 35,
        "end": 53,
        "callee": {
          "type": "MemberExpression",
          "start": 35,
          "end": 46,
          "object": {
            "type": "Identifier",
            "start": 35,
            "end": 42,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 43,
            "end": 46,
            "decorators": [],
            "name": "log",
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
            "start": 47,
            "end": 52,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
