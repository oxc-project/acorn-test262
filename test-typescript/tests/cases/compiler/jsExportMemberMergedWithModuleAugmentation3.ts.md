__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 21,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 20,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 16,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 0,
            "end": 14,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 0,
              "end": 6,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 7,
              "end": 14,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 19,
          "end": 20,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 57,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 22,
        "end": 56,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 22,
          "end": 36,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 22,
            "end": 28,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 29,
            "end": 36,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "CallExpression",
          "start": 39,
          "end": 56,
          "arguments": [
            {
              "type": "Literal",
              "start": 47,
              "end": 55,
              "raw": "\"./y.js\"",
              "value": "./y.js"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 39,
            "end": 46,
            "decorators": [],
            "name": "require",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
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
  "start": 0,
  "end": 26,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 26,
        "declare": true,
        "id": {
          "type": "Identifier",
          "start": 20,
          "end": 21,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 24,
          "end": 25,
          "literal": {
            "type": "Literal",
            "start": 24,
            "end": 25,
            "raw": "1",
            "value": 1
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
