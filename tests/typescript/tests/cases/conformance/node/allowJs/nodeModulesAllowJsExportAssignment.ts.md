__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 44,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 26,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 29,
            "end": 31,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSExportAssignment",
      "start": 33,
      "end": 44,
      "expression": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 52,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 26,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 29,
            "end": 31,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 52,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 33,
        "end": 51,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 33,
          "end": 47,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 33,
            "end": 39,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 40,
            "end": 47,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 50,
          "end": 51,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 44,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 26,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 29,
            "end": 31,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSExportAssignment",
      "start": 33,
      "end": 44,
      "expression": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 65,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 19,
      "end": 31,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 30,
        "raw": "\"fs\"",
        "value": "fs"
      },
      "specifiers": [],
      "phase": null,
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 32,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 44,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 42,
            "end": 44,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 46,
      "end": 65,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 46,
        "end": 64,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 46,
          "end": 60,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 46,
            "end": 52,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 53,
            "end": 60,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 63,
          "end": 64,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
