__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 20,
        "end": 40,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 22,
          "end": 40,
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 22,
              "end": 28
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 31,
              "end": 40
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 64,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 49,
            "name": "gg",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 52,
            "end": 64,
            "left": {
              "type": "CallExpression",
              "start": 52,
              "end": 55,
              "callee": {
                "type": "Identifier",
                "start": 52,
                "end": 53,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "start": 59,
              "end": 64,
              "value": "foo",
              "raw": "'foo'"
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
