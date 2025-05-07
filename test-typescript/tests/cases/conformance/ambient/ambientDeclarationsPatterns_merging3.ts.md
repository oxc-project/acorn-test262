__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 68,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 67,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 67,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 65,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 34,
              "end": 65,
              "body": {
                "type": "TSInterfaceBody",
                "start": 49,
                "end": 65,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 51,
                    "end": 63,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 55,
                      "decorators": [],
                      "name": "star",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 55,
                      "end": 63,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 57,
                        "end": 63
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 44,
                "end": 48,
                "decorators": [],
                "name": "OhNo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 22,
        "raw": "\"*.foo\"",
        "value": "*.foo",
        "regex": null,
        "bigint": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 133,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 64,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 64,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 62,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 34,
              "end": 62,
              "body": {
                "type": "TSInterfaceBody",
                "start": 49,
                "end": 62,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 51,
                    "end": 60,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 52,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 52,
                      "end": 60,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 54,
                        "end": 60
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 44,
                "end": 48,
                "decorators": [],
                "name": "OhNo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 22,
        "raw": "\"a.foo\"",
        "value": "a.foo",
        "regex": null,
        "bigint": null
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 65,
      "end": 93,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 86,
        "end": 93,
        "raw": "\"b.foo\"",
        "value": "b.foo",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 74,
          "end": 78,
          "imported": {
            "type": "Identifier",
            "start": 74,
            "end": 78,
            "decorators": [],
            "name": "OhNo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 74,
            "end": 78,
            "decorators": [],
            "name": "OhNo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 117,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 116,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 116,
            "decorators": [],
            "name": "ohno",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 116,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 112,
                "end": 116,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 116,
                  "decorators": [],
                  "name": "OhNo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 118,
      "end": 124,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 118,
        "end": 124,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 118,
          "end": 122,
          "decorators": [],
          "name": "ohno",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 123,
          "end": 124,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
