foo1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 40,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 40,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 26,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 28,
            "end": 38,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 37,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 31,
                "end": 37
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "I1",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 72,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 51,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 51,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 49,
                "end": 51,
                "typeName": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 51,
                  "decorators": [],
                  "name": "I1",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 54,
            "end": 72,
            "properties": [
              {
                "type": "Property",
                "start": 55,
                "end": 64,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 58,
                  "end": 64,
                  "raw": "\"test\"",
                  "value": "test"
                }
              },
              {
                "type": "Property",
                "start": 66,
                "end": 71,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 67,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 69,
                  "end": 71,
                  "raw": "42",
                  "value": 42
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
      "type": "TSExportAssignment",
      "start": 74,
      "end": 85,
      "expression": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
foo2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 40,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 40,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 26,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 28,
            "end": 38,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 37,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 31,
                "end": 37
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "I1",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 42,
      "end": 63,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 51,
        "end": 63,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 54,
            "end": 61,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 56,
              "decorators": [],
              "name": "m1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 60,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 58,
                "end": 60,
                "typeName": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 60,
                  "decorators": [],
                  "name": "I1",
                  "optional": false
                }
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
        "start": 48,
        "end": 50,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSExportAssignment",
      "start": 65,
      "end": 77,
      "expression": {
        "type": "Identifier",
        "start": 74,
        "end": 76,
        "decorators": [],
        "name": "C1",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
foo3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 170,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 40,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 40,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 26,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 28,
            "end": 38,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 37,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 31,
                "end": 37
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "I1",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 42,
      "end": 71,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 51,
        "end": 71,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 54,
            "end": 69,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 64,
              "decorators": [],
              "name": "m1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 68,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 66,
                "end": 68,
                "typeName": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 68,
                  "decorators": [],
                  "name": "I1",
                  "optional": false
                }
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
        "start": 48,
        "end": 50,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSExportAssignment",
      "start": 73,
      "end": 85,
      "expression": {
        "type": "Identifier",
        "start": 82,
        "end": 84,
        "decorators": [],
        "name": "C1",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
