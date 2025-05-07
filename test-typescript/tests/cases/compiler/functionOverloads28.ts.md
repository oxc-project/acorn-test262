__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 22,
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
        "end": 21,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 15,
          "end": 21
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 23,
      "end": 55,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 36,
          "end": 46,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 39,
            "end": 46,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 40,
              "end": 46
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 47,
        "end": 54,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 48,
          "end": 54
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 56,
      "end": 95,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 82,
        "end": 95,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 84,
            "end": 93,
            "argument": {
              "type": "Literal",
              "start": 91,
              "end": 93,
              "raw": "''",
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
        "start": 65,
        "end": 68,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 69,
          "end": 77,
          "decorators": [],
          "name": "bar",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 73,
            "end": 77,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 74,
              "end": 77
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 78,
        "end": 82,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 79,
          "end": 82
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 96,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 105,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 105,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 105,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 102,
                "end": 105
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 122,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 121,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 112,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 115,
            "end": 121,
            "arguments": [
              {
                "type": "Identifier",
                "start": 119,
                "end": 120,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 115,
              "end": 118,
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
