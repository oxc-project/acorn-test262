__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "$",
        "optional": false,
        "typeAnnotation": null,
        "start": 19,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "selector",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 31,
              "end": 37
            },
            "start": 29,
            "end": 37
          },
          "start": 21,
          "end": 37
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "$",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "typeArguments": null,
          "start": 40,
          "end": 41
        },
        "start": 38,
        "end": 41
      },
      "body": null,
      "expression": false,
      "start": 2,
      "end": 42
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "$",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 58
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "addClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 75
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "className",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 87,
                    "end": 93
                  },
                  "start": 85,
                  "end": 93
                },
                "start": 76,
                "end": 93
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 97
                },
                "typeArguments": null,
                "start": 96,
                "end": 97
              },
              "start": 94,
              "end": 97
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 67,
            "end": 98
          }
        ],
        "start": 59,
        "end": 102
      },
      "declare": false,
      "start": 47,
      "end": 102
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "$",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 116
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
                "name": "AjaxSettings",
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 152
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 153,
                "end": 160
              },
              "declare": false,
              "start": 130,
              "end": 160
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 123,
            "end": 160
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ajax",
                "optional": false,
                "typeAnnotation": null,
                "start": 181,
                "end": 185
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AjaxSettings",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 195,
                        "end": 207
                      },
                      "typeArguments": null,
                      "start": 195,
                      "end": 207
                    },
                    "start": 193,
                    "end": 207
                  },
                  "start": 186,
                  "end": 207
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 209,
                "end": 212
              },
              "expression": false,
              "start": 172,
              "end": 212
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 165,
            "end": 212
          }
        ],
        "start": 117,
        "end": 216
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 105,
      "end": 216
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "it",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 227,
                  "end": 228
                },
                "typeArguments": null,
                "start": 227,
                "end": 228
              },
              "start": 225,
              "end": 228
            },
            "start": 223,
            "end": 228
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 232
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": ".foo",
                    "raw": "'.foo'",
                    "start": 233,
                    "end": 239
                  }
                ],
                "optional": false,
                "start": 231,
                "end": 240
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "addClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 249
              },
              "optional": false,
              "computed": false,
              "start": 231,
              "end": 249
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "bar",
                "raw": "'bar'",
                "start": 250,
                "end": 255
              }
            ],
            "optional": false,
            "start": 231,
            "end": 256
          },
          "definite": false,
          "start": 223,
          "end": 256
        }
      ],
      "declare": false,
      "start": 219,
      "end": 257
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 2,
  "end": 257
}
```
