__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Decl",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 28
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 44,
                "end": 45
              },
              "start": 37,
              "end": 46
            }
          ],
          "start": 31,
          "end": 48
        },
        "expression": false,
        "start": 15,
        "end": 48
      },
      "exportKind": "value",
      "start": 0,
      "end": 48
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Decl",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 71
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 80
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 82,
                  "end": 88
                },
                "start": 80,
                "end": 88
              },
              "accessibility": null,
              "static": false,
              "start": 78,
              "end": 89
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 96
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 98,
                  "end": 104
                },
                "start": 96,
                "end": 104
              },
              "accessibility": null,
              "static": false,
              "start": 94,
              "end": 105
            }
          ],
          "start": 72,
          "end": 107
        },
        "declare": false,
        "start": 57,
        "end": 107
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 50,
      "end": 107
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Decl",
          "optional": false,
          "typeAnnotation": null,
          "start": 126,
          "end": 130
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 148,
                      "end": 149
                    },
                    "init": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 152,
                      "end": 154
                    },
                    "definite": false,
                    "start": 148,
                    "end": 154
                  }
                ],
                "declare": false,
                "start": 144,
                "end": 155
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 137,
              "end": 155
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 171,
                      "end": 172
                    },
                    "init": {
                      "type": "Literal",
                      "value": 20,
                      "raw": "20",
                      "start": 175,
                      "end": 177
                    },
                    "definite": false,
                    "start": 171,
                    "end": 177
                  }
                ],
                "declare": false,
                "start": 167,
                "end": 178
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 160,
              "end": 178
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 195
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 196,
                "end": 203
              },
              "declare": false,
              "start": 184,
              "end": 203
            }
          ],
          "start": 131,
          "end": 205
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 116,
        "end": 205
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 109,
      "end": 205
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 206
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Entity",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 13
          },
          "start": 7,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "m1",
        "raw": "\"m1\"",
        "start": 19,
        "end": 23
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 23
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Entity",
          "optional": false,
          "typeAnnotation": null,
          "start": 25,
          "end": 31
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 25,
        "end": 33
      },
      "directive": null,
      "start": 25,
      "end": 34
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Entity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 49
                },
                "typeArguments": null,
                "start": 43,
                "end": 49
              },
              "start": 41,
              "end": 49
            },
            "start": 40,
            "end": 49
          },
          "init": null,
          "definite": false,
          "start": 40,
          "end": 49
        }
      ],
      "declare": false,
      "start": 36,
      "end": 50
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Entity",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 58,
                    "end": 64
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 66
                  },
                  "start": 58,
                  "end": 66
                },
                "typeArguments": null,
                "start": 58,
                "end": 66
              },
              "start": 56,
              "end": 66
            },
            "start": 55,
            "end": 66
          },
          "init": null,
          "definite": false,
          "start": 55,
          "end": 66
        }
      ],
      "declare": false,
      "start": 51,
      "end": 67
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Entity",
          "optional": false,
          "typeAnnotation": null,
          "start": 69,
          "end": 75
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 76,
          "end": 77
        },
        "optional": false,
        "computed": false,
        "start": 69,
        "end": 77
      },
      "directive": null,
      "start": 69,
      "end": 78
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Entity",
          "optional": false,
          "typeAnnotation": null,
          "start": 79,
          "end": 85
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 86,
          "end": 87
        },
        "optional": false,
        "computed": false,
        "start": 79,
        "end": 87
      },
      "directive": null,
      "start": 79,
      "end": 88
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 88
}
```
