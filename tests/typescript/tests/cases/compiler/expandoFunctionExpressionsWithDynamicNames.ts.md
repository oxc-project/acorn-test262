__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 163,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 71,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 70,
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
            "value": "X",
            "raw": "\"X\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 73,
      "end": 101,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 80,
        "end": 101,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 86,
            "end": 101,
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
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 99,
                "end": 101,
                "body": []
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
      "start": 102,
      "end": 113,
      "expression": {
        "type": "AssignmentExpression",
        "start": 102,
        "end": 113,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 102,
          "end": 109,
          "object": {
            "type": "Identifier",
            "start": 102,
            "end": 106,
            "decorators": [],
            "name": "expr",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 112,
          "end": 113,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 115,
      "end": 150,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 122,
        "end": 150,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 128,
            "end": 150,
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
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 148,
                "end": 150,
                "body": []
              },
              "expression": false
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
      "start": 151,
      "end": 163,
      "expression": {
        "type": "AssignmentExpression",
        "start": 151,
        "end": 163,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 151,
          "end": 159,
          "object": {
            "type": "Identifier",
            "start": 151,
            "end": 156,
            "decorators": [],
            "name": "expr2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 157,
            "end": 158,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 162,
          "end": 163,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
