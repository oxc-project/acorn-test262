__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 223,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 12,
      "end": 61,
      "id": {
        "type": "TSQualifiedName",
        "start": 27,
        "end": 31,
        "left": {
          "type": "Identifier",
          "start": 27,
          "end": 28,
          "name": "M",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 29,
          "end": 31,
          "name": "M1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 32,
        "end": 61,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 38,
            "end": 59,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 45,
              "end": 59,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 49,
                  "end": 58,
                  "id": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 58,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 50,
                      "end": 58,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 52,
                        "end": 58
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 62,
      "end": 222,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 76,
        "name": "global",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 77,
        "end": 222,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 83,
            "end": 146,
            "id": {
              "type": "Identifier",
              "start": 93,
              "end": 110,
              "name": "SymbolConstructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 111,
              "end": 146,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 121,
                  "end": 140,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 131,
                    "name": "observable",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 131,
                    "end": 139,
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 133,
                      "end": 139
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 151,
            "end": 164,
            "id": {
              "type": "Identifier",
              "start": 157,
              "end": 160,
              "name": "Cls",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 161,
              "end": 164,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 162,
                  "end": 163,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 163,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": null,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "VariableDeclaration",
            "start": 169,
            "end": 190,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 173,
                "end": 189,
                "id": {
                  "type": "ArrayPattern",
                  "start": 173,
                  "end": 189,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 174,
                      "end": 175,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 177,
                      "end": 178,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 179,
                    "end": 189,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 181,
                      "end": 189,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 181,
                        "end": 187
                      }
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 195,
            "end": 220,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 202,
              "end": 220,
              "id": {
                "type": "Identifier",
                "start": 209,
                "end": 210,
                "name": "X",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 213,
                "end": 219,
                "left": {
                  "type": "TSQualifiedName",
                  "start": 213,
                  "end": 217,
                  "left": {
                    "type": "Identifier",
                    "start": 213,
                    "end": 214,
                    "name": "M",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 217,
                    "name": "M1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 219,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
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
  "end": 49,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 18,
      "expression": {
        "type": "MemberExpression",
        "start": 0,
        "end": 17,
        "object": {
          "type": "Identifier",
          "start": 0,
          "end": 6,
          "name": "Symbol",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 7,
          "end": 17,
          "name": "observable",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 19,
      "end": 30,
      "expression": {
        "type": "MemberExpression",
        "start": 19,
        "end": 30,
        "object": {
          "type": "NewExpression",
          "start": 19,
          "end": 28,
          "callee": {
            "type": "Identifier",
            "start": 23,
            "end": 26,
            "name": "Cls",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "typeArguments": null
        },
        "property": {
          "type": "Identifier",
          "start": 29,
          "end": 30,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 39,
            "end": 48,
            "left": {
              "type": "BinaryExpression",
              "start": 39,
              "end": 44,
              "left": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
