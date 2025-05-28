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
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 83,
        "decorators": [],
        "name": "mergeStringLists",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 84,
          "end": 104,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 87,
            "end": 94,
            "decorators": [],
            "name": "strings",
            "optional": false,
            "typeAnnotation": null
          },
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
          },
          "value": null
        }
      ],
      "returnType": null,
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
            "left": {
              "type": "VariableDeclaration",
              "start": 117,
              "end": 124,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 121,
                  "end": 124,
                  "id": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 124,
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 128,
              "end": 135,
              "decorators": [],
              "name": "strings",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "EmptyStatement",
              "start": 136,
              "end": 137
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
