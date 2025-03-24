__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 121,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 24,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 22,
          "end": 24,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 25,
      "end": 38,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 25,
        "end": 37,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 25,
          "end": 32,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 29,
            "end": 32,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 35,
          "end": 37,
          "raw": "12",
          "value": 12
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 39,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 64,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 53,
            "decorators": [],
            "name": "_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 56,
            "end": 64,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 56,
              "end": 62,
              "decorators": [],
              "name": "Symbol",
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
      "start": 66,
      "end": 87,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 66,
        "end": 86,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 66,
          "end": 79,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 66,
            "end": 69,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 70,
            "end": 78,
            "decorators": [],
            "name": "_private",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 82,
          "end": 86,
          "raw": "\"ok\"",
          "value": "ok"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 89,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 95,
          "end": 120,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 104,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 104,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 98,
                "end": 104
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 107,
            "end": 120,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 107,
              "end": 110,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 111,
              "end": 119,
              "decorators": [],
              "name": "_private",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
