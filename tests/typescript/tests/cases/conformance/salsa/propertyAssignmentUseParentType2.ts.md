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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 48,
        "end": 74,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 54,
            "end": 74,
            "definite": false,
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
              "async": false,
              "body": {
                "type": "Literal",
                "start": 70,
                "end": 74,
                "raw": "true",
                "value": true
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 92,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 75,
        "end": 92,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 75,
          "end": 86,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 75,
            "end": 82,
            "decorators": [],
            "name": "inlined",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 83,
            "end": 86,
            "decorators": [],
            "name": "nuo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 89,
          "end": 92,
          "raw": "789",
          "value": 789
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 135,
      "end": 171,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 142,
        "end": 171,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 148,
            "end": 171,
            "definite": false,
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
              "async": false,
              "body": {
                "type": "Literal",
                "start": 167,
                "end": 171,
                "raw": "true",
                "value": true
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 191,
      "end": 211,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 191,
        "end": 211,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 191,
          "end": 205,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 191,
            "end": 201,
            "decorators": [],
            "name": "duplicated",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 202,
            "end": 205,
            "decorators": [],
            "name": "nuo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 208,
          "end": 211,
          "raw": "789",
          "value": 789
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 254,
      "end": 301,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 261,
        "end": 301,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 267,
            "end": 301,
            "definite": false,
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
              "async": false,
              "body": {
                "type": "Literal",
                "start": 297,
                "end": 301,
                "raw": "true",
                "value": true
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 322,
      "end": 353,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 322,
        "end": 353,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 322,
          "end": 347,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 322,
            "end": 343,
            "decorators": [],
            "name": "conflictingDuplicated",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 344,
            "end": 347,
            "decorators": [],
            "name": "nuo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 350,
          "end": 353,
          "raw": "789",
          "value": 789
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
