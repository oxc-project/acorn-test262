stringEnumInElementAccess01.ts
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
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 49,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 20,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 17,
              "end": 20,
              "raw": "\"a\"",
              "value": "a"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 26,
            "end": 33,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 30,
              "end": 33,
              "raw": "\"b\"",
              "value": "b"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 39,
            "end": 46,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 43,
              "end": 46,
              "raw": "\"c\"",
              "value": "c"
            }
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
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 51,
      "end": 115,
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
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 81,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 75,
                "end": 81
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 87,
            "end": 97,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 96,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 90,
                "end": 96
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 102,
            "end": 113,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 103,
              "end": 112,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 105,
                "end": 112
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 65,
        "decorators": [],
        "name": "Item",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 141,
            "decorators": [],
            "name": "item",
            "optional": false,
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
                  "decorators": [],
                  "name": "Item",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 161,
            "decorators": [],
            "name": "e",
            "optional": false,
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
                  "decorators": [],
                  "name": "E",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 169,
            "end": 199,
            "decorators": [],
            "name": "snb",
            "optional": false,
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
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 202,
            "end": 209,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 202,
              "end": 206,
              "decorators": [],
              "name": "item",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 207,
              "end": 208,
              "decorators": [],
              "name": "e",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
