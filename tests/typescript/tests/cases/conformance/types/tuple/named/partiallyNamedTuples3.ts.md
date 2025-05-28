__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 123,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 76,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 75,
            "decorators": [],
            "name": "tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 75,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 21,
                "end": 75,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 22,
                    "end": 28
                  },
                  {
                    "type": "TSNamedTupleMember",
                    "start": 30,
                    "end": 42,
                    "label": {
                      "type": "Identifier",
                      "start": 30,
                      "end": 34,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 36,
                      "end": 42
                    },
                    "optional": false
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 44,
                    "end": 51
                  },
                  {
                    "type": "TSNamedTupleMember",
                    "start": 53,
                    "end": 66,
                    "label": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 58,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 60,
                      "end": 66
                    },
                    "optional": false
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 68,
                    "end": 74
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 78,
      "end": 123,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 122,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 90,
            "decorators": [],
            "name": "output",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 93,
            "end": 122,
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 94,
              "end": 111,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 95,
                  "end": 102,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 102,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "start": 107,
                "end": 111,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
              "id": null,
              "generator": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 113,
                "end": 121,
                "argument": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 121,
                  "decorators": [],
                  "name": "tuple",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
