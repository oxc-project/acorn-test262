__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 38,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 15,
        "end": 38,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 35,
          "end": 38,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 31,
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 39,
      "end": 77,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 46,
        "end": 77,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 62,
          "end": 77,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 64,
              "end": 75,
              "argument": {
                "type": "Literal",
                "start": 71,
                "end": 75,
                "raw": "true",
                "value": true,
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 55,
          "end": 58,
          "decorators": [],
          "name": "has",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "typeParameters": null
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
  "start": 0,
  "end": 119,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 34,
        "raw": "\"./c\"",
        "value": "./c",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 14,
            "decorators": [],
            "name": "require",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 18,
          "end": 21,
          "imported": {
            "type": "Identifier",
            "start": 18,
            "end": 21,
            "decorators": [],
            "name": "has",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 18,
            "end": 21,
            "decorators": [],
            "name": "has",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 35,
      "end": 62,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 42,
        "end": 62,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 59,
          "end": 62,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 51,
          "end": 56,
          "decorators": [],
          "name": "hello",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "IfStatement",
      "start": 63,
      "end": 118,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 87,
        "end": 118,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 93,
            "end": 116,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 93,
              "end": 115,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 101,
                  "end": 114,
                  "raw": "'ember-debug'",
                  "value": "ember-debug",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 93,
                "end": 100,
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 67,
        "end": 85,
        "arguments": [
          {
            "type": "Literal",
            "start": 71,
            "end": 84,
            "raw": "'ember-debug'",
            "value": "ember-debug",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 67,
          "end": 70,
          "decorators": [],
          "name": "has",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
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
  "end": 37,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 27,
        "raw": "\"./m\"",
        "value": "./m",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "hello",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "hello",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 37,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 29,
        "end": 36,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 29,
          "end": 34,
          "decorators": [],
          "name": "hello",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
