__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 41,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
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
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 49,
            "decorators": [],
            "name": "gg",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 52,
            "end": 64,
            "operator": "??",
            "left": {
              "type": "CallExpression",
              "start": 52,
              "end": 55,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 52,
                "end": 53,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "right": {
              "type": "Literal",
              "start": 59,
              "end": 64,
              "raw": "'foo'",
              "value": "foo"
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
