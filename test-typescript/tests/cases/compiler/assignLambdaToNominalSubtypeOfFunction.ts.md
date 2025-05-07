__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 157,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 61,
      "body": {
        "type": "TSInterfaceBody",
        "start": 43,
        "end": 61,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 49,
            "end": 59,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 58,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 52,
                "end": 58
              }
            }
          }
        ]
      },
      "declare": false,
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 25,
        "decorators": [],
        "name": "IResultCallback",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 63,
      "end": 99,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 96,
        "end": 99,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 74,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 75,
          "end": 94,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 77,
            "end": 94,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 79,
              "end": 94,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 79,
                "end": 94,
                "decorators": [],
                "name": "IResultCallback",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 101,
      "end": 120,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 101,
        "end": 119,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 104,
            "end": 118,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 114,
              "end": 118,
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 105,
                "end": 106,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 108,
                "end": 109,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 101,
          "end": 103,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 121,
      "end": 157,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 121,
        "end": 157,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 124,
            "end": 156,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 140,
              "end": 156,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 142,
                  "end": 154,
                  "argument": {
                    "type": "Literal",
                    "start": 149,
                    "end": 153,
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
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 134,
                "end": 135,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 137,
                "end": 138,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 121,
          "end": 123,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
