__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "defer",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 29
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 38,
                    "end": 45
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 46,
                    "end": 49
                  },
                  "optional": false,
                  "computed": false,
                  "start": 38,
                  "end": 49
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "defer from a",
                    "raw": "\"defer from a\"",
                    "start": 50,
                    "end": 64
                  }
                ],
                "optional": false,
                "start": 38,
                "end": 65
              },
              "directive": null,
              "start": 38,
              "end": 66
            }
          ],
          "start": 32,
          "end": 68
        },
        "expression": false,
        "start": 15,
        "end": 68
      },
      "exportKind": "value",
      "start": 0,
      "end": 68
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 69
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defer",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 12
          },
          "start": 7,
          "end": 12
        }
      ],
      "source": {
        "type": "Literal",
        "value": "a",
        "raw": "\"a\"",
        "start": 18,
        "end": 21
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 22
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "defer",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 29
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 24,
        "end": 31
      },
      "directive": null,
      "start": 24,
      "end": 32
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 32
}
```
