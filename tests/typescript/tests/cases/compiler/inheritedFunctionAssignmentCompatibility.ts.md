__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 143,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 25,
        "decorators": [],
        "name": "IResultCallback",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 34,
          "end": 42,
          "expression": {
            "type": "Identifier",
            "start": 34,
            "end": 42,
            "decorators": [],
            "name": "Function",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 43,
        "end": 46,
        "body": []
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 48,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 59,
        "decorators": [],
        "name": "fn",
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
          "start": 60,
          "end": 79,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 62,
            "end": 79,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 64,
              "end": 79,
              "typeName": {
                "type": "Identifier",
                "start": 64,
                "end": 79,
                "decorators": [],
                "name": "IResultCallback",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 81,
        "end": 84,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 86,
      "end": 105,
      "expression": {
        "type": "CallExpression",
        "start": 86,
        "end": 104,
        "callee": {
          "type": "Identifier",
          "start": 86,
          "end": 88,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 89,
            "end": 103,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 90,
                "end": 91,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 93,
                "end": 94,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "start": 99,
              "end": 103,
              "value": true,
              "raw": "true"
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 106,
      "end": 142,
      "expression": {
        "type": "CallExpression",
        "start": 106,
        "end": 142,
        "callee": {
          "type": "Identifier",
          "start": 106,
          "end": 108,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 109,
            "end": 141,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 119,
                "end": 120,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 122,
                "end": 123,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 125,
              "end": 141,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 127,
                  "end": 139,
                  "argument": {
                    "type": "Literal",
                    "start": 134,
                    "end": 138,
                    "value": true,
                    "raw": "true"
                  }
                }
              ]
            },
            "expression": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
