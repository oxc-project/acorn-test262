__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 2,
  "end": 255,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 2,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "name": "$",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 37,
          "name": "selector",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 37,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 31,
              "end": 37
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 38,
        "end": 41,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 40,
          "end": 41,
          "typeName": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "name": "$",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 47,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "name": "$",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 59,
        "end": 102,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 67,
            "end": 98,
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 75,
              "name": "addClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 76,
                "end": 93,
                "name": "className",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 85,
                  "end": 93,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 87,
                    "end": 93
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 97,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 96,
                "end": 97,
                "typeName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "name": "$",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 105,
      "end": 213,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "name": "$",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 114,
        "end": 213,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 120,
            "end": 157,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 127,
              "end": 157,
              "id": {
                "type": "Identifier",
                "start": 137,
                "end": 149,
                "name": "AjaxSettings",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 150,
                "end": 157,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 162,
            "end": 209,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 169,
              "end": 209,
              "id": {
                "type": "Identifier",
                "start": 178,
                "end": 182,
                "name": "ajax",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 183,
                  "end": 204,
                  "name": "options",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 190,
                    "end": 204,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 192,
                      "end": 204,
                      "typeName": {
                        "type": "Identifier",
                        "start": 192,
                        "end": 204,
                        "name": "AjaxSettings",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 206,
                "end": 209,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 216,
      "end": 254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 253,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 225,
            "name": "it",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 222,
              "end": 225,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 224,
                "end": 225,
                "typeName": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 225,
                  "name": "$",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 228,
            "end": 253,
            "callee": {
              "type": "MemberExpression",
              "start": 228,
              "end": 246,
              "object": {
                "type": "CallExpression",
                "start": 228,
                "end": 237,
                "callee": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 229,
                  "name": "$",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 230,
                    "end": 236,
                    "value": ".foo",
                    "raw": "'.foo'"
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 238,
                "end": 246,
                "name": "addClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 247,
                "end": 252,
                "value": "bar",
                "raw": "'bar'"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
