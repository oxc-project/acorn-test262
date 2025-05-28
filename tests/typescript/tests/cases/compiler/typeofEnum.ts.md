__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 25,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 25,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 15,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 15,
              "decorators": [],
              "name": "e1",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 21,
            "end": 23,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 23,
              "decorators": [],
              "name": "e2",
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
      "start": 27,
      "end": 44,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 43,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 43,
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 43,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 35,
                "end": 43,
                "exprName": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 43,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 45,
      "end": 51,
      "expression": {
        "type": "MemberExpression",
        "start": 45,
        "end": 50,
        "object": {
          "type": "Identifier",
          "start": 45,
          "end": 47,
          "decorators": [],
          "name": "e1",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 48,
          "end": 50,
          "decorators": [],
          "name": "e1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
