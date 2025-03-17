__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 161,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 15,
      "expression": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 17,
      "end": 161,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 40,
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 41,
        "end": 161,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 47,
            "end": 117,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 54,
              "end": 117,
              "id": {
                "type": "Identifier",
                "start": 59,
                "end": 68,
                "name": "Component",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 68,
                "end": 93,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 69,
                    "end": 76,
                    "name": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSAnyKeyword",
                      "start": 73,
                      "end": 76
                    },
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 78,
                    "end": 84,
                    "name": {
                      "type": "Identifier",
                      "start": 78,
                      "end": 79,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSTypeLiteral",
                      "start": 82,
                      "end": 84,
                      "members": []
                    },
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 86,
                    "end": 92,
                    "name": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 87,
                      "name": "V",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSTypeLiteral",
                      "start": 90,
                      "end": 92,
                      "members": []
                    },
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 96,
                "end": 116,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 98,
                    "end": 103,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 99,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 99,
                      "end": 102,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 101,
                        "end": 102,
                        "typeName": {
                          "type": "Identifier",
                          "start": 101,
                          "end": 102,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 104,
                    "end": 109,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 105,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 105,
                      "end": 108,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 107,
                        "end": 108,
                        "typeName": {
                          "type": "Identifier",
                          "start": 107,
                          "end": 108,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 110,
                    "end": 114,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 111,
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 111,
                      "end": 114,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 113,
                        "end": 114,
                        "typeName": {
                          "type": "Identifier",
                          "start": 113,
                          "end": 114,
                          "name": "V",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 122,
            "end": 159,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 129,
              "end": 159,
              "id": {
                "type": "Identifier",
                "start": 139,
                "end": 152,
                "name": "DOMAttributes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 152,
                "end": 155,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 153,
                    "end": 154,
                    "name": {
                      "type": "Identifier",
                      "start": 153,
                      "end": 154,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "body": {
                "type": "TSInterfaceBody",
                "start": 156,
                "end": 159,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
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
  "end": 134,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 37,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 13,
          "end": 22,
          "imported": {
            "type": "Identifier",
            "start": 13,
            "end": 22,
            "name": "Component",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 13,
            "end": 22,
            "name": "Component",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 30,
        "end": 37,
        "value": "react",
        "raw": "'react'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 38,
      "end": 48,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 50,
      "end": 133,
      "id": {
        "type": "Literal",
        "start": 65,
        "end": 72,
        "value": "react",
        "raw": "'react'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 73,
        "end": 133,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 79,
            "end": 131,
            "id": {
              "type": "Identifier",
              "start": 89,
              "end": 102,
              "name": "DOMAttributes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 102,
              "end": 105,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 103,
                  "end": 104,
                  "name": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 104,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "body": {
              "type": "TSInterfaceBody",
              "start": 106,
              "end": 131,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 116,
                  "end": 125,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 119,
                    "name": "css",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 120,
                    "end": 125,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 122,
                      "end": 125
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
  "end": 108,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 17,
            "name": "Component",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 17,
            "name": "Component",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 31,
        "value": "react",
        "raw": "'react'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 34,
      "end": 108,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 41,
        "end": 108,
        "id": {
          "type": "Identifier",
          "start": 50,
          "end": 57,
          "name": "getComp",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 71,
          "end": 108,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 77,
              "end": 106,
              "argument": {
                "type": "TSAsExpression",
                "start": 84,
                "end": 106,
                "expression": {
                  "type": "TSAsExpression",
                  "start": 84,
                  "end": 93,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 84,
                    "end": 86,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 90,
                    "end": 93
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 97,
                  "end": 106,
                  "typeName": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 106,
                    "name": "Component",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 59,
          "end": 70,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 61,
            "end": 70,
            "typeName": {
              "type": "Identifier",
              "start": 61,
              "end": 70,
              "name": "Component",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 295,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 37,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 16,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 16,
            "name": "getComp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 16,
            "name": "getComp",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 36,
        "value": "./get-comp",
        "raw": "\"./get-comp\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 253,
      "end": 295,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 260,
        "end": 295,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 266,
            "end": 295,
            "id": {
              "type": "Identifier",
              "start": 266,
              "end": 269,
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 272,
              "end": 295,
              "properties": [
                {
                  "type": "Property",
                  "start": 278,
                  "end": 293,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 278,
                    "end": 282,
                    "name": "comp",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "CallExpression",
                    "start": 284,
                    "end": 293,
                    "callee": {
                      "type": "Identifier",
                      "start": 284,
                      "end": 291,
                      "name": "getComp",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 31,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 30,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 29,
        "value": "@emotion/core",
        "raw": "'@emotion/core'"
      },
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
