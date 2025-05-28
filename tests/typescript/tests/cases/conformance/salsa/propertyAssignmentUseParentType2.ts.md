__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 41,
  "end": 353,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 41,
      "end": 74,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 48,
        "end": 74,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 54,
            "end": 74,
            "id": {
              "type": "Identifier",
              "start": 54,
              "end": 61,
              "decorators": [],
              "name": "inlined",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 64,
              "end": 74,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "start": 70,
                "end": 74,
                "value": true,
                "raw": "true"
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 92,
      "expression": {
        "type": "AssignmentExpression",
        "start": 75,
        "end": 92,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 75,
          "end": 86,
          "object": {
            "type": "Identifier",
            "start": 75,
            "end": 82,
            "decorators": [],
            "name": "inlined",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 83,
            "end": 86,
            "decorators": [],
            "name": "nuo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 89,
          "end": 92,
          "value": 789,
          "raw": "789"
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 135,
      "end": 171,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 142,
        "end": 171,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 148,
            "end": 171,
            "id": {
              "type": "Identifier",
              "start": 148,
              "end": 158,
              "decorators": [],
              "name": "duplicated",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 161,
              "end": 171,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "start": 167,
                "end": 171,
                "value": true,
                "raw": "true"
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 191,
      "end": 211,
      "expression": {
        "type": "AssignmentExpression",
        "start": 191,
        "end": 211,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 191,
          "end": 205,
          "object": {
            "type": "Identifier",
            "start": 191,
            "end": 201,
            "decorators": [],
            "name": "duplicated",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 202,
            "end": 205,
            "decorators": [],
            "name": "nuo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 208,
          "end": 211,
          "value": 789,
          "raw": "789"
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 254,
      "end": 301,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 261,
        "end": 301,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 267,
            "end": 301,
            "id": {
              "type": "Identifier",
              "start": 267,
              "end": 288,
              "decorators": [],
              "name": "conflictingDuplicated",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 291,
              "end": 301,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "start": 297,
                "end": 301,
                "value": true,
                "raw": "true"
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 322,
      "end": 353,
      "expression": {
        "type": "AssignmentExpression",
        "start": 322,
        "end": 353,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 322,
          "end": 347,
          "object": {
            "type": "Identifier",
            "start": 322,
            "end": 343,
            "decorators": [],
            "name": "conflictingDuplicated",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 344,
            "end": 347,
            "decorators": [],
            "name": "nuo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 350,
          "end": 353,
          "value": 789,
          "raw": "789"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
