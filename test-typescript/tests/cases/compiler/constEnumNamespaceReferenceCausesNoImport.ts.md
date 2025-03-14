foo.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 116,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 65,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 65,
        "body": {
          "type": "TSEnumBody",
          "start": 31,
          "end": 65,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 37,
              "end": 41,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 41,
                "decorators": [],
                "name": "Some",
                "optional": false
              }
            },
            {
              "type": "TSEnumMember",
              "start": 47,
              "end": 53,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 47,
                "end": 53,
                "decorators": [],
                "name": "Values",
                "optional": false
              }
            },
            {
              "type": "TSEnumMember",
              "start": 59,
              "end": 63,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 59,
                "end": 63,
                "decorators": [],
                "name": "Here",
                "optional": false
              }
            }
          ]
        },
        "const": true,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 18,
          "end": 30,
          "decorators": [],
          "name": "ConstFooEnum",
          "optional": false
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "EmptyStatement",
      "start": 65,
      "end": 66
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 67,
      "end": 116,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 74,
        "end": 116,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 99,
          "end": 116,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 83,
          "end": 90,
          "decorators": [],
          "name": "fooFunc",
          "optional": false
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 92,
          "end": 98,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 94,
            "end": 98
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 28,
        "raw": "\"./foo\"",
        "value": "./foo"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 15,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 15,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 31,
      "end": 140,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 73,
        "end": 140,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 77,
            "end": 138,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 94,
                "end": 134,
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "start": 128,
                    "end": 134,
                    "label": null
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 99,
                  "end": 120,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 99,
                    "end": 115,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 102,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 103,
                      "end": 115,
                      "decorators": [],
                      "name": "ConstFooEnum",
                      "optional": false
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 120,
                    "decorators": [],
                    "name": "Some",
                    "optional": false
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 45,
        "decorators": [],
        "name": "check",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 46,
          "end": 65,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 47,
            "end": 65,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 49,
              "end": 65,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 49,
                "end": 65,
                "left": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 52,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 65,
                  "decorators": [],
                  "name": "ConstFooEnum",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 66,
        "end": 72,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 68,
          "end": 72
        }
      }
    }
  ],
  "sourceType": "module"
}
```
