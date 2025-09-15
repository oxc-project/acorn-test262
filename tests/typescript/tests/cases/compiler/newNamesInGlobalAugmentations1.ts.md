__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 30,
          "end": 31
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "M1",
          "optional": false,
          "typeAnnotation": null,
          "start": 32,
          "end": 34
        },
        "start": 30,
        "end": 34
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
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
                        "type": "TSNumberKeyword",
                        "start": 55,
                        "end": 61
                      },
                      "start": 53,
                      "end": 61
                    },
                    "start": 52,
                    "end": 61
                  },
                  "init": null,
                  "definite": false,
                  "start": 52,
                  "end": 61
                }
              ],
              "declare": false,
              "start": 48,
              "end": 62
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 41,
            "end": 62
          }
        ],
        "start": 35,
        "end": 64
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 12,
      "end": 64
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 79
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "SymbolConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 113
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
                    "name": "observable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 124,
                    "end": 134
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 136,
                      "end": 142
                    },
                    "start": 134,
                    "end": 142
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 124,
                  "end": 143
                }
              ],
              "start": 114,
              "end": 149
            },
            "declare": false,
            "start": 86,
            "end": 149
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cls",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 163
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 166
                  },
                  "typeAnnotation": null,
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 165,
                  "end": 166
                }
              ],
              "start": 164,
              "end": 167
            },
            "abstract": false,
            "declare": false,
            "start": 154,
            "end": 167
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 177,
                      "end": 178
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 180,
                      "end": 181
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 184,
                        "end": 190
                      },
                      "start": 184,
                      "end": 192
                    },
                    "start": 182,
                    "end": 192
                  },
                  "start": 176,
                  "end": 192
                },
                "init": null,
                "definite": false,
                "start": 176,
                "end": 192
              }
            ],
            "declare": false,
            "start": 172,
            "end": 193
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 212,
                "end": 213
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 216,
                    "end": 217
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 218,
                    "end": 220
                  },
                  "start": 216,
                  "end": 220
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 221,
                  "end": 222
                },
                "start": 216,
                "end": 222
              },
              "importKind": "value",
              "start": 205,
              "end": 223
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 198,
            "end": 223
          }
        ],
        "start": 80,
        "end": 225
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 65,
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Symbol",
          "optional": false,
          "typeAnnotation": null,
          "start": 0,
          "end": 6
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "observable",
          "optional": false,
          "typeAnnotation": null,
          "start": 7,
          "end": 17
        },
        "optional": false,
        "computed": false,
        "start": 0,
        "end": 17
      },
      "directive": null,
      "start": 0,
      "end": 18
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 26
          },
          "typeArguments": null,
          "arguments": [],
          "start": 19,
          "end": 28
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 29,
          "end": 30
        },
        "optional": false,
        "computed": false,
        "start": 19,
        "end": 30
      },
      "directive": null,
      "start": 19,
      "end": 30
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 36
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 40
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 44
              },
              "start": 39,
              "end": 44
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 48
            },
            "start": 39,
            "end": 48
          },
          "definite": false,
          "start": 35,
          "end": 48
        }
      ],
      "declare": false,
      "start": 31,
      "end": 49
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 49
}
```
