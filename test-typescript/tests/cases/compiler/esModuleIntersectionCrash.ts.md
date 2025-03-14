mod.d.ts
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
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 59,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 58,
          "definite": false,
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
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 46,
                        "end": 47,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
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
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 57,
                        "end": 58,
                        "decorators": [],
                        "name": "B",
                        "optional": false
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 60,
      "end": 179,
      "body": {
        "type": "TSModuleBlock",
        "start": 85,
        "end": 179,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 91,
            "end": 127,
            "body": {
              "type": "TSInterfaceBody",
              "start": 103,
              "end": 127,
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 105,
                  "end": 114,
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
                  "key": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 116,
                    "end": 124,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 118,
                      "end": 124
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 132,
            "end": 177,
            "body": {
              "type": "TSInterfaceBody",
              "start": 144,
              "end": 177,
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 146,
                  "end": 164,
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
                  "key": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 166,
                    "end": 174,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 168,
                      "end": 174
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 84,
        "decorators": [],
        "name": "modObj",
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "module"
}
```
idx.ts
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 28,
        "raw": "\"./mod\"",
        "value": "./mod"
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
            "name": "mod",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 30,
      "end": 36,
      "expression": {
        "type": "MemberExpression",
        "start": 30,
        "end": 35,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 30,
          "end": 33,
          "decorators": [],
          "name": "mod",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 34,
          "end": 35,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 37,
      "end": 43,
      "expression": {
        "type": "MemberExpression",
        "start": 37,
        "end": 42,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 37,
          "end": 40,
          "decorators": [],
          "name": "mod",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 41,
          "end": 42,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```
