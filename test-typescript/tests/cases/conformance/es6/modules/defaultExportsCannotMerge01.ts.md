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
        "async": false,
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
                "raw": "0",
                "value": 0
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 28,
          "decorators": [],
          "name": "Decl",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 50,
      "end": 107,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 57,
        "end": 107,
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
              "key": {
                "type": "Identifier",
                "start": 78,
                "end": 80,
                "decorators": [],
                "name": "p1",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 80,
                "end": 88,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 82,
                  "end": 88
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 94,
              "end": 105,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 94,
                "end": 96,
                "decorators": [],
                "name": "p2",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 96,
                "end": 104,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 98,
                  "end": 104
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 67,
          "end": 71,
          "decorators": [],
          "name": "Decl",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 109,
      "end": 205,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 116,
        "end": 205,
        "body": {
          "type": "TSModuleBlock",
          "start": 131,
          "end": 205,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 137,
              "end": 155,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 144,
                "end": 155,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 148,
                    "end": 154,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 149,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 152,
                      "end": 154,
                      "raw": "10",
                      "value": 10
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 160,
              "end": 178,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 167,
                "end": 178,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 171,
                    "end": 177,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 171,
                      "end": 172,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 175,
                      "end": 177,
                      "raw": "20",
                      "value": 20
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 184,
              "end": 203,
              "body": {
                "type": "TSInterfaceBody",
                "start": 196,
                "end": 203,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 194,
                "end": 195,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 126,
          "end": 130,
          "decorators": [],
          "name": "Decl",
          "optional": false
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
  "end": 88,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
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
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 25,
      "end": 34,
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
          "optional": false
        },
        "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 49,
                  "decorators": [],
                  "name": "Entity",
                  "optional": false
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
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 66,
                    "decorators": [],
                    "name": "I",
                    "optional": false
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
      "type": "ExpressionStatement",
      "start": 69,
      "end": 78,
      "expression": {
        "type": "MemberExpression",
        "start": 69,
        "end": 77,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 69,
          "end": 75,
          "decorators": [],
          "name": "Entity",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 76,
          "end": 77,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 88,
      "expression": {
        "type": "MemberExpression",
        "start": 79,
        "end": 87,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 79,
          "end": 85,
          "decorators": [],
          "name": "Entity",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 86,
          "end": 87,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
