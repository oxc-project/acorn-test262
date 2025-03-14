__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 67,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 67,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 34,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 28,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 34,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 31,
                "end": 34,
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
            "type": "PropertyDefinition",
            "start": 39,
            "end": 48,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 43,
              "decorators": [],
              "name": "item",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 46,
              "end": 47,
              "raw": "3",
              "value": 3
            }
          },
          {
            "type": "MethodDefinition",
            "start": 53,
            "end": 65,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 59,
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
              "start": 59,
              "end": 65,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 62,
                "end": 65,
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
        "end": 10,
        "decorators": [],
        "name": "Conn",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSExportAssignment",
      "start": 69,
      "end": 83,
      "expression": {
        "type": "Identifier",
        "start": 78,
        "end": 82,
        "decorators": [],
        "name": "Conn",
        "optional": false
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
  "end": 158,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 28,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Conn",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSImportType",
        "start": 12,
        "end": 27,
        "argument": {
          "type": "TSLiteralType",
          "start": 19,
          "end": 26,
          "literal": {
            "type": "Literal",
            "start": 19,
            "end": 26,
            "raw": "\"./foo\"",
            "value": "./foo"
          }
        },
        "options": null,
        "qualifier": null,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 48,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 48,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 44,
                "end": 48,
                "typeName": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 48,
                  "decorators": [],
                  "name": "Conn",
                  "optional": false
                }
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
      "type": "ExportNamedDeclaration",
      "start": 51,
      "end": 157,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 58,
        "end": 157,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 69,
          "end": 157,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 75,
              "end": 92,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 75,
                "end": 83,
                "decorators": [],
                "name": "connItem",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 83,
                "end": 91,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 85,
                  "end": 91
                }
              },
              "value": null
            },
            {
              "type": "MethodDefinition",
              "start": 97,
              "end": 155,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 97,
                "end": 108,
                "decorators": [],
                "name": "constructor",
                "optional": false
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 108,
                "end": 155,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 116,
                  "end": 155,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 126,
                      "end": 149,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 126,
                        "end": 148,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 126,
                          "end": 139,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 126,
                            "end": 130
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 131,
                            "end": 139,
                            "decorators": [],
                            "name": "connItem",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 142,
                          "end": 148,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 142,
                            "end": 143,
                            "decorators": [],
                            "name": "c",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 144,
                            "end": 148,
                            "decorators": [],
                            "name": "item",
                            "optional": false
                          }
                        }
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
                    "type": "AssignmentPattern",
                    "start": 109,
                    "end": 114,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 110,
                      "decorators": [],
                      "name": "c",
                      "optional": false
                    },
                    "optional": false,
                    "right": {
                      "type": "Identifier",
                      "start": 113,
                      "end": 114,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 64,
          "end": 68,
          "decorators": [],
          "name": "Wrap",
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
