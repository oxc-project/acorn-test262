__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "factory",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 24
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "type",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 31,
              "end": 37
            },
            "start": 29,
            "end": 37
          },
          "start": 25,
          "end": 37
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 40,
          "end": 42
        },
        "start": 38,
        "end": 42
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 43
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 43
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 83
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "inherits",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 92
          },
          "optional": false,
          "computed": false,
          "start": 76,
          "end": 92
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "factory",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 102
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "inherits",
              "raw": "'inherits'",
              "start": 103,
              "end": 113
            }
          ],
          "optional": false,
          "start": 95,
          "end": 114
        },
        "start": 76,
        "end": 114
      },
      "directive": null,
      "start": 76,
      "end": 114
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 76,
  "end": 114
}
```
