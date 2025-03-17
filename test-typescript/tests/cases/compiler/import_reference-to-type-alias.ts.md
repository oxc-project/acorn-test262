__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 197,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 196,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 196,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 17,
          "name": "App",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 18,
          "end": 196,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 24,
              "end": 194,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 31,
                "end": 194,
                "id": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 46,
                  "name": "Services",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 47,
                  "end": 194,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 57,
                      "end": 188,
                      "declaration": {
                        "type": "ClassDeclaration",
                        "start": 64,
                        "end": 188,
                        "id": {
                          "type": "Identifier",
                          "start": 70,
                          "end": 82,
                          "name": "UserServices",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "superClass": null,
                        "body": {
                          "type": "ClassBody",
                          "start": 83,
                          "end": 188,
                          "body": [
                            {
                              "type": "MethodDefinition",
                              "start": 97,
                              "end": 178,
                              "static": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 104,
                                "end": 115,
                                "name": "getUserName",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "method",
                              "value": {
                                "type": "FunctionExpression",
                                "start": 115,
                                "end": 178,
                                "id": null,
                                "expression": false,
                                "generator": false,
                                "async": false,
                                "params": [],
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 126,
                                  "end": 178,
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "start": 144,
                                      "end": 164,
                                      "argument": {
                                        "type": "Literal",
                                        "start": 151,
                                        "end": 163,
                                        "value": "Bill Gates",
                                        "raw": "\"Bill Gates\""
                                      }
                                    }
                                  ]
                                },
                                "declare": false,
                                "typeParameters": null,
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 117,
                                  "end": 125,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 119,
                                    "end": 125
                                  }
                                }
                              },
                              "decorators": [],
                              "override": false,
                              "optional": false,
                              "accessibility": "public"
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
                      "specifiers": [],
                      "source": null,
                      "attributes": [],
                      "exportKind": "value"
                    }
                  ]
                },
                "kind": "module",
                "declare": false,
                "global": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "name": "appJs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "value": "file1",
          "raw": "\"file1\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 33,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 48,
        "name": "Services",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 51,
        "end": 69,
        "left": {
          "type": "TSQualifiedName",
          "start": 51,
          "end": 60,
          "left": {
            "type": "Identifier",
            "start": 51,
            "end": 56,
            "name": "appJs",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 57,
            "end": 60,
            "name": "App",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 61,
          "end": 69,
          "name": "Services",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 120,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 79,
            "end": 120,
            "callee": {
              "type": "MemberExpression",
              "start": 79,
              "end": 118,
              "object": {
                "type": "NewExpression",
                "start": 79,
                "end": 106,
                "callee": {
                  "type": "MemberExpression",
                  "start": 83,
                  "end": 104,
                  "object": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 91,
                    "name": "Services",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 104,
                    "name": "UserServices",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 107,
                "end": 118,
                "name": "getUserName",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
