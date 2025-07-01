__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 107
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 116,
                "end": 117
              },
              "id": null,
              "generator": false,
              "start": 110,
              "end": 117
            },
            "definite": false,
            "start": 106,
            "end": 117
          }
        ],
        "declare": false,
        "start": 100,
        "end": 117
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 93,
      "end": 117
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "res",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 125
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 129
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 130,
                "end": 133
              },
              {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 135,
                "end": 138
              }
            ],
            "optional": false,
            "start": 128,
            "end": 139
          },
          "definite": false,
          "start": 122,
          "end": 139
        }
      ],
      "declare": false,
      "start": 118,
      "end": 139
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 93,
  "end": 139
}
```
