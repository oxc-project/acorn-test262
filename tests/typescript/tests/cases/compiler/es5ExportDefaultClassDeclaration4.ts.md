__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 15,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "before",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 46,
                          "end": 47
                        },
                        "typeArguments": null,
                        "start": 46,
                        "end": 47
                      },
                      "start": 44,
                      "end": 47
                    },
                    "start": 38,
                    "end": 47
                  },
                  "init": null,
                  "definite": false,
                  "start": 38,
                  "end": 47
                }
              ],
              "declare": false,
              "start": 34,
              "end": 48
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 27,
            "end": 48
          },
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 76
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "method",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 87,
                      "end": 93
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 97,
                            "end": 98
                          },
                          "typeArguments": null,
                          "start": 97,
                          "end": 98
                        },
                        "start": 95,
                        "end": 98
                      },
                      "body": null,
                      "expression": false,
                      "start": 93,
                      "end": 99
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 87,
                    "end": 99
                  }
                ],
                "start": 77,
                "end": 105
              },
              "abstract": false,
              "declare": false,
              "start": 69,
              "end": 105
            },
            "exportKind": "value",
            "start": 54,
            "end": 105
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "after",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 129,
                          "end": 130
                        },
                        "typeArguments": null,
                        "start": 129,
                        "end": 130
                      },
                      "start": 127,
                      "end": 130
                    },
                    "start": 122,
                    "end": 130
                  },
                  "init": null,
                  "definite": false,
                  "start": 122,
                  "end": 130
                }
              ],
              "declare": false,
              "start": 118,
              "end": 131
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 111,
            "end": 131
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 158,
                          "end": 159
                        },
                        "typeArguments": null,
                        "start": 151,
                        "end": 159
                      },
                      "start": 149,
                      "end": 159
                    },
                    "start": 148,
                    "end": 159
                  },
                  "init": null,
                  "definite": false,
                  "start": 148,
                  "end": 159
                }
              ],
              "declare": false,
              "start": 144,
              "end": 160
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 137,
            "end": 160
          }
        ],
        "start": 21,
        "end": 162
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 162
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 163
}
```
