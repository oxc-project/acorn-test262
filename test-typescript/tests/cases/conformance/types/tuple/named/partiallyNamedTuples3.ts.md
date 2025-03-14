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
          "definite": false,
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
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 36,
                      "end": 42
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 30,
                      "end": 34,
                      "decorators": [],
                      "name": "name",
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
                      "decorators": [],
                      "name": "value",
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
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 90,
            "decorators": [],
            "name": "output",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 93,
            "end": 122,
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
                  "optional": false
                }
              }
            ],
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 94,
              "end": 111,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 107,
                "end": 111,
                "decorators": [],
                "name": "args",
                "optional": false
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 95,
                  "end": 102,
                  "argument": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 102,
                    "decorators": [],
                    "name": "args",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false
                }
              ]
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
