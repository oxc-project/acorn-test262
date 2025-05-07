__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 14,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "Obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 14,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 16,
      "end": 35,
      "declaration": {
        "type": "Identifier",
        "start": 31,
        "end": 34,
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
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
  "end": 47,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 22,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 21,
        "raw": "'./a'",
        "value": "./a",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "decorators": [],
            "name": "Obj",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 24,
      "end": 47,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 24,
        "end": 46,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 24,
          "end": 30,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 24,
            "end": 27,
            "decorators": [],
            "name": "Obj",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 28,
            "end": 30,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 33,
          "end": 46,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 44,
            "end": 46,
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
