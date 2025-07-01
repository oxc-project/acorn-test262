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
        "start": 112,
        "end": 113
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
                "start": 137,
                "end": 149
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 150,
                "end": 157
              },
              "declare": false,
              "start": 127,
              "end": 157
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 120,
            "end": 157
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
                "start": 178,
                "end": 182
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
                        "start": 192,
                        "end": 204
                      },
                      "typeArguments": null,
                      "start": 192,
                      "end": 204
                    },
                    "start": 190,
                    "end": 204
                  },
                  "start": 183,
                  "end": 204
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 206,
                "end": 209
              },
              "expression": false,
              "start": 169,
              "end": 209
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 162,
            "end": 209
          }
        ],
        "start": 114,
        "end": 213
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 105,
      "end": 213
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
                  "start": 224,
                  "end": 225
                },
                "typeArguments": null,
                "start": 224,
                "end": 225
              },
              "start": 222,
              "end": 225
            },
            "start": 220,
            "end": 225
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
                  "start": 228,
                  "end": 229
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": ".foo",
                    "raw": "'.foo'",
                    "start": 230,
                    "end": 236
                  }
                ],
                "optional": false,
                "start": 228,
                "end": 237
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "addClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 238,
                "end": 246
              },
              "optional": false,
              "computed": false,
              "start": 228,
              "end": 246
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "bar",
                "raw": "'bar'",
                "start": 247,
                "end": 252
              }
            ],
            "optional": false,
            "start": 228,
            "end": 253
          },
          "definite": false,
          "start": 220,
          "end": 253
        }
      ],
      "declare": false,
      "start": 216,
      "end": 254
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 2,
  "end": 254
}
```
