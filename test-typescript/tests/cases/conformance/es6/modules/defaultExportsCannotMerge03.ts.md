__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 126,
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
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 31,
      "end": 81,
      "body": {
        "type": "TSInterfaceBody",
        "start": 46,
        "end": 81,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 52,
            "end": 63,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 54,
              "decorators": [],
              "name": "p1",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 62,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 56,
                "end": 62
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 68,
            "end": 79,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 70,
              "decorators": [],
              "name": "p2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 78,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 72,
                "end": 78
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 45,
        "decorators": [],
        "name": "Decl",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 83,
      "end": 125,
      "body": {
        "type": "TSModuleBlock",
        "start": 98,
        "end": 125,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 104,
            "end": 123,
            "body": {
              "type": "TSInterfaceBody",
              "start": 116,
              "end": 123,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
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
        "start": 93,
        "end": 97,
        "decorators": [],
        "name": "Decl",
        "optional": false
      },
      "kind": "namespace"
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
            "optional": false
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
              "optional": false
            }
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
            "optional": false
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
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 102,
                "end": 104,
                "decorators": [],
                "name": "p1",
                "optional": false
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
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 109,
                "end": 111,
                "decorators": [],
                "name": "p2",
                "optional": false
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
