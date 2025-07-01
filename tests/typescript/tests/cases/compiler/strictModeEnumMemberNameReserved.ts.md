__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 13
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 19,
        "end": 20
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "static",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 33
            },
            "initializer": null,
            "computed": false,
            "start": 27,
            "end": 33
          }
        ],
        "start": 21,
        "end": 35
      },
      "const": false,
      "declare": false,
      "start": 14,
      "end": 35
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 47,
                    "end": 48
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "static",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 49,
                    "end": 55
                  },
                  "start": 47,
                  "end": 55
                },
                "typeArguments": null,
                "start": 47,
                "end": 55
              },
              "start": 45,
              "end": 55
            },
            "start": 43,
            "end": 55
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 59
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "static",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 66
            },
            "optional": false,
            "computed": false,
            "start": 58,
            "end": 66
          },
          "definite": false,
          "start": 43,
          "end": 66
        }
      ],
      "declare": false,
      "start": 37,
      "end": 67
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 67
}
```
