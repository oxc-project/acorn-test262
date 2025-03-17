__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 68,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 13,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": "use strict"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 14,
      "end": 35,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 27,
          "end": 33,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 33,
            "name": "static",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 21,
        "end": 35,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 27,
            "end": 33,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 33,
              "name": "static",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
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
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 55,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 55,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 47,
                "end": 55,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 47,
                  "end": 55,
                  "left": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 48,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 55,
                    "name": "static",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 58,
            "end": 66,
            "object": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 60,
              "end": 66,
              "name": "static",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
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
