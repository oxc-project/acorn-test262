external.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 124,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 18,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 18,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 18,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
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
      "start": 19,
      "end": 47,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 26,
        "end": 47,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 44,
          "end": 47,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 32,
          "end": 33,
          "decorators": [],
          "name": "B",
          "optional": false
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 42,
          "end": 43,
          "decorators": [],
          "name": "A",
          "optional": false
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 69,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 69,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 69,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 66,
                "end": 69
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 72,
      "end": 123,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 85,
        "end": 123,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 91,
            "end": 121,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 97,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 97,
              "end": 121,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 114,
                "end": 121,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 103,
                  "end": 112,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 98,
                      "end": 102,
                      "expression": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 102,
                        "decorators": [],
                        "name": "dec",
                        "optional": false
                      }
                    }
                  ],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 104,
                    "end": 112,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 106,
                      "end": 112
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 72,
          "end": 76,
          "expression": {
            "type": "Identifier",
            "start": 73,
            "end": 76,
            "decorators": [],
            "name": "dec",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "module"
}
```
script.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 110,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 12,
      "end": 33,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 33,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 55,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 55,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 55,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 52,
                "end": 55
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 58,
      "end": 109,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 71,
        "end": 109,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 77,
            "end": 107,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 83,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 83,
              "end": 107,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 100,
                "end": 107,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 89,
                  "end": 98,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 84,
                      "end": 88,
                      "expression": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 88,
                        "decorators": [],
                        "name": "dec",
                        "optional": false
                      }
                    }
                  ],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 90,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 92,
                      "end": 98
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 58,
          "end": 62,
          "expression": {
            "type": "Identifier",
            "start": 59,
            "end": 62,
            "decorators": [],
            "name": "dec",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 70,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "module"
}
```
