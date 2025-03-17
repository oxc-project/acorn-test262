__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 211,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 13,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 13,
            "end": 14,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 17,
            "end": 20,
            "value": "a",
            "raw": "\"a\""
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 26,
          "end": 33,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 27,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 30,
            "end": 33,
            "value": "b",
            "raw": "\"b\""
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 39,
          "end": 46,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 43,
            "end": 46,
            "value": "c",
            "raw": "\"c\""
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 49,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 20,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 17,
              "end": 20,
              "value": "a",
              "raw": "\"a\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 26,
            "end": 33,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 30,
              "end": 33,
              "value": "b",
              "raw": "\"b\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 39,
            "end": 46,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 43,
              "end": 46,
              "value": "c",
              "raw": "\"c\""
            },
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 51,
      "end": 115,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 65,
        "name": "Item",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 66,
        "end": 115,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 72,
            "end": 82,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 81,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 75,
                "end": 81
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 87,
            "end": 97,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 96,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 90,
                "end": 96
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 102,
            "end": 113,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 103,
              "end": 112,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 105,
                "end": 112
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 117,
      "end": 142,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 141,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 141,
            "name": "item",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 141,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 137,
                "end": 141,
                "typeName": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 141,
                  "name": "Item",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 143,
      "end": 162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 161,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 161,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 158,
              "end": 161,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 160,
                "end": 161,
                "typeName": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
                  "name": "E",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 163,
      "end": 210,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 169,
          "end": 209,
          "id": {
            "type": "Identifier",
            "start": 169,
            "end": 199,
            "name": "snb",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 199,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 174,
                "end": 199,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 174,
                    "end": 180
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 183,
                    "end": 189
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 192,
                    "end": 199
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 202,
            "end": 209,
            "object": {
              "type": "Identifier",
              "start": 202,
              "end": 206,
              "name": "item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 207,
              "end": 208,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
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
