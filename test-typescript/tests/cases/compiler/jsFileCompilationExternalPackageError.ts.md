__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 20,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 19,
        "raw": "\"b\"",
        "value": "b"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 9,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 21,
      "end": 25,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 21,
        "end": 24,
        "argument": {
          "type": "Identifier",
          "start": 21,
          "end": 22,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 26,
      "end": 46,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 42,
        "end": 45,
        "raw": "\"c\"",
        "value": "c"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 34,
          "end": 35,
          "imported": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 51,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 47,
        "end": 50,
        "argument": {
          "type": "Identifier",
          "start": 47,
          "end": 48,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": false
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
  "start": 0,
  "end": 12,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
  "start": 0,
  "end": 23,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 15,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 14,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 9,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 7,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 12,
          "end": 14,
          "raw": "10",
          "value": 10
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 16,
      "end": 23,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 16,
        "end": 22,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 20,
          "end": 22,
          "raw": "10",
          "value": 10
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
