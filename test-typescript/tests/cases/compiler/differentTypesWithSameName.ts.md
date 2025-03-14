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
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 112,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 13,
            "end": 54,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 20,
              "end": 54,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 34,
                "end": 54,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 40,
                    "end": 50,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 41,
                      "decorators": [],
                      "name": "s",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
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
                    "value": null
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 26,
                "end": 34,
                "decorators": [],
                "name": "variable",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 57,
            "end": 110,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 64,
              "end": 110,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 100,
                "end": 110,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 73,
                "end": 84,
                "decorators": [],
                "name": "doSomething",
                "optional": false
              },
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
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 90,
                          "end": 98,
                          "decorators": [],
                          "name": "variable",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              ]
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "m",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 114,
      "end": 144,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 129,
        "end": 144,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 132,
            "end": 142,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "decorators": [],
              "name": "t",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 128,
        "decorators": [],
        "name": "variable",
        "optional": false
      },
      "implements": [],
      "superClass": null
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
          "definite": false,
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
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 165,
            "end": 179,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 169,
              "end": 177,
              "decorators": [],
              "name": "variable",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 181,
      "end": 198,
      "expression": {
        "type": "CallExpression",
        "start": 181,
        "end": 197,
        "arguments": [
          {
            "type": "Identifier",
            "start": 195,
            "end": 196,
            "decorators": [],
            "name": "v",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 181,
          "end": 194,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 181,
            "end": 182,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 183,
            "end": 194,
            "decorators": [],
            "name": "doSomething",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
