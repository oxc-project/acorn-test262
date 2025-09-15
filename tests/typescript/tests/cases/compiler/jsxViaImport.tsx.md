__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ElementAttributesProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 61
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
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 69
                  },
                  "typeAnnotation": null,
                  "accessibility": null,
                  "static": false,
                  "start": 64,
                  "end": 70
                }
              ],
              "start": 62,
              "end": 72
            },
            "declare": false,
            "start": 26,
            "end": 72
          }
        ],
        "start": 22,
        "end": 74
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 74
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 98
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Component",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 118
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 119,
                    "end": 120
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 119,
                  "end": 120
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 122,
                    "end": 123
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 122,
                  "end": 123
                }
              ],
              "start": 118,
              "end": 124
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 125,
              "end": 128
            },
            "abstract": false,
            "declare": false,
            "start": 103,
            "end": 128
          }
        ],
        "start": 99,
        "end": 130
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 75,
      "end": 130
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "BaseComponent",
        "raw": "\"BaseComponent\"",
        "start": 146,
        "end": 161
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "base",
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
                          "name": "React",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 178,
                          "end": 183
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Component",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 184,
                          "end": 193
                        },
                        "start": 178,
                        "end": 193
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 194,
                            "end": 197
                          },
                          {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 199,
                            "end": 201
                          }
                        ],
                        "start": 193,
                        "end": 202
                      },
                      "start": 178,
                      "end": 202
                    },
                    "start": 176,
                    "end": 202
                  },
                  "start": 172,
                  "end": 202
                },
                "init": null,
                "definite": false,
                "start": 172,
                "end": 202
              }
            ],
            "declare": false,
            "start": 168,
            "end": 203
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "base",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 221
            },
            "start": 208,
            "end": 222
          }
        ],
        "start": 162,
        "end": 224
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 131,
      "end": 224
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 225
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 47,
        "end": 60
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "BaseComponent",
          "raw": "'BaseComponent'",
          "start": 71,
          "end": 86
        },
        "start": 63,
        "end": 87
      },
      "importKind": "value",
      "start": 40,
      "end": 88
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 108
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 122
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 123,
          "end": 132
        },
        "optional": false,
        "computed": false,
        "start": 117,
        "end": 132
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSAnyKeyword",
            "start": 133,
            "end": 136
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 138,
            "end": 140
          }
        ],
        "start": 132,
        "end": 141
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 154
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "BaseComponent",
                          "start": 175,
                          "end": 188
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": true,
                        "start": 174,
                        "end": 191
                      },
                      "children": [],
                      "closingElement": null,
                      "start": 174,
                      "end": 191
                    },
                    "start": 167,
                    "end": 192
                  }
                ],
                "start": 157,
                "end": 198
              },
              "expression": false,
              "start": 154,
              "end": 198
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 148,
            "end": 198
          }
        ],
        "start": 142,
        "end": 200
      },
      "abstract": false,
      "declare": false,
      "start": 89,
      "end": 200
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 40,
  "end": 200
}
```
