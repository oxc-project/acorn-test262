__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 164,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 70,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 67,
            "end": 70,
            "raw": "\"X\"",
            "value": "X"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 73,
      "end": 101,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 80,
        "end": 101,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 86,
            "end": 101,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 86,
              "end": 90,
              "decorators": [],
              "name": "expr",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 93,
              "end": 101,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 99,
                "end": 101,
                "body": []
              },
              "expression": false,
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
      "start": 102,
      "end": 113,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 102,
        "end": 113,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 102,
          "end": 109,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 102,
            "end": 106,
            "decorators": [],
            "name": "expr",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 112,
          "end": 113,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 115,
      "end": 150,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 122,
        "end": 150,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 128,
            "end": 150,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 128,
              "end": 133,
              "decorators": [],
              "name": "expr2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "FunctionExpression",
              "start": 136,
              "end": 150,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 148,
                "end": 150,
                "body": []
              },
              "declare": false,
              "expression": false,
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
      "start": 151,
      "end": 163,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 151,
        "end": 163,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 151,
          "end": 159,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 151,
            "end": 156,
            "decorators": [],
            "name": "expr2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 157,
            "end": 158,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 162,
          "end": 163,
          "raw": "0",
          "value": 0
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
