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
      "end": 15,
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
        "end": 15,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 9,
            "end": 10,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 12,
            "end": 13,
            "id": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "B",
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
      "start": 16,
      "end": 30,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 29,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 29,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
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
      "type": "VariableDeclaration",
      "start": 31,
      "end": 54,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 53,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 49,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 49,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 38,
                "end": 49,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 38,
                    "end": 39,
                    "typeName": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 39,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 42,
                    "end": 49
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
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
