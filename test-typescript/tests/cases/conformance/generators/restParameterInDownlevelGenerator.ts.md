__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 139,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 56,
      "end": 139,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 106,
        "end": 139,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 112,
            "end": 137,
            "await": false,
            "body": {
              "type": "EmptyStatement",
              "start": 136,
              "end": 137
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 117,
              "end": 124,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 121,
                  "end": 124,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 124,
                    "decorators": [],
                    "name": "str",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "right": {
              "type": "Identifier",
              "start": 128,
              "end": 135,
              "decorators": [],
              "name": "strings",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 83,
        "decorators": [],
        "name": "mergeStringLists",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 84,
          "end": 104,
          "argument": {
            "type": "Identifier",
            "start": 87,
            "end": 94,
            "decorators": [],
            "name": "strings",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 94,
            "end": 104,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 96,
              "end": 104,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 96,
                "end": 102
              }
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
