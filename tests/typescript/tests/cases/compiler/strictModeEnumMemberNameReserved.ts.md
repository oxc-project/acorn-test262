__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 67,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 13,
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "raw": "\"use strict\"",
        "value": "use strict"
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 14,
      "end": 35,
      "body": {
        "type": "TSEnumBody",
        "start": 21,
        "end": 35,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 27,
            "end": 33,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 33,
              "decorators": [],
              "name": "static",
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
        "start": 19,
        "end": 20,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 66,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 55,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 55,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 47,
                "end": 55,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 47,
                  "end": 55,
                  "left": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 48,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 55,
                    "decorators": [],
                    "name": "static",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 58,
            "end": 66,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 60,
              "end": 66,
              "decorators": [],
              "name": "static",
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
