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
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 16,
        "end": 70,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 16,
          "end": 30,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 16,
            "end": 22,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 23,
            "end": 30,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
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
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ObjectExpression",
                "start": 42,
                "end": 68,
                "properties": [
                  {
                    "type": "Property",
                    "start": 52,
                    "end": 62,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 53,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 55,
                      "end": 62,
                      "raw": "\"value\"",
                      "value": "value",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            }
          ]
        }
      }
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 34,
          "definite": false,
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
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 14,
              "end": 32,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 14,
                "end": 30,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 22,
                    "end": 29,
                    "raw": "\"./mod\"",
                    "value": "./mod",
                    "regex": null,
                    "bigint": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 21,
                  "decorators": [],
                  "name": "require",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 35,
      "end": 53,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 35,
        "end": 53,
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
        "callee": {
          "type": "MemberExpression",
          "start": 35,
          "end": 46,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 35,
            "end": 42,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 43,
            "end": 46,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
