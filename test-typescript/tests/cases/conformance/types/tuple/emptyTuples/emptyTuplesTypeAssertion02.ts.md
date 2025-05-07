__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 31,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 17,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 16,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 8,
            "end": 16,
            "expression": {
              "type": "ArrayExpression",
              "start": 8,
              "end": 10,
              "elements": []
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 14,
              "end": 16,
              "elementTypes": []
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 30,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 26,
            "end": 30,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 28,
              "end": 29,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
