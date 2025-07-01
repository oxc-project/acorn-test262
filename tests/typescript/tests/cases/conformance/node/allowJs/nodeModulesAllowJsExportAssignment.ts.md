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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 26
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 29,
            "end": 31
          },
          "definite": false,
          "start": 25,
          "end": 31
        }
      ],
      "declare": false,
      "start": 19,
      "end": 32
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 43
      },
      "start": 33,
      "end": 44
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 44
}
```
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 26
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 29,
            "end": 31
          },
          "definite": false,
          "start": 25,
          "end": 31
        }
      ],
      "declare": false,
      "start": 19,
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
            "start": 33,
            "end": 39
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 47
          },
          "optional": false,
          "computed": false,
          "start": 33,
          "end": 47
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 51
        },
        "start": 33,
        "end": 51
      },
      "directive": null,
      "start": 33,
      "end": 52
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 52
}
```
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 26
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 29,
            "end": 31
          },
          "definite": false,
          "start": 25,
          "end": 31
        }
      ],
      "declare": false,
      "start": 19,
      "end": 32
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 43
      },
      "start": 33,
      "end": 44
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 44
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "fs",
        "raw": "\"fs\"",
        "start": 26,
        "end": 30
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 31
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 39
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 42,
            "end": 44
          },
          "definite": false,
          "start": 38,
          "end": 44
        }
      ],
      "declare": false,
      "start": 32,
      "end": 45
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
            "start": 46,
            "end": 52
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 60
          },
          "optional": false,
          "computed": false,
          "start": 46,
          "end": 60
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 63,
          "end": 64
        },
        "start": 46,
        "end": 64
      },
      "directive": null,
      "start": 46,
      "end": 65
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 65
}
```
