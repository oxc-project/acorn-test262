__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mergeStringLists",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 83
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "strings",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 94
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 96,
                "end": 102
              },
              "start": 96,
              "end": 104
            },
            "start": 94,
            "end": 104
          },
          "value": null,
          "start": 84,
          "end": 104
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 121,
                    "end": 124
                  },
                  "init": null,
                  "definite": false,
                  "start": 121,
                  "end": 124
                }
              ],
              "declare": false,
              "start": 117,
              "end": 124
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "strings",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 135
            },
            "body": {
              "type": "EmptyStatement",
              "start": 136,
              "end": 137
            },
            "start": 112,
            "end": 137
          }
        ],
        "start": 106,
        "end": 139
      },
      "expression": false,
      "start": 56,
      "end": 139
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 139
}
```
