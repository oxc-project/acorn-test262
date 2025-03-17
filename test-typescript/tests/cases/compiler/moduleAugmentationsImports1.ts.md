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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 17,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 17,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 27,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 27,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 16,
              "end": 26,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 16,
                "end": 17,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
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
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "value": "C",
        "raw": "\"C\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 50,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 25,
            "end": 48,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 34,
              "name": "Cls",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 35,
              "end": 48,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 36,
                  "end": 46,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 37,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "end": 352,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 32,
      "end": 54,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 40,
          "end": 41,
          "imported": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 48,
        "end": 53,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 55,
      "end": 77,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 63,
          "end": 64,
          "imported": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 71,
        "end": 76,
        "value": "./b",
        "raw": "\"./b\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 78,
      "end": 100,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 86,
          "end": 89,
          "imported": {
            "type": "Identifier",
            "start": 86,
            "end": 89,
            "name": "Cls",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 86,
            "end": 89,
            "name": "Cls",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 96,
        "end": 99,
        "value": "C",
        "raw": "\"C\""
      },
      "attributes": [],
      "importKind": "value"
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
          "object": {
            "type": "MemberExpression",
            "start": 102,
            "end": 113,
            "object": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 104,
              "end": 113,
              "name": "prototype",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 114,
            "end": 118,
            "name": "getB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 121,
          "end": 154,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
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
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
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
          "object": {
            "type": "MemberExpression",
            "start": 155,
            "end": 166,
            "object": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 157,
              "end": 166,
              "name": "prototype",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 167,
            "end": 173,
            "name": "getCls",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 176,
          "end": 209,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
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
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 211,
      "end": 278,
      "id": {
        "type": "Literal",
        "start": 226,
        "end": 231,
        "value": "./a",
        "raw": "\"./a\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 232,
        "end": 278,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 238,
            "end": 276,
            "id": {
              "type": "Identifier",
              "start": 248,
              "end": 249,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 250,
              "end": 276,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 260,
                  "end": 270,
                  "key": {
                    "type": "Identifier",
                    "start": 260,
                    "end": 264,
                    "name": "getB",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
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
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 280,
      "end": 351,
      "id": {
        "type": "Literal",
        "start": 295,
        "end": 300,
        "value": "./a",
        "raw": "\"./a\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 301,
        "end": 351,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 307,
            "end": 349,
            "id": {
              "type": "Identifier",
              "start": 317,
              "end": 318,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 319,
              "end": 349,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 329,
                  "end": 343,
                  "key": {
                    "type": "Identifier",
                    "start": 329,
                    "end": 335,
                    "name": "getCls",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
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
                        "name": "Cls",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "end": 112,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 22,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 9,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 21,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 23,
      "end": 34,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 30,
        "end": 33,
        "value": "d",
        "raw": "\"d\""
      },
      "attributes": [],
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 44,
            "name": "a",
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
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 54,
            "end": 74,
            "callee": {
              "type": "MemberExpression",
              "start": 54,
              "end": 72,
              "object": {
                "type": "MemberExpression",
                "start": 54,
                "end": 64,
                "object": {
                  "type": "CallExpression",
                  "start": 54,
                  "end": 62,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 54,
                    "end": 60,
                    "object": {
                      "type": "Identifier",
                      "start": 54,
                      "end": 55,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 60,
                      "name": "getB",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 64,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 65,
                "end": 72,
                "name": "toFixed",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 80,
            "end": 81,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 84,
            "end": 110,
            "callee": {
              "type": "MemberExpression",
              "start": 84,
              "end": 108,
              "object": {
                "type": "MemberExpression",
                "start": 84,
                "end": 96,
                "object": {
                  "type": "CallExpression",
                  "start": 84,
                  "end": 94,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 84,
                    "end": 92,
                    "object": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 85,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 92,
                      "name": "getCls",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 96,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 97,
                "end": 108,
                "name": "toLowerCase",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
