__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 22,
                    "end": 28
                  },
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 30,
                      "end": 34
                    },
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 36,
                      "end": 42
                    },
                    "optional": false,
                    "start": 30,
                    "end": 42
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 44,
                    "end": 51
                  },
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 53,
                      "end": 58
                    },
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 60,
                      "end": 66
                    },
                    "optional": false,
                    "start": 53,
                    "end": 66
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 68,
                    "end": 74
                  }
                ],
                "start": 21,
                "end": 75
              },
              "start": 19,
              "end": 75
            },
            "start": 14,
            "end": 75
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 75
        }
      ],
      "declare": true,
      "start": 0,
      "end": 76
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "output",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 90
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 98,
                    "end": 102
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 95,
                  "end": 102
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 111
              },
              "id": null,
              "generator": false,
              "start": 94,
              "end": 111
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tuple",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 121
                },
                "start": 113,
                "end": 121
              }
            ],
            "optional": false,
            "start": 93,
            "end": 122
          },
          "definite": false,
          "start": 84,
          "end": 122
        }
      ],
      "declare": false,
      "start": 78,
      "end": 123
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 123
}
```
