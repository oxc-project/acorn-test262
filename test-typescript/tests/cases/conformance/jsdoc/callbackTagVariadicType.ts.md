__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 93,
  "end": 139,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 93,
      "end": 117,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 100,
        "end": 117,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 106,
            "end": 117,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 110,
              "end": 117,
              "async": false,
              "body": {
                "type": "Literal",
                "start": 116,
                "end": 117,
                "raw": "1",
                "value": 1
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 118,
      "end": 139,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 139,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 125,
            "decorators": [],
            "name": "res",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 128,
            "end": 139,
            "arguments": [
              {
                "type": "Literal",
                "start": 130,
                "end": 133,
                "raw": "'a'",
                "value": "a"
              },
              {
                "type": "Literal",
                "start": 135,
                "end": 138,
                "raw": "'b'",
                "value": "b"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
