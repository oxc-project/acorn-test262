__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 179,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 16,
      "expression": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "decorators": [],
        "name": "modObj",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 59,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 58,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 58,
            "decorators": [],
            "name": "modObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 58,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 39,
                "end": 58,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 39,
                    "end": 47,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 39,
                      "end": 47,
                      "left": {
                        "type": "Identifier",
                        "start": 39,
                        "end": 45,
                        "decorators": [],
                        "name": "modObj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 46,
                        "end": 47,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 50,
                    "end": 58,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 50,
                      "end": 58,
                      "left": {
                        "type": "Identifier",
                        "start": 50,
                        "end": 56,
                        "decorators": [],
                        "name": "modObj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 57,
                        "end": 58,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": null
                  }
                ]
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
      "type": "TSModuleDeclaration",
      "start": 60,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 84,
        "decorators": [],
        "name": "modObj",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 85,
        "end": 179,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 91,
            "end": 127,
            "id": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 103,
              "end": 127,
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 105,
                  "end": 114,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 113,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 109,
                      "end": 113
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 115,
                  "end": 125,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 116,
                    "end": 124,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 118,
                      "end": 124
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 132,
            "end": 177,
            "id": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 144,
              "end": 177,
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 146,
                  "end": 164,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 147,
                      "end": 156,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 148,
                        "end": 156,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 150,
                          "end": 156
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 157,
                    "end": 163,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 159,
                      "end": 163
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 165,
                  "end": 175,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 166,
                    "end": 174,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 168,
                      "end": 174
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "namespace",
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
  "end": 43,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
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
            "name": "mod",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 28,
        "value": "./mod",
        "raw": "\"./mod\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 30,
      "end": 36,
      "expression": {
        "type": "MemberExpression",
        "start": 30,
        "end": 35,
        "object": {
          "type": "Identifier",
          "start": 30,
          "end": 33,
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 34,
          "end": 35,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 37,
      "end": 43,
      "expression": {
        "type": "MemberExpression",
        "start": 37,
        "end": 42,
        "object": {
          "type": "Identifier",
          "start": 37,
          "end": 40,
          "decorators": [],
          "name": "mod",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 41,
          "end": 42,
          "decorators": [],
          "name": "b",
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
