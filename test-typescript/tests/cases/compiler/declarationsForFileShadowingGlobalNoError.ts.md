__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 27,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 19,
          "decorators": [],
          "name": "DOMNode",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 22,
          "end": 26,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 22,
            "end": 26,
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
  "end": 22,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 22,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 22,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 16,
          "decorators": [],
          "name": "Node",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 19,
          "end": 21,
          "members": []
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
  "end": 223,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 31,
        "raw": "'./custom'",
        "value": "./custom",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 32,
      "end": 63,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 56,
        "end": 63,
        "raw": "'./dom'",
        "value": "./dom",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 41,
          "end": 48,
          "imported": {
            "type": "Identifier",
            "start": 41,
            "end": 48,
            "decorators": [],
            "name": "DOMNode",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 41,
            "end": 48,
            "decorators": [],
            "name": "DOMNode",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 65,
      "end": 111,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 81,
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 84,
        "end": 111,
        "abstract": false,
        "params": [
          {
            "type": "RestElement",
            "start": 89,
            "end": 103,
            "argument": {
              "type": "Identifier",
              "start": 92,
              "end": 96,
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 103,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 98,
                "end": 103,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 98,
                  "end": 101
                }
              }
            },
            "value": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 105,
          "end": 111,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 108,
            "end": 111
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 113,
      "end": 223,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 120,
        "end": 223,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 126,
            "end": 223,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 126,
              "end": 131,
              "decorators": [],
              "name": "mixin",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 134,
              "end": 223,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 157,
                "end": 223,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 161,
                    "end": 221,
                    "argument": {
                      "type": "ClassExpression",
                      "start": 168,
                      "end": 221,
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "start": 187,
                        "end": 221,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 193,
                            "end": 217,
                            "accessibility": null,
                            "computed": false,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "start": 193,
                              "end": 196,
                              "decorators": [],
                              "name": "get",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "method",
                            "optional": false,
                            "override": false,
                            "static": false,
                            "value": {
                              "type": "FunctionExpression",
                              "start": 196,
                              "end": 217,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 215,
                                "end": 217,
                                "body": []
                              },
                              "declare": false,
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 197,
                                  "end": 213,
                                  "decorators": [],
                                  "name": "domNode",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 204,
                                    "end": 213,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 206,
                                      "end": 213,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 206,
                                        "end": 213,
                                        "decorators": [],
                                        "name": "DOMNode",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                }
                              ],
                              "returnType": null,
                              "typeParameters": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "decorators": [],
                      "id": null,
                      "implements": [],
                      "superClass": {
                        "type": "Identifier",
                        "start": 182,
                        "end": 186,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "superTypeArguments": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 135,
                  "end": 152,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 139,
                    "end": 152,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 141,
                      "end": 152,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 141,
                        "end": 152,
                        "decorators": [],
                        "name": "Constructor",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
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
