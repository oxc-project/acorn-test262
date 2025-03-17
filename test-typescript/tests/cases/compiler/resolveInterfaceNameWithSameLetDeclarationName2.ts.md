__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 76,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 1,
      "end": 18,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 14,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 18,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 19,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 32,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 33,
        "end": 36,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 55,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 55,
            "name": "bar",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 55,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 46,
                "end": 55,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 46,
                    "end": 49,
                    "typeName": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 49,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 52,
                    "end": 55,
                    "typeName": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 55,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 75,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 75,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 66,
                "end": 75,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 66,
                    "end": 69,
                    "typeName": {
                      "type": "Identifier",
                      "start": 66,
                      "end": 69,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 72,
                    "end": 75,
                    "typeName": {
                      "type": "Identifier",
                      "start": 72,
                      "end": 75,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
