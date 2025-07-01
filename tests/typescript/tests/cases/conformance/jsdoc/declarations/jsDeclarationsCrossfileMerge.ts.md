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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 17
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./exporter",
                "raw": "\"./exporter\"",
                "start": 18,
                "end": 30
              }
            ],
            "optional": false,
            "start": 10,
            "end": 31
          },
          "definite": false,
          "start": 6,
          "end": 31
        }
      ],
      "declare": false,
      "start": 0,
      "end": 32
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
            "start": 34,
            "end": 40
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 48
          },
          "optional": false,
          "computed": false,
          "start": 34,
          "end": 48
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 52
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 60
          },
          "optional": false,
          "computed": false,
          "start": 51,
          "end": 60
        },
        "start": 34,
        "end": 60
      },
      "directive": null,
      "start": 34,
      "end": 61
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 68
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 76
            },
            "optional": false,
            "computed": false,
            "start": 62,
            "end": 76
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "memberName",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 87
          },
          "optional": false,
          "computed": false,
          "start": 62,
          "end": 87
        },
        "right": {
          "type": "Literal",
          "value": "thing",
          "raw": "\"thing\"",
          "start": 90,
          "end": 97
        },
        "start": 62,
        "end": 97
      },
      "directive": null,
      "start": 62,
      "end": 98
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 99
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "validate",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 17
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 20,
        "end": 22
      },
      "expression": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "validate",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 47
      },
      "exportKind": "value",
      "start": 24,
      "end": 48
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 48
}
```
