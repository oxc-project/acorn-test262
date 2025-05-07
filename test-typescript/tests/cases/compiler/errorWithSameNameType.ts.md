__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 39,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 39,
        "body": {
          "type": "TSInterfaceBody",
          "start": 19,
          "end": 39,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 25,
              "end": 37,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 25,
                "end": 29,
                "decorators": [],
                "name": "foo1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 29,
                "end": 37,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 31,
                  "end": 37
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
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
  "end": 40,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 39,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 39,
        "body": {
          "type": "TSInterfaceBody",
          "start": 19,
          "end": 39,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 25,
              "end": 37,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 25,
                "end": 29,
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 29,
                "end": 37,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 31,
                  "end": 37
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
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
  "end": 98,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "raw": "'./a'",
        "value": "./a",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 25,
      "end": 49,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 44,
        "end": 49,
        "raw": "'./b'",
        "value": "./b",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 32,
          "end": 38,
          "local": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 61,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 61,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 61,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 58,
                "end": 61,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 58,
                  "end": 61,
                  "left": {
                    "type": "Identifier",
                    "start": 58,
                    "end": 59,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 61,
                    "decorators": [],
                    "name": "F",
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
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 62,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 66,
          "end": 72,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 72,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 72,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 69,
                "end": 72,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 69,
                  "end": 72,
                  "left": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 70,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 72,
                    "decorators": [],
                    "name": "F",
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
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 74,
      "end": 91,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 87,
        "end": 91,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 78,
        "end": 85,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 78,
          "end": 79,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 84,
          "end": 85,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 93,
      "end": 98,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 93,
        "end": 98,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 93,
          "end": 94,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 97,
          "end": 98,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
