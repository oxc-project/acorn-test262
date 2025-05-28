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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 22,
        "value": "*.foo",
        "raw": "\"*.foo\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 67,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 65,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 34,
              "end": 65,
              "id": {
                "type": "Identifier",
                "start": 44,
                "end": 48,
                "decorators": [],
                "name": "OhNo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 49,
                "end": 65,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 51,
                    "end": 63,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 55,
                      "decorators": [],
                      "name": "star",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 55,
                      "end": 63,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 57,
                        "end": 63
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 22,
        "value": "a.foo",
        "raw": "\"a.foo\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 64,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 62,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 34,
              "end": 62,
              "id": {
                "type": "Identifier",
                "start": 44,
                "end": 48,
                "decorators": [],
                "name": "OhNo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 49,
                "end": 62,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 51,
                    "end": 60,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 52,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 52,
                      "end": 60,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 54,
                        "end": 60
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "ImportDeclaration",
      "start": 65,
      "end": 93,
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
          "local": {
            "type": "Identifier",
            "start": 74,
            "end": 78,
            "decorators": [],
            "name": "OhNo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 86,
        "end": 93,
        "value": "b.foo",
        "raw": "\"b.foo\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 117,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 116,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 116,
                  "decorators": [],
                  "name": "OhNo",
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
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 118,
      "end": 124,
      "expression": {
        "type": "MemberExpression",
        "start": 118,
        "end": 124,
        "object": {
          "type": "Identifier",
          "start": 118,
          "end": 122,
          "decorators": [],
          "name": "ohno",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 123,
          "end": 124,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
