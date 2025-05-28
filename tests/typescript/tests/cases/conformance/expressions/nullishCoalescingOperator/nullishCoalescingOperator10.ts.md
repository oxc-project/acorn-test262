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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 64,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 64,
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
            "left": {
              "type": "CallExpression",
              "start": 52,
              "end": 55,
              "callee": {
                "type": "Identifier",
                "start": 52,
                "end": 53,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
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
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
