__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 96,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 96,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 21,
          "end": 96,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 27,
              "end": 94,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 34,
                "end": 41,
                "decorators": [],
                "name": "timeout",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 41,
                "end": 94,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 66,
                  "end": 94,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 76,
                      "end": 88,
                      "argument": {
                        "type": "Literal",
                        "start": 83,
                        "end": 87,
                        "raw": "null",
                        "value": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 42,
                    "end": 55,
                    "decorators": [],
                    "name": "delay",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 47,
                      "end": 55,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 49,
                        "end": 55
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 56,
                  "end": 65,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 58,
                    "end": 65,
                    "typeName": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 65,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false
                    }
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 20,
          "decorators": [],
          "name": "Promise",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 171,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "WinJS",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 53,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 52,
          "raw": "'staticInstanceResolution5_0'",
          "value": "staticInstanceResolution5_0"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 110,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 92,
            "end": 110,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 107,
              "end": 110,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 93,
                "end": 102,
                "decorators": [],
                "name": "w1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 95,
                  "end": 102,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 97,
                    "end": 102,
                    "typeName": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 102,
                      "decorators": [],
                      "name": "WinJS",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 112,
      "end": 144,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 144,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 117,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 120,
            "end": 144,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 141,
              "end": 144,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 130,
                "end": 139,
                "decorators": [],
                "name": "w2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 132,
                  "end": 139,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 134,
                    "end": 139,
                    "typeName": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 139,
                      "decorators": [],
                      "name": "WinJS",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 145,
      "end": 170,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 167,
        "end": 170,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 155,
        "decorators": [],
        "name": "z",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 156,
          "end": 165,
          "decorators": [],
          "name": "w3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 158,
            "end": 165,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 160,
              "end": 165,
              "typeName": {
                "type": "Identifier",
                "start": 160,
                "end": 165,
                "decorators": [],
                "name": "WinJS",
                "optional": false
              }
            }
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
