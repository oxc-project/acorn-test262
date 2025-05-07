__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 138,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 98,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 98,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 44,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 19,
              "end": 34,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 19,
                "end": 25,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 26,
                "end": 34,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 43,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 37,
                "end": 43
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 49,
            "end": 69,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 50,
                "end": 59,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 51,
                  "end": 59,
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 53,
                    "end": 59
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 68,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 62,
                "end": 68
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 74,
            "end": 96,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 74,
              "end": 87,
              "raw": "\"__@iterator\"",
              "value": "__@iterator",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 95,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 89,
                "end": 95
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
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 100,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 108,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 108,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 108,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 107,
                "end": 108,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 108,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "type": "VariableDeclaration",
      "start": 110,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 137,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 116,
            "decorators": [],
            "name": "it",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 119,
            "end": 137,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 121,
              "end": 136,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 121,
                "end": 127,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 128,
                "end": 136,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
