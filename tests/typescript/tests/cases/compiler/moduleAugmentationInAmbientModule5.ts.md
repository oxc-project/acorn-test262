__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "A",
        "raw": "\"A\"",
        "start": 15,
        "end": 18
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 32
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
                    "start": 35,
                    "end": 36
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 38,
                      "end": 44
                    },
                    "start": 36,
                    "end": 44
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 35,
                  "end": 45
                }
              ],
              "start": 33,
              "end": 47
            },
            "abstract": false,
            "declare": false,
            "start": 25,
            "end": 47
          }
        ],
        "start": 19,
        "end": 49
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 49
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "array",
        "raw": "\"array\"",
        "start": 66,
        "end": 73
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ImportDeclaration",
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "imported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 89
                },
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 89
                },
                "importKind": "value",
                "start": 88,
                "end": 89
              }
            ],
            "source": {
              "type": "Literal",
              "value": "A",
              "raw": "\"A\"",
              "start": 96,
              "end": 99
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 80,
            "end": 100
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "global",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 111
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 132,
                    "end": 137
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
                          "start": 138,
                          "end": 139
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 138,
                        "end": 139
                      }
                    ],
                    "start": 137,
                    "end": 140
                  },
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 155,
                          "end": 159
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 163,
                              "end": 164
                            },
                            "typeArguments": null,
                            "start": 163,
                            "end": 164
                          },
                          "start": 161,
                          "end": 164
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 155,
                        "end": 165
                      }
                    ],
                    "start": 141,
                    "end": 175
                  },
                  "declare": false,
                  "start": 122,
                  "end": 175
                }
              ],
              "start": 112,
              "end": 181
            },
            "kind": "global",
            "declare": false,
            "global": true,
            "start": 105,
            "end": 181
          }
        ],
        "start": 74,
        "end": 183
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 51,
      "end": 183
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 184
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "array",
        "raw": "\"array\"",
        "start": 42,
        "end": 49
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 35,
      "end": 50
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 57
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 61,
                "end": 62
              }
            ],
            "start": 60,
            "end": 63
          },
          "definite": false,
          "start": 56,
          "end": 63
        }
      ],
      "declare": false,
      "start": 52,
      "end": 64
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 70
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 73,
                  "end": 74
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 75,
                  "end": 79
                },
                "optional": false,
                "computed": false,
                "start": 73,
                "end": 79
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 73,
              "end": 81
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 83
            },
            "optional": false,
            "computed": false,
            "start": 73,
            "end": 83
          },
          "definite": false,
          "start": 69,
          "end": 83
        }
      ],
      "declare": false,
      "start": 65,
      "end": 84
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 84
}
```
