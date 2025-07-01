__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IResultCallback",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 25
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Function",
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 42
          },
          "typeArguments": null,
          "start": 34,
          "end": 42
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 43,
        "end": 46
      },
      "declare": false,
      "start": 0,
      "end": 46
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 59
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IResultCallback",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 79
              },
              "typeArguments": null,
              "start": 64,
              "end": 79
            },
            "start": 62,
            "end": 79
          },
          "start": 60,
          "end": 79
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 81,
        "end": 84
      },
      "expression": false,
      "start": 48,
      "end": 84
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 86,
          "end": 88
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 91
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 94
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 99,
              "end": 103
            },
            "id": null,
            "generator": false,
            "start": 89,
            "end": 103
          }
        ],
        "optional": false,
        "start": 86,
        "end": 104
      },
      "directive": null,
      "start": 86,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 106,
          "end": 108
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
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
                "start": 119,
                "end": 120
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 123
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
                    "start": 134,
                    "end": 138
                  },
                  "start": 127,
                  "end": 139
                }
              ],
              "start": 125,
              "end": 141
            },
            "expression": false,
            "start": 109,
            "end": 141
          }
        ],
        "optional": false,
        "start": 106,
        "end": 142
      },
      "directive": null,
      "start": 106,
      "end": 142
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 143
}
```
