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
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "static",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 67,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 66,
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
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 58,
            "end": 66,
            "object": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 60,
              "end": 66,
              "decorators": [],
              "name": "static",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
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
