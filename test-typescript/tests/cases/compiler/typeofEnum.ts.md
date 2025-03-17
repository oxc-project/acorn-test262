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
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 25,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 15,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 15,
              "decorators": [],
              "name": "e1",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 21,
            "end": 23,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 23,
              "decorators": [],
              "name": "e2",
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
        "end": 6,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 43,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 45,
      "end": 51,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 45,
        "end": 50,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 45,
          "end": 47,
          "decorators": [],
          "name": "e1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 48,
          "end": 50,
          "decorators": [],
          "name": "e1",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
