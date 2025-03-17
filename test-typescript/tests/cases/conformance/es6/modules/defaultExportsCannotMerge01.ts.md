__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 206,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 48,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 15,
        "end": 48,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 28,
          "name": "Decl",
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
          "start": 31,
          "end": 48,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 37,
              "end": 46,
              "argument": {
                "type": "Literal",
                "start": 44,
                "end": 45,
                "value": 0,
                "raw": "0"
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 50,
      "end": 107,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 57,
        "end": 107,
        "id": {
          "type": "Identifier",
          "start": 67,
          "end": 71,
          "name": "Decl",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 72,
          "end": 107,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 78,
              "end": 89,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 78,
                "end": 80,
                "name": "p1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 80,
                "end": 88,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 82,
                  "end": 88
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 94,
              "end": 105,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 94,
                "end": 96,
                "name": "p2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 96,
                "end": 104,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 98,
                  "end": 104
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
      "start": 109,
      "end": 205,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 116,
        "end": 205,
        "id": {
          "type": "Identifier",
          "start": 126,
          "end": 130,
          "name": "Decl",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 131,
          "end": 205,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 137,
              "end": 155,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 144,
                "end": 155,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 148,
                    "end": 154,
                    "id": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 149,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 152,
                      "end": 154,
                      "value": 10,
                      "raw": "10"
                    },
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 160,
              "end": 178,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 167,
                "end": 178,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 171,
                    "end": 177,
                    "id": {
                      "type": "Identifier",
                      "start": 171,
                      "end": 172,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 175,
                      "end": 177,
                      "value": 20,
                      "raw": "20"
                    },
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 184,
              "end": 203,
              "id": {
                "type": "Identifier",
                "start": 194,
                "end": 195,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 196,
                "end": 203,
                "body": []
              },
              "declare": false
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
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
  "end": 88,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 23,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 13,
            "name": "Entity",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 23,
        "value": "m1",
        "raw": "\"m1\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 25,
      "end": 34,
      "expression": {
        "type": "CallExpression",
        "start": 25,
        "end": 33,
        "callee": {
          "type": "Identifier",
          "start": 25,
          "end": 31,
          "name": "Entity",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 49,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 43,
                "end": 49,
                "typeName": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 49,
                  "name": "Entity",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 66,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 66,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 58,
                "end": 66,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 58,
                  "end": 66,
                  "left": {
                    "type": "Identifier",
                    "start": 58,
                    "end": 64,
                    "name": "Entity",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 66,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 69,
      "end": 78,
      "expression": {
        "type": "MemberExpression",
        "start": 69,
        "end": 77,
        "object": {
          "type": "Identifier",
          "start": 69,
          "end": 75,
          "name": "Entity",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 76,
          "end": 77,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 88,
      "expression": {
        "type": "MemberExpression",
        "start": 79,
        "end": 87,
        "object": {
          "type": "Identifier",
          "start": 79,
          "end": 85,
          "name": "Entity",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 86,
          "end": 87,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
