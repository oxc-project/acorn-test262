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
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 49,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 25,
            "end": 47,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 33,
              "end": 47,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 35,
                  "end": 45,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 36,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
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
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "raw": "\"A\"",
        "value": "A"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 51,
      "end": 183,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 74,
        "end": 183,
        "body": [
          {
            "type": "ImportDeclaration",
            "start": 80,
            "end": 100,
            "attributes": [],
            "importKind": "value",
            "source": {
              "type": "Literal",
              "start": 96,
              "end": 99,
              "raw": "\"A\"",
              "value": "A"
            },
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
                  "optional": false
                },
                "importKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "TSModuleDeclaration",
            "start": 105,
            "end": 181,
            "body": {
              "type": "TSModuleBlock",
              "start": 112,
              "end": 181,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 122,
                  "end": 175,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 141,
                    "end": 175,
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "start": 155,
                        "end": 165,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 155,
                          "end": 159,
                          "decorators": [],
                          "name": "getA",
                          "optional": false
                        },
                        "kind": "method",
                        "optional": false,
                        "params": [],
                        "readonly": false,
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
                              "optional": false
                            }
                          }
                        },
                        "static": false
                      }
                    ]
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 137,
                    "decorators": [],
                    "name": "Array",
                    "optional": false
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
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 138,
                          "end": 139,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "global": true,
            "id": {
              "type": "Identifier",
              "start": 105,
              "end": 111,
              "decorators": [],
              "name": "global",
              "optional": false
            },
            "kind": "global"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 66,
        "end": 73,
        "raw": "\"array\"",
        "value": "array"
      }
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
  "end": 85,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 35,
      "end": 50,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 42,
        "end": 49,
        "raw": "\"array\"",
        "value": "array"
      },
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 52,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 63,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "decorators": [],
            "name": "x",
            "optional": false
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
                "raw": "1",
                "value": 1
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 84,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 83,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 73,
            "end": 83,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 73,
              "end": 81,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 73,
                "end": 79,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 74,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 79,
                  "decorators": [],
                  "name": "getA",
                  "optional": false
                }
              },
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
