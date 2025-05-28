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
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 31,
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
        "body": {
          "type": "BlockStatement",
          "start": 35,
          "end": 38,
          "body": []
        },
        "expression": false
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 39,
      "end": 77,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 46,
        "end": 77,
        "id": {
          "type": "Identifier",
          "start": 55,
          "end": 58,
          "decorators": [],
          "name": "has",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
                "value": true,
                "raw": "true"
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "local": {
            "type": "Identifier",
            "start": 18,
            "end": 21,
            "decorators": [],
            "name": "has",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 34,
        "value": "./c",
        "raw": "\"./c\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 35,
      "end": 62,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 42,
        "end": 62,
        "id": {
          "type": "Identifier",
          "start": 51,
          "end": 56,
          "decorators": [],
          "name": "hello",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 59,
          "end": 62,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "IfStatement",
      "start": 63,
      "end": 118,
      "test": {
        "type": "CallExpression",
        "start": 67,
        "end": 85,
        "callee": {
          "type": "Identifier",
          "start": 67,
          "end": 70,
          "decorators": [],
          "name": "has",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 71,
            "end": 84,
            "value": "ember-debug",
            "raw": "'ember-debug'"
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 87,
        "end": 118,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 93,
            "end": 116,
            "expression": {
              "type": "CallExpression",
              "start": 93,
              "end": 115,
              "callee": {
                "type": "Identifier",
                "start": 93,
                "end": 100,
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 101,
                  "end": 114,
                  "value": "ember-debug",
                  "raw": "'ember-debug'"
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
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
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "hello",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 27,
        "value": "./m",
        "raw": "\"./m\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 37,
      "expression": {
        "type": "CallExpression",
        "start": 29,
        "end": 36,
        "callee": {
          "type": "Identifier",
          "start": 29,
          "end": 34,
          "decorators": [],
          "name": "hello",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
