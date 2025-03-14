typeQueryWithReservedWords.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 291,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 80,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 17,
        "end": 80,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 23,
            "end": 39,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 29,
              "decorators": [],
              "name": "create",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 39,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 32,
                "end": 39,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 44,
            "end": 60,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 50,
              "decorators": [],
              "name": "delete",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 50,
              "end": 60,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 53,
                "end": 60,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 78,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 68,
              "decorators": [],
              "name": "var",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 68,
              "end": 78,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 71,
                "end": 78,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 16,
        "decorators": [],
        "name": "Controller",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 82,
      "end": 290,
      "body": {
        "type": "TSInterfaceBody",
        "start": 99,
        "end": 290,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 105,
            "end": 148,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 111,
              "decorators": [],
              "name": "create",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 147,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 113,
                "end": 147,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 120,
                  "end": 147,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 120,
                    "end": 140,
                    "left": {
                      "type": "Identifier",
                      "start": 120,
                      "end": 130,
                      "decorators": [],
                      "name": "Controller",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 140,
                      "decorators": [],
                      "name": "prototype",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 147,
                    "decorators": [],
                    "name": "create",
                    "optional": false
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 155,
            "end": 198,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 161,
              "decorators": [],
              "name": "delete",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 161,
              "end": 197,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 163,
                "end": 197,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 170,
                  "end": 197,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 170,
                    "end": 190,
                    "left": {
                      "type": "Identifier",
                      "start": 170,
                      "end": 180,
                      "decorators": [],
                      "name": "Controller",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 190,
                      "decorators": [],
                      "name": "prototype",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 197,
                    "decorators": [],
                    "name": "delete",
                    "optional": false
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 224,
            "end": 261,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 224,
              "end": 227,
              "decorators": [],
              "name": "var",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 227,
              "end": 260,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 229,
                "end": 260,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 236,
                  "end": 260,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 236,
                    "end": 256,
                    "left": {
                      "type": "Identifier",
                      "start": 236,
                      "end": 246,
                      "decorators": [],
                      "name": "Controller",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 247,
                      "end": 256,
                      "decorators": [],
                      "name": "prototype",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 257,
                    "end": 260,
                    "decorators": [],
                    "name": "var",
                    "optional": false
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 98,
        "decorators": [],
        "name": "IScope",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
