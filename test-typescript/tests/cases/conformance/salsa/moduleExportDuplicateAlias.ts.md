__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 95,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 26,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 25,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 13,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 7,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 8,
            "end": 13,
            "decorators": [],
            "name": "apply",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 16,
          "end": 25,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 27,
      "end": 43,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 40,
        "end": 43,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 44,
      "end": 59,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 44,
        "end": 59,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 44,
          "end": 57,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 44,
            "end": 51,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 52,
            "end": 57,
            "decorators": [],
            "name": "apply",
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
      "start": 60,
      "end": 78,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 60,
        "end": 77,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 60,
          "end": 73,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 60,
            "end": 67,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 68,
            "end": 73,
            "decorators": [],
            "name": "apply",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 76,
          "end": 77,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 94,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 79,
        "end": 94,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 79,
          "end": 92,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 79,
            "end": 86,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 87,
            "end": 92,
            "decorators": [],
            "name": "apply",
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 70,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 62,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 62,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 15,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 8,
                "end": 13,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 13,
                  "decorators": [],
                  "name": "apply",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 13,
                  "decorators": [],
                  "name": "apply",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 18,
            "end": 62,
            "arguments": [
              {
                "type": "Literal",
                "start": 26,
                "end": 61,
                "raw": "'./moduleExportAliasDuplicateAlias'",
                "value": "./moduleExportAliasDuplicateAlias",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 18,
              "end": 25,
              "decorators": [],
              "name": "require",
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
      "start": 63,
      "end": 70,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 63,
        "end": 70,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 63,
          "end": 68,
          "decorators": [],
          "name": "apply",
          "optional": false,
          "typeAnnotation": null
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
