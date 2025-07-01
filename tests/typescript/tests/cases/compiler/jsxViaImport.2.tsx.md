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
        "start": 15,
        "end": 18
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
              "start": 33,
              "end": 58
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
                    "start": 61,
                    "end": 66
                  },
                  "typeAnnotation": null,
                  "accessibility": null,
                  "static": false,
                  "start": 61,
                  "end": 67
                }
              ],
              "start": 59,
              "end": 69
            },
            "declare": false,
            "start": 23,
            "end": 69
          }
        ],
        "start": 19,
        "end": 71
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 71
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 92
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
              "start": 103,
              "end": 112
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
                    "start": 113,
                    "end": 114
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 113,
                  "end": 114
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 116,
                    "end": 117
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 116,
                  "end": 117
                }
              ],
              "start": 112,
              "end": 118
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 119,
              "end": 122
            },
            "abstract": false,
            "declare": false,
            "start": 97,
            "end": 122
          }
        ],
        "start": 93,
        "end": 124
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 72,
      "end": 124
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "BaseComponent",
        "raw": "\"BaseComponent\"",
        "start": 140,
        "end": 155
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
                  "start": 191,
                  "end": 196
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 197,
                  "end": 206
                },
                "optional": false,
                "computed": false,
                "start": 191,
                "end": 206
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 207,
                    "end": 210
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 212,
                    "end": 214
                  }
                ],
                "start": 206,
                "end": 215
              },
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 216,
                "end": 223
              },
              "abstract": false,
              "declare": false,
              "start": 177,
              "end": 223
            },
            "exportKind": "value",
            "start": 162,
            "end": 223
          }
        ],
        "start": 156,
        "end": 225
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 125,
      "end": 225
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 226
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
