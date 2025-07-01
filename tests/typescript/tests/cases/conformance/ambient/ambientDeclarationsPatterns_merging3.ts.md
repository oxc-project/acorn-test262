__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "*.foo",
        "raw": "\"*.foo\"",
        "start": 15,
        "end": 22
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "OhNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 48
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "star",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 51,
                      "end": 55
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 57,
                        "end": 63
                      },
                      "start": 55,
                      "end": 63
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 51,
                    "end": 63
                  }
                ],
                "start": 49,
                "end": 65
              },
              "declare": false,
              "start": 34,
              "end": 65
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 27,
            "end": 65
          }
        ],
        "start": 23,
        "end": 67
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 67
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 68
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "a.foo",
        "raw": "\"a.foo\"",
        "start": 15,
        "end": 22
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "OhNo",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 48
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 51,
                      "end": 52
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 54,
                        "end": 60
                      },
                      "start": 52,
                      "end": 60
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 51,
                    "end": 60
                  }
                ],
                "start": 49,
                "end": 62
              },
              "declare": false,
              "start": 34,
              "end": 62
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 27,
            "end": 62
          }
        ],
        "start": 23,
        "end": 64
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 64
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "OhNo",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 78
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "OhNo",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 78
          },
          "importKind": "value",
          "start": 74,
          "end": 78
        }
      ],
      "source": {
        "type": "Literal",
        "value": "b.foo",
        "raw": "\"b.foo\"",
        "start": 86,
        "end": 93
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 65,
      "end": 93
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ohno",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OhNo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 112,
                  "end": 116
                },
                "typeArguments": null,
                "start": 112,
                "end": 116
              },
              "start": 110,
              "end": 116
            },
            "start": 106,
            "end": 116
          },
          "init": null,
          "definite": false,
          "start": 106,
          "end": 116
        }
      ],
      "declare": true,
      "start": 94,
      "end": 117
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ohno",
          "optional": false,
          "typeAnnotation": null,
          "start": 118,
          "end": 122
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 123,
          "end": 124
        },
        "optional": false,
        "computed": false,
        "start": 118,
        "end": 124
      },
      "directive": null,
      "start": 118,
      "end": 124
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 133
}
```
