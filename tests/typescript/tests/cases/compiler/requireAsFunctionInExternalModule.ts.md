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
          "name": "require",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 31
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 33
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 35,
          "end": 38
        },
        "expression": false,
        "start": 15,
        "end": 38
      },
      "exportKind": "value",
      "start": 0,
      "end": 38
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "has",
          "optional": false,
          "typeAnnotation": null,
          "start": 55,
          "end": 58
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 60
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 71,
                "end": 75
              },
              "start": 64,
              "end": 75
            }
          ],
          "start": 62,
          "end": 77
        },
        "expression": false,
        "start": 46,
        "end": 77
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 39,
      "end": 77
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 78
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
            "name": "require",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 14
          },
          "start": 7,
          "end": 14
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "has",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 21
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "has",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 21
          },
          "importKind": "value",
          "start": 18,
          "end": 21
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./c",
        "raw": "\"./c\"",
        "start": 29,
        "end": 34
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 34
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "hello",
          "optional": false,
          "typeAnnotation": null,
          "start": 51,
          "end": 56
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 59,
          "end": 62
        },
        "expression": false,
        "start": 42,
        "end": 62
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 35,
      "end": 62
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "has",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 70
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "ember-debug",
            "raw": "'ember-debug'",
            "start": 71,
            "end": 84
          }
        ],
        "optional": false,
        "start": 67,
        "end": 85
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 100
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "ember-debug",
                  "raw": "'ember-debug'",
                  "start": 101,
                  "end": 114
                }
              ],
              "optional": false,
              "start": 93,
              "end": 115
            },
            "directive": null,
            "start": 93,
            "end": 116
          }
        ],
        "start": 87,
        "end": 118
      },
      "alternate": null,
      "start": 63,
      "end": 118
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 119
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "hello",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "hello",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "importKind": "value",
          "start": 9,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./m",
        "raw": "\"./m\"",
        "start": 22,
        "end": 27
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 28
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "hello",
          "optional": false,
          "typeAnnotation": null,
          "start": 29,
          "end": 34
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 29,
        "end": 36
      },
      "directive": null,
      "start": 29,
      "end": 37
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 37
}
```
