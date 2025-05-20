__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 183,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 32,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 16,
            "decorators": [],
            "name": "FOO_SYMBOL",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 19,
            "end": 32,
            "arguments": [
              {
                "type": "Literal",
                "start": 26,
                "end": 31,
                "raw": "'Foo'",
                "value": "Foo"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 19,
              "end": 25,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 35,
      "end": 117,
      "body": {
        "type": "TSModuleBlock",
        "start": 50,
        "end": 117,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 56,
            "end": 115,
            "body": {
              "type": "TSInterfaceBody",
              "start": 77,
              "end": 115,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 87,
                  "end": 109,
                  "accessibility": null,
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 98,
                    "decorators": [],
                    "name": "FOO_SYMBOL",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 100,
                    "end": 108,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 102,
                      "end": 108
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 66,
              "end": 73,
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 73,
              "end": 76,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 74,
                  "end": 75,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 75,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 49,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "global"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 119,
      "end": 183,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 126,
        "end": 183,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 157,
          "end": 183,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 163,
              "end": 181,
              "directive": null,
              "expression": {
                "type": "AssignmentExpression",
                "start": 163,
                "end": 180,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 163,
                  "end": 176,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 164,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 175,
                    "decorators": [],
                    "name": "FOO_SYMBOL",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 179,
                  "end": 180,
                  "raw": "3",
                  "value": 3
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 135,
          "end": 138,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 142,
            "end": 155,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 155,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 145,
                "end": 155,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 152,
                  "end": 155,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 153,
                      "end": 154,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 153,
                        "end": 154,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 152,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 138,
          "end": 141,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 139,
              "end": 140,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
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
