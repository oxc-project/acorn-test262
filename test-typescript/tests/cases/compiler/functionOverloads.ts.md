__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 121,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 23,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 14,
        "end": 22,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 16,
          "end": 22
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 24,
      "end": 58,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 36,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 37,
          "end": 48,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 40,
            "end": 48,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 42,
              "end": 48
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 49,
        "end": 57,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 51,
          "end": 57
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 59,
      "end": 104,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 91,
        "end": 104,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 93,
            "end": 102,
            "argument": {
              "type": "Literal",
              "start": 100,
              "end": 102,
              "raw": "\"\"",
              "value": "",
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
        "start": 68,
        "end": 71,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 72,
          "end": 84,
          "decorators": [],
          "name": "bar",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 76,
            "end": 84,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 78,
              "end": 84
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 85,
        "end": 90,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 87,
          "end": 90
        }
      },
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 104,
      "end": 105
    },
    {
      "type": "VariableDeclaration",
      "start": 106,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 120,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 114,
            "end": 120,
            "arguments": [
              {
                "type": "Literal",
                "start": 118,
                "end": 119,
                "raw": "5",
                "value": 5,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 114,
              "end": 117,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
