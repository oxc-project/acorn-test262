__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 189,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 13,
          "end": 26,
          "argument": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 26,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 18,
              "end": 26,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 18,
                "end": 24
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 29,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 30,
      "end": 36,
      "expression": {
        "type": "CallExpression",
        "start": 30,
        "end": 35,
        "callee": {
          "type": "Identifier",
          "start": 30,
          "end": 33,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 43,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 56,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 57,
          "end": 65,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 58,
            "end": 65,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 59,
              "end": 65
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "RestElement",
          "start": 67,
          "end": 80,
          "argument": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 71,
            "end": 80,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 72,
              "end": 80,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 72,
                "end": 78
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 81,
        "end": 83,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 84,
      "end": 91,
      "expression": {
        "type": "CallExpression",
        "start": 84,
        "end": 90,
        "callee": {
          "type": "Identifier",
          "start": 84,
          "end": 88,
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 114,
      "end": 155,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 127,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 128,
          "end": 137,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 130,
            "end": 137,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 131,
              "end": 137
            }
          },
          "decorators": [],
          "optional": true
        },
        {
          "type": "RestElement",
          "start": 139,
          "end": 152,
          "argument": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 143,
            "end": 152,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 144,
              "end": 152,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 144,
                "end": 150
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 153,
        "end": 155,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 156,
      "end": 163,
      "expression": {
        "type": "CallExpression",
        "start": 156,
        "end": 162,
        "callee": {
          "type": "Identifier",
          "start": 156,
          "end": 160,
          "name": "foo3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
