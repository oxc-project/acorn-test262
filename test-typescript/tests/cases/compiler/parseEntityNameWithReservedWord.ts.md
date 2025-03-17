__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 19,
      "body": {
        "type": "TSEnumBody",
        "start": 10,
        "end": 19,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 12,
            "end": 17,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 12,
              "end": 17,
              "decorators": [],
              "name": "false",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Bool",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 20,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 52,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 39,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 39,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 29,
                "end": 39,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 29,
                  "end": 39,
                  "left": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 33,
                    "decorators": [],
                    "name": "Bool",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 39,
                    "decorators": [],
                    "name": "false",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 42,
            "end": 52,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 42,
              "end": 46,
              "decorators": [],
              "name": "Bool",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 47,
              "end": 52,
              "decorators": [],
              "name": "false",
              "optional": false,
              "typeAnnotation": null
            }
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
