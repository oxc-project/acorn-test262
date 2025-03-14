unionTypeWithIndexedLiteralType.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 117,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 26,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 26,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 14,
            "end": 24,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 17,
                "end": 23
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 27,
      "end": 64,
      "body": {
        "type": "TSInterfaceBody",
        "start": 41,
        "end": 64,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 43,
            "end": 62,
            "parameters": [
              {
                "type": "Identifier",
                "start": 44,
                "end": 57,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 49,
                  "end": 57,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 51,
                    "end": 57
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 61,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 60,
                "end": 61,
                "typeName": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 40,
        "decorators": [],
        "name": "Idx",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 65,
      "end": 90,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 71,
        "decorators": [],
        "name": "U",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 74,
        "end": 89,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 74,
            "end": 77,
            "typeName": {
              "type": "Identifier",
              "start": 74,
              "end": 77,
              "decorators": [],
              "name": "Idx",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 80,
            "end": 81,
            "typeName": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "I",
              "optional": false
            }
          },
          {
            "type": "TSLiteralType",
            "start": 84,
            "end": 89,
            "literal": {
              "type": "Literal",
              "start": 84,
              "end": 89,
              "raw": "\"lit\"",
              "value": "lit"
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 91,
      "end": 117,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 116,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 97,
            "end": 101,
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 101,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 100,
                "end": 101,
                "typeName": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 101,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 104,
            "end": 116,
            "properties": [
              {
                "type": "Property",
                "start": 106,
                "end": 114,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 107,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 109,
                  "end": 114,
                  "raw": "\"lit\"",
                  "value": "lit"
                }
              }
            ]
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
