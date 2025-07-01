__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "modObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 15
      },
      "start": 0,
      "end": 16
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "modObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "modObj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 39,
                        "end": 45
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 46,
                        "end": 47
                      },
                      "start": 39,
                      "end": 47
                    },
                    "typeArguments": null,
                    "start": 39,
                    "end": 47
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "modObj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 50,
                        "end": 56
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 57,
                        "end": 58
                      },
                      "start": 50,
                      "end": 58
                    },
                    "typeArguments": null,
                    "start": 50,
                    "end": 58
                  }
                ],
                "start": 39,
                "end": 58
              },
              "start": 37,
              "end": 58
            },
            "start": 31,
            "end": 58
          },
          "init": null,
          "definite": false,
          "start": 31,
          "end": 58
        }
      ],
      "declare": true,
      "start": 17,
      "end": 59
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "modObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 84
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 102
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 109,
                      "end": 113
                    },
                    "start": 107,
                    "end": 113
                  },
                  "start": 105,
                  "end": 114
                },
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
                    "start": 115,
                    "end": 116
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 118,
                      "end": 124
                    },
                    "start": 116,
                    "end": 124
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 115,
                  "end": 125
                }
              ],
              "start": 103,
              "end": 127
            },
            "declare": false,
            "start": 91,
            "end": 127
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 143
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
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
                          "type": "TSStringKeyword",
                          "start": 150,
                          "end": 156
                        },
                        "start": 148,
                        "end": 156
                      },
                      "start": 147,
                      "end": 156
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 159,
                      "end": 163
                    },
                    "start": 157,
                    "end": 163
                  },
                  "start": 146,
                  "end": 164
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 166
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 168,
                      "end": 174
                    },
                    "start": 166,
                    "end": 174
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 165,
                  "end": 175
                }
              ],
              "start": 144,
              "end": 177
            },
            "declare": false,
            "start": 132,
            "end": 177
          }
        ],
        "start": 85,
        "end": 179
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 60,
      "end": 179
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 179
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
            "name": "mod",
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
        "value": "./mod",
        "raw": "\"./mod\"",
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null,
          "start": 30,
          "end": 33
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 34,
          "end": 35
        },
        "optional": false,
        "computed": false,
        "start": 30,
        "end": 35
      },
      "directive": null,
      "start": 30,
      "end": 36
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null,
          "start": 37,
          "end": 40
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 41,
          "end": 42
        },
        "optional": false,
        "computed": false,
        "start": 37,
        "end": 42
      },
      "directive": null,
      "start": 37,
      "end": 43
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 43
}
```
