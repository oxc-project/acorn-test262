__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 184,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 49,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "value": "A",
        "raw": "\"A\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 49,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 25,
            "end": 47,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 33,
              "end": 47,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 35,
                  "end": 45,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 36,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 36,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 38,
                      "end": 44
                    }
                  },
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
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 51,
      "end": 183,
      "id": {
        "type": "Literal",
        "start": 66,
        "end": 73,
        "value": "array",
        "raw": "\"array\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 74,
        "end": 183,
        "body": [
          {
            "type": "ImportDeclaration",
            "start": 80,
            "end": 100,
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "start": 88,
                "end": 89,
                "imported": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "local": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "importKind": "value"
              }
            ],
            "source": {
              "type": "Literal",
              "start": 96,
              "end": 99,
              "value": "A",
              "raw": "\"A\""
            },
            "phase": null,
            "attributes": [],
            "importKind": "value"
          },
          {
            "type": "TSModuleDeclaration",
            "start": 105,
            "end": 181,
            "id": {
              "type": "Identifier",
              "start": 105,
              "end": 111,
              "decorators": [],
              "name": "global",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 112,
              "end": 181,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 122,
                  "end": 175,
                  "id": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 137,
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 137,
                    "end": 140,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 138,
                        "end": 139,
                        "name": {
                          "type": "Identifier",
                          "start": 138,
                          "end": 139,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    ]
                  },
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 141,
                    "end": 175,
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "start": 155,
                        "end": 165,
                        "key": {
                          "type": "Identifier",
                          "start": 155,
                          "end": 159,
                          "decorators": [],
                          "name": "getA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 161,
                          "end": 164,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 163,
                            "end": 164,
                            "typeName": {
                              "type": "Identifier",
                              "start": 163,
                              "end": 164,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false
                      }
                    ]
                  },
                  "declare": false
                }
              ]
            },
            "kind": "global",
            "declare": false,
            "global": true
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "start": 35,
  "end": 84,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 35,
      "end": 50,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 42,
        "end": 49,
        "value": "array",
        "raw": "\"array\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 52,
      "end": 64,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 63,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 60,
            "end": 63,
            "elements": [
              {
                "type": "Literal",
                "start": 61,
                "end": 62,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 84,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 83,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 73,
            "end": 83,
            "object": {
              "type": "CallExpression",
              "start": 73,
              "end": 81,
              "callee": {
                "type": "MemberExpression",
                "start": 73,
                "end": 79,
                "object": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 74,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 79,
                  "decorators": [],
                  "name": "getA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
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
