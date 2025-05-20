__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 29,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 15,
        "end": 29,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 26,
          "end": 29,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 25,
          "decorators": [],
          "name": "Decl",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 31,
      "end": 88,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 38,
        "end": 88,
        "body": {
          "type": "TSInterfaceBody",
          "start": 53,
          "end": 88,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 59,
              "end": 70,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 59,
                "end": 61,
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 61,
                "end": 69,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 63,
                  "end": 69
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 75,
              "end": 86,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 75,
                "end": 77,
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 77,
                "end": 85,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 79,
                  "end": 85
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 48,
          "end": 52,
          "decorators": [],
          "name": "Decl",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 90,
      "end": 139,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 97,
        "end": 139,
        "body": {
          "type": "TSModuleBlock",
          "start": 112,
          "end": 139,
          "body": [
            {
              "type": "TSInterfaceDeclaration",
              "start": 118,
              "end": 137,
              "body": {
                "type": "TSInterfaceBody",
                "start": 130,
                "end": 137,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 128,
                "end": 129,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 107,
          "end": 111,
          "decorators": [],
          "name": "Decl",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 111,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 23,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 23,
        "raw": "\"m1\"",
        "value": "m1"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 13,
            "decorators": [],
            "name": "Entity",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 25,
      "end": 34,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 25,
        "end": 33,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 25,
          "end": 31,
          "decorators": [],
          "name": "Entity",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 49,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 49,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 43,
                "end": 49,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 49,
                  "decorators": [],
                  "name": "Entity",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 66,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 66,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 66,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 58,
                "end": 66,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 58,
                  "end": 66,
                  "left": {
                    "type": "Identifier",
                    "start": 58,
                    "end": 64,
                    "decorators": [],
                    "name": "Entity",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 66,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 68,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 88,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 76,
            "end": 88,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 80,
              "end": 86,
              "decorators": [],
              "name": "Entity",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 90,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 111,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 97,
            "decorators": [],
            "name": "sum",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 100,
            "end": 111,
            "operator": "+",
            "left": {
              "type": "MemberExpression",
              "start": 100,
              "end": 104,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 100,
                "end": 101,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 102,
                "end": 104,
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "MemberExpression",
              "start": 107,
              "end": 111,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 107,
                "end": 108,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 109,
                "end": 111,
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
