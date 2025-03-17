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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 27,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 19,
          "name": "DOMNode",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 22,
          "end": 26,
          "typeName": {
            "type": "Identifier",
            "start": 22,
            "end": 26,
            "name": "Node",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 22,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 16,
          "name": "Node",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 19,
          "end": 21,
          "members": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "name": "Node",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "name": "Node",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 31,
        "value": "./custom",
        "raw": "'./custom'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 32,
      "end": 63,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 41,
          "end": 48,
          "imported": {
            "type": "Identifier",
            "start": 41,
            "end": 48,
            "name": "DOMNode",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 41,
            "end": 48,
            "name": "DOMNode",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 56,
        "end": 63,
        "value": "./dom",
        "raw": "'./dom'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 65,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 81,
        "name": "Constructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 84,
        "end": 111,
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "start": 89,
            "end": 103,
            "argument": {
              "type": "Identifier",
              "start": 92,
              "end": 96,
              "name": "args",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        }
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 113,
      "end": 223,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 120,
        "end": 223,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 126,
            "end": 223,
            "id": {
              "type": "Identifier",
              "start": 126,
              "end": 131,
              "name": "mixin",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 134,
              "end": 223,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 135,
                  "end": 152,
                  "name": "Base",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 139,
                    "end": 152,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 141,
                      "end": 152,
                      "typeName": {
                        "type": "Identifier",
                        "start": 141,
                        "end": 152,
                        "name": "Constructor",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "id": null,
                      "superClass": {
                        "type": "Identifier",
                        "start": 182,
                        "end": 186,
                        "name": "Base",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "body": {
                        "type": "ClassBody",
                        "start": 187,
                        "end": 221,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 193,
                            "end": 217,
                            "static": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 193,
                              "end": 196,
                              "name": "get",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "method",
                            "value": {
                              "type": "FunctionExpression",
                              "start": 196,
                              "end": 217,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 197,
                                  "end": 213,
                                  "name": "domNode",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 204,
                                    "end": 213,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 206,
                                      "end": 213,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 206,
                                        "end": 213,
                                        "name": "DOMNode",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "body": {
                                "type": "BlockStatement",
                                "start": 215,
                                "end": 217,
                                "body": []
                              },
                              "declare": false,
                              "typeParameters": null,
                              "returnType": null
                            },
                            "decorators": [],
                            "override": false,
                            "optional": false,
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
                    }
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
