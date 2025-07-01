__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "DOMNode",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 19
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 26
          },
          "typeArguments": null,
          "start": 22,
          "end": 26
        },
        "declare": false,
        "start": 7,
        "end": 27
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 27
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 27
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Node",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 16
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 19,
          "end": 21
        },
        "declare": false,
        "start": 7,
        "end": 22
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 22
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 22
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "importKind": "value",
          "start": 9,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./custom",
        "raw": "'./custom'",
        "start": 21,
        "end": 31
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 31
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "DOMNode",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 48
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "DOMNode",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 48
          },
          "importKind": "value",
          "start": 41,
          "end": 48
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./dom",
        "raw": "'./dom'",
        "start": 56,
        "end": 63
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 32,
      "end": 63
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 81
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 96
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 98,
                  "end": 101
                },
                "start": 98,
                "end": 103
              },
              "start": 96,
              "end": 103
            },
            "value": null,
            "start": 89,
            "end": 103
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 108,
            "end": 111
          },
          "start": 105,
          "end": 111
        },
        "start": 84,
        "end": 111
      },
      "declare": false,
      "start": 65,
      "end": 111
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixin",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 131
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Constructor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 141,
                        "end": 152
                      },
                      "typeArguments": null,
                      "start": 141,
                      "end": 152
                    },
                    "start": 139,
                    "end": 152
                  },
                  "start": 135,
                  "end": 152
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ClassExpression",
                      "decorators": [],
                      "id": null,
                      "typeParameters": null,
                      "superClass": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 182,
                        "end": 186
                      },
                      "superTypeArguments": null,
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
                              "name": "get",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 193,
                              "end": 196
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "domNode",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "DOMNode",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 206,
                                        "end": 213
                                      },
                                      "typeArguments": null,
                                      "start": 206,
                                      "end": 213
                                    },
                                    "start": 204,
                                    "end": 213
                                  },
                                  "start": 197,
                                  "end": 213
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 215,
                                "end": 217
                              },
                              "expression": false,
                              "start": 196,
                              "end": 217
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 193,
                            "end": 217
                          }
                        ],
                        "start": 187,
                        "end": 221
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 168,
                      "end": 221
                    },
                    "start": 161,
                    "end": 221
                  }
                ],
                "start": 157,
                "end": 223
              },
              "id": null,
              "generator": false,
              "start": 134,
              "end": 223
            },
            "definite": false,
            "start": 126,
            "end": 223
          }
        ],
        "declare": false,
        "start": 120,
        "end": 223
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 113,
      "end": 223
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 223
}
```
