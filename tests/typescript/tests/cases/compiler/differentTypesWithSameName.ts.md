__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 198,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 112,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 112,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 13,
            "end": 54,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 20,
              "end": 54,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 26,
                "end": 34,
                "decorators": [],
                "name": "variable",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 34,
                "end": 54,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 40,
                    "end": 50,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 41,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 41,
                      "end": 49,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 43,
                        "end": 49
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
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 57,
            "end": 110,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 64,
              "end": 110,
              "id": {
                "type": "Identifier",
                "start": 73,
                "end": 84,
                "decorators": [],
                "name": "doSomething",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 85,
                  "end": 98,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 86,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 88,
                      "end": 98,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 88,
                        "end": 98,
                        "left": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 89,
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 90,
                          "end": 98,
                          "decorators": [],
                          "name": "variable",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 100,
                "end": 110,
                "body": []
              },
              "expression": false
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
    {
      "type": "ClassDeclaration",
      "start": 114,
      "end": 144,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 128,
        "decorators": [],
        "name": "variable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 129,
        "end": 144,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 132,
            "end": 142,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 133,
              "end": 141,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 135,
                "end": 141
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
    },
    {
      "type": "VariableDeclaration",
      "start": 147,
      "end": 180,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 151,
          "end": 179,
          "id": {
            "type": "Identifier",
            "start": 151,
            "end": 162,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 162,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 154,
                "end": 162,
                "typeName": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 162,
                  "decorators": [],
                  "name": "variable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 165,
            "end": 179,
            "callee": {
              "type": "Identifier",
              "start": 169,
              "end": 177,
              "decorators": [],
              "name": "variable",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 181,
      "end": 198,
      "expression": {
        "type": "CallExpression",
        "start": 181,
        "end": 197,
        "callee": {
          "type": "MemberExpression",
          "start": 181,
          "end": 194,
          "object": {
            "type": "Identifier",
            "start": 181,
            "end": 182,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 183,
            "end": 194,
            "decorators": [],
            "name": "doSomething",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 195,
            "end": 196,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
