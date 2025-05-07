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
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
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
  "end": 28,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 27,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 27,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 16,
              "end": 26,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 16,
                "end": 17,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 17,
                "end": 25,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 19,
                  "end": 25
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
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
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
  "end": 51,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 50,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 50,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 25,
            "end": 48,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 35,
              "end": 48,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 36,
                  "end": 46,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 37,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 37,
                    "end": 45,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 39,
                      "end": 45
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
              "start": 31,
              "end": 34,
              "decorators": [],
              "name": "Cls",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "raw": "\"C\"",
        "value": "C",
        "regex": null,
        "bigint": null
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
  "start": 32,
  "end": 201,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 32,
      "end": 54,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 48,
        "end": 53,
        "raw": "\"./a\"",
        "value": "./a",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 40,
          "end": 41,
          "imported": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 55,
      "end": 77,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 71,
        "end": 76,
        "raw": "\"./b\"",
        "value": "./b",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 63,
          "end": 64,
          "imported": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 131,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 79,
        "end": 131,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 79,
          "end": 95,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 79,
            "end": 90,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 81,
              "end": 90,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 91,
            "end": 95,
            "decorators": [],
            "name": "getB",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 98,
          "end": 131,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 110,
            "end": 131,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 112,
                "end": 129,
                "argument": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 128,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 133,
      "end": 200,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 154,
        "end": 200,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 160,
            "end": 198,
            "body": {
              "type": "TSInterfaceBody",
              "start": 172,
              "end": 198,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 182,
                  "end": 192,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 186,
                    "decorators": [],
                    "name": "getB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 188,
                    "end": 191,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 190,
                      "end": 191,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 190,
                        "end": 191,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 148,
        "end": 153,
        "raw": "\"./a\"",
        "value": "./a",
        "regex": null,
        "bigint": null
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
  "end": 175,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 22,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 21,
        "raw": "\"./a\"",
        "value": "./a",
        "regex": null,
        "bigint": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 23,
      "end": 45,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 41,
        "end": 44,
        "raw": "\"C\"",
        "value": "C",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 31,
          "end": 34,
          "imported": {
            "type": "Identifier",
            "start": 31,
            "end": 34,
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 31,
            "end": 34,
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 101,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 47,
        "end": 101,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 47,
          "end": 65,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 47,
            "end": 58,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 49,
              "end": 58,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 59,
            "end": 65,
            "decorators": [],
            "name": "getCls",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 68,
          "end": 101,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 80,
            "end": 101,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 82,
                "end": 99,
                "argument": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 98,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 103,
      "end": 174,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 124,
        "end": 174,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 130,
            "end": 172,
            "body": {
              "type": "TSInterfaceBody",
              "start": 142,
              "end": 172,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 152,
                  "end": 166,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 158,
                    "decorators": [],
                    "name": "getCls",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 160,
                    "end": 165,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 162,
                      "end": 165,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 162,
                        "end": 165,
                        "decorators": [],
                        "name": "Cls",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 118,
        "end": 123,
        "raw": "\"./a\"",
        "value": "./a",
        "regex": null,
        "bigint": null
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
  "end": 123,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 22,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 21,
        "raw": "\"./a\"",
        "value": "./a",
        "regex": null,
        "bigint": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 23,
      "end": 34,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 30,
        "end": 33,
        "raw": "\"d\"",
        "value": "d",
        "regex": null,
        "bigint": null
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 35,
      "end": 46,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 42,
        "end": 45,
        "raw": "\"e\"",
        "value": "e",
        "regex": null,
        "bigint": null
      },
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 56,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 56,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 56,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 58,
      "end": 87,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 86,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 66,
            "end": 86,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 66,
              "end": 84,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 66,
                "end": 76,
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "start": 66,
                  "end": 74,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 66,
                    "end": 72,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 66,
                      "end": 67,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 68,
                      "end": 72,
                      "decorators": [],
                      "name": "getB",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 77,
                "end": 84,
                "decorators": [],
                "name": "toFixed",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 88,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 122,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 96,
            "end": 122,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 96,
              "end": 120,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 96,
                "end": 108,
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "start": 96,
                  "end": 106,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 96,
                    "end": 104,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 97,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 104,
                      "decorators": [],
                      "name": "getCls",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 108,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 109,
                "end": 120,
                "decorators": [],
                "name": "toLowerCase",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
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
