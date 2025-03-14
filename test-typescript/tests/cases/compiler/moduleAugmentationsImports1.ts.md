a.ts
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
  "sourceType": "module"
}
```
b.ts
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
                "optional": false
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
c.d.ts
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
                    "optional": false
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
              "optional": false
            },
            "implements": [],
            "superClass": null
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
        "value": "C"
      }
    }
  ],
  "sourceType": "module"
}
```
d.ts
```json
{
  "type": "Program",
  "start": 32,
  "end": 352,
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
        "value": "./a"
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "A",
            "optional": false
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
        "value": "./b"
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 78,
      "end": 100,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 96,
        "end": 99,
        "raw": "\"C\"",
        "value": "C"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 86,
          "end": 89,
          "imported": {
            "type": "Identifier",
            "start": 86,
            "end": 89,
            "decorators": [],
            "name": "Cls",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 86,
            "end": 89,
            "decorators": [],
            "name": "Cls",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 102,
      "end": 154,
      "expression": {
        "type": "AssignmentExpression",
        "start": 102,
        "end": 154,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 102,
          "end": 118,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 102,
            "end": 113,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 104,
              "end": 113,
              "decorators": [],
              "name": "prototype",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 114,
            "end": 118,
            "decorators": [],
            "name": "getB",
            "optional": false
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 121,
          "end": 154,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 133,
            "end": 154,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 135,
                "end": 152,
                "argument": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 151,
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
      "type": "ExpressionStatement",
      "start": 155,
      "end": 209,
      "expression": {
        "type": "AssignmentExpression",
        "start": 155,
        "end": 209,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 155,
          "end": 173,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 155,
            "end": 166,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 157,
              "end": 166,
              "decorators": [],
              "name": "prototype",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 167,
            "end": 173,
            "decorators": [],
            "name": "getCls",
            "optional": false
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 176,
          "end": 209,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 188,
            "end": 209,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 190,
                "end": 207,
                "argument": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 206,
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
      "start": 211,
      "end": 278,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 232,
        "end": 278,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 238,
            "end": 276,
            "body": {
              "type": "TSInterfaceBody",
              "start": 250,
              "end": 276,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 260,
                  "end": 270,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 260,
                    "end": 264,
                    "decorators": [],
                    "name": "getB",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 266,
                    "end": 269,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 268,
                      "end": 269,
                      "typeName": {
                        "type": "Identifier",
                        "start": 268,
                        "end": 269,
                        "decorators": [],
                        "name": "B",
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
              "start": 248,
              "end": 249,
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
        "start": 226,
        "end": 231,
        "raw": "\"./a\"",
        "value": "./a"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 280,
      "end": 351,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 301,
        "end": 351,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 307,
            "end": 349,
            "body": {
              "type": "TSInterfaceBody",
              "start": 319,
              "end": 349,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 329,
                  "end": 343,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 329,
                    "end": 335,
                    "decorators": [],
                    "name": "getCls",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 337,
                    "end": 342,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 339,
                      "end": 342,
                      "typeName": {
                        "type": "Identifier",
                        "start": 339,
                        "end": 342,
                        "decorators": [],
                        "name": "Cls",
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
              "start": 317,
              "end": 318,
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
        "start": 295,
        "end": 300,
        "raw": "\"./a\"",
        "value": "./a"
      }
    }
  ],
  "sourceType": "module"
}
```
main.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 112,
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
        "value": "./a"
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
      "start": 23,
      "end": 34,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 30,
        "end": 33,
        "raw": "\"d\"",
        "value": "d"
      },
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 44,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 44,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 44,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 43,
                "end": 44,
                "typeName": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
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
      "start": 46,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 74,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 54,
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
                "end": 64,
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "start": 54,
                  "end": 62,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 54,
                    "end": 60,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 54,
                      "end": 55,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 60,
                      "decorators": [],
                      "name": "getB",
                      "optional": false
                    }
                  },
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 64,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 65,
                "end": 72,
                "decorators": [],
                "name": "toFixed",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 76,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 110,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 80,
            "end": 81,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 84,
            "end": 110,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 84,
              "end": 108,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 84,
                "end": 96,
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "start": 84,
                  "end": 94,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 84,
                    "end": 92,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 85,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 92,
                      "decorators": [],
                      "name": "getCls",
                      "optional": false
                    }
                  },
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 96,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 97,
                "end": 108,
                "decorators": [],
                "name": "toLowerCase",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module"
}
```
