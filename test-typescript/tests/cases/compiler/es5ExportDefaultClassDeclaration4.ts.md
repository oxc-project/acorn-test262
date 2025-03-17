__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 164,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 162,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "value": "foo",
        "raw": "\"foo\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 162,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 48,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 34,
              "end": 48,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 38,
                  "end": 47,
                  "id": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 47,
                    "name": "before",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 44,
                      "end": 47,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 46,
                        "end": 47,
                        "typeName": {
                          "type": "Identifier",
                          "start": 46,
                          "end": 47,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
            "type": "ExportDefaultDeclaration",
            "start": 54,
            "end": 105,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 69,
              "end": 105,
              "id": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 77,
                "end": 105,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 87,
                    "end": 99,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 87,
                      "end": 93,
                      "name": "method",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 93,
                      "end": 99,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": null,
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 95,
                        "end": 98,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 97,
                          "end": 98,
                          "typeName": {
                            "type": "Identifier",
                            "start": 97,
                            "end": 98,
                            "name": "C",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
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
              "declare": false,
              "superTypeArguments": null
            },
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 111,
            "end": 131,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 118,
              "end": 131,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 122,
                  "end": 130,
                  "id": {
                    "type": "Identifier",
                    "start": 122,
                    "end": 130,
                    "name": "after",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 127,
                      "end": 130,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 129,
                        "end": 130,
                        "typeName": {
                          "type": "Identifier",
                          "start": 129,
                          "end": 130,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
            "type": "ExportNamedDeclaration",
            "start": 137,
            "end": 160,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 144,
              "end": 160,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 148,
                  "end": 159,
                  "id": {
                    "type": "Identifier",
                    "start": 148,
                    "end": 159,
                    "name": "t",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 149,
                      "end": 159,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 151,
                        "end": 159,
                        "exprName": {
                          "type": "Identifier",
                          "start": 158,
                          "end": 159,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
