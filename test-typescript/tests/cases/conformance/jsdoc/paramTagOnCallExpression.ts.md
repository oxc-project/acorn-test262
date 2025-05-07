__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 43,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 43,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 24,
        "decorators": [],
        "name": "factory",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 25,
          "end": 37,
          "decorators": [],
          "name": "type",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 37,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 31,
              "end": 37
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 38,
        "end": 42,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 40,
          "end": 42,
          "members": []
        }
      },
      "typeParameters": null
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
  "start": 76,
  "end": 114,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 76,
      "end": 114,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 76,
        "end": 114,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 76,
          "end": 92,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 76,
            "end": 83,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 84,
            "end": 92,
            "decorators": [],
            "name": "inherits",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "CallExpression",
          "start": 95,
          "end": 114,
          "arguments": [
            {
              "type": "Literal",
              "start": 103,
              "end": 113,
              "raw": "'inherits'",
              "value": "inherits",
              "regex": null,
              "bigint": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 95,
            "end": 102,
            "decorators": [],
            "name": "factory",
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
