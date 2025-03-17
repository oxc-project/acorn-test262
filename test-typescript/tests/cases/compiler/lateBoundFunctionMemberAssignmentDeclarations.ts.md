__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 24,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 24,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 22,
          "end": 24,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 25,
      "end": 38,
      "expression": {
        "type": "AssignmentExpression",
        "start": 25,
        "end": 37,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 25,
          "end": 32,
          "object": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 29,
            "end": 32,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 35,
          "end": 37,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 53,
            "name": "_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 56,
            "end": 64,
            "callee": {
              "type": "Identifier",
              "start": 56,
              "end": 62,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 66,
      "end": 87,
      "expression": {
        "type": "AssignmentExpression",
        "start": 66,
        "end": 86,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 66,
          "end": 79,
          "object": {
            "type": "Identifier",
            "start": 66,
            "end": 69,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 70,
            "end": 78,
            "name": "_private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 82,
          "end": 86,
          "value": "ok",
          "raw": "\"ok\""
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 104,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 104,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 98,
                "end": 104
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 107,
            "end": 120,
            "object": {
              "type": "Identifier",
              "start": 107,
              "end": 110,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 111,
              "end": 119,
              "name": "_private",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
