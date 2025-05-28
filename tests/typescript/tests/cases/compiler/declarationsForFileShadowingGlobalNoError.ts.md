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
          "decorators": [],
          "name": "DOMNode",
          "optional": false,
          "typeAnnotation": null
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
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "Node",
          "optional": false,
          "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
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
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "DOMNode",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 41,
            "end": 48,
            "decorators": [],
            "name": "DOMNode",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "start": 92,
              "end": 96,
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null
            },
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 126,
            "end": 223,
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
              "expression": false,
              "async": false,
              "typeParameters": null,
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 141,
                        "end": 152,
                        "decorators": [],
                        "name": "Constructor",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
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
                      "decorators": [],
                      "id": null,
                      "typeParameters": null,
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
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 187,
                        "end": 221,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 193,
                            "end": 217,
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
                            "value": {
                              "type": "FunctionExpression",
                              "start": 196,
                              "end": 217,
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
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
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 206,
                                        "end": 213,
                                        "decorators": [],
                                        "name": "DOMNode",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  }
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 215,
                                "end": 217,
                                "body": []
                              },
                              "expression": false
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null
                          }
                        ]
                      },
                      "abstract": false,
                      "declare": false
                    }
                  }
                ]
              },
              "id": null,
              "generator": false
            },
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
