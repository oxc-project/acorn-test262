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
      "params": [],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 14,
        "end": 22,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 16,
          "end": 22
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 24,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 36,
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
          "type": "Identifier",
          "start": 37,
          "end": 48,
          "name": "bar",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 40,
            "end": 48,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 42,
              "end": 48
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 49,
        "end": 57,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 51,
          "end": 57
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 59,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 71,
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
          "type": "Identifier",
          "start": 72,
          "end": 84,
          "name": "bar",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 76,
            "end": 84,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 78,
              "end": 84
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
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
              "value": "",
              "raw": "\"\""
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 85,
        "end": 90,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 87,
          "end": 90
        }
      }
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
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 114,
            "end": 120,
            "callee": {
              "type": "Identifier",
              "start": 114,
              "end": 117,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 118,
                "end": 119,
                "value": 5,
                "raw": "5"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
