__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 151,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 105,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 105,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 105,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 103,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 29,
                "end": 103,
                "id": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 38,
                  "end": 103,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 48,
                      "end": 97,
                      "declaration": {
                        "type": "TSInterfaceDeclaration",
                        "start": 55,
                        "end": 97,
                        "id": {
                          "type": "Identifier",
                          "start": 65,
                          "end": 66,
                          "name": "I",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "extends": [],
                        "typeParameters": null,
                        "body": {
                          "type": "TSInterfaceBody",
                          "start": 67,
                          "end": 97,
                          "body": [
                            {
                              "type": "TSMethodSignature",
                              "start": 81,
                              "end": 87,
                              "key": {
                                "type": "Identifier",
                                "start": 81,
                                "end": 84,
                                "name": "foo",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false,
                              "kind": "method",
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "accessibility": null,
                              "readonly": false,
                              "static": false
                            }
                          ]
                        },
                        "declare": false
                      },
                      "specifiers": [],
                      "source": null,
                      "attributes": [],
                      "exportKind": "type"
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
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 107,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 115,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 118,
        "end": 121,
        "left": {
          "type": "Identifier",
          "start": 118,
          "end": 119,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 120,
          "end": 121,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 123,
      "end": 141,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 130,
        "end": 141,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 134,
            "end": 140,
            "id": {
              "type": "Identifier",
              "start": 134,
              "end": 140,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 135,
                "end": 140,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 137,
                  "end": 140,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 137,
                    "end": 140,
                    "left": {
                      "type": "Identifier",
                      "start": 137,
                      "end": 138,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 140,
                      "name": "I",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": null
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
    },
    {
      "type": "ExpressionStatement",
      "start": 142,
      "end": 150,
      "expression": {
        "type": "CallExpression",
        "start": 142,
        "end": 149,
        "callee": {
          "type": "MemberExpression",
          "start": 142,
          "end": 147,
          "object": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 144,
            "end": 147,
            "name": "foo",
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
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
