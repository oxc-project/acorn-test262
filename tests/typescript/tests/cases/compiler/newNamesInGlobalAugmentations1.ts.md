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
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 29,
          "end": 31,
          "decorators": [],
          "name": "M1",
          "optional": false,
          "typeAnnotation": null
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
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 49,
                  "end": 58,
                  "id": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 58,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 50,
                      "end": 58,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 52,
                        "end": 58
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "SymbolConstructor",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
                    "decorators": [],
                    "name": "observable",
                    "optional": false,
                    "typeAnnotation": null
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 157,
              "end": 160,
              "decorators": [],
              "name": "Cls",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 161,
              "end": 164,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 162,
                  "end": 163,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 163,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 169,
            "end": 190,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 173,
                "end": 189,
                "id": {
                  "type": "ArrayPattern",
                  "start": 173,
                  "end": 189,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 174,
                      "end": 175,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 177,
                      "end": 178,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
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
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 217,
                    "decorators": [],
                    "name": "M1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 219,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
          "decorators": [],
          "name": "Symbol",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 7,
          "end": 17,
          "decorators": [],
          "name": "observable",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
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
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": []
        },
        "property": {
          "type": "Identifier",
          "start": 29,
          "end": 30,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 49,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
