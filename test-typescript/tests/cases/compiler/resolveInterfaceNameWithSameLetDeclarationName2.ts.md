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
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 18,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 14,
        "decorators": [],
        "name": "foo",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 19,
      "end": 36,
      "body": {
        "type": "TSInterfaceBody",
        "start": 33,
        "end": 36,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 32,
        "decorators": [],
        "name": "bar",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 55,
            "decorators": [],
            "name": "bar",
            "optional": false,
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
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 52,
                    "end": 55,
                    "typeName": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 55,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 75,
            "decorators": [],
            "name": "foo",
            "optional": false,
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
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 72,
                    "end": 75,
                    "typeName": {
                      "type": "Identifier",
                      "start": 72,
                      "end": 75,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
