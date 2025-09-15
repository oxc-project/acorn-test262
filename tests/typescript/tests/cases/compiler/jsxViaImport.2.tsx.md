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
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "React",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 197,
                  "end": 202
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 212
                },
                "optional": false,
                "computed": false,
                "start": 197,
                "end": 212
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 213,
                    "end": 216
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 218,
                    "end": 220
                  }
                ],
                "start": 212,
                "end": 221
              },
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 222,
                "end": 229
              },
              "abstract": false,
              "declare": false,
              "start": 183,
              "end": 229
            },
            "exportKind": "value",
            "start": 168,
            "end": 229
          }
        ],
        "start": 162,
        "end": 231
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 131,
      "end": 231
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 232
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
            "name": "BaseComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 60
          },
          "start": 47,
          "end": 60
        }
      ],
      "source": {
        "type": "Literal",
        "value": "BaseComponent",
        "raw": "'BaseComponent'",
        "start": 66,
        "end": 81
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 40,
      "end": 82
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
        "start": 89,
        "end": 102
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
          "start": 111,
          "end": 116
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 126
        },
        "optional": false,
        "computed": false,
        "start": 111,
        "end": 126
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSAnyKeyword",
            "start": 127,
            "end": 130
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 132,
            "end": 134
          }
        ],
        "start": 126,
        "end": 135
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
              "start": 142,
              "end": 148
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
                          "start": 169,
                          "end": 182
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": true,
                        "start": 168,
                        "end": 185
                      },
                      "children": [],
                      "closingElement": null,
                      "start": 168,
                      "end": 185
                    },
                    "start": 161,
                    "end": 186
                  }
                ],
                "start": 151,
                "end": 192
              },
              "expression": false,
              "start": 148,
              "end": 192
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 142,
            "end": 192
          }
        ],
        "start": 136,
        "end": 194
      },
      "abstract": false,
      "declare": false,
      "start": 83,
      "end": 194
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 40,
  "end": 194
}
```
