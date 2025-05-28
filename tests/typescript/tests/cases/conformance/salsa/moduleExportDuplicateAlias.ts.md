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
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 25,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 13,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 7,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 8,
            "end": 13,
            "decorators": [],
            "name": "apply",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 27,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 40,
        "end": 43,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 44,
      "end": 59,
      "expression": {
        "type": "CallExpression",
        "start": 44,
        "end": 59,
        "callee": {
          "type": "MemberExpression",
          "start": 44,
          "end": 57,
          "object": {
            "type": "Identifier",
            "start": 44,
            "end": 51,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 52,
            "end": 57,
            "decorators": [],
            "name": "apply",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 60,
      "end": 78,
      "expression": {
        "type": "AssignmentExpression",
        "start": 60,
        "end": 77,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 60,
          "end": 73,
          "object": {
            "type": "Identifier",
            "start": 60,
            "end": 67,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 68,
            "end": 73,
            "decorators": [],
            "name": "apply",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 94,
      "expression": {
        "type": "CallExpression",
        "start": 79,
        "end": 94,
        "callee": {
          "type": "MemberExpression",
          "start": 79,
          "end": 92,
          "object": {
            "type": "Identifier",
            "start": 79,
            "end": 86,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 87,
            "end": 92,
            "decorators": [],
            "name": "apply",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
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
  "end": 70,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 62,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 62,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 15,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 8,
                "end": 13,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 13,
                  "decorators": [],
                  "name": "apply",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 13,
                  "decorators": [],
                  "name": "apply",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 18,
            "end": 62,
            "callee": {
              "type": "Identifier",
              "start": 18,
              "end": 25,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 26,
                "end": 61,
                "value": "./moduleExportAliasDuplicateAlias",
                "raw": "'./moduleExportAliasDuplicateAlias'"
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
      "start": 63,
      "end": 70,
      "expression": {
        "type": "CallExpression",
        "start": 63,
        "end": 70,
        "callee": {
          "type": "Identifier",
          "start": 63,
          "end": 68,
          "decorators": [],
          "name": "apply",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
