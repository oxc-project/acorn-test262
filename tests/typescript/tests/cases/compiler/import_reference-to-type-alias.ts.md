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
          "decorators": [],
          "name": "App",
          "optional": false,
          "typeAnnotation": null
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
                  "decorators": [],
                  "name": "Services",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "start": 70,
                          "end": 82,
                          "decorators": [],
                          "name": "UserServices",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "start": 83,
                          "end": 188,
                          "body": [
                            {
                              "type": "MethodDefinition",
                              "start": 97,
                              "end": 178,
                              "decorators": [],
                              "key": {
                                "type": "Identifier",
                                "start": 104,
                                "end": 115,
                                "decorators": [],
                                "name": "getUserName",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "start": 115,
                                "end": 178,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 117,
                                  "end": 125,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 119,
                                    "end": 125
                                  }
                                },
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
                                "expression": false
                              },
                              "kind": "method",
                              "computed": false,
                              "static": false,
                              "override": false,
                              "optional": false,
                              "accessibility": "public"
                            }
                          ]
                        },
                        "abstract": false,
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
                "declare": false,
                "global": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 121,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "appJs",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "Services",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "name": "appJs",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 57,
            "end": 60,
            "decorators": [],
            "name": "App",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 61,
          "end": 69,
          "decorators": [],
          "name": "Services",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 121,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 120,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Services",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 104,
                    "decorators": [],
                    "name": "UserServices",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 107,
                "end": 118,
                "decorators": [],
                "name": "getUserName",
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
