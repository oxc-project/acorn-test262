__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 14,
        "decorators": [],
        "name": "Drawing",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 17,
        "end": 37,
        "expression": {
          "type": "Literal",
          "start": 25,
          "end": 36,
          "raw": "'./Drawing'",
          "value": "./Drawing",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 39,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 74,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 47,
            "decorators": [],
            "name": "addr",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 50,
            "end": 74,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 54,
              "end": 72,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 54,
                "end": 66,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 61,
                  "decorators": [],
                  "name": "Drawing",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 66,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 67,
                "end": 72,
                "decorators": [],
                "name": "Adder",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
  "end": 44,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 43,
      "attributes": [],
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 7,
        "end": 43,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 18,
          "decorators": [],
          "name": "Math",
          "optional": false,
          "typeAnnotation": null
        },
        "importKind": "value",
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "start": 21,
          "end": 43,
          "expression": {
            "type": "Literal",
            "start": 29,
            "end": 42,
            "raw": "'./Math/Math'",
            "value": "./Math/Math",
            "regex": null,
            "bigint": null
          }
        }
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
  "end": 83,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "Adder",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 33,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 32,
          "raw": "'./Adder'",
          "value": "./Adder",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 66,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 44,
            "decorators": [],
            "name": "Math",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 47,
            "end": 66,
            "properties": [
              {
                "type": "Property",
                "start": 53,
                "end": 64,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 58,
                  "decorators": [],
                  "name": "Adder",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 64,
                  "decorators": [],
                  "name": "Adder",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 69,
      "end": 82,
      "expression": {
        "type": "Identifier",
        "start": 78,
        "end": 82,
        "decorators": [],
        "name": "Math",
        "optional": false,
        "typeAnnotation": null
      }
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
  "end": 79,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 62,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 62,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 60,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 21,
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 21,
              "end": 60,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 44,
                "end": 60,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 22,
                  "end": 31,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 23,
                    "end": 31,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 25,
                      "end": 31
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 33,
                  "end": 42,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 34,
                    "end": 42,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 36,
                      "end": 42
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "Adder",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSExportAssignment",
      "start": 64,
      "end": 79,
      "expression": {
        "type": "Identifier",
        "start": 73,
        "end": 78,
        "decorators": [],
        "name": "Adder",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
