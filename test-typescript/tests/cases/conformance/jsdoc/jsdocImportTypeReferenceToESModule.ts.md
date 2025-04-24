__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 22,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 21,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 21,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 21,
              "decorators": [],
              "name": "config",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 17,
                "end": 21,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 19,
                  "end": 21,
                  "members": []
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "start": 33,
  "end": 66,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 33,
      "end": 66,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 66,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 56,
            "end": 64,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 56,
              "end": 64,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 56,
                "end": 57,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 58,
                "end": 64,
                "decorators": [],
                "name": "config",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 46,
        "decorators": [],
        "name": "demo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 47,
          "end": 48,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
