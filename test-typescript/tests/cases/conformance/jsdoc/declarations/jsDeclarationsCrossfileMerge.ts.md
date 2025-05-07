__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 99,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 10,
            "end": 31,
            "arguments": [
              {
                "type": "Literal",
                "start": 18,
                "end": 30,
                "raw": "\"./exporter\"",
                "value": "./exporter",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 10,
              "end": 17,
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
      "start": 34,
      "end": 61,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 34,
        "end": 60,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 34,
          "end": 48,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 34,
            "end": 40,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 41,
            "end": 48,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 51,
          "end": 60,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 53,
            "end": 60,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 98,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 62,
        "end": 97,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 62,
          "end": 87,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 62,
            "end": 76,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 62,
              "end": 68,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 69,
              "end": 76,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 77,
            "end": 87,
            "decorators": [],
            "name": "memberName",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 90,
          "end": 97,
          "raw": "\"thing\"",
          "value": "thing",
          "regex": null,
          "bigint": null
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
  "end": 48,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 22,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 22,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 17,
        "decorators": [],
        "name": "validate",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 24,
      "end": 48,
      "declaration": {
        "type": "Identifier",
        "start": 39,
        "end": 47,
        "decorators": [],
        "name": "validate",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
