__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 124,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 75,
            "name": "tuple",
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
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 36,
                      "end": 42
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 30,
                      "end": 34,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 60,
                      "end": 66
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 58,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 78,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 122,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 90,
            "name": "output",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 93,
            "end": 122,
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 94,
              "end": 111,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 95,
                  "end": 102,
                  "argument": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 102,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "body": {
                "type": "Identifier",
                "start": 107,
                "end": 111,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 113,
                "end": 121,
                "argument": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 121,
                  "name": "tuple",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
