__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 151,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 44,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 44,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 20,
            "end": 42,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 41,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 28,
                "end": 41,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 30,
                    "end": 39,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 30,
                      "end": 31,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 31,
                      "end": 39,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 33,
                        "end": 39
                      }
                    }
                  }
                ]
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 46,
      "end": 117,
      "body": {
        "type": "TSInterfaceBody",
        "start": 76,
        "end": 117,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 82,
            "end": 115,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 114,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 90,
                "end": 114,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 92,
                    "end": 102,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 92,
                      "end": 93,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 93,
                      "end": 101,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 95,
                        "end": 101
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 103,
                    "end": 112,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 103,
                      "end": 104,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 104,
                      "end": 112,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 106,
                        "end": 112
                      }
                    }
                  }
                ]
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 72,
          "end": 75,
          "expression": {
            "type": "Identifier",
            "start": 72,
            "end": 75,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 63,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 133,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 133,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 133,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 126,
                "end": 133,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 133,
                  "decorators": [],
                  "name": "Derived",
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
      "start": 135,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 150,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 140,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 143,
            "end": 150,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
