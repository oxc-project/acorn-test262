__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 52,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 52,
        "id": {
          "type": "Identifier",
          "start": 22,
          "end": 24,
          "name": "M2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 25,
          "end": 52,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 28,
              "end": 50,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 35,
                "end": 50,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 39,
                    "end": 49,
                    "id": {
                      "type": "Identifier",
                      "start": 39,
                      "end": 49,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 40,
                        "end": 49,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 42,
                          "end": 49
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "var",
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
  "end": 52,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 51,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 51,
        "id": {
          "type": "Identifier",
          "start": 22,
          "end": 24,
          "name": "M2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 25,
          "end": 51,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 28,
              "end": 49,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 35,
                "end": 49,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 39,
                    "end": 48,
                    "id": {
                      "type": "Identifier",
                      "start": 39,
                      "end": 48,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 40,
                        "end": 48,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 42,
                          "end": 48
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "var",
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
  "end": 63,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 18,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 47,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 22,
            "end": 45,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 33,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 33,
              "end": 45,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 34,
                  "end": 43,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 43,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 37,
                      "end": 43
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSExportAssignment",
      "start": 48,
      "end": 62,
      "expression": {
        "type": "Identifier",
        "start": 57,
        "end": 61,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
  "start": 0,
  "end": 169,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 28,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 27,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 26,
          "value": "foo",
          "raw": "'foo'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 29,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 41,
        "name": "other",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 44,
        "end": 62,
        "expression": {
          "type": "Literal",
          "start": 52,
          "end": 61,
          "value": "./other",
          "raw": "'./other'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 64,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 77,
        "name": "relMod",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 80,
        "end": 103,
        "expression": {
          "type": "Literal",
          "start": 88,
          "end": 102,
          "value": "./sub/relMod",
          "raw": "'./sub/relMod'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "IfStatement",
      "start": 106,
      "end": 168,
      "test": {
        "type": "MemberExpression",
        "start": 109,
        "end": 117,
        "object": {
          "type": "MemberExpression",
          "start": 109,
          "end": 115,
          "object": {
            "type": "Identifier",
            "start": 109,
            "end": 112,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 113,
            "end": 115,
            "name": "M2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 116,
          "end": 117,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 118,
        "end": 168,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 121,
            "end": 166,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 125,
                "end": 165,
                "id": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 126,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 129,
                  "end": 165,
                  "callee": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 139,
                    "name": "relMod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 140,
                      "end": 164,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 140,
                        "end": 161,
                        "object": {
                          "type": "MemberExpression",
                          "start": 140,
                          "end": 150,
                          "object": {
                            "type": "MemberExpression",
                            "start": 140,
                            "end": 148,
                            "object": {
                              "type": "Identifier",
                              "start": 140,
                              "end": 145,
                              "name": "other",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 146,
                              "end": 148,
                              "name": "M2",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 149,
                            "end": 150,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 151,
                          "end": 161,
                          "name": "charCodeAt",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 162,
                          "end": 163,
                          "value": 0,
                          "raw": "0"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  ],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
