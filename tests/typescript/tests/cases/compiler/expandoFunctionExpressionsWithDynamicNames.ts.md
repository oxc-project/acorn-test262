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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 64
          },
          "init": {
            "type": "Literal",
            "value": "X",
            "raw": "\"X\"",
            "start": 67,
            "end": 70
          },
          "definite": false,
          "start": 63,
          "end": 70
        }
      ],
      "declare": false,
      "start": 57,
      "end": 71
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
              "name": "expr",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 90
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 99,
                "end": 101
              },
              "id": null,
              "generator": false,
              "start": 93,
              "end": 101
            },
            "definite": false,
            "start": 86,
            "end": 101
          }
        ],
        "declare": false,
        "start": 80,
        "end": 101
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 73,
      "end": 101
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
            "name": "expr",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 106
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 108
          },
          "optional": false,
          "computed": true,
          "start": 102,
          "end": 109
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 112,
          "end": 113
        },
        "start": 102,
        "end": 113
      },
      "directive": null,
      "start": 102,
      "end": 113
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
              "name": "expr2",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 133
            },
            "init": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 148,
                "end": 150
              },
              "expression": false,
              "start": 136,
              "end": 150
            },
            "definite": false,
            "start": 128,
            "end": 150
          }
        ],
        "declare": false,
        "start": 122,
        "end": 150
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 115,
      "end": 150
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
            "name": "expr2",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 156
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 158
          },
          "optional": false,
          "computed": true,
          "start": 151,
          "end": 159
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 162,
          "end": 163
        },
        "start": 151,
        "end": 163
      },
      "directive": null,
      "start": 151,
      "end": 163
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 163
}
```
