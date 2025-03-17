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
        "name": "mergeStringLists",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 84,
          "end": 104,
          "argument": {
            "type": "Identifier",
            "start": 87,
            "end": 94,
            "name": "strings",
            "typeAnnotation": null,
            "decorators": [],
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
          },
          "value": null
        }
      ],
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 121,
                  "end": 124,
                  "id": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 124,
                    "name": "str",
                    "typeAnnotation": null,
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
            "right": {
              "type": "Identifier",
              "start": 128,
              "end": 135,
              "name": "strings",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "EmptyStatement",
              "start": 136,
              "end": 137
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
