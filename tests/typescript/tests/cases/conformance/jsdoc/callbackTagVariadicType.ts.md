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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 100,
        "end": 117,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 106,
            "end": 117,
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
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "start": 116,
                "end": 117,
                "value": 1,
                "raw": "1"
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 118,
      "end": 139,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 139,
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
            "callee": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 130,
                "end": 133,
                "value": "a",
                "raw": "'a'"
              },
              {
                "type": "Literal",
                "start": 135,
                "end": 138,
                "value": "b",
                "raw": "'b'"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
