__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "inlined",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 61
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 70,
                "end": 74
              },
              "id": null,
              "generator": false,
              "start": 64,
              "end": 74
            },
            "definite": false,
            "start": 54,
            "end": 74
          }
        ],
        "declare": false,
        "start": 48,
        "end": 74
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 41,
      "end": 74
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
            "name": "inlined",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 82
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "nuo",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 86
          },
          "optional": false,
          "computed": false,
          "start": 75,
          "end": 86
        },
        "right": {
          "type": "Literal",
          "value": 789,
          "raw": "789",
          "start": 89,
          "end": 92
        },
        "start": 75,
        "end": 92
      },
      "directive": null,
      "start": 75,
      "end": 92
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "duplicated",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 158
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 167,
                "end": 171
              },
              "id": null,
              "generator": false,
              "start": 161,
              "end": 171
            },
            "definite": false,
            "start": 148,
            "end": 171
          }
        ],
        "declare": false,
        "start": 142,
        "end": 171
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 135,
      "end": 171
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
            "name": "duplicated",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 201
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "nuo",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 205
          },
          "optional": false,
          "computed": false,
          "start": 191,
          "end": 205
        },
        "right": {
          "type": "Literal",
          "value": 789,
          "raw": "789",
          "start": 208,
          "end": 211
        },
        "start": 191,
        "end": 211
      },
      "directive": null,
      "start": 191,
      "end": 211
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "conflictingDuplicated",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 288
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 297,
                "end": 301
              },
              "id": null,
              "generator": false,
              "start": 291,
              "end": 301
            },
            "definite": false,
            "start": 267,
            "end": 301
          }
        ],
        "declare": false,
        "start": 261,
        "end": 301
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 254,
      "end": 301
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
            "name": "conflictingDuplicated",
            "optional": false,
            "typeAnnotation": null,
            "start": 322,
            "end": 343
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "nuo",
            "optional": false,
            "typeAnnotation": null,
            "start": 344,
            "end": 347
          },
          "optional": false,
          "computed": false,
          "start": 322,
          "end": 347
        },
        "right": {
          "type": "Literal",
          "value": 789,
          "raw": "789",
          "start": 350,
          "end": 353
        },
        "start": 322,
        "end": 353
      },
      "directive": null,
      "start": 322,
      "end": 353
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 41,
  "end": 353
}
```
