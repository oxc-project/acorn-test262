__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 163,
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 38,
                  "end": 47,
                  "id": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 47,
                    "decorators": [],
                    "name": "before",
                    "optional": false,
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
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportDefaultDeclaration",
            "start": 54,
            "end": 105,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 69,
              "end": 105,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 77,
                "end": 105,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 87,
                    "end": 99,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 87,
                      "end": 93,
                      "decorators": [],
                      "name": "method",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 93,
                      "end": 99,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
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
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "body": null,
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 122,
                  "end": 130,
                  "id": {
                    "type": "Identifier",
                    "start": 122,
                    "end": 130,
                    "decorators": [],
                    "name": "after",
                    "optional": false,
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
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 137,
            "end": 160,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 144,
              "end": 160,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 148,
                  "end": 159,
                  "id": {
                    "type": "Identifier",
                    "start": 148,
                    "end": 159,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
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
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
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
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
