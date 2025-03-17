__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 139,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 40,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 20,
            "end": 38,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 37,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 24,
                "end": 37,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 26,
                    "end": 35,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 26,
                      "end": 27,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 27,
                      "end": 35,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 29,
                        "end": 35
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 42,
      "end": 109,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 59,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 68,
          "end": 71,
          "expression": {
            "type": "Identifier",
            "start": 68,
            "end": 71,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 72,
        "end": 109,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 78,
            "end": 107,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 106,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 82,
                "end": 106,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 84,
                    "end": 94,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 85,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 85,
                      "end": 93,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 87,
                        "end": 93
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 95,
                    "end": 104,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 96,
                      "name": "b",
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
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 126,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 125,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 125,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 116,
              "end": 125,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 118,
                "end": 125,
                "typeName": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 125,
                  "name": "Derived",
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
      "start": 127,
      "end": 139,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 138,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 132,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 135,
            "end": 138,
            "callee": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
