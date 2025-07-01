__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConstFooEnum",
          "optional": false,
          "typeAnnotation": null,
          "start": 18,
          "end": 30
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Some",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 41
              },
              "initializer": null,
              "computed": false,
              "start": 37,
              "end": 41
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Values",
                "optional": false,
                "typeAnnotation": null,
                "start": 47,
                "end": 53
              },
              "initializer": null,
              "computed": false,
              "start": 47,
              "end": 53
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Here",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 63
              },
              "initializer": null,
              "computed": false,
              "start": 59,
              "end": 63
            }
          ],
          "start": 31,
          "end": 65
        },
        "const": true,
        "declare": false,
        "start": 7,
        "end": 65
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 65
    },
    {
      "type": "EmptyStatement",
      "start": 65,
      "end": 66
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooFunc",
          "optional": false,
          "typeAnnotation": null,
          "start": 83,
          "end": 90
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 94,
            "end": 98
          },
          "start": 92,
          "end": 98
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 99,
          "end": 116
        },
        "expression": false,
        "start": 74,
        "end": 116
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 67,
      "end": 116
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 116
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 15
          },
          "start": 7,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./foo",
        "raw": "\"./foo\"",
        "start": 21,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 29
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "check",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 45
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 52
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ConstFooEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 65
                },
                "start": 49,
                "end": 65
              },
              "typeArguments": null,
              "start": 49,
              "end": 65
            },
            "start": 47,
            "end": 65
          },
          "start": 46,
          "end": 65
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 68,
          "end": 72
        },
        "start": 66,
        "end": 72
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 86
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 99,
                      "end": 102
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ConstFooEnum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 103,
                      "end": 115
                    },
                    "optional": false,
                    "computed": false,
                    "start": 99,
                    "end": 115
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Some",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 116,
                    "end": 120
                  },
                  "optional": false,
                  "computed": false,
                  "start": 99,
                  "end": 120
                },
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 128,
                    "end": 134
                  }
                ],
                "start": 94,
                "end": 134
              }
            ],
            "start": 77,
            "end": 138
          }
        ],
        "start": 73,
        "end": 140
      },
      "expression": false,
      "start": 31,
      "end": 140
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 140
}
```
