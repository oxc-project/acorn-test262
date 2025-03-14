emptyTuplesTypeAssertion01.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 14,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 8,
            "end": 14,
            "expression": {
              "type": "ArrayExpression",
              "start": 12,
              "end": 14,
              "elements": []
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 9,
              "end": 11,
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
      "start": 16,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 24,
            "end": 28,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "raw": "0",
              "value": 0
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
