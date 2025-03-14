__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 17,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 17,
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
  "end": 34,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 33,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 33,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 33,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 31,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "decorators": [],
                "name": "n",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 22,
                "end": 30,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 24,
                  "end": 30
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
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "B",
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
  "end": 333,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 22,
        "raw": "\"./f1\"",
        "value": "./f1"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 9,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 25,
      "end": 76,
      "expression": {
        "type": "AssignmentExpression",
        "start": 25,
        "end": 76,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 25,
          "end": 40,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 25,
            "end": 36,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 27,
              "end": 36,
              "decorators": [],
              "name": "prototype",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 37,
            "end": 40,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 43,
          "end": 76,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 55,
            "end": 76,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 57,
                "end": 74,
                "argument": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 73,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": []
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 78,
      "end": 155,
      "body": {
        "type": "TSModuleBlock",
        "start": 90,
        "end": 155,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 96,
            "end": 122,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 103,
              "end": 122,
              "body": {
                "type": "TSInterfaceBody",
                "start": 117,
                "end": 122,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 119,
                    "end": 120,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 119,
                      "end": 120,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 113,
                "end": 116,
                "decorators": [],
                "name": "Ifc",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 127,
            "end": 153,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 134,
              "end": 153,
              "body": {
                "type": "TSInterfaceBody",
                "start": 148,
                "end": 153,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 150,
                    "end": 151,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 150,
                      "end": 151,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 144,
                "end": 147,
                "decorators": [],
                "name": "Cls",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 89,
        "decorators": [],
        "name": "N",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 157,
      "end": 332,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 179,
        "end": 332,
        "body": [
          {
            "type": "ImportDeclaration",
            "start": 185,
            "end": 208,
            "attributes": [],
            "importKind": "value",
            "source": {
              "type": "Literal",
              "start": 201,
              "end": 207,
              "raw": "\"./f2\"",
              "value": "./f2"
            },
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "start": 193,
                "end": 194,
                "imported": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 194,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                },
                "importKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 194,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 213,
            "end": 230,
            "id": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "decorators": [],
              "name": "I",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 224,
              "end": 229,
              "left": {
                "type": "Identifier",
                "start": 224,
                "end": 225,
                "decorators": [],
                "name": "N",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 226,
                "end": 229,
                "decorators": [],
                "name": "Ifc",
                "optional": false
              }
            }
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 235,
            "end": 252,
            "id": {
              "type": "Identifier",
              "start": 242,
              "end": 243,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 246,
              "end": 251,
              "left": {
                "type": "Identifier",
                "start": 246,
                "end": 247,
                "decorators": [],
                "name": "N",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 248,
                "end": 251,
                "decorators": [],
                "name": "Cls",
                "optional": false
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 257,
            "end": 330,
            "body": {
              "type": "TSInterfaceBody",
              "start": 269,
              "end": 330,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 279,
                  "end": 288,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 279,
                    "end": 282,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 284,
                    "end": 287,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 286,
                      "end": 287,
                      "typeName": {
                        "type": "Identifier",
                        "start": 286,
                        "end": 287,
                        "decorators": [],
                        "name": "B",
                        "optional": false
                      }
                    }
                  },
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 297,
                  "end": 306,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 297,
                    "end": 300,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 302,
                    "end": 305,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 304,
                      "end": 305,
                      "typeName": {
                        "type": "Identifier",
                        "start": 304,
                        "end": 305,
                        "decorators": [],
                        "name": "I",
                        "optional": false
                      }
                    }
                  },
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 315,
                  "end": 324,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 315,
                    "end": 318,
                    "decorators": [],
                    "name": "baz",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 320,
                    "end": 323,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 322,
                      "end": 323,
                      "typeName": {
                        "type": "Identifier",
                        "start": 322,
                        "end": 323,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      }
                    }
                  },
                  "static": false
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 172,
        "end": 178,
        "raw": "\"./f1\"",
        "value": "./f1"
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
  "end": 68,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 22,
        "raw": "\"./f1\"",
        "value": "./f1"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 9,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 24,
      "end": 38,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 31,
        "end": 37,
        "raw": "\"./f3\"",
        "value": "./f3"
      },
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 40,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 48,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 48,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 47,
                "end": 48,
                "typeName": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 68,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 67,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 58,
            "end": 67,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 58,
              "end": 65,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 58,
                "end": 63,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 63,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "n",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
