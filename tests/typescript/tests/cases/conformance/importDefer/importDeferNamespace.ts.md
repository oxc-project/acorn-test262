__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 19
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
                    "start": 28,
                    "end": 35
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 36,
                    "end": 39
                  },
                  "optional": false,
                  "computed": false,
                  "start": 28,
                  "end": 39
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "foo from a",
                    "raw": "\"foo from a\"",
                    "start": 40,
                    "end": 52
                  }
                ],
                "optional": false,
                "start": 28,
                "end": 53
              },
              "directive": null,
              "start": 28,
              "end": 54
            }
          ],
          "start": 22,
          "end": 56
        },
        "expression": false,
        "start": 7,
        "end": 56
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 56
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 57
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "aNs",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 21
          },
          "start": 13,
          "end": 21
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a.js",
        "raw": "\"./a.js\"",
        "start": 27,
        "end": 35
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 36
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "aNs",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 41
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 45
          },
          "optional": false,
          "computed": false,
          "start": 38,
          "end": 45
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 38,
        "end": 47
      },
      "directive": null,
      "start": 38,
      "end": 48
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 48
}
```
