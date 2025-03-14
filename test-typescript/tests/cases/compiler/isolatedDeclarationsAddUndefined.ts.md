file1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 110,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 11,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "N",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSLiteralType",
        "start": 9,
        "end": 10,
        "literal": {
          "type": "Literal",
          "start": 9,
          "end": 10,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 12,
      "end": 109,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 19,
        "end": 109,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 29,
          "end": 109,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 35,
              "end": 58,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 35,
                "end": 36,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": true,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "TSAsExpression",
                "start": 40,
                "end": 57,
                "expression": {
                  "type": "ArrayExpression",
                  "start": 40,
                  "end": 48,
                  "elements": [
                    {
                      "type": "TSAsExpression",
                      "start": 41,
                      "end": 47,
                      "expression": {
                        "type": "Literal",
                        "start": 41,
                        "end": 42,
                        "raw": "2",
                        "value": 2
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 46,
                        "end": 47,
                        "typeName": {
                          "type": "Identifier",
                          "start": 46,
                          "end": 47,
                          "decorators": [],
                          "name": "N",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 52,
                  "end": 57,
                  "typeName": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 57,
                    "decorators": [],
                    "name": "const",
                    "optional": false
                  }
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 63,
              "end": 76,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 63,
                "end": 65,
                "decorators": [],
                "name": "c3",
                "optional": false
              },
              "optional": true,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "TSAsExpression",
                "start": 69,
                "end": 75,
                "expression": {
                  "type": "Literal",
                  "start": 69,
                  "end": 70,
                  "raw": "1",
                  "value": 1
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 74,
                  "end": 75,
                  "typeName": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 75,
                    "decorators": [],
                    "name": "N",
                    "optional": false
                  }
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 81,
              "end": 96,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 90,
                "end": 91,
                "decorators": [],
                "name": "r",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "value": {
                "type": "Literal",
                "start": 94,
                "end": 95,
                "raw": "1",
                "value": 1
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 101,
              "end": 107,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 101,
                "end": 102,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "Literal",
                "start": 105,
                "end": 106,
                "raw": "2",
                "value": 2
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 25,
          "end": 28,
          "decorators": [],
          "name": "Bar",
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
  "sourceType": "module"
}
```
file2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 207,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 66,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 66,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 63,
          "end": 66,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 20,
            "end": 56,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "p",
              "optional": false
            },
            "optional": false,
            "right": {
              "type": "ArrowFunctionExpression",
              "start": 24,
              "end": 56,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 54,
                "end": 56,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 25,
                  "end": 32,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 27,
                    "decorators": [],
                    "name": "ip",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 30,
                    "end": 32,
                    "raw": "10",
                    "value": 10
                  }
                },
                {
                  "type": "Identifier",
                  "start": 34,
                  "end": 43,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 43,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 37,
                      "end": 43
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 44,
                "end": 50,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 46,
                  "end": 50
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 57,
          "end": 63,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 59,
            "end": 63
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 67,
      "end": 82,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 73,
        "decorators": [],
        "name": "T",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 76,
        "end": 82
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 83,
      "end": 154,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 90,
        "end": 154,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 152,
          "end": 154,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 99,
          "end": 103,
          "decorators": [],
          "name": "foo2",
          "optional": false
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 104,
            "end": 145,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "decorators": [],
              "name": "p",
              "optional": false
            },
            "optional": false,
            "right": {
              "type": "ArrowFunctionExpression",
              "start": 108,
              "end": 145,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 143,
                "end": 145,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 109,
                  "end": 121,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 111,
                    "decorators": [],
                    "name": "ip",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "TSAsExpression",
                    "start": 114,
                    "end": 121,
                    "expression": {
                      "type": "Literal",
                      "start": 114,
                      "end": 116,
                      "raw": "10",
                      "value": 10
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 120,
                      "end": 121,
                      "typeName": {
                        "type": "Identifier",
                        "start": 120,
                        "end": 121,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 123,
                  "end": 132,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 124,
                    "end": 132,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 126,
                      "end": 132
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 133,
                "end": 139,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 135,
                  "end": 139
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 146,
          "end": 152,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 148,
            "end": 152
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 155,
      "end": 207,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 162,
        "end": 207,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 173,
          "end": 207,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 179,
              "end": 194,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 188,
                "end": 189,
                "decorators": [],
                "name": "r",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "value": {
                "type": "Literal",
                "start": 192,
                "end": 193,
                "raw": "1",
                "value": 1
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 199,
              "end": 205,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 199,
                "end": 200,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "Literal",
                "start": 203,
                "end": 204,
                "raw": "2",
                "value": 2
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 168,
          "end": 172,
          "decorators": [],
          "name": "Bar2",
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
  "sourceType": "module"
}
```
