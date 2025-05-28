__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 62,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 32,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 32,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 21,
          "decorators": [],
          "name": "Input",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 23,
          "end": 28,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 25,
            "end": 28
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 29,
          "end": 32,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 61,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 40,
        "end": 61,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 46,
          "end": 57,
          "decorators": [],
          "name": "TemplateRef",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 58,
          "end": 61,
          "body": []
        },
        "abstract": false,
        "declare": false
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
  "end": 202,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 44,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "Input",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "Input",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 16,
          "end": 27,
          "imported": {
            "type": "Identifier",
            "start": 16,
            "end": 27,
            "decorators": [],
            "name": "TemplateRef",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 16,
            "end": 27,
            "decorators": [],
            "name": "TemplateRef",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 35,
        "end": 43,
        "value": "./deps",
        "raw": "'./deps'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 202,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 53,
        "end": 202,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 59,
          "end": 70,
          "decorators": [],
          "name": "MyComponent",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 71,
          "end": 202,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 77,
              "end": 95,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 77,
                "end": 81,
                "decorators": [],
                "name": "_ref",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 81,
                "end": 94,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 83,
                  "end": 94,
                  "typeName": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 94,
                    "decorators": [],
                    "name": "TemplateRef",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
            },
            {
              "type": "MethodDefinition",
              "start": 101,
              "end": 145,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 101,
                  "end": 109,
                  "expression": {
                    "type": "CallExpression",
                    "start": 102,
                    "end": 109,
                    "callee": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 107,
                      "decorators": [],
                      "name": "Input",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  }
                }
              ],
              "key": {
                "type": "Identifier",
                "start": 118,
                "end": 121,
                "decorators": [],
                "name": "ref",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 121,
                "end": 145,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 124,
                  "end": 145,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 126,
                      "end": 143,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 133,
                        "end": 142,
                        "object": {
                          "type": "ThisExpression",
                          "start": 133,
                          "end": 137
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 138,
                          "end": 142,
                          "decorators": [],
                          "name": "_ref",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 150,
              "end": 200,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 154,
                "end": 157,
                "decorators": [],
                "name": "ref",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 157,
                "end": 200,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 158,
                    "end": 176,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 163,
                      "end": 176,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 165,
                        "end": 176,
                        "typeName": {
                          "type": "Identifier",
                          "start": 165,
                          "end": 176,
                          "decorators": [],
                          "name": "TemplateRef",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 178,
                  "end": 200,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 180,
                      "end": 198,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 180,
                        "end": 197,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 180,
                          "end": 189,
                          "object": {
                            "type": "ThisExpression",
                            "start": 180,
                            "end": 184
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 185,
                            "end": 189,
                            "decorators": [],
                            "name": "_ref",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 192,
                          "end": 197,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "directive": null
                    }
                  ]
                },
                "expression": false
              },
              "kind": "set",
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
