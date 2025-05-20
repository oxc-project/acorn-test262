__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 33,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 32,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 15,
        "end": 32,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 29,
          "end": 32,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 26,
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value"
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
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 22,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 15,
        "end": 21,
        "raw": "\"./m1\"",
        "value": "./m1"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 9,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 9,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 23,
      "end": 65,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 38,
        "end": 65,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 52,
          "end": 65,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 58,
              "end": 63,
              "directive": null,
              "expression": {
                "type": "CallExpression",
                "start": 58,
                "end": 62,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 60,
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 47,
          "end": 49,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
