__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 123,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 22,
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
        "end": 21,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 15,
          "end": 21
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 23,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
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
          "start": 36,
          "end": 46,
          "name": "bar",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 39,
            "end": 46,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 40,
              "end": 46
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
        "start": 47,
        "end": 54,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 48,
          "end": 54
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 56,
      "end": 95,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 68,
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
          "start": 69,
          "end": 77,
          "name": "bar",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 73,
            "end": 77,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 74,
              "end": 77
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
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
              "value": "",
              "raw": "''"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 78,
        "end": 82,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 79,
          "end": 82
        }
      }
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
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 105,
            "name": "t",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 105,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 102,
                "end": 105
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 112,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 115,
            "end": 121,
            "callee": {
              "type": "Identifier",
              "start": 115,
              "end": 118,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 119,
                "end": 120,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
