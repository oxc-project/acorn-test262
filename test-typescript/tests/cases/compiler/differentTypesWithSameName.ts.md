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
        "name": "m",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "id": {
                "type": "Identifier",
                "start": 26,
                "end": 34,
                "name": "variable",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 34,
                "end": 54,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 40,
                    "end": 50,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 41,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
                "name": "doSomething",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 85,
                  "end": 98,
                  "name": "v",
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
                          "name": "m",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 90,
                          "end": 98,
                          "name": "variable",
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
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 100,
                "end": 110,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
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
    {
      "type": "ClassDeclaration",
      "start": 114,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 128,
        "name": "variable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 129,
        "end": 144,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 132,
            "end": 142,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "name": "t",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
    {
      "type": "VariableDeclaration",
      "start": 147,
      "end": 180,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 151,
          "end": 179,
          "id": {
            "type": "Identifier",
            "start": 151,
            "end": 162,
            "name": "v",
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
                  "name": "variable",
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
          "init": {
            "type": "NewExpression",
            "start": 165,
            "end": 179,
            "callee": {
              "type": "Identifier",
              "start": 169,
              "end": 177,
              "name": "variable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
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
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 183,
            "end": 194,
            "name": "doSomething",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 195,
            "end": 196,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
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
